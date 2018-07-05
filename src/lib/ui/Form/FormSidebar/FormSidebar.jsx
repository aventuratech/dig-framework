/**
 * Created by forrestlyman on 6/28/18
 */

// core imports
import PropTypes from "prop-types";
import React from "react";

// material ui style
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    padding: 0,
    background: theme.palette.form.light,
    borderRight: theme.palette.form.dark + " 1px solid",
    maxHeight: "60vh",
    overflow: "auto"
  },
  small: {
    width: "180px"
  },
  default: {
    width: "240px"
  },
  large: {
    width: "420px"
  }
});

class FormSidebar extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    size: PropTypes.string
  };

  static defaultProps = {
    size: "default"
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
    const { children, classes, size } = this.props;
    const sidebarStyle = classes.root + " " + classes[size];
    return <div className={sidebarStyle}>{children}</div>;
  }
}

export default withStyles(styles)(FormSidebar);
