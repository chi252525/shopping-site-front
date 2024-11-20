<template>
  <q-page class="q-gutter-md">
    <div class="row justify-around">
      <div class="col-3">
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            expand-separator
            icon="mail"
            label="Inbox"
            caption="5 unread emails"
            default-opened
          >
            <q-expansion-item
              :header-inset-level="1"
              expand-separator
              icon="receipt"
              label="Receipts"
              default-opened
            >
              <q-expansion-item
                switch-toggle-side
                dense-toggle
                label="Today"
                :header-inset-level="1"
                :content-inset-level="2"
              >
                <q-card>
                  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem, eius reprehenderit eos corrupti commodi magni
                    quaerat ex numquam, dolorum officiis modi facere maiores
                    architecto suscipit iste eveniet doloribus ullam aliquid.
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                switch-toggle-side
                dense-toggle
                label="Yesterday"
                :header-inset-level="1"
                :content-inset-level="2"
              >
                <q-card>
                  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem, eius reprehenderit eos corrupti commodi magni
                    quaerat ex numquam, dolorum officiis modi facere maiores
                    architecto suscipit iste eveniet doloribus ullam aliquid.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-expansion-item>

            <q-expansion-item
              :header-inset-level="1"
              :content-inset-level="1"
              expand-separator
              icon="schedule"
              label="Postponed"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, eius reprehenderit eos corrupti commodi magni quaerat
                  ex numquam, dolorum officiis modi facere maiores architecto
                  suscipit iste eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-expansion-item>
        </q-list>
      </div>
      <div class="col-9">
        <q-card>
          <q-card-section>
            <div class="text-h6">我的訂單</div>
          </q-card-section>

          <q-card-section>
            <q-list bordered>
              <q-item v-for="order in orders" :key="order.id">
                <q-item-section>
                  <div class="q-gutter-xs">
                    <div class="text-subtitle2">訂單編號 #{{ order.id }}</div>
                    <div class="flex">
                      <div class="text-caption">Status: {{ order.status }}</div>
                      <div class="text-caption">Status: {{ order.status }}</div>
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
          id: 1,
          status: 'Shipped',
          totalPrice: 120,
          items: ['Product 1', 'Product 2'],
        },
        { id: 2, status: 'Delivered', totalPrice: 80, items: ['Product 3'] },
        {
          id: 3,
          status: 'Pending',
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
