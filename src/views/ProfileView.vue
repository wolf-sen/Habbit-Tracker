<script>
import axios from "axios";
import { ref } from 'vue';

export default {
  name: "ProfileView",

  setup(){
    const result = ref(null)

    fetch('http://localhost:3000/user')
      .then(response => response.json())
      .then(data => result.value = data)
      
    
    return { result }
  }
}
</script>

<template>
  <div class="profile">
    <h1>This is an Profile page</h1>
    <p>{{ result }}</p>
  </div>
</template>

<style>
</style>
