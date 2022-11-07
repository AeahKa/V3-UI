<template>
  <button class="v3-switch" :class="{ 'v3-checked': value }" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {

    const toggle = () => {
      context.emit("update:value", !props.value)
    }
    return { toggle }
  }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$green: #07a67e;

.v3-switch {
  height: $h;
  width: calc($h * 2);
  border: none;
  background: gray;
  border-radius: calc($h / 2);
  position: relative;

  >span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc($h2 / 2);
    transition: left 250ms;
  }
}

.v3-switch.v3-checked {
  background: $green;

  >span {
    left: calc(100% - #{$h2} - 2px);
  }
}

.v3-switch:focus {
  outline: none;
}
</style>