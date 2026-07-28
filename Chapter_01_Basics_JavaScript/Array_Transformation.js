let scores = [45,87,65,54,32];

let grade = scores.map( s=> s>60 ? "pass" : "fail");
console.log(grade);

//map is used to transforme an array into another array of same size

//Filter

let passed = scores.filter(s=> s>60);
console.log(passed);

//Reduce function is used to reduce an array into a single value

// let total = scores.reduce((sum, s) => sum + s, 0);
// console.log(total);

let sum=0;
for(let  i=0; i<scores.length;i++){

    sum = sum + scores[i];
}
console.log(sum);

//sorting

let fruit = ["banana", "apple", "orange", "mango"];
fruit.sort();
console.log(fruit);

//slice 
//returns end-1 , end is exculded
//Array.slice(start, end) is used to extract a portion
// of an array into a new array without modifying the original
//  array. The start index is inclusive,
// while the end index is exclusive.   
let arr = [1,2,3,4,5,6];

// console.log(arr.slice(2,5));

//every some


//concate is non mutable which means that it does not 
//change the original array.
//we need to to assign the cancat funtion in a new varialble
let newArr = arr.concat([7,8,9]);
console.log(newArr);
