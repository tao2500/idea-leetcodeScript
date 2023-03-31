var insertionSortList = function(head) {
  if(!head || !head.next) return head;
  // 当前排好序列的尾节点
  let foot = head;
  let headNode = new ListNode(null, head);
  while(head.next){
    head = head.next;
    // 如果当前节点小于头结点当前节点为头结点
    if(head.val < headNode.next.val){
      // 当前节点的上一节点为已排序链表尾结点
      foot.next = head.next;
      head.next = headNode.next;
      headNode.next = head;
      continue;
    }
    // 如果当前节点大于排好序的尾结点，则直接插入尾结点
    if(head.val >= foot.val){
      foot = head;
      continue;
    }else{
      // 先找到插入位置
      let targetNode = headNode.next;
      for(let i = targetNode; i.val < head.val; i = i.next) targetNode = i;
      // 扣出待插入的节点(将已排序列表的尾结点的next指向扣出节点的next)
      if(head.next) foot.next = head.next;
      // 插入
      head.next = targetNode.next;
      targetNode.next = head;
    }
    head = foot;
  }
  return headNode.next;
};
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
// 把数组转换为list
function arrToList(arr){
  let head = new ListNode(arr[0],null);
  let len = arr.length;
  let point = head;
  for (let i = 1; i < len; i++){
    point.next = new ListNode(arr[i],null);
    point = point.next;
  }
  return head;
}
insertionSortList(arrToList([4,2,1,3]));
