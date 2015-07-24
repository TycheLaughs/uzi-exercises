(function() {
  'use strict';

  describe('Controller: MainController', function(){

    beforeEach(module('reader'));

    var mainCtrl, scope, newsGetter, element;

    beforeEach(inject(function($controller, $rootScope,_newsGetter_){
      scope = $rootScope.$new();
      newsGetter = _newsGetter_;
      mainCtrl = $controller('MainController',{
        $scope: scope
      });
    }));

    it('should have four news results', function() {
        expect(scope.newsList.length).toBe(4);
    });

    it('should have a Boolean named smallScreenVanisher set to false', function(){
        expect(scope.smallScreenVanisher).toBe(false);

    });

    it('should have a Boolean named showMdList set to true', function(){
        expect(scope.showMdList).toBe(true);

    });

    it('should have an integer used to track selected news item index named selectedNews initialized to 0', function(){
        expect(scope.selectedNews).toBe(0);

    });

    describe('Function: incrementNews()', function(){
      it('should increment the index of the news we want to view', function(){
        expect(scope.selectedNews).toBe(0);
        scope.incrementNews();
        expect(scope.selectedNews).toBe(1);
      });
    });

    describe('Function: revealSideSelector()', function(){
      it('should set the smallScreenVanisher to false', function(){
        scope.smallScreenVanisher = true;
        expect(scope.smallScreenVanisher).toBe(true);
        scope.revealSideSelector();
        expect(scope.smallScreenVanisher).toBe(false);
      });
    });

    describe('Function: showNews(index)', function(){
      it('should set the selectedNews to the index passed on click and makes smallScreenVanisher true', function(){
        expect(scope.selectedNews).toBe(0);
        expect(scope.smallScreenVanisher).toBe(false);
        scope.showNews(2);
        expect(scope.selectedNews).toBe(2);
        expect(scope.smallScreenVanisher).toBe(true);
      });
    });

    describe('Function: toggleMdSelector()', function(){
      it('should toggle the Boolean state of showMdList and the class of mdNews between col-md-8 and col-md-12', function(){
        expect(scope.showMdList).toBe(true);
        scope.toggleMdSelector();
        expect(scope.showMdList).toBe(false);
      });

    });
  });
})();
