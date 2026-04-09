export const recipes = [
  {
    id: '1',
    title: "Spaghetti Bolognese",
    description: "Ein klassisches italienisches Gericht mit herzhafter Fleischsauce.",
    duration: 45,
    imageUrl: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop",
    instructions:
      "Zuerst die Spaghetti kochen. Währenddessen das Hackfleisch anbraten und die Tomatensauce hinzufügen. Mit den gekochten Spaghetti servieren.",
    ingredients: [
      {
        id: 1,
        rezept_id: 1,
        name: "Spaghetti",
        menge: "200g",
      },
      {
        id: 2,
        rezept_id: 1,
        name: "Hackfleisch",
        menge: "300g",
      },
      {
        id: 3,
        rezept_id: 1,
        name: "Tomatensauce",
        menge: "400ml",
      },
    ],
  },
  {
    id: "2",
    title: "Pancakes",
    description: "Weiche und fluffige Pfannkuchen mit Ahornsirup.",
    duration: 20,
    imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop",
    instructions:
      "Alle Zutaten verrühren, den Teig portionsweise in der Pfanne ausbacken.",
    ingredients: [
      {
        id: 4,
        rezept_id: 2,
        name: "Mehl",
        menge: "200g",
      },
      {
        id: 5,
        rezept_id: 2,
        name: "Milch",
        menge: "300ml",
      },
      {
        id: 6,
        rezept_id: 2,
        name: "Eier",
        menge: "2 Stück",
      },
      {
        id: 7,
        rezept_id: 2,
        name: "Zucker",
        menge: "2 EL",
      },
    ],
  },
  {
    id: "3",
    title: "Caesar Salad",
    description: "Ein frischer, knuspriger Salat mit Caesar-Dressing.",
    duration: 15,
    imageUrl: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&h=600&fit=crop",
    instructions:
      "Salat waschen, Dressing zubereiten und zusammen mit Croutons und Parmesan anrichten.",
    ingredients: [
      {
        id: 8,
        rezept_id: 3,
        name: "Römersalat",
        menge: "1 Kopf",
      },
      {
        id: 9,
        rezept_id: 3,
        name: "Croutons",
        menge: "100g",
      },
      {
        id: 10,
        rezept_id: 3,
        name: "Parmesan",
        menge: "50g",
      },
      {
        id: 11,
        rezept_id: 3,
        name: "Caesar-Dressing",
        menge: "150ml",
      },
    ],
  },
  {
    id: "4",
    title: "Margherita Pizza",
    description: "Klassische italienische Pizza mit Tomate, Mozzarella und Basilikum.",
    duration: 30,
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop",
    instructions:
      "Teig ausrollen, mit Tomatensauce bestreichen, Mozzarella und Basilikum darauf verteilen. Bei 220°C für 12-15 Minuten backen.",
    ingredients: [
      {
        id: 12,
        rezept_id: 4,
        name: "Pizzateig",
        menge: "400g",
      },
      {
        id: 13,
        rezept_id: 4,
        name: "Tomatensauce",
        menge: "200ml",
      },
      {
        id: 14,
        rezept_id: 4,
        name: "Mozzarella",
        menge: "250g",
      },
      {
        id: 15,
        rezept_id: 4,
        name: "Frisches Basilikum",
        menge: "1 Bund",
      },
    ],
  },
  {
    id: "5",
    title: "Sushi Rolls",
    description: "Hausgemachte Sushi-Rollen mit frischem Fisch und Gemüse.",
    duration: 60,
    imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop",
    instructions:
      "Reis kochen und würzen. Nori-Blatt mit Reis belegen, Füllung darauf verteilen und fest aufrollen. In Stücke schneiden.",
    ingredients: [
      {
        id: 16,
        rezept_id: 5,
        name: "Sushi-Reis",
        menge: "300g",
      },
      {
        id: 17,
        rezept_id: 5,
        name: "Nori-Blätter",
        menge: "10 Stück",
      },
      {
        id: 18,
        rezept_id: 5,
        name: "Lachs",
        menge: "200g",
      },
      {
        id: 19,
        rezept_id: 5,
        name: "Avocado",
        menge: "2 Stück",
      },
      {
        id: 20,
        rezept_id: 5,
        name: "Gurke",
        menge: "1 Stück",
      },
    ],
  },
  {
    id: "6",
    title: "Chocolate Chip Cookies",
    description: "Knusprige Cookies mit Schokoladenstückchen - perfekt zum Kaffee.",
    duration: 25,
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=600&fit=crop",
    instructions:
      "Butter und Zucker cremig rühren, Eier hinzufügen. Mehl unterheben und Schokoladenstückchen einrühren. Kleckse auf Backblech setzen und bei 180°C backen.",
    ingredients: [
      {
        id: 21,
        rezept_id: 6,
        name: "Butter",
        menge: "200g",
      },
      {
        id: 22,
        rezept_id: 6,
        name: "Zucker",
        menge: "150g",
      },
      {
        id: 23,
        rezept_id: 6,
        name: "Mehl",
        menge: "300g",
      },
      {
        id: 24,
        rezept_id: 6,
        name: "Schokoladenstückchen",
        menge: "200g",
      },
      {
        id: 25,
        rezept_id: 6,
        name: "Eier",
        menge: "2 Stück",
      },
    ],
  },
  {
    id: "7",
    title: "Burger Deluxe",
    description: "Saftiger Burger mit allen Extras - ein amerikanischer Klassiker.",
    duration: 35,
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
    instructions:
      "Patties formen und braten. Brötchen toasten, mit Sauce bestreichen, Salat, Tomate, Patty und Käse schichten.",
    ingredients: [
      {
        id: 26,
        rezept_id: 7,
        name: "Rindfleisch",
        menge: "400g",
      },
      {
        id: 27,
        rezept_id: 7,
        name: "Burger-Brötchen",
        menge: "4 Stück",
      },
      {
        id: 28,
        rezept_id: 7,
        name: "Cheddar-Käse",
        menge: "4 Scheiben",
      },
      {
        id: 29,
        rezept_id: 7,
        name: "Salat & Tomate",
        menge: "nach Belieben",
      },
    ],
  },
  {
    id: "8",
    title: "Thai Green Curry",
    description: "Aromatisches thailändisches Curry mit Kokosmilch und Gemüse.",
    duration: 40,
    imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=600&fit=crop",
    instructions:
      "Curry-Paste in Öl anbraten, Kokosmilch hinzufügen, Gemüse und Hähnchen einkochen lassen. Mit Reis servieren.",
    ingredients: [
      {
        id: 30,
        rezept_id: 8,
        name: "Grüne Curry-Paste",
        menge: "3 EL",
      },
      {
        id: 31,
        rezept_id: 8,
        name: "Kokosmilch",
        menge: "400ml",
      },
      {
        id: 32,
        rezept_id: 8,
        name: "Hähnchenbrust",
        menge: "300g",
      },
      {
        id: 33,
        rezept_id: 8,
        name: "Gemüse (Paprika, Zucchini)",
        menge: "400g",
      },
    ],
  },
];
