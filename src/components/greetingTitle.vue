<script>
  import { ref } from 'vue';

  export default {
    setup() {
      let name = ref("Luna")

      //nameChanger
      const increment = () => {
        if(name.value = "Luna"){
          name.value = "Max"
        }
        else{
          name.value = "Luna"
        }
      }

      return { name, increment }
    }
  };
</script>

<template>
  <div class="grid grid-cols-2 mt-10 mx-6">
    <div class="content-center">
      <h1 class="font-medium text-2xl">Hello, <span class="font-bold">{{ name }}</span>!</h1>
    </div>
    <button type="button" class="bg-gray-800 p-4 rounded-full place-self-end" @click="increment">
      <div class="w-3 h-3 bg-gray-100"></div>
    </button>
  </div>
</template>

<style scoped>
</style>
