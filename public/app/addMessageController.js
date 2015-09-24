/* globals app, toastr */
app.controller('AddMessageController', function($scope, $http) {
    $scope.saveMessage = function(message) {
        if (!message || !message.content || message.content.length <= 0) {
            toastr.error("Message must have content!");
            return;
        }

        $http.post('/messages/add', message)
            .then(function(data) {
                toastr.success('Message added!\n' + data.data.author + '\n' + data.data.content);
            }, function(err) {
                toastr.error('Cannot add message!' + err);
                console.log(err);
            });
    };
});