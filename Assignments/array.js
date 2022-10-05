/*
Program 1: Write a program that read an array and display sum and average.
Input Example
[1,4,2,3]

output example
sum=10
avg=2.5

*/

let number = [1,4,2,3];

let sum = 0
for(let i=0; i<4; i++){
    sum = sum + number[i];
}
console.log("Summation is : " + sum);

let avg = sum / 4;
console.log("Average is : " + avg);

/*
Program 2: Write a program that read an array and display maximum and minimum.
Input Example
[1,4,2,3]

output example
max=4
min=1

*/

let numbers = [1,4,2,3];

let maxNumber = numbers[0];
for(let i=1; i<4; i++){
    if(maxNumber < numbers[i]){
        maxNumber = numbers[i];
    }
}
console.log("Maximum number is : " + maxNumber);

let minNumber = numbers[0];

for(let i=1; i<4; i++){
    if(minNumber > numbers[i]){
        minNumber = numbers[i];
    }
}
console.log("Minimum number is : " + minNumber);
