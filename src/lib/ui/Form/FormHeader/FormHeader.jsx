/**
 * Created by forrestlyman on 6/28/18
 */

// core imports
import PropTypes from "prop-types";
import React from "react";

// Material UI https://material-ui.com/

// https://material-ui.com/style/typography/
import lightBlue from "@material-ui/core/colors/lightBlue";
import Typography from "@material-ui/core/Typography";

// material ui style
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    display: "flex",
    background: lightBlue[600],
    padding: theme.spacing.unit * 4,
    position: "relative",
    color: "#ffffff"
  },
  title: {
    flex: 1
  },
  body: {
    flex: 1,
    textAlign: "right"
  }
});

class FormHeader extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, children, subtitle, title } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography variant="headline" component="h2" color="inherit">
            {title}
          </Typography>
          {subtitle && (
            <Typography component="p" color="inherit">
              {subtitle}
            </Typography>
          )}
        </div>
        <div className={classes.body}>{children}</div>
      </div>
    );
  }
}

export default withStyles(styles)(FormHeader);
