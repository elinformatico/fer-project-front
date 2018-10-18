angular.module('mobieApp', ['ui.bootstrap'])
.constant('globalServerRoute', {

	// DEVELOPMENT
	// -----------------------------------------------------------
	apiRouteDev  : 'http://localhost/fer/api/public',
	siteRouteDev : 'http://localhost/fer',

	// PRODUCTION
	// -----------------------------------------------------------
	apiRouteProduction  : 'http://proyecto.noehdez.info/api/public',
    siteRouteProduction : 'http://proyecto.noehdez.info/section/login'
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