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
    
});
