// for(let i= 0;i<=7;i++){
//     console.log(i)
// }

// const arr=[1,2,3,4,5,6,7,8,9]

// for(let num of arr){
//     console.log(num)
//     num+=1;
//     console.log("new number",num)
// }

// const str = "Hello World"

// for(const char of str){
//     console.log(char)
// }



// const people = [
//     {name:"Alice",age:25},
//     {name:"Bob",age:30},
//     {name:"Charlie",age:35}
// ]

// for (const person of people){
//     console.log(`Name: ${person.name}, Age:${person.age}`)
// }


// const fruit = {
//     name:"Apple",
//     color:"Red",
//     weight:150
// }

// for (const key in fruit){
//     console.log(`${key}:${fruit[key]}`)
// }


// const person = {
//     name:"Alice",
//     age:25,
//     address:{
//     street:"123 Main St",
//     city:"Anytown",
//     country:"USA"
//     }
// }

// // for(const key in person){
// //     console.log(`${person[key]}`)
// // }

// function isObj(obj){
//     return typeof obj ==="object" && !Array.isArray(obj) && obj !== null
// }


// for(const key in person){
//     if(isObj(person[key])){
//         for(const nestedKey in person[key]){
//             console.log(`${nestedKey}:${person[key][nestedKey]}`)
//         }
//     }else{
//         console.log(`${key}:${person[key]}`)
//     }

// }


// let counter = 0;

// while(counter <5){
//     console.log(counter)
//     counter++;
// }
// let counter = 0;
// do {
//     console.log(counter)
//     counter++;
// }while(counter <5);

// for(let i =0;i<10;i++){
//     if(i===5){
//         continue;
//     }
//     console.log(i)
// }


outerloop: for(let i=0;i<3;i++){
    innerloop: for(let j=0;j<3;j++){
        if(i===1 && j===1){
            break outerloop;}
        console.log(`i:${i}, j:${j}`)
    }
}