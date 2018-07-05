/**
 * Created by forrestlyman on 7/4/18
 */

import CloudIcon from "@material-ui/icons/Cloud";
import Divider from "@material-ui/core/Divider";

import PlaceIcon from "@material-ui/icons/Place";
import PostIcon from "@material-ui/icons/CloudDownload";
import ChartIcon from "@material-ui/icons/ShowChart";
import TagIcon from "@material-ui/icons/ViewList";
import HistoryIcon from "@material-ui/icons/History";
import React from 'react';
import {DigUiNavItem, withDig} from "dig-framework";

const LayoutNav = (props) => {
  return (
    <div>
      <DigUiNavItem
        href="/reports"
        icon={<ChartIcon />}
        text="Reports"
      />
    </div>
  )
}

export default withDig(LayoutNav);