<template>
  <nav
    class="fixed bottom-4 left-10 right-10 flex items-center justify-between rounded-full bg-neutral-900 p-2 shadow-lg"
  >
    <RouterLink to="/" class="flex flex-col items-center text-white">
      <HomeIcon class="h-8 w-8" />
    </RouterLink>
    <RouterLink to="/test" class="flex flex-col items-center text-white">
      <WrenchIcon class="h-8 w-8" />
    </RouterLink>
    <RouterLink to="/login" class="flex flex-col items-center text-white">
      <UserIcon class="h-8 w-8" />
    </RouterLink>
  </nav>
</template>

<script>
import { HomeIcon, UserIcon, WrenchIcon } from '@heroicons/vue/24/solid'
import { RouterLink } from 'vue-router'

export default {
  name: 'navigationBar',
  components: {
    HomeIcon,
    WrenchIcon,
    UserIcon,
    RouterLink
  }
}
</script>

<style scoped></style>
