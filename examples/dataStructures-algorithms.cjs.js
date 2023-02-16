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

const stack = new Stack();

function baseConverter(number ,base = 2) {

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

exports.DoubleEndedQueue = DoubleEndedQueue;
exports.PriorityQueue = PriorityQueue;
exports.Queue = Queue;
exports.Stack = Stack;
exports.StackArray = StackArray;
exports.baseConverter = baseConverter;
exports.hotPotato = hotPotato;
exports.palindromeChecker = palindromeChecker;
