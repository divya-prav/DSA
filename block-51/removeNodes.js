function removeNodes(head,target){
    let list = head;
    while(list != null){
        if(list.next === target){
            list.next = list.next.next;
        }
        list = list.next;
    }

    return head;
}