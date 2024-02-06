//number method
let x = 3.14;
let y = 3;
console.log(x+""+y)
//Integer Precision
let a = 999999999999999;
let b = 9999999999999999;
console.log(a);
console.log(b);
//Floating Precision
let x1= (0.2 * 10 + 0.1 * 10) / 10;
console.log(x1)
//Numeric Strings
let x2 = "100";
let y2 = "10";
let z = x2 / y2;   
console.log(z);
//Infinity
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  txt = txt + myNumber;
}
console.log(txt);
//Hexadecimal
let x3 = 0xFF;
console.log(x3);
let myNumber1 = 32;
myNumber1.toString(32);
myNumber1.toString(16);
myNumber1.toString(12);
myNumber1.toString(10);
myNumber.toString(8);
myNumber1.toString(2);
//Numbers as Objects
let y3 = new Number(123);
console.log(y3);