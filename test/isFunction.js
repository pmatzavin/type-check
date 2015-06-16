var should = require('should');
var typeChecker = require('./../index');

describe('function isFunction()', function () {
    describe('returns true: ', function () {
        it('isFunction(function(){}) should be true', function () {
            typeChecker.isFunction(function(){}).should.be.ok;
        });
        it('isFunction(Math.sin) should be true', function () {
            typeChecker.isFunction(Math.sin).should.be.ok;
        });
    });
    describe('returns false: ', function () {
        it('isFunction(37) should be false', function () {
            typeChecker.isFunction(37).should.not.be.ok;
        });
        it('isFunction(3.14) should be false', function () {
            typeChecker.isFunction(3.14).should.not.be.ok;
        });
        it('isFunction(Math.LN2) should be false', function () {
            typeChecker.isFunction(Math.LN2).should.not.be.ok;
        });
        it('isFunction(Infinity) should be false', function () {
            typeChecker.isFunction(Infinity).should.not.be.ok;
        });
        it('isFunction(Number(1)) should be false', function () {
            typeChecker.isFunction(Number(1)).should.not.be.ok;
        });
        it('isFunction(NaN) should be false', function () {
            typeChecker.isFunction(NaN).should.not.be.ok;
        });

        it('isFunction("") should be false', function () {
            typeChecker.isFunction("").should.not.be.ok;
        });
        it('isFunction("bla") should be false', function () {
            typeChecker.isFunction("bla").should.not.be.ok;
        });
        it('isFunction(typeof 1) should be false', function () {
            typeChecker.isFunction(typeof 1).should.not.be.ok;
        });
        it('isFunction("abc") should be false', function () {
            typeChecker.isFunction("abc").should.not.be.ok;
        });
        it('isFunction(true) should be false', function () {
            typeChecker.isFunction(true).should.not.be.ok;
        });
        it('isFunction(false) should be false', function () {
            typeChecker.isFunction(false).should.not.be.ok;
        });
        it('isFunction(Boolean(true)) should be false', function () {
            typeChecker.isFunction(Boolean(true)).should.not.be.ok;
        });
        it('isFunction(Boolean(false)) should be false', function () {
            typeChecker.isFunction(Boolean(false)).should.not.be.ok;
        });
        it('isFunction( new Boolean(true)) should be false', function () {
            typeChecker.isFunction(Boolean( new Boolean(true))).should.not.be.ok;
        });
        it('isFunction(undefined) should be false', function () {
            typeChecker.isFunction(undefined).should.not.be.ok;
        });
        it('isFunction(null) should be false', function () {
            typeChecker.isFunction(null).should.not.be.ok;
        });
        it('isFunction({a:1}) should be false', function () {
            typeChecker.isFunction({a:1}).should.not.be.ok;
        });
        it('isFunction(new Date()) should be false', function () {
            typeChecker.isFunction(new Date()).should.not.be.ok;
        });
        it('isFunction([1, 2, 4]) should be false', function () {
            typeChecker.isFunction([1, 2, 4]).should.not.be.ok;
        });
    });
});
