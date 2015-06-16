var should = require('should');
var typeChecker = require('./../index');

describe('function isNull()', function () {
    describe('returns true: ', function () {
        it('isNull(null) should be true', function () {
            typeChecker.isNull(null).should.be.ok;
        });
    });
    describe('returns false: ', function () {
        it('isNull(37) should be false', function () {
            typeChecker.isNull(37).should.not.be.ok;
        });
        it('isNull(3.14) should be false', function () {
            typeChecker.isNull(3.14).should.not.be.ok;
        });
        it('isNull(Math.LN2) should be false', function () {
            typeChecker.isNull(Math.LN2).should.not.be.ok;
        });
        it('isNull(Infinity) should be false', function () {
            typeChecker.isNull(Infinity).should.not.be.ok;
        });
        it('isNull(Number(1)) should be false', function () {
            typeChecker.isNull(Number(1)).should.not.be.ok;
        });
        it('isNull(NaN) should be false', function () {
            typeChecker.isNull(NaN).should.not.be.ok;
        });

        it('isNull("") should be false', function () {
            typeChecker.isNull("").should.not.be.ok;
        });
        it('isNull("bla") should be false', function () {
            typeChecker.isNull("bla").should.not.be.ok;
        });
        it('isNull(typeof 1) should be false', function () {
            typeChecker.isNull(typeof 1).should.not.be.ok;
        });
        it('isNull("abc") should be false', function () {
            typeChecker.isNull("abc").should.not.be.ok;
        });
        it('isNull(true) should be false', function () {
            typeChecker.isNull(true).should.not.be.ok;
        });
        it('isNull(false) should be false', function () {
            typeChecker.isNull(false).should.not.be.ok;
        });
        it('isNull(Boolean(true)) should be false', function () {
            typeChecker.isNull(Boolean(true)).should.not.be.ok;
        });
        it('isNull(Boolean(false)) should be false', function () {
            typeChecker.isNull(Boolean(false)).should.not.be.ok;
        });
        it('isNull( new Boolean(true)) should be false', function () {
            typeChecker.isNull(Boolean( new Boolean(true))).should.not.be.ok;
        });
        it('isNull(undefined) should be false', function () {
            typeChecker.isNull(undefined).should.not.be.ok;
        });
        it('isNull({a:1}) should be false', function () {
            typeChecker.isNull({a:1}).should.not.be.ok;
        });
        it('isNull(new Date()) should be false', function () {
            typeChecker.isNull(new Date()).should.not.be.ok;
        });
        it('isNull(function(){}) should be false', function () {
            typeChecker.isNull(function(){}).should.not.be.ok;
        });
        it('isNull(Math.sin) should be false', function () {
            typeChecker.isNull(Math.sin).should.not.be.ok;
        });
        it('isNull([1, 2, 4]) should be false', function () {
            typeChecker.isNull([1, 2, 4]).should.not.be.ok;
        });
    });
});