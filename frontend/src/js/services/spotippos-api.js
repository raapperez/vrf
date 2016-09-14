'use strict';

import * as constants from '../constants';
import Http from './http';

class SpotipposApi {

    constructor(http) {
        this.host = constants.spotipposApiHost;
        this.http = http;        
    }

    get(resource, id) {
        return this.http.get(`${this.host}/${resource}/${id}`);
        
    }

    list(resource, query) {
        return this.http.get(`${this.host}/${resource}`, query);
    }
}

export default SpotipposApi;