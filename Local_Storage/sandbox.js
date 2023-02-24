// store data in local storage
localStorage.setItem("name", "Ankit");
localStorage.setItem("age", 22);

// get data from local storage
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log(name, age);

// update data in local storage
localStorage.setItem("name", "Yash");
localStorage.age = 20;

name = localStorage.getItem("name");
age = localStorage.getItem("age");

console.log(name, age);

// delete data from local storage
// localStorage.removeItem("name");
localStorage.clear();

name = localStorage.getItem("name");

console.log(name);

// Stringifying and Parsing JSON data
const todos = [
    { text: "play mariokart", author: "shaun" },
    { text: "buy some milk", author: "mario" },
    { text: "buy some bread", author: "luigi" },
];

localStorage.setItem("todos", JSON.stringify(todos));

const stored = localStorage.getItem("todos");

console.log(stored);
console.log(JSON.parse(stored));
