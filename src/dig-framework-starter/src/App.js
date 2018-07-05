import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "components/pages/Dashboard/Dashboard";
import Reports from "components/pages/Reports/Reports";
import Layout from "components/ui/Layout/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/reports" component={Reports} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;