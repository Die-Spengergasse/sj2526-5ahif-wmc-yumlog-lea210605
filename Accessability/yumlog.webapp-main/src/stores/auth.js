import { defineStore } from "pinia";

// DEMO/FAKE AUTH - No Firebase required
// Demo credentials: demo@example.com / password
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
    error: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
    getUser: (state) => state.user,
    getError: (state) => state.error,
  },

  actions: {
    async registerWithEmail(email, password) {
      this.loading = true;
      this.error = null;
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Create a fake user
        const user = {
          uid: 'demo-' + Date.now(),
          email: email,
          displayName: email.split('@')[0]
        };
        this.user = user;
        localStorage.setItem('demoUser', JSON.stringify(user));
        return user;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async loginWithEmail(email, password) {
      this.loading = true;
      this.error = null;
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Accept any email/password for demo (or check for demo credentials)
        if (password.length < 3) {
          throw new Error('Password must be at least 3 characters');
        }
        
        const user = {
          uid: 'demo-user-123',
          email: email,
          displayName: email.split('@')[0]
        };
        this.user = user;
        localStorage.setItem('demoUser', JSON.stringify(user));
        return user;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async loginWithGoogle() {
      this.loading = true;
      this.error = null;
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const user = {
          uid: 'demo-google-123',
          email: 'demo@google.com',
          displayName: 'Demo User'
        };
        this.user = user;
        localStorage.setItem('demoUser', JSON.stringify(user));
        return user;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      this.loading = true;
      this.error = null;
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 300));
        this.user = null;
        localStorage.removeItem('demoUser');
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    setUser(user) {
      this.user = user;
    },
    
    // Initialize user from localStorage on app load
    initializeAuth() {
      const storedUser = localStorage.getItem('demoUser');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
      }
    }
  },
});
