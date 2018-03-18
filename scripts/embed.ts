

interface Settings {
  target: HTMLImageElement,
  photo_id: string
}

class Embed {
  constructor(settings: Settings) {
    console.log(settings)
    fetch(`https://api.unsplash.com/photos/${settings.photo_id}?client_id=50211084c14cf9eba6181e3514e20fee3f2f8fe9983636f309f40b90ab14598a`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        settings.target.parentElement.setAttribute("style", "position:relative;border:1px solid #ddd;border-radius:4px;boxShadow:0 8px 16px rgba(0,0,0,.15)")
        settings.target.insertAdjacentHTML("afterend", `
          <div style="padding:20px;">
            <div style="display:flex;">
              <span style="flex:1">
                <a href="${json.user.links.self}" target="_blank" style="display:inline-flex;align-items:center;margin-right:10px;">
                  <img style="border-radius:50%;margin-right:10px" src="${json.user.profile_image.small}">
                  <span style="color:#111;">${json.user.name}</span>
                </a>
              </span>
              <a style="color:#999;fill:currentColor;height:32px;border-radius:4px;border:1px solid #ddd;padding:0 11px;margin-right:10px" href="${json.links.download}" rel="nofollow" download target="_blank"></a>
              <a style="color:#999;fill:currentColor;height:32px;border-radius:4px;border:1px solid #ddd;padding:0 11px;" href="${json.links.download}" rel="nofollow" download target="_blank"><svg version="1.1" viewBox="0 0 32 32" width="16" height="32"><path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path></svg></a>
            </div>
            <p>${json.description}</p>
          </div>`)
      })
  }
}

interface Window {
  Embed: Function
}
window.Embed = Embed