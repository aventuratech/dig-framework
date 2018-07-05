/**
 * Created by forrestlyman on 7/4/18
 */

import {DigUi} from "dig-framework";
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
    apiKey: "AIzaSyAKrl5ino4g3c8woQA_b4_gCZh5uGOknQY",
    authDomain: "digframework.firebaseapp.com",
    databaseURL: "https://digframework.firebaseio.com",
    projectId: "digframework",
    storageBucket: "digframework.appspot.com",
    messagingSenderId: "665483813593"
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