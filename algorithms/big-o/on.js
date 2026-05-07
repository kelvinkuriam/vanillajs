const numbers =[5,12,3,99,45,1,23,8,56,72];

function findMax(arr){
    let max = -Infinity; // Initialize max to the smallest possible number to ensure any number in the array will be greater than it.

    for (const val of arr){
        if(val>max){
            max=val; // Update max if the current value is greater than the current max.
        }
    }
    return max; // Return the maximum value found.
}

console.log(findMax(numbers)); // Output: 99

function sum(arr){
    return arr.reduce((acc,val) =>acc+val,0); // Using the reduce method to sum all values in the array. The initial value of the accumulator is set to 0.
}

console.log(sum(numbers)); // Output: 264

function countEvenAndOdd(arr){
    let evens =0 ,odds=0;

    for (const x of arr){
        if (x % 2 ===0) evens++; // Increment evens count if the number is even.
        else odds++; // Increment odds count if the number is odd.

        
    }
    return {evens,odds}; // Return an object containing the counts of even and odd numbers.

}
console.log(countEvenAndOdd(numbers)); // Output: { evens: 5, odds: 5 }


function linearSearch(arr,target){
    for (let i = 0; i < arr.length;i++){
        if(arr[i] === target) return i; // Return the index of the target if found.
    }
    return -1; // Return -1 if the target is not found.
}
console.log(linearSearch(numbers, 45)); // Output: 4
console.log(linearSearch(numbers, 100)); // Output: -1


function hasDuplicate(arr){
    const seen = new Set(); // Create a Set to keep track of seen numbers.
    for (const x of arr){
        if(seen.has(x)) return true; // If the number is already in the Set, we have a duplicate, so return true.
        seen.add(x); // Add the number to the Set.
    }
    return false; // If we finish the loop without finding duplicates, return false.
}
console.log(hasDuplicate(numbers)); // Output: false