function LandingController ($scope, $location, DataService) {
  DataService.getData()
    .then(console.log('Greetings from the controller'))
    .then(data => $scope.age = data[0].age)
}

module.exports = LandingController