import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Moment from "moment";

const app = createApp(App)

app.use(router)

app.config.globalProperties.$filters = {
    formatDate(value) {
        return Moment(value).format("L")
    }
}

app.mount('#app')
