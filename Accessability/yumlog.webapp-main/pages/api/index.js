const recipes = [
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

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,X-Requested-With,Accept,Accept-Version,Content-Length,Content-MD5,Content-Type,Date,X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Parse the request path
  const { pathname, searchParams } = new URL(req.url, `http://${req.headers.host}`);
  const method = req.method;
  
  // Health check
  if (pathname === '/api/health' && method === 'GET') {
    return res.status(200).json({ status: 'API is running' });
  }

  // Extract ID from path (e.g., /api/recipes/1)
  const recipeIdMatch = pathname.match(/^\/api\/recipes\/(\d+)$/);
  const recipeId = recipeIdMatch ? parseInt(recipeIdMatch[1]) : null;

  // GET /api/recipes or /api/recipes/:id
  if (pathname === '/api/recipes' && method === 'GET') {
    return res.status(200).json(recipes);
  }

  if (recipeIdMatch && method === 'GET') {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    return res.status(200).json(recipe);
  }

  // POST /api/recipes
  if (pathname === '/api/recipes' && method === 'POST') {
    const { title, description, ingredients, instructions, image } = req.body || {};
    
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
    return res.status(201).json(newRecipe);
  }

  // PUT /api/recipes/:id
  if (recipeIdMatch && method === 'PUT') {
    const recipeIndex = recipes.findIndex(r => r.id === recipeId);

    if (recipeIndex === -1) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    const { title, description, ingredients, instructions, image } = req.body || {};
    recipes[recipeIndex] = {
      ...recipes[recipeIndex],
      title: title || recipes[recipeIndex].title,
      description: description || recipes[recipeIndex].description,
      ingredients: ingredients !== undefined ? ingredients : recipes[recipeIndex].ingredients,
      instructions: instructions || recipes[recipeIndex].instructions,
      image: image || recipes[recipeIndex].image,
      updatedAt: new Date().toISOString()
    };

    return res.status(200).json(recipes[recipeIndex]);
  }

  // DELETE /api/recipes/:id
  if (recipeIdMatch && method === 'DELETE') {
    const recipeIndex = recipes.findIndex(r => r.id === recipeId);

    if (recipeIndex === -1) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    recipes.splice(recipeIndex, 1);
    return res.status(200).json({ message: 'Recipe deleted successfully' });
  }

  // No matching route
  return res.status(404).json({ error: 'Not found' });
}
