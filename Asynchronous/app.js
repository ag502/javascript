// const test = () => {
//     setTimeout(() => {
//         console.log("Start of code");
//         alert("Notice Me!");
//         console.log("End of code");
//     }, 1000)
// }
//
// const test2 = () => {
//     console.log("Now I get attention");
// }
//
// test()
// test2()

// const logCall = () => {
//     console.log('locCall was called back.');
// };

// setTimeout(logCall, 3000);
// setTimeout(() => {
//     console.log('The function was called back.')
// }, 0)
//
// console.log('More code.')

// const students = [
//     {name: 'Mary', score: 90, school: 'East'},
//     {name: 'James', score: 100, school: 'East'},
//     {name: 'Steve', score: 40, school: 'West'}
// ]
//
// // 콜백함수를 가지고 있음에도 비동기로 실행되지 않은 이유
// // => setTimeout을 안써서?
// // => = event loop을 사용하지 않음
// const processStudent = (data, callback) => {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].school.toLocaleLowerCase() === 'east') {
//             if (typeof callback === 'function') {
//                 callback(data[i])
//             }
//         }
//     }
// }

// processStudent(students, (element) => {
//     console.log(element)
// })

// console.log('Before Determine Total')
//
// const determineTotal = () => {
//     let total = 0
//     let count = 0
//
//     processStudent(students, (obj) => {
//         total += obj.score
//         count++
//     })
//     console.log(`Total score ${total} - Total Count: ${count}`)
// }
//
// setTimeout(determineTotal, 0)
//
// console.log('End Of Code')

// const asyncFunction = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('asyncFunction has resolved.')
//         }, 4000);
//     })
// }
//
// const asyncFunction2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('asyncFunction2 is done')
//         });
//     }, 3000)
// }
//
// asyncFunction()
//     .then(val => {
//         console.log("Yeah!!!" + val);
//         return asyncFunction2();
//     })
//     .then(val => {
//         console.log("Second promise: " + val);
//     })

// const promise = asyncFunction();
// promise.then((val) => {
//     console.log("Yeah!!!" + val);
//     return asyncFunction2();
// });

// console.log('The code is Asynchronous.')

// const swapi = (num) => {
//     const url = "https://swapi.dev/api/people/"
//     fetch(url + num + "/")
//         .then(result => {
//             return result.json();
//         })
//         .then(data => {
//             console.log(data)
//             const {homeworld} = data;
//             return fetch(homeworld);
//         })
//         .then(hwdata => {
//             return hwdata.json();
//         })
//         .then(hwobj => console.log(hwobj))
//         .catch(err => console.log(err))
// }
//
// swapi(9);

// fetch('https://jsonplaceholder.typicode.com/todos/5')
// .then(data => data.json())
// .then(obj => console.log(obj))

// const todo = {
//     completed: false,
//     userId: 1,
//     title: "Learn Promises"
// };
//
// fetch('https://jsonplaceholder.typicode.com/todos/', {
//     method: 'POST',
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify(todo)
// })
// .then(resp => resp.json())
// .then(obj => console.log(obj))
// .catch(reject => console.log(err))

// const MAINAPP = (function(nsp) {
//     const URL = 'https://jsonplaceholder.typicode.com/';
//
//     fetch(URL + 'posts/')
//         .then(response1 => response1.json())
//         .then(posts => nsp.posts = posts)
//         .catch(err => console.log(`Problem retrieving posts: ${err}`))
//
//     fetch(URL + 'comments/')
//         .then(response2 => response2.json())
//         .then(comments => nsp.comments = comments)
//         .catch(err => console.log(`Problem retrieving posts: ${err}`))
//
//     fetch(URL + 'todos/')
//         .then(response1 => response1.json())
//         .then(todos => nsp.todos = todos)
//         .catch(err => console.log(`Problem retrieving posts: ${err}`))
//
//     return nsp;
// })({})
//
// console.log(MAINAPP);

// const a = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Done")
//     }, 4000)
// })
//
// a.then(value => {
//     console.log(value)
// }, (val) => {
//     console.log('rejected' + val)
// });

// let setTimeoutP = (time) =>  {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//             console.log('a')
//         }, time)
//     })
// }
//
// setTimeoutP(2000)
// .then(() => {
//     console.log("DONE")
//     return setTimeoutP(4000)
// })
// .then(() => {
//     console.log("DONE")
// })

// const massiveProcess = (num) => {
//     let result = 0;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             for (let i = num ** 7; i >= 0; i--) {
//                 result += Math.atan(i) * Math.tan(i);
//             }
//             resolve(result)
//         }, 0)
//     })
// }
//
// massiveProcess(10)
// .then(res => console.log(`The number is ${res}`))
//
// console.log(5 * 5 + 100)

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Done')
//     }, 4000)
// })
//
// p1.then(val => {
//     console.log(val)
// }, val => {
//     console.log(`rejected ${val}`)
// })
//
// let firstName = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Steven")
//         }, 4000)
//     })
// }
//
// let lastName = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hancock")
//         }, 3000)
//     })
// }
//
// let middleName = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("W.")
//         }, 7000)
//     })
// }
//
// Promise.all([firstName(), lastName(), middleName()])
//     .then((msg) => {
//         console.log(msg)
//     })

// const MAINAPP = (function(nsp) {
//     const URL = 'https://jsonplaceholder.typicode.com/';
//
//
//     const p1 = fetch(URL + 'posts/')
//         .then(response1 => response1.json())
//     const p2 = fetch(URL + 'comments/')
//         .then(response2 => response2.json())
//     const p3 = fetch(URL + 'todos/')
//         .then(response3 => response3.json())
//
//     Promise.all([p1, p2, p3])
//         .then(([posts, comments, todos]) => {
//             nsp.posts = posts
//             nsp.comments = comments
//             nsp.todos = todos
//         })
//
//
//     return nsp;
// })({})
//
// console.log(MAINAPP);

// const plainFunction = async () => {
//     console.log('start')
//     return 'done';
// }
//
// plainFunction()
// .then(val => console.log(val))

// const asyncFunction = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Important Value')
//         }, 2000);
//     });
// }
//
// const asyncFunc = async () => {
//     let p1 = await asyncFunction();
//     console.log(p1);
//     console.log(`${p1}-more info`)
// };
//
// asyncFunc()

// const swapiFilms = async () => {
//     const url = 'https://swapi.dev/api/films/'
//     let filmsData = {}
//     let films = [];
//
//     filmsData = await fetch(url).then(data => data.json())
//
//     films = filmsData.results
//     console.log(films)
// }
//
// swapiFilms()

const retrievePosts = async (userID) => {
    let url = 'https://jsonplaceholder.typicode.com/posts/';
    let posts = [];
    posts = await fetch(url).then(data => data.json())
    return posts.filter(({userId}) => userId === userID);
}

retrievePosts(3).then(val => console.log(val))

