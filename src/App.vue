<template>
  <TopNav/>
  <hr/>
  <RouterView/>
</template>

<script lang="ts">
import TopNav from './components/TopNav.vue'
export default {
  name: 'App',
  components:{
    TopNav
  }
}
</script>
