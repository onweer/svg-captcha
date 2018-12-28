'use strict';
const config = require('../config/config.default');
const svgCaptcha = require('svg-captcha');
class Captcha {
  generate() {
    return svgCaptcha.create(config);
  }
}
module.exports = Captcha;