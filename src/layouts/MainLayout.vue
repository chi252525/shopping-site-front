<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar :style="{ height: '100px', backgroundColor: '#045926' }">
        <q-space />
        <div class="avatar-container">
          <router-link to="/">
            <img
              src="~/assets/images/logo.png"
              alt="Logo"
              class="square-image"
            />
          </router-link>
        </div>

        <q-tabs dense class="text-white">
          <q-tab name="男童" label="男童" />
          <q-tab name="女童" label="女童" />
          <q-tab name="購物須知" label="購物須知" />
        </q-tabs>

        <q-space />

        <router-link to="/mypage">
          <q-btn flat round dense icon="person" color="white" />
        </router-link>

        <router-link to="/shoppingcart">
          <q-btn flat round dense icon="shopping_cart" color="white">
            <q-badge floating color="red" rounded
          /></q-btn>
        </router-link>

        <router-link to="/login">
          <q-btn flat round dense icon="login" color="white" />
        </router-link>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
      <div class="bg-grey-2 text-black q-mt-xl">
        <div
          class="q-pa-xl row justify-between items-center"
          style="min-height: 100px"
        >
          <div>
            <div class="flex">
              <div class="col-4">
                <div>聯絡我們 &nbsp;</div>
                <div>
                  搜尋&nbsp; 常見問題&nbsp; 關於我們&nbsp; 服務條款&nbsp;
                  隱私政策&nbsp; 運輸政策&nbsp; 退換貨政策&nbsp;
                  廠商合作請進&nbsp;
                </div>
                <div>客服信箱： tutuweitu@gmail.com</div>
                <div>客服時間： 週一～週五 09:00-17:00</div>
                <div>© 2024 葳兔童裝有限公司</div>
              </div>
            </div>
          </div>
          <div></div>
          <div class="q-pa-md">
            <q-btn flat round dense icon="facebook" color="primary" />
            <q-btn flat round dense icon="instagram" color="primary" />
            <q-btn flat round dense icon="youtube" color="primary" />
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
// import { getCurrentInstance } from 'vue';

defineOptions({
  name: 'MainLayout',
});
// const instance = getCurrentInstance();
// const q = instance?.appContext.config.globalProperties.$q;
</script>
<style scoped>
.avatar-container {
  width: 80px; /* 设置宽度 */
  height: 80px; /* 设置高度 */
  border-radius: 0; /* 使容器变为圆形 */
  overflow: hidden; /* 超出部分隐藏 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.square-image {
  width: 100px; /* Set width */
  height: 100px; /* Set height to match width for a square */
  /* Remove any circular styling */
  border-radius: 0;
}
</style>
