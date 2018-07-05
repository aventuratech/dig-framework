/**
 * Created by forrestlyman on 7/4/18
 */

import React from 'react';
import PropTypes from 'prop-types';
import {withDig} from "dig-framework";

class Reports extends React.Component {
  static propTypes = {
    digClient: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>Component: Reports</div>
    )
  }
}

export default withDig(Reports);
