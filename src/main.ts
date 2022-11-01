import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import New from './components/New.vue'
import New2 from './components/New2.vue'

const history = createWebHashHistory()
const router = createRouter({
	history: history,
	routes: [
		{ path: '/', component: New },
		{ path: '/xxx', component: New2 },
	],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
