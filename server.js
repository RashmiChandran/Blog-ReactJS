const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(port);
server.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../', 'build', 'index.html'));
});