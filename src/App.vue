<template>
  <TopNav />
  <hr />
  <RouterView />
</template>

<script lang="ts">
import { provide, ref } from 'vue';
import TopNav from './components/TopNav.vue'
export default {
  name: 'App',
  components: {
    TopNav
  },
  setup() {
    const asideVisible = ref(document.documentElement.clientWidth < 800 ? false : true)
    provide("asideVisible", asideVisible)
  }

}
</script>