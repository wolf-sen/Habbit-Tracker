//Import all CSS Features
import "./index.css";

//Initialize connection to the myHabit PostgreDB

//Initialize Vue & VueRouter
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
