<template>
  <div>
    <button @click="googleLogin">使用 Google 登入</button>
  </div>
</template>

<script>
export default {
  methods: {
    googleLogin() {
      window.location.href = 'http://localhost:8080/api/oauth2/login';
    },
  },
};
</script>
