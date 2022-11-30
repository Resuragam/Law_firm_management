<script setup lang="ts">
const list = reactive([
  {
    id: 1,
    name: '婚姻纠纷',
    img: 'https://jmy-pic.baidu.com/0/pic/1280988362_1486595891_907317043.jpg',
  },
  {
    id: 2,
    name: '交通事故',
    img: 'https://jmy-pic.baidu.com/0/pic/-66727369_-999258735_-1207639210.jpg',
  },
  {
    id: 3,
    name: '房产纠纷',
    img: 'https://jmy-pic.baidu.com/0/pic/622897678_1616885428_-2071429923.jpg',
  },
  {
    id: 4,
    name: '损害赔偿',
    img: 'https://jmy-pic.baidu.com/0/pic/1871054758_-1440801127_-1600493372.jpg',
  },
  {
    id: 5,
    name: '刑事辩护',
    img: 'https://jmy-pic.baidu.com/0/pic/-792801333_94916272_1286970479.jpg',
  },
  {
    id: 6,
    name: '合同纠纷',
    img: 'https://jmy-pic.baidu.com/0/pic/688319697_1317404916_1053410260.jpg',
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
