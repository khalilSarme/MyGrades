import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import MyHeader from "./components/MyHeader.vue";
import MyContainer from "./components/MyContainer.vue";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('my-header', MyHeader);
app.component("my-container", MyContainer);

app.mount('#app')
