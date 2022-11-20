<script setup lang="ts">
// import image1 from '../../public/swiper/as1.jpg'
// import image2 from '../../public/swiper/as2.jpg'
// import image3 from '../../public/swiper/as3.jpg'

const imageSwiper = reactive([
  {
    id: 1,
    url: '../../../public/swiper/as2.jpg',
  },
  {
    id: 2,
    url: '../../../public/swiper/7.jpg',
  },
  {
    id: 3,
    url: '../../../public/swiper/8.jpg',
  },
])
</script>

<template>
  <div>
    <div>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="it in imageSwiper" :key="it.id">
          <img class="image" :src="it.url">
          <div class="overlay">
            <div class="text-3rem text-white my-1rem">
              123律师事务所
            </div>
            <div class="text-2rem text-white">
              专业为客户争取合法利益途径
            </div>
            <div class="text-2rem text-white">
              以当事人权益为中心，定义每一场诉讼
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="flex justify-center">
      <law-firm-intro></law-firm-intro>
    </div>
    <div class="text-2rem font-blod flex justify-center my-2rem">
      咨询业务
    </div>
    <div class="flex justify-center">
      <law-list></law-list>
    </div>
    <div class="text-2rem font-blod flex justify-center my-2rem">
      律师名单
    </div>
    <div class="flex justify-center">
      <lawer-list></lawer-list>
    </div>
  </div>
</template>

<style scoped>
:deep(.el-carousel) {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

:deep(.el-carousel__container) {
  width: 100vw;
  height: 100vh;
}

.image {
  width: 100vw;
  height: 100vh;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: rgb(34 47 70 / 72%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10vw;
}

</style>
