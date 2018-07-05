/**
 * Created by forrestlyman on 6/30/18
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

class FormTemplateNavList extends React.Component {
  static propTypes = {
    classes: PropTypes.object,

    // toolbar

    // form title, left side of form toolbar
    title: PropTypes.string,
    subtitle: PropTypes.string,

    // toolbar buttons and menu that render on the right side of form toolbar
    toolbar: PropTypes.node,

    // nav list

    // you can create your own sidebar, which should expose an onClick event when a menu item is selected
    navlist: PropTypes.node,

    // for simple lists you can pass an array
    navlistItems: PropTypes.array // an array of nav items
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
    return <div className={classes.root}>Component: FormTemplateNavList</div>;
  }
}

export default withStyles(styles)(FormTemplateNavList);
