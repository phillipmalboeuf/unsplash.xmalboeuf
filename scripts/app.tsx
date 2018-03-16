
import "../styles/all.scss"

import * as ReactDOM from "react-dom"
import * as React from "react"
import { Route, HashRouter } from "react-router-dom"

import { Home } from "./routes/home"
import { Demo } from "./routes/demo"
import { Chat } from "./routes/chat"


ReactDOM.render(<HashRouter>
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/demo" component={Demo} />
    <Route path="/chat" component={Chat} />
  </div>
</HashRouter>, document.getElementById("app") as HTMLElement)