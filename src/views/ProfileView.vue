<script>
import api from "../plugins/api.js";
import { ref } from 'vue';

export default {
  name: "ProfileView",

  setup(){
    const result = ref(null)
    
    api.get("/user")
      .then(response => result.value = response.data);
    
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
