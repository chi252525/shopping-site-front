<template>
  <q-page-container>
    <q-container>
      <div class="row q-mt-md justify-center">
        <!-- Cart Items -->
        <div class="col-xs-12 col-md-4 q-px-md">
          <q-list bordered separator>
            <q-item
              v-for="(item, index) in cartItems"
              :key="index"
              class="q-py-md"
            >
              <q-item-section avatar>
                <q-img :src="item.image" style="width: 100px; height: 100px" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-subtitle1">{{
                  item.name
                }}</q-item-label>
                <q-item-label caption>SKU: {{ item.sku }}</q-item-label>
                <q-item-label caption>數量: {{ item.quantity }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label class="text-subtitle2"
                  >${{ (item.price * item.quantity).toFixed(2) }}</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <!-- Order Summary -->
        <div class="col-xs-12 col-md-4">
          <q-card class="q-pa-md">
            <h3 class="text-h5 q-mb-md">訂單總計</h3>
            <div class="row justify-between q-mb-sm">
              <span>小計:</span>
              <span>${{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="row justify-between q-mb-sm">
              <span>運費:</span>
              <span>${{ tax.toFixed(2) }}</span>
            </div>
            <div class="row justify-between q-mb-md">
              <span>折扣:</span>
              <span>${{ shipping.toFixed(2) }}</span>
            </div>
            <q-separator class="q-mb-md" />
            <div class="row justify-between text-subtitle1 text-weight-bold">
              <span>總額:</span>
              <span>${{ total.toFixed(2) }}</span>
            </div>
            <q-btn
              color="primary"
              label="確認下單"
              class="full-width q-mt-md"
              @click="proceedToPayment"
            />
          </q-card>
        </div>

        <!-- Shipping Information -->
        <div class="col-6">
          <h3 class="text-h5 q-mb-md">收件人資料</h3>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <q-input
                  filled
                  v-model="shippingInfo.firstName"
                  label="First Name"
                  :rules="[(val) => !!val || 'Field is required']"
                />
              </div>
              <div class="col-12 col-md-6">
                <q-input
                  filled
                  v-model="shippingInfo.lastName"
                  label="Last Name"
                  :rules="[(val) => !!val || 'Field is required']"
                />
              </div>
            </div>
            <q-input
              filled
              v-model="shippingInfo.address"
              label="Address"
              :rules="[(val) => !!val || 'Field is required']"
            />
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <q-input
                  filled
                  v-model="shippingInfo.city"
                  label="City"
                  :rules="[(val) => !!val || 'Field is required']"
                />
              </div>
              <div class="col-12 col-md-3">
                <q-input
                  filled
                  v-model="shippingInfo.state"
                  label="State"
                  :rules="[(val) => !!val || 'Field is required']"
                />
              </div>
              <div class="col-12 col-md-3">
                <q-input
                  filled
                  v-model="shippingInfo.zipCode"
                  label="Zip Code"
                  :rules="[(val) => !!val || 'Field is required']"
                />
              </div>
            </div>
            <q-btn color="secondary" label="儲存為常用地址" type="submit" />
          </q-form>
        </div>
      </div>
    </q-container>
  </q-page-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

// Mock cart items (you would typically get this from your store)
const cartItems = ref([
  {
    name: 'Example Product 1',
    sku: 'EX-123456',
    price: 99.99,
    quantity: 2,
    image: 'https://cdn.quasar.dev/img/mountains.jpg',
  },
  {
    name: 'Example Product 2',
    sku: 'EX-789012',
    price: 49.99,
    quantity: 1,
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
  },
  {
    name: 'Example Product 2',
    sku: 'EX-789012',
    price: 49.99,
    quantity: 1,
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
  },
]);

// Computed properties for order summary
const subtotal = computed(() =>
  cartItems.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
);
const tax = computed(() => subtotal.value * 0.08); // Assuming 8% tax
const shipping = ref(10); // Flat shipping rate
const total = computed(() => subtotal.value + tax.value + shipping.value);

// Shipping information
const shippingInfo = ref({
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
});

const onSubmit = () => {
  // Here you would typically save the shipping information
  $q.notify({
    color: 'positive',
    position: 'top',
    message: 'Shipping information saved',
    icon: 'check',
  });
};

const proceedToPayment = () => {
  // Here you would typically navigate to the payment page or open a payment modal
  $q.notify({
    color: 'info',
    position: 'top',
    message: 'Proceeding to payment...',
    icon: 'payment',
  });
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
