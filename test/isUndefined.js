var should = require('should');
var typeChecker = require('./../index');

describe('function isUndefined()', function () {
    describe('returns true: ', function () {
        it('isUndefined(undefined) should be true', function () {
            typeChecker.isUndefined(undefined).should.be.ok;
        });
    });
    describe('returns false: ', function () {
        it('isUndefined(37) should be false', function () {
            typeChecker.isUndefined(37).should.not.be.ok;
        });
        it('isUndefined(3.14) should be falsw', function () {
            typeChecker.isUndefined(3.14).should.not.be.ok;
        });
        it('isUndefined(Math.LN2) should be false', function () {
            typeChecker.isUndefined(Math.LN2).should.not.be.ok;
        });
        it('isUndefined(Infinity) should be false', function () {
            typeChecker.isUndefined(Infinity).should.not.be.ok;
        });
        it('isUndefined(Number(1)) should be false', function () {
            typeChecker.isUndefined(Number(1)).should.not.be.ok;
        });
        it('isUndefined(NaN) should be false', function () {
            typeChecker.isUndefined(NaN).should.not.be.ok;
        });

        it('isUndefined("") should be false', function () {
            typeChecker.isUndefined("").should.not.be.ok;
        });
        it('isUndefined("bla") should be false', function () {
            typeChecker.isUndefined("bla").should.not.be.ok;
        });
        it('isUndefined(typeof 1) should be false', function () {
            typeChecker.isUndefined(typeof 1).should.not.be.ok;
        });
        it('isUndefined("abc") should be false', function () {
            typeChecker.isUndefined("abc").should.not.be.ok;
        });
        it('isUndefined(true) should be false', function () {
            typeChecker.isUndefined(true).should.not.be.ok;
        });
        it('isUndefined(false) should be false', function () {
            typeChecker.isUndefined(false).should.not.be.ok;
        });
        it('isUndefined(Boolean(true)) should be false', function () {
            typeChecker.isUndefined(Boolean(true)).should.not.be.ok;
        });
        it('isUndefined(Boolean(false)) should be false', function () {
            typeChecker.isUndefined(Boolean(false)).should.not.be.ok;
        });
        it('isUndefined( new Boolean(true)) should be false', function () {
            typeChecker.isUndefined(Boolean( new Boolean(true))).should.not.be.ok;
        });
        it('isUndefined(null) should be false', function () {
            typeChecker.isUndefined(null).should.not.be.ok;
        });
        it('isUndefined({a:1}) should be false', function () {
            typeChecker.isUndefined({a:1}).should.not.be.ok;
        });
        it('isUndefined(new Date()) should be false', function () {
            typeChecker.isUndefined(new Date()).should.not.be.ok;
        });
        it('isUndefined(function(){}) should be false', function () {
            typeChecker.isUndefined(function(){}).should.not.be.ok;
        });
        it('isUndefined(Math.sin) should be false', function () {
            typeChecker.isUndefined(Math.sin).should.not.be.ok;
        });
        it('isUndefined([1, 2, 4]) should be false', function () {
            typeChecker.isUndefined([1, 2, 4]).should.not.be.ok;
        });
    });
});