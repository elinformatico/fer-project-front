angular.module('mobieApp', ['ui.bootstrap'])
.constant('globalServerRoute', {

	// DEVELOPMENT
	// -----------------------------------------------------------
	apiRouteDev  : 'http://localhost/uag/mobie.api/public/mobie', 
	siteRouteDev : 'http://localhost/uag/fnz-project',

	// PRODUCTION
	// -----------------------------------------------------------
	apiRouteProduction  : 'https://noehdez.info/api/public/mobie',
    siteRouteProduction : 'https://noehdez.info/site'
})
.run(function($rootScope, globalServerRoute)
{
	if(window.location.href.indexOf("localhost") > 0) {
		$rootScope.api  = globalServerRoute.apiRouteDev;
		$rootScope.site = globalServerRoute.siteRouteDev;	
	} else {
		$rootScope.api  = globalServerRoute.apiRouteProduction;
		$rootScope.site = globalServerRoute.siteRouteProduction;
	}
});