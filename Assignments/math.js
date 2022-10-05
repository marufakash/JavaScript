/* 
- Generate a random number from 1 to 30.
- if the number is 18 or more than 18 then print "valid voter"
- if the number is less than 18 then print "Invalid voter" 
*/

let guessNumber = parseInt(prompt("Enter a number : "));
let randomNumber = Math.floor(Math.random()*30)+1;

if(guessNumber>=18){
    console.log("Valid Voter");
}
else{
    console.log("Invalid Voter");
}