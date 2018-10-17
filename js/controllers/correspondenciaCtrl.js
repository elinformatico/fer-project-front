angular.module("mobieApp")
.controller("correspondenciaCtrl", 
         ["$rootScope","$scope","$http","$compile","$q","$uibModal","$log","apiFactoryRest","growlService",  
function ( $rootScope,  $scope,  $http,  $compile,  $q,  $uibModal,  $log,  apiFactoryRest,  growlService ) {
    
    console.log('Controller --> correspondenciaCtrl');

    // REFERENCIA
    $scope.corrReferencia = "REF20181017";

    // NUEVA DEPENDENCIAS
    $scope.nuevaDependencia = false;
    $scope.txtNuevaDependencia = "MI NUEVA DEPENCIA";

    // DEPENDENCIAS EXISTENTES
    $scope.dependencias = {};
    $scope.corrSelectedDependencia = "";

    // DESCRIPCION
    $scope.corrDescripcion = "QUE ROLLO";

    // ---- DEPARTAMENTO
    $scope.departamentos = {};
    $scope.corrSelectedDepartamento = "";

    // DIRIGIDO A
    $scope.usuarios = {};
    $scope.corrSelectedDirigidoA = "";

    // TIEMPO LIMITE DE RESPUESTA
    $scope.corrTiempoLimiteRespuesta = "3 día si no valiste reata xD";

    // OBSERVACIONES
    $scope.corrObservaciones = "Borre este texto cuando de guardar";

    // SCOPE DE FUNCIONES
    $scope.fn = {
        init : function(){
            this.loadDepartamentos();
            this.loadDirigidoA();
            this.loadDependencias();
        },
        loadDepartamentos : function(){
            console.log('Loading departamentos...');
            apiFactoryRest.getDepartamentos()
                .success(function(rs){

                    if(rs.status === 'success'){
                        $scope.departamentos = rs.departamentos;

                    } else if(rs.status === 'error'){
                        growlService.error('Mensaje Sistema', rs.msg);
                    }
                })
                .error(function(err){
                    growlService.error('Mensaje Sistema', err);
                });
        },
        loadDirigidoA : function() {
            console.log('Loading usuarios de Dirigo A...');
            apiFactoryRest.getNombreUsuarios()
                .success(function(rs){

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
        loadDependencias : function() {
            console.log('Loading dependencias...');
            apiFactoryRest.getDependencias()
                .success(function(rs){

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
        guardar : function() {

            console.log("Guardando...");

            $scope.datos = {
                corrReferencia   : $scope.corrReferencia,
                nuevaDependencia : $scope.nuevaDependencia,
                txtNuevaDependencia : $scope.txtNuevaDependencia,
                corrSelectedDependencia : $scope.corrSelectedDependencia,
                corrDescripcion : $scope.corrDescripcion,
                corrSelectedDepartamento : $scope.corrSelectedDepartamento,
                corrSelectedDirigidoA : $scope.corrSelectedDirigidoA,
                corrObservaciones : $scope.corrObservaciones,
            };

            // Valida si no existe el nombre de Usuario
            apiFactoryRest.guardarDependencia($scope.datos)
            .success(function(rs){
                if(rs.status === 'success'){
                    growlService.notice('Mensaje Sistema', rs.msg);
            
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