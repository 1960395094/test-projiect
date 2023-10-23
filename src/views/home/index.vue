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
          @update:collapsed="handleUpdate"
        >
          <n-menu :value="avtiveMenu" :options="menuOptions" style="height: calc(100% - 28px)" />
          <div @click="handerClick" class="menu-footer">
            <n-icon :size="isCollapsed ? 28 : 20" style="vertical-align: bottom; margin-right: 4px;">
              <arrow-circleLeft-icon />
            </n-icon>
            <span v-if="!isCollapsed">全部知识库</span>
          </div>
        </n-layout-sider>
        <n-layout content-style="padding: 16px;">
          <router-view></router-view>
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, h, ref, Component } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import type { menuLabel } from './type'
import {
  AddSquareMultiple20Regular as AddSquareMultipleIcon,
  ArrowCircleLeft12Regular as ArrowCircleLeftIcon,
  AlignSpaceEvenlyVertical20Regular as AlignSpaceEvenlyVerticalIcon
} from '@vicons/fluent'

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [{
  label: () => h(RouterLink, {
    to: {
      name: 'dataSet'
    },
  }, '数据集'),
  key: 'dataSet',
  icon: renderIcon(AlignSpaceEvenlyVerticalIcon)
}, {
  label: () => h(RouterLink, {
    to: {
      name: 'importData'
    },
  }, '导入数据'),
  key: 'importData',
  icon: renderIcon(AddSquareMultipleIcon)
}]

export default defineComponent({
  name: 'Home',
  components: {
    ArrowCircleLeftIcon
  },
  setup() {
    const avtiveMenu = ref<menuLabel>('dataSet')
    const isCollapsed = ref<boolean>(false)

    const route = useRoute()
    const router = useRouter()
    avtiveMenu.value = route.name

    const handleUpdate = (collapsed: boolean) => {
      isCollapsed.value = collapsed
    }

    const handerClick = () => {
      router.push({ name: 'allKnowledgeLibrary' })
    }

    return {
      menuOptions,
      avtiveMenu,
      handerClick,
      handleUpdate,
      isCollapsed
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

.menu-footer {
  cursor: pointer;
  text-align: center;
  transition: .3s;
}
</style>
