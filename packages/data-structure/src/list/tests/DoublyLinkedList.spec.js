import { DoublyLinkedList } from "../DoublyLinkedList";

describe('DoublyLinkedList', () => {
    it('should ccreat a instance', () => {
        const doubly = new DoublyLinkedList();
        expect(doubly.type).toBe('DoublyLinkedList')
    });

    it('happy path', () => {
        const doubly = new DoublyLinkedList();

        expect(doubly.isEmpty()).toBe(true);
        expect(doubly.size()).toBe(0);
        expect(doubly.toArray().length).toBe(0);

        doubly.push('zero');
        doubly.push('one');
        doubly.push('two');
        doubly.push('three');
        doubly.push('four');
        doubly.push('five');

        expect(doubly.size()).toBe(6);
        expect(doubly.isEmpty()).toBe(false);
        expect(doubly.toArray().length).toBe(6);

        // getElementAt
        expect(doubly.getElementAt(0).element).toBe('zero');
        expect(doubly.getElementAt(3).element).toBe('three');
        expect(doubly.getElementAt(5).element).toBe('five');
        expect(doubly.getElementAt(10)).toBe(undefined); // out of range

        // removeAt
        // 0 - 1 - 2 - 3 - 4 - 5
        expect(doubly.removeAt(0)).toBe('zero');
        // 1 - 2 - 3 - 4 - 5
        expect(doubly.removeAt(2)).toBe('three');
        // 1 - 2 - 4- 5
        expect(doubly.removeAt(3)).toBe('five');
        // 1 - 2 - 4
        expect(doubly.removeAt(10)).toBe(undefined); // out of range
        expect(doubly.size()).toBe(3);

        // insert
        // 1 - 2 - 4
        doubly.insert('zero', 0);
        // 0 - 1 - 2 - 4
        expect(doubly.getElementAt(0).element).toBe('zero');
        doubly.insert('three', 3);
        // 0 - 1 - 2 - 3 - 4
        expect(doubly.getElementAt(3).element).toBe('three');
        doubly.insert('five', 5);
         // 0 - 1 - 2 - 3 - 4 - 5
        expect(doubly.getElementAt(5).element).toBe('five');
        doubly.insert('666', 10); // out of range
        expect(doubly.size()).toBe(6);

        // indexOf
        expect(doubly.indexOf('zero')).toBe(0);
        expect(doubly.indexOf('three')).toBe(3);
        expect(doubly.indexOf('five')).toBe(5);
        expect(doubly.indexOf('hellow')).toBe(-1); // out of range;

        // remove
        expect(doubly.remove('zero')).toBe(0);
        expect(doubly.remove('three')).toBe(2);
        expect(doubly.remove('five')).toBe(3);
        expect(doubly.remove('hellow')).toBe(-1); // out of range
        expect(doubly.size()).toBe(3);

        // clear
        doubly.clear();
        expect(doubly.size()).toBe(0);
        expect(doubly.isEmpty()).toBe(true);
        expect(doubly.toArray().length).toBe(0);
    });

});