<template>
  <div class="topNav">
    <span class="toggleAside" @click="toggleAside">
      <svg class="icon">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
    <RouterLink to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-v3"></use>
      </svg>
    </RouterLink>
    <ul class="menu">
      <li>
        <RouterLink to="/doc/intro">文档</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref, onMounted, toRaw, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    const router = useRouter()
    onMounted(() => {
      if ((toRaw(router).currentRoute.value.fullPath) === '/') {
        document.querySelector('span').style.display = 'none'
      }
    })
    return { toggleAside }
  }
}
</script>

<style lang="scss" scoped>
.topNav {
  color: grey;
  display: flex;
  padding: 8px 16px;
  position: relative;
  z-index: 10;
  justify-items: center;
  align-items: center;

  >.logo {
    max-width: 6em;
    margin-right: auto;
    overflow: visible;
    height: 32px;
    width: 32px;

    >svg {
      height: 32px;
      width: 32px;
      fill: rgb(255, 234, 0);
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
    display: inline-block;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;

    >svg {
      width: 24px;
      height: 24px;
    }
  }

  @media(max-width:500px) {
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