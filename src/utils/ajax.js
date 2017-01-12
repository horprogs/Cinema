function ajaxJson(url, method = 'get', params) {
    return fetch(url)
        .then(response => response.status === 200 ? response.json() : Promise.reject(response.statusText));
}

export function getJson(url, params) {
    return ajaxJson(url + params);
}