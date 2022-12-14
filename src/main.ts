import { createApp } from 'vue'
import './lib/v3.scss'
import './index.scss'
import App from './App.vue'
import 'github-markdown-css'

import { router } from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
