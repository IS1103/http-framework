const KoaRouter = require('koa-router');
const fs = require('fs');
const path = require('path');

var ins = null;

//Singleton
class Router {
  constructor() {}

  async setup() {
    this.router = new KoaRouter();
    await this.importAllApi();
  }

  routes() {
    return this.router.routes();
  }

  async importAllApi() {
    const apisAbsolutePath = path.join(__dirname, '../apis/');
    let filesName = await fs.readdirSync(apisAbsolutePath);
    filesName.forEach((fileName) => {
      let api = require(apisAbsolutePath + fileName);
      this.router[api.apiMethod](api.apiPath, api.method);
    });
  }
}

module.exports = (() => {
  if (ins) return ins;

  ins = new Router();
  return ins;
})();
