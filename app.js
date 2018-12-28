'use strict';
const Captcha = require('./lib/captcha');
module.exports = app => {
  const captcha = new Captcha();
  app.captcha = captcha
};