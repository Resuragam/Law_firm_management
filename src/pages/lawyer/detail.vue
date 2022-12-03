<script setup lang="ts">
import { findAllLawyer } from '~/api/lawyer'
const route = useRoute()
const lawyerInfo = computed(() => {
  return route.query
})
const list = ref([])
const router = useRouter()
onMounted(() => {
  findAllLawyer().then((res) => {
    list.value = res.data.lawters.filter((item: any) => item.teacherId !== route.query.teacherId)
    // console.warn(list)
  })
})

const toDetail = (item: any) => {
  router.replace({
    path: '/lawyer/detail',
    query: item,
  })
}
</script>

<template>
  <div class="mx-10vw py-2rem flex">
    <div class="mr-2rem">
      <img :src="lawyerInfo.pic" width="300" height="300" class="lawyerInfo">
    </div>
    <div>
      <div class="font-bold text-2rem">
        {{ lawyerInfo.name }}
      </div>
      <div class="my-1rem">
        <el-tag plain>
          优秀律师
        </el-tag>
      </div>
      <div>简介：{{ lawyerInfo.introduce }}</div>
    </div>
  </div>
  <div class="mx-10vw py-2rem font-bold text-1.25rem">
    其他律师
  </div>
  <div class="grid grid-cols-4 mx-10vw py-2rem">
    <el-card v-for="it in list" :key="it.id" :body-style="{ padding: '0px' }" shadow="hover" @click="toDetail(it)">
      <img
        :src="it.pic"
      >
      <div style="padding: 14px">
        <div class="text-center text-1.2rem">
          {{ it.name }}
        </div>
        <div class="text-center text-1rem font-100">
          优秀律师
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
:deep(.el-card) {
  margin: 1rem;
  width: 253px;
}
.lawyerInfo {
  width: 300px !important;
  height: 300px !important;
  max-width: 300px !important;
}
img {
  width: 253px;
  height: 253px;
}
</style>
