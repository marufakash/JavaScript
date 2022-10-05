/*
Program1: Write a program that read two numbers and display minimum.
*/

let num1 = parseInt(prompt("Enter first number : "));
let num2 = parseInt(prompt("Enter second number : "));
let minimum;
if(num1 > num2){
    minimum = num2;
}
else{
    minimum = num1;
}
console.log("Minimum : " + minimum);

/*
Program2: Write a program that read any letter and display vowel or consonant.
*/

let ch = prompt("Enter any alphabet character : ");

ch = ch.toLowerCase();

if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
    console.log("The character is : Vowel");
}
else{
    console.log("The character is : Consonant");
}

