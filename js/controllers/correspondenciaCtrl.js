angular.module("mobieApp")
.controller("correspondenciaCtrl", 
         ["$rootScope","$scope","$http","$compile","$q","$uibModal","$log","apiFactoryRest","growlService", "plugins",  
function ( $rootScope,  $scope,  $http,  $compile,  $q,  $uibModal,  $log,  apiFactoryRest,  growlService, plugins ) {
    
    console.log('Controller --> correspondenciaCtrl');

    // REFERENCIA
    $scope.corrReferencia = "";

    // NUEVA DEPENDENCIAS
    $scope.nuevaDependencia = false;
    $scope.txtNuevaDependencia = "";

    // DEPENDENCIAS EXISTENTES
    $scope.dependencias = {};
    $scope.corrSelectedDependencia = "";

    // DESCRIPCION
    $scope.corrDescripcion = "";

    // ---- DEPARTAMENTO
    $scope.departamentos = {};
    $scope.corrSelectedDepartamento = "";

    // -- NUEVO DEPARTAMENTO
    $scope.nuevoDepartamento = false;
    $scope.txtNuevoDepartamento = "";

    // DIRIGIDO A
    $scope.usuarios = {};
    $scope.corrSelectedDirigidoA = "";

    // TIEMPO LIMITE DE RESPUESTA
    $scope.corrTiempoLimiteRespuesta = "";
    $scope.tieneTiempoRespuesta = false;

    // OBSERVACIONES
    $scope.corrObservaciones = "";

    // SCOPE DE FUNCIONES
    $scope.fn = {
        init : function(){
            this.loadDepartamentos();
            this.loadDirigidoA();
            this.loadDependencias();
            plugins.createCalendar('.tiempo-respuesta');;
        },
        lostFocusCalendar : function() {
            // console.log('Date selected: ', plugins.getSelectedDate('#fechaRespuesta'));
            $scope.corrTiempoLimiteRespuesta = plugins.getSelectedDate('#fechaRespuesta');
        },
        loadDepartamentos : function(){
            // console.log('Loading departamentos...');
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
            // console.log('Loading usuarios de Dirigo A...');
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
            // console.log('Loading dependencias...');
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
                nuevoDepartamento : $scope.nuevoDepartamento,
                txtNuevoDepartamento : $scope.txtNuevoDepartamento,
                corrSelectedDepartamento : $scope.corrSelectedDepartamento,
                corrSelectedDirigidoA : $scope.corrSelectedDirigidoA,
                corrObservaciones : $scope.corrObservaciones,
                corrTiempoLimiteRespuesta : $scope.corrTiempoLimiteRespuesta,
                tieneTiempoRespuesta : $scope.tieneTiempoRespuesta,
            };

            console.log($scope.datos);
            if(this.validarFormulario()) 
            {
                apiFactoryRest.guardarDependencia($scope.datos)
                .success(function(rs){
                    if(rs.status === 'success'){
                        growlService.notice('Mensaje Sistema', rs.msg);

                        // Limpiar todos los campos
                        $scope.fn.limpiarCampos();

                    } else if(rs.status === 'error'){
                        growlService.error('Mensaje Sistema', rs.msg);
                    }
                })
                .error(function(err){
                    growlService.error('Mensaje Sistema', err);
                });

            } else {
                growlService.warning('Mensaje Sistema', '¡Por favor llene todos los campos para registrar la Correspondencia!');
            }

        },
        validarFormulario : function(){
            return (
                ($scope.corrReferencia != undefined && $scope.corrReferencia != '') &&
                ($scope.nuevaDependencia ? 
                    ($scope.txtNuevaDependencia != undefined && $scope.txtNuevaDependencia != '') : 
                    ($scope.corrSelectedDependencia != undefined && $scope.corrSelectedDependencia != '') ) &&
                ($scope.corrDescripcion != undefined && $scope.corrDescripcion != '') &&
                ($scope.nuevoDepartamento ? 
                    ($scope.txtNuevoDepartamento != undefined && $scope.txtNuevoDepartamento != '') : 
                    ($scope.corrSelectedDepartamento != undefined && $scope.corrSelectedDepartamento != '') ) &&
                ($scope.tieneTiempoRespuesta ? 
                    ($scope.corrTiempoLimiteRespuesta != undefined && $scope.corrTiempoLimiteRespuesta != '') : 
                    (true) ) &&
                ($scope.corrSelectedDirigidoA != undefined && $scope.corrSelectedDirigidoA != '') && 
                ($scope.corrObservaciones != undefined && $scope.corrObservaciones != '')
            );
        },
        limpiarCampos : function () {
            $scope.corrReferencia = "";
            $scope.nuevaDependencia = false;
            $scope.txtNuevaDependencia = "";
            $scope.corrSelectedDependencia = "";
            $scope.corrDescripcion = "";
            $scope.nuevoDepartamento = false;
            $scope.txtNuevoDepartamento = "";
            $scope.corrSelectedDepartamento = "";
            $scope.corrSelectedDirigidoA = "";
            $scope.tieneTiempoRespuesta = false;
            $scope.corrTiempoLimiteRespuesta = "";
            $scope.corrObservaciones = "";
        }
    };
   
    $scope.fn.init();
}]);