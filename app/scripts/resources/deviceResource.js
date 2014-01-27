'use strict';

angular.module('app.resources')

// A RESTful factory for retreiving devices from 'devices.json'
.factory('DeviceResource', function ($http, utils) {
    var path = '/data/devices.json';
    var devices = $http.get(path).then(function (resp) {
        return resp.data.devices;
    });

    var factory = {};
    factory.all = function () {
        return devices;
    };
    factory.get = function (id) {
        return devices.then(function(){
            return utils.findById(devices, id);
        });
    };
    return factory;
});