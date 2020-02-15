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

export const clearButton = () => {
    elements.searchResPages.innerHTML = '';
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
};

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

const createButton = (page, type) => {
    return (
        `<button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
            </svg>
            <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        </button>`
    )
};

const renderButton = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);
    let button;

    if (page === 1 && pages > 1) {
        // Button to go to next page
        button = createButton(page, 'next')
    } else if (page < pages) {
        // Both button
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `
    } else if (page === pages && pages > 1) {
        // only button to go to prev page
        button = createButton(page, 'prev');
    } 
    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResult = (recipes, page = 1, resPerPage = 10) => {
    const start = (page -1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(cur => {
        renderRecipe(cur);
    })

    renderButton(page, recipes.length, resPerPage);
};