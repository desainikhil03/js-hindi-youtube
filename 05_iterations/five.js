// for each

const programming = ["javascript" , "java" , "cpp" , "python" , "ruby"]

// programming.forEach( function (val){
//     console.log(val);
// } )

// programming.forEach( (val) => {
//     console.log(val);
// } )

// function print(item) {
//     console.log(item);
// }

// programming.forEach(print)

// programming.forEach( (item , index , arr) => {
//     console.log(item , index , arr);
// } )

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "CPP",
        languageFileName : "c++"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )