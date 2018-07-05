/**
 * Created by forrestlyman on 6/29/18
 */

// core imports
import PropTypes from "prop-types";
import React from "react";

// Material UI https://material-ui.com/

// material ui style
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {}
});

class SortableTableSearch extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // do something before the component mounts
  }

  componentDidMount() {
    // do something after the component mounts
  }

  render() {
    const { classes } = this.props;
    return <div className={classes.root}>Component: SortableTableSearch</div>;
  }
}

export default withStyles(styles)(SortableTableSearch);
