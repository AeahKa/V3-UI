<template>
  <div>Tabs 示例</div>
  <h1>示例1</h1>
  <Tabs>
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tab from '../../lib/Tab.vue';
import Tabs from '../../lib/Tabs.vue';
export default {
  components: { Tabs, Tab }
}
</script>

<style lang="scss" scoped>

</style>