// let [x,y]=[1,2,3,4];
// x=1,y=3 or remaning not show

let  [x,y,...rest]=[1,2,3,4,5,6]
console.log(x,y,rest);


// if i want to destructring trough an boject so 

let obj={
    a:23,
    b:45,
}


let {a,b}=obj;
console.log(a,b);