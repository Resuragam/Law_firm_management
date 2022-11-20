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
        class="el-menu-demo el-menu-container"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <div index="0" class="logo">
          123律师事务所
        </div>
        <div class="flex-grow" />
          <el-menu-item index="/" :route="{ path: '/' }">主页</el-menu-item>
          <el-menu-item index="/lawyer" :route="{ path: '/lawyer' }">律师名单</el-menu-item>
          <el-menu-item index="/legal" :route="{ path: '/legal' }">法律咨询</el-menu-item>
          <el-menu-item index="/my" :route="{ path: '/my' }">我的</el-menu-item>
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
}
.el-menu-container {
  padding:0 10vw;
}
.logo {
  display: flex;
  justify-items: center;
  align-items: center;
  align-items: center;
}
</style>
