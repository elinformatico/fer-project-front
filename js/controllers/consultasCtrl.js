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
    $scope.memosYcorrespondencias = {};
  
    // PDF Export
    $scope.linkPdf = "";
    $scope.showLinkPdf = false;
  
    $scope.linkCsv = "";
    $scope.showLinkCsv = false;
    
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
            
            // Limpiar cada vez que se cambie el tipo de busqueda
            $scope.correspondencias = {};
            $scope.memosYcorrespondencias = {};
            this.clearData();
        },
        lostFocustInicial : function() {
            $scope.fechaInicial = plugins.getSelectedDate('#fechaInicial');
            $scope.fechaFinal   = plugins.getSelectedDate('#fechaFinal');
            this.clearData();
        }, 
        lostFocustFinal : function() {
            $scope.fechaInicial = plugins.getSelectedDate('#fechaInicial');
            $scope.fechaFinal   = plugins.getSelectedDate('#fechaFinal');
            this.clearData();
        },
        clearData : function() {
            $scope.correspondencias = {};
            $scope.memosYcorrespondencias = {};
            $scope.linkPdf = "";
            $scope.linkCsv = "";
            $scope.showLinkPdf = false;
            $scope.showLinkCsv = false;
        },
        selectedUser : function(selectedUsuario) {
          
            console.log("Se selecciono el Usuario ", selectedUsuario);  
          
            this.clearData();
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
            this.clearData();
            $scope.data = {
                userId : plugins.getUserId(),
                selectedUser : $scope.selectedUser,
                selectedUserId : $scope.selectedUsuario,
                fechaInicial : $scope.fechaInicial,
                fechaFinal : $scope.fechaFinal,
                buscarPor : $scope.buscarPor,
            };
            // console.log($scope.data);
            if($scope.buscarPor !== '' && $scope.buscarPor === 'correspondencia') 
            {    
                 apiFactoryRest.consultarCorrespondencia($scope.data)
                    .success(function(rs)
                    {
                        if(rs.status === 'success') {
                            $scope.correspondencias = rs.correspondencias;
                            $scope.linkPdf = apiFactoryRest.rootScope + '/get/pdf' + rs.linkPdf;
                            $scope.linkCsv = apiFactoryRest.rootScope + '/get/csv' + rs.linkPdf;
                            $scope.showLinkPdf = true;
                            $scope.showLinkCsv = true;
                          
                        } else if(rs.status === 'error') {
                            growlService.warning('Mensaje Sistema', rs.msg);
                        }
                    })
                    .error(function(err){
                        growlService.error('Mensaje Sistema', err);
                    });
                
            } 
                else if($scope.buscarPor !== '' && ($scope.buscarPor === 'memos' || $scope.buscarPor === 'oficios'))  
            { 
                   apiFactoryRest.consultarMemosOficios($scope.data)
                    .success(function(rs)
                    {
                        if(rs.status === 'success') {
                            $scope.memosYcorrespondencias = rs.resultados;
                            $scope.linkPdf = apiFactoryRest.rootScope + '/get/pdf' + rs.linkPdf;
                            $scope.linkCsv = apiFactoryRest.rootScope + '/get/csv' + rs.linkPdf;
                            $scope.showLinkPdf = true;
                            $scope.showLinkCsv = true;
                          
                        } else if(rs.status === 'error') {
                            growlService.warning('Mensaje Sistema', rs.msg);
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