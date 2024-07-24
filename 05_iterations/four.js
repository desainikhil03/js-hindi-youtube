const myObject = {
    js : "Javascript",
    java : "Java",
    cpp : "C++",
    py : "Python"
}

for (const key in myObject) {
  // console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming = ["js" , "java" , "cpp" , "python" , "php"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set("In" , "India" );
// map.set("USA" , "United states of America");
// map.set("Fr" , "France");
// map.set("In" , "India" );

// for (const key in map) {  // for in loop se map main iterate nhi kr skte , ye kuch bhi print nhi krta
//     console.log(map[key]);
// }