/**
 * Created by forrestlyman on 6/28/18
 */

// core imports
import PropTypes from "prop-types";
import React from "react";

// Material UI https://material-ui.com/

// material ui style
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    padding: 0,
    background: theme.palette.form.main,
    borderBottom: theme.palette.form.dark + " 1px solid",
    color: theme.palette.grey[200],
    display: "flex"
  }
});

class FormTopBar extends React.Component {
  static propTypes = {
    children: PropTypes.node
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
    const { classes, children } = this.props;
    return <div className={classes.root}>{children}</div>;
  }
}

export default withStyles(styles)(FormTopBar);
