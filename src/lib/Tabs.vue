<template>
  <div class="v3-tabs">
    <div class="v3-tabs-nav">
      <div class="v3-tabs-nav-item" v-for="t in titles" :key="t">{{ t }}</div>
    </div>
    <div class="v3-tabs-content">
      <component class="v3-tabs-content-item" v-for='(c, index) in defaults' :is='c' key="index" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
export default {
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是Tab')
      }
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    return { defaults, titles }
  }
}
</script>

<style lang="scss">
$green: #07a67e;
$blue: #40a9ff;
$mainColor: $green;
$color: #333;
$border-color: #d9d9d9;

.v3-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: #07a67e;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $mainColor;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>