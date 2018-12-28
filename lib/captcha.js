'use strict';
const config = require('../config/config.default');
const svgCaptcha = require('svg-captcha')(captcha);
class Captcha {
  generate() {
    return svgCaptcha.create();
  }
}
module.exports = Captcha;