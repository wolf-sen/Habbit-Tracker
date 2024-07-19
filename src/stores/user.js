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
    mail: '',
    theme: ''
  }),
  getters: {
  },
  actions: {
    setUserData(userData) {
      this.id = userData.id
      this.name = userData.name
      this.lastname = userData.lastname
      this.profilePicture = userData.profilepicture
      this.creationDate = userData.creationdate
      this.mail = userData.email
      this.theme = userData.theme
    },
    clearUserData() {
      this.id = ''
      this.name = ''
      this.lastname = ''
      this.profilePicture = ''
      this.creationDate = ''
      this.mail = ''
    },

    profilePicturePath() {
      console.log(this.profilePicture)
      switch (this.profilePicture) {
        case  1: return "@/assets/profiles/blue.png"
        case '2':
        case '3':
        
      }
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

    async toggleTheme() {
      try {
        // Toggle the theme
        this.theme = (this.theme === 'light') ? 'dark' : 'light';
    
        // Construct the payload
        const payload = {
          id: this.id,
          theme: this.theme
        };
    
        // Execute the PUT request
        await api.post(`/users/theme`, payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        console.log 
      } catch (error) {
        console.error('Error updating Theme:', error);
      }
    },
  }
})
