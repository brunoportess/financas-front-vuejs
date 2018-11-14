<template>
  <div id="app">
    <nav class="navbar navbar-dark fixed-top bg-primary flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Finanças</a>
      <input class="form-control form-control-dark w-100 mr-1" type="text" placeholder="Pesquisar" aria-label="Search">
      
    </nav>
    <div class="container-fluid">
      <div class="row">
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <router-link to="/">
                  <font-awesome-icon icon="tachometer-alt" />
                  Dashboard <span class="sr-only">(current)</span>
                </router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="/finances">
                  <font-awesome-icon icon="hand-holding-usd" />
                  Lançamentos
                </router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="/categories">
                  <font-awesome-icon icon="list-alt" />
                  Categorias
                </router-link>
                
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="/periods">
                  <font-awesome-icon icon="calendar-alt" />
                  Períodos
                </router-link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <router-view></router-view>
      </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style>
  @import './_layout.css';
  @import './loaders.css';
</style>
