const assert = require('assert');

describe("seccion 2", () => {
    describe("seccion 2.1", () => {
        it("Deben ser iguales los strings", () => {
            assert.equal("hola", 'hola');
        });
    });

    describe("seccion 2.2", () => {
        it("Deben ser iguales los números", () => {
            assert.equal(0xa, 10);
        });
    });

    describe("seccion 2.3", () => {
        it("Deben ser iguales los números", () => {
            assert.equal(0xb, 11);
        });
    });

});