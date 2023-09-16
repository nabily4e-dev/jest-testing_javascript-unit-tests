const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});



// Run the test
// Run the test with the following command:
// npm run test
//
// You should see the following output:
// > jest
//
//  PASS  ./sum.test.js
//   √ adds 1 + 2 to equal 3 (5ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        1.016s
// Ran all test suites.
//
// The test passed! We just successfully wrote a test for a JavaScript function using Jest!
//
// To make sure that our test suite is working, let's change the expected value of our test to something other than 3:
// expect(sum(1, 2)).toBe(4);
//
// When you run the test again, you should see the following output:
// > jest
//
//  FAIL  ./sum.test.js
//   √ adds 1 + 2 to equal 3 (4ms)
//
//   ● adds 1 + 2 to equal 3
//
//     expect(received).toBe(expected) // Object.is equality
//
//     Expected: 4
//     Received: 3
//
//       5 |
//       6 | test('adds 1 + 2 to equal 3', () => {
//     > 7 |     expect(sum(1,2)).toBe(4);
//         |                      ^
//       8 | });
//       9 |
//      10 |
//
//      at Object.<anonymous> (sum.test.js:7:22)
//
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        1.016s
// Ran all test suites.
//
// Jest uses "matchers" to let you test values in different ways. In the code above, .toBe(4) is the matcher.
// In this test, we used the .toBe() matcher. It's an example of an assertion function. There are many other
// assertion functions such as .toEqual(), .toMatch(), .toBeDefined(), and many others. You can read about them
// in the API Reference.
//
// If you want to read more about testing with Jest, check out these docs:
// https://jestjs.io/docs/en/getting-started
//
// If you want to learn more about using Jest with React, check out these docs:
// https://jestjs.io/docs/en/tutorial-react
//
// If you want to learn more about using Jest with TypeScript, check out these docs:
// https://jestjs.io/docs/en/getting-started#using-typescript
//
// If you want to learn more about using Jest with Babel, check out these docs:
// https://jestjs.io/docs/en/getting-started#using-babel
//
// If you want to learn more about using Jest with webpack, check out these docs:
// https://jestjs.io/docs/en/webpack
//
// If you want to learn more about using Jest with Node.js, check out these docs:
// https://jestjs.io/docs/en/getting-started#using-nodejs
//

// Writing more tests
// Now that we've written one test, let's write another test for a different function. Create a new file named
// src/sum.test.js and add the following code to it:
// Path: src/sum.test.js
// function sum(a, b) {
//     return a + b;
// }
//
// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1,2)).toBe(3);
// });
//
// test('adds 3 + 5 to equal 8', () => {
//     expect(sum(3,5)).toBe(8);
// });
//
// module.exports = sum;
//
// Run the test
// Run the test with the following command:
// npm run test
//
// You should see the following output:
// > jest
//
//  PASS  ./sum.test.js
//   √ adds 1 + 2 to equal 3 (5ms)
//   √ adds 3 + 5 to equal 8 (1ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        1.016s
// Ran all test suites.
//
// The test passed! We just successfully wrote a test for a JavaScript function using Jest!
//
// To make sure that our test suite is working, let's change the expected value of our test to something other than 3:
// expect(sum(1, 2)).toBe(4);
//
// When you run the test again, you should see the following output:
// > jest
//
//  FAIL  ./sum.test.js
//   √ adds 1 + 2 to equal 3 (4ms)
//   √ adds 3 + 5 to equal 8 (1ms)
//
//   ● adds 1 + 2 to equal 3
//
//     expect(received).toBe(expected) // Object.is equality
//
//     Expected: 4
//     Received: 3
//
//       5 |
//       6 | test('adds 1 + 2 to equal 3', () => {
//     > 7 |     expect(sum(1,2)).toBe(4);
//         |                      ^
//       8 | });
//       9 |
//      10 |
//
//      at Object.<anonymous> (sum.test.js:7:22)
