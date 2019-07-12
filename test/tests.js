import isEven from '../is-even.js';
const test = QUnit.test;

test('checks if even', function(assert) {
    //Arange
    const i = 8;

    //Act
    const parity = isEven(i);

    //Assert
    assert.equal(parity, true);

});

test('checks if odd', function(assert) {
    //Arange
    const i = 9;

    //Act
    const parity = isEven(i);

    //Assert
    assert.equal(parity, false);

});


