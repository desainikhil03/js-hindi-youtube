const user = {
    username : "hitesh",
    price : 99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }


const chai = () => {
    let username = "hitesh"
    console.log(this);
}
//chai()

// arrow function
// const addTwo = (num1 , num2) => { // explicit , here return keyword is required
//     return num1 + num2
// }


//const addTwo = (num1 , num2) =>  num1 + num2

// const addTwo = (num1 , num2) =>  (num1 + num2) //implicit , here return keyword is no required
//console.log(addTwo(3,5));

const addTwo = () =>  ({username : "hitesh"})

console.log(addTwo());