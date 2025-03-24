import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './style.css'
import App from './App.vue'

// Import Bootstrap e i suoi assets
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// Import bootstrap-vue-next
import { BootstrapVueNext } from 'bootstrap-vue-next'

// Creazione dell'app Vue
const app = createApp(App)

// Utilizzo di Pinia
const pinia = createPinia()
app.use(pinia)

// Configurazione di Axios
app.use(VueAxios, axios)

// Utilizzo di BootstrapVueNext
app.use(BootstrapVueNext)

// Montaggio dell'app
app.mount('#app')
