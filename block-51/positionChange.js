function positionChange(head){
    if(head.next === null) return head;

    let prev = null;
    let first = head;
    let second = head.next;
    let next = second !== null ? second.next : null;
    let newHead = second;

    while(first !== null && second !== null){
        let newFirst = next;
        let newSecond = newFirst !== null ? newFirst.next:null;
        swap(prev,first,second,next);
        second = newSecond;
        next = newSecond !== null ? newSecond.next :null;
    }

    return newHead
}

function swap(prev,node1,node2,next){
    if(prev){
        prev.next = node2;
    }
    node2.next = node1;
    node1.next = next;
}