// singleton
//Object.create // object create through constructor

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"nikhil",
    "full_name":"nikhil desai",
    [mySym]:"myKey1",
    age:21,
    lacation:"kolhapur",
    email:"nikhil@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}

// console.log(JsUser.age); 
// console.log(JsUser["email"]);
// console.log(JsUser["full_name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// JsUser.email = "nikhil@gpt.com"
// Object.freeze(JsUser)
// JsUser.email = "nikhil@microsoft.com"
// console.log(JsUser.email);
// console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello  JS user");
}

JsUser.greetingsTwo = function(){
    console.log(`Hello  JS user , ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());