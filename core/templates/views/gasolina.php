 <div class="jumbotron">
  <div class="container text-center">
    <h1>Registro de Gasolina</h1>      
    <p>Introducir todos los datos necesarios para registrar gasolina</p>
  </div>
</div>
  <div class="container">
    <form name='frmGasolina' novalidate>
        <div class="form-group">
            <label class="control-label" for="selectedCar">Vehículo</label>
            <select class="form-control" id="selectedCar" ng-change="fn.onChangeCar(selectedCar)" ng-model='selectedCar' required>
                <option value="" selected>-- Selecciona un Vehículo --</option>
                <option ng-repeat="car in cars" value="{{car.car_id}}">{{car.car_alias}}</option>
            </select>
            <p style="padding-top:10px;">
                {{msgUltimoKilometraje}}
            </p>
        </div>

        <div class="form-group">
            <label class="control-label" for="litros"># Litros</label>
            <input type="number" class="form-control" id="litros" ng-model='litros' required>
        </div>

        <div class="form-group">
            <label class="control-label" for="tipoGasolina">Tipo Gasolina</label>
            <select class="form-control" id="tipoGasolina" ng-model='tipoGasolina' required>
              <option value="magna" selected>Magna</option>
              <option value="premium">Premium</option>
            </select>
        </div>

        <div class="form-group">
            <label class="control-label" for="montoGasolina">Monto Gasolina</label>
            <div class="input-group">
                <span class="input-group-addon">$</span>
                <input type="number" class="form-control" id="montoGasolina" ng-model='montoGasolina' required>
            </div>
        </div>

        <div class="form-group">
            <label class="control-label" for="kilometraje">Kilometraje</label>
            <input type="number" class="form-control" id="kilometraje" ng-model='kilometraje' required>
            <label style="font-size: 10px;">Último Kilometraje registrado: {{ultimoKilometraje | number}}</label>
        </div>

        <div class="form-group">
            <label class="control-label" for="selectedPaymentMethod">Forma de Pago</label>
            <select class="form-control" id="selectedPaymentMethod" ng-change="fn.changeMethod(selectedPaymentMethod)" ng-model='selectedPaymentMethod' required>
                <option value="" selected>-- Selecciona un método de Pago --</option>
                <option ng-repeat="payment in paymentMethods" value="{{payment.pmt_id}}">{{payment.pmt_name}}</option>
            </select>
        </div>

        <div class="form-group" ng-show="mostrarBancos">
            <label class="control-label" for="selectedBank">Banco</label>
            <select class="form-control" id="selectedBank" ng-model='selectedBank' required>
                <option value="" selected>-- Selecciona un Banco --</option>
                <option ng-repeat="bank in banks" value="{{bank.bank_id}}">{{bank.bank_name}}</option>
            </select>
        </div>

        <div class="form-group">
            <button 
                type="button" 
                class="btn btn-primary btn-lg" 
                ng-click='fn.guardar()'>
                Guardar Gasolina
            </button>
        </div>
    </form>
</div>
<!-- Don't close the <body> and <html>  tags, these tags are already include by the PHP System -->