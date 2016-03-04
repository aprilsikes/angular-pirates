app.controller('PiratesController', ['$scope', 'PiratesService', function ($scope, PiratesService) {
  PiratesService.all().then(function (pirates) {
    $scope.pirates = pirates.data;
  })
}])
