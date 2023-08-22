import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/main.css'
import 'v-calendar/style.css';
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(setupCalendar, {})
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)

app.mount('#app')
