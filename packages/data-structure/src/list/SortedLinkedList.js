import { LinkedList } from "./LinkedList";

const Compare = {
    LESS_THAN:-1,
    BIGGER_THAN:1
}

export class SortedLinkedList extends LinkedList{
    constructor(){
        super()

    }

    isEqual(a,b){
        if(a===b){
            return 0;
        }
        return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
    }

    getIndexNextSortedElement(element){
        let current = this.head;
        let i = 0;
        for (let length = this.size(); i < length && current; i++) {
            const comp = this.isEqual(element,current.element);
            if(comp === Compare.LESS_THAN){
                return 1;
            }
            current = current.next;
        }
        return i;
    }

    // index 不会生效，因为内部做了排序
    insert(element,index = 0){
        if(this.isEmpty()){
            return super.insert(element,0);
        }
        const position = this.getIndexNextSortedElement(element);
        return super.insert(element,position);
    }

}