<template>
  <h2>文件数：{{count}}个</h2>
  <n-data-table
    :columns="columns"
    :data="files"
    :pagination="pagination"
    :loading="isLoading"
    striped
  />

</template>

<script lang="ts">
import { defineComponent, ref, h } from 'vue'
import { queryDataSet, IFiles } from '../../api'
const columns = [{
  title: '文件名',
  key: 'fileName'
}, {
  title: '上传时间',
  key: 'uploadTime'
}, {
  title: '文件大小',
  key: 'fileSize'
}, {
  title: '状态',
  key: 'status',
  
  render(row) {
    console.log(row)
    return h('div', null, [h('i', {
      class: 'dot',
      style: {
        backgroundColor: row.status ? 'green' : '#efefef'
      }
    }), h('span', null, row.status ? '可用' : '不可用')])
  }
}, {
  title: '',
  key: 'more',
  render() {
    return '...'
  }
}]
export default defineComponent({
  setup() {
    const files= ref<IFiles[]>([])
    const count = ref<number>(0)
    const isLoading = ref<boolean>(false)
    const getData = async () => {
      isLoading.value = true

      const data = await queryDataSet()
      isLoading.value = false
      files.value = data
      count.value = data.length
    }

    getData()

    return {
      count,
      files,
      columns,
      pagination: false as const,
      isLoading
    }
  }
})
</script>

<style scoped>
h2 {
  font-weight: normal;
  margin-bottom: 16px;
}
:deep(.dot) {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 4px;
  border-radius: 50%;
}
</style>
