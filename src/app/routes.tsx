import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import HomePage from 'pages/Home'

const NoMatch = () => <div>Page not found</div>

export const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />

        <Route path="/home" component={HomePage} />

        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}
