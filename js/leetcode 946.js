var validateStackSequences = function(pushed, popped) {
  let num = [];
  console.log(num);
  for(let i of pushed){
    // 如果匹配，则直接弹出
    if(i === popped[0]){
      popped.shift();
      // 如果出栈后前面的元素也匹配
      // console.log(num.length);
      while(num[num.length - 1] === popped[0] && num.length > 0){
        num.pop();
        popped.shift();
      }
    }else{
      // 如果不匹配，则入栈
      num.push(i);
      console.log(num+"}}"+popped);
    }
  }
  console.log(num+"}}"+popped);
  // 如果num中有未匹配的元素
  // console.log(num+"||"+num.pop() +"||"+ popped.shift());
  while(num.pop() != popped.shift()){
    // console.log("oo");
    return false;
  }
  if(popped.length === 0) return true;
  return false;
};
validateStackSequences([1,2,3,4,5], [4,5,3,2,1]);
