const bcrypt = require("bcryptjs");

const password = "password";

const hashPassword = bcrypt.hashSync(password);
// console.log(hashPassword);
console.log(bcrypt.genSaltSync(10));

const result = bcrypt.compareSync("password", hashPassword);
console.log(result);
