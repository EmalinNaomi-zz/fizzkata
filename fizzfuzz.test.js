const {expect} = require ('chai');
const fizzfuzz = require('../fizzfuzz.js');

describe('FizzFuzz', function () {
    it('should return 1 when given 1', function () {
        const result = fizzfuzz(1);
        expect(result).to.equal();
    });

})