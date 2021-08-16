const IndexTemplate = (content: any) => `
  <!DOCTYPE html>
  <html lang="ru">
  <head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="/static/app.js" type="application/javascript"></script>

    <title>Reddit</title>
  </head>
  <body>
    <div id="root">${content}</div>
  </body>
  </html>
`;

export default IndexTemplate;
