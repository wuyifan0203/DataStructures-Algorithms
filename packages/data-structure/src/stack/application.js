import { Stack } from "./stack.js";

const stack = new Stack()

export function baseConverter(number ,base = 2) {

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