import {Set} from '../Set'
describe('Set', () => {
    it('happy path ', () => {

        const set = new Set();

        expect(set.size()).toBe(0);
        expect(set.values().length).toBe(0);

        // add
        set.add(0);
        expect(set.size()).toBe(1);
        set.add(0);
        expect(set.size()).toBe(1);
        expect(set.values().toString()).toBe('0');

        set.add(1);
        set.add(2);
        set.add(3);
        set.add(4);
        set.add(5);
        set.add(7);
        set.add(8);

        // has
        expect(set.has(0)).toBe(true);
        expect(set.has(1)).toBe(true);
        expect(set.has(6)).toBe(false); // out of range

        // delete
        set.delete(7);
        expect(set.size()).toBe(7);
        expect(set.has(7)).toBe(false);
        expect(set.values().toString()).toBe('0,1,2,3,4,5,8');

        // clear
        set.clear();
        expect(set.size()).toBe(0);
        expect(set.values().length).toBe(0);

        const ASet = new Set([1,2,3]);
        const BSet = new Set([4,5,6]);
        const CSet = new Set([2,3,4,5])

        // unionWidth
        set.unionWidth(ASet);
        expect(set.size()).toBe(3);
        expect(set.values().toString()).toBe('1,2,3');

        // union
        set.union(ASet,BSet);
        expect(set.size()).toBe(6);
        expect(set.values().toString()).toBe('1,2,3,4,5,6');

        set.clear()
        // intersectionWidth
        set.unionWidth(ASet);
        set.intersectionWidth(CSet);
        expect(set.size()).toBe(2);
        expect(set.values().toString()).toBe('2,3');

        // intersection
        set.intersection(BSet,CSet);
        expect(set.size()).toBe(2);
        expect(set.values().toString()).toBe('4,5');

        set.clear();
        // differenceWidth
        set.unionWidth(CSet);
        set.differenceWidth(ASet);
        expect(set.size()).toBe(2);
        expect(set.values().toString()).toBe('4,5');

        // difference
        set.difference(CSet,BSet);
        expect(set.size()).toBe(2);
        expect(set.values().toString()).toBe('2,3');

        // isSubsetOf
        const DSet = new Set([1,2,3,4,5]);
        expect(DSet.isSubsetOf(set)).toBe(true);
        expect(DSet.isSubsetOf(BSet)).toBe(false);
    });
});