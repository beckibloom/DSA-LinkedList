const LinkedList = require('./mylinkedlist.js')

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
}