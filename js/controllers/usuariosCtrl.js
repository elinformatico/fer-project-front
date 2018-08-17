angular.module("mobieApp")
.controller("usuariosCtrl", 
         ["$rootScope","$scope","$http","$compile","$q","$uibModal","$log","apiFactoryRest","growlService",  
function ( $rootScope,  $scope,  $http,  $compile,  $q,  $uibModal,  $log,  apiFactoryRest,  growlService ) {

    console.log('Controller --> usuariosCtrl');
    // Datos obtenidos de la Base de Datos
    $scope.departamentos = {};
    $scope.selectedDepartamento = "";

    $scope.fn = {
        init : function(){
            this.loadDepartamentos();
        },
        validarFormulario : function(){
            return ((
                $scope.selectedCar != undefined &&
                $scope.litros != undefined && 
                $scope.tipoGasolina != undefined && 
                $scope.montoGasolina != undefined && 
                $scope.kilometraje != undefined &&
                $scope.selectedPaymentMethod) &&

                $scope.selectedCar != '' &&
                $scope.litros != '' && 
                $scope.tipoGasolina != '' && 
                $scope.montoGasolina != '' && 
                $scope.kilometraje != '' &&
                $scope.selectedPaymentMethod != ''
            );
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
            
            console.log('Guardar...');
        }
    };
    $scope.fn.init();
}]);