<template>
  <div class="page">
    <Layout>
      <div class="home">
        <div class="banner">
          <h1>V3-UI</h1>
          <h2>一个嘴臭的框架</h2>
          <p class="actions">
            <a href="">GitHub</a>
            <RouterLink to="/doc">开始</RouterLink>
          </p>
        </div>
      </div>
      <div class="features">
        <svg class="icon">
          <use xlink:href="#icon-Vue"></use>
        </svg><svg class="icon">
          <use xlink:href="#icon-typescript"></use>
        </svg><svg class="icon">
          <use xlink:href="#icon-light"></use>
        </svg>
      </div>
    </Layout>
  </div>

</template>

<script lang="ts">
import { RouterLink } from 'vue-router';
import Layout from '../components/Layout.vue';

export default {
  components: { RouterLink, Layout }
}
</script>

<style lang="scss" scoped>
$green: #07a67e;
$border-radius: 4px;

.page {
  background: linear-gradient(145deg, rgba(200, 200, 200, 1) 0%, rgba(236, 236, 236, 1) 25%, rgba(209, 247, 237, 1) 100%);
}

.banner {
  border: 1px solid red;
  color: #3b8674;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  >.actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      border-radius: $border-radius;
      padding: 8px 24px;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

.features {
  >svg {
    width: 64px;
    height: 64px;
  }
}
</style>