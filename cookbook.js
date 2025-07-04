// Load recipes array
let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

// Render the recipe grid
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
     <button class="edit-btn" aria-label="Edit">
        <img src="assets/edit-icon.svg" alt="Edit">
     </button>
     </div>
`;
        grid.appendChild(note);
    });
}

// Delete Button Logic
const popupDeleteBtn = document.getElementById('delete-recipe-btn');

popupDeleteBtn.addEventListener('click', () => {
    if (!editingRecipeId) return;
    recipes = recipes.filter(recipe => recipe.id !== editingRecipeId);

    // Save to localStorage
    localStorage.setItem('recipes', JSON.stringify(recipes));

    renderRecipes();
    editPopup.classList.add('hidden');
    editingRecipeId = null;
});


window.addEventListener('DOMContentLoaded', renderRecipes);

// Popup references
const editPopup = document.getElementById('edit-popup');
const editTitleInput = document.getElementById('edit-title');
const editCommentInput = document.getElementById('edit-comment');
const saveBtn = document.getElementById('save-edit-btn');
const cancelBtn = document.getElementById('cancel-edit-btn');

let editingRecipeId = null;

// Edit button handler
document.querySelector('.recipe-grid').addEventListener('click', function (e) {
    const note = e.target.closest('.recipe-note');
    const recipeId = note?.dataset.id;

    if (e.target.closest('.edit-btn')) {
        const recipe = recipes.find(r => r.id === recipeId);
        if (!recipe) return;

        editingRecipeId = recipeId;
        editTitleInput.value = recipe.title;
        editCommentInput.value = recipe.comment;
        editPopup.classList.remove('hidden');
    }
});

// Save changes
saveBtn.addEventListener('click', () => {
    const updatedTitle = editTitleInput.value.trim();
    const updatedComment = editCommentInput.value.trim();

    const recipe = recipes.find(r => r.id === editingRecipeId);
    if (recipe) {
        recipe.title = updatedTitle;
        recipe.comment = updatedComment;
        localStorage.setItem('recipes', JSON.stringify(recipes));
        renderRecipes();
    }

    editPopup.classList.add('hidden');
    editingRecipeId = null;
});

// Cancel edit
cancelBtn.addEventListener('click', () => {
    editPopup.classList.add('hidden');
    editingRecipeId = null;
});

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
