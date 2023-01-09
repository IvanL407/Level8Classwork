// Ivan Luc, Period 7/8 Even, Web Development, Level 8 Classwork



//console.log("Hello, World");

var fs = require("fs");
fs.readFile('input.txt', function (err, data)
{
    if (err)
        return console.error(err);
    console.log(data.toString());
});
console.log("Program Ended");