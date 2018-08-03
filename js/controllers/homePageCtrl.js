angular.module("mobieApp")
.controller("homePageCtrl", 
	     ["$rootScope","$scope","$http","$compile","$q","$uibModal","$log","apiFactoryRest","growlService",  
function ( $rootScope,  $scope,  $http,  $compile,  $q,  $uibModal,  $log,  apiFactoryRest,  growlService ) {

	$scope.countries = {};
	$scope.movies = {};

	$scope.fn = {
		init : function(){
			this.loadMovies();			
			
		},
		loadCountries : function(){
			apiFactoryRest.getCountries()
			.success(function(rs){
				$scope.countries = rs.countries;
				growlService.notice('Mensaje Sistema', 'Yeahhhhh :)');
			})
			.error(function(error){

			});
		},
		loadMovies : function(){
			apiFactoryRest.getMovies()
			.success(function(rs){

				if(rs.status === 'success'){
					$scope.movies = rs.movies;
				} else if(rs.status === 'error'){
					growlService.notice('Mensaje Sistema', rs.msg);
				}
			})
			.error(function(err){
				growlService.error('Mensaje Sistema', err.msg);
			});	
		},
		openMovieModal : function( datosPelicula ){

			
			apiFactoryRest.getActorsMovie( datosPelicula.idMovie )
			.success(function(rs){

				if(rs.status == 'success'){

					var modalInstance = $uibModal.open({
		                animation: true,
		                templateUrl : 'displayMovie.html',
		                controller  : 'displayMovieModalCtrl',
		                size        : 'lg',
		                backdrop    : 'static',
		                keyboard    : false,
		                resolve     : {
		                    Data: function() {
		                        return { 
		                        	datosPelicula : datosPelicula,
		                        	actors : rs.actors
		                        };
		                    }
		                }
		            });
				}
			})
			.error(function(err){
				growlService.error('Mensaje Sistema', err.msg);
			});

		},
		obtenerSubDatos : function(callback){

		}
	};
	$scope.fn.init();
}]);