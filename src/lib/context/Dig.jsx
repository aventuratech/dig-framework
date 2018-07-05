import PropTypes from 'prop-types';
import React from "react";
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
export const DigContext = React.createContext();

const userKey = "dig-user";

export class DigProvider extends React.Component {
  static propTypes = {
    appConfig: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {
      appConfig: Object.assign({}, this.props.appConfig),
      status: false,
      user: false,
      connect: this.connect,
      disconnect: this.disconnect
    };
  }

  componentWillMount() {
    if (localStorage.getItem(userKey)) {
      const user = JSON.parse(localStorage.getItem(userKey));
      this.setState({ user });
    }

    // watch for the response
    this.firebase().auth()
      .getRedirectResult()
      .then(result => {
        if (result.user && result.credential) {

          this.setState({ status: "pending" });

          const appConfig = this.state.appConfig;
          appConfig.facebook = {
            accessToken: result.credential.accessToken
          }
          
          const user = {
            id: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.providerData[0].photoURL,
            manager: result.user.manager,
            token: result.user.token
          }

          this.setState({ user, appConfig });
          const json = JSON.stringify(user);
          localStorage.setItem(userKey, json);
          this.setState({ status: false });
        }
      });
  }

  render() {
    return (
      <DigContext.Provider value={this.state}>
        {this.props.children}
      </DigContext.Provider>
    );
  }

  connect = () => {
    const firebase = this.firebase();
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  disconnect = () => {
    this.firebase().auth().signOut();
    localStorage.removeItem(userKey);
    this.setState({ user: false });
  }

  firebase = () => {
      const firebaseConfig = this.props.appConfig.firebase;

      if (!firebase.apps.length) {
        const app = firebase.initializeApp(firebaseConfig);
        app.firestore().settings({ timestampsInSnapshots: true });
      }

      return firebase;
  }
}