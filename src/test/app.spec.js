const assert = require('chai').assert;
// const sayHello = require('../js/components/App').sayHello;
// const addNumbers = require('../js/components/App').addNumbers;
const app = require('../js/components/App');

//Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);

describe('App', function () {
	describe('Saying hello', function () {
		it('sayHello should return hello', function () {
			assert.equal(sayHelloResult, 'hello')
		});

		it('SayHello should return type string', function () {
			assert.typeOf(sayHelloResult, 'string');
		});
	});

	describe('Adding numbers ', function () {
		it('addNumbers should be above 5', function () {
			assert.isAbove(addNumbersResult, 5)
		})

		it('addNumbers should return type number', function () {
			assert.typeOf(addNumbersResult, 'number');
		});
	});
})