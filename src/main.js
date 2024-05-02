//CSS Stylesheet Import
import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"

//Vercel Traffic Analytics Initialisation
import { inject } from '@vercel/analytics';
inject();

//Vercel Speed and Quality monitoring Initialisation
import { injectSpeedInsights } from '@vercel/speed-insights';
injectSpeedInsights();

//Bootstrap Initialisation
import "bootstrap"

//Vue Initialisation
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')