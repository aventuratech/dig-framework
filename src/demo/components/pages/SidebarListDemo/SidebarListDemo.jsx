/**
 * Created by forrestlyman on 6/27/18
 */

// core imports
import PropTypes from "prop-types";
import React from "react";

// material UI
import NotesIcon from "@material-ui/icons/Note";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import {View} from "lib/ui";
import {withDig} from "lib/core";

const styles = theme => ({
  root: {
    padding: "50px 0"
  }
});

class NavListDemo extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          label: 'First Page',
          title: 'My First Page',
          body: "This is the first page content"
        },
        {
          label: 'Second Page',
          title: 'The Next One',
          body: "This is the first page content"
        }
      ],
      currentPage: false
    };
  }

  componentWillMount() {
    // start with the first page
    const {pages} = this.state;
    this.setState({currentPage: pages[0]});
  }

  setPage = (page) => {
    this.setState({currentPage: page});
  }

  sidebarData = () => {
    const { pages } = this.state;
    const sidebarData = [];
    pages.map(page => {
      sidebarData.push({
        label: page.label,
        icon: <NotesIcon />,
        data: page
      });
      return page;
    });
    return sidebarData;
  }

  render() {
    const {classes} = this.props;

    const { currentPage } = this.state;
    const viewOptions = {
      form: "NavList",
      title: "Page Demo",
      subtitle: "View and navigate between pages",
      navListItems: this.sidebarData(),
      onNavSelected: this.setPage
    };

    return <View {...viewOptions}>
      <div className={classes.root}>
        <Typography variant="display1" align="center" gutterBottom>{currentPage.title}</Typography>
        <Typography variant="body1" align="center">{currentPage.body}</Typography>
      </div>
    </View>;
  }
}

export default withDig(withStyles(styles)(NavListDemo));
