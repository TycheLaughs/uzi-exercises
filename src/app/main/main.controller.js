
  'use strict';

  angular
    .module('reader')
    .controller('MainController', function($timeout, newsGetter, $scope) {


      $scope.newsList = newsGetter.getNews();
      $scope.smallScreenVanisher = false;
      $scope.showMdList = true;
      $scope.selectedNews = 0;

      $scope.incrementNews = function(){
        $scope.selectedNews+=1;
       // console.log($scope.selectedNews);
      };

      $scope.revealSideSelector = function(){
        $scope.smallScreenVanisher = false;
      };

      $scope.showNews = function(index){
        $scope.selectedNews = index;
        $scope.smallScreenVanisher = true;
      };

      $scope.toggleMdSelector = function (){
          $scope.showMdList = !($scope.showMdList);
        if(!($scope.showMdList)) {
          angular.element(document.getElementById('mdNews')).addClass('col-md-12');
          angular.element(document.getElementById('mdNews')).removeClass('col-md-8');
        }
        else{
          angular.element(document.getElementById('mdNews')).addClass('col-md-8');
          angular.element(document.getElementById('mdNews')).removeClass('col-md-12');

        }
      };
    });




