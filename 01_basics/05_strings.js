const name = "nikhil"
const repoCount = 50

//console.log(name + repoCount + "value");

// String interpolation
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('nikhil-nd-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-8,4);
// console.log(anotherString);

const newStringOne = "     Hello      "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = 'https://nikhil.com/nikhil%20desai'
// console.log(url.replace('%20', '-'))
// console.log(url.includes('desai'))

// console.log(gameName.split('-'));
const str = gameName.split('');
console.log(str[8]);