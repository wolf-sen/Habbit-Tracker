<script>
import progressCard from '../components/progressCard.vue';
import greetingTitle from '@/components/greetingTitle.vue';
import { PlusIcon } from '@heroicons/vue/24/outline'
import { ArrowPathIcon } from '@heroicons/vue/24/solid'
import { UserIcon } from '@heroicons/vue/24/solid'

export default {
  name: 'HomeView',
  components: {
    progressCard,
    greetingTitle,
    PlusIcon,
    ArrowPathIcon,
    UserIcon,
  },
  data() {
    return {
      progress: 0,
      userID: 1,
    };
  },
  methods: {
    increaseProgress() {
      if (this.progress < 100) {
        this.progress += 10;
      }
    },
    resetProgress() {
      this.progress = 0;
    },
    nextUser() {
      if(this.userID < 5) {
        this.userID += 1;
      }
      else { 
        this.userID = 1;
      }
    },
  }
};
</script>

<template>
      <main class="flex flex-col gap-2 mx-4 mt-10">
        <div class="flex flex-row gap-2 justify-between">
          <greetingTitle :userID="userID" />
          <div class="flex gap-1">
            <button class="bg-indigo-900 rounded-button p-2 text-indigo-200" @click="increaseProgress"><PlusIcon class="size-6 text-neutral-50 [&>path]:stroke-[3]" /></button>
            <button class="bg-indigo-900 rounded-button p-2 text-indigo-200" @click="resetProgress"><ArrowPathIcon class="size-6 text-neutral-50" /></button>
            <button class="bg-indigo-900 rounded-button p-2 text-indigo-200" @click="nextUser"><UserIcon class="size-6 text-neutral-50" /></button>
          </div>
        </div>
        <progressCard :progress="progress" />
      </main>
</template>
