<script setup>
import { computed } from 'vue'
import NavigationBar from '@/components/navigationBar.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { useRoutinesStore } from '@/stores/routines';
import routineItem from '@/components/routineItem.vue'

const routinesStore = useRoutinesStore()
const routines = computed(() => routinesStore.routines)

</script>

<template>
  <div class="mx-4 mt-16">
    <NavigationBar />
    <div class="flex flex-row justify-between">
      <h1 class="content-center font-soft text-2xl font-medium">Routines</h1>
      <RouterLink to="/create/routine" class="rounded-full bg-primary p-2 hover:bg-primary-hover">
        <PlusIcon class="size-6 stroke-[3px] text-surface" />
      </RouterLink>
    </div>
    <div v-if="!routines.length"
        class="flex flex-col font-soft font-bold text-lg gap-4 items-center">
        <p class="mb-[-0.6rem] mt-32 font-bold text-center text-surface-600 dark:text-surface-400">
          This Seems Quite Empty :( <br> Try creating your first Routine!
        </p>
        <RouterLink
          to="/create/routine"
          class="w-38 rounded-full bg-primary px-3 py-1 hover:bg-primary-hover"
        >
          <span class="font-bold font-soft text-lg text-surface">Create Routine</span>
        </RouterLink>
      </div>
    <div class="mt-10 flex flex-col gap-4">
        <routineItem v-for="(routine, index) in routines" :key="routine.id" :routine="routine"/>
    </div>
  </div>
</template>

<style></style>
