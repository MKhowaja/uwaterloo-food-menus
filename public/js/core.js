( function() {

    var myApp = angular.module('myApp', []);

    myApp.controller('menuController', ['$scope', '$http', function($scope, $http) {
        $http.get('/menu')
            .success(function(data) {
                $scope.restaurants = data ["data"]
                $scope.day = ( new Date().getDay() || 7 ) - 1; //Makes Monday 0, Tuesday 1 and so on
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }]);

    myApp.controller('announcementController', ['$scope', '$http', function($scope, $http) {
        $scope.isNews = false;
        $http.get('/announcements')
            .success (function(data) {
                $scope.announcements = data["data"];
                if ($scope.announcements && $scope.announcements[0] && $scope.announcements[0].ad_text != null){
                    $scope.isNews = true;
                }
            })
            .error (function(data) {
               console.log('Error: ' + data); 
            });
    }]);

    myApp.controller('locationsController', ['$scope', '$http', function($scope, $http) {
        $http.get('/locations')
            .success(function(data) {
                // for ( var i = 0; i < data ["data"].length; i++ ) {
                //     if (data ["data"] [i].outlet_name){
                //         //item.outlet_name = item.outlet_name.substring(0, item.outlet_name.indexOf('-'));
                //         console.log(data ["data"] [i].outlet_name.substring(0, data ["data"] [i].outlet_name.indexOf('-')));
                //     }
                // }
                $scope.locations = data ["data"]
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }]);

}());