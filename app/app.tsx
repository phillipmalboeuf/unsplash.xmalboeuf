
import "../styles/all.scss"

import * as ReactDOM from "react-dom"
import * as React from "react"
import { BrowserRouter } from "react-router-dom"

import { Routes } from "./routes"

const element = document.getElementById('app')
const app = (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

if (process.env.NODE_ENV === 'production') {
  ReactDOM.hydrate(app, element)
} else {
  ReactDOM.render(app, element)
}
  