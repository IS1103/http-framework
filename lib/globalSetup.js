module.exports = (() => {
  global["rf"] = require("./resultFormet"); //回傳格式;
  global['err'] = require('./resultErrorFormet'); //error 回傳格式;
  global['Timer'] = require('../util/Timer');
})();
