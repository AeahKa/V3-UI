<demo>
  支持disabled
</demo>

<template>
  <Switch v-model:value='checked' disabled />
</template>

<script lang="ts">
import Switch from "../../lib/Switch.vue";
import { ref } from 'vue';
export default {
  components: { Switch },
  setup() {
    const checked = ref(false)
    return { checked }
  }
}
</script>