//function as literal 

function sayHello() {
    return "Hello"
}
console.log(sayHello())

//anonmous function 
let hai = function () {
    console.log('Hai')
}
hai()

//args and params with anonmous funciton 
let add = function (a = 0, b = 0) {
    return a + b
}
console.log(add(10, 10))