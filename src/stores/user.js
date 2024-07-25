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
    theme: '',
    mood: ''
  }),
  getters: {
    streak() {
      return 10;
    }
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

    async setProfilePicture(selectedPicture) {
      try {
        this.profilePicture = selectedPicture;

        const payload = {
          id: this.id,
          profilePicture: this.profilePicture
        };
    
        await api.post(`/users/picture`, payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } catch (error) {
        console.error('Error updating profile picture:', error);
      }
    },

    async addMoodEntry(mood) {
      try {
        const payload = {
          userid: this.id,
          mood: mood
        };
        const response = await api.post(`/users/mood`, payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        this.mood.push(response.data[0]);
      } catch (error) {
        console.error('Error adding mood entry:', error);
      }
    },

    async fetchUserMood () {
      try {
        const response = await api.get(`/users/mood?user=${Cookies.get('user')}`)
        this.mood = response.data
      } catch (error) {
        console.error('Error fetching user mood:', error)
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
        this.theme = (this.theme === 'light') ? 'dark' : 'light';
    
        const payload = {
          id: this.id,
          theme: this.theme
        };
    
        await api.post(`/users/theme`, payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

      } catch (error) {
        console.error('Error updating Theme:', error);
      }
    },
  }
})
