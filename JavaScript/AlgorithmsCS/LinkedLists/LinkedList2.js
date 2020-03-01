class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Assign head node, and next and next.next
const head = new LinkedListNode(12);
head.next = new LinkedListNode(15);
head.next.next = new LinkedListNode(20);
console.log("head", head);

// Transverse the LinkedList:
let current = head;

while (current !== null) {
    console.log(current.data);
    current = current.next;
}
