const myFunction = require('./modulo');

console.log(`seu nome é : ${myFunction(process.argv, '--name')}. ${myFunction(process.argv, '--greeting')}`)
