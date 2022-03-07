const route = process.argv[2];
const extension = process.argv[3];

const mymodule = require('./mymodule');
mymodule(route,extension);