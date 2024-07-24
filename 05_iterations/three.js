
// for of 

// ["", "" , ""]
// [{} , {} , {}]

// const arr = [1,2,3,4,5]

// for (const val of arr) {
//     console.log(val);
// }

// const str = "Hello World!"
// for (const val of str) {
//     console.log(val);
// }

// map

const map = new Map()
map.set("In" , "India" );
map.set("USA" , "United states of America");
map.set("Fr" , "France");
map.set("In" , "India" );

//console.log(map);

for (const [key , value] of map) {
   // console.log(key , ":-" , value);
}

const myObject = {
    game1 : "cricket",
    game2 : "football",
    game3 : "tenis"
}

// for (const [key , value] of myObject) {   // forof loop se object iterate nhi kr sakte , ye error deta hain 
//     console.log(key , ":-" , value);
// }