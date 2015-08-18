'use strict';
/* globals _ */

describe('ThemeService', function () {
  beforeEach(module('quill-grammar.services.lms.theme'));

  var themeService;
  var timeout;

  beforeEach(function () {
    inject(function (ThemeService, $timeout) {
      themeService = ThemeService;
      timeout = $timeout;
    });
  });

  describe('API Themes', function () {
    it('gets all themes', function (done) {
      themeService.get().then(function (themes) {
        _.each(themes, function (t) {
          expect(t).to.be.an('object');
          expect(t.uid).to.be.a('string');
          expect(t.title).to.be.a('string');
        });
        done();
      });
      timeout.flush();
    });
  });
});
