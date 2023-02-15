

export class DoubleEndedQueue {
    constructor() {
        // 队列末尾索引
        this._count = 0;
        // 队列首位索引
        this._lowestCount = 0;
        this._items = {};
        this.type = 'DoubleEndedQueue';
    }

    addFront(element){
        if(this.isEmpty()){
            this.addBack(element);
        }else{
            this._lowestCount--;
            this._items[this._lowestCount] = element;
        }
    }

    // 与 Queue.enqueue 相同
    addBack(element){
        this._items[this._count] = element;
        this._count++;
    }

    // 与 Queue.dequeue 相同
    removeFront(){
        if(this.isEmpty()){
            return undefined;
        }
        const result = this._items[this._lowestCount];
        delete this._items[this._lowestCount];
        this._lowestCount++;
        return result;
    }

    // 与 Stack.pop 类似
    removeBack(){
        if(this.isEmpty()){
            return undefined;
        }
        this._count--;
        const result = this._items[this._count];
        delete this._items[this._count];
        return result;
    }

    // 与 Queue.peek 相同
    peekFront(){
        if(this.isEmpty()){
            return undefined;
        }
        return this._items[this._lowestCount];
    }

    // 与 Stack.peek 类似
    peekBack(){
        if(this.isEmpty()){
            return undefined;
        }
        return this._items[this._count-1];
    }

    clear(){
        this._count = this._lowestCount = 0;
        this._items = {};
    }

    isEmpty(){
        return this.size() === 0;
    }

    size(){
        return this._count - this._lowestCount;
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }
        let result = this._items[this._lowestCount];
        for (let i = this._lowestCount +1 ,length = this._count; i < length; i++) {
            result = result + `,${this._items[i]}`   
        }
        return result;
    }
}