import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    addWords() {
        return axios.post(`${apiPrefix}/writing`);
    }
}
