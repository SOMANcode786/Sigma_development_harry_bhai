var slugify = require("slugify");

let a =slugify("some string"); // some-string
console.log(a);

// if you prefer something other than '-' as separator
slugify("some string", "1");
