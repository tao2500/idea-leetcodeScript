findingUsersActiveMinutes([[0,5],[1,2],[0,2],[0,5],[1,3]],5);
function findingUsersActiveMinutes (logs, k) {
  let retu = new Array(k).fill(0);
  let uam = new Map();
  for(let i of logs){
    uam.set(i[0], uam.get(i[0])? uam.get(i[0]).add(i[1]) : new Set([i[1]]));
  }
  for(let [k,j] of uam.entries()){
    ++retu[j.size - 1];
  }
  return retu;
}
