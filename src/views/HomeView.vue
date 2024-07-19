<script setup>
import { computed } from 'vue'
import { useHabitsStore } from '@/stores/habits'
import navigationBar from '@/components/navigationBar.vue'
import greetingTitle from '@/components/greetingTitle.vue'
import progressCard from '@/components/progressCard.vue'
import habitItem from '@/components/habitItem.vue'
import dailyItem from '@/components/dailyItem.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'


const habitsStore = useHabitsStore()
const progress = computed(() => habitsStore.habitProgress())
const habits = computed(() => habitsStore.notDaily)
const dailys = computed(() => habitsStore.daily)

</script>

<template>
  <div class="mx-4 mt-16 overflow-visible">
    <navigationBar />
    <section class="flex flex-col gap-4 overflow-visible">
      <div class="flex flex-row justify-between">
        <greetingTitle />
        <RouterLink to="/create" class="rounded-full bg-primary p-2 hover:bg-primary-hover">
          <PlusIcon class="size-6 stroke-[3px] text-surface" />
        </RouterLink>
      </div>
      <progressCard progress="{{ progress }}" />


      <div v-if="!habits.length && !dailys.length"
        class="flex flex-col font-soft font-bold text-lg gap-4 items-center">
        <p class="mb-[-0.6rem] mt-32 font-bold text-center text-surface-600 dark:text-surface-400">
          This Seems Quite Empty :( <br> Try creating a Habit!
        </p>
        <RouterLink
          to="/create/habit"
          class="w-32 rounded-full bg-primary px-3 py-1 hover:bg-primary-hover"
        >
          <span class="font-bold font-soft text-lg text-surface">Create Habit</span>
        </RouterLink>
      </div>


      <p v-if="dailys.length" class="mb-[-0.6rem] mt-4 font-bold text-surface-600 dark:text-surface-400">Daily Habits</p>
      <div class="carousel snap-mandatory gap-4 pr-0 overflow-visible">
        <dailyItem v-for="(habit, index) in dailys" :key="habit.id" :habit="habit" />
      </div>

      
      <p v-if="habits.length" class="mb-[-0.6rem] mt-4 font-bold text-surface-600 dark:text-surface-400">
        Todays Habits
      </p>
      <div class="flex flex-col gap-4">
        <habitItem v-for="(habit, index) in habits" :key="habit.id" :habit="habit"/>
      </div>
      <div class="h-48 w-full"></div>
    </section>
  </div>
</template>

<style>
.carousel {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.carousel::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.carousel-item {
  scroll-snap-align: start;
  flex: 0 0 auto;
}
</style>
