// settle means to resolve and reject
// resolve means to complete successfully
// reject means to fail

// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             const error = false;
//             if(!error){
//                 console.log("Data fetched");
//                 resolve();
//             }else{
//                 reject("Error: Something went wrong");
//             }
//         }, 3500);
//     })
// }

// console.log('Start');
// console.log('Fetching data...');
// let data=getData();
// console.log(data);
// ya aik promises ha jo pending state me ha
// isko hum async await se handle kar sakte hain

// 1. Approach: Using .then() and .catch()
// data.then(()=>{
//     console.log("Promise resolved");
// }).catch((error)=>{
//     console.log("Promise rejected",error);
// });
// console.log('End');

// more better approach is to use async await

// async function fetchData(){
//     try{
//         await getData(); // jab tak ye promise resolve na ho jaye tab tak aage nahi badhna
//         console.log("Promise resolved");
//     }catch(error){
//         console.log("Promise rejected",error);
//     }
// }
// fetchData();
// console.log('End');

// async function fetchData() {
//   console.log("Fetching...");

//   let result = await getData(); // yahan wait karega
//   console.log(result); // "Data Loaded!"
// }

// fetchData();

// fetchAPI
// smalll overview of fetch API
// detail in fetch folder
async function fetchUsers() {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let response = await x.json(); // yahan wait karega jab tak data na aa jaye
  console.log("response:", response);
}
fetchUsers();
// async function fetchUser() {
// let fetchData= await fetchUsers();
// console.log('fetchData:', fetchData);
// }

// fetchUser();
