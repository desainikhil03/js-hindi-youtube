// singleton
//Object.create // object create through constructor

// object literals
const JsUser = {
    name:"nikhil",
    "full_name":"nikhil desai",
    age:21,
    lacation:"kolhapur",
    email:"nikhil@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}

console.log(JsUser.age); 
console.log(JsUser["email"]);
console.log(JsUser["full_name"]);