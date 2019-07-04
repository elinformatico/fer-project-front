angular.module("mobieApp")
.controller("registroGasolinaCtrl", 
         ["$rootScope","$scope","$http","$compile","$q","$uibModal","$log","apiFactoryRest","growlService", "plugins",  
function ( $rootScope,  $scope,  $http,  $compile,  $q,  $uibModal,  $log,  apiFactoryRest,  growlService, plugins ) {

    console.log('Controller: --> registroGasolinaCtrl!!');
  
    // Datos obtenidos de la Base de Datos
    $scope.cars = {};
    $scope.paymentMethods = {};
    $scope.banks = {};

    // Datos por default
    $scope.tipoGasolina = 'magna';
    $scope.ultimoKilometraje = '0';
    $scope.msgUltimoKilometraje = '';
    $scope.selectedPaymentMethod = '';
    // $scope.textSelectedPaymentMethod = '';
    $scope.mostrarBancos = false;
    $scope.datos = {};
    $scope.showBank = false;

    $scope.fn = {
        init : function()
        {
            this.loadCars();
            this.loadPaymentMethods();
            this.loadBanks();
        },
        onChangeCar : function(carId) 
        {
            console.log("Selecting the carId", carId);
            $scope.fn.getKilometraje(carId);
            $scope.kilometraje = '';
        },
        changeMethod : function(paymentMethod)
        {
            // console.log("ID Value elected -->", paymentMethod);
            
            var textSelectedPaymentMethod = '';
            for(var i=0; i < $scope.paymentMethods.length; i++) {
                //console.log($scope.paymentMethods[i].pmt_id);
                if($scope.paymentMethods[i].pmt_id == paymentMethod)
                {
                    textSelectedPaymentMethod =  $scope.paymentMethods[i].pmt_name;
                }
            }
            
            $scope.mostrarBancos = (textSelectedPaymentMethod !== 'Efectivo');
            // console.log("Text Selected Value -->", textSelectedPaymentMethod);           
        },
        validarFormulario : function()
        {
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
        loadCars : function() 
        {    
            // console.log('Loading Cars:');
            if(plugins.isLogged()) 
            {
                apiFactoryRest.getCars (plugins.apiToken)
                .success(function(rs){
                    if(rs.status === 'success'){
                        $scope.cars = rs.cars;
                        // console.log($scope.cars);

                    } else if(rs.status === 'error'){
                        growlService.error('Mensaje Sistema', rs.msg);
                    }
                })
                .error(function(err){
                    growlService.error('Mensaje Sistema', err. msg);
                });
            }
            
        },
        loadPaymentMethods : function()
        {
            // console.log('Loading Payment Methods:');
            if(plugins.isLogged()) {
                apiFactoryRest.getPaymentMethodsByType('gasolina', plugins.apiToken)
                .success(function(rs){

                    if(rs.status === 'success'){
                        $scope.paymentMethods = rs.paymentMethods;
                        // console.log($scope.paymentMethods);

                    } else if(rs.status === 'error'){
                        growlService.error('Mensaje Sistema', rs.msg);
                    }
                })
                .error(function(err){
                    growlService.error('Mensaje Sistema', err.msg);
                });   
            }
        },
        loadBanks : function()
        {
            // console.log('Loading Banks:');
            if(plugins.isLogged()) {
                apiFactoryRest.getBanks (plugins.apiToken)
                .success(function(rs){

                    if(rs.status === 'success'){
                        $scope.banks = rs.banks;
                        // console.log($scope.banks);

                    } else if(rs.status === 'error'){
                        growlService.error('Mensaje Sistema', rs.msg);
                    }
                })
                .error(function(err){
                    growlService.error('Mensaje Sistema', err.msg);
                });
            }
        },
        getKilometraje : function(carId) 
        {    
            if(plugins.isLogged()) {
                apiFactoryRest.getMaximoKilometraje(carId, plugins.apiToken)
                .success(function(rs){              
                    if(rs.status === 'success'){
                        $scope.ultimoKilometraje = rs.ultimoKilometraje;
                        $scope.kilometraje = parseInt(rs.ultimoKilometraje);
                        $scope.msgUltimoKilometraje = rs.ultimoRegistro;

                    } else if(rs.status === 'error'){
                        $scope.ultimoKilometraje = rs.msg;
                    }
                })
                .error(function(err){
                    $scope.ultimoKilometraje = err.msg;
                });   
            }
        },
        guardar : function() 
        {    
            $scope.datos = {
                carId         : $scope.selectedCar,
                litros        : $scope.litros,
                tipoGasolina  : $scope.tipoGasolina,
                montoGasolina : $scope.montoGasolina,
                kilometraje   : $scope.kilometraje
            }

            if(this.validarFormulario()){
                apiFactoryRest.storeGasolina ($scope.datos, plugins.apiToken)
                .success(function(rs){
                    if(rs.status === 'success'){
                        growlService.notice('Mensaje Sistema', rs.msg);

                        $scope.fn.guardarLogFinanzas();

                        $scope.kilometraje = '';
                        $scope.ultimoKilometraje = '0';
                        $scope.msgUltimoKilometraje = '';
                        $scope.litros = '';
                        $scope.tipoGasolina = 'magna';
                        $scope.montoGasolina = '';
                        $scope.mostrarBancos = false;

                    } else if(rs.status === 'error'){
                        growlService.error('Mensaje Sistema', rs.msg);
                    }
                })
                .error(function(err){
                    growlService.error('Mensaje Sistema', err.msg);
                });
            } else {
                growlService.warning('Mensaje Sistema', '¡Por favor llene todos los campos!');
            }
        },
        guardarLogFinanzas : function() 
        {
            $scope.datos = {
                log_user_id     : plugins.getUserId(),
                log_description : 'Carga de ' + $scope.litros + ' litros de Gasolina ' + $scope.tipoGasolina,
                log_amount      : $scope.montoGasolina,
                log_cat_id_fk   : '8', // Categoria --> Gasolina/Combustible
                log_pmt_id_kf   : $scope.selectedPaymentMethod,
                // Si se muestra bancos, que mande su ID, en caso contrario, que mande 1, que significa "No aplica"
                log_bank_id_fk  : ($scope.mostrarBancos) ? $scope.selectedBank : 1
            }
            
            apiFactoryRest.storeFinancialLog($scope.datos, plugins.apiToken)
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
                growlService.error('Mensaje Sistema', err.msg);
            });
        },
        showDetails : function() {
            console.log("Show details..");
            
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl : 'gasolina.summary.html',
                controller  : 'modalWindowCtrl.js',
                size        : 'lg',
                backdrop    : 'static',
                keyboard    : false,
                resolve     : {
                    Data: function() {
                        return { 
                            data : {
                                name : 'Volver al Futuro',
                                director : 'Roberto Zemeckis'
                            },
                            type : 'modal'
                        };
		            }
                }
            });
        }
    };
    $scope.fn.init();
}]);