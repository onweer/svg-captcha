'use strict';

const mock = require('egg-mock');

describe('test/egg-svg-captcha.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-svg-captcha-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, eggSvgCaptcha')
      .expect(200);
  });
});
