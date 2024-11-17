// Datos de ejemplo de recetas
const recipes = [
    {
        id: 1,
        title: "Pasta Carbonara",
        description: "Deliciosa pasta italiana con salsa cremosa de huevo, queso pecorino y panceta",
        time: "30 min",
        difficulty: "Media",
        portions: "4 personas",
        ingredients: [
            "400g espaguetis",
            "200g panceta",
            "4 yemas de huevo",
            "100g queso pecorino",
            "Pimienta negra"
        ],
        image: "image/PastaCarbonatada.webp"
    },
    {
        id: 2,
        title: "Ensalada César",
        description: "Ensalada clásica con pollo a la parrilla, crutones caseros y aderezo César tradicional",
        time: "15 min",
        difficulty: "Fácil",
        portions: "2 personas",
        ingredients: [
            "Lechuga romana",
            "Pechuga de pollo",
            "Crutones",
            "Queso parmesano",
            "Aderezo César"
        ],
        image: "image/caesarsalad.webp"
    },
    {
        id: 3,
        title: "Tacos al Pastor",
        description: "Auténticos tacos mexicanos con carne marinada en adobo y piña fresca",
        time: "45 min",
        difficulty: "Media",
        portions: "6 personas",
        ingredients: [
            "Carne de cerdo",
            "Adobo de chiles",
            "Piña",
            "Tortillas de maíz",
            "Cilantro y cebolla"
        ],
        image: "image/tacosalpastor.jpg"
    },
    {
        id: 4,
        title: "Sushi Roll California",
        description: "Roll de sushi con pepino, aguacate y cangrejo, cubierto de semillas de sésamo",
        time: "40 min",
        difficulty: "Media",
        portions: "3 personas",
        ingredients: [
            "Arroz de sushi",
            "Alga nori",
            "Pepino",
            "Aguacate",
            "Cangrejo"
        ],
        image: "image/SushiRollCalifornia.jpeg"
    }
];

// Función para generar las tarjetas de recetas
function generateRecipeCards() {
    const container = document.getElementById('recipeContainer');
    container.innerHTML = '';

    recipes.forEach(recipe => {
        const difficultyClass = {
            'Fácil': 'difficulty-easy',
            'Media': 'difficulty-medium',
            'Difícil': 'difficulty-hard'
        }[recipe.difficulty];

        const card = `
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="card recipe-card" onclick="toggleFavorite(this)">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
                    <div class="card-body">
                        <h5 class="card-title">${recipe.title}</h5>
                        <p class="card-text">${recipe.description}</p>
                        <div class="recipe-stats mb-2">
                            <i class="bi bi-clock"></i> ${recipe.time} | 
                            <i class="bi bi-people"></i> ${recipe.portions}
                        </div>
                        <h6>Ingredientes principales:</h6>
                        <ul class="ingredients-list">
                            ${recipe.ingredients.slice(0,3).map(ing => `<li>${ing}</li>`).join('')}
                        </ul>
                        <div class="d-flex justify-content-between mt-3">
                            <span class="badge bg-primary">${recipe.time}</span>
                            <span class="badge ${difficultyClass}">${recipe.difficulty}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Función para marcar como favorito
function toggleFavorite(card) {
    card.classList.toggle('favorite');
    const title = card.querySelector('.card-title').textContent;
    if (card.classList.contains('favorite')) {
        showToast(`¡${title} añadida a favoritos!`);
    }
}

// Función para mostrar receta aleatoria
function showRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const recipe = recipes[randomIndex];
    alert(`¡Prueba esta receta: ${recipe.title}!\n\nTiempo de preparación: ${recipe.time}\nDificultad: ${recipe.difficulty}\nPorciones: ${recipe.portions}`);
}

// Mostrar toast (notificación)
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    generateRecipeCards();
});