import 'whatwg-fetch';
import { apiPrefix } from '../../etc/config.json';

export default {

    addWords(subject,verb) {
        return fetch('http://localhost:8080', {
                      method: 'POST',
                      headers: {
                        "Content-type": "application/json"
                      },
                      body: JSON.stringify({
                        subject: subject,
                        verb: verb
                      })
                })
                .then(function (response) {
                    return response.text();
                })
                .then(function(data) {
                    alert(data);
                })
                .catch(function (error) {
                    console.log('Request failed', error);
                });
//x-www-form-urlen-coded;text/plain;charset=UTF-8
    },
    addTime(time) {
      return fetch('http://localhost:8080', {
                    method: 'POST',
                    headers: {
                      "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                      time: time
                    })
             })
             .then(response => response.text())
             .catch(error => console.log('Request failed',error));
    },
    addType(type) {
      return fetch('http://localhost:8080', {
                    method: 'POST',
                    headers: {
                      "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                      type: type
                    })
             })
             .then(response => response.text())
             .catch(error => console.log('Request failed',error));
    }

}
