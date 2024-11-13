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
        img-src="https://i.postimg.cc/bNfTmMZ4/Banner.jpg"
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
  </q-page-container>
  <div class="q-gutter-md row justify-center">
    <div
      class="col-12 col-sm-6 col-md-3 col-lg-2"
      v-for="product in products"
      :key="product.id"
    >
      <router-link :to="`/product/${product.id}`">
        <ProductItem class="q-mt-xs" :product="product" />
      </router-link>
    </div>
  </div>
  <div class="q-mt-xl flex justify-center">
    <q-pagination v-model="carouselValue" :max="5" :direction-links="true" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
});
import { ref, onMounted } from 'vue';
import ProductItem from '../components/ProductItem.vue';
const carouselValue = ref(1);
const products = ref<Product[]>([]);
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}
onMounted(() => {
  fetchProducts();
});
function fetchProducts() {
  console.log('Fetching products');
  products.value = [
    {
      id: 1,
      name: 'Jacket',
      price: 1500,
      description: '外套｜jackets｜ジャケット',
      imageUrl: 'https://i.postimg.cc/fy8ppCf6/535500.jpg',
    },
    {
      id: 2,
      name: 'Suit',
      price: 3500,
      description: '套裝｜suit｜スーツ',
      imageUrl: 'https://i.postimg.cc/fy8ppCf6/535500.jpg',
    },
    {
      id: 3,
      name: 'Bottom',
      price: 1200,
      description: '下著｜Bottom｜ボトム',
      imageUrl: 'https://i.postimg.cc/fy8ppCf6/535500.jpg',
    },
    {
      id: 4,
      name: 'Top',
      price: 900,
      description: '上著｜TOP｜トップ',
      imageUrl: 'https://i.postimg.cc/fy8ppCf6/535500.jpg',
    },
  ];
}
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
