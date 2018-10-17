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
    $scope.esJefe = "";
    $scope.rolUsuario = "";
    $scope.password = "";
    $scope.rePassword = "";

    $scope.fn = {
        init : function(){
            this.loadDepartamentos();
        },
        validarFormulario : function(){
            return ((
                $scope.nombre != undefined &&
                $scope.apellidoPaterno != undefined && 
                $scope.apellidoMaterno != undefined && 
                $scope.nombreUsuario != undefined && 
                $scope.rolUsuario != undefined &&
                $scope.password != undefined &&
                $scope.rePassword != undefined &&
                $scope.selectedDepartamento) &&

                $scope.nombre != '' &&
                $scope.apellidoPaterno != '' && 
                $scope.apellidoMaterno != '' && 
                $scope.nombreUsuario != '' && 
                $scope.rolUsuario != '' &&
                $scope.password != '' &&
                $scope.rePassword != '' &&
                $scope.selectedDepartamento != ''
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
            
            $scope.datos = {
                selectedDepartamento : $scope.selectedDepartamento,
                nombre : $scope.nombre,
                apellidoPaterno : $scope.apellidoPaterno,
                apellidoMaterno : $scope.apellidoMaterno,
                nombreUsuario : $scope.nombreUsuario,
                esJefe : $scope.esJefe,
                rolUsuario : $scope.rolUsuario,
                password : $scope.password,
            }

            console.log('Guardar...');
             if(this.validarFormulario()){
                if(this.validarPassword($scope.password, $scope.rePassword)){

                    // Valida si no existe el nombre de Usuario
                    apiFactoryRest.guardarUsuario($scope.datos)
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
           
                } else {
                    growlService.warning('Mensaje Sistema', '¡Porfavor verifique la confirmación de su Contraseña!');    
                }
            } else {
                growlService.warning('Mensaje Sistema', '¡Por favor llene todos los campos!');
            }
        }
    };
    $scope.fn.init();
}]);