import { DoubleEndedQueue } from "../doubleEndedQueue";

describe('Double-ended Queue', () => {
    it('should create a DoubleEndedQueue instance', () => {
        const dequeue = new DoubleEndedQueue();
        expect(dequeue.type).toBe('DoubleEndedQueue');
    });

    it('happy path', () => {
        const dequeue = new DoubleEndedQueue();

        expect(dequeue.size()).toBe(0);
        expect(dequeue.isEmpty()).toBe(true);
        expect(dequeue.peekBack()).toBe(undefined);
        expect(dequeue.peekFront()).toBe(undefined);
        
        // <Jone<
        dequeue.addFront('Jone');
        // <Lin<Jone<
        dequeue.addFront('Lin');
        // <Lin<Jone<Wu<
        dequeue.addBack('Wu');
        // <Lin<Jone<Wu<Pike
        dequeue.addBack('Pike');
        // <Eizer<Lin<Jone<Wu<Pike<
        dequeue.addFront('Eizer');

        expect(dequeue.size()).toBe(5);
        expect(dequeue.peekBack()).toBe('Pike');
        expect(dequeue.peekFront()).toBe('Eizer');
        expect(dequeue.toString()).toBe('Eizer,Lin,Jone,Wu,Pike');

        expect(dequeue.removeBack()).toBe('Pike');
        expect(dequeue.toString()).toBe('Eizer,Lin,Jone,Wu');
        expect(dequeue.size()).toBe(4);

        expect(dequeue.removeFront()).toBe('Eizer');
        expect(dequeue.toString()).toBe('Lin,Jone,Wu');
        expect(dequeue.size()).toBe(3);

        dequeue.clear()
        expect(dequeue.size()).toBe(0);
        expect(dequeue.isEmpty()).toBe(true);
    });
});