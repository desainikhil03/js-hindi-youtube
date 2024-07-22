//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    //console.log(" Inner",a);

    
}
 //console.log(a);
// console.log(b);
//console.log(c);

function one(){
    const username = "nikhil"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}

one()

if (true) {
    const username = "nikhil"
    if (username === "nikhil") {
        const website = " youtube" 
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

// *************************Intersting********************

console.log(addOne(5)); // not error give 

function addOne(num){
    return num +1;
}


addTwo(5) // error give 
const addTwo = function(num){
    return num + 2
}
