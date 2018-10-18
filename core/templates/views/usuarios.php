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
            <input type="text" class="form-control" id="nombre" ng-model='nombre' required>
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
            <label class="control-label" for="rolUsuario">Rol de Sistema</label>
            <select class="form-control" id="rolUsuario" ng-model='rolUsuario' required>
            <option value="" selected>-- Selecciona un Rol de Sistema --</option>
              <option value="admin" selected>Administrador</option>
              <option value="user">Usuario N1 [Memos, Oficios, Correspondencia, Consultas]</option>
              <option value="basic">Usuario N2 [Memos, Oficios, Consultas]</option>
            </select>
        </div>

        <div class="checkbox">
            <label>
                <input type="checkbox" ng-model='esJefe' > <em> ¿El usuario a registrar sera <strong> Jefe de algún Departamento</strong>? </em>
            </label>
        </div>

        <div ng-show="esJefe">
            <div class="form-group" ng-hide="nuevoDepartamento">
                <label class="control-label" for="selectedDepartamento">Departamento</label>
                <select class="form-control" id="selectedDepartamento" ng-change="changeMethod()" ng-model='selectedDepartamento' required>
                    <option value="" selected>-- Selecciona un departamento --</option>
                    <option ng-repeat="departamento in departamentos" value="{{departamento.id}}">{{departamento.nombre}}</option>
                </select>
            </div>
            
            <div class="form-group" ng-show="nuevoDepartamento">
                <label class="control-label" for="txtNuevoDepartamento">Nuevo Departamento</label>
                <input type="text" class="form-control" id="txtNuevoDepartamento" ng-model='txtNuevoDepartamento' required>
            </div>

            <div class="checkbox">
                <label>
                    <input type="checkbox" ng-model='nuevoDepartamento'> <strong> <em> Registrar Nuevo Departamento </em></strong>
                </label>
            </div>
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
            <button 
                type="button" 
                class="btn btn-primary btn-lg" 
                ng-click='fn.guardar()'>
                Registrar Usuario
            </button>
        </div>
    </form>
</div>
<!-- Don't close the <body> and <html>  tags, these tags are already include by the PHP System -->