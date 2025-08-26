# 🌐 Fetch API & HTTP Requests (In-Depth Guide)

## 📌 Introduction
The **Fetch API** is a modern, built-in JavaScript feature for making **HTTP requests**.  
It allows developers to communicate with servers and work with APIs in a clean and promise-based way.  

Unlike the older `XMLHttpRequest`, the Fetch API is:
- Simpler
- Promise-based (no callback hell)
- Cleaner to read with `async/await`

---

## 🔹 Basic Syntax
```js
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));




## 🔹 Options Object

```js
fetch("https://example.com/api", {
  method: "POST",             // HTTP method (default = GET)
  headers: {                  // Extra information for the server
    "Content-Type": "application/json"
  },
  body: JSON.stringify({      // Data to send (for POST, PUT, PATCH)
    name: "Soman",
    role: "Student"
  })
});

## 🔹 GET
👉 Used to retrieve data from a server.
No body is sent with the request.
fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "GET"
})
  .then(res => res.json())
  .then(data => console.log("GET:", data));

## 🔹 POST
👉 Used to send new data to the server (create).
Body is required.
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "My Post",
    body: "This is new post data",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log("POST:", data));
## 🔹 PUT
👉 Used to update existing data (replace the entire record).
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "This is completely replaced data",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log("PUT:", data));


## 🔹 PATch

👉 Used to partially update data (update only specific fields).
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Partially Updated Title"
  })
})
  .then(res => res.json())
  .then(data => console.log("PATCH:", data));

## 🔹 Delete
👉 Used to remove data from the server.

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
  .then(res => console.log("DELETE status:", res.status));



🔹 CRUD with Fetch API

CRUD stands for Create, Read, Update, Delete.
Here’s how Fetch API fits in:

Operation	HTTP Method	Example
Create	POST	POST /posts
Read	GET	GET /posts/1
Update	PUT / PATCH	PUT /posts/1 or PATCH /posts/1
Delete	DELETE	DELETE /posts/1



🔹 Using Async/Await

Cleaner way than .then() chaining.

async function fetchTodo() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log("Todo:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchTodo();


🔹 Response Object

When fetch() runs, it returns a Response object.

let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

console.log(res.status); // 200 (OK)
console.log(res.ok);     // true

To read the data:

res.json() → JSON object

res.text() → raw text

res.blob() → binary data (images, files)

🔹 Error Handling
async function safeFetch() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Error caught:", err.message);
  }
}
safeFetch();




🔹 Summary

fetch() → built-in API for HTTP requests.

Options object → lets you control method, headers, body.

Common methods:

GET → Read

POST → Create

PUT → Replace

PATCH → Update partially

DELETE → Remove

Works with .then() or async/await.

Essential for CRUD applications.


🚀 Practice Ideas

Build a Todo App using Fetch API (GET/POST/PUT/DELETE).

Use JSONPlaceholder API for testing.

Create a small User Manager app (add, update, delete users).

Move towards backend APIs (Node.js + Express + MongoDB).






---

⚡ Yeh ek **proper professional README** hai, jise tum GitHub pe daloge to teachers aur recruiters ko lagega ke tum API requests & CRUD operations kaafi achhi tarah samajhte ho.  

Soman, chaho to main tumhe isi README ke sath ek **mini CRUD Todo App ka code** bhi bana dun jo tum README ke “Practice Ideas” section me add kar sako?
