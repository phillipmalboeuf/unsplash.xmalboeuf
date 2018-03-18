
import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/button"
import EmbedBuilder from "../components/embed_builder"

interface Props {}

export const Demo: React.SFC<Props> = (props) => {
  return <div className="hero">
    <div className="hero__content">
      <Link className="underline" to="/">Back to welcome page</Link>
      <h1 className="h1--massive">Unsplash <span className="thin">Embed</span></h1>
      <EmbedBuilder />
    </div>
    <div className="hero__topright">
      <Button to="/chat" label="Let's Chat" />
    </div>
  </div>
}