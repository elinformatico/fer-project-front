angular.module("mobieApp")
.service('plugins', function() {

    // Source: https://www.jqueryscript.net/time-clock/Configurable-Date-Picker-Plugin-For-Bootstrap.html
    this.createCalendar = function(element) 
    {
        $(element).datepicker()
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
});
