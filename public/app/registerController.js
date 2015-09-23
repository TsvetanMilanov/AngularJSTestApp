/* globals app, toastr */
app.controller('RegisterController', function($scope, $http) {
    $scope.registerUser = function(){
        toastr.success("User register!");
    };
});