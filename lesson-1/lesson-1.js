/* Введение в курс Modern JavaScript Frameworks
Написать функцию суммирования значений
Написать функцию sum, которая может быть исполнена любое количество раз с не `undefined` аргументом.
    Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений.

sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n
 */

function sum (item) {
    if (typeof item === 'undefined') {
        let state = sum.state
        sum.state = undefined
        return state
    } else {
        if (!sum.state) {
            sum.state = 0
        }
        sum.state += item
        return sum
    }
}
