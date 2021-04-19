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

    let email = prompt('Enter the email address : ');
    let emailRegex =RegExp('^[a-zA-Z0-9]+([_+-.]{0,1})([@]{1})[a-z0-1]+.[a-z]+(.?)([a-z]{2}?)$');
    if(emailRegex.test(email))
        console.log("Valid Email");
    else
        console.log("Invalid Email");

    let phoneNumber = prompt('Enter the phone number : ');
    let phoneNmberRegex =RegExp('^([9]{1}[1]{1})\\s{0,1}[0-9]{10}$');
    if(phoneNmberRegex.test(phoneNumber))
        console.log("Valid Phone Number");
    else
        console.log("Invalid Phone Number");

    let password1 = prompt('Enter the Password : ');
    let password1Regex =RegExp('^([!@#$%^&* a-z A-Z 0-9]){8,}$');
    if(password1Regex.test(password1))
        console.log("Valid password");
    else
        console.log("Invalid password");
    
    let password2 = prompt('Enter the Password 2 : ');
    let password2Regex =RegExp('^(?=.*?[A-Z])([!@#$%^&* A-Z a-z 0-9]){8,}$');
    if(password2Regex.test(password2))
        console.log("Valid password");
    else
        console.log("Invalid password");
    
    
}
userValidation();
