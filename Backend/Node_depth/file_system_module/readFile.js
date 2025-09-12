// Example 1: Read File Without Encoding (Buffer Output)

// import { readFile } from "node:fs";
// console.log('Reading file without encoding:');

// readFile("soman.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data); // Will show <Buffer ... > (binary data)
// });


// // Example 2: Read File With UTF-8 Encoding (String Output)



// console.log('Reading file with UTF-8 encoding:');

// readFile("soman.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data); // Will show text directly
// });


// readFile("notfound.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err.message);
//     return;
//   }
//   console.log(data);
// });




// ✅ Example 4: Aborting File Read
// Abort / Aborting ka matlab hota hai kisi process ko chalti hui state me hi beech me rok dena.

// ⚡ Example in real life:

// Tum file download kar rahe ho → 50% ho gaya → cancel button dabaya → download abort ho gaya.

// // Matlab kaam pura nahi hua, process forcefully stop kar diya.

import { readFile } from "node:fs";

const controller = new AbortController();
console.log('Aborting file read example:', controller);

const signal = controller.signal;

readFile("bigfile.txt", { signal, encoding: "utf8" }, (err, data) => {
  if (err) {
    if (err.name === "AbortError") {
      console.log("❌ File reading aborted!");
    } else {
      console.error("Some other error:", err);
    }
    return;
  }
  console.log("✅ File read successfully:", data);
});

// Aborting after 1 second
setTimeout(() => {
  controller.abort();
}, 1000);
