export class Stack {
    constructor() {
        this._items = {};
        this._count = 0;
        this.type = 'Stack';
    }

    // 添加一个新元素到栈顶
    push(element) {
        this._items[this._count] = element;
        this._count++;
    }

    // 移除栈顶的元素，同时返回被移除的元素
    pop() {
        if(this.isEmpty()){
            return undefined;
        }
        this._count--;
        const result = this._items[this._count];
        delete this._items[this._count];
        return result
    }

    // 查看栈顶的元素。
    peek() {
        if(this.isEmpty()){
            return undefined;
        }
        return this._items[this._count - 1]
    }

    // 如果栈里没有任何元素就返回 true，否则返回 false。
    isEmpty() {
        return !this._count;
    }

    // 移除栈里的所有元素。
    clear() {
        this._count = 0;
        this._items = {};
    }

    // 返回栈里的元素个数。
    size() {
        return this._count;
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }
        let result = this._items[0];
        for (let i = 1,length = this._count; i < length; i++) {
            result = result + `,${this._items[i]}`
        }
        return result;
    }
}