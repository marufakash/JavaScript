/*
Program 1: print the numbers from 1 to 100, print which are divisible by 3 or 5 but not both.

output example
3
6
10
etc.
*/

for(let i=1; i<=100; i++){
    document.write(i + " ");
}

/*
Program 2: Write a program that read any positive number and display sum of its digit.

Input example
number = 125

output example
sum=8

*/

/*
Program 3: Write a program to print time table of any number.

Input example
number = 3

output example
3 x 1 = 3
3 x 2 = 6

*/

let number = parseInt(prompt("Enter a single digit : "));

for(let i=1; i<=10; i++){
    console.log(number + " x " + i + " = " + number*i);
    document.write("<br>" + number + " x " + i + " = " + number*i + "<br>");
}