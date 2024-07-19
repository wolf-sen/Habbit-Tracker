import { defineStore } from 'pinia'
import api from '@/composables/api.config'
import Cookies from 'js-cookie'

export const useRoutinesStore = defineStore('routines', {
  state: () => ({
    routines: [],
    connections: []
  }),
  actions: {
    async createRoutine(payload) {
      this.routines.push(payload)
      try {
        await api.post(`/routines/new`, payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
      catch (error) {
        console.error('Error saving new routine:', error)
      }
    },

    getRoutine(reqID) {
      return this.routines.find((routines) => routines.id === reqID)
    },

    getRoutineHabits(reqID) {
      return this.connections.find((connections) => connections.routineid === reqID)
    },

    async addRoutineHabit(habitID, routineID) {
      this.connections.push({habitid: habitID, routineid: routineID});
      try {
        await api.post(`/routines/connection`, {habitid: habitID, routineid: routineID}, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
      catch (error) {
        console.error('Error adding connection:', error)
      }
    },

    async deleteRoutineHabit(connectionID) {
      const index = this.connections.findIndex((connections) => connections.id === connectionID);
      this.connections.splice(index, 1);
      try {
        await api.delete(`/routines/connection?id=${connectionID}`);
      } catch (error) {
        console.error('Error Removing connection:', error)
      }
    },

    async fetchRoutineData() {
      try {
        const response = await api.get(`/routines?user=${Cookies.get('user')}`)
        this.routines = response.data
      } catch (error) {
        console.error('Error fetching routines:', error)
      }
    },
  }
});

