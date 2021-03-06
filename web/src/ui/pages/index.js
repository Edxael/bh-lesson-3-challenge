import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import { protectedRoute } from 'Process/users/auth'
import Footer from 'UI/components/footer'
import Header from 'UI/components/header'
import connected from 'State/connect'

// 404 Page
import BadRequest from './bad-request/'

// Secure Pages
import landing from './secured/landing'

// Unsecured Pages
import login from './unsecured/login/'

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <div styleName="header-container">
          <Header />
        </div>
        <div styleName="content-container">
          <Switch>
            <Route exact path="/" component={login} />,
            <Route exact path="/landing" component={protectedRoute(landing)} />
            <Route component={BadRequest} />
          </Switch>
        </div>
        <div styleName="footer-container">
          <Footer />
        </div>
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(App, css)))
