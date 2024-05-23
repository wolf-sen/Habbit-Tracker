<script>
import greetingTitle from '/src/components/greetingTitle.vue'
import api from "../composables/useAPI.js";
import { ref } from 'vue';
import GreetingTitle from '@/components/greetingTitle.vue';

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
    <greetingTitle />
  </div>
</template>

<style>
</style>
