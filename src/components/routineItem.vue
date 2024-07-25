<script setup>
import habitIcon from './habitIcon.vue';
import { useHabitsStore } from '@/stores/habits';
import { useRoutinesStore } from '@/stores/routines';
import { ChevronRightIcon } from '@heroicons/vue/24/outline';
import { ref, computed, defineProps } from 'vue';
import Dialog from 'primevue/dialog';
import habitItem from './habitItem.vue';

const props = defineProps({
  routine: {
    type: Object,
    required: true,
  },
});
const completed = false
const dialogVisible = ref(false);

const habitStore = useHabitsStore()
const routineStore = useRoutinesStore()


const connections = routineStore.getRoutineHabits(props.routine.id);
const habitIDs = connections.map(connection => connection.habitid);
const habits = habitIDs.map(habitID => habitStore.getHabit(habitID));


const buttonState = computed(() => {
  if (completed.value === true) {
    return 'bg-green-500 dark:bg-green-400 outline-green-600 dark:outline-green-500 hover:bg-green-600 dark:hover:bg-green-500'}
  else {
    return 'bg-surface-600 dark:bg-surface-400 outline-surface-800 dark:outline-surface-300 hover:bg-surface-contrast dark:hover:bg-surface-contrast'
  }
})

const titleState = computed(() => {
  if (completed.value === true) {
    return 'text-green-900 dark:text-green-400'}
  else {
    return ''
  }
})

const cardState = computed(() => {
  if (completed.value === true) {
    return 'bg-green-300 dark:bg-green-900'}
  else {
    return 'bg-surface-300 dark:bg-surface-700'
  }
})

function showRoutine() {
  dialogVisible.value = true
}

</script>

<template>
  <section 
    :class="cardState"
    class="flex w-full gap-2 rounded-card p-card items-center"
    @click="handleClick">
    <div class="flex flex-col items-start">
      <p :class="titleState" class="text-lg font-bold font-soft">{{ props.routine.name }}</p>
      <p class="bg-surface-700 dark:bg-green-400 px-3 text-white dark:text-black rounded-full">{{ props.routine.tag }}</p>
    </div>
    <button 
      :class="buttonState" 
      class="ml-auto flex justify-center items-center size-10 text-white dark:text-black rounded-full outline outline-0 transition-all duration-75 hover:outline-[3px] hover:outline-offset-4"
      @click="showRoutine">
      <ChevronRightIcon class="size-6 stroke-[3px]" />
    </button>
  </section>
  <Dialog v-model:visible="dialogVisible" modal header="Routine Overview" :style="{ width: '95%', maxWidth: '35rem' }">
    <div class="flex flex-col gap-2">
      <habitItem v-for="habit in habits" :key="habit.id" :habit="habit"/>
    </div>
  </Dialog>
</template>

<style scoped></style>
