<?php
  loadSession();
?>
 <div class="jumbotron">
  <div class="container text-center">
    <h1>Inicio de Sesión</h1>      
    <p>Favor de Introducir los datos necesarios para iniciar Sesión</p>
  </div>
</div>
  
<div class="container">    
 	<form action="<?php echo $pageData['root']; ?>/section/login" method="post">
 		<input type="hidden" name="formSubmited" value="<?php echo date("Y:m:d G:i:s"); ?>" />
  		<div class="form-group">
    		<label for="username">Nombre de Usuario</label>
    		<input type="text" class="form-control" id="username" name="username">
  		</div>
  		<div class="form-group">
    		<label for="password">Contraseña</label>
    		<input type="password" class="form-control" id="password" name="password" placeholder="Password">
  		</div>
  		<button type="submit" class="btn btn-primary btn-lg">INICIAR SESIÓN</button>

      <?php if(isset($_REQUEST['error'])) : ?>
          <div class="alert alert-danger" role="alert" style="margin-top: 20px;"><?php echo $_REQUEST['error']; ?></div>
      <?php endif; ?>
    
       <?php if(isExpiredSessionFromURL()) : ?>
          <div class="alert alert-danger" role="alert" style="margin-top: 20px;">La sesion ha caducado! <br /> Porfavor introduzca sus credenciales e inicie sesion nuevamente!</div>
      <?php endif; ?>

  </form>
</div>
<div style="height: 50px;"> </div>
<!-- Don't close the <body> and <html>  tags, these tags are already include by the PHP System -->


