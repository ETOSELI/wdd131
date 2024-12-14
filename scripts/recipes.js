// JavaScript for Favorite Recipes Website

document.addEventListener("DOMContentLoaded", () => {
    // Local Storage Management
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

    // Save Recipe Button Functionality
    const saveButtons = document.querySelectorAll(".save-recipe");
    saveButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const recipeCard = e.target.closest(".recipe-card");
            const recipeTitle = recipeCard.querySelector("h3").textContent;

            if (!savedRecipes.includes(recipeTitle)) {
                savedRecipes.push(recipeTitle);
                localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
                alert(`${recipeTitle} has been saved!`);
            } else {
                alert(`${recipeTitle} is already saved!`);
            }
        });
    });

    // Search Functionality
    const searchForm = document.getElementById("search-form");
    const searchResults = document.getElementById("search-results");

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = document.getElementById("ingredients").value.toLowerCase();

        const matchingRecipes = Array.from(document.querySelectorAll(".recipe-card")).filter(card => {
            const description = card.querySelector("p").textContent.toLowerCase();
            return description.includes(query);
        });

        searchResults.innerHTML = ""; // Clear previous results

        if (matchingRecipes.length > 0) {
            matchingRecipes.forEach(recipe => {
                const clone = recipe.cloneNode(true);
                searchResults.appendChild(clone);
            });
        } else {
            searchResults.innerHTML = "<p>No recipes found matching your search.</p>";
        }
    });

    // Fun Facts Counters
    const recipesSharedCounter = document.getElementById("recipes-shared");
    const usersActiveCounter = document.getElementById("users-active");

    let recipesShared = 100; // Starting value for demo purposes
    let usersActive = 50;    // Starting value for demo purposes

    const incrementCounter = (element, targetValue) => {
        let currentValue = 0;
        const increment = Math.ceil(targetValue / 100);
        const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(interval);
            }
            element.textContent = currentValue;
        }, 30);
    };

    incrementCounter(recipesSharedCounter, recipesShared);
    incrementCounter(usersActiveCounter, usersActive);
});
