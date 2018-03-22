
import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/button"

import Messages from "../components/messages"

interface Props {}

export const Chat: React.SFC<Props> = (props) => {
  return <div className="hero">
    <div className="hero__content" style={{width: "100%"}}>
      <Link className="underline" to="/demo">Back to demo</Link>
      <h1>Live Chat <span className="thin">w/ Phil</span></h1>
      <div className="grid grid--guttered">
        <div className="col col--6of12">
          <h4>Built with</h4>
          <ol>
            <li>React</li>
            <li>TypeScript</li>
            <li>WebSockets</li>
            <li>MongoDB</li>
          </ol>
        </div>
        <div className="col col--6of12">
          <h4>Things to improve</h4>
          <ol>
            <li>Proper authentication</li>
            <li>Audio/push notifications</li>
          </ol>
        </div>
      </div>
      {typeof window !== 'undefined' && <Messages />}
    </div>
    <div className="hero__topright">
      <a href="mailto:phil@boeuf.coffee" className="underline" target="_blank">phil@boeuf.coffee</a><br/>
      <a href="slack://user?team=T02TA4LAR&id=U6UTCTDT7" className="underline">crewlabs.slack.com/phillipmalboeuf</a>
    </div>
  </div>
}