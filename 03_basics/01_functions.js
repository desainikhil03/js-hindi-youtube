

function myNameFun(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}

//myNameFun()

// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2);
// }
//addTwoNumbers(3,5)

function addTwoNumbers(num1 , num2){
    return num1 + num2;
}

const result = addTwoNumbers(3,5)
// console.log("result : ", result);
// console.log(typeof result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("nikhil"))
// console.log(loginUserMessage())

function calculateCartPrice(val1 , val2 , val3,...num1){ // ...num1 this is rest operator
    return num1;
}

//console.log(calculateCartPrice(100 , 200, 300 , 400, 500 , 600))

const user = {
    username : "hitesh",
    price : 199
}

function handleAnyObject(anyObject){
    console.log(`Username is ${anyObject.username} ans price is ${anyObject.price}`);
}

//handleAnyObject(user)
handleAnyObject({
    username : "nikhil",
    price : 499
})

const mynewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200 , 40,100,600]));