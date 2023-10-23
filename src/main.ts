import { createApp } from 'vue'
import router from './router'
import naive from './plugins/naive'

import './assets/styles/reset.css'
import App from './App.vue'

createApp(App).use(router).use(naive).mount('#app')
