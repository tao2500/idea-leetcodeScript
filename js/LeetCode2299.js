strongPasswordCheckerII("IloveLe3tcode!");
function strongPasswordCheckerII (password) {
  if(password.length < 8) return false;
  let low = false;
  let cap = false;
  let num = false;
  let special = false;
  let specialChars = new Set(['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+']);
  let prev = "";
  for(let c of password){
    if(c === prev){
      return false;
    }else{
      prev = c;
    }
    if(isLow(c)) low = true;
    if(isCap(c)) cap = true;
    if(isNumber(c)) num = true;
    if(specialChars.has(c)) special = true;
  }
  if(low && cap && num && special) return true;
  return false;
};
function isLow(c){
  return 'a'.charCodeAt() <= c.charCodeAt() && c.charCodeAt() <= 'z'.charCodeAt();
}
function isCap(c){
  return 'A'.charCodeAt() <= c.charCodeAt() && c.charCodeAt() <= 'Z'.charCodeAt();
}
function isNumber(n){
  return typeof(n) === "number" && !isNaN(n);
}
