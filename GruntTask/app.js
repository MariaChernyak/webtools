var math = require('math.js');
console.log(math.log(10000, 10));
var epsilon = Math.round(Math.E, 3);
console.log(epsilon);
var expression = math.log(10000, 10) / epsilon;
console.log(expression);

document.getElementById('expression').innerHTML = expression;