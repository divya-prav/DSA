class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function mergeList(linkedList1,linkedList2){
    let list1 = linkedList1;
    let list2 = linkedList2;
    let mergedList = new Node(0);
    while(list1 !== null && list2 !== null){
        if(list1 <= list2){
           mergedList.next = list1;
           list1 = list1.next;
        }
        if(list2 < list1){
            mergedList.next = list2;
            list2 = list2.next;
         }
    }

    while(list1 !== null){
        mergedList.next = list1;
        list1 = list1.next;
    }

    while(list2 !== null){
        mergedList.next = list2;
        list2 = list2.next;
    }
    return mergedList.next;
}