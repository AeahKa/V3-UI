<template>
  <div class="page">
    <Layout>
      <div class="home">
        <div class="banner">
          <h1>V3-UI</h1>
          <h2>一个纯手工无添加框架</h2>
          <p class="actions">
            <a href="">GitHub</a>
            <RouterLink to="/doc">开始</RouterLink>
          </p>
        </div>
      </div>
    </Layout>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写 (非严格检查)</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>易读性高</h3>
        <p>每个组件的代码都十分简洁</p>
      </li>
    </ul>
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
  clip-path: ellipse(80% 60% at 50% 40%);
}

.banner {
  padding: 100px 0;
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
  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;

    >ul {
      >li {
        width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;

    >ul {
      >li {
        width: 33.3333%;
      }
    }
  }

  >ul {
    display: flex;
    flex-wrap: wrap;

    >li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
      }

      >p {
        grid-area: text
      }
    }
  }
}
</style>