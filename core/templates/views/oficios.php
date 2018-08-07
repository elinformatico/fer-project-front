 <div class="jumbotron">
  <div class="container text-center">
    <h1><?php echo $pageData["nameSection"] ?></h1>      
    <p>Introducir todos los datos necesarios para registrar un Oficio nuevo</p>
  </div>
</div>
  <div class="container">
    <form name='frmOficios' novalidate>

        <div class="form-group">
            <label class="text-label" for="oficiosTurnadoA">Turnado a:</label>
            <select class="form-control" id="oficiosTurnadoA" ng-model='oficiosTurnadoA' required>
              <option value="magna" selected>Opcion 1</option>
              <option value="premium">Opcion 2</option>
            </select>
        </div>

        <div class="form-group">
            <div class="radio">
                <label>
                    <input type="radio" name="oficiosTipoAnio" ng-model="oficiosTipoAnio"> Año Corriente
                </label>
            </div>
        </div>

        <div class="form-group">
            <div class="radio">
                <label>
                    <input type="radio" name="oficiosTipoAnio" ng-model="oficiosTipoAnio"> Año Pasado
                </label>
            </div>
        </div>

        <div class="form-group">
            <label class="control-label" for="oficiosAsunto">Asunto</label>
            <input type="text" class="form-control" id="oficiosAsunto" ng-model='oficiosAsunto' required>
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
                Guardar Oficio
            </button>
        </div>
    </form>
</div>
<!-- Don't close the <body> and <html>  tags, these tags are already include by the PHP System -->