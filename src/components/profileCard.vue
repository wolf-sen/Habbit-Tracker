<script>
import { useUserStore } from '@/stores/user'

export default {
  name: 'ProfileCard',
  computed: {
    username() {
      const userStore = useUserStore()
      return userStore.name
    },
    userID() {
      const userStore = useUserStore()
      return userStore.id
    }
  }
}
</script>

<template>
  <div class="mt-4 w-full rounded-lg bg-green-500 p-4">
    <div class="mb-4 flex items-center">
      <div class="relative">
        <img src="@/assets/profilbild.jpg" alt="Profilbild" class="m-2 h-24 w-24 rounded-full" />
        <div class="pointer-events-none absolute inset-0 rounded-full border-4 border-black"></div>
      </div>
      <div class="ml-5">
        <h2 class="mb-1 text-4xl font-bold">{{ username }}</h2>
        <p class="mb-2 text-sm">ID: {{ userID }}</p>
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

<style scoped></style>
