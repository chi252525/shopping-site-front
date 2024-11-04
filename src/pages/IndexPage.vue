<template>
  <q-page-container class="q-pa-lg q-mx-md">
    <q-carousel
      v-model="carouselValue"
      animated
      arrows
      navigation
      infinite
      height="800px"
    >
      <q-carousel-slide
        :name="1"
        img-src="https://down-ver-tw.img.susercontent.com/tw-11134210-7rasf-m0vfhghnlmufbc.webp"
        class="full-width"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://down-ver-tw.img.susercontent.com/tw-11134210-7ras9-m10wrvo2f045cd.webp"
        class="full-width"
      />
    </q-carousel>

    <q-tabs no-caps class="bg-white text-black shadow-2">
      <q-tab
        name="外套｜ jackets｜ジャケット"
        label="外套｜ jackets｜ジャケット"
      />
      <q-tab name="套裝｜suit｜スーツ" label="套裝｜suit｜スーツ" />
      <q-tab name="下著｜Bottom｜ボトム" label="下著｜Bottom｜ボトム" />
      <q-tab name="上著｜TOP｜トップ" label="上著｜TOP｜トップ" />
    </q-tabs>
    <Product class="q-mt-xs" />
  </q-page-container>
</template>

<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
});
import { ref } from 'vue';
import Product from '../components/Product.vue';
const carouselValue = ref(1);
</script>
<style scoped>
.full-width {
  width: 100%; /* 使图片宽度填满容器 */
  height: auto; /* 高度自适应 */
  object-fit: cover; /* 保持纵横比并裁剪 */
}
.content {
  padding-bottom: 100px; /* 为内容增加底部边距，确保内容不会被页脚遮挡 */
}
</style>
