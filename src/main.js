import {createApp} from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from "@/route";
import {createPinia} from "pinia";
import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const pinia = createPinia();
const app = createApp(App)
app.use(ToastPlugin);
app.use(pinia)
app.use(router)
app.mount('#app')
