// Sample data for recipe cards
const recipes = [
    { title: 'Spaghetti Carbonara', image: 'spa.jpeg', description: 'Delicious pasta dish with creamy sauce.', category: 'Pasta' },
    { title: 'Homemade Pizza', image: 'pizza.jpeg', description: 'Freshly baked pizza with your favorite toppings.', category: 'Pizza' },
    { title: 'Chocolate Chip Cookies', image: 'cookies.jpeg', description: 'Classic cookies that are soft and chewy.', category: 'Dessert' }
  ];
  
  // Function to generate recipe cards
  function generateRecipeCards() {
    const recipesSection = document.querySelector('.recipes');
    
    // Group recipes by category
    const groupedRecipes = recipes.reduce((acc, recipe) => {
      acc[recipe.category] = acc[recipe.category] || [];
      acc[recipe.category].push(recipe);
      return acc;
    }, {});
  
    // Generate cards for each category
    for (let category in groupedRecipes) {
      const categorySection = document.createElement('div');
      categorySection.classList.add('recipe-category');
      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = category;
      categorySection.appendChild(categoryTitle);
      groupedRecipes[category].forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.title}">
          <h2>${recipe.title}</h2>
          <p>${recipe.description}</p>
        `;
        categorySection.appendChild(card);
      });
      recipesSection.appendChild(categorySection);
    }
  }
  
  // Call the function to generate recipe cards
  generateRecipeCards();
  