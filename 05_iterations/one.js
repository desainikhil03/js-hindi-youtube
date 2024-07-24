// for loop 

// const array = [1,2,3,4,5]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
    
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(i);
}

//console.log(element); // error generate

for (let i = 1; i <=10; i++) {
    //console.log(`Table of  ${i} : `);
    for (let j = 1; j <=10; j++) {
        //console.log(`Inner loop value ${j}`);
        //console.log(`${i} * ${j} = ${i*j}`);
    }
    
}

let myArray = ["arjun" , "karna" , "krishna" , "bhishma" ]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`5 is Decteded`);
//         break
//     }
//     console.log(`value of index is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`5 is Decteded`);
        continue
    }
    console.log(`value of index is ${index}`);
    
}