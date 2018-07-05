/**
 * Created by forrestlyman on 6/27/18
 */

// core imports
import PropTypes from "prop-types";
import React from "react";
import Typography from "@material-ui/core/Typography";
import {View} from "lib/ui";

// material ui style
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    padding: "10vh 0"
  }
});

class FormDemo extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {classes} = this.props;
    const viewOptions = {
      form: "Form",
      title: "Post Manager",
      subtitle: "View all posts"
    };

    return <View {...viewOptions}>
      <div className={classes.root}>
        <Typography variant="display1" align="center" gutterBottom>Blank Slate</Typography>
        <Typography variant="body1" align="center">The form view is an empty form with a Title and optional toolbar.</Typography>
      </div>
    </View>;
  }
}

export default withStyles(styles)(FormDemo);
