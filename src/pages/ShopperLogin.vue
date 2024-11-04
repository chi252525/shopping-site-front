<template>
  <q-page class="flex flex-center">
    <q-card class="my-card" bordered>
      <q-card-section>
        <div class="text-h5 text-center">會員登入</div>
      </q-card-section>
      <q-card-section>
        <q-btn @click="loginWithGoogle" color="primary" label="使用 Google 登入" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// 重定向到後端的 Google 登入頁面
const loginWithGoogle = () => {
  window.location.href = 'http://localhost:8080/api/oauth2/login';
};

// 處理 Google 的授權回調
const handleCallback = async () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  if (code) {
    try {
      // 使用模板字串和反引號來插入 code 變數
      const res = await fetch(`http://localhost:8080/api/oauth2/callback?code=${code}`, {
        method: 'GET',
      });

      const data = await res.json();

      // 假設後端成功回傳 JSON 格式回應
      if (data.status === 'success') {
        localStorage.setItem('token', data.token); // 儲存 JWT token
        console.log('Token:', data.token);
        
        // 重定向至首頁或其他指定頁面
        router.push('/');
      } else {
        alert('登入失敗');
      }
    } catch (error) {
      console.error(error);
      alert('登入失敗');
    }
  }
};

// 在組件掛載時檢查是否有 Google 回調參數
if (window.location.search.includes('code=')) {
  handleCallback();
}
</script>
