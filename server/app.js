import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from '../etc/config.json';

//import * as db from './utils/DataBaseUtils';

// Initialization of express application
const app = express();

// Set up connection of database
//db.setUpConnection();

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful api handlers

app.get('/',(req,res)=> {
  res.send(req.body);
  console.log(req.body);
});
app.post('/',(req,res) => {
  let subject = req.body.subject;
  console.log(typeof subject);
  let verb = req.body.verb;
  let js = {
    subject:subject
  };
  console.log(js);
res.send(subject);
  console.log(subject);
  console.log(verb);
});

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});

/*let http = require('http');

let s = http.createServer();
s.on('request', function(request, response) {
      response.writeHead(200,{
        'Content-Type': 'x-www-form-urlen-coded'
    });
      console.log(request.method);
      console.log(request.headers);
      console.log(request.url);

      let data = '';
      request.on('data', function(chunk) {
        data += chunk.toString();
      });
      request.on('error', function(err) {
        // This prints the error message and stack trace to `stderr`.
          console.log(err.stack);
      });
      request.on('end', function() {
        console.log(data);
        response.write("hello");
        response.end();
      });

});

s.listen(`${serverPort}`);
console.log(`Browse to http://127.0.0.1: ${serverPort}`);
*/
