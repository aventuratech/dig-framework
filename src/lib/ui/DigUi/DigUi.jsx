/**
 * Created by forrestlyman on 7/4/18
 */

// core imports
import PropTypes from 'prop-types';
import React from 'react';

// Material UI https://material-ui.com/
import classNames from "classnames";
import {DigProvider, DigContext} from "../context/Dig";
import DigUiConnect from "./DigUiConnect/DigUiConnect"
import Drawer from "@material-ui/core/Drawer";
import AccountIcon from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";
import ChatIcon from "@material-ui/icons/Chat";
import DigUiNavItem from "./DigUiNavItem/DigUiNavItem"
import grey from "@material-ui/core/colors/grey";
import HelpIcon from "@material-ui/icons/Help";
import HomeIcon from "@material-ui/icons/Home";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import {withStyles} from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menu: {
    background: grey[800],
    color: "#ffffff"
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  closeMenu: {
    color: theme.palette.secondary.main
  },
  hide: {
    display: "none"
  },
  pageTitle: {
    flex: 1,
    color: "#ffffff"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  toolbarButtons: {
    marginRight: theme.spacing.unit * 2
  },
  toolbarButton: {
    color: theme.palette.common.white
  },
  content: {
    flexGrow: 1,
    background: grey[400],
    padding: 0,
    paddingTop: "4rem"
  }
});

class DigUi extends React.Component {
  static propTypes = {
    app: PropTypes.object, // app configuration
    children: PropTypes.node, // app body
    classes: PropTypes.object,
    nav: PropTypes.node, // app navigation
    title: PropTypes.string, // page title
    toolbar: PropTypes.node, // app toolbar
    theme: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  appBar = () => {
    const {classes, title} = this.props;
    return (
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.pageTitle}
              noWrap
            >
              {title}
            </Typography>
            <div className={classes.toolbarButtons}>
              <IconButton disabled className={classes.toolbarButton}>
                <ChatIcon />
              </IconButton>
              <IconButton disabled className={classes.toolbarButton}>
                <HelpIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
    )
  }

  toolbar = () => {
    return (
      '...'
    )
  }

  nav = () => {
    const {classes, theme, nav} = this.props;
    return (
      <Drawer
        variant="permanent"
        className={classes.menu}
        classes={{
          paper: classNames(
            classes.drawerPaper,
            classes.menu,
            !this.state.open && classes.drawerPaperClose
          )
        }}
        open={this.state.open}
      >
        <div className={classes.toolbar}>
          <IconButton
            onClick={this.handleDrawerClose}
            className={classes.closeMenu}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <DigUiNavItem
          href="/"
          icon={<HomeIcon />}
          text="Dashboard"
        />
        <Divider />

        {nav &&
          <div>
            {nav}
            <Divider />
          </div>
        }
        <DigUiNavItem
          onClick={() => console.log('clicked user')}
          icon={<AccountIcon />}
          text="My Account"
        />




      </Drawer>
    )
  }

  render() {
    const { app, children, classes, theme } = this.props;

    // https://material-ui.com/customization/default-theme/
    const muiTheme = createMuiTheme(theme);

    return (
      <DigProvider appConfig={app}>
        <MuiThemeProvider theme={muiTheme}>
            <DigContext.Consumer>
              {({user, connect}) => {
                if(user) {
                  return (
                    <React.Fragment>
                      <div className={classes.root}>
                        {this.appBar()}
                        {this.nav()}
                        <main className={classes.content}>{children}</main>
                      </div>
                      {children}
                    </React.Fragment>
                  )
                } else {
                  return (
                    <DigUiConnect onConnect={connect}/>
                  )
                }
              }}
            </DigContext.Consumer>
        </MuiThemeProvider>
      </DigProvider>
    )
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
}

export default withStyles(styles)(DigUi);

