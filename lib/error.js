module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error(err);
    let code = err.code || err.statusCode || err.status || 500;
    ctx.body = global.rf(code, err.message, null);
  }
};
