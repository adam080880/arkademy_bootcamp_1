const usernameCheck = (username) => {
    let pattern = /^[a-zA-Z0-9]{5,}$/
    
    return pattern.test(username) && true
}

const passwordCheck = (password) => {
    let pattern = /^.{8}$/
    
    return pattern.test(password) && true
}

const validate = (username, password) => {
    return usernameCheck(username) && passwordCheck(password) && true
}

module.exports = validate