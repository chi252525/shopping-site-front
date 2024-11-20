<template>
  <q-page class="q-gutter-md">
    <div class="row justify-center">
      <div class="col-2">
        <q-list bordered>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar color="teal" text-color="white" icon="list_alt" />
            </q-item-section>

            <q-item-section>我的歷史訂單</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar
                color="teal"
                text-color="white"
                icon="favorite_border"
              />
            </q-item-section>

            <q-item-section>我的追蹤清單</q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>
            <q-item-section>會員資料</q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-5">
        <q-card>
          <q-card-section>
            <div class="text-h6">我的訂單</div>
            <div class="text-subtitle">過去180天的訂單紀錄</div>
          </q-card-section>

          <q-card-section>
            <q-list bordered>
              <q-item v-for="order in orders" :key="order.id">
                <q-item-section>
                  <div class="q-gutter-xs">
                    <div class="text-subtitle2">
                      訂單編號 #{{ order.indicationOrderNumber }}
                    </div>
                    <div class="text-subtitle3">
                      訂單時間 {{ order.orderDate }}
                    </div>
                  </div>
                </q-item-section>

                <q-item-section side>
                  <div class="text-caption">Total: ${{ order.totalPrice }}</div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      // Sample orders data (this would typically come from an API)
      orders: [
        {
          indicationOrderNumber: 1,
          status: 'Shipped',
          orderDate: '2021-07-01',
          totalPrice: 120,
          items: ['Product 1', 'Product 2'],
        },
        {
          indicationOrderNumber: 2,
          status: 'Delivered',
          orderDate: '2021-07-05',
          totalPrice: 80,
          items: ['Product 3'],
        },
        {
          indicationOrderNumber: 3,
          status: 'Pending',
          orderDate: '2021-07-10',
          totalPrice: 200,
          items: ['Product 4', 'Product 5', 'Product 6'],
        },
      ],
    };
  },
  methods: {
    viewOrderDetails(orderId) {
      // Navigate to the Order Details page
      this.$router.push({ path: `/order/${orderId}` });
    },
  },
};
</script>

<style scoped>
.q-page {
  padding: 20px;
}

.q-card {
  max-width: 500px;
  margin: 0 auto;
}
</style>
