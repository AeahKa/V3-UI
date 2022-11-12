<demo>
  支持 level
</demo>

<template>
  <div>
    <Button>普通按钮</Button>
    <Button level="main">主要按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link">普通链接</Button>
    <Button theme="link" level="main">主要链接</Button>
    <Button theme="link" level="danger">危险链接</Button>
  </div>
  <div>
    <Button theme="text">普通文本</Button>
    <Button theme="text" level="main">主要文本</Button>
    <Button theme="text" level="danger">危险文本</Button>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
export default {
  components: { Button },
}
</script>