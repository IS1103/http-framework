module.exports = (errCode, msg, obj) => {
  return {
    err: errCode ? errCode : 0,
    msg: msg ? msg : '',
    obj: obj ? obj : null,
  };
};
