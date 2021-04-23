let utility = require('./utility');
const prompt = require('prompt-sync')();

const fnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
const lnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
const emailRegex = RegExp('^[a-zA-Z0-9]+([_+-.]{0,1})([@]{1})[a-z0-1]+.[a-z]+(.?)([a-z]{2}?)$');
const phoneNmberRegex = RegExp('^([9]{1}[1]{1})\\s{0,1}[0-9]{10}$');
const password4Regex = RegExp('^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[a-z])(?=.*[#?!@$%^&*-]).{8,}$');

let arr = [];
const userValidation = (string, regex) => {
    return new Promise((resolve, reject) => {
        //console.log(string);
        let flag = false;
        while (!flag) {
            let value = prompt(string);
            flag = utility.test(regex, value);
            if (flag) {
                arr.push(value);
                resolve();
                break;
            }
        }
    });
}

userValidation("Enter First Name =>", fnameRegex)
    .then(() => userValidation("Enter Last Name =>", lnameRegex))
    .then(() => userValidation("Enter Email =>", emailRegex))
    .then(() => userValidation("Enter Phone Number=>", phoneNmberRegex))
    .then(() => userValidation("Enter Password=>", password4Regex))
    .then(() => utility.display(arr[0], arr[1], arr[2], arr[3], arr[4]))
    .catch((err) => {
        console.log(err);
    })
// userValidation("Enter for Last Name =>", lnameRegex);
// userValidation("Enter for Email", emailRegex);
// userValidation("Enter for Phone Number", phoneNmberRegex);
// userValidation("Enter for Password", password4Regex);

/*const userValidation = (string, regex) => {
    return new Promise((resolve, reject) => {
        console.log(string);
        let flag = false;
        setTimeout(() => {
            while (!flag) {
                flag = utility.test(regex);
                if (flag){
                    resolve();
                    break;
                }
            }
        }, 2000);
    });
}*/

