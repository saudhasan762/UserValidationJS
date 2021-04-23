const prompt = require('prompt-sync')();
module.exports = {
    test(regex, input) {
        //let input = prompt('Value : ');
        if (regex.test(input)) {
            //console.log("Valid Input");
            return true
        } else {
            //console.log("Invalid Input, Please Enter again...");
            return false;
        }

    },

    display(fname, lname, email, phoneNumber, password) {
        console.log("First Name : ", fname);
        console.log("Last Name : ", lname);
        console.log("Email : ", email);
        console.log("Phone Number : ", phoneNumber);
        console.log("Password : ", password);
    }
}