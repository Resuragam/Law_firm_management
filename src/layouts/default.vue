<script setup lang="ts">
import { useRoute } from 'vue-router'
import Cookies from 'js-cookie'
const route = useRoute()
const router = useRouter()
const handleSelect = (key: string, keyPath: string[]) => {
  console.warn(key, keyPath)
}
const removeLogin = () => {
  Cookies.remove('token')
  location.reload()
}
</script>

<template>
  <main>
    <div class="menu-container">
      <el-menu
        class="el-menu-demo el-menu-container"
        mode="horizontal"
        :router="true"
        :ellipsis="false"
        @select="handleSelect"
      >
        <div index="0" class="logo">
          123律师事务所
        </div>
        <div class="flex-grow" />
          <el-menu-item index="/" :route="{ path: '/' }">主页</el-menu-item>
          <el-menu-item index="/lawyer" :route="{ path: '/lawyer' }">律师团队</el-menu-item>
          <el-menu-item index="/legal" :route="{ path: '/legal' }">法律咨询</el-menu-item>
          <el-menu-item index="/my" :route="{ path: '/my' }">团队介绍</el-menu-item>
        <el-menu-item v-if="Cookies.get('token') === '1'" index="/modify" :route="{ path: '/modify' }" >修改律师</el-menu-item>
        <el-menu-item v-if="Cookies.get('token') === '1'" index="/" :route="{ path: '/' }" @click="removeLogin" >退出登录</el-menu-item>
        <el-menu-item v-if="Cookies.get('token') !== '1'" index="/login" :route="{ path: '/login' }">登录</el-menu-item>
      </el-menu>
    </div>
    <div class="h-59px"></div>
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
