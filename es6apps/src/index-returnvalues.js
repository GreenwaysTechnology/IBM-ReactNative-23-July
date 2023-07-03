//function args and params

//es 6 default args
function add(a = 0, b = 0) {
    let c = a + b
    console.log(`c ${c}`)
}
add(10, 10)
add()