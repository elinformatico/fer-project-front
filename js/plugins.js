angular.module("mobieApp")
.service('plugins', function() {

    // Source: https://www.jqueryscript.net/time-clock/Configurable-Date-Picker-Plugin-For-Bootstrap.html
    this.createCalendar = function(element) 
    {
        $(element).datepicker();
    };
    
});
