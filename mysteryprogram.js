//This function removes duplicates from the linked list

//The complexity of this algorithm is O(n) because each while loop will need to be completed once per n number of items in the list

function WhatDoesThisProgramDo(lst) {
    //establishes first item of list
    let current = lst.head;
    //iterates through the list
    while (current !== null) {
        //keeping track of the current node
        let newNode = current;
        //check the next node
        while (newNode.next !== null) {
            //if the next node's value is equal to the current node's value
            if (newNode.next.value === current.value) {
                //set the value of the current node's 'next' to the 'next-next' node
                newNode.next = newNode.next.next;
            }
            //else, the current node's 'next' will stay the same
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}