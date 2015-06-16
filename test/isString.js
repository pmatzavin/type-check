var should = require('should');
var typeChecker = require('./../index');

describe('function isString()', function () {
    describe('returns true: ', function () {
        it('isString("") should be true', function () {
            typeChecker.isString("").should.be.ok;
        });
        it('isString("bla") should be true', function () {
            typeChecker.isString("bla").should.be.ok;
        });
        it('isString(typeof 1) should be true', function () {
            typeChecker.isString(typeof 1).should.be.ok;
        });
        it('isString("abc") should be true', function () {
            typeChecker.isString("abc").should.be.ok;
        });
    });
    describe('returns false: ', function () {
        it('isString(NaN) should be false', function () {
            typeChecker.isString(NaN).should.not.be.ok;
        });
        it('isString(true) should be false', function () {
            typeChecker.isString(true).should.not.be.ok;
        });
        it('isString(false) should be false', function () {
            typeChecker.isString(false).should.not.be.ok;
        });
        it('isString(Boolean(true)) should be false', function () {
            typeChecker.isString(Boolean(true)).should.not.be.ok;
        });
        it('isString(Boolean(false)) should be false', function () {
            typeChecker.isString(Boolean(false)).should.not.be.ok;
        });
        it('isString( new Boolean(true)) should be false', function () {
            typeChecker.isString(Boolean( new Boolean(true))).should.not.be.ok;
        });
        it('isString(undefined) should be false', function () {
            typeChecker.isString(undefined).should.not.be.ok;
        });
        it('isString(null) should be false', function () {
            typeChecker.isString(null).should.not.be.ok;
        });
        it('isString({a:1}) should be false', function () {
            typeChecker.isString({a:1}).should.not.be.ok;
        });
        it('isString(new Date()) should be false', function () {
            typeChecker.isString(new Date()).should.not.be.ok;
        });
        it('isString(function(){}) should be false', function () {
            typeChecker.isString(function(){}).should.not.be.ok;
        });
        it('isString(Math.sin) should be false', function () {
            typeChecker.isString(Math.sin).should.not.be.ok;
        });
        it('isString([1, 2, 4]) should be false', function () {
            typeChecker.isString([1, 2, 4]).should.not.be.ok;
        });
        it('isString(37) should be false', function () {
            typeChecker.isString(37).should.not.be.ok;
        });
        it('isString(3.14) should be false', function () {
            typeChecker.isString(3.14).should.not.be.ok;
        });
        it('isString(Math.LN2) should be false', function () {
            typeChecker.isString(Math.LN2).should.not.be.ok;
        });
        it('isString(Infinity) should be false', function () {
            typeChecker.isString(Infinity).should.not.be.ok;
        });
        it('isString(Number(1)) should be false', function () {
            typeChecker.isString(Number(1)).should.not.be.ok;
        });
    });
});