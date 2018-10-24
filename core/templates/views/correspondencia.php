 <div class="jumbotron">
  <div class="container text-center">
    <h1><?php echo $pageData["nameSection"] ?></h1>      
    <p>Introducir todos los datos necesarios para registrar una Correspondencia </p>
  </div>
</div>
  <div class="container">
    <form name='frmCorrespondencia' novalidate>
        
        <div class="form-group">
            <label class="control-label" for="corrReferencia">Referencia</label>
            <input type="text" class="form-control" id="corrReferencia" ng-model='corrReferencia' required>
        </div>

        <div class="form-group" ng-hide="nuevaDependencia">
            <label class="text-label" for="corrSelectedDependencia">Dependencia:</label>
            <select class="form-control" id="corrSelectedDependencia" ng-model='corrSelectedDependencia' required>
              <option value="" selected>-- Selecciona una Dependencia existente --</option>
              <option ng-repeat="dependencia in dependencias" value="{{dependencia.id}}">{{dependencia.nombre}}</option>
            </select>
        </div>

        <div class="form-group" ng-show="nuevaDependencia">
            <label class="control-label" for="txtNuevaDependencia">Nueva Dependencia</label>
            <input type="text" class="form-control" id="txtNuevaDependencia" ng-model='txtNuevaDependencia' required>
        </div>

        <div class="checkbox">
            <label>
                <input type="checkbox" ng-model='nuevaDependencia'> <strong> <em>¿No esta la dependencia que buscas? Registra una nueva </em></strong>
            </label>
        </div>

        <div class="form-group">
            <label class="control-label" for="corrDescripcion">Descripción</label>
            <input type="text" class="form-control" id="corrDescripcion" ng-model='corrDescripcion' required>
        </div>

        <div class="form-group" ng-hide="nuevoDepartamento">
            <label class="control-label" for="corrSelectedDepartamento">Departamento:</label>
            <select class="form-control" id="corrSelectedDepartamento" ng-model='corrSelectedDepartamento' required>
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

        <div class="form-group">
            <label class="text-label" for="corrSelectedDirigidoA">Dirigido A:</label>
            <select class="form-control" id="corrSelectedDirigidoA" ng-model='corrSelectedDirigidoA' required>
              <option value="" selected>-- Selecciona un Usuario--</option>
                <option ng-repeat="usuario in usuarios" value="{{usuario.id}}">{{usuario.nombre}} --> [{{usuario.departamento}}]</option>
            </select>
        </div>

        <div class="form-group" ng-show="tieneTiempoRespuesta">
            <label class="control-label" for="corrTiempoLimiteRespuesta">Tiempo Limite de respuesta: 
                <!-- <em>{{corrTiempoLimiteRespuesta}}</em> -->
            </label>
            
            <div class="input-group date tiempo-respuesta">
                <input type="text" class="form-control" ng-blur="fn.lostFocusCalendar()" ng-model="corrTiempoLimiteRespuesta" id="fechaRespuesta"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
            </div>
        </div>
        
        <div class="checkbox">
            <label>
                <input type="checkbox" ng-model='tieneTiempoRespuesta'> <strong> <em> Definir Fecha Limite de Respuesta </em></strong>
            </label>
        </div>

        <div class="form-group">
            <label class="control-label" for="corrObservaciones">Observaciones</label>
            <textarea class="form-control" rows="3" ng-model="corrObservaciones"></textarea>
        </div>
        
        <!-- Example -->
        <!-- <div class="form-group">
             <h2>Inline Calendar</h2>
            <div class="demo-2"></div>
            <h2>Date Range Picker</h2>
            <div class="input-daterange input-group demo-3" id="datepicker">
                <input type="text" class="input-sm form-control" name="start" />
                <span class="input-group-addon">to</span>
                <input type="text" class="input-sm form-control" name="end" />
            </div>
        </div> -->
        
        <div class="form-group">
            <button 
                type="button" 
                class="btn btn-primary btn-lg" 
                ng-click='fn.guardar()'>
                Guardar Correspondencia
            </button>
        </div>
    </form>
</div>
<!-- Don't close the <body> and <html>  tags, these tags are already include by the PHP System -->