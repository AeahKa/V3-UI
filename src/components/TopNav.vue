<template>
  <div class="topNav">
    <div class="logo" @click="toggleAside">logo</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return { toggleAside }
  }
}
</script>

<style lang="scss" scoped>
.topNav {
  background: rgb(102, 174, 102);
  display: flex;
  padding: 16px;

  >.logo {
    max-width: 6em;
    margin-right: auto;
  }
}

.menu {
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;

  >li {
    margin: 0 1em;
  }
}
</style>