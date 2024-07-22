// Immediately Invoked Function Expressions (IIFE)

(function chai(){  // named IIFE
    console.log(`DB CONNECTED`);
})();

// iife syntax ()(); in first () we write function df and second () we call function
// global scope ke polution se problem hoti kai baar us global scope ke jo variable hain , 
//jo bhi vha decleration hain, uske polution ko htane ke liye hamne iife ka use kiya

( (name) =>  {  // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )("hitesh")