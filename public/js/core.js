module.exports = {
    
    angularApp : angular.module('menu', []),

    menuController : function($scope, $http){
        var parsed;

        request(url, function(error, response, body){
            if (!error && response.statusCode == 200){
                parsed = JSON.parse(body);
                console.log(parsed["data"]);
            }
        });
        $scope.menuItems = parsed["data"]["outlets"];
    }    
}

