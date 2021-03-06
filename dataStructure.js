 // data sctructre code written in javascript

//  linked list pros: faster insert and delete, cons: slower find
function node (data) {
    this.data = data;
    this.next = null;
}
function linkedList() {
    this.head = null;
    
    this.append = function (val) {
        var newNode = new node(val);
        if(this.head === null){
            this.head = newNode;
            return;        
        } else {
            var current = this.head;
            while(current.next !== null){
                current = current.next;     
            }

            current.next = newNode;
            return;
        }
    }

    this.prepend = function (val) {
        var newNode = new node(val);
        if(this.head === null){
            this.head = newNode;
            return;        
        } else {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
    }

    this.delete = function (val) {
        if(this.head.data === val){
            this.head = this.head.next;
            return;        
        } else {
            var current = this.head;
            while(current.next.data !== val){
                current = current.next;     
            }

            current.next = current.next.next;
            return;
        }
    }
}

var TreeNode = function(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

var Tree = function (rootData) {
    this.root = new TreeNode(rootData);
    this.add = function(data, node){
        var insertedNode = new TreeNode(data);
        if(data >= node.left){
            if(node.right === null){
                node.right = insertedNode;
                return "succefully added to left";
            }
            this.add(data, node.right)
        } else {
            if(node.left === null){
                node.left = insertedNode;
                return "succefully added to right";
            }
            this.add(data, node.left)
        }
    }
}
