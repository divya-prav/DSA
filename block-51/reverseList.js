
function reverseList(head){
    let node = head;
    let next = node.next;
    let next2;
    node.next = null;

    while(next){
        next2 = next.next;
        next.next = node ;
        node = next;
        next = next2;
    }
    return node;
}

