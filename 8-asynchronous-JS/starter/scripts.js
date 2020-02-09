// Examples of Asynchronous

/*
const second = () => {
    setTimeout(() => {
        console.log('Async Hey there');
    }, 2000)
}

const first = () => {
    console.log('Hey there');
    second();
    console.log('The end');
}

first();
*/

// The Old Way: Asynchronous JavaScript with CallBacks

function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);

        setTimeout((id) => {
            const recipe = {
                title: 'fresh tomato pasta',
                publisher: 'Jonas'
            }
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe = {
                    title: 'Italian Pizze',
                    publisher: 'Jonas'
                }
                console.log(recipe);
            }, 1500, recipe.publisher)
        }, 1500, recipeID[2]);
    }, 1500);
}

getRecipe();