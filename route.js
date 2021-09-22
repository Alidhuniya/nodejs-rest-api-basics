const http = require('http');
const url = require('url');
module.exports = http.createServer((req, res) => {
    var userOps = require('./controller.js');
    const reqUrl =  url.parse(req.url, true);
// GET endpoint
  if(reqUrl.pathname == '/users' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.getUsers(req, res);
   }
   // POST endpoint
else if(reqUrl.pathname == '/user' && req.method === 'POST') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    userOps.createUser(req, res);
 }
 else {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    
    userOps.invalidUrl(req, res);
  }
 }
 
)