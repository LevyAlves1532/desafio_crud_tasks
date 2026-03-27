import { createServer } from 'node:http';

import { json } from './middlewares/json.js';
import { routes } from './core/routes.js';
import { buildRoutePath } from './utils/build-route-path.js';
import { extractQueryParams } from './utils/extract-query-params.js';

const server = createServer(async (req, res) => {
    await json(req, res);

    const { method, url } = req;

    const route = routes
        .map(r => ({
            ...r,
            path: buildRoutePath(r.path),
        }))
        .find(r => {
            return r.method === method && r.path.test(url);
        });

    if (route) {
        const routeParams = req.url.match(route.path);

        const { query, ...params } = routeParams.groups;  

        req.params = params;
        req.query = query ? extractQueryParams(query) : {};

        if (route.validates.length > 0) {
            const next = route.validates.reduce((_, v) => {
                return v(req, res);
            }, true);

            if (!next) {
                return;
            }
        }

        return route.handler(req, res);
    }

    return res
        .writeHead(404)
        .end(JSON.stringify({ 
            message: 'Route not found',
            request: {
                method, 
                path: url,
            },
        }));
});

server.listen(8888);
