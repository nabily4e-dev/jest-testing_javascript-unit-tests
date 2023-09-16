const isPalindrome = require("./isPalindrome");

test('Tacocat returns true', () => {
    expect(isPalindrome('Tacocat')).toBe(true);
})

test('Nabil returns false', () => {
    expect(isPalindrome('Nabil')).toBe(false);
})
