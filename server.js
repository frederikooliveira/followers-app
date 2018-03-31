
const express = require('express');
const app = express();
var port = process.env.PORT || 8000;
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.all('*', (req, res) => {
  const page = path.join(__dirname, 'dist', 'index.html');
  res.status(200).sendFile(page);
});

app.listen(port, function() {
  console.log("App is running on port " + port);
});