<!DOCTYPE html>
<html lang="en" ng-app="mobieApp">
<head>
  <title><?php echo $pageData['nameSection']; ?></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="shortcut icon" href="<?php echo $pageData['app_base']; ?>/favicon.ico" type="image/x-icon">
  <link rel="icon" href="<?php echo $pageData['app_base']; ?>/favicon.ico" type="image/x-icon">

  <!-- ================================================================================= -->
  <script src="<?php echo $pageData['app_base']; ?>/js/vendor/angular/angular.min.js"></script>
  <!-- ================================================================================= -->

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  
  
  <script src="<?php echo $pageData['app_base']; ?>/js/vendor/animate/angular-animate.min.js"></script>
  <!-- Bootstrap angular-->
  <script src="<?php echo $pageData['app_base']; ?>/js/vendor/angularbootstrap-ui/ui-bootstrap-tpls-0.14.3.min.js"></script>
  
  <!-- Calendar Pluging -->
  <link rel="stylesheet" href="<?php echo $pageData['app_base']; ?>/js/plugins/calendar/bootstrap-datepicker3.css">
  <script src="<?php echo $pageData['app_base']; ?>/js/plugins/calendar/bootstrap-datepicker.js"></script>

  <!-- Preloading -->
  <link rel="stylesheet" href="<?php echo $pageData['app_base']; ?>/js/plugins/preloading/preloading.css">
  
  <!-- ================================================================================= -->
  <script src="<?php echo $pageData['app_base']; ?>/js/app.js"></script>
  <!-- ================================================================================= -->
  
  <!-- Grow Service Plugins -->
  <link rel="stylesheet" href="<?php echo $pageData['app_base'] ?>/css/jquery.growl.css">
  <script src="<?php echo $pageData['app_base']; ?>/js/vendor/GrowlNotification/jquery.growl.js"></script>
  <script src="<?php echo $pageData['app_base']; ?>/js/growlService.js"></script>
  <script src="<?php echo $pageData['app_base']; ?>/js/plugins.js"></script>

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
<!-- Navigation Menu -->
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
        </button>
        <a class="navbar-brand" href="#">Ménu</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <?php 
                generateMenu($pageData['pages'], $pageData['name'])
          ?>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <?php if (!isSessionActive()) : ?>
              <li><a href="login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
          <?php else : ?>
              <li><a href="logout"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
          <?php endif; ?>
        </ul>
      </div>
    </div>
  </nav>
