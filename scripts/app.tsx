
import "../styles/all.scss"

import * as ReactDOM from "react-dom"
import * as React from "react"

import Messages from "./components/messages"

ReactDOM.render(<Messages />, document.getElementById("messages") as HTMLElement)