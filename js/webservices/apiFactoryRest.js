angular.module('mobieApp')
.factory('apiFactoryRest', ['$rootScope', '$http',  function( $rootScope, $http ){

    var restUrl = $rootScope.api;
    var dataFactory = {};

    var transform = function(data){
        return jQuery.param(data);
    }
    
    dataFactory.rootScope = restUrl;
    // ----------------------- Ejemplos -------------------------
    dataFactory.storeExample = function(data, apiToken){
      return $http.post(restUrl + '/store/example', data, {
          headers : { 
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'token': apiToken
          },
          transformRequest : transform
      });
    }
    dataFactory.deleteExample = function(data, apiToken){
        return $http.delete(restUrl + '/delete/example/'+ data, {
             headers : { 'token': apiToken },
        });
    }

    dataFactory.updateExample = function(data, apiToken){
       return $http.put(restUrl + '/update/example', data, {
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'token': apiToken
            },
            transformRequest: transform
        });  
    }

    // --------------- Rest Utilizables -------------------
    dataFactory.getCountries = function(apiToken){
        return $http.get(restUrl + '/get/countries', {
             headers : { 'token': apiToken },
        });
    } 

    dataFactory.getMovies = function(apiToken){
        return $http.get(restUrl + '/get/movies', {
             headers : { 'token': apiToken },
        });
    }

    dataFactory.getActorsMovie = function(movieId, apiToken){
        return $http.get( restUrl + '/movies/actors/' + movieId, {
             headers : { 'token': apiToken },
        });
    }

    // --------- Financial Log Rest Services -----------
    
    dataFactory.getMaximoKilometraje = function(carId, apiToken){
        return $http.get( restUrl + '/fnz/get/kilometraje/' + carId, {
             headers : { 'token': apiToken},
        });
    }
    
    dataFactory.getGastoMensual = function(carId, apiToken){
        return $http.get( restUrl + '/fnz/get/gasto-mensual/' + carId, {
             headers : { 'token': apiToken},
        });
    }

    dataFactory.storeGasolina = function(data, apiToken){
      return $http.post(restUrl + '/fnz/registrar/gasolina', data, {
          headers : { 
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'token': apiToken
          },
          transformRequest: transform
      });
    }

    dataFactory.getCategories = function(apiToken){
        return $http.get(restUrl + '/fnz/get/categories', {
             headers : { 'token': apiToken },
        });
    }

    dataFactory.getPaymentMethods = function(apiToken){
        return $http.get(restUrl + '/fnz/get/paymentmethods', {
             headers : { 'token': apiToken },
        });
    }

    dataFactory.getPaymentMethodsByType = function(type, apiToken){
        return $http.get(restUrl + '/fnz/get/paymentmethods/' + type, {
             headers : { 'token': apiToken },
        });
    }

    dataFactory.getBanks = function(apiToken){
        return $http.get(restUrl + '/fnz/get/banks', {
             headers : { 'token': apiToken },
        });
    }

    dataFactory.getCars = function(apiToken){
        return $http.get(restUrl + '/fnz/get/cars', {
             headers : { 'token': apiToken },
        });
    }

    dataFactory.storeFinancialLog = function(data, apiToken){
        return $http.post(restUrl + '/fnz/store/financial/log', data, {
            headers : { 
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'token': apiToken
            },
            transformRequest: transform
        });
    }

    // ----------- Departamentos -------------
    dataFactory.getDepartamentos = function(apiToken){
        return $http.get(restUrl + '/get/departamentos', {
             headers : { 'token': apiToken},
        });
    }

    dataFactory.guardarUsuario = function(data, apiToken){
        return $http.post(restUrl + '/store/usuario', data, {
            headers : { 
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'token': apiToken
            },
            transformRequest: transform
        });
    }

    dataFactory.getNombreUsuarios = function(apiToken) {
        return $http.get(restUrl + '/get/nombreUsuarios', {
             headers : { 'token': apiToken},
        });
      
    }

    dataFactory.getDependencias = function(apiToken) {
        return $http.get(restUrl + '/get/dependencias', {
             headers : { 'token': apiToken },
        });
    }

    dataFactory.guardarDependencia = function(data, apiToken){
        return $http.post(restUrl + '/store/dependencia', data, {
            headers : { 
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'token': apiToken
            },
            transformRequest: transform
        });
    }

    // -- Memos & Oficios
    dataFactory.getCorrespondencias = function(correspondenciaId, apiToken) {
        return $http.get(restUrl + '/get/memos-oficios/correspondencias/' + correspondenciaId, {
             headers : { 'token': apiToken },
        });
    }

    dataFactory.guardarMemoOficio = function(data, apiToken){
        return $http.post(restUrl + '/store/memos-oficios', data, {
            headers : { 
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'token': apiToken
            },
            transformRequest: transform
        });
    }
    
    // Consultas
    dataFactory.consultarCorrespondencia = function(data, apiToken) {
        return $http.post(restUrl + '/get/consultas/correspondencia', data, {
            headers : { 
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'token': apiToken
            },
            transformRequest: transform
        });
    }
    
    dataFactory.consultarMemosOficios = function(data, apiToken) {
        return $http.post(restUrl + '/get/consultas/memos-oficios', data, {
            headers : { 
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'token': apiToken
            },
            transformRequest: transform
        });
    }

    return dataFactory;
}]);