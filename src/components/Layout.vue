<template>
  <div class="layout">
    <TopNav />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from './TopNav.vue';

export default {
  components: {
    TopNav
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>