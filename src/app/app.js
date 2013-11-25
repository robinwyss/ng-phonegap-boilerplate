angular.module( 'ngPhonegap', [
  'ngPhonegap.home',
  'ngTouch',
  'ngRoute'
])

.config( function myAppConfig ($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
})

.run( function run ($rootScope) {
  document.addEventListener('deviceready', function () {
    $rootScope.$broadcast("CordovaReady");
  });
});