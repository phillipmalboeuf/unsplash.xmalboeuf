
import * as React from "react"
import { Button } from "../components/button"

interface Props {}

export const Home: React.SFC<Props> = (props) => {
  return <div className="hero">
    <div className="hero__content">
      <h1>Unsplash <span className="thin">X Malboeuf</span></h1>
      <p>Hi Unsplash 🙀,<br/>I've set out to show you that I'm your next full-stack developer. Your quest stops here haha!</p>

      <div className="grid grid--guttered">
        <div className="col col--6of12">
          <p>First, I'd like to say that I'm significantly experienced with these:</p>
          <p><strong>JavaScript:</strong> React, Express, TypeScript, Parcel, Webpack</p>
          <p><strong>Python:</strong> Flask, Celery, Tornado</p>
          <p><strong>Concepts:</strong> Rest APIs, SSR, WebSockets, UX Research</p>
          <p><strong>Other techs:</strong> MongoDB, Imgix, S3, Algolia, Stripe, Shopify, SquareSpace</p>
        </div>
        <div className="col col--6of12">
          <p>And second, I've made this thing over the weekend, a small extension to your <a href="https://source.unsplash.com" className="underline" target="_blank">source.unsplash.com</a>:</p>
          <Button to="/demo" label="See Tech Demo" />
        </div>
      </div>
    </div>
  </div>
}