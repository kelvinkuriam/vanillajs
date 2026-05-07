const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

function getFirst(arr){
    return arr[0];
}

console.log(getFirst(fruits)); // Output: 'apple'

const userRoles = {
    alice:"admin",
    bob:"editor",
    charlie:"viewer"
}

function getRole(username){
    return userRoles[username];// Accessing the role using the username as the key using bracket notation because the key is a variable.we dont know the key name in advance.we dont know the username in advance so we use bracket notation to access the value associated with that key. we dont use dot notation because dot notation requires a specific key name, and in this case, the key name is dynamic and stored in the variable 'username'.

}

console.log(getRole("alice")); // Output: 'admin'
console.log(getRole("bob")); // Output: 'editor'
console.log(getRole("charlie")); // Output: 'viewer'

const stack = [
]

stack.push(1);
stack.push(3);

console.log(stack);

stack.pop();
console.log(stack);

function sumFormula(n){
    return (n * (n + 1)) / 2;
}
console.log(sumFormula(5));
//bad example of finding the sum of first n natural numbers using a loop instead of the formula 
let total =0

for(let i=1; i<=5;i++){
    total +=i;
}
console.log(total);

//bad example of using includes to check if a number is in an array instead of using a more efficient method like a Set or a Map for large datasets. includes method has a time complexity of O(n) which can be inefficient for large arrays.
function badExample(arr){
    return arr.includes(99);

}
const numbers = [1, 2, 3, 4, 5, 99];
console.log(badExample(numbers));


const goodExampleSet = new Set(numbers);

function goodExample(num){
    return goodExampleSet.has(num);
}
console.log(goodExample(99));

//using a Map to store key-value pairs and check for the existence of a key efficiently. Maps have a time complexity of O(1) for lookups, making them more efficient than arrays for certain use cases such as checking for the existence of a key. In this example, we create a Map called 'usernameMap' to store usernames as keys and their existence as values. We can then use the 'has' method to check if a specific username exists in the Map efficiently.
const usernameMap = new Map();

usernameMap.set('alice', true);
usernameMap.set('bob', true);
usernameMap.set('carol', true);

console.log(usernameMap.has('bob'));//checks if 'bob' exists in the Map and returns true
console.log(usernameMap.get('carol'));//gets the value associated with the key 'carol' which is true