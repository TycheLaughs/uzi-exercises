/**
 * Created by susansouza on 7/24/2015.
 */
(function() {
  'use strict';

  describe('Service: newsGetter', function () {

    // load the service's module
    beforeEach(module('reader'));

    // instantiate service
    var newsGetter;

    beforeEach(inject(function (_newsGetter_) {
      newsGetter = _newsGetter_;
    }));


    it('should have JSON object named data', function(){
      expect(newsGetter.getNews().length).toBe(4);

    });

    describe('Function: getNews', function(){
      it('should return the JSON object that is the value of the responseData property of the data object', function(){
        expect(newsGetter.getNews().length).toBe(4);
      });
    });

  });
})();
