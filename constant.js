const fnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
const lnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
const emailRegex = RegExp('^[a-zA-Z0-9]+([_+-.]{0,1})([@]{1})[a-z0-1]+.[a-z]+(.?)([a-z]{2}?)$');
const phoneNmberRegex = RegExp('^([9]{1}[1]{1})\\s{0,1}[0-9]{10}$');
const password4Regex = RegExp('^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[a-z])(?=.*[#?!@$%^&*-]).{8,}$');

module.exports = {fnameRegex, lnameRegex, emailRegex, phoneNmberRegex, password4Regex}
