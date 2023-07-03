class Student {
    //instance variables
    id
    firstName
    lastName
    constructor(id = 1, firstName = 'John', lastName = 'Mc') {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
    }
    //methods
    findAll() {
        return 'students'
    }
}
let student = new Student()
console.log(student)
console.log(student.findAll())
