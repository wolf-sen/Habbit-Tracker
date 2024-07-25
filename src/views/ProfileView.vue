<script setup>
import NavigationBar from '@/components/navigationBar.vue'
import { Cog6ToothIcon } from '@heroicons/vue/24/solid'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import { useUserStore } from '@/stores/user'
import ProfileCard from '@/components/profileCard.vue'
import StreakCard from '@/components/streakCard.vue'
import RewardCard from '@/components/rewardCard.vue'
import Slider from 'primevue/slider';
import { computed, ref } from 'vue';

const userStore = useUserStore();

const moodSlider = ref(0);

function confirmMood() {
  console.log(moodSlider.value);
  userStore.addMoodEntry(moodSlider.value);
}
</script>

<template>
  <div class="mx-4 mt-16 max-h-[calc(100vh-4rem)] overflow-y-auto">
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
    <section class="mt-4 w-full rounded-lg bg-rose-300 dark:bg-rose-500 p-4 text-black">
      <div class="flex justify-between">
        <h2 class="mb-3 text-lg font-soft font-bold">Moodtracker</h2>
        <p class="mb-3 font-soft">{{ moodSlider }} / 10</p>
      </div>
      <div class="flex gap-4 justify-center items-center">
        <img src="../assets/mood/SPFrown.svg" class="w-10 h-10" />
        <Slider v-model="moodSlider" :min="0" :max="10" class="w-14rem" />
        <img src="../assets/mood/SPHappy.svg" class="w-10 h-10" />
        <ArrowRightIcon @click="confirmMood" class="size-8 stroke-[3px] text-black hover:bg-rose-400 dark:hover:bg-rose-800 rounded-full" />
      </div>
    </section>
    <RewardCard />
  </div>
</template>

<style></style>
