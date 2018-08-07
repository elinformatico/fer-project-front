 <div class="jumbotron">
  <div class="container text-center">
    <h1><?php echo $pageData["nameSection"] ?></h1>      
    <p>Introducir todos los datos necesarios para registrar un Memo nuevo</p>
  </div>
</div>
  <div class="container">
    <form name='frmMemos' novalidate>

        <div class="form-group">
            <label class="text-label" for="memosTurnadoA">Turnado a:</label>
            <select class="form-control" id="memosTurnadoA" ng-model='memosTurnadoA' required>
              <option value="magna" selected>Opcion 1</option>
              <option value="premium">Opcion 2</option>
            </select>
        </div>

        <div class="form-group">
            <div class="radio">
                <label>
                    <input type="radio" name="memosTipoAnio" ng-model="memosTipoAnio"> Año Corriente
                </label>
            </div>
        </div>

        <div class="form-group">
            <div class="radio">
                <label>
                    <input type="radio" name="memosTipoAnio" ng-model="memosTipoAnio"> Año Pasado
                </label>
            </div>
        </div>

        <div class="form-group">
            <label class="control-label" for="memosAsunto">Asunto</label>
            <input type="text" class="form-control" id="memosAsunto" ng-model='memosAsunto' required>
        </div>

        <div class="form-group">
            <label class="control-label" for="memosObservaciones">Observaciones</label>
            <textarea class="form-control" rows="3" ng-model="memosObservaciones"></textarea>
        </div>
        
        <div class="form-group">
            <button 
                type="button" 
                class="btn btn-primary btn-lg" 
                ng-click='fn.guardar()'>
                Guardar Memo
            </button>
        </div>
    </form>
</div>
<!-- Don't close the <body> and <html>  tags, these tags are already include by the PHP System -->