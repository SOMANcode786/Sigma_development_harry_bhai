let a =prompt("Eneter the First Number")
let b =prompt("Eneter the second Number")

if(isNaN(a)||isNaN(b)){
    throw SyntaxError( "sorry this is not allowed ")
}
let add=parseInt(a)+parseInt(b);



try {
    console.log("this the sum ",add*x);
    
} catch (error) {
    console.log('this the error',error);
    
}
