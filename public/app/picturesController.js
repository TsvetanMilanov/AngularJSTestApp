/* globals app */
app.controller('PicturesController', function($scope, $http) {
    $http.get('/allPictures')
        .then(function(data) {
            data = data.data;
            $scope.images = data;
        });
});