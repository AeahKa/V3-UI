import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DocDemo from './components/Doc/DocDemo.vue'
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
				{ path: '', component: DocDemo },
				{ path: 'switch', component: SwitchDemo },
				{ path: 'dialog', component: DialogDemo },
				{ path: 'button', component: ButtonDemo },
				{ path: 'tabs', component: TabsDemo },
			],
		},
	],
})
router.afterEach(() => {})
