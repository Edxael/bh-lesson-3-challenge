import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import connected from 'State/connect'

class LandingPage extends Component {
  render() {
    // Create a div with a class of container
    return (
      <div>
      
      <span>TODO delete me</span>
      <div> My Changes... </div>
      
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(LandingPage, css)))
