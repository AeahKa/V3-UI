<template>
  <article class="markdown-body">
    <h1>
      开始使用
    </h1>
    <p>安装组件库后在您的代码中引入组件</p>
    <pre class="language-js" v-html="Prism.highlight(code1, Prism.languages.js)"></pre>
    然后就可以使用V3-UI的组件了。
    <h2>Vue 单文件组件</h2>
    <p>代码示例：</p>
    <pre class="language-js" v-html="Prism.highlight(code2, Prism.languages.js)"></pre>
  </article>
</template>

<script lang="ts">
import 'prismjs'
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism
export default {
  props: {
    component: Object
  },
  setup() {
    const code1 = 'import {Switch, Button, Dialog, Tabs} from "v3-ui" //组件安装路径可能有不同'
    const code2: string = `
\<template\>
  \<div\>\<Button\>按钮\</Button\>\</div\>
\</template\>
\<script\>
  import {Switch, Button, Dialog, Tabs} from "v3-ui"
  export default {
    components: {Button}
  }
\</script\>
    `
    return {
      Prism, code1, code2
    }
  }
}
</script>