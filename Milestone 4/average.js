//calculate average of odd numbers in array

const myArray = [2,3,4,5,6,7,8,9,12,13,17]
// let sum = 0

// for(let n of myArray){
//     if(n%2!==0){
//         sum+=n
        
        
//     }
// }

function sumOfOdd(array){
    let sum = 0;
    for(let n of array){
        if(n%2!==0){
            sum+=n
        }
    }
    return sum
}

console.log(sumOfOdd([3,5,7]))




