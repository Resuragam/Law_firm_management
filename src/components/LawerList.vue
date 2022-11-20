<script setup lang="ts">
const list = reactive([
  {
    id: 1,
    name: '张三',
    img: 'https://jmy-pic.baidu.com/0/pic/36010732_-1840539486_-2050336113.jpg',
  },
  {
    id: 2,
    name: '李四',
    img: 'https://jmy-pic.baidu.com/0/pic/36010732_-1840539486_-2050336113.jpg',
  },
  {
    id: 2,
    name: '王五',
    img: 'https://jmy-pic.baidu.com/0/pic/36010732_-1840539486_-2050336113.jpg',
  },
])
</script>

<template>
  <div class="grid grid-cols-4">
    <el-card v-for="it in list" :key="it.id" :body-style="{ padding: '0px' }" shadow="hover">
      <img
        :src="it.img"
      />
      <div style="padding: 14px">
        <div class="text-center text-1.2rem">{{ it.name }}</div>
        <div class="text-center text-1rem font-100">优秀律师</div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
:deep(.el-card) {
  margin: 1rem;
  width: 253px;
}
</style>
