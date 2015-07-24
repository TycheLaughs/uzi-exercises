
  'use strict';

  angular
    .module('reader')
    .controller('MainController', function(newsGetter, $scope) {

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


      };
    });




