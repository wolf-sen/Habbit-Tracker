<script setup>
import habitIcon from './habitIcon.vue';
import { useHabitsStore } from '@/stores/habits';
import { CheckIcon } from '@heroicons/vue/24/outline';
import { computed, defineProps } from 'vue';

const props = defineProps({
  habit: {
    type: Object,
    required: true,
  },
});

const habitsStore = useHabitsStore()

const completed = computed(() => {
  return habitsStore.checkCompletion(props.habit.id)
})

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

const habitCompletion = () => {
  if (completed.value === false) {
    console.log('Habit completed');
    habitsStore.updateCompletion("create", props.habit.id);
  }

  if (completed.value === true) {
    console.log('Habit Completion Reset');
    habitsStore.updateCompletion("delete", props.habit.id);
  }
}
</script>

<template>
  <section 
    :class="cardState"
    class="flex flex-col w-32 gap-2 rounded-card p-card items-center"
    @click="handleClick">
    <habitIcon :variant="props.habit.icon" :size="'lg'"/>
    <div class="flex flex-col w-full items-start">
      <p :class="titleState" class="text-lg font-bold font-soft">{{ props.habit.name }}</p>
      <p class="bg-surface-700 dark:bg-green-400 px-3 text-white dark:text-black rounded-full">{{ props.habit.tag }}</p>
    </div>
    <button 
      :class="buttonState" 
      class="mt-2 flex justify-center items-center w-full py-1 text-white dark:text-black rounded-full outline outline-0 transition-all duration-75 hover:outline-[3px] hover:outline-offset-4"
      @click="habitCompletion">
      <CheckIcon class="size-6 stroke-[3px]" />
    </button>
  </section>
</template>

<style scoped></style>
