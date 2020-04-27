  <!-- Navigation Menu -->
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
        </button>
        <a class="navbar-brand" href="#">Ménu</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <?php
                generateMenuByUser($pageData['pages'], $pageData['name'], $_SESSION)
          ?>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <?php if (!isSessionActive()) : ?>
              <li><a href="login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
          <?php else : ?>
              <li><a href="logout"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
          <?php endif; ?>
        </ul>
      </div>
    </div>
  </nav>