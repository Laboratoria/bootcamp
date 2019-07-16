
const Assert = require('chai').assert;
const removeStringValuesLongerThan = require('../solution/removeStringValuesLongerThan');

describe('removeStringValuesLongerThan()', () => {
  it('Teste: key-value maior que 1', () => {
    const obj = {
	  name: 'Montana',
	  age: 20,
	  location: 'Texas',
    };

    const num = 1;
    const hasil = {
	  age: 20,
    };
    Assert.deepEqual(removeStringValuesLongerThan(num, obj), hasil);
  });

  it('Teste: key-value maior que 6', () => {
    const obj = {
	  name: 'Montana',
	  age: 20,
	  location: 'Texas',
    };

    const num = 6;
    const hasil = {
	  age: 20,
	  location: 'Texas',
    };
    Assert.deepEqual(removeStringValuesLongerThan(num, obj), hasil);
  });
});
