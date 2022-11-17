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

          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      律所简介
    </div>
    <div>
      律师名单
    </div>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
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
}
</style>
