# JavaScript Callbacks & Promises  

## 📌 Introduction  
JavaScript me asynchronous tasks (jaise API se data fetch karna, files load karna, timer chalana) ko handle karne ke liye **Callbacks** aur **Promises** use hote hain.  
Ye dono hi async code ko manage karte hain taake browser block na ho.  

---

## 🔹 1. Callback Function (Simple Explanation)  
- Callback ek **function hai jo dusre function ko argument ke taur par diya jata hai**.  
- Jab dusra function apna kaam complete kar leta hai, tab wo callback ko call karta hai.  

### ✅ Example:
```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Soman", sayBye);







###callback 