exports.function1 = function() {
    console.log("function1 is work")
}

exports.function2 = (username,password) => {
    console.log("function2 is work")
    console.log(`username:  ${username}, password: ${password}`)
}
