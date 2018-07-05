/**
 * Created by forrestlyman on 7/4/18
 */

import CloudIcon from "@material-ui/icons/Cloud";
import Divider from "@material-ui/core/Divider";

import {DigUiNavItem} from "lib/ui"

import PlaceIcon from "@material-ui/icons/Place";
import PostIcon from "@material-ui/icons/CloudDownload";
import ChartIcon from "@material-ui/icons/ShowChart";
import TagIcon from "@material-ui/icons/ViewList";
import HistoryIcon from "@material-ui/icons/History";
import React from 'react';
import {withDig} from "lib/core";

const LayoutNav = (props) => {
  return (
    <div>
      <DigUiNavItem
        href="/mysite.com/reports"
        icon={<ChartIcon />}
        text="Reports"
      />
      <DigUiNavItem
        href="/history"
        icon={<HistoryIcon />}
        text="History"
      />
      <Divider />
      <DigUiNavItem
        href="/sites"
        icon={<CloudIcon />}
        text="Manage Sites"
      />
      <DigUiNavItem
        href="/tags"
        icon={<TagIcon />}
        text="Manage Tags"
      />
      <DigUiNavItem
        href="/places"
        icon={<PlaceIcon />}
        text="Manage Places"
      />
      <DigUiNavItem
        href="/posts"
        icon={<PostIcon />}
        text="Import Content"
      />
    </div>
  )
}

export default withDig(LayoutNav);