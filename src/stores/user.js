import { defineStore } from 'pinia'
import api from '@/composables/api.config'
import Cookies from 'js-cookie'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '',
    name: '',
    lastname: '',
    profilePicture: '',
    creationDate: '',
    mail: ''
  }),
  actions: {
    setUserData(userData) {
      this.id = userData.id
      this.name = userData.name
      this.lastname = userData.lastname
      this.profilePicture = userData.profilepicture
      this.creationDate = userData.creationdate
      this.mail = userData.email
    },
    clearUserData() {
      this.id = ''
      this.name = ''
      this.lastname = ''
      this.profilePicture = ''
      this.creationDate = ''
      this.mail = ''
    },
    async fetchUserData() {
      try {
        const response = await api.get(`/users?id=${Cookies.get('user')}`)
        const userData = response.data[0]
        this.setUserData(userData)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    },
  }
})
