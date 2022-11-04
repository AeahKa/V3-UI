<template>
  <div>Button示例</div>
  <h1>示例1</h1>
  <div>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="small">小小小</Button>
    <Button>普通</Button>
    <Button size="big">大大大</Button>
  </div>
  <div>
    <Button theme="link" size="small">小小小</Button>
    <Button theme="link">普通</Button>
    <Button theme="link" size="big">大大大</Button>
  </div>
  <div>
    <Button theme="text" size="small">小小小</Button>
    <Button theme="text">普通</Button>
    <Button theme="text" size="big">大大大</Button>
  </div>
  <h1>示例3</h1>
  <div>
    <Button>普通按钮</Button>
    <Button level="main">主要按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <div>
    <Button theme="text">普通文本按钮</Button>
    <Button theme="text" level="main">主要文本按钮</Button>
    <Button theme="text" level="danger">危险文本按钮</Button>
  </div>
  <h1>示例四</h1>
  <div>
    <Button disabled>禁用普通按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文本按钮</Button>
  </div>
  <h1>示例五</h1>
  <div>
    <Button loading>加载中</Button>
  </div>

</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
export default {
  components: { Button },
  setup() {

  }
}
</script>

<style lang="scss" scoped>

</style>