/**
 * Created by forrestlyman on 6/28/18
 */

// core imports
import React from "react";

// Material UI https://material-ui.com/

// material ui style
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flex: 1
  }
});

class FormInner extends React.Component {
  static propTypes = {};

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
    return <div className={classes.root}>{children}</div>;
  }
}

export default withStyles(styles)(FormInner);
