import * as ReactDOM from "react-dom"
import * as React from "react"
import { Route, Switch } from "react-router-dom"

import { Home } from "./routes/home"
import { Demo } from "./routes/demo"
import { Chat } from "./routes/chat"

export const Routes = ()=> <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/demo" component={Demo} />
  <Route path="/chat" component={Chat} />
</Switch>