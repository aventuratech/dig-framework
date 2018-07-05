/**
 * Created by forrestlyman on 6/28/18
 */

// core imports
import PropTypes from "prop-types";
import React from "react";

// Material UI https://material-ui.com/

// https://material-ui.com/style/typography/
import Paper from "@material-ui/core/Paper";

// material ui style
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    display: "flex"
  },
  form: {
    padding: 0,
    backgroundColor: theme.palette.secondary.main,
    overflow: "hidden",
    marginBottom: theme.spacing.unit * 2,
    width: "100%"
  }
});

class Form extends React.Component {
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
    const { children, classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.form}>{children}</Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Form);
