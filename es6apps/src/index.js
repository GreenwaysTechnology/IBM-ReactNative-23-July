// import { CustomerService,CustomerController } from './services/customer.service.js'
import CustomerService from './services/customer.service.js'


let customerService = new CustomerService();
// let custCtrl = new CustomerController()
console.log(customerService.findAll())