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
const inputMail = ref('')
const inputPassword = ref('')
const router = useRouter()

const login = async () => {
  try {
    // Check if the user exists
    const response = await api.get(`/users?mail=${inputMail.value}`)
    if (response.data && response.data.length > 0) {
      const user = response.data[0]
      // Compare the passwords
      if (user.password === inputPassword.value) {
        alert('Login successful!')
        Cookies.set('user', user.id, { expires: 7, sameSite: 'Strict' })
        userStore.setUserData(user)
        router.push({ name: 'home' })
      } else {
        alert('Incorrect password.')
      }
    } else {
      alert('User does not exist.')
    }
  } catch (error) {
    console.error('Error during login:', error)
    alert('An error occurred during login. Please try again later.')
  }
}
</script>

<template>
  <div class="mx-4 my-32 flex flex-col">
    <h1 class="mb-8 font-soft text-3xl font-bold">Login</h1>
    <InputText class="mb-6" id="mail" placeholder="Email" v-model="inputMail" />
    <Password
      toggleMask
      class="mb-6"
      id="password"
      placeholder="Password"
      :feedback="false"
      v-model="inputPassword"
    />

    <div class="flex flex-row justify-end gap-2">
      <RouterLink
        to="/register"
        class="flex w-24 justify-center gap-5 rounded-full bg-surface-300 px-3 py-1 hover:bg-surface-400 dark:bg-surface-700 dark:hover:bg-surface-600"
        >Register</RouterLink
      >
      <button
        class="flex w-32 justify-end gap-5 rounded-full bg-primary px-3 py-1 hover:bg-primary-hover"
        @click="login"
      >
        <span>Login</span>
        <ArrowRightIcon class="size-6" />
      </button>
    </div>
  </div>
</template>

<style></style>
