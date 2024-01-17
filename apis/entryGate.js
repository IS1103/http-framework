var ins = null;
class API {
  apiMethod = 'post';
  apiPath = '/api/entryGate';

  method(ctx, next) {
    let rs = { apiHost: null };

    if (!ctx.request.body.version) {
      let err = new Error(`does not exist version`);
      err.code = 1001;
      throw err;
    }

    let platform = ctx.request.body.platform;
    switch (platform) {
      case 'android':
        rs.apiHost = '127.0.0.1:3000';
        break;
      case 'ios':
        rs.apiHost = '127.0.0.1:3000';
        break;
      case 'unity':
        rs.apiHost = '127.0.0.1:3000';
        break;
      case 'web':
        rs.apiHost = '127.0.0.1:3000';
        break;
      default: {
        let err = new Error(`does not exist platform:'${platform}'`);
        err.code = 1000;
        throw err;
      }
    }
    ctx.body = global.rf(0, '', rs);
  }
}

module.exports = (() => {
  if (ins) {
    return ins;
  }
  ins = new API();
  return ins;
})();
