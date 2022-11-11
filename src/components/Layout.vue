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
import { onMounted, toRaw } from 'vue'
import { useRouter } from 'vue-router';

export default {
  components: {
    TopNav
  },
  setup() {
    const router = useRouter()
    onMounted(() => {
      if ((toRaw(router).currentRoute.value.fullPath) !== '/') {
        const nav = document.querySelector('.layout') as HTMLElement
        nav.style.height = '100vh'
      }
    })
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