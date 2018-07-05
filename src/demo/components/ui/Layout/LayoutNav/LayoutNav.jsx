/**
 * Created by forrestlyman on 7/4/18
 */

import CloudIcon from "@material-ui/icons/Cloud";
import Divider from "@material-ui/core/Divider";

import {DigUiNavItem} from "lib/ui"

import WebAssetIcon from "@material-ui/icons/WebAsset";
import React from 'react';
import {withDig} from "lib/core";

const LayoutNav = (props) => {
  return (
    <div>
      <DigUiNavItem
        href="/demos/form"
        icon={<WebAssetIcon />}
        text="Form View Demo"
      />
    </div>
  )
}

export default withDig(LayoutNav);