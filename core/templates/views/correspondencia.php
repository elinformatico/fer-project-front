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

        <div class="form-group">
            <label class="text-label" for="corrDependencia">Dependencia:</label>
            <select class="form-control" id="corrDependencia" ng-model='corrDependencia' required>
              <option value="magna" selected>Opcion 1</option>
              <option value="premium">Opcion 2</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label" for="corrDescripcion">Descripción</label>
            <input type="text" class="form-control" id="corrDescripcion" ng-model='corrDescripcion' required>
        </div>

        <div class="form-group">
            <label class="text-label" for="corrDepartamento">Departamento:</label>
            <select class="form-control" id="corrDepartamento" ng-model='corrDepartamento' required>
              <option value="magna" selected>Opcion 1</option>
              <option value="premium">Opcion 2</option>
            </select>
        </div>

        <div class="form-group">
            <label class="text-label" for="corrDirigidoA">Dirigido A:</label>
            <select class="form-control" id="corrDirigidoA" ng-model='corrDirigidoA' required>
              <option value="magna" selected>Opcion 1</option>
              <option value="premium">Opcion 2</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label" for="oficiosAsunto">Tiempo Limite de respuesta: 
                <em ng-model="corrTiempoLimiteRespuesta"></em>
            </label>
        </div>

        <div class="form-group">
            <label class="control-label" for="oficiosObservaciones">Observaciones</label>
            <textarea class="form-control" rows="3" ng-model="oficiosObservaciones"></textarea>
        </div>
        
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