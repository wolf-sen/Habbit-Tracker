import { defineStore } from 'pinia'
import api from '@/composables/api.config'
import Cookies from 'js-cookie'

export const useRoutinesStore = defineStore('routines', {
  state: () => ({
    routines: [],
    connections: []
  }),
  actions: {
    async createRoutine(payload, habits) {
      let response;
      try {
        response = await api.post(`/routines/new`, payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(response.data[0])
        this.routines.push(response.data[0])
      }
      catch (error) {
        console.error('Error saving new routine:', error)
      }
      for (let i = 0; i < habits.length; i++) {
        console.log(habits[i].id, response.data[0].id)
        this.addRoutineConection(habits[i].id, response.data[0].id)
      }
    },

    async addRoutineConection(habitID, routineID) {
      try {
        const response = await api.post(`/routines/connection`, {habitid: habitID, routineid: routineID}, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        this.connections.push(response.data[0])
      }
      catch (error) {
        console.error('Error adding connection:', error)
      }
    },

    getRoutine(reqID) {
      return this.routines.find((routines) => routines.id === reqID)
    },

    getRoutineHabits(reqID) {
      return this.connections.filter((connections) => connections.routineid === reqID)
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
      try {
        for (let i = 0; i < this.routines.length; i++) {
          const response = await api.get(`/routines/connection?routine=${this.routines[i].id}`)
          if (Array.isArray(response.data)){
          this.connections.push(...response.data)
          }
        }
      } catch (error) {
        console.error('Error fetching routines:', error)
      }
    },
  }
});

