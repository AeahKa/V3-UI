<template>
  <RouterView />
</template>

<script lang="ts">
import { provide, ref } from 'vue';
import { router } from './router';
export default {
  name: 'App',

  setup() {
    const asideVisible = ref(document.documentElement.clientWidth <= 500 ? false : true)
    provide("asideVisible", asideVisible)
    router.afterEach(() => {
      if (document.documentElement.clientWidth <= 500) {
        asideVisible.value = false
      }
    })
  }
}
</script>