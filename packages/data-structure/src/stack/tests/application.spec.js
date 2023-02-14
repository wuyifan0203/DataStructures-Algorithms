import { baseConverter } from "../application.js";

describe('Stack Appliaction', () => {
    it('happy path ', () => {
        expect(baseConverter(100345, 2)).toBe('11000011111111001');
        expect(baseConverter(100345, 8)).toBe('303771');
        expect(baseConverter(100345, 16)).toBe('187F9');
        expect(baseConverter(100345, 35)).toBe('2BW0');
    });
});