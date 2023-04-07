const html = {
  htmlContainer: function (data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Black+And+White+Picture&display=swap" rel="stylesheet">
      <style>
        *{
          box-sizing: border-box;
          padding: 0%;
          margin: 0%;
          font-family: 'Black And White Picture', sans-serif;
        }
      </style>
    </head>
    <body>
      ${data}
    </body>
    </html>
    `;
  },
  testData: `<h1>나는 김지섭이다.</h1>`,
  rootData: `<script src="/main.js"></script>`,
};
export default html;
