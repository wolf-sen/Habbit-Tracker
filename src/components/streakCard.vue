<script setup>
  import { useUserStore } from '@/stores/user';
  const userStore = useUserStore()
</script>

<template>
  <div class="mt-4 flex w-full items-center justify-between rounded-lg bg-orange-500 p-4">
    <div class="text-black">Streak Record</div>
    <div class="text-2xl font-bold text-black">{{ userStore.streak }}</div>
  </div>
</template>

<style scoped></style>
