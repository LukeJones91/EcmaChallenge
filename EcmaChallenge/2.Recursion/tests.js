var assert = require("assert");
var two_recursion = require("./app.js");
var large_value = require("./largeValue.js");

describe("2_recursion", function () {

    describe("fibonacci", function () {
        it("should correctly calculate the fibonacci sequence for a range of values", function () {
            var fib1 = two_recursion.fibonacci(1);
            var fib2 = two_recursion.fibonacci(2);
            var fib3 = two_recursion.fibonacci(3);
            var fib4 = two_recursion.fibonacci(4);
            var fib5 = two_recursion.fibonacci(5);
            var fib6 = two_recursion.fibonacci(6);
            var fib7 = two_recursion.fibonacci(7);
            var fib8 = two_recursion.fibonacci(8);

            assert.equal(fib1, 1);
            assert.equal(fib2, 1);
            assert.equal(fib3, 2);
            assert.equal(fib4, 3);
            assert.equal(fib5, 5);
            assert.equal(fib6, 8);
            assert.equal(fib7, 13);
            assert.equal(fib8, 21);
        })

        it("should throw an error when given input other than a positive integer", function () {
            function throwError1() {
                two_recursion.fibonacci()
            }

            function throwError2() {
                two_recursion.fibonacci("a string")
            }

            function throwError3() {
                two_recursion.fibonacci(-1)
            }

            assert.throws(throwError1, Error)
            assert.throws(throwError2, Error)
            assert.throws(throwError3, Error)
        })
    })

    describe("factorial", function () {
        it("should work for a range of different numbers", function () {
            var fact1 = two_recursion.factorial(1)
            var fact2 = two_recursion.factorial(2)
            var fact3 = two_recursion.factorial(3)
            var fact4 = two_recursion.factorial(4)
            var fact5 = two_recursion.factorial(5)
            var fact6 = two_recursion.factorial(6)
            var fact7 = two_recursion.factorial(7)

            assert.equal(fact1, 1)
            assert.equal(fact2, 2)
            assert.equal(fact3, 6)
            assert.equal(fact4, 24)
            assert.equal(fact5, 120)
            assert.equal(fact6, 720)
            assert.equal(fact7, 5040)
        })

        it("should throw an error when given input other than a positive integer", function () {
            function throwError1() {
                two_recursion.factorial()
            }

            function throwError2() {
                two_recursion.factorial("a string")
            }

            function throwError3() {
                two_recursion.factorial(-1)
            }

            assert.throws(throwError1, Error)
            assert.throws(throwError2, Error)
            assert.throws(throwError3, Error)
        })
    })

    describe("binary tree", function () {
        it("should correctly invert a regular binary tree", function () {
            //Arrange
            var binaryTree = new two_recursion.Node([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            var expectedOutput = "169782534";

            //Act
            two_recursion.invertBinaryTree(binaryTree);
            var output = binaryTree.toString();

            //Assert
            assert.equal(expectedOutput, output);
        });

        it("should correctly invert a single node", function () {
            //Arrange
            var binaryTree = new two_recursion.Node(1);
            var expectedOutput = "1";

            //Act
            two_recursion.invertBinaryTree(binaryTree);
            var output = binaryTree.toString();

            //Assert
            assert.equal(expectedOutput, output);
        })

        it("should correctly invert a large binary tree", function () {
            //Arrange
            var inputArray = [];
            for (var i = 0; i < 1000; i++) {
                inputArray.push(i);
            }

            var binaryTree = new two_recursion.Node(inputArray);
            var expectedOutput = large_value.val;

            //Act
            two_recursion.invertBinaryTree(binaryTree);
            var output = binaryTree.toString();

            //Assert
            assert.equal(expectedOutput, output);
        });

        it("should work for irregular trees", function () {
            //Arrange
            var binaryTree = new two_recursion.Node([5, 7, 1, 8, 3, 9, 3, 7, 3, 12, 87, 12, 3, 56, 2]);
            var expectedOutput = "5332561212877973138";

            //Act
            two_recursion.invertBinaryTree(binaryTree);
            var output = binaryTree.toString();

            //Assert
            assert.equal(output, expectedOutput);
        })

        it("should throw an error when not provided with an input tree", function () {
            //Arrange
            var input = null
            function checkForError() {
                two_recursion.invertBinaryTree(input);
            }

            //Assert
            assert.throws(checkForError, Error);
        })
    })
});