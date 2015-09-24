/* globals app */
app.controller('MessagesController', function($scope, $http) {
    $http.get('/api/messages')
        .then(function(messages) {
            messages = messages.data;
            $scope.messages = messages;
        }, function(err) {
            console.log('Error while loading messages: ' + JSON.stringify(err));
        });
});