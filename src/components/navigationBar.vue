<template>
  <nav
    class="fixed bottom-4 left-10 right-10 flex items-center justify-between rounded-full bg-neutral-900 p-2 shadow-lg"
  >
    <RouterLink to="/" class="flex flex-col items-center text-white">
      <HomeIcon class="size-8" />
    </RouterLink>
    <RouterLink to="/statistics" class="flex flex-col items-center text-white">
      <ChartBarIcon class="size-8" />
    </RouterLink>
    <RouterLink to="/routines" class="flex flex-col items-center text-white">
      <PlayIcon class="size-8" />
    </RouterLink>
    <RouterLink to="/profile" class="flex flex-col items-center text-white">
      <UserIcon class="size-8" />
    </RouterLink>
  </nav>
</template>

<script>
import { ChartBarIcon, HomeIcon, PlayIcon, UserIcon } from '@heroicons/vue/24/solid'

export default {
  name: 'navigationBar',
  components: {
    HomeIcon,
    ChartBarIcon,
    UserIcon,
    PlayIcon
  }
}
</script>

<style scoped></style>
