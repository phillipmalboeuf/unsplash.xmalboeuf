
import * as React from "react"
import { Button } from "../components/button"

interface Props {}

export const Demo: React.SFC<Props> = (props) => {
  return <div>
    <h1>Demo</h1>
    <Button to="/chat" label="Let's Chat" />
  </div>
}