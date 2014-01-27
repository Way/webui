'use strict';

angular.module('app.controllers')

.controller('TestPopoverCtrl', function($scope) {

	$scope.$parent.testmodule = 'Popover';

    $scope.dynamicPopover = 'Hello, World!';
    $scope.dynamicPopoverTitle = 'Title';
});