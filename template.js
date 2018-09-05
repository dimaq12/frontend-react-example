export default ({ appString, preloadedState, style }) => (
  `<!DOCTYPE html>
  <html>
  <head>
    <title>Todo App</title>
    <link rel="icon" type="image/png" href="../static/favicon.ico"/>
    ${style}
  </head>
  <body>
  <div id="app">${appString}</div>
  <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
  </script>
  <script src="../static/vendor.js"></script>
  <script src="../static/app.js"></script>
  </body>
  </html>`
)
