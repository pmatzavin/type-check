var should = require('should');
var typeChecker = require('./../index');

describe('function isArray()', function () {
    describe('returns true: ', function () {
        it('isArray([]) should be true', function () {
            typeChecker.isArray([]).should.be.ok;
        });
        it('isArray([1]) should be true', function () {
            typeChecker.isArray([1]).should.be.ok;
        });
        it('isArray([new Array()]) should be true', function () {
            typeChecker.isArray([new Array()]).should.be.ok;
        });
        it('isArray([Array.prototype]) should be true', function () {
            typeChecker.isArray([Array.prototype]).should.be.ok;
        });
    });
    describe('returns false: ', function () {
        it('isArray(37) should be false', function () {
            typeChecker.isArray(37).should.not.be.ok;
        });
        it('isArray(3.14) should be false', function () {
            typeChecker.isArray(3.14).should.not.be.ok;
        });
        it('isArray(Math.LN2) should be false', function () {
            typeChecker.isArray(Math.LN2).should.not.be.ok;
        });
        it('isArray(Infinity) should be false', function () {
            typeChecker.isArray(Infinity).should.not.be.ok;
        });
        it('isArray(Number(1)) should be false', function () {
            typeChecker.isArray(Number(1)).should.not.be.ok;
        });
        it('isArray(NaN) should be false', function () {
            typeChecker.isArray(NaN).should.not.be.ok;
        });
        it('isArray("") should be false', function () {
            typeChecker.isArray("").should.not.be.ok;
        });
        it('isArray("bla") should be false', function () {
            typeChecker.isArray("bla").should.not.be.ok;
        });
        it('isArray(typeof 1) should be false', function () {
            typeChecker.isArray(typeof 1).should.not.be.ok;
        });
        it('isArray("abc") should be false', function () {
            typeChecker.isArray("abc").should.not.be.ok;
        });
        it('isArray(false) should be false', function () {
            typeChecker.isArray(false).should.not.be.ok;
        });
        it('isArray(false) should be false', function () {
            typeChecker.isArray(false).should.not.be.ok;
        });
        it('isArray(Boolean(false)) should be false', function () {
            typeChecker.isArray(Boolean(false)).should.not.be.ok;
        });
        it('isArray(Boolean(false)) should be false', function () {
            typeChecker.isArray(Boolean(false)).should.not.be.ok;
        });
        it('isArray( new Boolean(false)) should be false', function () {
            typeChecker.isArray(Boolean( new Boolean(false))).should.not.be.ok;
        });
        it('isArray(undefined) should be false', function () {
            typeChecker.isArray(undefined).should.not.be.ok;
        });
        it('isArray(null) should be false', function () {
            typeChecker.isArray(null).should.not.be.ok;
        });
        it('isArray({a:1}) should be false', function () {
            typeChecker.isArray({a:1}).should.not.be.ok;
        });
        it('isArray(new Date()) should be false', function () {
            typeChecker.isArray(new Date()).should.not.be.ok;
        });
        it('isArray(function(){}) should be false', function () {
            typeChecker.isArray(function(){}).should.not.be.ok;
        });
        it('isArray(Math.sin) should be false', function () {
            typeChecker.isArray(Math.sin).should.not.be.ok;
        });
    });
});
