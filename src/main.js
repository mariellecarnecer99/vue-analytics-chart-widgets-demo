import { createApp } from "vue";
import App from "./App.vue";

import { registerPlugins } from "vue-analytics-chart-widgets"
import "vue-analytics-chart-widgets/style.css";

const app = createApp(App);

app.use(registerPlugins, {
  apiUrl: import.meta.env.VITE_API_BASE_URL,
  authorizationType: 'Bearer',
  accessToken: localStorage.getItem('authToken') || import.meta.env.VITE_API_TOKEN,
});

app.mount("#app");
