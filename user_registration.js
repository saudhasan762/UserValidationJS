const prompt = require('prompt-sync')();
const userValidation = () => {
    let firstName = prompt('Enter the First Name : ')
    let fnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if (fnameRegex.test(firstName))
        console.log("Valid First Name");
    else
        console.log("Invalid First Name");
}
userValidation();
