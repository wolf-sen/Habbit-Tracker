import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Router from './router'

import PrimeVue from 'primevue/config'
import Lara from '@/presets/lara'

const app = createApp(App)

app.use(createPinia())
app.use(Router)
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara
})

app.mount('#app')
