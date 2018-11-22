 <div class="jumbotron">
  <div class="container text-center">
    <h1><?php echo $pageData["nameSection"] ?></h1>      
    <p>Introducir todos los datos necesarios para registrar una Correspondencia </p>
  </div>
</div>
  <div class="container">
    <form name='frmConsultas' novalidate>
      
        <div class="form-group">
            <table class="table">
                <tr>
                    <td><label class="text-label" for="buscarPor">Buscar por: </label></td>
                    <td>
                        <select class="form-control" id="buscarPor" ng-model='buscarPor' ng-change="fn.onBuscarPor(buscarPor)">
                            <option value="" selected>-- Seleccione una opción --</option>
                            <option value="memos">Memos</option>
                            <option value="oficios">Oficios</option>
                            <?php if(getRoleSistema() !== 'basic' ): ?>
                                <option value="correspondencia">Correspondencia</option>
                            <?php endif; ?>
                        </select>
                    </td>
                </tr>
                <?php if(getRoleSistema() === 'admin' ): ?>
                    <tr>
                        <td><label class="text-label" for="buscarPor">Usuario: </label></td>
                        <td>
                            <div class="form-group">
                                <select class="form-control" id="selectedUsuario" ng-model='selectedUsuario' ng-change="fn.selectedUser(selectedUsuario)" required>
                                    <option value="0" selected>Todos los Usuario</option>
                                    <option ng-repeat="usuario in usuarios" value="{{usuario.id}}">{{usuario.nombre}} --> [{{usuario.departamento}}]</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                <?php endif; ?>
                <tr>
                    <td><label class="text-label" for="buscarPor">Rango Fecha: </label></td>
                    <td>
                        <div class="form-group">
                            <div class="input-daterange input-group rango-fecha" id="datepicker">
                                <input 
                                       type="text" 
                                       class="input-sm form-control" 
                                       name="start" ng-blur="fn.lostFocustInicial()" ng-model="fechaInicial" id="fechaInicial" />
                                <span class="input-group-addon">to</span>
                                <input 
                                       type="text" 
                                       class="input-sm form-control" 
                                       name="end" ng-blur="fn.lostFocustFinal()" ng-model="fechaFinal" id="fechaFinal" />
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        
        <div class="form-group">
            <table class="table table-striped">
                <tr> 
                    <td>Folio</td>
                    <td>Tipo</td>
                    <td>Fecha Creado</td>
                    <td>Solicitante</td>
                    <td>Dirigido A</td>
                    <td>Depto Dirigido</td>
                    <td>Usuario Dirigido</td>
                    <td>Referencia</td>
                    <td>Fecha Limite</td>
                    <td>Estatus</td>
                </tr>
                <tr ng-repeat="correspondencia in correspondencias">
                    <td>{{correspondencia.folio}}</td>
                    <td>Correspondencia</td>
                    <td>{{correspondencia.fecha_creacion}}</td>
                    <td>{{correspondencia.creador}}</td>
                    <td>{{correspondencia.dirigido_a}}</td>
                    <td>{{correspondencia.depto_dirigido}}</td>
                    <td>{{correspondencia.persona_dirigida}}</td>
                    <td>{{correspondencia.referencia}}</td>
                    <td>{{correspondencia.fecha_limite}}</td>
                    <td class="{{correspondencia.color_status}}">{{correspondencia.estatus_limite}}</td>
                </tr>
            </table>
        </div>
        
        <div class="form-group">
            <button 
                type="button" 
                class="btn btn-primary btn-lg" 
                ng-click='fn.consultar()'>
                Consultar Datos
            </button>
        </div>
    </form>
</div>
<!-- Don't close the <body> and <html>  tags, these tags are already include by the PHP System -->