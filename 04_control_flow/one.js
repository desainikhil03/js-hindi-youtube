// if 

if(2 === "2"){
    //console.log("executed");
}else{
    //console.log("not executed");
}

// console.log(typeof "2"); // string 
// console.log(typeof 2); // number

// < , > , >=, <= , == , != , === , !==

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`power is : ${power}`);
// }

// //console.log(`power is : ${power}`);


//const balance = 1000

//if(balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedFromGoogle = false
const loggedFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("allow to buy course");
}

if(loggedFromGoogle || loggedFromEmail){
    console.log("user logged in");
}