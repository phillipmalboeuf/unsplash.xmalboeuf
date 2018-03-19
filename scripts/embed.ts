

interface Settings {
  target: HTMLImageElement,
  photo_id: string,
  show_exif?: boolean,
  show_description?: boolean,
  show_location?: boolean,
  show_stats?: boolean,
  show_like_button?: boolean,
  show_download_button?: boolean
}

const Embed = {
  render: (settings: Settings)=>  {
    fetch(`https://api.unsplash.com/photos/${settings.photo_id}?client_id=50211084c14cf9eba6181e3514e20fee3f2f8fe9983636f309f40b90ab14598a`)
      .then(response => response.json())
      .then(json => {
        settings.target.parentElement.setAttribute("style", "position:relative;border:1px solid #f1f1f1;border-radius:4px;box-shadow:0 2px 4px #f1f1f1;overflow:hidden")
        settings.target.insertAdjacentHTML("afterend", `
          <div style="padding:20px;">
            <div style="display:flex;">
              <span style="flex:1">
                <a href="${json.user.links.self}" target="_blank" style="display:inline-flex;align-items:center;margin-right:10px;">
                  <img style="display:block;border-radius:50%;margin-right:10px" src="${json.user.profile_image.small}">
                  <span style="color:#111;">${json.user.name}</span>
                </a>
              </span>
              ${settings.show_like_button ? `<a style="display:flex;align-items:center;color:#999;fill:currentColor;height:32px;border-radius:4px;border:1px solid #ddd;padding:0 11px;margin-right:10px" href="${json.links.download}"><svg style="margin-right:6px;" viewBox="0 0 32 32" width="15" height="32"><path fill="#f15151" d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path></svg> ${json.likes}</a>` : ""}
              ${settings.show_download_button ? `<a style="color:#999;fill:currentColor;height:32px;border-radius:4px;border:1px solid #ddd;padding:0 11px;" href="${json.links.download}" rel="nofollow" download target="_blank"><svg viewBox="0 0 32 32" width="16" height="32"><path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path></svg></a>` : ""}
            </div>
            ${settings.show_location ? `<p><small>${json.location.title}</small></p>` : ""}
            ${settings.show_description ? `<p>${json.description}</p>` : ""}
          </div>`)
      })
  }
}

interface Window {
  Embed: {
    render: Function
  }
}
window.Embed = Embed

