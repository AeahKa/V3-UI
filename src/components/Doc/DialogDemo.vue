<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      提示
    </template>
    <template v-slot:content>
      hello
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click='showDialog'>show</Button>
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
    const showDialog = () => {
      setDialog({
        title: '标题', content: "hello", ok() {
          console.log('ok')
        }, cancel() {
          console.log('cancel');
        }
      })
    }
    return { visible, toggle, f1, f2, showDialog }
  }
}
</script>

<style lang="scss" scoped>

</style>