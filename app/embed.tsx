
import * as React from "react"
import * as ReactDOM from "react-dom"

interface Props {
  photo_id: string,
  show_exif?: boolean,
  show_description?: boolean,
  show_location?: boolean,
  show_like_button?: boolean,
  show_download_button?: boolean
}
interface State {
  photo: any | undefined
}

export class Embed extends React.Component<Props, State> {

  constructor(props: Props){
    super(props)
    this.state = {
      photo: undefined
    }
  }

  componentDidMount() {
    this.fetch()
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.photo_id !== this.props.photo_id) {
      this.fetch()
    }
  }

  public fetch(): void {
    fetch(`https://api.unsplash.com/photos/${this.props.photo_id}?client_id=50211084c14cf9eba6181e3514e20fee3f2f8fe9983636f309f40b90ab14598a`)
      .then(response => response.json())
      .then(json => {
        this.setState({photo: json})
      })
  } 

  render() {
    return this.state.photo && this.state.photo.urls
      ? <div style={{border: "1px solid #f1f1f1", borderRadius: "4px", boxShadow: "0 2px 4px #f1f1f1", overflow: "hidden"}}>
        <img src={this.state.photo.urls.regular} />
        <div style={{fontSize: "15px", color: "#111", padding: "20px"}}>
          <div style={{display: "flex"}}>
            <span style={{flex: 1}}>
              <a href={this.state.photo.user.links.self} target="_blank" style={{display: "inline-flex", alignItems: "center", marginRight: "10px"}}>
                <img style={{display: "block", borderRadius: "50%", marginRight: "10px"}} src={this.state.photo.user.profile_image.small} />
                <span style={{color: "#111"}}>{this.state.photo.user.name}</span>
              </a>
            </span>
            {this.props.show_like_button && <a style={{display: "flex", alignItems: "center", color: "#999", fill: "currentColor", height: "32px", borderRadius: "4px", border: "1px solid #ddd", padding: "0 11px", marginRight: "10px"}} href={this.state.photo.links.download}>
              <svg style={{marginRight: "6px"}} viewBox="0 0 32 32" width="15" height="32">
                <path fill="#f15151" d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z" />
              </svg>
              {this.state.photo.likes}
            </a>}
            {this.props.show_download_button && <a style={{color: "#999", fill: "currentColor", height: "32px", borderRadius: "4px", border: "1px solid #ddd", padding: "0 11px"}} href={this.state.photo.links.download} rel="nofollow" download target="_blank">
              <svg viewBox="0 0 32 32" width="16" height="32">
                <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z" />
              </svg>
            </a>}
          </div>
          <p>
            {this.props.show_location && this.state.photo.location && <React.Fragment><small style={{fontSize: "12px"}}>{this.state.photo.location.title}</small><br/></React.Fragment>}
            {this.props.show_description && <React.Fragment>{this.state.photo.description || "..."}<br/></React.Fragment>}
            {this.props.show_exif && <small style={{fontSize: "12px", color: "#999"}}>{this.state.photo.exif.model} {this.state.photo.exif.focal_length}mm f/{this.state.photo.exif.aperture} {this.state.photo.exif.exposure_time} {this.state.photo.exif.iso}ISO</small>}
          </p>
        </div>
      </div>
      : null
  }
}

declare global {
  interface Window {
    Embed: React.ComponentClass
  }
}
window.Embed = Embed

