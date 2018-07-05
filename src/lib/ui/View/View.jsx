/**
 * Created by forrestlyman on 6/30/18
 */

import CreateIcon from "@material-ui/icons/AddCircle";
import { Form, FormBody, FormTopBar } from "components/ui/Form";
import IconButton from "@material-ui/core/IconButton";
import IconViewTable from "@material-ui/icons/ViewList";
import IconViewDetail from "@material-ui/icons/ViewQuilt";
import PropTypes from "prop-types";
import React from "react";
import { RegionContext } from "components/context/Region.jsx";
import SelectRegion from "components/ui/SelectRegion/SelectRegion";
import SelectSite from "components/ui/SelectSite/SelectSite";
import { SiteContext } from "components/context/Site";
import Typography from "@material-ui/core/Typography";
import ViewForm from "./ViewForm/ViewForm";
import ViewNavList from "./ViewNavList/ViewNavList";
import ViewTable from "./ViewTable/ViewTable";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
    overflow: "auto"
  },
  formTitle: {
    paddingTop: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 2,
    paddingBottom: 100,
    display: "flex",
    color: theme.palette.common.white,
    background: theme.palette.primary.light,
    alignItems: "center"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    padding: "0 " + theme.spacing.unit * 2,
    width: "100%"
  },
  searchBox: {
    border: "none",
    background: theme.palette.common.white,
    padding: theme.spacing.unit,
    width: 250,
    margin: 0
  },
  title: {
    fontSize: "1.4rem",
    marginRight: theme.spacing.unit * 2
  },
  subtitle: {
    color: theme.palette.secondary.dark,
    marginLeft: theme.spacing.unit * 2
  },
  form: {
    marginTop: -100
  },
  spacer: {
    flex: 1
  }
});

const View = ({
  classes,
  form,
  subtitle,
  title,
  toolbar,
  onAdd,
  onViewTable,
  onViewDetail,
  onSearch,
  onRefresh,
  ...other
}) => {
  console.log(form);
  return (
    <div className={classes.root}>
      <div className={classes.formTitle}>
        <Typography variant="title" color="inherit" className={classes.title}>
          {title}
        </Typography>
        <div className={classes.spacer} />

        <SiteContext.Consumer>
          {siteState => {
            return <SelectSite siteContext={siteState} />;
          }}
        </SiteContext.Consumer>
        <span className={classes.buttonDivider}>/</span>
        <RegionContext.Consumer>
          {regionState => {
            return <SelectRegion regionContext={regionState} />;
          }}
        </RegionContext.Consumer>
      </div>
      <div className={classes.form}>
        <Form>
          <FormTopBar>
            <div className={classes.toolbar}>
              <Typography
                variant="subheading"
                color="inherit"
                className={classes.subtitle}
              >
                {subtitle}
              </Typography>
              <div className={classes.spacer} />
              {onSearch && (
                <input
                  placeholder="Search Places"
                  className={classes.searchBox}
                  type="text"
                  onChange={onSearch}
                />
              )}
              {toolbar}
              {onAdd && (
                <IconButton
                  onClick={onAdd === "disabled" ? null : onAdd}
                  disabled={onAdd === "disabled"}
                >
                  <CreateIcon />
                </IconButton>
              )}
              {onViewTable && (
                <IconButton
                  className={classes.button}
                  aria-label="Delete"
                  onClick={onViewTable === "disabled" ? null : onViewTable}
                  disabled={onViewTable === "disabled"}
                >
                  <IconViewTable />
                </IconButton>
              )}
              {onViewDetail && (
                <IconButton
                  className={classes.button}
                  aria-label="Delete"
                  onClick={onViewDetail === "disabled" ? null : onViewDetail}
                  disabled={onViewDetail === "disabled"}
                >
                  <IconViewDetail />
                </IconButton>
              )}
              {onRefresh && (
                <IconButton
                  className={classes.button}
                  aria-label="Delete"
                  onClick={onRefresh === "disabled" ? null : onRefresh}
                  disabled={onRefresh === "disabled"}
                >
                  <IconViewDetail />
                </IconButton>
              )}
            </div>
          </FormTopBar>
          <FormBody>
            {form === "NavList" && <ViewNavList {...other} />}
            {form === "Table" && <ViewTable {...other} />}
            {form === "Form" && <ViewForm {...other} />}
          </FormBody>
        </Form>
      </div>
    </div>
  );
};

View.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,

  // form title, left side of form toolbar
  title: PropTypes.string,
  subtitle: PropTypes.string,

  // you register the toolbar buttons by providing a callback
  // if you pass these props functions they will render the buttons
  // if you pass it a string 'disabled' it will render the button but disable it
  onSearch: PropTypes.any,
  onViewTable: PropTypes.any,
  onViewDetail: PropTypes.any,
  onAdd: PropTypes.any,
  onRefresh: PropTypes.any,
  // additional toolbar buttons
  toolbar: PropTypes.node,

  // the form you want to render (NavList|Table|...)
  form: PropTypes.string,

  // data to pass to the form
  data: PropTypes.array

  // note that the additional views also expose specific props
};

export default withStyles(styles)(View);
