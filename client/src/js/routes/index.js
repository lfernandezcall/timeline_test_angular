const angular = require('angular')
const angularRoute = require('angular-route')

const configRouteLanding = require('./landing')
const LandingController = require('./landing/LandingController')

angular.module('timelineTestRoutes', [ angularRoute ])
	
	.controller('LandingController', LandingController)
	.config(configRouteLanding)

module.exports = 'timelineTestRoutes'