const Router = require('express/lib/router');
const Controller = require('./controller');
const AppRouter = Router();

AppRouter.post('/', Controller.handleRequest());

module.exports = AppRouter;
