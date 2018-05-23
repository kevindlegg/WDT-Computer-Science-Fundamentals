function LinkedList() {
    this._size = 0;
    this._head = null;
}

LinkedList.prototype = {
    createNode: function(val) {
        return {
            data: val,
            next: null
        }
    },
    addToTail: function(val) {
        newNode = this.createNode(val);
        if (this._head == null) { 
            this._head = newNode; 
        } else {
            current = this._head;
            while(current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this._size++;
    },    
    removeDuplicates: function() {
        ptr1 = this._head;
        while(ptr1 != null) {
            ptr2 = ptr1;
            while(ptr2.next != null) {
                if(ptr1.data == ptr2.next.data) {
                    ptr2.next = ptr2.next.next;
                    this._size--;
                } else {
                    ptr2 = ptr2.next;
                }
            }
            ptr1 = ptr1.next;
        }
    }
}

newList = new LinkedList();
newList.addToTail("1");
newList.addToTail("2");
newList.addToTail("1");
newList.addToTail("3");
newList.addToTail("4");
newList.addToTail("5");
newList.addToTail("5");
newList.addToTail("6");
newList.addToTail("7");
newList.addToTail("8");
newList.addToTail("8");
newList.addToTail("8");
newList.addToTail("5");
newList.addToTail("1");
newList.addToTail("1");
console.log(newList);
newList.removeDuplicates();
console.log(newList);