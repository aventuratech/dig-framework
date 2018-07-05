/**
 * Created by forrestlyman on 6/30/18
 */

import { FormInner, FormSidebar } from "components/ui/Form";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {},
  list: {
    padding: theme.spacing.unit * 5 + " 0"
  },
  listItem: {
    color: "#000"
  },
  listItemActive: {
    background: theme.palette.primary.light
  },
  listIconActive: {
    color: theme.palette.common.white
  },
  listTextActive: {
    color: theme.palette.common.white
  }
});

class ViewNavList extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,

    // you can create your own sidebar
    sidebar: PropTypes.node,

    // for simple lists you can pass an array of items
    // for example: `const myNavList = [{label: 'photos', icon: {<PhotoIcon />}, data: photoData},...]
    navListItems: PropTypes.array,
    // callback to inform your app that the navigation has changed, passes the data set from your nav item
    onNavSelected: PropTypes.func,
    // enable a search box to filter your nav list items
    navListSearch: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      current: false
    };
  }

  handleClick = (key, item) => {
    this.setState({ current: key });
    if (this.props.onNavSelected) {
      this.props.onNavSelected(item.data);
    }
  };

  renderNavList = () => {
    const { classes, navListItems } = this.props;
    const { current } = this.state;

    if (navListItems.length > 0) {
      return (
        <React.Fragment>
          {navListItems.map((item, key) => {
            const active = key === current;
            return (
              <ListItem
                key={key}
                className={active ? classes.listItemActive : classes.listItem}
                onClick={() => this.handleClick(key, item)}
              >
                <ListItemIcon
                  className={active ? classes.listIconActive : classes.listIcon}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  className={active ? classes.listTextActive : classes.listText}
                  disableTypography
                  primary={item.label}
                />
              </ListItem>
            );
          })}
        </React.Fragment>
      );
    }
  };

  render() {
    const { children, classes, navListItems, sidebar } = this.props;
    return (
      <React.Fragment>
        <FormSidebar>
          {sidebar}
          {navListItems && (
            <List dense className={classes.list}>
              {this.renderNavList()}
            </List>
          )}
        </FormSidebar>
        <FormInner>{children}</FormInner>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ViewNavList);
