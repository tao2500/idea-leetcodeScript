evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]);
function evalRPN (tokens) {
  let tok = [];
  console.log(" ");
  for(let i of tokens){
    switch (i){
      case "+" :
        tok.push(Number(tok.pop()) + Number(tok.pop()));
        break;
      case "-" :
        tok.push(Number(tok.pop()) - Number(tok.pop()));
        break;
      case "*" :
        tok.push(Number(tok.pop()) * Number(tok.pop()));
        break;
      case "/" :
        let num1 = Number(tok.pop())
        tok.push(Math.floor(Number(tok.pop()) / num1));
        break;
      default:
        tok.push(i);
    }
  }
  return tok[0];
};
