<template>
  <div class="banner">
    <h1>V3-UI</h1>
    <h2>一个嘴臭的框架</h2>
    <p class="actions">
      <a href="">GitHub</a>
      <a href="">开始</a>
    </p>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;

  >.actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: calc($h/2);
      padding: 0 8px;
    }
  }
}
</style>