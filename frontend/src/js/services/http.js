'use strict';

const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return response.json().catch(err => {
            return Promise.reject(response);
        }).then(response => {
            return Promise.reject(response);
        });
    }
};

const json = (response) => response.json().catch(() => null);


function Http (fetch) {

    function get(path, query = {}, options = {}) {

        let queryString = Object.entries(query).map(entry => {

            if (entry[1] instanceof Array) {
                return entry[1].map(v => `${entry[0]}=${encodeURIComponent(v)}`).join('&');
            }

            return `${entry[0]}=${encodeURIComponent(entry[1])}`;
        }).join('&');

        if (queryString) {
            queryString = `?${queryString}`;
        }

        return fetch(`${path}${queryString}`, Object.assign({}, options, { method: 'GET' })).then(status).then(json);
    }

    function post(path, body = {}, options = {}) {
        return fetch(path, Object.assign({}, options, { method: 'POST', body: JSON.stringify(body) })).then(status).then(json);
    }

    function put(path, body = {}, options = {}) {
        return fetch(path, Object.assign({}, options, { method: 'PUT', body: JSON.stringify(body) })).then(status).then(json);
    }

    return {
        get, post, put
    };
}

export default Http;