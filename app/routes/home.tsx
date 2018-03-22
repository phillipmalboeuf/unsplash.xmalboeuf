
import * as React from "react"
import { Button } from "../components/button"
import { Tag } from "../components/tag"

interface Props {}

export const Home: React.SFC<Props> = (props) => {
  return <div className="hero hero--home black_back">
    <div className="hero__content white">
      <h1>Unsplash <span className="thin">X Phillip Malboeuf</span></h1>
      <p>Hi Unsplash 🙀!<br/>I've set out to attempt to become your next full-stack developer. Your quest for a new dev stops here!</p>

      <div className="grid grid--guttered">
        <div className="col col--6of12">
          <p>First, I'd like to say that I'm significantly experienced with these tools and concepts:</p>
          <p>JavaScript<br/>{["React", "Express", "TypeScript", "Parcel", "Webpack"].map((tag, index)=> <Tag key={index} label={tag} />)}</p>
          <p>Python<br/>{["Flask", "Celery", "Tornado", ].map((tag, index)=> <Tag key={index} label={tag} />)}</p>
          <p>Concepts<br/>{["Rest APIs", "SSR", "WebSockets", "Micro-services", "Ecommerce", "Conversational UI", "UX Research"].map((tag, index)=> <Tag key={index} label={tag} />)}</p>
          <p>Other techs<br/>{["Dokku", "MongoDB", "Imgix", "Algolia", "Stripe", "Shopify"].map((tag, index)=> <Tag key={index} label={tag} />)}</p>
        </div>
        <div className="col col--6of12">
          <p className="small_bottom">Second, here are some of my recent freelance projects:</p>
          <ol className="small">
            <li><a href="https://aubergebishop.ca/" target="_blank">aubergebishop.ca</a></li>
            <li><a href="https://www.hotelsdauphin.ca/" target="_blank">www.hotelsdauphin.ca</a></li>
            <li><a href="https://store.unsplash.com/" target="_blank">store.unsplash.com</a></li>
            <li><a href="https://juneswimwear.com/" target="_blank">juneswimwear.com</a></li>
            <li><a href="https://wisemenscare.com/" target="_blank">wisemenscare.com</a></li>
            <li><a href="https://stdenis.co/" target="_blank">stdenis.co</a></li>
            <li><a href="https://www.hubstudio.co/" target="_blank">www.hubstudio.co</a></li>
            <li><a href="http://www.danielaandrade.com/" target="_blank">www.danielaandrade.com</a></li>
          </ol>
          <p>Finally, I've made this thing this week, a small extension to your <a href="https://source.unsplash.com" className="underline" target="_blank">source.unsplash.com</a>:</p>
          <p><Button to="/demo" label="See Demo" /></p>
          <p><small>The <a href="https://github.com/phillipmalboeuf/unsplash.xmalboeuf" className="underline" target="_blank">source files are available</a>. Let me know what you think of it.</small></p>
        </div>
      </div>
    </div>
  </div>
}