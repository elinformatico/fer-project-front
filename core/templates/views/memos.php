 <div class="jumbotron">
  <div class="container text-center">
    <h1><?php echo $pageData["nameSection"] ?></h1>      
    <p>Introducir todos los datos necesarios para registrar un Memo nuevo</p>
  </div>
</div>
  <div class="container">
    <form name='frmMemos' novalidate>

        <!-- Turnado A -->
        <div class="form-group">
            <label class="text-label" for="tipoTurnadoA">Turnado a:</label>
            <select class="form-control" id="tipoTurnadoA" ng-model='tipoTurnadoA' ng-change="fn.onChangeTurnadoA(tipoTurnadoA)">
                <option value="" selected>-- Seleccione una opción --</option>
                <option value="dependencia">Dependencia</option>
                <option value="usuario">Usuario</option>
                <option value="abierto">Abierto</option>
            </select>
        </div>
    
        <!-- Turnado a Dependencias -->
        <div class="form-group" ng-show="mostrarTurnadoA_dependencia">
            <label class="text-label" for="turnadoA_dependencia">Dependencia:</label>
            <select class="form-control" id="turnadoA_dependencia" ng-model='turnadoA_dependencia' ng-change='fn.onChangeDependencia(turnadoA_dependencia)'>
              <option value="" selected>-- Selecciona una Dependencia existente --</option>
              <option ng-repeat="dependencia in dependencias" value="{{dependencia.id}}">{{dependencia.nombre}}</option>
            </select>
        </div>

        <!-- Listado de Correspondencia para contestar  -->
        <div class="form-group" ng-show="mostrarTurnadoA_dependencia">
            <label class="text-label" for="turnadoA_dep_correspondencia">Correspondencia: </label>
            <select class="form-control" id="turnadoA_dep_correspondencia" ng-model='turnadoA_dep_correspondencia'>
              <option ng-repeat="correspondencia in correspondencias" value="{{correspondencia.id}}">{{correspondencia.referencia}}, {{correspondencia.descripcion}}</option>
            </select>
        </div>

        <!-- Turnado a Usuario -->
        <div class="form-group" ng-show="mostrarTurnadoA_usuario">
            <label class="text-label" for="turnadoA_usuario">Turnado al Usuario:</label>
            <select class="form-control" id="turnadoA_usuario" ng-model='turnadoA_usuario'>
              <option value="" selected>-- Selecciona un Usuario--</option>
                <option ng-repeat="usuario in usuarios" value="{{usuario.id}}">{{usuario.nombre}} --> [{{usuario.departamento}}]</option>
            </select>
        </div>

        <!-- Turnado a Abierto -->
        <div class="form-group" ng-show="mostrarTurnadoA_abierto">
            <label class="control-label" for="txtTurnadoA_abierto">Turnado a: (Abierto)</label>
            <input type="text" class="form-control" id="txtTurnadoA_abierto" ng-model='txtTurnadoA_abierto'>
        </div>

        <div class="form-group">
            <label class="text-label" for="tipoAnio">¿A que año esta dirigido?</label>
            <select class="form-control" id="tipoAnio" ng-model='tipoAnio'>
                <option value="" selected>-- Seleccione una opción --</option>
                <option value="anio_corriente">Año Corriente</option>
                <option value="anio_pasado">Año Pasado</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label" for="txtAsunto">Asunto</label>
            <input type="text" class="form-control" id="txtAsunto" ng-model='txtAsunto'>
        </div>

        <div class="form-group">
            <label class="control-label" for="txtObservaciones">Observaciones</label>
            <textarea class="form-control" rows="3" ng-model="txtObservaciones"></textarea>
        </div>
        
        <div class="form-group">
            <button 
                type="button" 
                class="btn btn-primary btn-lg" 
                ng-click='fn.guardarMemo()'>
                Guardar Memo
            </button>
        </div>
    </form>
</div>
<!-- Don't close the <body> and <html>  tags, these tags are already include by the PHP System -->