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

const students = [
    {name: 'Mary', score: 90, school: 'East'},
    {name: 'James', score: 100, school: 'East'},
    {name: 'Steve', score: 40, school: 'West'}
]

// 콜백함수를 가지고 있음에도 비동기로 실행되지 않은 이유
// => setTimeout을 안써서?
// => = event loop을 사용하지 않음
const processStudent = (data, callback) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLocaleLowerCase() === 'east') {
            if (typeof callback === 'function') {
                callback(data[i])
            }
        }
    }
}

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