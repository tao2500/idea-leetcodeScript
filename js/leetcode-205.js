isIsomorphic("egcd", "adfd");

function isIsomorphic(s, t) {
  let m = new Map();
  let one = [];
  let ss = s.split("");
  let tt = t.split("");
  let index = 0;
  while (index < tt.length) {
    if (m.has(ss[index])) {
      ss.splice(index, 1, m.get(ss[index]));
    } else {
      // 对velvet为tt[i]的键已出现过
      if (one.indexOf(tt[index]) !== -1){
        // 仅最后一个元素错时
        if (index === tt.length-1){
          return false;
        }
        break;
      }
      m.set(ss[index], tt[index]);
      one.push(tt[index]);
      ss.splice(index, 1, m.get(ss[index]));
    }
    index += 1;
  }
  if (ss.join() === tt.join()) {
    return true;
  }
  return false;
};
