async function getdata(){
    try {
        let data = await fetch("https://dummyjson.com/products/1",{
        method:"PUT",   
         headers:{
            'Content-type':'application/json'
         },
         body:JSON.stringify({
            title:"soman"
         })

        });
        let resp=await data.json();
        console.log(resp)
    }
        
     catch (error) {
        console.log('this is the error');
        
    }

};

getdata();