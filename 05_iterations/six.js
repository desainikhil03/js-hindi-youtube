

//const programming = ["javascript" , "java" , "cpp" , "python" , "ruby"]

// const val = programming.forEach( (item) => {  // for each loop does not return any thing , undefined
//     //console.log(item); 
//     return item;
// } )

// console.log(val);

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) => num > 4 )

// const newNums = myNums.filter( (num) => {
//     return num > 4                         // if here we use scope means { } this then must write return word , (explicit)
// })                                         // and if use ( ) this then no requirement fo retuen word (implicit)

// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    {
        title : 'Book One', genre : 'Fiction', publish : '1981', edition : '2004'
    },
    {
        title : 'Book Two', genre : 'Non-Fiction', publish : '1992', edition : '2008'
    },
    {
        title : 'Book Three', genre : 'History', publish : '1999', edition : '2007'
    },
    {
        title : 'Book Four', genre : 'Non-Fiction', publish : '1989', edition : '2010'
    },
    {
        title : 'Book Five', genre : 'Science', publish : '2009', edition : '2014'
    },
    {
        title : 'Book Six', genre : 'Fiction', publish : '1987', edition : '2010'
    },
    {
        title : 'Book Seven', genre : 'History', publish : '1986', edition : '1996'
    },
    {
        title : 'Book Eight', genre : 'Science', publish : '2011', edition : '2004'
    },
    {
        title : 'Book Nine', genre : 'Non-Fiction', publish : '1981', edition : '1989'
    },
];
 
// const userBooks = books.filter( (item) => {
//     if(item.genre == 'History'){
//         return item.genre
//     }
// } )

const userBooks = books.filter( (item) => {
    // if(item.publish >= '1995' && item.genre == 'History'){
    //     return item
    // }
    return item.publish >= '1995' && item.genre === 'History'
} )


console.log(userBooks);