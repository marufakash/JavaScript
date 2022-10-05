/*
Input-Output program (String Methods)
input -> user first name (you can use prompt)
input -> user last name (you can use prompt)
print full name without using any string methods
find out total length of user's full name
convert full name into uppercase
print the 3rd character from users full name
*/

let firstName = prompt("Enter your first name : ");
let lastName = prompt("Enter your last name : ");
let fullName = firstName + lastName;
console.log("Fullname is : " + fullName);
console.log("Name length : " + fullName.length);
console.log(fullName.toUpperCase());
console.log("Third character of name : " + fullName.charAt(2));
