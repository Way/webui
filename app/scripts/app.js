'use strict';

angular.module('app.controllers', []);
angular.module('app.resources', []);
angular.module('app.services', []);

angular.module('webuiApp', [
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'app.controllers',
    'app.resources',
    'app.services'
])

// App Run
// -------------------------
.run(function($rootScope, $state, $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    // Listen to every state change.
    // (@see https://github.com/angular-ui/ui-router/wiki#wiki-state-change-events)
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        console.log('stateChange', toState, toParams, fromState, fromParams);
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        console.log('stateChange', toState, toParams, fromState, fromParams);
    });
});
