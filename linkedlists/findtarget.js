class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

function listContains(head, target){
    let current = head;
    while(current !== null){
        if(current.value === target){
            return true;
        }
        current = current.next;
    }
    return false;
}

console.log(listContains(a, 'E'));