import Search from './models/Search'
import Recipe from "./models/Recipe"
import * as searchView from './views/searchView';
import * as recipeView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base'

/** Global state of the app
 * - Search object
 * - Current recipe object4
 * - Shopping list object
 * - Liked recipe
 */

const state = {};

/**
 * Search Controller
 */
const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();

    if (query) {
        // 2) New Search object and add to State
        state.search = new Search(query);

        // 3) PrePare UI for result
        searchView.clearInput();
        searchView.clearResult();
        renderLoader(elements.searchRes);

        // 4) Search for recipe
        try {
            await state.search.getResults();
        } catch (error) {
            console.log(error);
        }
        
        // 5) render results on UI
        clearLoader();
        searchView.renderResult(state.search.result)
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchRes.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto);
        searchView.clearResult();
        searchView.clearButton();
        searchView.renderResult(state.search.result, goToPage);
    }
})

/**
 * Recipe Controller
 */

const controllRecipe = async (e) => {
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if (id) {
        state.recipe = new Recipe(id);
        
        try {
            await state.recipe.getRecipe();
            console.log(state.recipe.ingredients);
            state.recipe.parseIngredients();
        } catch (error) {
            console.log(error);
        }
        
        state.recipe.calcTime();
        state.recipe.calcServing();

        console.log(state.recipe);
        console.log(state.recipe.ingredients);
    }
};


['hashchange', 'load'].forEach(cur => {
    window.addEventListener(cur, controllRecipe);
})