angular.module("mobieApp")
.service('growlService', function() {

    this.notice = function(title, msg){
        $.growl.notice({
            title: title, 
            message: msg,
            location : 'tc',
            size:'large',
            duration:8000
        });
    }

    this.warning = function(title, msg){
        $.growl.warning({
           title: title,
           message: msg,
           location : 'tc',
           size:'large',
           duration:8000
        });
    }

    this.error = function(title, msg){
        $.growl.error({
           title: title,
           message: msg,
           location : 'tc',
           size:'large',
           duration:8000
        });
    }

    //error de mensaje
    this.warningCode = function(title, msg,codigo){
        $.growl.warning({
           title: title,
           message: msg+" (Código Error: "+codigo+").",
           location : 'tc',
           size:'large',
           duration:8000
        });
    }
});
