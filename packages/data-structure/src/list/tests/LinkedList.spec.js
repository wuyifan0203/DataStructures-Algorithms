import { LinkedList } from "../LinkedList";

describe('LinkedList', () => {
    it('should create a LinkedList instance', () => {
        const linkedList = new LinkedList();
        expect(linkedList.type).toBe('LinkedList')
    });

    it('happy path ', () => {
        const linkedList = new LinkedList();

        expect(linkedList.isEmpty()).toBe(true);
        expect(linkedList.size()).toBe(0);
        expect(linkedList.removeAt(0)).toBe(undefined);
        expect(linkedList.toArray().length).toBe(0);
        
        linkedList.push('zero');//0
        linkedList.push('one');//1
        linkedList.push('two');//2
        linkedList.push('three');//3
        linkedList.push('four');//4
        linkedList.push('five');//5

        // console.log(linkedList.toArray());
        expect(linkedList.isEmpty()).toBe(false);
        expect(linkedList.size()).toBe(6)
        // 0 -> 1 -> 2 -> 3 -> 4 -> 5
        expect(linkedList.removeAt(5)).toBe('five');
         // 0 -> 1 -> 2 -> 3 -> 4
        // console.log(linkedList.toArray());
        expect(linkedList.size()).toBe(5);
        expect(linkedList.removeAt(3)).toBe('three');
        // 0 -> 1 -> 2 -> 4
        expect(linkedList.head.next.next.next.element).toBe('four')
     
        // console.log(linkedList.toArray());
        expect(linkedList.removeAt(5)).toBe(undefined);
        //     console.log(linkedList.toArray());
        expect(linkedList.removeAt(3)).toBe('four');
        // 0 -> 1 -> 2

        expect(linkedList.indexOf('zero')).toBe(0); 
        expect(linkedList.indexOf('two')).toBe(2);
        expect(linkedList.indexOf('666')).toBe(-1);

        expect(linkedList.getElementAt(0).element).toBe('zero');
        expect(linkedList.getElementAt(5)).toBe(undefined);
        expect(linkedList.getElementAt(2).element).toBe('two');

        // // 1 -> 2
        expect(linkedList.remove('zero')).toBe(0);
        expect(linkedList.size()).toBe(2);
        expect(linkedList.remove('two')).toBe(1);
      

        linkedList.insert('zero',0);
        expect(linkedList.size()).toBe(2);
        linkedList.insert('two',2);
        expect(linkedList.size()).toBe(3);
        // console.log(linkedList.toArray());

        // console.log(linkedList.head);

    });
});