
import * as React from "react"

import { Checkbox } from "./checkbox"
import { TextField } from "./textfield"


interface Props {}
interface State {
  photo_id: string,
  show_exif: boolean,
  show_description: boolean,
  show_location: boolean,
  show_stats: boolean,
  show_like_button: boolean,
  show_download_button: boolean
}

export default class EmbedBuilder extends React.Component<Props, State> {

  constructor(props: Props){
    super(props)
    this.state = { 
      photo_id: "nEWGCi7gB8U",
      show_exif: true,
      show_description: false,
      show_location: true,
      show_stats: true,
      show_like_button: true,
      show_download_button: true
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {

  }

  public render() {
    return <div className="grid grid--guttered">
      <div className="col col--12of12">
        <TextField name="photo_id" label="Enter the id or the url of an Unplash photo"
          value={this.state.photo_id}
          placeholder={`https://unsplash.com/photos/${this.state.photo_id}`}
          onChange={(e)=> this.setState({photo_id: e.currentTarget.value})} />
      </div>
      <div className="col col--9of12">
        <div><img onLoad={(e)=> new Embed({target: e.currentTarget, photo_id: this.state.photo_id})} src={`https://source.unsplash.com/${this.state.photo_id}/800x`} /></div>
      </div>
      <div className="col col--3of12">
        <h6>Content</h6>

        <Checkbox name="show_description" label="Description" checked={this.state.show_description}
          onChange={(e)=> this.setState({show_description: !this.state.show_description})} />

        <Checkbox name="show_location" label="Location" checked={this.state.show_location}
          onChange={(e)=> this.setState({show_location: !this.state.show_location})} />

        <Checkbox name="show_exif" label="EXIF" checked={this.state.show_exif}
          onChange={(e)=> this.setState({show_exif: !this.state.show_exif})} />

        <Checkbox name="show_stats" label="Stats" checked={this.state.show_stats}
          onChange={(e)=> this.setState({show_stats: !this.state.show_stats})} />

        <hr/>

        <h6>Buttons</h6>

        <Checkbox name="show_like_button" label="Like" checked={this.state.show_like_button}
          onChange={(e)=> this.setState({show_like_button: !this.state.show_like_button})} />

        <Checkbox name="show_download_button" label="Download" checked={this.state.show_download_button}
          onChange={(e)=> this.setState({show_download_button: !this.state.show_download_button})} />
      </div>
      <div className="col col--10of12">
        <label htmlFor="script">Copy and paste this script anywhere on your site:</label>
        <textarea id="script" readOnly></textarea>
      </div>
    </div>
  }
}