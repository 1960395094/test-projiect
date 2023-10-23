<template>
  <h2>文件数：{{count}}个</h2>
  <n-table striped>
      <thead>
        <tr>
          <th>文件名</th>
          <th>上传时间</th>
          <th>文件大小</th>
          <th>状态</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(v) in files" :key="v.id">
          <td>{{ v.fileName }}</td>
          <td>{{ v.uploadTime }}</td>
          <td>{{ v.fileSize }}</td>
          <td>
            <i class="dot" :style="{ backgroundColor: v.status ? 'green' : '#efefef' }"></i>
            <span>{{v.status ? '可用' : '不可用'}}</span>
          </td>
          <td>...</td>
        </tr>
      </tbody>
    </n-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { queryDataSet, IFiles } from '../../api'
export default defineComponent({
  setup() {
    const files= ref<IFiles[]>([])
    const count = ref<number>(0)
    const getData = async () => {
      const data = await queryDataSet()
      files.value = data
      console.log(data)
      count.value = data.length
    }
    getData()
    return {
      count,
      files
    }
  }
})
</script>

<style scoped>
h2 {
  font-weight: normal;
  margin-bottom: 16px;
}
.dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 4px;
  border-radius: 50%;
}
</style>
