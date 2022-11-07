<template>
  <div class="layout">
    <TopNav class="nav" />
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

  >.nav {
    flex-shrink: 0;
  }

  >.content {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>