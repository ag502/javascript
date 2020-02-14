import Search from './models/Search'

/** Global state of the app
 * - Search object
 * - Current recipe object4
 * - Shopping list object
 * - Liked recipe
 */

const state = {};

const controlSearch = async () => {
    // 1) Get query from view
    const query = 'pizza'

    if (query) {
        // 2) New Search object and add to State
        state.search = new Search(query);

        // 3) PrePare UI for result

        // 4) Search for recipe
        await state.search.getResults();

        // 5) render results on UI
        console.log(state.search.recipe);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})
