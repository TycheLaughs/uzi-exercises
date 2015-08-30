/**
 * Created by susansouza on 7/24/2015.
 */
(function () {
  'use strict';
  describe('Filter: trustHtml', function () {

    beforeEach(module('reader'));

    var trustHtml;
    beforeEach(inject(function ($filter) {

      trustHtml = $filter('trustHtml');
    }));

    it('should return the input as html, with several invalid substrings replaced', function () {
      var text = "<b>http%3A%2F%2Fwww.cnn.com%2F2015%2F07%2F22%2Fpolitics%2Fobama-family-kenya-brooke-baldwin%2F</b>&nbsp;";
      expect(trustHtml(text).$$unwrapTrustedValue()).toBe("http%3A%2F%2Fwww.cnn.com%2F2015%2F07%2F22%2Fpolitics%2Fobama-family-kenya-brooke-baldwin%2F");
    });

  });
}());
