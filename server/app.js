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
/*app.get('/words', (req, res) => {
    db.listWords().then(data => res.send(data));
});*/
app.get('/written',(req,res)=> {
   res.send('API is running');
  res.send('hello world');
});
app.post('/written',(req,res) => {
   res.send('API is running');
  let subject = req.body.subject;
  console.log("Hello");
  //console.log(req.body.subject);

});

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});
