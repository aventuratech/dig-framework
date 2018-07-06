Security
--------

Managing security in a client based application is a two level process:

* Platform (Firebase): this is where the actual security happens; we access control using Firestore rules.
* Client (DigFramework): we query the user details from Firebase, then implement access control in the UI.

The critical key here is that on the client we are providing access control for usability sake; managers only see what
they have access to. Regarless, they can't actually do anything to the data without platform level access.

Firebase Security
-----------------

You can manage Firebase through the app console, but we prefer to include this configuration in the application.

### Create your managers collection

We use a collection called dig/managers to mangage access control. At the time of writing you need to manually manage this
but we have a CLI tool in process that will automate this soon.

1. Go to the authentication section in the Firebase console and copy your user id from the list of users (you must log in 
at least once before you do this).
2. Create a collection if Firestore called `dig/managers`, adding the following document, using your id as the document id:

```json
{
    "email": "your-email",
    "role": "admin"
}
```

### Setup the Firebase Project

To get started install `firebase-tools` if you don't already have it:

    npm install -g firebase-tools
    
Then initialize the Firebase project:

    firebase init
    
You will be guided through configuring your project. 

1. Select your project
2. Select any features you want, but make sure that you include Firestore
3. In the Firestore options accept the defaults for the filenames

### Configure your rules

Open `firestore.rules` in your editor of choice, then add the following default security rules:

    service cloud.firestore {
      match /databases/{database}/documents {
        match /dig/data/{document=**} {
          allow read;
          allow write: if exists(/databases/$(database)/documents/dig/managers/$(request.auth.uid))
        }
        match /dig/managers/{userId} {
            allow read: if request.auth.uid == userId;
        }
        match /dig/managers/{userId}/role {
            allow write: if false;
        }
      }
    }

These rules enforce the following:

* Anyone can read the public data that Dig saves
* Only managers can write public data
* A manager can read their record in the managers table
* Nobody can write to the managers table (we manage this through the Firebase Console)

[Learn more about Firestore security rules](https://firebase.google.com/docs/firestore/security/rules-conditions)

__Note that we are only worrying about Dig specific data, and you should include any Firestore rules that you already
have to this file as well. This will overwrite any existing rules!__

## Deploy your rules

Once this is done you can deploy your rules using `firebase-tools`:

`firebase deploy --only firestore`

Your system is now properly configured to utilize Dig security!






