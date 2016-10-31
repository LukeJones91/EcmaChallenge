var assert = require("assert");
var one_array = require("./app.js");

describe("1_array", function(){
	describe("squares", function(){
		it("should return [1, 4, 9, 16, 25] given [1, 2, 3, 4, 5] as input", function(){
			//Arrange
			var input = [1, 2, 3, 4, 5];
			var expectedOutput = [1, 4, 9, 16, 25];

			//Act
			var output = one_array.squares(input);

			//Assert
			assert.deepEqual(output, expectedOutput);
		});

		it("should return a value without causing side effects", function(){
			//Arrange
			var input = [1, 2, 3, 4, 5];
			var expectedOutput = [1, 4, 9, 16, 25];

			//Act
			var output = one_array.squares(input);

			//Assert
			assert.deepEqual(output, expectedOutput);
			assert.deepEqual(input, [1, 2, 3, 4, 5]);
		})

		it("should return [25, 4, 81] given [5, 2, 9] as input", function(){
			//Arrange
			var input = [5, 2, 9];
			var expectedOutput = [25, 4, 81];

			//Act
			var output = one_array.squares(input);

			//Assert
			assert.deepEqual(output, expectedOutput);
		});

		it("should return [] given [] as input", function(){
			//Arrange
			var input = [];
			var expectedOutput = [];

			//Act
			var output = one_array.squares(input);

			//Assert
			assert.deepEqual(output, expectedOutput);
		});

		it("should correctly work for negative values", function(){
			//Arrange
			var input = [-12, -4, -1, 0];
			var expectedOutput = [144, 16, 1, 0];

			//Act
			var output = one_array.squares(input);

			//Assert
			assert.deepEqual(output, expectedOutput);
		})

		it("should throw an exception when the input is missing", function(){
			//Arrange
			var input = null;
			function checkForError() {
				one_array.squares(input);
			};


			//Assert
			assert.throws(checkForError, Error);
		});
	});

	describe("sums", function () {
	    it("should work for a regular array", function () {
            assert.equal(one_array.sums([1,2,3,4,5]), 15);
	    })

	    it("should error when passed an object that is not an array", function () {
	        function throwError() {
                one_array.sums("not an array")
	        }

            assert.throws(throwError, Error)
	    })

	    it("should error when passed an invalid array", function () {
	        function throwError() {
	            one_array.sums(["an", "invalid", "array"])
	        }
            
            assert.throws(throwError, Error)
	    })

	    it("should work without side-effects", function () {
            var input = [10, 11, 12]
            var sum = 33

            assert.equal(one_array.sums(input), sum);
            assert.deepEqual(input, [10, 11, 12])
	    })

	    it("should work with negative values", function () {
	        assert.equal(one_array.sums([-5, -4, -3, -2, -1]), -15);
	    })

	    it("should work with an empty array", function () {
            assert.equal(one_array.sums([]), 0)
	    })

	    it("should work for a large array", function () {
            var input = []
            var sum = 0

	        for (var i = 0; i < 10000; i++) {
	            input[i] = Math.ceil(Math.random() * 100)
                sum += input[i]
	        }

            assert.equal(one_array.sums(input), sum)
	    })
	})
});