import {elements} from './base'

export const getInput = () => {
    return elements.searchInput.value;
};

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResult = () => {
    elements.searchResultList.innerHTML = '';
};

const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0)
        return `${newTitle.join(' ')} ...`
    } 
    return title;
}

const renderRecipe = recipe => {
    const {publisher, title, source_url, image_url, recipe_id} = recipe;
    const markup = 
    `<li>
        <a class="results__link results__link--active" href="#${recipe_id}">
            <figure class="results__fig">
                <img src=${image_url} alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(title)}</h4>
                <p class="results__author">${publisher}</p>
            </div>
        </a>
    </li>`;
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};

export const renderResult = (recipes) => {
    recipes.forEach(cur => {
        renderRecipe(cur);
    })
};