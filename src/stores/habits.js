import { defineStore } from 'pinia'
import api from '@/composables/api.config'
import Cookies from 'js-cookie'

function isFrequencyBelowOrEqual(freq1, freq2) {
  if (!freq1 || !freq2) {
    return false;
  }

  const freq1Parts = freq1.split('-').map(Number);
  const freq2Parts = freq2.split('-').map(Number);

  for (let i = 0; i < 3; i++) {
      if (freq1Parts[i] < freq2Parts[i]) {
          return true;
      } else if (freq1Parts[i] > freq2Parts[i]) {
          return false;
      }
  }

  return true;
}

export const useHabitsStore = defineStore('habits', {
  state: () => ({
    habits: [],
    completions: []
  }),
  getters: {
    daily(state) {
      return state.habits.filter((habit) => isFrequencyBelowOrEqual(habit.frequency, '00-01-00'));
    },

    notDaily(state) {
      return state.habits.filter((habit) => !isFrequencyBelowOrEqual(habit.frequency, '00-01-00'));
    }
  },
  actions: {
    async createHabit(payload) {
      try {
        await api.post(`/habits/new`, payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        this.fetchUserHabits();
      }
      catch (error) {
        console.error('Error saving habit:', error);
      }
    },

    getHabit(reqID) {
      return this.habits.find((habits) => habits.id === reqID)
    },

    clearHabitData() {
      this.habit = []
    },

    checkCompletion(reqID) {
      const request = this.completions.find((completions) => completions.habitid === reqID);
      if (request) {
        return true
      } else {
        return false
      }
    },

    habitProgress() {
      const uniqueHabitIDs = this.habits.map(habit => habit.id)
      const completedHabitIDs = this.completions.map(completion => completion.habitid)
      
      const completedUniqueHabits = uniqueHabitIDs.filter(id => completedHabitIDs.includes(id))
      const progressPercentage = (completedUniqueHabits.length / uniqueHabitIDs.length) * 100
      
      return Math.floor(progressPercentage)
    },

    async updateCompletion(type, reqID) {
      try {
        if (type === "create") {
          const response = await api.post(`/habits/complete?habit=${reqID}`)
          this.completions.push(response.data);
        }
        else if (type === "delete") {
          await api.delete(`/habits/complete?habit=${reqID}`)
          this.completions = this.completions.filter((completions) => completions.habitid !== reqID)
        }
      } catch (error) {
        console.error('Error fetching habits:', error)
      }
    },

    async fetchUserHabits() {
      try {
        const response = await api.get(`/habits?user=${Cookies.get('user')}`)
        this.habits = response.data
      } catch (error) {
        console.error('Error fetching habits:', error)
      }
    },

    async fetchUserCompletions() {
      try {
        const response = await api.get(`/habits/complete?user=${Cookies.get('user')}`)
        this.completions = response.data
      } catch (error) {
        console.error('Error fetching habits:', error)
      }
    },
  }
});

