export class HomeController {
    static index(req, res) {
        return res
            .end(JSON.stringify({ ping: 'pong' }));
    }
}
