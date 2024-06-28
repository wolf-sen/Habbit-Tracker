<script>
import { useUserStore } from '@/stores/user';

export default {
  name: 'ProfileCard',
  computed: {
    username() {
      const userStore = useUserStore();
      return userStore.name;
    },
    userID() {
      const userStore = useUserStore();
      return userStore.id;
    }
  }
}
</script>

<template>
  <div class="bg-green-500 rounded-lg p-4 w-full mt-4">
    <div class="flex items-center mb-4">
      <div class="relative">
        <img src="@/assets/profilbild.jpg" alt="Profilbild" class="w-24 h-24 rounded-full m-2">
        <div class="absolute inset-0 border-4 border-black rounded-full pointer-events-none"></div>
      </div>
      <div class="ml-5">
        <h2 class="text-4xl font-bold mb-1">{{ username }}</h2>
        <p class="text-sm mb-2">ID: {{ userID }}</p>
      </div>
    </div>

    <div class="flex justify-between">
      <div class="text-center">
        <h3 class="text-2xl font-bold">25</h3>
        <p class="text-sm">Current streak</p>
      </div>
      <div class="text-center">
        <h3 class="text-2xl font-bold">18</h3>
        <p class="text-sm">Habits</p>
      </div>
      <div class="text-center">
        <h3 class="text-2xl font-bold">3</h3>
        <p class="text-sm">Routines</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
  