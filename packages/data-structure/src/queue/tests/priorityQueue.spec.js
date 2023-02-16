import { PriorityQueue } from "../priorityQueue";

describe('Priority Queue', () => {

    it('should create a PriorityQueue instance ', () => {
        const ptqueue = new PriorityQueue();
        expect(ptqueue.type).toBe('PriorityQueue');
    });

    it('happy path', () => {
        const ptqueue = new PriorityQueue();

        expect(ptqueue.size()).toBe(0);
        expect(ptqueue.peek()).toBe(undefined);
        expect(ptqueue.isEmpty()).toBe(true);
        expect(ptqueue.dequeue()).toBe(undefined);
        expect(ptqueue.toString()).toBe('');

        ptqueue.enqueue('Jone Wick',100);
        ptqueue.enqueue('King',100);
        ptqueue.enqueue('Alice',101);

        expect(ptqueue.peek().element).toBe('Jone Wick');
        expect(ptqueue.size()).toBe(3);
        expect(ptqueue.dequeue().element).toBe('Jone Wick');
        expect(ptqueue.peek().element).toBe('King');
        expect(ptqueue.toString()).toBe('King,Alice')

        ptqueue.enqueue('Jocker',1);
        ptqueue.enqueue('BatMan',1);
        ptqueue.enqueue('Yellow',1);
        ptqueue.enqueue('Cube',88);

        expect(ptqueue.peek().element).toBe('Jocker');

        ptqueue.clear()
        expect(ptqueue.size()).toBe(0);
        expect(ptqueue.toString()).toBe('');
        expect(ptqueue.isEmpty()).toBe(true);
    });
});