<template>
  <q-page class="flex flex-center">
    <q-card class="my-card" bordered>
      <q-card-section>
        <div class="text-h5 text-center">會員登入</div>
      </q-card-section>
      <q-card-section>
        <div id="googleButton" class="q-mb-md"></div>
        <q-input filled v-model="email" label="Email" type="email" />
        <q-input filled v-model="password" label="Passward" type="password" />
      </q-card-section>
      <q-card-actions>
        <q-btn @click="login" color="primary" label="登入" />
        <div id="googleButton"></div>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const router = useRouter();
const $q = useQuasar();

const handleCredentialResponse = (response) => {
  console.log('Encoded JWT ID token: ' + response.credential);

  // Here you would typically send the token to your backend
  // for verification and to get user details or create a new user

  // For this example, we'll just store the token and redirect
  localStorage.setItem('google_token', response.credential);
  router.push('/dashboard'); // Redirect to dashboard or home page
};

onMounted(() => {
  if (window.google) {
    window.google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID',
      callback: handleCredentialResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById('googleButton'),
      { theme: 'outline', size: 'large' } // customization attributes
    );
  } else {
    $q.notify({
      color: 'negative',
      position: 'top',
      message: 'Google Sign-In failed to load',
      icon: 'report_problem',
    });
  }
});
</script>

<style scoped>
.user-login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
