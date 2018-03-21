
import * as compression from "compression"
import * as express from "express"

import * as ReactDOM from "react-dom/server"
import * as React from "react"
import { StaticRouter } from "react-router-dom"

import { Routes } from "../app/routes"


const server = express()

server.use('/dist', express.static(`${__dirname}`))

server.get('/*', (req, res) => {
  res.send(ReactDOM.renderToString(
    <html>
    <head>
      <meta charSet="utf-8" />
      <title>Unsplash X Phillip Malboeuf</title>
      <link rel="stylesheet" type="text/css" href="/dist/app.css" />
    </head>
    <body>
      <section className="app" id="app">
        <StaticRouter location={req.originalUrl} context={{}}>
          <Routes />
        </StaticRouter>
      </section>
      
      <script src="/dist/embed.js"></script>
      <script src="/dist/app.js"></script>
    </body>
    </html>
  ))
})


const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`Listening on port ${port}...`)
});