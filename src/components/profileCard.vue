<script>
import { useUserStore } from '@/stores/user'
import { useHabitsStore } from '@/stores/habits'

export default {
  name: 'ProfileCard',
  computed: {
    username() {
      const userStore = useUserStore()
      return userStore.name + ' ' + userStore.lastname
    },
    memberSince() {
      const userStore = useUserStore()
      const creationDate = new Date(userStore.creationDate)
      const options = { year: '2-digit', month: 'long' }
      return `member since ${creationDate.toLocaleDateString('en-US', options)}`
    },
    habitCount() {
      const habitsStore = useHabitsStore()
      return habitsStore.habits ? habitsStore.habits.length : 0
    },
    profilePicture () {
      const userStore = useUserStore()
      return userStore.profilePicturePath();
    }
  }
}
</script>

<template>
  <div class="mt-4 w-full rounded-lg bg-green-500 p-4">
    <div class="mb-4 flex items-center">
      <img class="size-20 rounded-full outline outline-surface outline-4 outline-offset-4" :src="profilePicture" alt="profilePicture" />
      <div class="ml-5">
        <h2 class="mb-1 text-4xl font-bold">{{ username }}</h2>
        <p class="mb-2 text-sm">{{ memberSince }}</p>
      </div>
    </div>

    <div class="flex justify-between">
      <div class="text-center">
        <h3 class="text-2xl font-bold">25</h3>
        <p class="text-sm">Current streak</p>
      </div>
      <div class="text-center">
        <h3 class="text-2xl font-bold">{{ habitCount}}</h3>
        <p class="text-sm">Habits</p>
      </div>
      <div class="text-center">
        <h3 class="text-2xl font-bold">3</h3>
        <p class="text-sm">Routines</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
