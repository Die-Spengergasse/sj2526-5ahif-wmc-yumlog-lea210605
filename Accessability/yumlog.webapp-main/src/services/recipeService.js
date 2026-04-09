import axios from 'axios';

// Nutze Umgebungsvariable oder localhost für Entwicklung
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const recipeService = {
  // Get all recipes
  async getRecipes() {
    try {
      const response = await apiClient.get('/recipes');
      return response.data;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  },

  // Get single recipe
  async getRecipe(id) {
    try {
      const response = await apiClient.get(`/recipes/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching recipe:', error);
      throw error;
    }
  },

  // Create new recipe
  async createRecipe(recipeData) {
    try {
      const response = await apiClient.post('/recipes', recipeData);
      return response.data;
    } catch (error) {
      console.error('Error creating recipe:', error);
      throw error;
    }
  },

  // Update recipe
  async updateRecipe(id, recipeData) {
    try {
      const response = await apiClient.put(`/recipes/${id}`, recipeData);
      return response.data;
    } catch (error) {
      console.error('Error updating recipe:', error);
      throw error;
    }
  },

  // Delete recipe
  async deleteRecipe(id) {
    try {
      const response = await apiClient.delete(`/recipes/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting recipe:', error);
      throw error;
    }
  },

  // Health check
  async healthCheck() {
    try {
      const response = await apiClient.get('/health');
      return response.data;
    } catch (error) {
      console.error('API health check failed:', error);
      throw error;
    }
  }
};

export default apiClient;
