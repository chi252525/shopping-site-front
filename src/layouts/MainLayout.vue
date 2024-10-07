<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar :style="{ height: '100px', backgroundColor: '#045926' }">
        <q-space />
        <div class="avatar-container">
          <img
            src="~/assets/images/logo.png"
            alt="Logo"
            class="circular-image"
          />
        </div>

        <q-tabs dense class="text-white">
          <q-tab name="男童" label="男童" />
          <q-tab name="女童" label="女童" />
          <q-tab name="購物須知" label="購物須知" />
        </q-tabs>

        <q-space />

        <q-btn flat round dense icon="person" />
        <q-btn flat round dense icon="tree" />
        <q-btn flat round dense icon="login" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
      <div class="bg-grey-2 text-black">
        <div
          class="q-pa-xl row justify-between items-center"
          style="min-height: 100px"
        >
          <div>
            <div class="flex">
              <div class="col-4">
                <div>聯絡我們 &nbsp;</div>
                <div>時間/ 週一～週五 09:00-17:00</div>
              </div>
            </div>
          </div>
          <div>
            <span>© 2024 葳兔童裝有限公司</span>
          </div>
          <div>
            <q-btn flat round dense icon="facebook" />
            <q-btn flat round dense icon="instagram" />
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
  width: 100px; /* 设置宽度 */
  height: 100px; /* 设置高度 */
  border-radius: 50%; /* 使容器变为圆形 */
  overflow: hidden; /* 超出部分隐藏 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.circular-image {
  width: 100%; /* 使图片宽度填满容器 */
  height: 100%; /* 使图片高度填满容器 */
  object-fit: cover; /* 保持图片的纵横比并裁剪 */
}
</style>
