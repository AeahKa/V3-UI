<demo>
  一行设置 Dialog
</demo>

<template>
  <Button @click='showDialog'>打开对话框</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import { h } from 'vue'
import { setDialog } from '../../lib/setDialog'
export default {
  components: {
    Button
  },
  setup() {
    const showDialog = () => {
      setDialog({
        title: h('strong', {}, '标题'), content: "hello", ok() {
          console.log('ok')
        }, cancel() {
          console.log('cancel');
        }
      })
    }
    return { showDialog }
  }
}
</script>