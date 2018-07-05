/**
 * Created by forrestlyman on 6/30/18
 */

import PropTypes from "prop-types";
import React from "react";
import SortableTable from "components/ui/SortableTable/SortableTable";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
    overflow: "auto"
  },
  toolbarTitle: {
    flex: 1,
    padding: theme.spacing.unit * 2
  },
  toolbarForm: {},
  listItem: {
    color: "#000"
  },
  listItemActive: {
    color: "#000",
    background: "#ffffff"
  }
});

class ViewNavList extends React.Component {
  static propTypes = {
    classes: PropTypes.object,

    // configure the table
    // see material form docs for details: https://material-ui.com/demos/tables/
    columns: PropTypes.array,

    // data collection to render
    data: PropTypes.array,

    // search for a string in your data
    search: PropTypes.string,
    // callback function that returns the filtered data set after a search
    onSearch: PropTypes.func,

    // callback when a row is clicked, passes the row data
    onClick: PropTypes.func,

    // if this is set to true render the children (detail view), if not the table renders
    detailView: PropTypes.bool,

    // the children of this component are used as the detail view
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
    this.state = {
      detailView: false,
      data: []
    };
  }

  componentWillMount() {
    // do something before the component mounts
  }

  componentWillReceiveProps(props) {
    if (props.data && props.data !== this.props.data) {
      this.indexData(props.data);
    }
  }

  indexData = data => {
    const { columns } = this.props;
    data.map(row => {
      const index = [];
      columns.map(col => {
        let field = row[col.id];
        if (field) {
          if (field.toString) {
            field = field.toString();
          }
          index.push(field.toLowerCase());
        }
        return col;
      });
      row.searchIndex = index.join(" ");
      return row;
    });
    this.setState({ data: data });
  };

  handleClick = row => {
    if (this.props.onClick) this.props.onClick(row);
  };

  searchData = data => {
    const searchString = this.props.search.toLowerCase();
    const results = data.filter(row => {
      return row.searchIndex.indexOf(searchString) > -1;
    });
    if (this.props.onSearch) this.props.onSearch(this.props.search, results);
    return results;
  };

  render() {
    const { children, classes, columns, detailView, search } = this.props;
    const { data } = this.state;
    const filteredData = search ? this.searchData(data) : data;
    return (
      <div className={classes.root}>
        {detailView && <div className={classes.detail}>{children}</div>}

        {!detailView &&
          data && (
            <SortableTable
              data={filteredData}
              columns={columns}
              title="Places"
              onClick={this.handleClick}
            />
          )}
      </div>
    );
  }
}

export default withStyles(styles)(ViewNavList);
