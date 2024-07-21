

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

//console.log(loginUserMessage("nikhil"))
console.log(loginUserMessage())