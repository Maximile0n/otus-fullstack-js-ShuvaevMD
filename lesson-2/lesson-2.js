// promiseReduce - работа с асинхронными функциями
// Цель: Написать функцию promiseReduce(asyncFunctions, reduce, initialValue) asyncFunctions - массив асинхронных функций, возвращающих промис
//     reduce(memo, value) - функция, которая будет вызвана для каждого успешно завершившегося промиса.
//     initialValue - стартовое значение для функции reduce
//     promiseReduce последовательно вызывает переданные асинхронные функции
//     и выполняет reduce функцию сразу при получении результата до вызова следующей асинхронной функции.
//     Функция promiseReduce должна возвращать промис с конечным результатом.

async function promiseReduce(asyncFunctions, reduce, initialValue) {
    let acc = initialValue
    for (let afItem of asyncFunctions) {
        acc = reduce(acc, await afItem())
    }
    return acc
}

// проверочный пример

const fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
}

const fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
})

promiseReduce(
    [fn1, fn2],
    function (memo, value) {
        console.log('reduce')
        return memo * value
    },
    1
)
    .then(console.log)
