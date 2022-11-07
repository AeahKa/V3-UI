<template>
  <div class="topNav">
    <span class="toggleAside" @click="toggleAside"></span>
    <RouterLink to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-v3-logo-yellow"></use>
      </svg>
    </RouterLink>
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
  color: #3b8674;
  display: flex;
  padding: 4px 16px;
  position: relative;
  z-index: 10;
  justify-items: center;
  align-items: center;

  >.logo {
    max-width: 6em;
    margin-right: auto;
    overflow: auto;


    >svg {
      height: 64px;
      width: 64px;
    }
  }

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    >li {
      margin: 0 1em;
    }
  }

  >.toggleAside {
    background: #000;
    display: inline-block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media(max-width:800px) {
    >.toggleAside {
      display: inline-block;
    }

    >.menu {
      display: none;
    }

    >.logo {
      margin: 0 auto;
    }
  }
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>