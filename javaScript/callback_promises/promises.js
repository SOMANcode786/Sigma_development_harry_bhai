let myPromise = new Promise((resolve, reject) => {
  // async kaam
  let success = false;

  if (success) {
    resolve("✅ Kaam complete ho gaya!");
  } else {
    reject("❌ Error aayi!");
  }
});

myPromise
  .then(result => console.log("this is the success result ---> ",result))   // success case
  .catch(error => console.log(error))    // failure case
  .finally(() => console.log("Promise khatam ho gaya"));
