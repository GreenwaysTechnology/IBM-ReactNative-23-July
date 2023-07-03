// const printStudent = () => {
//     return {
//         id: 1,
//         name: 'Subramanian',
//         address: {
//             city: 'Coimbatore'
//         }
//     }
// }
// const printStudent = (id = 1, name = 'Subramanian', city = 'Coimbatore') => {
//     return {
//         id: id,
//         name: name,
//         address: {
//             city: city
//         }
//     }
// }

// const printStudent = (id = 1, name = 'Subramanian', city = 'Coimbatore') => {
//     //if left:right variabels are same remove one 
//     return {
//         id,
//         name,
//         address: {
//             city
//         }
//     }
// }
const printStudent = (id = 1, name = 'Subramanian', city = 'Coimbatore') => ({
    id,
    name,
    address: {
        city
    }
})

console.log(printStudent())
console.log(printStudent(2, 'Ram', 'Banaglore'))