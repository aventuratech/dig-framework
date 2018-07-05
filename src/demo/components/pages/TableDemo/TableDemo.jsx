/**
 * Created by forrestlyman on 6/27/18
 */

// core imports
import PropTypes from "prop-types";
import React from "react";

// material UI
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import {View} from "lib/ui";
import {withDig} from "lib/core";

const styles = theme => ({
  root: {
    padding: "10vh 0"
  }
});

class TableDemo extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (row) => {
    console.log('You selected row:', row);
  }

  render() {
    const {classes} = this.props;

    const columns = [
      {
        id: "city",
        numeric: false,
        label: "City"
      },
      {
        id: "state",
        numeric: false,
        label: "State"
      },
      {
        id: "population",
        numeric: true,
        label: "Population"
      },
    ];

    const data = [
      {
        city: "New York",
        state: "New York",
        population: 8175000
      },
      {
        city: "Los Angeles",
        state: "California",
        population: 3792000
      },
      {
        city: "Chicago",
        state: "Illinois",
        population: 2695000
      }
    ]

    const viewOptions = {
      form: "Table",
      title: "Table View Demo",
      subtitle: "View cities by population",
      columns: columns,
      data: data
    };

    return <View {...viewOptions}>
      <div className={classes.root}>
        <Typography variant="display1" align="center" gutterBottom>Blank Slate</Typography>
        <Typography variant="body1" align="center">The form view is an empty form with a Title and optional toolbar.</Typography>
      </div>
    </View>;
  }
}

export default withDig(withStyles(styles)(TableDemo));
