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
    width: "100%",
    display: "flex",
    background: theme.palette.form.body
  }
});

class FormBody extends React.Component {
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

export default withStyles(styles)(FormBody);
