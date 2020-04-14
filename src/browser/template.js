export default ({ title, body }) => {
  return `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <link rel="stylesheet" href="css/main.css">
            <title>${title}</title>
        </head>
        <body>
            <div id="app">${body}</div>
            <script src="app.bundle.js" defer></script>
        </body>
    </html>
  `
}
