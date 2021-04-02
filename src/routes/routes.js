import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Finish from '../pages/Finish'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/finish" component={Finish} />
    </Switch>
)

export default Routes
