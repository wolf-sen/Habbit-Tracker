import './assets/main.css'

//Vercel Traffic Analytics Initialisation
import { injectVercelAnalytics } from '@vercel/analytics';

//Vercel Speed and Quality monitoring Initialisation
import { injectSpeedInsights } from '@vercel/speed-insights';

//Bootstrap Initialisation
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

//Vue Initialisation
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
injectVercelAnalytics();
injectSpeedInsights();