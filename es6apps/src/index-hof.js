
function greetMe(name) {
    return `Hello ${name}`
}
console.log(greetMe('Subramanian'))

// function connect(resolve) {
//     resolve()
// }
let connect = function (resolve) {
    resolve()
}
connect(function () {
    console.log('connecting...')
})