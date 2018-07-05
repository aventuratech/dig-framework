Getting Started
===============

Install Application
-------------------

First create your React app. We like `create-react-app` but there are no dependencies on it:

`npx create-react-app quickstart`

The application is built around the concept of pages, so we always use routing:

`npm i react-router-dom`

Next install the DigFramework

`npm install dig-framework`

At this point you should be able to run your project (which will render the default create-react-app).

`npm run start`

Now you are ready to configure and build your app.

Create Firebase Project
-----------------------

At this point the system is built on the Google Cloud Platform. We intend to abstract this for other
platforms such as AWS, but for now you need a Firebase (which is pretty damn awesome these days) project to get started.

First go to [Firebase](https://console.firebase.google.com/u/0/) and create a new project or select an existing one.
Note that we store all of our data as a sub-collection in Firestore, so you don't need to worry about existing collections.

### Enable data

Next open the project console and configure the Firebase app.  We use the Firestore document database and Firebase cloud 
storage. Enable both of these services.

### Authentication

The current MVC only supports Facebook SSO, but we are in the process of supporting the following Auth methods:

* Email: standard email / password flow [todo]
* Facebook: Single sign on
* Google: Single sign on [todo]
* GitHub: Single sign on [todo]

Configure and enable your authentication method of choice in Firebase.

### Firebase Config

Once your Firebase app is configured you are ready to configure your DigFramework app.

1. Go to Firebase project settings
2. Click `Add Firebase to your web app`
3. Copy the configuration object

Configure Dig Framework
----------------------

The final step is connecting DigFramework to your Firebase project. This is the minimal application configuration in action:

```javascript
import {DigUi} from "dig-framework/ui/DigUi";
import React from 'react';

const appConfig = {
  firebase: {
    apiKey: "###",
    authDomain: "yourapp.firebaseapp.com",
    databaseURL: "https://yourapp.firebaseio.com",
    projectId: "yourapp",
    storageBucket: "yourapp.appspot.com",
    messagingSenderId: "###"
  }
}

const MyPage = ({children}) => {
  return (
    <DigUi
      app={appConfig}
      title="Dig Framework"
    >
      <div>Hello from Dig Framework!</div>
    </DigUi>
  )
}

export default MyPage;
```

