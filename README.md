DigFramework
============

Installation
------------

`npm install dig-framework`

UI Components
-------------

### DigUi

This component renders the main DigUi which is built on MaterialUi.

```javascript
import {DigUi} from "dig-framework/ui/DigUi";
import grey from "@material-ui/core/colors/grey";
import lightBlue from "@material-ui/core/colors/lightBlue";
import React from 'react';
import PropTypes from 'prop-types';
import LayoutNav from "./LayoutNav/LayoutNav";
import LayoutToolbar from "./LayoutToolbar/LayoutToolbar";

/**
 * Configure the MaterialUi theme
 * Visit https://material-ui.com/customization/default-theme to see all theme options
 *
 * @type object
 */
const themeConfig = {
  palette: {
    primary: {
      dark: lightBlue[800],
      main: lightBlue[700],
      light: lightBlue[500],
      contrastText: "rgba(255,255,255,0.5)"
    },
    secondary: {
      dark: grey[600],
      light: grey[400],
      main: grey[500]
    },
    form: {
      dark: grey[300],
      main: grey[200],
      light: grey[100],
      body: "#ffffff"
    },
    text: {
      secondary: "#757575"
    },
    type: "light"
  },
  overrides: {
    Paper: {
      // Name of the component ⚛️ / style sheet
      root: {
        // Name of the rule
        background: "white"
      }
    }
  }
}

const appConfig = {
  firebase: {
    apiKey: "###",
    authDomain: "yourapp.firebaseapp.com",
    databaseURL: "https://yourapp.firebaseio.com",
    projectId: "yourapp",
    storageBucket: "yourapp.appspot.com",
    messagingSenderId: "###"
  },
  auth: 'facebook',
  client: {
    cache: 5 * 60 * 1000 // cache all requests for 5 minutes
  }
}

const Layout = ({children}) => {
  return (
    <DigUi
      app={appConfig}
      nav={<LayoutNav/>}
      toolbar={<LayoutToolbar/>}
      theme={themeConfig}
      title="DigitalusFramework"
    >
      {children}
    </DigUi>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout;
```

### Navigation

By default the UI displays a home icon which routes to the root and an account icon which displays account preferences.

You can customize this by passing a Nav component to the `DigUi` nav property. The Nav component should render a collection of
`DigUiNavItem`

```javascript
import {DigUiNavItem} from "dig-framework/ui/DigUi"

import PostIcon from "@material-ui/icons/CloudDownload";
import React from 'react';
import withDig from "dig-framework/core/withDig/withDig";

const LayoutNav = (props) => {
  return (
    <div>
      <DigUiNavItem
        href="/posts"
        icon={<PostIcon />}
        text="Manage Posts"
      />
    </div>
  )
}

export default withDig(LayoutNav);
```

Higher Order Components
-----------------------

### withDig()

This component injects the dig state into your components, giving you easy access to any clients that you configured
in your application.

* digUser: the current authenticated user
* digClient: the dig client factory, used to fetch preconfigured and authenticated api clients

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import withDig from "dig-framework/core/withDig/withDig";

class Dashboard extends React.Component {
  static propTypes = {
    digClient: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user: this.props.digUser
    }
  }

  componentWillMount() {
    const firebase = this.props.digClient.get('firebase');
    firebase.get('/posts').then(posts => this.setState({posts}));
  }

  render() {
    return (
      <div>Component: Dashboard</div>
    )
  }
}

export default withDig(Dashboard);
```

Data Access
-----------

All of the data access is directed through DigClient. These clients follow a straightforward REST interface, exposing
all of the standard REST verbs.

```javascript
const firebase = digClient.get('firebase');

// get the posts collection
const options = {};

// fetch all posts
firebase.get('/posts', options).then(posts => {}); 

// fetch a specific post
firebase.get('/posts/id', options).then(post => {}); 

// create a post
firebase.post('/posts', {...postData}, options).then(postId => {}); 

// update a post
firebase.patch('/posts', {...newData}, options).then(postId => {}); 

// replace a post
firebase.put('/posts', {...postData}, options).then(postId => {}); 

// delete a post
firebase.delete('/posts', {...postData}, options).then(result => {}); 
```