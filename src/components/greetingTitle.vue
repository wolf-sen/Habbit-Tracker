<script>
  import { defaultUserID } from '@/configs/defaults.config';
  import { ref } from 'vue';
  import useAPI from '@/composables/useAPI';

  export default {
    setup() {
      let userName = ref("Human")

      useAPI.get(`/user?id=${defaultUserID}`)
        .then(response => userName.value = (response.data[0].name));

      return { userName }
    }
  };
</script>

<template>
    <div class="content-center">
      <h1 class="font-medium text-2xl">Hello, <span class="font-bold">{{ userName }}</span>!</h1>
    </div>
</template>

<style scoped>
</style>
