let timeout;
console.log(!timeout);
timeout = setTimeout(() => console.log("MyFunction"), 3000);
console.log(!timeout);
clearTimeout(timeout);
console.log(!timeout);
