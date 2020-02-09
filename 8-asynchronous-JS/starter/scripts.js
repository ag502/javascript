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

/*
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
*/

// From CallBack Hell to Promise

/*
const getIDS = new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve([523, 883, 432, 974]);
    }, 1500)
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {
                title: 'fresh tomato pasta',
                publisher: 'Jonas'
            };
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
}

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {
                title: 'Italian Pizza',
                publisher: 'Jonas'
            }
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher)
    })
};

getIDS
.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Jonas');
})
.then(recipe => {
    console.log(recipe);
})
.catch(error => {
    console.log('ERROR!');
});
*/

// From Promise to Async/Await

/*
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve([523, 883, 432, 974]);
    }, 1500)
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {
                title: 'fresh tomato pasta',
                publisher: 'Jonas'
            };
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
}

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {
                title: 'Italian Pizza',
                publisher: 'Jonas'
            }
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher)
    })
};

async function getRecipeAW() {
    const IDs = await getIDs;
    console.log(IDs);

    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);

    const related = await getRelated('Johnas');
    console.log(related);

    return recipe;
}

getRecipeAW().then(result => console.log(result));

// console.log(rec);
*/

// AJAX and APIs

function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
    .then(result => {
        console.log(result);
        return result.json();
    })
    .then(data => {
        // console.log(data);
        const today = data.consolidated_weather[0]
        console.log(`temperature in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
    })
    .catch(error => {
        console.log(error);
    })
}

getWeather(2487956);
getWeather(44418);