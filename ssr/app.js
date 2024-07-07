import express from 'express';
const app = express();

app.get('/', (req, res) => {
	res.send(`
    <html>
      <head>
        <title>Hello SSR</title>
      </head>
      <body>
        <h1>Hello SSR</h1>
      </body>
    </html>`);
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
