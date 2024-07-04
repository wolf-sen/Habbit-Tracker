<script>
import { useUserStore } from '../stores/user.js'

export default {
  computed: {
    username() {
      const userStore = useUserStore()
      return userStore.name
    }
  }
}
</script>

<template>
  <h1 class="content-center font-soft text-2xl font-medium">
    Hello, <span class="font-bold">{{ username }}</span
    >!
  </h1>
</template>

<style scoped></style>
