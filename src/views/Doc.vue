import { inject, ref } from 'vue';
<template>
  <Layout>
    <div class="doc">
      <div class="content">
        <aside v-if="asideVisible">
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
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 66px;

  >h2 {
    margin-top: 4px;

  }

  >ol {
    >li {
      padding: 4px 0;
    }
  }

  @media(max-width:800px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 66px;
  }
}
</style>