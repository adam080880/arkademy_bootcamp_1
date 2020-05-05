const identity = require('./src/identity')
const validate = require('./src/validate')

console.log('Identity:')
Object.keys(identity).forEach((val, index) => {
    console.log(val, ':', identity[val])
})

// Username and password check
let username = "mrzombie80"
let password = "password"

console.log('\n\n')
console.log('Username:', username)
console.log('Password:', password)
console.log('Pass validate:', validate(username, password))