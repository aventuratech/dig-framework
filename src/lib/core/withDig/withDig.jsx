/**
 * Created by forrestlyman on 7/4/18
 */

import React from 'react';
import {DigClientFirebase} from "./clients";
import { DigContext } from "../../context/Dig";

class ClientFactory {
  constructor(appSettings) {
    this.appSettings = appSettings;
  }

  get = (client) => {
    if(client === 'firebase') return new DigClientFirebase(this.appSettings);
    return false;
  }
}

const withDig = (ChildComponent) => {
  return class extends React.Component {
    render() {
      return (
        <DigContext.Consumer>
          {({appConfig, user}) => {
            const factory = new ClientFactory(appConfig);
            return <ChildComponent digClient={factory} digUser={user} {...this.props} />
          }}
        </DigContext.Consumer>
      )
    }
  }
}

export default withDig;