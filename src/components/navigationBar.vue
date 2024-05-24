<template>
    <nav class="fixed bottom-4 left-10 right-10 bg-neutral-900 flex justify-between items-center p-2 shadow-lg rounded-full">
      <router-link to="/" class="flex flex-col items-center text-white">
        <HomeIcon class="h-8 w-8" />
      </router-link>
      <router-link to="/stats" class="flex flex-col items-center text-white">
        <ChartBarIcon class="h-8 w-8" />
      </router-link>
      <router-link to="/calendar" class="flex flex-col items-center text-white">
        <CalendarIcon class="h-8 w-8" />
      </router-link>
      <router-link to="/profile" class="flex flex-col items-center text-white">
        <UserIcon class="h-8 w-8" />
      </router-link>
    </nav>
  </template>
  
  <script>
  import { HomeIcon, ChartBarIcon, CalendarIcon, UserIcon } from '@heroicons/vue/24/solid';
  
  export default {
    name: 'navigationBar',
    components: {
      HomeIcon,
      ChartBarIcon,
      CalendarIcon,
      UserIcon
    }
  };
  </script>
  
  <style scoped>
  </style>
  