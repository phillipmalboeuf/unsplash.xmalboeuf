
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
      <p>Theoretically, the Unsplash Embed would be useful for photographers or photography writers to easily expose photos with associated meta-information as well as "like" and "download" buttons.</p>
      <div className="grid grid--guttered">
        <div className="col col--6of12">
          <h4>Built with</h4>
          <ol>
            <li>React</li>
            <li>TypeScript</li>
            <li>Unsplash API</li>
          </ol>
        </div>
        <div className="col col--6of12">
          <h4>Things to improve</h4>
          <ol>
            <li>Preact instead of React for rendering</li>
            <li>Use a non-rate-limited API call</li>
            <li>Finish the "like" button functionality</li>
            <li>Provide photo sizes parameters</li>
            <li>Add a loading state</li>
          </ol>
        </div>
      </div>
      <p><small>The <a href="https://github.com/phillipmalboeuf/unsplash.xmalboeuf" className="underline" target="_blank">source files are available</a>. Let me know what you think of it.</small></p>
      <div className="padded padded--tight light_grey_back normal_bottom">📣 This demo is not intended to be a real, finished, or necessary product.</div>
      <EmbedBuilder />
    </div>
    <div className="hero__topright">
      <Button to="/chat" label="Let's Chat" />
    </div>
  </div>
}