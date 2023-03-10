class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(7);

a.next = b;
b.next = c;
c.next = d;


function sumlist(head){
    let sum = 0;
    let current = head;
    while(current !== null){
        sum += current.value;
        current = current.next;
    }
    return sum;
}

console.log(sumlist(a));