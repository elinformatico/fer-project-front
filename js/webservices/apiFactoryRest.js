angular.module('mobieApp')
.factory('apiFactoryRest', ['$rootScope', '$http',  function( $rootScope, $http ){

    var restUrl = $rootScope.api;
    var dataFactory = {};

    var transform = function(data){
        return jQuery.param(data);
    }
    
    dataFactory.rootScope = restUrl;
    // ----------------------- Ejemplos -------------------------
    dataFactory.storeExample = function(data){
      return $http.post(restUrl + '/store/example', data, {
          headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
          transformRequest : transform
      });
    }
    dataFactory.deleteExample = function(data){
        return $http.delete(restUrl + '/delete/example/'+ data);
    }

    dataFactory.updateExample = function(data){
       return $http.put(restUrl + '/update/example', data, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: transform
        });  
    }

    // --------------- Rest Utilizables -------------------
    dataFactory.getCountries = function(){
        return $http.get(restUrl + '/get/countries');
    } 

    dataFactory.getMovies = function(){
        return $http.get(restUrl + '/get/movies');
    }

    dataFactory.getActorsMovie = function(movieId){
        return $http.get( restUrl + '/movies/actors/' + movieId );
    }

    dataFactory.getMaximoKilometraje = function(carId){
        return $http.get( restUrl + '/get/kilometraje/' + carId);
    }

    dataFactory.storeGasolina = function(data){
      return $http.post(restUrl + '/registrar/gasolina', data, {
          headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
          transformRequest: transform
      });
    }

    // --------- Financial Log Rest Services -----------
    dataFactory.getCategories = function(apiToken){
        return $http.get(restUrl + '/get/categories');
    }

    dataFactory.getPaymentMethods = function(apiToken){
        return $http.get(restUrl + '/get/paymentmethods');
    }

    dataFactory.getPaymentMethodsByType = function(type, apiToken){
        return $http.get(restUrl + '/get/paymentmethods/' + type);
    }

    dataFactory.getBanks = function(apiToken){
        return $http.get(restUrl + '/get/banks');
    }

    dataFactory.getCars = function(apiToken){
        return $http.get(restUrl + '/get/cars');
    }

    dataFactory.storeFinancialLog = function(data, apiToken){
        return $http.post(restUrl + '/store/financial/log', data, {
            headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: transform
        });
    }

    // ----------- Departamentos -------------
    dataFactory.getDepartamentos = function(apiToken){
        return $http.get(restUrl + '/get/departamentos');
    }

    dataFactory.guardarUsuario = function(data, apiToken){
        return $http.post(restUrl + '/store/usuario', data, {
            headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: transform
        });
    }

    dataFactory.getNombreUsuarios = function(apiToken) {
        return $http.get(restUrl + '/get/nombreUsuarios', {
             headers : { 'token': apiToken},
        });
      
    }

    dataFactory.getDependencias = function(apiToken) {
        return $http.get(restUrl + '/get/dependencias');
    }

    dataFactory.guardarDependencia = function(data, apiToken){
        return $http.post(restUrl + '/store/dependencia', data, {
            headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: transform
        });
    }

    // -- Memos & Oficios
    dataFactory.getCorrespondencias = function(correspondenciaId, apiToken) {
        return $http.get(restUrl + '/get/memos-oficios/correspondencias/' + correspondenciaId);
    }

    dataFactory.guardarMemoOficio = function(data, apiToken){
        return $http.post(restUrl + '/store/memos-oficios', data, {
            headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: transform
        });
    }
    
    // Consultas
    dataFactory.consultarCorrespondencia = function(data, apiToken) {
        return $http.post(restUrl + '/get/consultas/correspondencia', data, {
            headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: transform
        });
    }
    
    dataFactory.consultarMemosOficios = function(data, apiToken) {
        return $http.post(restUrl + '/get/consultas/memos-oficios', data, {
            headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            transformRequest: transform
        });
    }

    return dataFactory;
}]);