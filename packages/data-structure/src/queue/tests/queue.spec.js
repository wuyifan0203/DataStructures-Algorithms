import { Queue } from "../queue";

describe('Queue', () => {
    it('should create a queue instance', () => {
        const queue = new Queue();
        expect(queue.type).toBe('Queue');
    });

    it('happy path', () => {
        const queue = new Queue();

        expect(queue.peek()).toBe(undefined);
        expect(queue.isEmpty()).toBe(true);
        expect(queue.dequene()).toBe(undefined);

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);


        expect(queue.isEmpty()).toBe(false);

        expect(queue.toString()).toBe('1,2,3')

        expect(queue.peek()).toBe(1);

        expect(queue.dequene()).toBe(1);

        expect(queue.peek()).toBe(2);

        expect(queue.size()).toBe(2);

        queue.clear()

        expect(queue.size()).toBe(0);
        expect(queue.isEmpty()).toBe(true);
        expect(queue.toString()).toBe('')
    });
    
});