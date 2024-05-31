<script setup>
import { ref } from 'vue';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
//import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import { ArrowRightIcon } from '@heroicons/vue/24/solid';

const inputMail = ref('');
const inputPassword = ref('');
const router = useRouter();

const login = () => {
  if (inputMail.value === 'email.com' && inputPassword.value === '123') {
    Cookies.set('user', 'USER_UUID', { expires: 1, sameSite: 'Strict' });
    alert('Login successful!');
    router.push({ name: 'home' });
  } else {
    alert('Login failed. Please check your email and password.');
  }
};
</script>

<template>
  <div class="flex flex-col mx-4 my-32">
    <h1 class="font-bold font-soft text-3xl mb-8">Login</h1>
      <InputText class="mb-4" id="mail" placeholder="Email" v-model="inputMail"/>
      <InputText class="mb-4" id="password" placeholder="Password" v-model="inputPassword"/>

      <div class="flex flex-row  gap-2 justify-end">
        <RouterLink to="/register" class="w-24 flex justify-center gap-5 rounded-full bg-surface-300 px-3 py-1 hover:bg-surface-400 dark:bg-surface-700 dark:hover:bg-surface-600">Register</RouterLink>
        <button class="w-32 flex justify-end gap-5 rounded-full bg-primary px-3 py-1 hover:bg-primary-hover" @click="login">
          <span>Login</span>
          <ArrowRightIcon class="size-6" />
        </button>

      </div>
  </div>
</template>

<style>
</style>
