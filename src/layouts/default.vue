<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const handleSelect = (key: string, keyPath: string[]) => {
  console.warn(key, keyPath)
}
</script>

<template>
  <main>
    <div class="menu-container">
      <el-menu
        :default-active="route.path"
        mode="horizontal"
        :router="true"
        background-color="#10102D"
        text-color="#fff"
        active-text-color="#C89D66"
        @select="handleSelect"
      >
        <el-menu-item index="/" :route="{ path: '/' }">Processing Center</el-menu-item>
        <el-menu-item index="/lawyer" :route="{ path: '/lawyer' }">Processing Center</el-menu-item>
        <el-menu-item index="/legal" :route="{ path: '/legal' }">Info</el-menu-item>
        <el-menu-item index="/my" :route="{ path: '/my' }">Orders</el-menu-item>
      </el-menu>
    </div>
    <RouterView />
  </main>
</template>

<style scoped>
.menu-container {
  position: fixed;
  z-index: 999;
  width: 100vw;
  background-color: #10102D !important;
}

:deep(.el-menu--horizontal) {
  border-bottom: none !important;
}

:deep(.el-menu--horizontal>.el-menu-item.is-active) {
  border-bottom: none !important;
}
</style>
