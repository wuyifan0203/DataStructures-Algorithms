import { LinkedList, Node } from "./LinkedList";

class DoublyNode extends Node {
    constructor(element) {
        super(element);
        this.prev = null;
    }
}

class DoublyLinkedList extends LinkedList {
    constructor() {
        super();
        this.type = 'DoublyLinkedList';
        this.tail = null;
    }

    /**
     * @description: 向后插入元素
     * @param {any} element
     * @return {void}
     */
    push(element) {
        const node = new DoublyNode(element);
        if (this._count === 0) {
            node.prev = this.head;
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this._count++;
    }

    /**
     * @description: 在指定position插入元素
     * @param {any} element
     * @param {int} position
     * @return {void}
     */
    insert(element, position) {
        if (0 <= position && position <= this._count) {
            const node = new DoublyNode(element);
            if(position === 0){
                if(this.isEmpty()){
                    this.push(element);
                }else{
                    node.prev = this.head.prev;
                    node.next = this.head;
                    this.head = node;
                    this._count++;
                }
            }else if (position === this._count) {
                this.push(element);
            } else {
                const prevNode = this.getElementAt(position - 1);
                node.next = prevNode.next;
                node.prev = prevNode;
                prevNode.next = node;
                this._count++;
            }
        }
    }

    removeAt(position) {
        if (0 <= position && position < this._count) {
            let result;
            if (position === 0) {
                result = this.head.element;
                if (this._count === 1) {
                    this.head = this.tail = null;
                }else{
                    this.head.next.prev = this.head.prev;
                    this.head = this.head.next
                }
            } else if (position === this._count - 1) {
                result = this.tail.element;
                this.tail = this.tail.prev;
            } else {
                const prevNode = this.getElementAt(position - 1);
                result = prevNode.next.element;
                prevNode.next.next.prev = prevNode;
                prevNode.next = prevNode.next.next;
            }
            this._count--;
            return result
        }
    }

    clear() {
        this._count = 0;
        this.head = null;
        this.tail = null;
    }

    /**
     * @description: 删除为element的元素
     * @param {any} element
     * @return {int} position
     */
    remove(element) {
        const index = this.indexOf(element);
        if (index !== -1) {
            this.removeAt(index);
        }
        return index;
    }

    /**
     * @description: 返回指定位置的节点
     * @param {int} position
     * @return {DoublyNode|undefined}
     */
    getElementAt(position) {
        if (0 <= position && position < this._count) {
            if (position === 0) {
                return this.head
            } else if (position === this._count - 1) {
                return this.tail
            } else {
                let current = this.head
                for (let i = 0, length = position; i < length; i++) {
                    current = current.next;
                }
                return current
            }
        } else {
            return undefined
        }
    }

    /**
     * @description: 返回指定元素position
     * @param {any} element
     * @return {int} position
     */
    indexOf(element){
        let result = -1;
        if(this.isEmpty()){
            return result
        }
        let current = this.head;
        for (let i = 0,length = this._count; i < length ; i++) {
            if(this.isEqual(element,current.element)){
                return i
            }
            current = current.next;
        }
        return result
    }

}

export { DoublyLinkedList }