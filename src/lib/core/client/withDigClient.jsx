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
    switch (client) {
      case 'firebase':
        return new DigClientFirebase(this.appSettings);
        break;
    }
  }
}

const withDigClient = (ChildComponent) => {
  return class extends React.Component {
    render() {
      return (
        <DigContext.Consumer>
          {value => {
            const factory = new ClientFactory(value.appConfig);
            return <ChildComponent digClient={factory} {...this.props} />
          }}
        </DigContext.Consumer>
      )
    }
  }
}

export default withDigClient;