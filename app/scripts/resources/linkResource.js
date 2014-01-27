'use strict';

angular.module('app.resources')

.factory('LinkResource', function($resource) {
	return $resource('/data/links.json');
});