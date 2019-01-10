module.exports = (server) => {
    server.get('/route2', (req, res, next) => {
      res.send({message:'Hello from route 2'});
      return next();
    });
};