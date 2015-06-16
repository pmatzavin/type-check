var should = require('should');
var typeChecker = require('./../index');

describe('function isNill()', function () {
    describe('returns true: ', function () {
        it('isNil(null) should be true', function () {
            typeChecker.isNil(null).should.be.ok;
        });
        it('isNil(undefined) should be true', function () {
            typeChecker.isNil(undefined).should.be.ok;
        });
    });
    describe('returns false: ', function () {
        it('isNil(NaN) should be false', function () {
            typeChecker.isNil(NaN).should.not.be.ok;
        });

        it('isNil("") should be false', function () {
            typeChecker.isNil("").should.not.be.ok;
        });
        it('isNil("bla") should be false', function () {
            typeChecker.isNil("bla").should.not.be.ok;
        });
        it('isNil(typeof 1) should be false', function () {
            typeChecker.isNil(typeof 1).should.not.be.ok;
        });
        it('isNil("abc") should be false', function () {
            typeChecker.isNil("abc").should.not.be.ok;
        });
        it('isNil(true) should be false', function () {
            typeChecker.isNil(true).should.not.be.ok;
        });
        it('isNil(false) should be false', function () {
            typeChecker.isNil(false).should.not.be.ok;
        });
        it('isNil(Boolean(true)) should be false', function () {
            typeChecker.isNil(Boolean(true)).should.not.be.ok;
        });
        it('isNil(Boolean(false)) should be false', function () {
            typeChecker.isNil(Boolean(false)).should.not.be.ok;
        });
        it('isNil( new Boolean(true)) should be false', function () {
            typeChecker.isNil(Boolean( new Boolean(true))).should.not.be.ok;
        });
        it('isNil({a:1}) should be false', function () {
            typeChecker.isNil({a:1}).should.not.be.ok;
        });
        it('isNil(new Date()) should be false', function () {
            typeChecker.isNil(new Date()).should.not.be.ok;
        });
        it('isNil(function(){}) should be false', function () {
            typeChecker.isNil(function(){}).should.not.be.ok;
        });
        it('isNil(Math.sin) should be false', function () {
            typeChecker.isNil(Math.sin).should.not.be.ok;
        });
        it('isNil([1, 2, 4]) should be false', function () {
            typeChecker.isNil([1, 2, 4]).should.not.be.ok;
        });
        it('isNil(37) should be false', function () {
            typeChecker.isNil(37).should.not.be.ok;
        });
        it('isNil(3.14) should be false', function () {
            typeChecker.isNil(3.14).should.not.be.ok;
        });
        it('isNil(Math.LN2) should be false', function () {
            typeChecker.isNil(Math.LN2).should.not.be.ok;
        });
        it('isNil(Infinity) should be false', function () {
            typeChecker.isNil(Infinity).should.not.be.ok;
        });
        it('isNil(Number(1)) should be false', function () {
            typeChecker.isNil(Number(1)).should.not.be.ok;
        });
    });
});