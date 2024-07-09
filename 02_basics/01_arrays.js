// array

const myArr = [0,1,2,3,4,5]
const myHeors = ["shaktiman","nagraj"]

const myArr2 = new Array(0,1,2,3,4,5)
// console.log(myArr[0]);

// Array Methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));
// console.log(myArr.length);

// const newArr = myArr.join() // converts array into string , here type of newArr is string

// console.log(myArr);
// console.log(typeof newArr);

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // here from original array that element is cut , here myArr = [0,4,5] and myn2 = [1,2,3]
console.log(myn2);
console.log("C ", myArr);
