var should = require('should');
var typeChecker = require('./../index');

describe('function isNumber()', function () {
    describe('returns true: ', function () {
        it('isNumber(37) should be true', function () {
            typeChecker.isNumber(37).should.be.ok;
        });
        it('isNumber(3.14) should be true', function () {
            typeChecker.isNumber(3.14).should.be.ok;
        });
        it('isNumber(Math.LN2) should be true', function () {
            typeChecker.isNumber(Math.LN2).should.be.ok;
        });
        it('isNumber(Infinity) should be true', function () {
            typeChecker.isNumber(Infinity).should.be.ok;
        });
        it('isNumber(Number(1)) should be true', function () {
            typeChecker.isNumber(Number(1)).should.be.ok;
        });
    });
    describe('returns false: ', function () {
        it('isNumber(NaN) should be false', function () {
            typeChecker.isNumber(NaN).should.not.be.ok;
        });

        it('isNumber("") should be false', function () {
            typeChecker.isNumber("").should.not.be.ok;
        });
        it('isNumber("bla") should be false', function () {
            typeChecker.isNumber("bla").should.not.be.ok;
        });
        it('isNumber(typeof 1) should be false', function () {
            typeChecker.isNumber(typeof 1).should.not.be.ok;
        });
        it('isNumber("abc") should be false', function () {
            typeChecker.isNumber("abc").should.not.be.ok;
        });
        it('isNumber(true) should be false', function () {
            typeChecker.isNumber(true).should.not.be.ok;
        });
        it('isNumber(false) should be false', function () {
            typeChecker.isNumber(false).should.not.be.ok;
        });
        it('isNumber(Boolean(true)) should be false', function () {
            typeChecker.isNumber(Boolean(true)).should.not.be.ok;
        });
        it('isNumber(Boolean(false)) should be false', function () {
            typeChecker.isNumber(Boolean(false)).should.not.be.ok;
        });
        it('isNumber( new Boolean(true)) should be false', function () {
            typeChecker.isNumber(Boolean( new Boolean(true))).should.not.be.ok;
        });
        it('isNumber(undefined) should be false', function () {
            typeChecker.isNumber(undefined).should.not.be.ok;
        });
        it('isNumber(null) should be false', function () {
            typeChecker.isNumber(null).should.not.be.ok;
        });
        it('isNumber({a:1}) should be false', function () {
            typeChecker.isNumber({a:1}).should.not.be.ok;
        });
        it('isNumber(new Date()) should be false', function () {
            typeChecker.isNumber(new Date()).should.not.be.ok;
        });
        it('isNumber(function(){}) should be false', function () {
            typeChecker.isNumber(function(){}).should.not.be.ok;
        });
        it('isNumber(Math.sin) should be false', function () {
            typeChecker.isNumber(Math.sin).should.not.be.ok;
        });
        it('isNumber([1, 2, 4]) should be false', function () {
            typeChecker.isNumber([1, 2, 4]).should.not.be.ok;
        });
    });
});