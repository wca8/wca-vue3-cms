<template>
  <div class="user">
    <page-search
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
      :search-form-config="searchFormConfig"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { useStore } from '@/store'
import { usePageSearch } from '@/hooks/use-page-search'
export default defineComponent({
  props: {},
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    return {
      searchFormConfig,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef
    }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>

<style lang="less">
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: red !important;
}
</style>
