import { baseConverter, isValid ,removeDuplicates} from "../application.js";

describe('Stack Appliaction', () => {
    it('happy path ', () => {
        expect(baseConverter(100345, 2)).toBe('11000011111111001');
        expect(baseConverter(100345, 8)).toBe('303771');
        expect(baseConverter(100345, 16)).toBe('187F9');
        expect(baseConverter(100345, 35)).toBe('2BW0');
    });

    it('should match', () => {
        expect(isValid('(()(')).toBe(false);
        expect(isValid('((')).toBe(false);
        expect(isValid('{}')).toBe(true)
    });

    it('should ', () => {
        expect(removeDuplicates('ca')).toBe('ca');
        expect(removeDuplicates('caa')).toBe('c');
        expect(removeDuplicates('abbaca')).toBe('ca');
        expect(removeDuplicates('aaba')).toBe('ba')
        
    });
});