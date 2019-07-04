angular.module("mobieApp")
.controller('modalWindowCtrl.js', 
    ['$scope','$uibModalInstance','Data','$compile','$rootScope', function(
      $scope , $uibModalInstance , Data , $compile , $rootScope ) {
        
        $scope.modalData = Data;

        $scope.modal = {
            cerrar : function(){
                $uibModalInstance.close('cancel');
            }
        }
        console.log('Se abrio modal con los siguientes datos: ', $scope.modalData );
}])