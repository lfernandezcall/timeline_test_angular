const angular = require('angular')

const routesApp = require('./routes')
const DataService = require('./services/DataService')

angular.module('timelineTest', [ routesApp ])
	.factory('DataService', DataService)