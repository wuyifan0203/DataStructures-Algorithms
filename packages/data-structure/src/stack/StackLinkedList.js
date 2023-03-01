import {DoublyLinkedList} from '../list/DoublyLinkedList'
class StackLinkedList{
    constructor(){
        this.items = new DoublyLinkedList();
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.removeAt(this.size() - 1);
    }

    size(){
        return this.items.size()
    }

    peek(){
        if (this.isEmpty()) {
            return undefined
        }
        return this.items.getElementAt(this.size() - 1);
    }

    isEmpty(){
        return this.items.isEmpty();
    }

    clear(){
        this.items.clear();
    }
}

export {StackLinkedList}