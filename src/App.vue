<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  props: {},
  components: {},
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.app {
  height: 100%;
}
</style>
