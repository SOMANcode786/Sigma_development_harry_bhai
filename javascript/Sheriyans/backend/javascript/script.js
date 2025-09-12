// foreach find index map indexof





var arr=[1,2,3,4,5]

 
// Foreach

// array ka hr elemt par fucntion chlyi (foreach) value find kary or usy print kary
arr.forEach(function(val){
console.log(val +" "+ "hellow");

})

// map 
// dia gyi array sa aik or array create karna chty ho map use hota ha 
let a=arr.map((val)=>{
return [12,14,12,11]
})
console.log(a);


// filter 
// aik array ha us ma 4 member ha reapat ho sakhty ha (yes ) negative ho sakhta ha (yes) 

var ans=arr.filter((val)=>{
    if(val>3){
        return true
    }
    else{
        return false 
    }
})

console.log(ans);


// find 

var fin=arr.find((val)=>{
    if(val==2){
        return val
    }
})

console.log("this is the finding value",fin);


// indexof 


var ind=arr.indexOf(1)
console.log(ind);
