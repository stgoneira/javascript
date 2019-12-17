const assert = require('assert').strict;
const Matematicas = require('../Matematicas');

describe("Matematicas.js", () => {
    describe("sumar", () => {
        it("Debe sumar numbers", () => {
            assert.equal(  
                Matematicas.sumar(3, 5)
                , 8
            );
        });
        it("Debe sumar aunque sean strings", () => {
            assert.equal(  
                Matematicas.sumar("1", "2")
                , 3
            );
        });
    });

});