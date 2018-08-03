<!DOCTYPE html>
<html ng-app="mobieApp">
<head>
    <title>Mobie - Find the Best Movie</title>
     	<meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
     	<meta name="author" content="Jose Noe Hernandez Vivanco"/>
     	<meta name="description" content="Find the best Movie"/>
     	<meta name="keywords" content="Movies, Mobie"/>
     	<meta http-equiv="X-UA-Compatible" content="IE=9" />
     	<meta name="viewport" content="initial-scale=1, maximum-scale=1">

        <!-- Incluimos todos los CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

        <script src="<?php echo $global['app_base']; ?>/js/vendor/jquery/jquery-2.1.3.min.js"></script>
        <script src="<?php echo $global['app_base']; ?>/js/vendor/angular/angular.min.js"></script>
        <script src="<?php echo $global['app_base']; ?>/js/app.js"></script>
        <script src="<?php echo $global['app_base']; ?>/js/webservices/apiFactoryRest.js"></script>

</head>
<body ng-controller="menuPrincipalCtrl">  
    
    <table class="table table-hover" style="width: 50%">
        <tr> 
            <td> Country ID </td>
            <td> Country Name</td>
        </tr>
        <tr ng-repeat="country in countries">
            <td> {{country.cty_id}} </td>
            <td> {{country.cty_name}} </td>
        </tr>
    </table>

</body>
</html>

<!-- Todos los Templates -->
<!-- http://www.w3schools.com/bootstrap/bootstrap_templates.asp -->

<!-- Templates Bootstrap-->
<!-- http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_temp_portfolio&stacked=h -->
