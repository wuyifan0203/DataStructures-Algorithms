import { LinkedList, Node } from "./LinkedList";


export class CircularLinkedList extends LinkedList {

    constructor() {
        super();
        this.type = 'CircularLinkedList';
    }

    insert(element, position) {
        if (position >= 0 && position <= this._count) {
            const node = new Node(element);
            let current = this.head;
            if (position === 0) {
                if (this.head === null) {
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    const lastNode = this.getElementAt(this._count-1);
                    lastNode.next = node;
                    this.head = node;
                }
            } else {
                const prev = this.getElementAt(position - 1);
                node.next = prev.next;
                prev.next = node;
            }
            this._count++;
            return true;
        }
        return false
    }

    removeAt(position){
        if(this.isEmpty()){
            return undefined
        };
        if(0<=position && position < this._count){
            let current = this.head;
            if(position === 0){
                if(this._count === 1){
                    this.head = null;
                }else{
                    const lastNode = this.getElementAt(this._count-1);
                    lastNode.next = this.head.next;
                    this.head = this.head.next;
                }
            }else{
                const prev = this.getElementAt(position -1);
                current = prev.next;
                prev.next = current.next;
            }
            this._count--;
            return current.element;
        }
        return undefined
    }
} 