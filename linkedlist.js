class LinkedList {
    constructor() {
        //has a head to indicate this is the beginning of the list
        //head is set to null because we start with an empty list
        this.head = null;
    }

    //when inserting, create a new node item and point the head to that new node
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        //check to see if the list is empty
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            //iterate through the nodes in the list until you reach the end (tempNode.next === null)
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            //set the end node's pointer to the new node and the new node's pointer to null
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        //start at the head
        let currNode = this.head;
        //if the list is empty
        if (!this.head) {
            return null;
        }
        //check for the item
        while (currNode.value !== item) {
            //Return null if it's the end of the list and the item is not on the list
            if (currNode.next === null) {
                return null;
            }
            else {
                //otherwise keep looking
                currNode = currNode.next;
            }
        }
        //found it
        return currNode;
    }

    remove(item) {
        //if the list is empty
        if (!this.head) {
            return null;
        }
        //if the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        //start at the head
        let currNode = this.head;
        //keep track of previous
        let previousNode = this.head;

        while((currNode !== null) && (currNode.value !== item)) {
            //save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return null;
        }
        previousNode.next = currNode.next;
    }
}