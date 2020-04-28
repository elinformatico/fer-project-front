<!DOCTYPE html>
<html lang="en" ng-app="mobieApp">
<head>
  <title><?php echo $pageData['nameSection']; ?></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="shortcut icon" href="<?php echo $pageData['app_base']; ?>/favicon.ico" type="image/x-icon">
  <link rel="icon" href="<?php echo $pageData['app_base']; ?>/favicon.ico" type="image/x-icon">

  <!-- ================================================================================= -->
  <script src="<?php echo $pageData['app_base']; ?>/js/vendor/angular/angular.min.js"></script>
  <!-- ================================================================================= -->
  
  <!-- Bootstrap 4 CSS -->
  <link rel="stylesheet" 
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
        crossorigin="anonymous">
  
  <!-- jQuery to work with Boostrap -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> 
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" 
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" 
        crossorigin="anonymous"></script>
   
  <!-- Bootstrap JS -->
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" 
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" 
          crossorigin="anonymous"></script>

  <!-- Font Awesome CSS -->
  <link href="<?php echo $pageData['app_base']; ?>/js/vendor/font-awesome-v5/css/all.css" rel="stylesheet"> 
    
  <script src="<?php echo $pageData['app_base']; ?>/js/vendor/animate/angular-animate.min.js"></script>
  <!-- Bootstrap angular-->
  <script src="<?php echo $pageData['app_base']; ?>/js/vendor/angularbootstrap-ui/ui-bootstrap-tpls-0.14.3.min.js"></script>
  
  <!-- Calendar Pluging -->
  <link rel="stylesheet" href="<?php echo $pageData['app_base']; ?>/js/plugins/calendar/bootstrap-datepicker3.css">
  <script src="<?php echo $pageData['app_base']; ?>/js/plugins/calendar/bootstrap-datepicker.js"></script>

  <!-- Preloading -->
  <link rel="stylesheet" href="<?php echo $pageData['app_base']; ?>/js/plugins/preloading/preloading.css">
    
  <!-- Submenu Controller -->
  <script src="<?php echo $pageData['app_base']; ?>/js/plugins/bootstrap-submenu/submenu-ctrl.js"></script>
  
  <!-- ================================================================================= -->
  <script src="<?php echo $pageData['app_base']; ?>/js/app.js"></script>
  <!-- ================================================================================= -->
  
  <!-- Grow Service Plugins -->
  <link rel="stylesheet" href="<?php echo $pageData['app_base'] ?>/css/jquery.growl.css">
  <script src="<?php echo $pageData['app_base']; ?>/js/vendor/GrowlNotification/jquery.growl.js"></script>
  <script src="<?php echo $pageData['app_base']; ?>/js/growlService.js"></script>
  <script src="<?php echo $pageData['app_base']; ?>/js/plugins.js"></script>

  <!-- Modal Window Controller -->
  <script src="<?php echo $pageData['app_base']; ?>/js/controllers/modalWindowCtrl.js"></script>
  
  <!-- Modules & Angular Controllers -->
  <!-- ================================================================================= -->
  <script src="<?php echo $pageData['app_base']; ?>/js/webservices/apiFactoryRest.js"></script>
  <?php if($pageData['angularController'] != "noController") : ?>
        <script src="<?php echo $pageData['app_base']; ?>/js/controllers/<?php echo $pageData['angularController']; ?>.js"></script>
  <?php endif; ?>
  <!-- ================================================================================= -->
  <link rel="stylesheet" type="text/css" href="<?php echo $pageData['app_base']; ?>/css/style.css">

</head>

<?php if($pageData['angularController'] != "noController") : ?>
    <body ng-controller="<?php echo $pageData['angularController']; ?>">
<?php else: ?>
    <body>
<?php endif; ?>

<?php if (isSessionActive()) : ?>
  <input type="hidden" id="apiToken" value="<?php echo $_SESSION["apiToken"]  ?>" />
<?php endif; ?>

<!-- Preloading HTML-->
<div class="container-preloading">
	<div class="row"> 
        <div class="animationload">
            <div class="osahanloading"></div>
        </div>
	</div>
</div>

<input type="hidden" id="userId" value="<?php echo getSessionUserId(); ?>" />
<!-- Navigation Menu start below here -->

