<template>
  <div class="row justify-center q-col-gutter-lg">
    <div class="col-auto" v-for="i in 3" :key="i">
      <q-card class="my-card">
        <q-img
          src="https://down-tw.img.susercontent.com/file/tw-11134207-7rase-m0wq7v9hi24acb@resize_w900_nl.webp"
        >
          <div class="absolute-bottom">
            <div class="text-h6">庫洛米棉外套 5-17號</div>
            <div class="text-subtitle2">2024秋天新款 紫/粉色</div>
            <div class="text-subtitle2">2024秋天新款 紫/粉色</div>
          </div>
        </q-img>

        <q-card-actions>
          <q-btn flat>立即購買</q-btn>
          <q-btn flat>加到購物車</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
};
</script>

<style scoped>
.my-card {
  width: 100%;
  width: 350px;
}
</style>
