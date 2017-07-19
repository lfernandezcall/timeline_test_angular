var fs = require('fs')
var htmlLanding = fs.readFileSync(__dirname + '/template.html', 'utf8')

function configRoutes ($routeProvider) {
  $routeProvider
    .when('/', {
      template: htmlLanding,
      controller: 'LandingController'
    })
}

module.exports = configRoutes