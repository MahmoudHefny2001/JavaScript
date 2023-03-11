/*

Binary tree:
    - At most 2 children per node
    - Exactly 1 root
    - Exactly 1 path b/w root and any node
    
*/ 

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
                                    
b.left = d;
b.right = e;

c.right =f;

/*

    (A)
   /   \
  (b)  (c)
 /  \     \
(d) (e)   (f)
       
*/

function getTreeValuesBy_DFS(root){
    if(root === null){
        return [];
    }
    const result =[];
    const stack = [ root ];
    while(stack.length > 0){
        const current = stack.pop();
        result.push(current.value);
        if(current.right){
            stack.push(current.right);
        }
        if(current.left){
            stack.push(current.left);
        }
    }
    return result;
}

console.log(getTreeValuesBy_DFS(a));


