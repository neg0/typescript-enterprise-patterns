"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Coordinates_1 = require("./Coordinates");
fdescribe("Testing Value Object (Coordinates)", function () {
    var sut;
    var x = 1;
    var y = 2;
    beforeEach(function () {
        sut = new Coordinates_1.Coordinates(x, y);
    });
    afterEach(function () {
        sut = undefined;
    });
    it("should be instantiated", function () {
        expect(sut instanceof Coordinates_1.Coordinates).toBe(true);
    });
    it("should have position x", function () {
        expect(sut.vertical).toBe(x);
    });
    it("should have position y", function () {
        expect(sut.horizontal).toBe(y);
    });
});
