# EcmaChallenge

A series of challenges in ECMA Script 2015 for [@LukeJones91](https://github.com/lukejones91).

## 1. Arrays (squares)

An initial familiarisation challenge to build up knowledge of the Git and unit-testing approach.

Given an array of ints, output an array of squares.

For example:

```
[1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]
[5, 2, 9] -> [25, 4, 81]
[] -> []
null -> <<throws an Error()>>
```

### How-to

To get started, run:

`> git clone https://github.com/a2wd/EcmaChallenge.git`

To finish the first challenge, first change directory to the arrays challenge, then run **npm** to get the mocha (unit-testing) dependency:

```
> cd EcmaChallenge\1.Arrays
> npm install
```

Use *app.js* to write your code, while in development you can use `console.log` or the **node-inspector** package to check your work.

When you are done, use the npm test command:

`npm test`

This will let you know if your code passes or if it needs more work.

### 1.2 Arrays (sum)

As a second arrays exercise, you need to write a function that takes an array as input and returns the sum of all the values of the array.

1. When passed an array of integers, the function will return the sum of the values
2. When passed an array of any other value, the function will throw an error
3. When passed an object that is not an array, the function will throw an error
4. The function will work correctly with negative values

Examples:

```
[1, 2, 3] -> 6
[] -> []
"not an array" -> <<throws an Error()>>
[-5, -5] -> -10
["invalid", "array"] -> <<thows an Error()>>
```

## 2. Recursion

A warm-up exercise to invert a binary tree. A classic of interview-type questions.

You are given a data structure, `Node` and must correctly code an inversion function. You are able to code in a loop or with recursion, though recursion is considerably more elegant.

The Node object has three properties:

* value - the value of that particular node
* left - a left branch to be initialised to a Node() object
* right - right branch to be initialised to a Node() object

Given a binary tree (left), the function will return the output (right):

```			
                   1                                                1
                   |                                                |
        2----------+---------3                           3----------+---------2
        |                    |            +---->         |                    |
   4----+---5            6---+-------7    +---->    7----+---6            5---+-------4
   |                                                                                  |
8--+--9                                                                            9--+-8

```