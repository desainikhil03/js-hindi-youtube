//const tinderUser = new Object(); // singelton object 

const tinderUser = {}              //non singelton object

tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "nikhil",
            lastname : "desai"
        }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({} , obj1,obj2)
//const obj3 = Object.assign( obj1,obj2)

//console.log(obj3 === obj1); // true

const obj3 = {...obj1 , ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email : "n@gmail.com"
    }, 
    {
        id: 1,
        email : "n@gmail.com"
    },
    {
        id: 1,
        email : "n@gmail.com"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name" : "nikhil",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]