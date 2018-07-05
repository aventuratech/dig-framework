/**
 * Created by forrestlyman on 6/27/18
 */

// core imports
import PropTypes from "prop-types";
import React from "react";

// material UI
import IconButton from "@material-ui/core/IconButton";
import HandIcon from "@material-ui/icons/PanTool";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import {View} from "lib/ui";
import {withDig} from "lib/core";

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

  handleClick = () => {
    console.log('Hi ' + this.props.digUser.name + '!');
  }

  renderToolbar = () => {
    return (
      <div>
        <IconButton onClick={this.handleClick}>
          <HandIcon/>
        </IconButton>
      </div>
    )
  }

  render() {
    const {classes} = this.props;
    const viewOptions = {
      form: "Form",
      title: "Post Manager",
      subtitle: "View all posts",
      toolbar: this.renderToolbar()
    };

    return <View {...viewOptions}>
      <div className={classes.root}>
        <Typography variant="display1" align="center" gutterBottom>Blank Slate</Typography>
        <Typography variant="body1" align="center">The form view is an empty form with a Title and optional toolbar.</Typography>
      </div>
    </View>;
  }
}

export default withDig(withStyles(styles)(FormDemo));
