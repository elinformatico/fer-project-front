angular.module("mobieApp")
.controller("registroGasolinaCtrl", 
         ["$rootScope","$scope","$http","$compile","$q","$uibModal","$log","apiFactoryRest","growlService",  
function ( $rootScope,  $scope,  $http,  $compile,  $q,  $uibModal,  $log,  apiFactoryRest,  growlService ) {

    // Datos obtenidos de la Base de Datos
    $scope.cars = {};
    $scope.paymentMethods = {};
    $scope.banks = {};

    // Datos por default
    $scope.tipoGasolina = 'magna';
    $scope.ultimoKilometraje = '0';
    $scope.selectedPaymentMethod = '';
    $scope.textSelectedPaymentMethod = '';
    $scope.mostrarBancos = false;

    $scope.datos = {};
    $scope.showBank = false;

    $scope.changeMethod = function(){
        for(var i=0; i < $scope.paymentMethods.length; i++){
            //console.log($scope.paymentMethods[i].pmt_id);
            if($scope.paymentMethods[i].pmt_id == $scope.selectedPaymentMethod)
            {
                $scope.textSelectedPaymentMethod =  $scope.paymentMethods[i].pmt_name;
            }
        }
        $scope.mostrarBancos = $scope.textSelectedPaymentMethod !== 'Efectivo';
        // console.log("Text Selected Value -->", $scope.textSelectedPaymentMethod);
    }

    $scope.onChangeCar = function(carId) {
        // console.log("Selecting the carId", carId);
        $scope.fn.getKilometraje(carId);
        $scope.kilometraje = '';
    }

    $scope.fn = {
        init : function(){
            this.loadCars();
            this.loadPaymentMethods();
            this.loadBanks();
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
        loadPaymentMethods : function(){
            // console.log('Loading Payment Methods:');
            apiFactoryRest.getPaymentMethodsByType('gasolina')
                .success(function(rs){

                    if(rs.status === 'success'){
                        $scope.paymentMethods = rs.paymentMethods;
                        // console.log($scope.paymentMethods);

                    } else if(rs.status === 'error'){
                        growlService.error('Mensaje Sistema', rs.msg);
                    }
                })
                .error(function(err){
                    growlService.error('Mensaje Sistema', err);
                });
        },
        loadBanks : function(){
            // console.log('Loading Banks:');
            apiFactoryRest.getBanks ()
                .success(function(rs){

                    if(rs.status === 'success'){
                        $scope.banks = rs.banks;
                        // console.log($scope.banks);

                    } else if(rs.status === 'error'){
                        growlService.error('Mensaje Sistema', rs.msg);
                    }
                })
                .error(function(err){
                    growlService.error('Mensaje Sistema', err);
                });
        },
        loadCars : function() {
            // console.log('Loading Cars:');
            apiFactoryRest.getCars ()
                .success(function(rs){
                    if(rs.status === 'success'){
                        $scope.cars = rs.cars;
                        // console.log($scope.cars);

                    } else if(rs.status === 'error'){
                        growlService.error('Mensaje Sistema', rs.msg);
                    }
                })
                .error(function(err){
                    growlService.error('Mensaje Sistema', err);
                });
        },
        getKilometraje : function(carId) {
            
            apiFactoryRest.getMaximoKilometraje(carId)
            .success(function(rs){              
                if(rs.status === 'success'){
                    $scope.ultimoKilometraje = rs.kilometraje;
                    $scope.kilometraje = parseInt(rs.kilometraje);

                } else if(rs.status === 'error'){
                    $scope.ultimoKilometraje = 'Error Sistema';
                }
            })
            .error(function(err){
                $scope.ultimoKilometraje = 'Error Conexión';
            }); 

        },
        guardar : function() {
            
            $scope.datos = {
                carId         : $scope.selectedCar,
                litros        : $scope.litros,
                tipoGasolina  : $scope.tipoGasolina,
                montoGasolina : $scope.montoGasolina,
                kilometraje   : $scope.kilometraje
            }

            if(this.validarFormulario()){
                apiFactoryRest.storeGasolina( $scope.datos )
                .success(function(rs){
                    if(rs.status === 'success'){
                        growlService.notice('Mensaje Sistema', rs.msg);

                        $scope.fn.guardarLogFinanzas();

                        $scope.kilometraje = '';
                        $scope.ultimoKilometraje = '0';
                        $scope.litros = '';
                        $scope.tipoGasolina = 'magna';
                        $scope.montoGasolina = '';
                        $scope.mostrarBancos = false;

                    } else if(rs.status === 'error'){
                        growlService.error('Mensaje Sistema', rs.msg);
                    }
                })
                .error(function(err){
                    growlService.error('Mensaje Sistema', err);
                });
            } else {
                growlService.warning('Mensaje Sistema', '¡Por favor llene todos los campos!');
            }
        },
        guardarLogFinanzas : function() {

            $scope.datos = {
                log_user_id : 0,
                log_description : 'Carga de ' + $scope.litros + ' litros de Gasolina ' + $scope.tipoGasolina,
                log_amount      : $scope.montoGasolina,
                log_cat_id_fk   : '8', // Categoria --> Gasolina/Combustible
                log_pmt_id_kf   : $scope.selectedPaymentMethod,
                // Si se muestra bancos, que mande su ID, en caso contrario, que mande 1, que no aplica
                log_bank_id_fk  : ($scope.mostrarBancos) ? $scope.selectedBank : 1
            }
            
            apiFactoryRest.storeFinancialLog( $scope.datos )
            .success(function(rs){
                if(rs.status === 'success'){
                    
                    $scope.selectedCar = '';
                    $scope.selectedPaymentMethod = '';
                    $scope.selectedBank = '';

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