const restify = require('restify');
const routes = require("./routes");
const morgan  = require('morgan');

const server = restify.createServer({ name: 'api' });

server.use(morgan('combined'));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser({
        mapParams: true
    }));
server.use(restify.plugins.acceptParser(server.acceptable));

routes(server);

server.listen(3000);

// export for testing
module.exports = server;
