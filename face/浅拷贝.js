function simpleClone(initialObj) {
  let obj = new Object(null);
  for ( let i in initialObj) {
    obj[i] = initialObj[i];
  }
  return obj;
}
let obj = {
  a: "hello",
  b:{ a: "world", b: 21 },
  c:["Bob", "Tom", "Jenny"],
  d:function() {
    alert("hello world");
  }
}
let cloneObj = simpleClone(obj);
console.log(cloneObj.b);
console.log(cloneObj.c);
console.log(cloneObj.d);
cloneObj.b.a = "changed";
cloneObj.c = [1, 2, 3];
cloneObj.d = function() {
  alert("changed");
};
console.log(obj.b);
console.log(obj.c);
console.log(obj.d);
