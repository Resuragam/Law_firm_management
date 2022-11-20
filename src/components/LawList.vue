<script setup lang="ts">
const list = reactive([
  {
    id: 1,
    name: '婚姻纠纷',
    img: 'https://jmy-pic.baidu.com/0/pic/1280988362_1486595891_907317043.jpg',
  },
  {
    id: 2,
    name: '婚姻纠纷',
    img: 'https://jmy-pic.baidu.com/0/pic/1280988362_1486595891_907317043.jpg',
  },
  {
    id: 3,
    name: '婚姻纠纷',
    img: 'https://jmy-pic.baidu.com/0/pic/1280988362_1486595891_907317043.jpg',
  },
  {
    id: 4,
    name: '婚姻纠纷',
    img: 'https://jmy-pic.baidu.com/0/pic/1280988362_1486595891_907317043.jpg',
  },
  {
    id: 5,
    name: '婚姻纠纷',
    img: 'https://jmy-pic.baidu.com/0/pic/1280988362_1486595891_907317043.jpg',
  },
  {
    id: 6,
    name: '婚姻纠纷',
    img: 'https://jmy-pic.baidu.com/0/pic/1280988362_1486595891_907317043.jpg',
  },
])
</script>

<template>
  <div class="grid grid-cols-3">
    <el-card v-for="it in list" :key="it.id" :body-style="{ padding: '0px' }" shadow="hover">
      <img
        :src="it.img"
      />
      <div style="padding: 14px">
        <div class="text-center text-1.2rem">{{ it.name }}</div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
:deep(.el-card) {
  margin: 1rem;
  width: 300px;
}
</style>
