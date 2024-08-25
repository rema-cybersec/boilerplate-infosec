const express = require('express');
const app = express();
// MY CODE HERE ==============
const helmet = require('helmet');
app.use(helmet.hidePoweredBy({setTo: "PHP 4.2.0"}));
app.use(helmet.frameguard({action: 'deny'}));
// MY CODE HERE ==============
module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
