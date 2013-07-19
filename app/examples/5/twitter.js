var TwitterController = function ($scope, $http) {
  $scope.submitSearch = function () {
    $http.jsonp(
      "http://search.twitter.com/search.json?q=" +
        $scope.searchTerm +
        '&callback=JSON_CALLBACK'
    ).success(function (data) {
        $scope.results = data.results;
      })
  };
};
