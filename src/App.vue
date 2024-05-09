<script setup>
import Navbar from './components/Navbar.vue';
import Carousel from './components/carousel.vue';
import ProgressBar from './components/balken.vue';
</script>

<template>
  <Navbar />

  <div class="begrüßung">
    Hello, Group!
  </div>

  <div class="now">
    For Today
  </div>

  <Carousel />

  <div class="routines">
    Routines
  </div>

  <ProgressBar />

</template>

<style>

  .begrüßung {
    font-size: 40px;
    font-style: bold;
    margin-bottom: 30px;
    margin-left: 40px;
  }

  .now {
    font-size: 18px;
    color: grey;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .routines {
    font-size: 18px;
    color: grey;
    margin-top: 20px;
    margin-left: 40px;
  }
</style>