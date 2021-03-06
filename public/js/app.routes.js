angular.module('routerRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider

  .when('/', {
    templateUrl  : 'views/pages/home.html',
    controller   : 'mainController',
    controllerAs : 'main'
  })

  .when('/searchresults', {
    templateUrl  : 'views/pages/searchresults.html',
    controller   : 'searchController',
    controllerAs : 'vm'
  })

  .when('/styles', {
    templateUrl  : 'views/pages/styles.html',
    controller   : 'stylesController',
    controllerAs : 'vm'
  })

  .when('/style/:id', {
    templateUrl  : 'views/pages/style.html',
    controller   : 'styleController',
    controllerAs : 'vm'
  })

  .when('/breweries', {
    templateUrl  : 'views/pages/breweries.html',
    controller   : 'breweriesController',
    controllerAs : 'vm'
  })

  .when('/breweries/newbrewery', {
    templateUrl  : 'views/pages/newbrewery.html',
    controller   : 'breweriesController',
    controllerAs : 'vm'
  })

  .when('/breweries/newbeer', {
    templateUrl  : 'views/pages/newbeer.html',
    controller   : 'breweriesController',
    controllerAs : 'vm'
  })

  .when('/breweriesshow/:id', {
    templateUrl  : 'views/pages/breweriesshow.html',
    controller   : 'breweryController',
    controllerAs : 'vm'
  })

  .when('/brewery/:id/beers', {
    templateUrl  : 'views/pages/brewerybeershow.html',
    controller   : 'beershowController',
    controllerAs : 'vm'
  })

  .when('/beershow', {
    templateUrl  : 'views/pages/beershow.html',
    controller   : 'beerController',
    controllerAs : 'vm'
  })

  .when('/beerspeak', {
    templateUrl  : 'views/pages/beerspeak.html',
    controller   : 'beerspeakController',
    controllerAs : 'vm'
  });

  $locationProvider.html5Mode(true);

})
