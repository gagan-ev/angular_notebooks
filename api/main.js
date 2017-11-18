const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.status(200);
  res.send('API works!');
});

app.listen(3000);
