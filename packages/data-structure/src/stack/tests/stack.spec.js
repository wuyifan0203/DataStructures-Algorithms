import { Stack } from "../stack";
describe('Stack', () => {
    it('should create a Stack instance', () => {
        const stack = new Stack();
        expect(stack.type).toBe('Stack');
    });

    it('happy path', () => {
        const stack = new Stack();

        expect(stack.peek()).toBe(undefined);
        expect(stack.isEmpty()).toBe(true);
        expect(stack.pop()).toBe(undefined);

        stack.push(1);
        stack.push(2, 3);

        expect(stack.isEmpty()).toBe(false);

        expect(stack.toString()).toBe('1,2,3')

        expect(stack.peek()).toBe(3);

        expect(stack.pop()).toBe(3);

        expect(stack.size()).toBe(2);

        stack.clear()

        expect(stack.size()).toBe(0);
        expect(stack.isEmpty()).toBe(true);
        expect(stack.toString()).toBe('')

    });
});