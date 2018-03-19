
import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/button"

import Messages from "../components/messages"

interface Props {}

export const Chat: React.SFC<Props> = (props) => {
  return <div className="hero">
    <div className="hero__content">
      <Link className="underline" to="/demo">Back to demo</Link>
      <h1>Live Chat <span className="thin">w/ Phil</span></h1>
      <Messages />
    </div>
    <div className="hero__topright">
      <a href="mailto:phil@boeuf.coffee" className="underline" target="_blank">phil@boeuf.coffee</a><br/>
      <a href="https://crewlabs.slack.com/messages/D6VL66T8E" className="underline" target="_blank">crewlabs.slack.com/phillipmalboeuf</a>
    </div>
  </div>
}