<demo>
  支持 level
</demo>

<template>
  <div>
    <Button>普通默认按钮</Button>
    <Button level="main">主要默认按钮</Button>
    <Button level="danger">危险默认按钮</Button>
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
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
export default {
  components: { Button },
}
</script>