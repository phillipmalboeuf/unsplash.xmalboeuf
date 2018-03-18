
import * as React from "react"
import { Button } from "../components/button"
import { Tag } from "../components/tag"

interface Props {}

export const Home: React.SFC<Props> = (props) => {
  return <div className="hero">
    <div className="hero__content">
      <h1>Unsplash <span className="thin">X Malboeuf</span></h1>
      <p>Hi Unsplash 🙀!<br/>I've set out to show how I'm your next full-stack developer. Your quest stops here!</p>

      <div className="grid grid--guttered">
        <div className="col col--6of12">
          <p>First, I'd like to say that I'm significantly experienced with these:</p>
          <p>JavaScript<br/>{["React", "Express", "TypeScript", "Parcel", "Webpack"].map((tag, index)=> <Tag key={index} label={tag} />)}</p>
          <p>Python<br/>{["Flask", "Celey", "Tornado"].map((tag, index)=> <Tag key={index} label={tag} />)}</p>
          <p>Concepts<br/>{["Rest APIs", "SSR", "WebSockets", "Micro-services", "Ecommerce", "UX Research"].map((tag, index)=> <Tag key={index} label={tag} />)}</p>
          <p>Other techs<br/>{["Dokku", "MongoDB", "Imgix", "Algolia", "Stripe", "Shopify"].map((tag, index)=> <Tag key={index} label={tag} />)}</p>
        </div>
        <div className="col col--6of12">
          <p>And second, I've made this thing over the weekend, a small extension to your <a href="https://source.unsplash.com" className="underline" target="_blank">source.unsplash.com</a>:</p>
          <p><Button to="/demo" label="See Demo" /></p>
          <p><small className="grey">The <a href="https://github.com/phillipmalboeuf/unsplash.xmalboeuf" className="underline" target="_blank">source files are available</a>. Let me know what you think of it.</small></p>
        </div>
      </div>
    </div>
  </div>
}