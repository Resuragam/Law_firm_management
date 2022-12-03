<script setup lang="ts">
import { findAllLawyer } from '~/api/lawyer'

const list = ref([])
const router = useRouter()
onMounted(() => {
  findAllLawyer().then((res) => {
    list.value = res.data.lawters
  })
})

const toDetail = (item: any) => {
  router.push({
    path: '/lawyer/detail',
    query: item,
  })
}
</script>

<template>
  <div class="grid grid-cols-4">
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

img {
  width: 253px;
  height: 253px;
}
</style>
