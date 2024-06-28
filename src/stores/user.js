import { defineStore } from 'pinia';

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
      this.id = userData.id;
      this.name = userData.name;
      this.lastname = userData.lastname;
      this.profilePicture = userData.profilePicture;
      this.creationDate = userData.creationDate;
      this.mail = userData.mail;
    },
    clearUserData() {
      this.id = '';
      this.name = '';
      this.lastname = '';
      this.profilePicture = '';
      this.creationDate = '';
      this.mail = '';
    }
  }
});
