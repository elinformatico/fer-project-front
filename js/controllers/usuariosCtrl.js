angular.module("mobieApp")
.controller("usuariosCtrl", 
         ["$rootScope","$scope","$http","$compile","$q","$uibModal","$log","apiFactoryRest","growlService",  
function ( $rootScope,  $scope,  $http,  $compile,  $q,  $uibModal,  $log,  apiFactoryRest,  growlService ) {

    console.log('Controller --> usuariosCtrl');
    // Datos obtenidos de la Base de Datos
    $scope.departamentos = {};

    $scope.selectedDepartamento = "";
    $scope.nombre = "";
    $scope.apellidoPaterno = "";
    $scope.apellidoMaterno = "";
    $scope.nombreUsuario = "";
    $scope.esJefe = false;
    $scope.rolUsuario = "";
    $scope.password = "";
    $scope.rePassword = "";

    // Nuevo Departamento
    $scope.nuevoDepartamento = false;
    $scope.txtNuevoDepartamento = "";

    $scope.fn = {
        init : function(){
            this.loadDepartamentos();
        },
        validarFormulario : function(){
            return (
                ($scope.nombre != undefined && $scope.nombre != '')  &&
                ($scope.apellidoPaterno != undefined && $scope.apellidoPaterno != '') && 
                ($scope.apellidoMaterno != undefined && $scope.apellidoMaterno != '') && 
                ($scope.nombreUsuario != undefined && $scope.nombreUsuario != '') && 
                ($scope.rolUsuario != undefined && $scope.rolUsuario != '') &&
                ($scope.esJefe ? 
                    (
                        ($scope.nuevoDepartamento ? 
                            ($scope.txtNuevoDepartamento != undefined && $scope.txtNuevoDepartamento != '') : 
                            ($scope.selectedDepartamento != undefined && $scope.selectedDepartamento != '') )
                    ) : 
                    true ) &&
                ($scope.password != undefined && $scope.password != '') &&
                ($scope.rePassword != undefined && $scope.rePassword != '')
            );
        },
        validarPassword : function(password1, password2){
            return password1 == password2;
        },
        loadDepartamentos : function(){
            console.log('Loading departamentos...');
            apiFactoryRest.getDepartamentos()
                .success(function(rs){

                    if(rs.status === 'success'){
                        $scope.departamentos = rs.departamentos;
                        // console.log($scope.departamentos);

                    } else if(rs.status === 'error'){
                        growlService.error('Mensaje Sistema', rs.msg);
                    }
                })
                .error(function(err){
                    growlService.error('Mensaje Sistema', err);
                });
        },
        guardar : function() {
            
            console.log('Guardando Usuario...');            
            $scope.datos = {
                nuevoDepartamento : $scope.nuevoDepartamento,
                txtNuevoDepartamento : $scope.txtNuevoDepartamento,
                selectedDepartamento : $scope.selectedDepartamento,
                nombre : $scope.nombre,
                apellidoPaterno : $scope.apellidoPaterno,
                apellidoMaterno : $scope.apellidoMaterno,
                nombreUsuario : $scope.nombreUsuario,
                esJefe : $scope.esJefe,
                rolUsuario : $scope.rolUsuario,
                password : $scope.password,
            }

            if(this.validarFormulario())
            {
                if(this.validarPassword($scope.password, $scope.rePassword)){

                    // Valida si no existe el nombre de Usuario
                    apiFactoryRest.guardarUsuario($scope.datos)
                    .success(function(rs){
                        if(rs.status === 'success'){
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
                    growlService.warning('Mensaje Sistema', '¡Las contraseñas no coinciden, porfavo de verificarlas!');    
                }

            } else {
                growlService.warning('Mensaje Sistema', '¡Por favor llene todos los campos!');
            }
        },
        limpiarCampos : function () {

            $scope.nuevoDepartamento = false;
            $scope.txtNuevoDepartamento = "";
            $scope.selectedDepartamento = "";
            $scope.nombre = "";
            $scope.apellidoPaterno = "";
            $scope.apellidoMaterno = "";
            $scope.nombreUsuario = "";
            $scope.esJefe = false;
            $scope.rolUsuario = "";
            $scope.password = "";
            $scope.rePassword = "";
        }
    };
    $scope.fn.init();
}]);