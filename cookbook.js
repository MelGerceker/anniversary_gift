// Load recipes array
let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

// 2. Render the recipe grid
function renderRecipes() {
    const grid = document.querySelector('.recipe-grid');
    grid.innerHTML = ''; // Clear existing

    if (recipes.length === 0) {
        grid.innerHTML = '<p>No recipes yet. Add one!</p>';
        return;
    }

    recipes.forEach(recipe => {
        const note = document.createElement('div');
        note.className = 'recipe-note';
        note.dataset.id = recipe.id;
        note.innerHTML = `
  <div class="note-title">${recipe.title}</div>
  <div class="note-comment hidden">${recipe.comment}</div>
  <div class="note-actions">
    <button class="edit-btn">✏️</button>
    <button class="delete-btn">❌</button>
  </div>
`;
        grid.appendChild(note);
    });
}

window.addEventListener('DOMContentLoaded', renderRecipes);


// Unique recipe ID
function generateId() {
    return Date.now().toString();
}

// Adding recipes
document.getElementById('add-recipe-btn').addEventListener('click', () => {
    const titleInput = document.getElementById('recipe-title');
    const commentInput = document.getElementById('recipe-comment');

    const title = titleInput.value.trim();
    const comment = commentInput.value.trim();

    if (title === '') {
        alert('Please enter a title.');
        return;
    }

    const newRecipe = {
        id: generateId(),
        title,
        comment
    };

    recipes.push(newRecipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    renderRecipes();

    // clear the form fields
    titleInput.value = '';
    commentInput.value = '';
});
