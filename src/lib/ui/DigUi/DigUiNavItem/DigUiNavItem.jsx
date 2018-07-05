/**
 * Created by forrestlyman on 6/29/18
 */

// core imports
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import React from "react";

// Material UI https://material-ui.com/
import grey from "@material-ui/core/colors/grey";

// material ui style
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {},
  link: {
    textDecoration: "none",
    color: grey[200],
    fontSize: ".8rem"
  },
  linkIcon: {
    color: theme.palette.secondary.light
  }
});

const DigUiNavItem = ({ classes, href, icon, onClick, text }) => {
  if(href) {
    return (
      <Link to={href} className={classes.link}>
        <ListItem button>
          <ListItemIcon className={classes.linkIcon}>{icon}</ListItemIcon>
          <ListItemText primary={text} disableTypography />
        </ListItem>
      </Link>
    );
  } else {
    return (
      <div className={classes.link} onClick={onClick}>
        <ListItem button>
          <ListItemIcon className={classes.linkIcon}>{icon}</ListItemIcon>
          <ListItemText primary={text} disableTypography />
        </ListItem>
      </div>
    )
  }
};

DigUiNavItem.propTypes = {
  classes: PropTypes.object,
  href: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  text: PropTypes.string
};

export default withStyles(styles)(DigUiNavItem);