import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DocDemo from './components/Doc/DocDemo.vue'
import Intro from './views/Intro.vue'
import Install from './views/Install.vue'
import Start from './views/Start.vue'
import SwitchDemo from './components/Doc/SwitchDemo.vue'
import DialogDemo from './components/Doc/DialogDemo.vue'
import ButtonDemo from './components/Doc/ButtonDemo.vue'
import TabsDemo from './components/Doc/TabsDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
	history: history,
	routes: [
		{ path: '/', component: Home },
		{
			path: '/doc',
			component: Doc,
			children: [
				{ path: '', redirect: 'doc/intro' },
				{ path: 'intro', component: Intro },
				{ path: 'install', component: Install },
				{ path: 'start', component: Start },
				{ path: 'switch', component: SwitchDemo },
				{ path: 'dialog', component: DialogDemo },
				{ path: 'button', component: ButtonDemo },
				{ path: 'tabs', component: TabsDemo },
			],
		},
	],
})
router.afterEach(() => {})
