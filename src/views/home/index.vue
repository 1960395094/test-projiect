<template>
  <div class="home">
    <n-layout position="absolute">
      <!-- <n-layout-header style="height: 64px; padding: 24px" bordered>
        颐和园路
      </n-layout-header> -->
      <n-layout has-sider position="absolute" style="bottom: 0px">
        <n-layout-sider
          collapse-mode="width"
          :collapsed-width="120"
          :width="240"
          show-trigger="arrow-circle"
          content-style="padding: 24px;"
          bordered
        >
          <n-menu :value="avtiveMenu" :options="menuOptions" style="height: calc(100% - 28px)" />
          <router-link to="allKnowledgeLibrary">全部知识库</router-link>
        </n-layout-sider>
        <n-layout content-style="padding: 16px;">
          <router-view></router-view>
        </n-layout>
      </n-layout>
      <!-- <n-layout-footer
        bordered
        position="absolute"
        style="height: 64px; padding: 24px"
      >
        城府路
      </n-layout-footer> -->
    </n-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, h, ref, Component } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import type { menuLabel } from './type'

const menuOptions: MenuOption[] = [{
  label: () => h(RouterLink, {
    to: {
      name: 'dataSet'
    },
  }, '数据集'),
  key: 'dataSet',
}, {
  label: () => h(RouterLink, {
    to: {
      name: 'importData'
    },
  }, '导入数据'),
  key: 'importData'
}]

export default defineComponent({
  name: 'Home',
  setup() {
    const avtiveMenu = ref<menuLabel>('dataSet')
    const route = useRoute()
    avtiveMenu.value = route.name
    const handleUpdateValue = (key: menuLabel) => {
      avtiveMenu.value = key
    }

    return {
      menuOptions,
      handleUpdateValue,
      avtiveMenu
    }
  },
  beforeRouteUpdate(to) {
    this.avtiveMenu = to.name
  }
})

</script>

<style scoped>
.home {
  height: 100vh;
  position: relative
}
</style>
