module.exports = function (app) {
  const routes = require('../routes/index');
  const users = require('../routes/users');

  app.use('/', routes);
  app.use('/users', users);
};
