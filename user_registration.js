const prompt = require('prompt-sync')();
const userValidation = () => {
    let firstName = prompt('Enter the First Name : ')
    let fnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if (fnameRegex.test(firstName))
        console.log("Valid First Name");
    else
        console.log("Invalid First Name");

    let lastname = prompt('Enter the Last Name : ');
    let lnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if (lnameRegex.test(lastname))
        console.log("Valid Last Name");
    else
        console.log("Invalid Last Name");
}
userValidation();
