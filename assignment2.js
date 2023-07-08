//Assignment 1 (Module 2)
// SYED NUMAN AHMED


//Exercise 1: 

// Write a function named destructureExample that takes in an object and an array as parameters. 
// The function should use destructuring to extract the values 'name' and 'age' from 
// the object and the values at index 0 and index 2 from the array. The function should 
// then return an object with the extracted values as properties with name and age.


const person = { 
    fname: 'John', 
    age: 30, 
    city: 'New York' 
};
const {fname, age} = person;
console.log(person)

const arr = [10, 20, 30, 40]

const [a,,c] = arr

console.log(a,c)

function destructureExample(person){

 return person
    
}
// const {fname2, age2} = destructureExample()
console.log(person)



// Exercise 2:

// Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. 
// The function should return the sum of all the numbers.

function sumNumbers (...numbers){
   return numbers.reduce((o,n)=>o+n)
}

const result = sumNumbers(1, 2, 3, 4, 5)

console.log(result)

// Exercise 3:

//  Write a function named createGreeting that takes in a name as a parameter and returns a 
//  greeting message using template literals.
//   The message should be in the format: "Hello, [name]! Welcome to our website."

function createGreeting(name){

    return `"Hello, ${name}! Welcome to our website."`
}

console.log(createGreeting('Alice'))

// Exercise 4: 

// Write a function named isEven that takes in a number as a parameter and 
// returns the string "Even" if the number is even, and "Odd" if the number is odd. 
// Use a ternary operator instead of an if/else statement.

function isEven(number){

    // if(number %2 ==0){
    //     return `${number} number is Even`
    // } else{
    //     return `${number} number is Odd`
    //    }
    
    const CheckEven = number %2 ==0 ? `${number} is Even` : `${number} is Odd`;

    return CheckEven;
}

console.log(isEven(7))



// Exercise 5: 

// Convert the following function to an arrow function:

// function __multiply(a, b) {

//     return a * b;
  
//   }

  // arrow function
const __multiply=(a, b) => {
    return a * b
};

//OR
const multiply=(a, b) => a * b;

console.log(multiply(10,4))


// Exercise 6: 

// Write a function named getLargestNumber that takes in two numbers as parameters. 
// The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).

// let a = 5
// let b = 10

function getLargestNumber(a,b){
    
    const highestNumber = a > b ? a : b;
    // we can use Math.max also
    //const max = Math.max(a,b)
    return highestNumber
    //return max
}

console.log(getLargestNumber(5,10))

// Exercise 7: 

// Write a function named getAddressCity that takes in an object representing a person's address.
// The address object has properties 'street', 'city', and 'country'. 
//The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining.

 

// Example:

// Input:

// const address = { street: '123 Main St', country: 'USA' };

 

// Output:

// "Unknown"


const address = { 
    street: '123 Main St', 
    country: 'USA',
    //city: 'Dhaka'
};

//console.log(cityName);

function getAddressCity(city){

    const cityName = address?.city;
    return cityName

}
console.log(getAddressCity())



// Exercise 8: 

// Write a function named doubleNumbers that takes in an array of numbers 
// and returns a new array with each number doubled using the array map method.

const numbers = [1, 2, 3, 4, 5];
const newArr = numbers.map(doubleNumbers)

function doubleNumbers(num) {
  return num * 2;
}
 console.log(newArr)

//  Exercise 9: 

// Write a function named filterEvenNumbers that takes in an array of numbers and 
// returns a new array with only the even numbers using the array filter method.

const numarray = [1, 2, 3, 4, 5];
const newevenArr = numarray.filter(filterEvenNumbers)

function filterEvenNumbers(number){
 return number %2 ==0
}

 console.log(newevenArr)

//  Exercise 10: 

// Write a function named sumArray that takes in an array of numbers and 
// returns the sum of all the numbers using the array reduce method.

const numarray2 = [1, 2, 3, 4, 5];
const sum = numarray2.reduce(sumArray)

function sumArray(total,num){
 return total + num
}

console.log(sum)


// Exercise 11: 

// Write a function named sortNumbers that takes in an array of numbers and 
// returns a new array with the numbers sorted in ascending order using the array sort method.

const numarray3 = [1, 2, 3, 4, 5];
const newArraySort = numarray3.sort(sortNumbers)

function sortNumbers(a,b){
     
    return a-b;
}

console.log(newArraySort)
