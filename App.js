//Question 1

let n = 5;

for(let i= 1; i<=n;i++){
    let star = "* "

    console.log(star.repeat(i));
    
}


//Question 2


for(let i = 1; i<=45 ; i++){
    if(i%3===0){
        console.log("Fizz");
        
    } if (i%5===0){
        console.log("Buzz");
        
    } if((i%3===0) && (i%5===0)){
        console.log("FizzBuzz");
        
    } else {
    console.log(i);
    }
}


//Question 3


const numbersArray = [1,13,22,123,49];

let sum = 0;
    for(let i = 0; i < numbersArray.length; i++){
    sum += numbersArray[i]
    }

console.log("The sum of array is : " , sum);


//Question 4


const arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
const arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

let sum1 = 0;
let sum2 = 0;

for(let i = 0; i < arr_1.length ; i++){
    sum1 += arr_1[i];
}

for(let j = 0; j < arr_2.length ; j++){
    sum2 += arr_2[j];
}

console.log("The Sum of two array is : " , sum1+sum2);


//Question 5

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}


