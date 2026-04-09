import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const RECIPES_FILE = path.join(__dirname, 'recipes.json');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize recipes file
const initRecipes = () => {
  if (!fs.existsSync(RECIPES_FILE)) {
    const defaultRecipes = [
      {
        id: 1,
        title: 'Spaghetti Carbonara',
        description: 'Klassisches italienisches Pasta-Gericht',
        ingredients: ['Spaghetti', 'Eier', 'Speck', 'Parmigiano'],
        instructions: 'Pasta kochen, Sauce zubereiten, vermischen',
        image: 'https://via.placeholder.com/300?text=Carbonara',
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        title: 'Caesar Salad',
        description: 'Frischer Salat mit Knoblauch-Dressing',
        ingredients: ['Romaine Salat', 'Croutons', 'Parmigiano', 'Caesar Dressing'],
        instructions: 'Salat waschen, Dressing anrühren, vermischen',
        image: 'https://via.placeholder.com/300?text=Caesar+Salad',
        createdAt: new Date().toISOString()
      }
    ];
    fs.writeFileSync(RECIPES_FILE, JSON.stringify(defaultRecipes, null, 2));
  }
};

const getRecipes = () => {
  try {
    const data = fs.readFileSync(RECIPES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const saveRecipes = (recipes) => {
  fs.writeFileSync(RECIPES_FILE, JSON.stringify(recipes, null, 2));
};

// Routes

// GET all recipes
app.get('/api/recipes', (req, res) => {
  const recipes = getRecipes();
  res.json(recipes);
});

// GET single recipe
app.get('/api/recipes/:id', (req, res) => {
  const recipes = getRecipes();
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  
  if (!recipe) {
    return res.status(404).json({ error: 'Recipe not found' });
  }
  
  res.json(recipe);
});

// POST create recipe
app.post('/api/recipes', (req, res) => {
  const recipes = getRecipes();
  const { title, description, ingredients, instructions, image } = req.body;
  
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }
  
  const newRecipe = {
    id: Math.max(...recipes.map(r => r.id), 0) + 1,
    title,
    description,
    ingredients: ingredients || [],
    instructions: instructions || '',
    image: image || 'https://via.placeholder.com/300?text=Recipe',
    createdAt: new Date().toISOString()
  };
  
  recipes.push(newRecipe);
  saveRecipes(recipes);
  
  res.status(201).json(newRecipe);
});

// PUT update recipe
app.put('/api/recipes/:id', (req, res) => {
  const recipes = getRecipes();
  const recipeIndex = recipes.findIndex(r => r.id === parseInt(req.params.id));
  
  if (recipeIndex === -1) {
    return res.status(404).json({ error: 'Recipe not found' });
  }
  
  const { title, description, ingredients, instructions, image } = req.body;
  recipes[recipeIndex] = {
    ...recipes[recipeIndex],
    title: title || recipes[recipeIndex].title,
    description: description || recipes[recipeIndex].description,
    ingredients: ingredients || recipes[recipeIndex].ingredients,
    instructions: instructions || recipes[recipeIndex].instructions,
    image: image || recipes[recipeIndex].image,
    updatedAt: new Date().toISOString()
  };
  
  saveRecipes(recipes);
  res.json(recipes[recipeIndex]);
});

// DELETE recipe
app.delete('/api/recipes/:id', (req, res) => {
  const recipes = getRecipes();
  const filteredRecipes = recipes.filter(r => r.id !== parseInt(req.params.id));
  
  if (filteredRecipes.length === recipes.length) {
    return res.status(404).json({ error: 'Recipe not found' });
  }
  
  saveRecipes(filteredRecipes);
  res.json({ message: 'Recipe deleted successfully' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running' });
});

// Start server
app.listen(PORT, () => {
  initRecipes();
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📝 API Documentation: http://localhost:${PORT}/api`);
});

export default app;
