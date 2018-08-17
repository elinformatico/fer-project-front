 <div class="jumbotron">
  <div class="container text-center">
    <h1>Registrar Usuario</h1>      
    <p>Introducir todos los datos necesarios para registrar un usuario nuevo</p>
  </div>
</div>
  <div class="container">
    <form name='frmUsuarios' novalidate>
        <div class="form-group">
            <label class="text-label" for="nombre">Nombre(s)</label>
            <input type="number" class="form-control" id="nombre" ng-model='nombre' required>
        </div>

        <div class="form-group">
            <label class="control-label" for="apellidoPaterno">Apellido Paterno</label>
            <input type="text" class="form-control" id="apellidoPaterno" ng-model='apellidoPaterno' required>
        </div>

        <div class="form-group">
            <label class="control-label" for="apellidoMaterno">Apellido Materno</label>
            <input type="text" class="form-control" id="apellidoMaterno" ng-model='apellidoMaterno' required>
        </div>

        <div class="form-group">
            <label class="control-label" for="nombreUsuario">Nombre de Usuario</label>
            <input type="text" class="form-control" id="nombreUsuario" ng-model='nombreUsuario' required>
        </div>

        <div class="form-group">
            <label class="control-label" for="selectedDepartamento">Departamento</label>
            <select class="form-control" id="selectedDepartamento" ng-change="changeMethod()" ng-model='selectedDepartamento' required>
                <option value="" selected>-- Selecciona un departamento --</option>
                <option ng-repeat="departamento in departamentos" value="{{departamento.id}}">{{departamento.nombre}}</option>
            </select>
        </div>
        
        <div class="form-group">
            <label class="control-label" for="password">Contraseña</label>
            <input type="password" class="form-control" id="password" ng-model='password' required>
        </div>

        <div class="form-group">
            <label class="control-label" for="rePassword">Repetir Contraseña</label>
            <input type="password" class="form-control" id="rePassword" ng-model='rePassword' required>
        </div>
    
        <div class="form-group">
            <label class="control-label" for="jefeDepartamento">Jefe departamento</label>
            <select class="form-control" id="jefeDepartamento" ng-model='jefeDepartamento' required>
              <option value="magna" selected>Magna</option>
              <option value="premium">Premium</option>
            </select>
        </div>

        <div class="form-group">
            <button 
                type="button" 
                class="btn btn-primary btn-lg" 
                ng-click='fn.guardar()'>
                Guardar Usuario
            </button>
        </div>
    </form>
</div>
<!-- Don't close the <body> and <html>  tags, these tags are already include by the PHP System -->