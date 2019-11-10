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

    insertBefore(item, insertAt) {
        //if list is empty, return null
        if (!this.head) {
            return null;
        }
        //find the node with the key
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode !== null) && (currNode.value !== insertAt)) {
            previousNode = currNode
            currNode = currNode.next
        }
        if (currNode === null) {
            console.log('Key not found')
            return null;
        }
        previousNode.next = new _Node(item, currNode)
    }

    insertAfter(item, insertAt) {
        //if list is empty, return null
        if (!this.head) {
            return null;
        }
        //find the node with the key
        let currNode = this.head;
        while ((currNode !== null) && (currNode.value !== insertAt)) {
            currNode = currNode.next
        }
        if (currNode === null) {
            console.log('Key not found')
            return null;
        }
        nextNode = currNode.next
        currNode.next = new _Node(item, nextNode)
    }

    insertAt(item, insertAt) {
        //if list is empty, return null
        if (!this.head) {
            return null;
        }
        //find the node with the key
        let currNode = this.head;
        let previousNode = this.head;
        for (let i = 0; i <= insertAt; i++) {
            previousNode = currNode
            currNode = currNode.next
        }
        if (currNode === null) {
            console.log('Key not found')
            return null;
        }
        previousNode.next = new _Node(item, currNode)
    }
}

function main() {
    let SLL = new LinkedList
    SLL.insertFirst('Starbuck')
    SLL.insertFirst('Husker')
    SLL.insertFirst('Helo')
    SLL.insertFirst('Boomer')
    SLL.insertFirst('Apollo')
    
    SLL.insertLast('Tauhida')

    SLL.remove('Husker')

    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo')
    SLL.insertAt('Kat', 3)

    SLL.remove('Tauhida')

    display(SLL)
}

function display(list) {
    let currentNode = list.head
    if (currentNode === null) {
        console.log('No items to display')
        return;
    }
    while (currentNode !== null) {
        console.log(currentNode.value)
        currentNode = currentNode.next
    }
}

function size(list) {
    let currentNode = list.head
    if (currentNode === null) {
        return 0;
    }
    let count = 0
    while (currentNode !== null) {
        count++
        currentNode = currentNode.next
    }
    return count;
}

function isEmpty(list) {
    if (list.head === null) {
        console.log('List is empty')
        return 'List is empty'
    }
    console.log('List is not empty')
    return 'List is not empty'
}

function findPrevious(item) {
    if (!list.head) {
        return null;
    }
    let currentNode = list.head
    let previousNode = list.head
    while ((currentNode !== null) && (currentNode !== item)) {
        previousNode = currentNode
        currentNode = currentNode.next
    }
    if (currentNode === null) {
        console.log('Item not found')
        return null;
    }
    return previousNode
}

function findLast() {
    if (!list.head) {
        return null;
    }
    let currentNode = list.head
    let previousNode = list.head
    while (currentNode !== null) {
        previousNode = currentNode
        currentNode = currentNode.next
    }
    return previousNode;
}

//BONUS: Solve this problem using both recursive and iterative algorithms.
function reverseList(list) {
    if (!list.head) {
        return null;
    }

    let currentNode = list.head
    let nodeArr = []
    while (currentNode !== null) {
        nodeArr.push(currentNode)
        currentNode = currentNode.next
    }
    list.head = nodeArr[nodeArr.length]
    currentNode = list.head
    for (let i = 0; i < nodeArr.length; i++) {
        currentNode.next = nodeArr[nodeArr.length - i]
        currentNode = currentNode.next
    }
    return list;
}

//second iteration of reversing function!
function reverseListAgain(list) {
    if (!list.head) {
        return null;
    }
    let current = this.head
    let nextNode = current.next
    current.next = null
    let nextAgain = nextNode.next
    while (nextAgain !== null) {
        nextNode.next = current
        current = nextNode
        nextNode = nextAgain
        nextAgain = nextAgain.next
    }
    list.head = nextNode
}

function middleOfAList(list) {
    if (!list.head) {
        return null;
    }
    let currentNode = list.head
    let count = 0
    while (currentNode !== null) {
        let nextStep = currentNode.next.next
        currentNode = nextStep
        count++
    }
    if (currentNode === null) {
        console.log('No midpoint item exists within an even number of items')
        return null;
    }
    let midIndex = count / 2
    let currNode = list.head;
    let prevNode = list.head;
    for (let i = 0; i < midIndex; i++) {
        prevNode = currNode
        currNode = currNode.next
    }
    return prevNode;
}