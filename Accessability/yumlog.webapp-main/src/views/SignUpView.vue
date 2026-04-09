<template>
  <div class="register-container">
    <h1>Account erstellen</h1>
    
    <div v-if="error" class="alert alert-danger" role="alert" aria-live="polite">{{ error }}</div>
    <form @submit.prevent="handleRegister" class="register-form">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required placeholder="Deine E-Mail-Adresse" />
      </div>
      <div class="form-group">
        <label for="password">Passwort</label>
        <input type="password" id="password" v-model="password" required placeholder="Dein Passwort" />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Passwort bestätigen</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required
          placeholder="Confirm your password" />
      </div>
      <button type="submit" class="register-button" :disabled="loading">
        {{ loading ? 'Registering...' : 'Sign up' }}
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
  name: 'SignUpView',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    const { loading, error } = storeToRefs(authStore)
    return { authStore, router, loading, error }
  },
  methods: {
    async handleRegister() {
      if (this.password !== this.confirmPassword) {
        this.error = 'Passwords do not match!'
        return
      }

      console.log('Registration attempted with:', this.email)
      try {
        await this.authStore.registerWithEmail(this.email, this.password)
        this.router.push('/recipes')
      } catch (error) {
        console.error('Registration failed:', error)
      }
    },
    async handleGoogleSignIn() {
      console.log('Google Sign-In attempted')
      try {
        await this.authStore.loginWithGoogle()
        this.router.push('/bikes')
      } catch (error) {
        console.error('Google sign-in failed:', error)
      }
    }
  }
}
</script>