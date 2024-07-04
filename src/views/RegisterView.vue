<script setup>
import api from '../composables/api.config'
import { ref } from 'vue'
import Cookies from 'js-cookie'
import { useRouter } from 'vue-router'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import { ArrowRightIcon } from '@heroicons/vue/24/solid'
import { useUserStore } from '../stores/user.js'

const userStore = useUserStore()
const inputName = ref('')
const inputLastName = ref('')
const inputMail = ref('')
const inputPassword = ref('')
const router = useRouter()

const register = async () => {
  try {
    const userData = {
      name: inputName.value,
      lastname: inputLastName.value,
      email: inputMail.value,
      profilePicture: 'usericon_1', // Default profile picture
      password: inputPassword.value
    }

    const response = await api.post('/users/new', userData)

    if (response.status === 201) {
      alert('Registration successful!')
      Cookies.set('user', response.data.id, { expires: 1, sameSite: 'Strict' })
      userStore.setUserData(userData)
      router.push({ name: 'home' })
    } else {
      alert('Registration failed. Please try again.')
    }
  } catch (error) {
    console.error('Error during registration:', error)
    alert('An error occurred during registration. Please try again later.')
  }
}
</script>

<template>
  <div class="mx-4 my-32 flex flex-col">
    <h1 class="mb-8 font-soft text-3xl font-bold">Register</h1>
    <div class="flex flex-row gap-2">
      <InputText class="mb-4 w-full" id="mail" placeholder="Name" v-model="inputName" />
      <InputText class="mb-4 w-full" id="mail" placeholder="LastName" v-model="inputLastName" />
    </div>
    <InputText class="mb-4" id="mail" placeholder="Email" v-model="inputMail" />
    <Password
      toggleMask
      class="mb-6"
      id="password"
      placeholder="Password"
      v-model="inputPassword"
    />

    <div class="flex flex-row justify-end gap-2">
      <RouterLink
        to="/login"
        class="flex w-24 justify-center gap-5 rounded-full bg-surface-300 px-3 py-1 hover:bg-surface-400 dark:bg-surface-700 dark:hover:bg-surface-600"
        >Login</RouterLink
      >
      <button
        class="flex w-48 justify-end gap-5 rounded-full bg-primary px-3 py-1 hover:bg-primary-hover"
        @click="register"
      >
        <span>Create Account</span>
        <ArrowRightIcon class="size-6" />
      </button>
    </div>
  </div>
</template>

<style></style>
