import { StackArray } from "../stack-array";

describe('stack-array', () => {
    it('should create a StackArray instance', () => {
        const stackArray = new StackArray();
        expect(stackArray.type).toBe('StackArray');
    });

    it('happy path', () => {
        const stackArray = new StackArray();

        expect(stackArray.peek()).toBe(undefined);
        expect(stackArray.isEmpty()).toBe(true);
        expect(stackArray.pop()).toBe(undefined);

        stackArray.push(1);
        stackArray.push(2);
        stackArray.push(3);

        expect(stackArray.isEmpty()).toBe(false);

        expect(stackArray.peek()).toBe(3);

        expect(stackArray.toString()).toBe('1,2,3');

        expect(stackArray.pop()).toBe(3);

        expect(stackArray.size()).toBe(2);

        stackArray.clear()

        expect(stackArray.size()).toBe(0);
        expect(stackArray.isEmpty()).toBe(true);
        expect(stackArray.toString()).toBe('')
    });

});