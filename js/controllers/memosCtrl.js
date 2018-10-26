angular.module("mobieApp")
.controller("memosCtrl", 
         ["$rootScope","$scope","$http","$compile","$q","$uibModal","$log","apiFactoryRest","growlService",  
function ( $rootScope,  $scope,  $http,  $compile,  $q,  $uibModal,  $log,  apiFactoryRest,  growlService ) {

    console.log('Controller --> memosCtrl');

    // Listados de Dependecias y Usuarios
    $scope.dependencias = {};
    $scope.usuarios = {};

    // Tipo Turnado A
    $scope.memoTipoTurnadoA = "";
   
   	$scope.fn = {
   		init : function() {
   			this.loadDependencias();
   			this.loadUsuarios();
   		},
   		ocultarSubOpciones : function() {
   			$scope.mostrarTurnadoA_dependencia = false;
		    $scope.mostrarTurnadoA_usuario = false;
		    $scope.mostrarTurnadoA_abierto = false;
   		},
   		onChangeTurnadoA : function(tipoTurnadoA) 
   		{
   			// console.log('OnChange: ', tipoTurnadoA);

   			$scope.memoTipoTurnadoA = tipoTurnadoA;
   			this.ocultarSubOpciones();

   			if(tipoTurnadoA === 'dependencia') {
   				$scope.mostrarTurnadoA_dependencia = true;

   			} else if(tipoTurnadoA === 'usuario') {
   				$scope.mostrarTurnadoA_usuario = true;

   			} else if(tipoTurnadoA === 'abierto') {
   				$scope.mostrarTurnadoA_abierto = true;
   			}
   		},
   		onChangeDependencia : function(dependenciaId) 
   		{
   			console.log('onChangeDependencia: ', dependenciaId);
   		},
   		loadDependencias : function() {
   			apiFactoryRest.getDependencias()
             	.success(function(rs)
             	{
                    if(rs.status === 'success'){
                        $scope.dependencias = rs.dependencias;

                    } else if(rs.status === 'error'){
                        growlService.error('Mensaje Sistema', rs.msg);
                    }
                })
                .error(function(err){
                    growlService.error('Mensaje Sistema', err);
                });
   		},
   		loadUsuarios : function() {
   			apiFactoryRest.getNombreUsuarios()
                .success(function(rs)
                {
                    if(rs.status === 'success'){
                        $scope.usuarios = rs.usuarios;

                    } else if(rs.status === 'error'){
                        growlService.error('Mensaje Sistema', rs.msg);
                    }
                })
                .error(function(err){
                    growlService.error('Mensaje Sistema', err);
                });
   		}
   	};

   	$scope.fn.init();
}]);