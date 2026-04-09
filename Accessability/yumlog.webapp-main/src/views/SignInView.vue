<template>
  <div class="register-container">
    <h1>Login</h1>

    <div v-if="error" class="alert alert-danger" role="alert" aria-live="polite">{{ error }}</div>
    <form @submit.prevent="handleLogin" class="register-form">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required placeholder="Deine E-Mail-Adresse" />
      </div>
      <div class="form-group">
        <label for="password">Passwort</label>
        <input type="password" id="password" v-model="password" required placeholder="Dein Passwort" />
      </div>
      <button type="submit" class="register-button" :disabled="loading">
        {{ loading ? 'Logging in...' : 'Login' }}
      </button>

      <div class="divider">
        <span>or</span>
      </div>

      <button type="button" class="google-button" @click="handleGoogleSignIn" :disabled="loading">
        <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google logo" />
        Continue with Google
      </button>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

export default {
  name: 'SignInView',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    const { loading, error } = storeToRefs(authStore)
    return { authStore, router, loading, error }
  },
  methods: {
    async handleLogin() {
      console.log('Login attempted with:', this.email)
      try {
        await this.authStore.loginWithEmail(this.email, this.password)
        this.router.push('/recipes')
      } catch (error) {
        console.error('Login failed:', error)
      }
    },
    async handleGoogleSignIn() {
      console.log('Google Sign-In attempted')
      try {
        await this.authStore.loginWithGoogle()
        this.router.push('/recipes')
      } catch (error) {
        console.error('Google sign-in failed:', error)
      }
    }
  }
}
</script>