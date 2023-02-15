import { hotPotato,palindromeChecker } from "../application";

describe('Queue Application', () => {

    it('hot potato', () => {

        const list = ['A', 'B', 'C', 'D', 'E', 'F'];
        expect(hotPotato(list, 8)).toBe('A');

        const list1 = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
        expect(hotPotato(list1, 7)).toBe('John');

        console.error = jest.fn();
        hotPotato({},1)
        expect(console.error).toBeCalled();

        hotPotato([],-3)
        expect(console.error).toBeCalled()
    });

    it('palindrome checker ', () => {
        
        expect(palindromeChecker('12321')).toBe(true);
        expect(palindromeChecker('123421')).toBe(false);
        expect(palindromeChecker('amdma')).toBe(true);
        expect(palindromeChecker('amddma')).toBe(true);

        console.error = jest.fn();
        palindromeChecker(1232)
        expect(console.error).toBeCalled();
    });
});