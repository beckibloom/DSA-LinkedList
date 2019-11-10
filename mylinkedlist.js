class LinkedList {
    //constructor: head to indicate beginning of the list
    //starts as empty
    constructor() {
        this.head = null;
    }

    //insertFirst - create a new node and point head to it
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    //insertLast - check to see if list is empty, then iterate through the nodes in the list until you reach the end. Set the end node's pointer to the new node and new node's pointer to null
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        let currNode = this.head
        while (currNode !== null) {
            currNode === currNode.next
        }
        currNode.next = new _Node(item, null)
    }

    //find - start at the head. if list is empty return null. check for the item and return null if you reach the end of the list, otherwise keep looking. return when found.
    find(item) {
        let currNode = this.head
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            currNode = currNode.next;
        }
        return currNode;
    }

    //remove - if the list is empty return null. if the node to be removed is head, make the next node head. start at head. keep track of previous. while the current node is not the item, save the previous node and on to the next. if currNode is null, return 'item not found'. otherwise set previousNode.next to the value for currNode.next.
    remove(item) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next
            return
        }
        let currNode = this.head
        let previousNode = this.head
        while ((currNode !== null) && (currNode !== item)) {
            previousNode = currNode
            currNode = currNode.next
        }
        if (currNode === null) {
            console.log('Item not found')
            return null;
        }
        previousNode.next = currNode.next
    }
}