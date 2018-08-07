 <div class="jumbotron">
  <div class="container text-center">
    <h1><?php echo $pageData["nameSection"] ?></h1>      
    <p>Introducir todos los datos necesarios para registrar una Correspondencia </p>
  </div>
</div>
  <div class="container">
    <form name='frmConsultas' novalidate>
        
        <div class="form-group">
            
            <table class="table table-striped">
                <tr> 
                    <td>Seleccionar</td>
                    <td>Fecha Creación</td>
                    <td>Folio</td>
                    <td>Dirigido A:</td>
                    <td>Asunto</td>
                    <td>Solicitante</td>
                    <td>Depto Dirigido</td>
                    <td>Fecha Limite</td>
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