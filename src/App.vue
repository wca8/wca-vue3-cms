<template>
  <div class="app">
    <!-- 处理国际化 el-config-provider -->
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  props: {},
  components: {},
  setup() {
    return {
      locale: zhCn
    }
  }
})
</script>

<style scoped lang="less">
.app {
  height: 100%;
}
</style>
