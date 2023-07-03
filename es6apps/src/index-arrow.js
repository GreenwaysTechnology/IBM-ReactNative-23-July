//arrow functions 

//es 5 version of anonmous function 
let greet = function () {
    console.log('Hello')
}
greet()

//Arrow function
let hello = () => {
    console.log('Arrow Hello')
}
hello()
//if function has only one line of one body: we can remove {}
hello = () => console.log('Arrow Hello')
hello()
//Args and arrow 

let add = (a = 0, b = 0) => {
    let c = a + b
    console.log(`C ${c}`)
}
add(10, 10)

add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(10, 10))

//if function only returns ; remove {} and return statement
add = (a = 0, b = 0) => a + b

console.log(add(10, 10))