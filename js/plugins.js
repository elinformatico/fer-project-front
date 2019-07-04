angular.module("mobieApp")
.service('plugins', function() {

    // Source: https://www.jqueryscript.net/time-clock/Configurable-Date-Picker-Plugin-For-Bootstrap.html
    this.createCalendar = function(element) 
    {
        $(element).datepicker({
            format: 'yyyy/mm/dd',
        })
            .on('changeDate', function(e) {
                // console.log('Date Selected: ', e);
            });
    };
    
    this.getSelectedDate = function(jQueryElementId) {
        return $(jQueryElementId).val();
    };
  
    this.getUserId = function() {
        return $("#userId").val();
    }
   
    this.apiToken = $("#apiToken").val();
  
    this.isLogged = function() {
        return $("#apiToken").length === 1;
    }
     
    this.preloadingIn = function() 
    {
        $(".container-preloading").fadeIn("slow");
    }
    
    this.preloadingOut = function() 
    {
        $(".container-preloading").fadeOut("slow");
    }
    
    this.confirmar = function(msg) 
    {
        if(msg !== undefined)
            return confirm(msg);
        else 
            return confirm("¿Todos los datos son correctos para continuar? Se procederá a guardar la información capturada.");
    }
    
    this.loadModal = function(params) 
    {
        var modalInstance = params.uibModal.open({
            animation: true,
            templateUrl : params.template,
            controller  : 'modalWindowCtrl.js',
            size        : 'lg',
            backdrop    : 'static',
            keyboard    : false,
            resolve     : {
                Data: function() {
                    return { 
                        title : params.title,
                        data : params.data,
                        type : 'modal'
                    };
                }
            }
        });
    }
});
