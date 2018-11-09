angular.module("mobieApp")
.controller("consultasCtrl", 
         ["$rootScope","$scope","$http","$compile","$q","$uibModal","$log","apiFactoryRest","growlService", "plugins",  
function ( $rootScope,  $scope,  $http,  $compile,  $q,  $uibModal,  $log,  apiFactoryRest,  growlService, plugins ) {

    console.log('Controller --> consultasCtrl');
    
    $scope.usuarios = {};
    $scope.selectedUsuario = '0';
    $scope.selectedUser = false;
    
    $scope.fechaInicial = '';
    $scope.fechaFinal = '';
    $scope.buscarPor = "";
    
    // datos
    $scope.correspondencias = {};
    
    $scope.fn = {
        init : function() {
            console.log('Init');
            
            this.loadUsuarios();
            // plugins.preloadingIn();
            plugins.createCalendar('.rango-fecha');
        },
        onBuscarPor : function(buscarPor) {
            console.log('Buscando por: ', buscarPor);
            $scope.buscarPor = buscarPor;
        },
        lostFocustInicial : function() {
            $scope.fechaInicial = plugins.getSelectedDate('#fechaInicial');
            $scope.fechaFinal   = plugins.getSelectedDate('#fechaFinal');
        }, 
        lostFocustFinal : function() {
            $scope.fechaInicial = plugins.getSelectedDate('#fechaInicial');
            $scope.fechaFinal   = plugins.getSelectedDate('#fechaFinal');
        },
        selectedUser : function(selectedUsuario) {
            console.log("Se selecciono el Usuario ", selectedUsuario);
            
            if(selectedUsuario !== '0') {
                $scope.selectedUser = true;
            } else {
                $scope.selectedUser = false;
            }
        },
        loadUsuarios : function() {
            
            apiFactoryRest.getNombreUsuarios()
                .success(function(rs)
                {
                    if(rs.status === 'success') {
                        $scope.usuarios = rs.usuarios;
                    }
                })
                .error(function(err){
                    growlService.error('Mensaje Sistema', err);
                });        
        },
        consultar : function() 
        {
            // console.log('Fecha Inicial: ', $scope.fechaInicial);
            // console.log('Fecha Final: ', $scope.fechaFinal);
            $scope.data = {
                userId : plugins.getUserId(),
                selectedUser : $scope.selectedUser,
                selectedUserId : $scope.selectedUsuario,
                fechaInicial : $scope.fechaInicial,
                fechaFinal : $scope.fechaFinal,
            };
            console.log($scope.data);
            if($scope.buscarPor !== '' && $scope.buscarPor === 'correspondencia') 
            {    
                 apiFactoryRest.consultarCorrespondencia($scope.data)
                    .success(function(rs)
                    {
                        if(rs.status === 'success') {
                            $scope.correspondencias = rs.correspondencias;
                        }
                    })
                    .error(function(err){
                        growlService.error('Mensaje Sistema', err);
                    });
                
            } else {
                growlService.warning('Mensaje Sistema', 'Por favor seleccione una opcion de busqueda!');
            }
        }
    };
   
    $scope.fn.init();
}]);