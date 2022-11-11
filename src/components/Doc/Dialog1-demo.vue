<demo>
  常规用法
</demo>

<template>
  <Button @click="toggle">打开对话框</Button>
  <Dialog v-model:visible="visible" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      hi
      <div>hi</div>
      <strong>hi</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Dialog from '../../lib/Dialog.vue'
import { setDialog } from '../../lib/setDialog'
import { ref } from 'Vue';
export default {
  components: {
    Dialog, Button, setDialog
  },
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const f1 = () => { return false }
    const f2 = () => { return true }
    return { visible, toggle, f1, f2 }
  }
}
</script>