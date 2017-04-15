import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {

    addWords(subject,verb) {
        return axios.post(`${apiPrefix}`,{
          subject:subject,
          verb:verb
        })
        .then( response => console.log(response))
        .catch( error => console.log(error));
    }
}
