/*
Program1: Write a program that add, subtract, multiply, divide and find the remanider of 2 numbers.

Input example
num1=20
num2=10

output example
20+10=30
20-10=10
20*10=200
20/10=2
20%10=0
*/

let num1 = 20,num2 = 10;

let add = num1 + num2;
console.log(num1 + "+" + num2 + "=" + add);

let sub = num1 - num2;
console.log(num1 + "-" + num2 + "=" + sub);

let mul = num1 * num2;
console.log(num1 + "*" + num2 + "=" + mul);

let div = num1 / num2;
console.log(num1 + "/" + num2 + "=" + div);

let rem = num1 % num2;
console.log(num1 + "%" + num2 + "=" + rem);

/*
Program2: Write a program that convert the Celsius temperature to Fahrenheit.

Input example
celsius=5

output example
Fahrenheit=41
*/

let celsius=5;

let fahrenheit = (celsius*(9/5)+32);
console.log("Fahrenheit : " + fahrenheit);