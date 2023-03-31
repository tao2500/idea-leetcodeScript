function Node(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
// 把数组转换为list
function arrToList(arr){
  let head = new Node(arr[0],null);
  let len = arr.length;
  let point = head;
  for (let i = 1; i < len; i++){
    point.next = new Node(arr[i],null);
    point = point.next;
  }
  return head;
}
console.log(arrToList([1,2,3]));
