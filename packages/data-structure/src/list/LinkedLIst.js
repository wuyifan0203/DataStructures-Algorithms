import { isSame } from "../utils/common";

export class Node {
    constructor(element) {
        this._element = element;
        this.next = null;
    }

    get element() {
        return this._element;
    }

    set element(newValue) {
        this._element = newValue;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this._count = 0;
        this.type = 'LinkedList'
    }

    /**
     * @description: 向后插入
     * @param {any} element
     * @return {void}
     */
    push(element) {
        const node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this._count++;
    }

    /**
     * @description: 在指定位置插入新元素
     * @param {any} element
     * @param {int} position
     * @return {void}
     */
    insert(element, position) {
        if (position >= 0 && position <= this._count) {
            if (this.isEmpty() || position === this._count) {
                this.push(element)
            } else {
                const node = new Node(element);
                if (position === 0) {
                    node.next = this.head
                    this.head = node;
                } else {
                    let current = this.head;
                    for (let i = 0,length = position -1; i < length; i++) {
                        current = current.next
                    }
                    node.next = current.next.next;
                    current.next = node;
                }
                this._count++;
            }
        }
    }

    /**
     * @description: 得到指定索引的元素
     * @param {int} position
     * @return {undefined|Node}
     */
    getElementAt(position) {
        if (this.isEmpty()) {
            return undefined
        }
        if (position === 0) {
            return this.head;
        }
        if (position > 0 && position < this._count) {
            let current = this.head;
            for (let i = 0; i < position; i++) {
                current = current.next;
            }
            return current;
        }
        return undefined
    }


    /**
     * @description: 删除指定元素
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
     * @description: 返回元素在列表中的索引
     * @param {any} element
     * @return {int} position
     */
    indexOf(element) {
        let result = -1;
        if (this.isEmpty()) {
            return result;
        }
        let current = this.head
        for (let i = 0, length = this._count; i < length; i++) {
            if (this.isEqual(element, current.element)) {
                return i;
            } else {
                current = current.next;
            }
        }
        return result
    }

    /**
     * @description:  删除指定位置的索引
     * @param {int} position
     * @return {undefined|any}
     */
    removeAt(position) {
        if (this.isEmpty()) {
            return undefined
        }
        if (position >= 0 && position < this._count) {
            let current = this.head;
            let result;
            if (position === 0) {
                result = current.element;
                this.head = this.head.next;
            }else{
                for (let i = 0,length = position-1 ; i < length; i++) {
                    current = current.next;
                }
                result = current.next.element;
                current.next = current.next?.next ?? null;
            }
            this._count--;
            return result
        } else {
            return undefined
        }
    }

    /**
     * @description: 判断是否为空
     * @return {boolean}
     */
    isEmpty() {
        return this._count === 0;
    }

    /**
     * @description: 返回长度
     * @return {int}
     */
    size() {
        return this._count
    }

    /**
     * @description: 比较a 与 b 是否相等
     * @param {any} a
     * @param {any} b
     * @return {boolean}
     */
    isEqual(a,b){
        return isSame(a,b)
    }

    /**
     * @description: 清空
     * @return {void}
     */
    clear(){
        this._count = 0;
        this.head = null
    }

    /**
     * @description: 转化为数组
     * @return {any[]}
     */
    toArray() {
        if (this.isEmpty()) {
            return [];
        } else {
            const result = [];
            let current = this.head;
            while (current !== null) {
                result.push(current.element);
                current = current.next;
            }
            return result;
        }

    }
}