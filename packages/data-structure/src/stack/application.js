import { Stack } from "./stack.js";

const stack = new Stack()

export function baseConverter(number, base = 2) {

    if (!(base >= 2 && base <= 36)) {
        return '';
    }
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let origin = number;
    let result = '';
    while (origin > 0) {
        stack.push(origin % base);
        origin = Math.floor(origin / base)
    };

    while (!stack.isEmpty()) {
        result = result + digits[stack.pop()];
    }
    stack.clear();
    return result;
}
// leetcode 20
export const isValid = function (s) {
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    if (s === '' || !s.length % 2) return false;
    let stack = [s.charAt(0)];
    let index = 1;
    const match = (a, b) => {
        return a === map[b];
    }
    for (let i = 1; i < s.length; i++) {
        stack.push(s.charAt(i));
        if (stack.length > 1) {
            if (match(stack[index - 1], stack[index])) {
                stack.pop();
                stack.pop();
                index = index - 2 < 0 ? 1 : index - 1;
            } else {
                index++
            }
        }
    }
    return !stack.length
};

// leetcode 1047
// 1 <= S.length <= 20000
export const removeDuplicates = function(s) {
    if(s.length<3 && s.charAt(0) !== s.charAt(1)){
        return s
    }
    const stack = [s.charAt(0)];
    let index = 1;
    for (let i = 1,length = s.length; i < length; i++) {
        stack.push(s.charAt(i));
        if(stack[index] === stack[index-1]){
            stack.splice(index - 1,2);
            index  = index - 2 <0 ? 0 : index -1;
        }else{
            index++;
        }
    }
    return stack.join('');
};