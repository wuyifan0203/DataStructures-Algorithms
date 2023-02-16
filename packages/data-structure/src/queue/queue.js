
export class Queue{
    constructor(){
        // 队列长度
        this._count = 0;
        // 队列首位索引
        this._lowestCount = 0;
        this._items = {};
        this.type = 'Queue'
    }

    // 添加元素
    enqueue(element){
        this._items[this._count] = element;
        this._count++;
    }

    // 推出元素
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const result = this._items[this._lowestCount];
        delete this._items[this._lowestCount];
        this._lowestCount++;
        return result;
    }

    // 查看第一个元素
    peek(){
        return this._items[this._lowestCount] ?? undefined;
    }

    // 清空
    clear(){
        this._count = this._lowestCount = 0;
        this._items = {};
    }

    // 是否为空
    isEmpty(){
        return !this.size();
    }

    // 返回队列长度
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