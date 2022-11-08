import { inject, ref } from 'vue';
<template>
  <Layout>
    <div class="doc">
      <div class="content">
        <aside v-if="asideVisible">
          <h2>文档</h2>
          <ol>
            <li>
              <RouterLink to="/doc/intro">介绍</RouterLink>
            </li>
            <li>
              <RouterLink to="/doc/install">安装</RouterLink>
            </li>
            <li>
              <RouterLink to="/doc/start">开始使用</RouterLink>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <RouterLink to="/doc/switch">Switch组件</RouterLink>
            </li>
            <li>
              <RouterLink to="/doc/button">Button组件</RouterLink>
            </li>
            <li>
              <RouterLink to="/doc/dialog">Dialog组件</RouterLink>
            </li>
            <li>
              <RouterLink to="/doc/tabs">Tabs组件</RouterLink>
            </li>
          </ol>
        </aside>
        <main>
          <RouterView />
        </main>
      </div>
    </div>
  </Layout>

</template>

<script lang="ts">
import { inject, Ref } from 'vue';
import Layout from '../components/Layout.vue';
export default {
  components: {
    Layout
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    return { asideVisible }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-grow: 1;
  padding-left: 156px;

  @media (max-width: 500px) {
    padding-left: 0;
  }

  >aside {
    background: lightblue;
    width: 150px;
    padding: 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 50px;
    z-index: 1;
    height: 100%;
    flex-shrink: 0;

    >h2 {
      margin-top: 4px;
      padding: 0 16px;
    }

    >ol {
      >li {
        >a {
          display: block;
          padding: 4px 16px;
          text-decoration: none;
        }

        .router-link-active {
          background: white;
        }
      }
    }
  }

  >main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
</style>