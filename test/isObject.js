var should = require('should');
var typeChecker = require('./../index');

describe('function isObject()', function () {
    describe('returns true: ', function () {
        it('isObject({a:1}) should be true', function () {
            typeChecker.isObject({a:1}).should.be.ok;
        });
        it('isObject(new Date()) should be true', function () {
            typeChecker.isObject(new Date()).should.be.ok;
        });
        it('isObject(new Boolean(true)) should be true', function () {
            typeChecker.isObject(new Boolean(true)).should.be.ok;
        });
    });
    describe('returns false: ', function () {
        it('isObject(37) should be false', function () {
            typeChecker.isObject(37).should.not.be.ok;
        });
        it('isObject(3.14) should be false', function () {
            typeChecker.isObject(3.14).should.not.be.ok;
        });
        it('isObject(Math.LN2) should be false', function () {
            typeChecker.isObject(Math.LN2).should.not.be.ok;
        });
        it('isObject(Infinity) should be false', function () {
            typeChecker.isObject(Infinity).should.not.be.ok;
        });
        it('isObject(Number(1)) should be false', function () {
            typeChecker.isObject(Number(1)).should.not.be.ok;
        });
        it('isObject(NaN) should be false', function () {
            typeChecker.isObject(NaN).should.not.be.ok;
        });
        it('isObject("") should be false', function () {
            typeChecker.isObject("").should.not.be.ok;
        });
        it('isObject("bla") should be false', function () {
            typeChecker.isObject("bla").should.not.be.ok;
        });
        it('isObject(typeof 1) should be false', function () {
            typeChecker.isObject(typeof 1).should.not.be.ok;
        });
        it('isObject("abc") should be false', function () {
            typeChecker.isObject("abc").should.not.be.ok;
        });
        it('isObject(true) should be false', function () {
            typeChecker.isObject(true).should.not.be.ok;
        });
        it('isObject(false) should be false', function () {
            typeChecker.isObject(false).should.not.be.ok;
        });
        it('isObject(Boolean(true)) should be false', function () {
            typeChecker.isObject(Boolean(true)).should.not.be.ok;
        });
        it('isObject(Boolean(false)) should be false', function () {
            typeChecker.isObject(Boolean(false)).should.not.be.ok;
        });
        it('isObject( new Boolean(true)) should be false', function () {
            typeChecker.isObject(Boolean( new Boolean(true))).should.not.be.ok;
        });
        it('isObject(undefined) should be false', function () {
            typeChecker.isObject(undefined).should.not.be.ok;
        });
        it('isObject(null) should be false', function () {
            typeChecker.isObject(null).should.not.be.ok;
        });
        it('isObject(function(){}) should be false', function () {
            typeChecker.isObject(function(){}).should.not.be.ok;
        });
        it('isObject(Math.sin) should be false', function () {
            typeChecker.isObject(Math.sin).should.not.be.ok;
        });
        it('isObject([1, 2, 4]) should be false', function () {
            typeChecker.isObject([1, 2, 4]).should.not.be.ok;
        });
    });
});