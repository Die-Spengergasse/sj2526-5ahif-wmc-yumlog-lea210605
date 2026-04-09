import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useAuthStore } from "./stores/auth";

// Load Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Load Bootstrap JS (dynamically to reduce initial bundle size)
import("bootstrap").catch(err => console.error('Bootstrap JS load failed:', err));
// Load Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.min.css";

// DEMO MODE - No Firebase needed!

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

// Initialize demo/fake auth state from localStorage
const authStore = useAuthStore();
authStore.initializeAuth();

app.mount("#app");
