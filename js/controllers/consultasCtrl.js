angular.module("mobieApp")
.controller("consultasCtrl", 
         ["$rootScope","$scope","$http","$compile","$q","$uibModal","$log","apiFactoryRest","growlService", "plugins",  
function ( $rootScope,  $scope,  $http,  $compile,  $q,  $uibModal,  $log,  apiFactoryRest,  growlService, plugins ) {

    console.log('Controller --> consultasCtrl');
    
    $scope.usuarios = {};
    $scope.selectedUsuario = 'todos';
    
    $scope.fechaInicial = '';
    $scope.fechaFinal = '';
  
    $scope.fn = {
        init : function() {
            console.log('Init');
            // plugins.preloadingIn();
            plugins.createCalendar('.rango-fecha');
        },
        onBuscarPor : function(buscarPor) {
            console.log('Buscando por: ', buscarPor);
        },
        lostFocustInicial : function() {
            $scope.fechaInicial = plugins.getSelectedDate('#fechaInicial');
            $scope.fechaFinal   = plugins.getSelectedDate('#fechaFinal');
        }, 
        lostFocustFinal : function() {
            $scope.fechaInicial = plugins.getSelectedDate('#fechaInicial');
            $scope.fechaFinal   = plugins.getSelectedDate('#fechaFinal');
        },
        consultar : function() {
            console.log('Fecha Inicial: ', $scope.fechaInicial);
            console.log('Fecha Final: ', $scope.fechaFinal);
        }
    };
   
    $scope.fn.init();
}]);