let utility = require('./utility');
const prompt = require('prompt-sync')();
const cons = require('./constant');

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

userValidation("Enter First Name =>", cons.fnameRegex)
    .then(() => userValidation("Enter Last Name =>", cons.lnameRegex))
    .then(() => userValidation("Enter Email =>", cons.emailRegex))
    .then(() => userValidation("Enter Phone Number=>", cons.phoneNmberRegex))
    .then(() => userValidation("Enter Password=>", cons.password4Regex))
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

