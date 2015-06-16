var should = require('should');
var typeChecker = require('./../index');

describe('function isBoolean()', function () {
    describe('returns true: ', function () {
        it('isBoolean(true) should be true', function () {
            typeChecker.isBoolean(true).should.be.ok;
        });
        it('isBoolean(false) should be true', function () {
            typeChecker.isBoolean(false).should.be.ok;
        });
        it('isBoolean(Boolean(true)) should be true', function () {
            typeChecker.isBoolean(Boolean(true)).should.be.ok;
        });
        it('isBoolean(Boolean(false)) should be true', function () {
            typeChecker.isBoolean(Boolean(false)).should.be.ok;
        });
    });
    describe('returns false: ', function () {
        it('isBoolean(NaN) should be false', function () {
            typeChecker.isBoolean(NaN).should.not.be.ok;
        });
        it('isBoolean(undefined) should be false', function () {
            typeChecker.isBoolean(undefined).should.not.be.ok;
        });
        it('isBoolean(null) should be false', function () {
            typeChecker.isBoolean(null).should.not.be.ok;
        });
        it('isBoolean({a:1}) should be false', function () {
            typeChecker.isBoolean({a:1}).should.not.be.ok;
        });
        it('isBoolean(new Date()) should be false', function () {
            typeChecker.isBoolean(new Date()).should.not.be.ok;
        });
        it('isBoolean(function(){}) should be false', function () {
            typeChecker.isBoolean(function(){}).should.not.be.ok;
        });
        it('isBoolean(Math.sin) should be false', function () {
            typeChecker.isBoolean(Math.sin).should.not.be.ok;
        });
        it('isBoolean([1, 2, 4]) should be false', function () {
            typeChecker.isBoolean([1, 2, 4]).should.not.be.ok;
        });
        it('isBoolean(37) should be false', function () {
            typeChecker.isBoolean(37).should.not.be.ok;
        });
        it('isBoolean(3.14) should be false', function () {
            typeChecker.isBoolean(3.14).should.not.be.ok;
        });
        it('isBoolean(Math.LN2) should be false', function () {
            typeChecker.isBoolean(Math.LN2).should.not.be.ok;
        });
        it('isBoolean(Infinity) should be false', function () {
            typeChecker.isBoolean(Infinity).should.not.be.ok;
        });
        it('isBoolean(Number(1)) should be false', function () {
            typeChecker.isBoolean(Number(1)).should.not.be.ok;
        });
        it('isBoolean("") should be false', function () {
            typeChecker.isBoolean("").should.not.be.ok;
        });
        it('isBoolean("bla") should be false', function () {
            typeChecker.isBoolean("bla").should.not.be.ok;
        });
        it('isBoolean(typeof 1) should be false', function () {
            typeChecker.isBoolean(typeof 1).should.not.be.ok;
        });
        it('isBoolean("abc") should be false', function () {
            typeChecker.isBoolean("abc").should.not.be.ok;
        });
    });
});