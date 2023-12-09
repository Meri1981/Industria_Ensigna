document.getElementById("header").innerHTML=`<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
<div class="container">
  <a class="navbar-brand" href="index.html"> <img src="./imagen/ensigna1.png" height="100" alt="imagen"> </a>
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
              <a class="nav-link active" href="index1.html" aria-current="page">GESTIONES <span class="visually-hidden">(current)</span></a>
          </li>
          
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PRODUCTOS</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" href="tractores.html">TRACTORES</a>
                  <a class="dropdown-item" href="sembradoras.html">SEMBRADORAS</a>
                  <a class="dropdown-item" href="cosechadoras.html">COSECHADORAS</a>
                  
              </div>
          </li>

          <li class="nav-item">
              <a class="nav-link active" href="https://industriaensigna.netlify.app/index.html" aria-current="page">Cerrar Sesión <span class="visually-hidden">(current)</span></a>
          </li>
      </ul>
  </div>
</div>
</nav>`