//without destructuring
function printStudent_(student) {
    console.log(student.id)
    console.log(student.name)
    console.log(student.address.city)
}
// function printStudent(student) {
//     //destructuring 
//     const { id, name, address: { city } } = student
//     console.log(id)
//     console.log(name)
//     console.log(city)
// }

// function printStudent({ id, name, address: { city } }) {
//     console.log(id)
//     console.log(name)
//     console.log(city)
// }

const printStudent = ({ id, name, address: { city } }) => {
    console.log(id)
    console.log(name)
    console.log(city)
}
printStudent({
    id: 1,
    name: 'Subramanian',
    address: {
        city: 'Coimbatore'
    }
})