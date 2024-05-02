<script>
  export default {
    name: "Navbar"
  };
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand ms-4" href="#">myHabitApp</a>
  <button class="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse ms-4 me-4" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Related Links
        </a>
        <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
          <a class="dropdown-item text-light" href="https://github.com/wolf-sen/myHabitApp">GitHub Repository</a>
          <a class="dropdown-item text-light" href="https://vercel.com/">Vercel Hosting</a>
          <a class="dropdown-item text-light" href="https://getbootstrap.com/docs/4.0/getting-started/introduction/">Bootstrap Documentation</a>
          <a class="dropdown-item text-light" href="https://vuejs.org/guide/introduction.html">vue.js Documentation</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>

<style scoped>
</style>
