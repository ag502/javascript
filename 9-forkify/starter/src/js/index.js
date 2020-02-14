import Search from './models/Search'
import * as searchView from './views/searchView'
import {elements, renderLoader, clearLoader} from './views/base'

/** Global state of the app
 * - Search object
 * - Current recipe object4
 * - Shopping list object
 * - Liked recipe
 */

const state = {};

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
        await state.search.getResults();

        // 5) render results on UI
        clearLoader();
        searchView.renderResult(state.search.result)
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})
