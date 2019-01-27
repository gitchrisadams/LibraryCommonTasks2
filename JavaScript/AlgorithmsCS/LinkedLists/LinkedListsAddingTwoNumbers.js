class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  addTwoNumbers(l1, l2) {
    const l3 = new LinkedList();

    var num1 = "";
    var num2 = "";
    for (var i = 1; i <= l1.size(); i++) {
      num1 += l1.getAt(l1.size() - i).data.toString();
    }

    for (var j = 1; j <= l2.size(); j++) {
      num2 += l2.getAt(l2.size() - j).data.toString();
    }

    var total = parseInt(num1) + parseInt(num2);
    var totalRev = total.toString().split("").reverse();

    totalRev.forEach(function(num) {
      l3.insertLast(num);
    });

    var returnArray = [];

    l3.forEach(function(num) {
      returnArray.push(parseInt(num.data));
    });

    // Could also just return l3 if want the LinkedList.
    console.log(returnArray);
    return returnArray;
  }

}


const l1 = new LinkedList();
const l2 = new LinkedList();

l1.insertLast(2);
l1.insertLast(4);
l1.insertLast(3);
//l1.insertLast(5);

l2.insertLast(5);
l2.insertLast(6);
l2.insertLast(4);

console.log("Manual test of data: (Not reversed)");
console.log(342 + 465);

l1.addTwoNumbers(l1, l2);













