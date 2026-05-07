const numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

function binarySearch(sortedArr,target){
    let left = 0;
    let right = sortedArr.length-1;

    while(left <= right){
        const mid = (left +right) >> 1; // Using bitwise right shift operator to divide by 2 and get the middle index. This is a common technique to avoid potential overflow issues that can arise when calculating the middle index using (left + right) / 2, especially in languages with fixed integer sizes. In JavaScript, this is not a concern due to its handling of numbers, but it's still a common practice in other programming languages.

        console.log(`Left: ${left}, Right: ${right}, Mid: ${mid}, Mid Value: ${sortedArr[mid]}`);

        if(sortedArr[mid] === target){
            return mid; // Target found, return the index
        } else if(sortedArr[mid]< target){
            left = mid +1; // Target is in the right half, move the left pointer
        }else{
            right = mid -1; // Target is in the left half, move the right pointer
        }
    }
    return -1; // Target not found
}

console.log(binarySearch(numbers, 24)); // Output: 5 (index of 23 in the array)node ologn