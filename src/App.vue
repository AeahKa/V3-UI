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
    const asideVisible = ref(false)
    provide("asideVisible", asideVisible)
  }

}
</script>