//編碼

const bcrypt = require("bcryptjs");

const password = "Hannah1202";

const hash = bcrypt.hashSync(password, 10);

console.log(hash);

// PS C:\Users\Wayz\Temple-node2> cd src
// PS C:\Users\Wayz\Temple-node2\src> node bcrypt02.js
