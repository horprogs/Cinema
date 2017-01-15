require('es6-promise').polyfill();
require('fetch-everywhere');

function ajaxJson(url) {
    return fetch(url)
        .then(response => response.status === 200 ? response.json() : window.Promise.reject(response.statusText));
}

export function getJson(url, params) {
    return ajaxJson(url + params);
}