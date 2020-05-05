const identity = require('./src/identity')
const validate = require('./src/validate')

console.log('Identity:')
Object.keys(identity).forEach((val, index) => {
    console.log(val, ':', identity[val])
})

// Username and password check
let username = "username"
let password = "password"

console.log('\n')
console.log('Username:', username)
console.log('Password:', password)
console.log('Account validation passed:', validate(username, password))