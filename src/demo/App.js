import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "demo/components/pages/Dashboard/Dashboard";
import Layout from "demo/components/ui/Layout/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
