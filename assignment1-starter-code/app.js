(function () {
  'use strict';

   angular.module('LunchCheck',[])
   .controller('LunchCheckController', LunchCheckController);

   LunchCheckController.$inject = ['$scope'];
   function LunchCheckController ($scope) {
     $scope.message = "";
     $scope.checkFood = function () {
       if ($scope.foodList != "") {
         var numberFood = $scope.foodList.split(',').length;
         if (numberFood <= 3) {
           $scope.message = "Enjoy!";
         } else {
           $scope.message = "Too much!";
         }
       } else {
         $scope.message = "Please enter data first";
       }
     };
   }

})();
