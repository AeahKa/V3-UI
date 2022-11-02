<template>
  <div>
    <Switch v-model:value='vChecked' />
  </div>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from 'vue';
export default {
  components: { Switch },
  setup() {
    const vChecked = ref(true)
    return { vChecked }
  }
}
</script>

<style lang="scss" scoped>

</style>