import { Queue } from "./queue";
import { DoubleEndedQueue} from './doubleEndedQueue'

//实现一个模拟的击鼓传花游戏
// 经历 7 轮
// A -> B -> C -> D -> E；
// 每经过一轮会把头移到队列尾部
// 第一轮后： A -> C -> D -> E
// 第二轮后： A -> C -> E
// ... 
// 最后输出队列的第一项，为胜利者，其余人淘汰

const queue = new Queue();
export function hotPotato(list , target) {
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
    const length = Math.floor(target)
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
export function palindromeChecker(string) {
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
