'use strict';

class Stack {
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
            result = result + `,${this._items[i]}`;
        }
        return result;
    }
}

class StackArray{
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

const isSame = Object.is;

class Node {
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

class LinkedList {
    constructor() {
        this.head = null;
        this._count = 0;
        this.type = 'LinkedList';
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
                this.push(element);
            } else {
                const node = new Node(element);
                if (position === 0) {
                    node.next = this.head;
                    this.head = node;
                } else {
                    let current = this.head;
                    for (let i = 0,length = position -1; i < length; i++) {
                        current = current.next;
                    }
                    node.next = current.next;
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
        let current = this.head;
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
            }else {
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
        this.head = null;
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
                }else {
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
                }else {
                    this.head.next.prev = this.head.prev;
                    this.head = this.head.next;
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
                let current = this.head;
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

class StackLinkedList{
    constructor(){
        this.items = new DoublyLinkedList();
    }
    push(element){
        this.items.push(element);
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

const stack = new Stack();

function baseConverter(number, base = 2) {

    if (!(base >= 2 && base <= 36)) {
        return '';
    }
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let origin = number;
    let result = '';
    while (origin > 0) {
        stack.push(origin % base);
        origin = Math.floor(origin / base);
    }
    while (!stack.isEmpty()) {
        result = result + digits[stack.pop()];
    }
    stack.clear();
    return result;
}

class Queue{
    constructor(){
        // 队列长度
        this._count = 0;
        // 队列首位索引
        this._lowestCount = 0;
        this._items = {};
        this.type = 'Queue';
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
            result = result + `,${this._items[i]}`;   
        }
        return result;
    }
}

class DoubleEndedQueue {
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
        }else {
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
            result = result + `,${this._items[i]}`;   
        }
        return result;
    }
}

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
 
class PriorityQueue{
    constructor(){
        this._items = [];
        this.type = 'PriorityQueue';
    }

    // 添加元素
    enqueue(element,priority){
        const node = new QueueElement(element,priority);
        if(this.isEmpty()){
            this._items.push(node);
        }else {
            for (let i = 0,length = this.size(); i < length ; i++) {
                if(node.priority < this._items[i].priority){
                    this._items.splice(i,0,node);
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

//实现一个模拟的击鼓传花游戏
// 经历 7 轮
// A -> B -> C -> D -> E；
// 每经过一轮会把头移到队列尾部
// 第一轮后： A -> C -> D -> E
// 第二轮后： A -> C -> E
// ... 
// 最后输出队列的第一项，为胜利者，其余人淘汰

const queue = new Queue();
function hotPotato(list , target) {
    if(!Array.isArray(list)){
        console.error('the list should be a instance of Array.');
        return;
    }
    if(target<0){
        console.error('the target is should be a positive integer.');
        return;
    }
    for (let j = 0,length = list.length; j < length; j++) {
        queue.enqueue(list[j]);
    }
    const length = Math.floor(target);
    while (queue.size() === 1) {
        for (let i = 0; i < length; i++) {
            queue.enqueue(queue.dequene());
        }
    }

    const winner = queue.peek();
    queue.clear();
    return winner;
}

// 回文字符检查器
// 12321  asdfgfdsa
// 顺序颠倒相同的极为回文字符
// 将字符全部填入队列：['1','2','3','2','1']
// 同时从头拿去和从尾拿取去比较：<-['1']  ['1'] ->
// 如果队列只剩一个且头尾一直相同则为回文字符
const dequene = new DoubleEndedQueue();
function palindromeChecker(string) {
    if(typeof string !== 'string'){
        console.error('the params need a instance of string.');
        return;
    }
    for (let i = 0,length = string.length; i < length; i++) {
        dequene.addBack(string.charAt(i));
    }
    let isEqual = true;
    let front,back;
    while (isEqual && dequene.size() > 1) {
        back = dequene.removeBack();
        front = dequene.removeFront();
        if(back !== front){
            isEqual = false;
        }
    }
    dequene.clear();
    return isEqual;
}

class CircularLinkedList extends LinkedList {

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
        }        if(0<=position && position < this._count){
            let current = this.head;
            if(position === 0){
                if(this._count === 1){
                    this.head = null;
                }else {
                    const lastNode = this.getElementAt(this._count-1);
                    lastNode.next = this.head.next;
                    this.head = this.head.next;
                }
            }else {
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

const Compare = {
    LESS_THAN:-1,
    BIGGER_THAN:1
};

class SortedLinkedList extends LinkedList{
    constructor(){
        super();

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

class Set{
    constructor(values){
        this.items = {};
        if(values && values.length){
            for (let i = 0,length = values.length; i < length; i++) {
                this.add(values[i]);
            }
        }
    }

    /**
     * @description: 添加一个对象，添加成功返回`true`,否则返回`false`
     * @param {any} element
     * @return {boolean}
     */
    add(element){
        if(!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;
    }

    /**
     * @description: 检查是否存在该元素, 如果存在返回`true`,否则返回`false`
     * @param {any} element
     * @return {boolean}
     */
    has(element){
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    /**
     * @description: 返回集合长度
     * @return {number}
     */
    size(){
        return Object.keys(this.items).length
    }

    /**
     * @description: 删除元素，删除成功返回`true`,否则返回`false`
     * @param {any} element
     * @return {boolean}
     */
    delete(element){
        if(this.has(element)){
            delete this.items[element];
            return true
        }
        return false
    }

    /**
     * @description: 清空集合
     * @return {void}
     */
    clear(){
        this.items = {};
    }

    /**
     * @description: 返一个包含所有数组的元素
     * @return {any[]}
     */
    values(){
        return Object.values(this.items)
    }

    
    /**
     * @description: A集合与B集合取并集于当前集合
     * @param {Set} ASet
     * @param {Set} BSet
     * @return {this}
     */
    union(ASet,BSet){
        this.clear();
        this.unionWidth(ASet);
        this.unionWidth(BSet);
        return this
    }

    /**
     * @description: 当前集合与B集合求并集
     * @param {Set} BSet
     * @return {this}
     */
    unionWidth(BSet){
        const values = BSet.values();
        for (let i = 0,length = values.length; i < length; i++) {
            this.add(values[i]);       
        }
        return this
    }

    /**
     * @description: A集合与B集合取交集于当前集合
     * @param {Set} ASet
     * @param {Set} BSet
     * @return {this}
     */
    intersection(ASet,BSet){
        this.clear();
        this.unionWidth(ASet);
        this.intersectionWidth(BSet);
        return this
    }

    /**
     * @description: 当前集合与B集合取交集
     * @param {Set} BSet
     * @return {this}
     */
    intersectionWidth(BSet){
        const values = this.values();
        for (let i = 0,length = this.size(); i < length; i++) {
            if(!BSet.has(values[i])){
                this.delete(values[i]);
            }            
        }
        return this;
    }

    /**
     * @description: A集合与B集合求茶集于A集合中
     * @param {Set} ASet
     * @param {Set} BSet
     * @return {this}
     */
    difference(ASet,BSet){
        this.clear();
        this.unionWidth(ASet);
        this.differenceWidth(BSet);
        return this
    }

    /**
     * @description: 当前集合与B集合求差集
     * @param {Set} BSet
     * @return {this}
     */
    differenceWidth(BSet){
        const values = BSet.values();
        for (let i = 0,length = values.length; i < length; i++) {
            if (this.has(values[i])) {
                this.delete(values[i]);
            }
        }
        return this
    }

    /**
     * @description: 判断Set是否是当前的集合的子集
     * @param {Set} Set
     * @return {boolean}
     */
    isSubsetOf(Set){
        const values = Set.values();
        for (let i = 0,length = values.length; i < length; i++) {
            if(!this.has(values[i])){
                return false
            }
        }
        return true
    }
}

exports.CircularLinkedList = CircularLinkedList;
exports.DoubleEndedQueue = DoubleEndedQueue;
exports.DoublyLinkedList = DoublyLinkedList;
exports.LinkedList = LinkedList;
exports.PriorityQueue = PriorityQueue;
exports.Queue = Queue;
exports.Set = Set;
exports.SortedLinkedList = SortedLinkedList;
exports.Stack = Stack;
exports.StackArray = StackArray;
exports.StackLinkedList = StackLinkedList;
exports.baseConverter = baseConverter;
exports.hotPotato = hotPotato;
exports.palindromeChecker = palindromeChecker;
