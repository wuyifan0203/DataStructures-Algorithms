class QueueElement{
    constructor(element,priority){
        this._element = element,
        this.priority = priority;
    }

    get element(){
        return this._element;
    }

    toString(){
        return this._element.toString();
    }
}
 
export class PriorityQueue{
    constructor(){
        this._items = [];
        this.type = 'PriorityQueue';
    }

    // 添加元素
    enqueue(element,priority){
        const node = new QueueElement(element,priority);
        if(this.isEmpty()){
            this._items.push(node);
        }else{
            for (let i = 0,length = this.size(); i < length ; i++) {
                if(node.priority < this._items[i].priority){
                    this._items.splice(i,0,node)
                    return;
                }
            }
            this._items.push(node);
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        return this._items.shift();
    }

    isEmpty(){
        return !this.size();
    }

    peek(){
        return this._items[0] ?? undefined;
    }


    size(){
        return this._items.length;
    }

    clear(){
        this._items.length = 0;
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }
        let result = this._items[0].toString();
        for (let i = 1,length = this.size(); i < length; i++) {
            result = result + ',' +this._items[1].toString();
        }
        return result;
    }

}