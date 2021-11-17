const chai = require('chai');
const expect = chai.expect;
const calculator = require('../src/calculator');

describe('Calculator', () => {

    describe('Addition', () => {
        it('1 + 1 should be equals to 2', () => {
          expect(calculator.add(1, 1)).to.equal(2)
		})
    })

    describe('Subtraction', () => {
        it('1 - 1 should be equals to 0', () => {
          expect(calculator.sub(1, 1)).to.equal(0)
		})

    })

    describe('Multiplication', () => {
        it('1 x 1 should be equals to 1', () => {
          expect(calculator.mul(1, 1)).to.equal(1)
		})

    })

    describe('Division', () => {
        it('1 / 1 should be equals to 1', () => {
          expect(calculator.div(1, 1)).to.equal(1)
		})

    })

})