module.exports = (ctx, next) => {
  // console.log(`${ctx.method} ${ctx.url} Request - ${ctx.body}`);
  // console.log(ctx.response.header);
  const start_time = Date.now();
  return next().then(() => {
    const ms = Date.now() - start_time;

    // ctx.request.body = JSON.parse(ctx.request.body);
    console.log(
      `${ctx.method} ${ctx.url} ${ms}ms 
      Request  - ${JSON.stringify(ctx.request.body)}
      Response - ${JSON.stringify(ctx.body)}`
    );
  });
};
