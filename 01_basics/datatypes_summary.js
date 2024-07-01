// primitive data types

// 7 data types => String , Number , boolean , null , undefined , Symbol , Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId); // false

// reference data types  (non-primitive data types )

// Arrays , Object , Functions  

const heros = ["shaktiman", "naagraj", "doga"];

let myObj ={
    name: "nikhil",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

//console.log(typeof myFunction);

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// Stack (Primitive datatypes), Heap (Non-Primitive data types )

let myYoutubename = "nikhildesaidotcom"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "nikhil@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "desai@google.com"

console.log(userOne.email);
console.log(userTwo.email);