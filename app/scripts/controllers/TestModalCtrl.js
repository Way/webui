'use strict';

angular.module('app.controllers')

.controller('TestModalCtrl', function($scope, $modal, $log) {

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.settings = {};

    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'modal.content.html', // inline template (see index.html)
            controller: ModalInstanceCtrl,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            },

            // Settings
            backdrop: $scope.settings.backdrop,
            keyboard : $scope.settings.keyboard
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};