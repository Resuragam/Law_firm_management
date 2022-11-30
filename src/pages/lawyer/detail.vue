<script setup lang="ts">
const route = useRoute()
const lawyerInfo = route.query
console.log(lawyerInfo)
</script>

<template>
  <div class="mx-10vw py-2rem flex">
    <div class="mr-2rem">
      <img :src="lawyerInfo.pic" width="300" height="300">
    </div>
    <div>
      <div class="font-bold text-2rem">{{lawyerInfo.name}}</div>
      <div class="my-1rem">
        <el-tag plain>优秀律师</el-tag>
      </div>
      <div>简介：{{lawyerInfo.introduce}}</div>
    </div>
  </div>
</template>

<style scoped>

</style>
