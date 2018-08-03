angular.module("mobieApp")
.controller('displayMovieModalCtrl', 
    ['$scope','$uibModalInstance','Data','$compile','$rootScope', function(
      $scope , $uibModalInstance , Data , $compile , $rootScope ) {
        
        $scope.movie = {
            info  : Data.datosPelicula,
            actors : Data.actors
        }

        $scope.modal = {
            cerrar : function(){
                $uibModalInstance.close('cancel');
            }
        }

        console.log('Se abrio modal con los siguientes datos: ', $scope.movie );
}])