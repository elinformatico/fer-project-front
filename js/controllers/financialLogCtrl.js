angular.module("mobieApp")
.controller("financialLogCtrl",
	     ["$rootScope","$scope","$http","$compile","$q","$uibModal","$log","apiFactoryRest","growlService",  
function ( $rootScope,  $scope,  $http,  $compile,  $q,  $uibModal,  $log,  apiFactoryRest,  growlService ) {

	// Dato por default
	$scope.categories = {};
	$scope.paymentMethods = {};
	$scope.banks = {};

	// Modelos
	$scope.descripcion = '';
    $scope.selectedCategory = '';
    $scope.montoRegistrar = '';
    $scope.selectedPaymentMethod = '';
    $scope.selectedBank = '';

	$scope.fn = {
		init : function(){
			this.loadCategories();
			this.loadPaymentMethods();
			this.loadBanks();
		},
		loadCategories : function(){
			// console.log('Loading Categories:');
            apiFactoryRest.getCategories ()
               .success(function(rs){

                    if(rs.status === 'success'){
                        $scope.categories = rs.categories;
                        // console.log($scope.categories);

                    } else if(rs.status === 'error'){
                        growlService.error('Mensaje Sistema', rs.msg);
                    }
               })
               .error(function(err){
                    growlService.error('Mensaje Sistema', err);
               });
		},loadPaymentMethods : function(){
            // console.log('Loading Payment Methods:');
            apiFactoryRest.getPaymentMethods ()
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

		validarFormulario : function(){
			return (($scope.descripcion != undefined &&
				    $scope.montoRegistrar != undefined &&
				    $scope.selectedCategory != undefined &&
				    $scope.selectedPaymentMethod != undefined &&
					$scope.selectedBank != undefined) &&

					$scope.descripcion != '' &&
				    $scope.montoRegistrar != '' &&
				    $scope.selectedCategory != '' &&
				    $scope.selectedPaymentMethod != '' &&
					$scope.selectedBank
			);
		},
		guardar : function() {

			$scope.datos = {
                log_user_id : 0,
                log_description : $scope.descripcion,
                log_amount      : $scope.montoRegistrar,
                log_cat_id_fk   : $scope.selectedCategory,
                log_pmt_id_kf   : $scope.selectedPaymentMethod,
                log_bank_id_fk  : $scope.selectedBank
			}

            // console.log('Guardando datos...', $scope.datos);

			if(this.validarFormulario()){
				apiFactoryRest.storeFinancialLog( $scope.datos )
				.success(function(rs){
					if(rs.status === 'success'){
						growlService.notice('Mensaje Sistema', rs.msg);

						$scope.descripcion = '';
					    $scope.montoRegistrar = '';
					    $scope.selectedCategory = '';
						$scope.selectedPaymentMethod = '';
                        $scope.selectedBank = '';

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
		}
	};
	$scope.fn.init();
}]);