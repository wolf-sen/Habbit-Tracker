<script setup>
import NavigationBar from '@/components/navigationBar.vue'
import { Cog6ToothIcon } from '@heroicons/vue/24/solid'
import ProfileCard from '@/components/profileCard.vue'
import StreakCard from '@/components/streakCard.vue'
import RewardCard from '@/components/rewardCard.vue'
</script>

<template>
  <div class="mx-4 mt-16 overflow-y-auto max-h-[calc(100vh-4rem)]">
    <NavigationBar />
    <div class="flex flex-row justify-between">
      <h1 class="content-center font-soft text-2xl font-medium">Profile</h1>
      <RouterLink
        to="/settings"
        class="rounded-full bg-surface p-2 hover:bg-surface-300 dark:bg-surface dark:hover:bg-surface-600"
      >
        <Cog6ToothIcon class="size-6 stroke-[3px] text-surface-contrast" />
      </RouterLink>
    </div>
    <ProfileCard />
    <StreakCard />
    <RewardCard />
  </div>
</template>

<style>
</style>
