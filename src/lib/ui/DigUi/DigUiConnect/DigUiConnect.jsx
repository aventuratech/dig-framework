/**
 * Created by forrestlyman on 6/27/18
 */

// core imports
import PropTypes from "prop-types";
import React from "react";

// Material UI https://material-ui.com/

// https://material-ui.com/style/typography/
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LinkIcon from "@material-ui/icons/Link";

// material ui style
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {}
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class DigUiConnect extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, onConnect } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              DigitalusMedia
            </Typography>
          </Toolbar>
        </AppBar>
        <Button onClick={this.handleClickOpen}>
          Slide in alert dialog
        </Button>
        <Dialog
          open
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Please sign in to continue
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              We use Facebook to authenticate you and confirm your site
              permissions.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onConnect} color="primary">
              <LinkIcon />
              Connect Facebook Account
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(DigUiConnect);
