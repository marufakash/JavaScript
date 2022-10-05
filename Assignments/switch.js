/*
Program 1: Write a program that read any letter and display vowel or consonant.
Input example
*/

let ch = prompt("Enter any alphabet : ");
ch = ch.toLowerCase();

switch(ch){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vowel");
        break;
    default :
        console.log("Consonant");
}