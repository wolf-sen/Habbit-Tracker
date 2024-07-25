<script setup>
import pictureSelector from '@/components/pictureSelector.vue'
import { useUserStore } from '@/stores/user';
import { ChevronRightIcon, ChevronLeftIcon, PlusIcon } from '@heroicons/vue/24/outline';
import { ref, computed } from 'vue';
import Dialog from 'primevue/dialog';
import { HomeIcon, MoonIcon, SunIcon } from '@heroicons/vue/24/solid';

const userStore = useUserStore();
const selectedPicture = computed(() => userStore.profilePicture);
const stepper = ref(1);

const dialogVisible = ref(false);
function changePicture(selected) {
  userStore.setProfilePicture(selected);
  dialogVisible.value = false;
}

function setTheme(selected) {
  if(userStore.theme != selected) {
    userStore.toggleTheme();
  }
}

function stepperNext() {
  stepper.value ++;
}

function stepperPrev() {
  stepper.value --;
}
</script>

<template>
  <div class="mx-4 mt-16">
    <div class="flex flex-col justify-between">
      <h1 class="content-center font-soft text-3xl font-bold text-primary-active-color">Welcome!</h1>
      <p>We're excited to help you build and maintain positive habits with personalized tracking.</p>
    </div>


    <div v-if="stepper === 1" class="mt-40 flex flex-col gap-4">
      <h2 class="font-bold text-surface-contrast dark:text-surface-400">Lets Begin by Choosing a Profile Picture.</h2>
      <pictureSelector :variant="selectedPicture" :size="'lg'" @click="dialogVisible = true" class="mx-auto"/>
      <Dialog v-model:visible="dialogVisible" modal header="Select Profile Picture" :style="{ width: '90%', maxWidth: '35rem' }">
          <div class="flex gap-4 flex-wrap justify-center pt-2">
            <pictureSelector v-for="i in 5" :key="i" :variant="i" @click="changePicture(i)" />
          </div>
      </Dialog>
      <div class="flex justify-end">
      <button
          class="flex items-center mt-32 rounded-full bg-primary px-3 py-1 hover:bg-primary-hover"
          @click="stepperNext"
        >
          <span class="font-bold font-soft text-lg">Continue</span>
          <ChevronRightIcon class="size-6 stroke-[3px]" />
      </button>
      </div>
    </div>


    <div v-if="stepper === 2" class="mt-40 flex flex-col gap-4">
      <h2 class="font-bold text-surface-contrast dark:text-surface-400">What color theme do You prefer?</h2>
      <div class="flex gap-10 justify-center">
        <div class="flex justify-center items-center size-14 bg-surface-400 dark:bg-surface-300 rounded-full transition-all outline outline-3 outline-surface-hover outline-offset-4" @click="setTheme('light')">
          <SunIcon class="size-10 text-surface-800" />
        </div>
        <div class="flex justify-center items-center size-14 bg-surface-800 dark:bg-surface-900 rounded-full transition-all outline outline-3 outline-surface-hover outline-offset-4" @click="setTheme('dark')">
          <MoonIcon class="size-10 text-surface-100" />
        </div>
      </div>

      <div class="flex justify-between">
        <button
        class="flex items-center mt-32 rounded-full bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600 px-3 py-1 hover:bg-surface-400"
        @click="stepperPrev"
        >
          <ChevronLeftIcon class="size-6 stroke-[3px]" />
          <span class="font-bold font-soft text-lg">Back</span>
        </button>
        <button
          class="flex items-center mt-32 rounded-full bg-primary px-3 py-1 hover:bg-primary-hover"
          @click="stepperNext"
        >
          <span class="font-bold font-soft text-lg">Continue</span>
          <ChevronRightIcon class="size-6 stroke-[3px]" />
        </button>
      </div>
    </div>


    <div v-if="stepper === 3" class="mt-40 flex flex-col gap-4">
      <RouterLink
        to="/create/habit"
        class="flex items-center gap-4 h-16 w-full content-center rounded-card bg-surface-300 pl-4 font-bold hover:bg-surface-400 dark:bg-surface-700 dark:hover:bg-surface-600"
        >
        <PlusIcon class="size-8 stroke-[3px]" />
        Create your first Habit
      </RouterLink>
      <RouterLink
        to="/"
        class="flex items-center gap-4 h-16 w-full content-center rounded-card bg-surface-300 pl-4 font-bold hover:bg-surface-400 dark:bg-surface-700 dark:hover:bg-surface-600"
        >
        <HomeIcon class="size-8" />
        Go to Homepage
      </RouterLink>

      <div class="flex justify-between">
        <button
        class="flex items-center mt-32 rounded-full bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600 px-3 py-1 hover:bg-surface-400"
        @click="stepperPrev"
        >
          <ChevronLeftIcon class="size-6 stroke-[3px]" />
          <span class="font-bold font-soft text-lg">Back</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
