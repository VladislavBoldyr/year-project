import axios from 'axios';
//import fetch from 'fetch';
import { apiPrefix } from '../../etc/config.json';

export default {

    addWords(subject,verb) {
        return '';/*fetch('/', {
                  method: "POST",
                  body: JSON.stringify({
                  subject:subject,
                  verb:verb
                  }),
                  headers: {
                  "Content-Type": "application/json"
                  },
                  credentials: "same-origin"
                  }).then(function(response) {
                  //response.status //=> number 100–599
                  //response.statusText //=> String
                  //response.headers //=> Headers
                  //response.url //=> String

                  return response.text()
                  }, function(error) {
                  error.message //=> String
                });*/
 /*axios.get(`${apiPrefix}`,{
          subject:subject,
          verb:verb
        })
        .then( response => console.log("gfg"))
        .catch( error => console.log(error));*/
    }
}
