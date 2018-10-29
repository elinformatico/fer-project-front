angular.module("mobieApp")
.controller("memosCtrl", 
         ["$rootScope","$scope","$http","$compile","$q","$uibModal","$log","apiFactoryRest","growlService",  
function ( $rootScope,  $scope,  $http,  $compile,  $q,  $uibModal,  $log,  apiFactoryRest,  growlService ) {

    console.log('Controller --> memosCtrl');

    // Listados de Dependecias y Usuarios
    $scope.dependencias = {};
    $scope.usuarios = {};
    $scope.correspondencias = {}; // Datos Auto generados
    $scope.turnadoA_dep_correspondencia = '';

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

   			// Limpiamos La lista
   			$scope.correspondencias = {};

   			if(dependenciaId !== undefined && dependenciaId !== '')
   			{
				apiFactoryRest.getCorrespondencias(dependenciaId)
	             	.success(function(rs)
	             	{
	                    if(rs.status === 'success'){
	                        $scope.correspondencias = rs.correspondencias;
                            $scope.turnadoA_dep_correspondencia = dependenciaId;
	                    }
	                })
	                .error(function(err){
	                    growlService.error('Mensaje Sistema', err);
                        $scope.turnadoA_dep_correspondencia = '';
	                });
   			} else {
                $scope.turnadoA_dep_correspondencia = '';
            }
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
   		},
   		guardar : function() {

   			console.log('Guardando datos..');
   			$scope.datos = {
                tipoRegistro : 'memo',
	   			tipoTurnadoA : $scope.tipoTurnadoA,
	   			turnadoA_dep_correspondencia : $scope.turnadoA_dep_correspondencia,
				turnadoA_usuario : $scope.turnadoA_usuario,
				txtTurnadoA_abierto : $scope.txtTurnadoA_abierto,
				tipoAnio : $scope.tipoAnio,
				txtAsunto : $scope.txtAsunto,
				txtObservaciones : $scope.txtObservaciones
   			};

   			// console.log($scope.datos);
            
            if(this.validarCampos()) {
                apiFactoryRest.guardarMemoOficio($scope.datos)
                  .success(function(rs)
                    {
                        if(rs.status === 'success')
                        {    
                            growlService.notice('Mensaje Sistema', rs.msg);
                            $scope.fn.limpiarCampos();

                        } else if(rs.status === 'error'){
                            growlService.error('Mensaje Sistema', rs.msg);
                        }
                    })
                    .error(function(err){
                        growlService.error('Mensaje Sistema', err);
                    });   
            } else {
                growlService.warning('Mensaje Sistema', '¡Por favor llene todos los campos para registrar el Memo!');
            }
   		},
        validarCampos : function() 
        {
            var firstValidation = false;
            if($scope.tipoTurnadoA === 'dependencia'){
                firstValidation = 
                    ($scope.turnadoA_dependencia !== undefined && $scope.turnadoA_dependencia !== '') && 
                    ($scope.turnadoA_dep_correspondencia !== undefined && $scope.turnadoA_dep_correspondencia !== '');
                
            } else if($scope.tipoTurnadoA === 'usuario') {
                firstValidation = 
                    ($scope.turnadoA_usuario !== undefined && $scope.turnadoA_usuario !== '');
                
            } else if($scope.tipoTurnadoA === 'abierto') {
                firstValidation = 
                    ($scope.txtTurnadoA_abierto !== undefined && $scope.txtTurnadoA_abierto !== '');
            }
            
            return firstValidation && 
                    ($scope.txtAsunto !== undefined && $scope.txtAsunto !== '') &&
                    ($scope.txtObservaciones !== undefined && $scope.txtObservaciones !== '');
        },
   		limpiarCampos : function() 
   		{
			this.ocultarSubOpciones();
   			$scope.tipoTurnadoA = '';
            $scope.turnadoA_dependencia = '';
			$scope.turnadoA_dep_correspondencia = '';
			$scope.turnadoA_usuario = '';
			$scope.txtTurnadoA_abierto = '';
			$scope.tipoAnio = '';
			$scope.txtAsunto = '';
			$scope.txtObservaciones = '';
   		}
   	};

   	$scope.fn.init();
}]);