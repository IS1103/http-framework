const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('./lib/router');
const errorHandler = require('./lib/error');
const logHandler = require('./lib/logger');
var cors = require('koa-cors');
require('./lib/globalSetup');

(async () => {
  const app = new Koa();

  app.use(cors());
  app.use(logHandler);
  app.use(errorHandler);
  app.use(koaBody.koaBody());

  await router.setup();
  app.use(router.routes());

  let webPort = 3000;
  app.listen(webPort);
  console.log('play-mate-gate start port of ' + webPort);
})();
