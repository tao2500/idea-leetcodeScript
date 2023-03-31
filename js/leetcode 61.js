var rotateRight = function(head, k) {
  let top = head;
  let oldNode = head;
  // 标记尾节点是否已经链接头结点
  let last = false;
  while(k > 0){
    if(head.next === null){
      head.next = top;
      last = true;
    }
    oldNode = head;
    head = head.next;
    k--;
  }
  // 断开head与上一节点的链接
  oldNode.next = undefined;
  // 如果还没遍历到尾节点
  if(!last){
    oldNode = head;
    while(oldNode.next !== null) oldNode = oldNode.next;
    oldNode.next = top;
  }
  return head;
};
