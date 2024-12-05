<template>
  <q-page>
    <div class="row q-mt-md justify-center">
      <!-- Image Preview -->
      <div class="col-xs-12 col-md-4">
        <q-carousel
          v-model="slide"
          animated
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide
            v-for="(img, index) in product.images"
            :key="index"
            :name="index"
            :img-src="img"
          />
        </q-carousel>
      </div>

      <!-- Product Details -->
      <div class="col-xs-12 col-md-4 q-px-md">
        <h1 class="text-h4 q-mb-md">{{ product.name }}</h1>
        <p class="text-h6 q-mb-sm">${{ product.price.toFixed(2) }}</p>
        <p class="text-subtitle1 q-mt-md">SKU: {{ product.sku }}</p>
        <p class="q-mb-md">{{ product.description }}</p>
        <p class="text-subtitle1 q-mt-md">尺寸</p>
        <q-select square standout :options="options" label="Square outlined" />
        <p class="text-subtitle1 q-mt-md">顏色</p>
        <q-select square standout :options="options" label="Square outlined" />
        <!-- Quantity Selector -->
        <div class="row items-center q-mt-md">
          <div class="col-12 col-sm-auto">
            <q-btn-group>
              <q-btn
                icon="remove"
                @click="decrementQuantity"
                :disable="quantity <= 1"
              />
              <q-input
                v-model.number="quantity"
                type="number"
                style="width: 30px"
                dense
              />
              <q-btn icon="add" @click="incrementQuantity" />
            </q-btn-group>
          </div>
        </div>

        <!-- Add to Cart Button -->
        <q-btn
          color="primary"
          icon="shopping_cart"
          label="加入購物車"
          @click="addToCart"
          class="q-mt-md"
        />
      </div>
    </div>
    <div class="row q-mt-md justify-center">
      <div class="col-8">
        <q-card>
          <q-tabs
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            narrow-indicator
          >
            <q-tab name="mails" label="尺寸表" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="mails">
              <div class="text-h6">尺寸表</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const route = useRoute();

// Mock product data, ideally you would fetch this from an API based on the product ID
const product = ref({
  name: '庫洛米棉外套 5-17號',
  price: 99.99,
  sku: 'EX-123456',
  description:
    'This is an example product description. It showcases the features and benefits of the product.',
  images: [
    'https://i.postimg.cc/fy8ppCf6/535500.jpg',
    'https://down-tw.img.susercontent.com/file/tw-11134207-7rase-m0wq7v9hi24acb@resize_w900_nl.webp',
    'https://down-tw.img.susercontent.com/file/tw-11134207-7rase-m0wq7v9hi24acb@resize_w900_nl.webp',
  ],
});

const slide = ref(0);
const autoplay = ref(true);
const quantity = ref(1);

// Fetch product data based on the product ID from the URL
onMounted(() => {
  const productId = route.params.id;
  fetchProduct(productId);
});

// Example of fetching product data (mock)
function fetchProduct(id) {
  // Replace this with an actual API request using the product ID
  // Here we're using the mock data above.
  if (id === '1') {
    product.value = {
      name: '庫洛米棉外套 5-17號',
      price: 99.99,
      sku: 'EX-123456',
      description: 'This is an example product description',
      images: [
        'https://i.postimg.cc/fy8ppCf6/535500.jpg',
        'https://down-tw.img.susercontent.com/file/tw-11134207-7rase-m0wq7v9hi24acb@resize_w900_nl.webp',
      ],
    };
  }
}

const incrementQuantity = () => {
  quantity.value++;
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const addToCart = () => {
  // Here you would typically dispatch an action to add the item to the cart
  // For this example, we'll just show a notification
  $q.notify({
    color: 'positive',
    position: 'top',
    message: `Added ${quantity.value} ${
      quantity.value > 1 ? 'items' : 'item'
    } to cart`,
    icon: 'shopping_cart',
  });
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
