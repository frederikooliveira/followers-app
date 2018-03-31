
const express = require('express');
const app = express();
var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/dist'));

app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/index.html');
});

server.listen(port, function() {
  console.log("App is running on port " + port);
});