'use strict';

import * as constants from '../constants';
import http from './http';

class spotipposApi {

    constructor(host) {
        this.host = host;
    }

    get(resource, id) {
        return http.get(`${this.host}/${resource}/${id}`);
        
    }

    list(resource, query) {
        return http.get(`${this.host}/${resource}`, query);
    }
}

export default new spotipposApi(constants.spotipposApiHost);