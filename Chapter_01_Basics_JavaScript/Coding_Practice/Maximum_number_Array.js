let arr = [1,4,6,9,10,30];
let max = -Infinity;

for(let i=0; i<arr.length;i++){
    if(arr[i]>max){

        max = arr[i];

    }
}

console.log(max);