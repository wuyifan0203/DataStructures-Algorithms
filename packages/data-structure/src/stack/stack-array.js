
export class StackArray{
    constructor(){
        this.items = [];
        this.type = 'StackArray';
    }
    // 添加一个新元素到栈顶
    push(element){
        this.items.push(element);
    }

    // 移除栈顶的元素，同时返回被移除的元素
    pop(){
        return this.items.pop();
    }

    // 查看栈顶的元素。
    peek(){
        return this.items[this.items.length - 1];
    }

    // 如果栈里没有任何元素就返回 true，否则返回 false。
    isEmpty(){
        return !this.items.length;
    }

    // 移除栈里的所有元素。
    clear(){
        this.items.length = 0;
    }

    // 返回栈里的元素个数。
    size(){
        return this.items.length;
    }

    toString(){
        return this.items.toString();
    }
}