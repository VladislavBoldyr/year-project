import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
//import {algoritmForRegularVerbs} from './algoritmForRegularVerbs';
import { serverPort } from '../etc/config.json';
import * as alg from './algoritmForRegularVerbs';
import * as db from './utils/DataBaseUtils';


// Initialization of express application
const app = express();
let algoritmForRegularVerbs = require('./algoritmForRegularVerbs');
// Set up connection of database
db.setUpConnection();

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful api handlers


app.post('/', (req,res) => {
  console.log(req.body);
   let resualt="l";
   db.listNotes(req.body.verb).then(data => {
     if (data == null) {
      // console.log(alg.algoritmForRegularVerbs(req.body.subject,req.body.verb,req.body.time,req.body.type,req.body.typeSentence));
       resualt= alg.algoritmForRegularVerbs(req.body.subject,req.body.verb,req.body.time,req.body.type,req.body.typeSentence);
       //let res = algoritmForRegularVerbs(req.body.subject,reb.body.verb,req.body.time,req.body.type,req.body.typeSentence);
       //console.log(res);
       console.log(resualt);
       return resualt;
              //console.log(algoritmForRegularVerbs(req.body.subject,reb.body.verb,req.body.time,req.body.type,req.body.typeSentence));
        //algoritmForRegularVerbs(req.body.subject,reb.body.verb,req.body.time,req.body.type,req.body.typeSentence);
      //  console.log(algoritmForRegularVerbs(req.body.subject,reb.body.verb,req.body.time,req.body.type,req.body.typeSentence));
     }
     else {
       console.log("kek");

     }

     //let array = data;
     //console.log(array[0].body.word);
   }).then(function(data){
        res.send(data);
   });
   //let subject = req.body.subject;

   //res.send(resualt);
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
