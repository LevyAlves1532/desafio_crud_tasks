export function extractQueryParams(query) {
    return query.substr(1).split('&').reduce((queryParams, param) => {
        if (param.indexOf('=') > -1) {
            const [key, value] = param.split('=');

            if (key && value) {
                queryParams[key] = value;
            }
        }

        return queryParams;
    }, {})
}
