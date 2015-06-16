# is-type

Check if the given value is of a specific type.

## About

Provide a simple and clean way to check if a value matches a specific type.
Abstract the usage of "typeof === '...'".

## Installation

```
npm install is-type
```

## Module Usage

```
var check = require('is-type');
```

```
var myValue = 'something';
check.isArray(myValue);
check.isBoolean(myValue);
check.isFunction(myValue);
check.isNil(myValue);
check.isNull(myValue);
check.isNumber(myValue);
check.isObject(myValue);
check.isString(myValue);
check.isUndefined(myValue);
```

## Running the tests

From inside the root project folder run:

```
npm install
```
and then if you are on a windows machine:
```
npm test
```
if you are on a unix machine:
```
npm testUNIX
```

## Spec

# TOC
   - [function isArray()](#function-isarray)
     - [returns true: ](#function-isarray-returns-true-)
     - [returns false: ](#function-isarray-returns-false-)
   - [function isBoolean()](#function-isboolean)
     - [returns true: ](#function-isboolean-returns-true-)
     - [returns false: ](#function-isboolean-returns-false-)
   - [function isFunction()](#function-isfunction)
     - [returns true: ](#function-isfunction-returns-true-)
     - [returns false: ](#function-isfunction-returns-false-)
   - [function isNill()](#function-isnill)
     - [returns true: ](#function-isnill-returns-true-)
     - [returns false: ](#function-isnill-returns-false-)
   - [function isNull()](#function-isnull)
     - [returns true: ](#function-isnull-returns-true-)
     - [returns false: ](#function-isnull-returns-false-)
   - [function isNumber()](#function-isnumber)
     - [returns true: ](#function-isnumber-returns-true-)
     - [returns false: ](#function-isnumber-returns-false-)
   - [function isObject()](#function-isobject)
     - [returns true: ](#function-isobject-returns-true-)
     - [returns false: ](#function-isobject-returns-false-)
   - [function isString()](#function-isstring)
     - [returns true: ](#function-isstring-returns-true-)
     - [returns false: ](#function-isstring-returns-false-)
   - [function isUndefined()](#function-isundefined)
     - [returns true: ](#function-isundefined-returns-true-)
     - [returns false: ](#function-isundefined-returns-false-)
<a name=""></a>

<a name="function-isarray"></a>
# function isArray()
<a name="function-isarray-returns-true-"></a>
## returns true:
isArray([]) should be true.

```js
typeChecker.isArray([]).should.be.ok;
```

isArray([1]) should be true.

```js
typeChecker.isArray([1]).should.be.ok;
```

isArray([new Array()]) should be true.

```js
typeChecker.isArray([new Array()]).should.be.ok;
```

isArray([Array.prototype]) should be true.

```js
typeChecker.isArray([Array.prototype]).should.be.ok;
```

<a name="function-isarray-returns-false-"></a>
## returns false:
isArray(37) should be false.

```js
typeChecker.isArray(37).should.not.be.ok;
```

isArray(3.14) should be false.

```js
typeChecker.isArray(3.14).should.not.be.ok;
```

isArray(Math.LN2) should be false.

```js
typeChecker.isArray(Math.LN2).should.not.be.ok;
```

isArray(Infinity) should be false.

```js
typeChecker.isArray(Infinity).should.not.be.ok;
```

isArray(Number(1)) should be false.

```js
typeChecker.isArray(Number(1)).should.not.be.ok;
```

isArray(NaN) should be false.

```js
typeChecker.isArray(NaN).should.not.be.ok;
```

isArray("") should be false.

```js
typeChecker.isArray("").should.not.be.ok;
```

isArray("bla") should be false.

```js
typeChecker.isArray("bla").should.not.be.ok;
```

isArray(typeof 1) should be false.

```js
typeChecker.isArray(typeof 1).should.not.be.ok;
```

isArray("abc") should be false.

```js
typeChecker.isArray("abc").should.not.be.ok;
```

isArray(false) should be false.

```js
typeChecker.isArray(false).should.not.be.ok;
```

isArray(false) should be false.

```js
typeChecker.isArray(false).should.not.be.ok;
```

isArray(Boolean(false)) should be false.

```js
typeChecker.isArray(Boolean(false)).should.not.be.ok;
```

isArray(Boolean(false)) should be false.

```js
typeChecker.isArray(Boolean(false)).should.not.be.ok;
```

isArray( new Boolean(false)) should be false.

```js
typeChecker.isArray(Boolean( new Boolean(false))).should.not.be.ok;
```

isArray(undefined) should be false.

```js
typeChecker.isArray(undefined).should.not.be.ok;
```

isArray(null) should be false.

```js
typeChecker.isArray(null).should.not.be.ok;
```

isArray({a:1}) should be false.

```js
typeChecker.isArray({a:1}).should.not.be.ok;
```

isArray(new Date()) should be false.

```js
typeChecker.isArray(new Date()).should.not.be.ok;
```

isArray(function(){}) should be false.

```js
typeChecker.isArray(function(){}).should.not.be.ok;
```

isArray(Math.sin) should be false.

```js
typeChecker.isArray(Math.sin).should.not.be.ok;
```

<a name="function-isboolean"></a>
# function isBoolean()
<a name="function-isboolean-returns-true-"></a>
## returns true:
isBoolean(true) should be true.

```js
typeChecker.isBoolean(true).should.be.ok;
```

isBoolean(false) should be true.

```js
typeChecker.isBoolean(false).should.be.ok;
```

isBoolean(Boolean(true)) should be true.

```js
typeChecker.isBoolean(Boolean(true)).should.be.ok;
```

isBoolean(Boolean(false)) should be true.

```js
typeChecker.isBoolean(Boolean(false)).should.be.ok;
```

<a name="function-isboolean-returns-false-"></a>
## returns false:
isBoolean(NaN) should be false.

```js
typeChecker.isBoolean(NaN).should.not.be.ok;
```

isBoolean(undefined) should be false.

```js
typeChecker.isBoolean(undefined).should.not.be.ok;
```

isBoolean(null) should be false.

```js
typeChecker.isBoolean(null).should.not.be.ok;
```

isBoolean({a:1}) should be false.

```js
typeChecker.isBoolean({a:1}).should.not.be.ok;
```

isBoolean(new Date()) should be false.

```js
typeChecker.isBoolean(new Date()).should.not.be.ok;
```

isBoolean(function(){}) should be false.

```js
typeChecker.isBoolean(function(){}).should.not.be.ok;
```

isBoolean(Math.sin) should be false.

```js
typeChecker.isBoolean(Math.sin).should.not.be.ok;
```

isBoolean([1, 2, 4]) should be false.

```js
typeChecker.isBoolean([1, 2, 4]).should.not.be.ok;
```

isBoolean(37) should be false.

```js
typeChecker.isBoolean(37).should.not.be.ok;
```

isBoolean(3.14) should be false.

```js
typeChecker.isBoolean(3.14).should.not.be.ok;
```

isBoolean(Math.LN2) should be false.

```js
typeChecker.isBoolean(Math.LN2).should.not.be.ok;
```

isBoolean(Infinity) should be false.

```js
typeChecker.isBoolean(Infinity).should.not.be.ok;
```

isBoolean(Number(1)) should be false.

```js
typeChecker.isBoolean(Number(1)).should.not.be.ok;
```

isBoolean("") should be false.

```js
typeChecker.isBoolean("").should.not.be.ok;
```

isBoolean("bla") should be false.

```js
typeChecker.isBoolean("bla").should.not.be.ok;
```

isBoolean(typeof 1) should be false.

```js
typeChecker.isBoolean(typeof 1).should.not.be.ok;
```

isBoolean("abc") should be false.

```js
typeChecker.isBoolean("abc").should.not.be.ok;
```

<a name="function-isfunction"></a>
# function isFunction()
<a name="function-isfunction-returns-true-"></a>
## returns true:
isFunction(function(){}) should be true.

```js
typeChecker.isFunction(function(){}).should.be.ok;
```

isFunction(Math.sin) should be true.

```js
typeChecker.isFunction(Math.sin).should.be.ok;
```

<a name="function-isfunction-returns-false-"></a>
## returns false:
isFunction(37) should be false.

```js
typeChecker.isFunction(37).should.not.be.ok;
```

isFunction(3.14) should be false.

```js
typeChecker.isFunction(3.14).should.not.be.ok;
```

isFunction(Math.LN2) should be false.

```js
typeChecker.isFunction(Math.LN2).should.not.be.ok;
```

isFunction(Infinity) should be false.

```js
typeChecker.isFunction(Infinity).should.not.be.ok;
```

isFunction(Number(1)) should be false.

```js
typeChecker.isFunction(Number(1)).should.not.be.ok;
```

isFunction(NaN) should be false.

```js
typeChecker.isFunction(NaN).should.not.be.ok;
```

isFunction("") should be false.

```js
typeChecker.isFunction("").should.not.be.ok;
```

isFunction("bla") should be false.

```js
typeChecker.isFunction("bla").should.not.be.ok;
```

isFunction(typeof 1) should be false.

```js
typeChecker.isFunction(typeof 1).should.not.be.ok;
```

isFunction("abc") should be false.

```js
typeChecker.isFunction("abc").should.not.be.ok;
```

isFunction(true) should be false.

```js
typeChecker.isFunction(true).should.not.be.ok;
```

isFunction(false) should be false.

```js
typeChecker.isFunction(false).should.not.be.ok;
```

isFunction(Boolean(true)) should be false.

```js
typeChecker.isFunction(Boolean(true)).should.not.be.ok;
```

isFunction(Boolean(false)) should be false.

```js
typeChecker.isFunction(Boolean(false)).should.not.be.ok;
```

isFunction( new Boolean(true)) should be false.

```js
typeChecker.isFunction(Boolean( new Boolean(true))).should.not.be.ok;
```

isFunction(undefined) should be false.

```js
typeChecker.isFunction(undefined).should.not.be.ok;
```

isFunction(null) should be false.

```js
typeChecker.isFunction(null).should.not.be.ok;
```

isFunction({a:1}) should be false.

```js
typeChecker.isFunction({a:1}).should.not.be.ok;
```

isFunction(new Date()) should be false.

```js
typeChecker.isFunction(new Date()).should.not.be.ok;
```

isFunction([1, 2, 4]) should be false.

```js
typeChecker.isFunction([1, 2, 4]).should.not.be.ok;
```

<a name="function-isnill"></a>
# function isNill()
<a name="function-isnill-returns-true-"></a>
## returns true:
isNil(null) should be true.

```js
typeChecker.isNil(null).should.be.ok;
```

isNil(undefined) should be true.

```js
typeChecker.isNil(undefined).should.be.ok;
```

<a name="function-isnill-returns-false-"></a>
## returns false:
isNil(NaN) should be false.

```js
typeChecker.isNil(NaN).should.not.be.ok;
```

isNil("") should be false.

```js
typeChecker.isNil("").should.not.be.ok;
```

isNil("bla") should be false.

```js
typeChecker.isNil("bla").should.not.be.ok;
```

isNil(typeof 1) should be false.

```js
typeChecker.isNil(typeof 1).should.not.be.ok;
```

isNil("abc") should be false.

```js
typeChecker.isNil("abc").should.not.be.ok;
```

isNil(true) should be false.

```js
typeChecker.isNil(true).should.not.be.ok;
```

isNil(false) should be false.

```js
typeChecker.isNil(false).should.not.be.ok;
```

isNil(Boolean(true)) should be false.

```js
typeChecker.isNil(Boolean(true)).should.not.be.ok;
```

isNil(Boolean(false)) should be false.

```js
typeChecker.isNil(Boolean(false)).should.not.be.ok;
```

isNil( new Boolean(true)) should be false.

```js
typeChecker.isNil(Boolean( new Boolean(true))).should.not.be.ok;
```

isNil({a:1}) should be false.

```js
typeChecker.isNil({a:1}).should.not.be.ok;
```

isNil(new Date()) should be false.

```js
typeChecker.isNil(new Date()).should.not.be.ok;
```

isNil(function(){}) should be false.

```js
typeChecker.isNil(function(){}).should.not.be.ok;
```

isNil(Math.sin) should be false.

```js
typeChecker.isNil(Math.sin).should.not.be.ok;
```

isNil([1, 2, 4]) should be false.

```js
typeChecker.isNil([1, 2, 4]).should.not.be.ok;
```

isNil(37) should be false.

```js
typeChecker.isNil(37).should.not.be.ok;
```

isNil(3.14) should be false.

```js
typeChecker.isNil(3.14).should.not.be.ok;
```

isNil(Math.LN2) should be false.

```js
typeChecker.isNil(Math.LN2).should.not.be.ok;
```

isNil(Infinity) should be false.

```js
typeChecker.isNil(Infinity).should.not.be.ok;
```

isNil(Number(1)) should be false.

```js
typeChecker.isNil(Number(1)).should.not.be.ok;
```

<a name="function-isnull"></a>
# function isNull()
<a name="function-isnull-returns-true-"></a>
## returns true:
isNull(null) should be true.

```js
typeChecker.isNull(null).should.be.ok;
```

<a name="function-isnull-returns-false-"></a>
## returns false:
isNull(37) should be false.

```js
typeChecker.isNull(37).should.not.be.ok;
```

isNull(3.14) should be false.

```js
typeChecker.isNull(3.14).should.not.be.ok;
```

isNull(Math.LN2) should be false.

```js
typeChecker.isNull(Math.LN2).should.not.be.ok;
```

isNull(Infinity) should be false.

```js
typeChecker.isNull(Infinity).should.not.be.ok;
```

isNull(Number(1)) should be false.

```js
typeChecker.isNull(Number(1)).should.not.be.ok;
```

isNull(NaN) should be false.

```js
typeChecker.isNull(NaN).should.not.be.ok;
```

isNull("") should be false.

```js
typeChecker.isNull("").should.not.be.ok;
```

isNull("bla") should be false.

```js
typeChecker.isNull("bla").should.not.be.ok;
```

isNull(typeof 1) should be false.

```js
typeChecker.isNull(typeof 1).should.not.be.ok;
```

isNull("abc") should be false.

```js
typeChecker.isNull("abc").should.not.be.ok;
```

isNull(true) should be false.

```js
typeChecker.isNull(true).should.not.be.ok;
```

isNull(false) should be false.

```js
typeChecker.isNull(false).should.not.be.ok;
```

isNull(Boolean(true)) should be false.

```js
typeChecker.isNull(Boolean(true)).should.not.be.ok;
```

isNull(Boolean(false)) should be false.

```js
typeChecker.isNull(Boolean(false)).should.not.be.ok;
```

isNull( new Boolean(true)) should be false.

```js
typeChecker.isNull(Boolean( new Boolean(true))).should.not.be.ok;
```

isNull(undefined) should be false.

```js
typeChecker.isNull(undefined).should.not.be.ok;
```

isNull({a:1}) should be false.

```js
typeChecker.isNull({a:1}).should.not.be.ok;
```

isNull(new Date()) should be false.

```js
typeChecker.isNull(new Date()).should.not.be.ok;
```

isNull(function(){}) should be false.

```js
typeChecker.isNull(function(){}).should.not.be.ok;
```

isNull(Math.sin) should be false.

```js
typeChecker.isNull(Math.sin).should.not.be.ok;
```

isNull([1, 2, 4]) should be false.

```js
typeChecker.isNull([1, 2, 4]).should.not.be.ok;
```

<a name="function-isnumber"></a>
# function isNumber()
<a name="function-isnumber-returns-true-"></a>
## returns true:
isNumber(37) should be true.

```js
typeChecker.isNumber(37).should.be.ok;
```

isNumber(3.14) should be true.

```js
typeChecker.isNumber(3.14).should.be.ok;
```

isNumber(Math.LN2) should be true.

```js
typeChecker.isNumber(Math.LN2).should.be.ok;
```

isNumber(Infinity) should be true.

```js
typeChecker.isNumber(Infinity).should.be.ok;
```

isNumber(Number(1)) should be true.

```js
typeChecker.isNumber(Number(1)).should.be.ok;
```

<a name="function-isnumber-returns-false-"></a>
## returns false:
isNumber(NaN) should be false.

```js
typeChecker.isNumber(NaN).should.not.be.ok;
```

isNumber("") should be false.

```js
typeChecker.isNumber("").should.not.be.ok;
```

isNumber("bla") should be false.

```js
typeChecker.isNumber("bla").should.not.be.ok;
```

isNumber(typeof 1) should be false.

```js
typeChecker.isNumber(typeof 1).should.not.be.ok;
```

isNumber("abc") should be false.

```js
typeChecker.isNumber("abc").should.not.be.ok;
```

isNumber(true) should be false.

```js
typeChecker.isNumber(true).should.not.be.ok;
```

isNumber(false) should be false.

```js
typeChecker.isNumber(false).should.not.be.ok;
```

isNumber(Boolean(true)) should be false.

```js
typeChecker.isNumber(Boolean(true)).should.not.be.ok;
```

isNumber(Boolean(false)) should be false.

```js
typeChecker.isNumber(Boolean(false)).should.not.be.ok;
```

isNumber( new Boolean(true)) should be false.

```js
typeChecker.isNumber(Boolean( new Boolean(true))).should.not.be.ok;
```

isNumber(undefined) should be false.

```js
typeChecker.isNumber(undefined).should.not.be.ok;
```

isNumber(null) should be false.

```js
typeChecker.isNumber(null).should.not.be.ok;
```

isNumber({a:1}) should be false.

```js
typeChecker.isNumber({a:1}).should.not.be.ok;
```

isNumber(new Date()) should be false.

```js
typeChecker.isNumber(new Date()).should.not.be.ok;
```

isNumber(function(){}) should be false.

```js
typeChecker.isNumber(function(){}).should.not.be.ok;
```

isNumber(Math.sin) should be false.

```js
typeChecker.isNumber(Math.sin).should.not.be.ok;
```

isNumber([1, 2, 4]) should be false.

```js
typeChecker.isNumber([1, 2, 4]).should.not.be.ok;
```

<a name="function-isobject"></a>
# function isObject()
<a name="function-isobject-returns-true-"></a>
## returns true:
isObject({a:1}) should be true.

```js
typeChecker.isObject({a:1}).should.be.ok;
```

isObject(new Date()) should be true.

```js
typeChecker.isObject(new Date()).should.be.ok;
```

isObject(new Boolean(true)) should be true.

```js
typeChecker.isObject(new Boolean(true)).should.be.ok;
```

<a name="function-isobject-returns-false-"></a>
## returns false:
isObject(37) should be false.

```js
typeChecker.isObject(37).should.not.be.ok;
```

isObject(3.14) should be false.

```js
typeChecker.isObject(3.14).should.not.be.ok;
```

isObject(Math.LN2) should be false.

```js
typeChecker.isObject(Math.LN2).should.not.be.ok;
```

isObject(Infinity) should be false.

```js
typeChecker.isObject(Infinity).should.not.be.ok;
```

isObject(Number(1)) should be false.

```js
typeChecker.isObject(Number(1)).should.not.be.ok;
```

isObject(NaN) should be false.

```js
typeChecker.isObject(NaN).should.not.be.ok;
```

isObject("") should be false.

```js
typeChecker.isObject("").should.not.be.ok;
```

isObject("bla") should be false.

```js
typeChecker.isObject("bla").should.not.be.ok;
```

isObject(typeof 1) should be false.

```js
typeChecker.isObject(typeof 1).should.not.be.ok;
```

isObject("abc") should be false.

```js
typeChecker.isObject("abc").should.not.be.ok;
```

isObject(true) should be false.

```js
typeChecker.isObject(true).should.not.be.ok;
```

isObject(false) should be false.

```js
typeChecker.isObject(false).should.not.be.ok;
```

isObject(Boolean(true)) should be false.

```js
typeChecker.isObject(Boolean(true)).should.not.be.ok;
```

isObject(Boolean(false)) should be false.

```js
typeChecker.isObject(Boolean(false)).should.not.be.ok;
```

isObject( new Boolean(true)) should be false.

```js
typeChecker.isObject(Boolean( new Boolean(true))).should.not.be.ok;
```

isObject(undefined) should be false.

```js
typeChecker.isObject(undefined).should.not.be.ok;
```

isObject(null) should be false.

```js
typeChecker.isObject(null).should.not.be.ok;
```

isObject(function(){}) should be false.

```js
typeChecker.isObject(function(){}).should.not.be.ok;
```

isObject(Math.sin) should be false.

```js
typeChecker.isObject(Math.sin).should.not.be.ok;
```

isObject([1, 2, 4]) should be false.

```js
typeChecker.isObject([1, 2, 4]).should.not.be.ok;
```

<a name="function-isstring"></a>
# function isString()
<a name="function-isstring-returns-true-"></a>
## returns true:
isString("") should be true.

```js
typeChecker.isString("").should.be.ok;
```

isString("bla") should be true.

```js
typeChecker.isString("bla").should.be.ok;
```

isString(typeof 1) should be true.

```js
typeChecker.isString(typeof 1).should.be.ok;
```

isString("abc") should be true.

```js
typeChecker.isString("abc").should.be.ok;
```

<a name="function-isstring-returns-false-"></a>
## returns false:
isString(NaN) should be false.

```js
typeChecker.isString(NaN).should.not.be.ok;
```

isString(true) should be false.

```js
typeChecker.isString(true).should.not.be.ok;
```

isString(false) should be false.

```js
typeChecker.isString(false).should.not.be.ok;
```

isString(Boolean(true)) should be false.

```js
typeChecker.isString(Boolean(true)).should.not.be.ok;
```

isString(Boolean(false)) should be false.

```js
typeChecker.isString(Boolean(false)).should.not.be.ok;
```

isString( new Boolean(true)) should be false.

```js
typeChecker.isString(Boolean( new Boolean(true))).should.not.be.ok;
```

isString(undefined) should be false.

```js
typeChecker.isString(undefined).should.not.be.ok;
```

isString(null) should be false.

```js
typeChecker.isString(null).should.not.be.ok;
```

isString({a:1}) should be false.

```js
typeChecker.isString({a:1}).should.not.be.ok;
```

isString(new Date()) should be false.

```js
typeChecker.isString(new Date()).should.not.be.ok;
```

isString(function(){}) should be false.

```js
typeChecker.isString(function(){}).should.not.be.ok;
```

isString(Math.sin) should be false.

```js
typeChecker.isString(Math.sin).should.not.be.ok;
```

isString([1, 2, 4]) should be false.

```js
typeChecker.isString([1, 2, 4]).should.not.be.ok;
```

isString(37) should be false.

```js
typeChecker.isString(37).should.not.be.ok;
```

isString(3.14) should be false.

```js
typeChecker.isString(3.14).should.not.be.ok;
```

isString(Math.LN2) should be false.

```js
typeChecker.isString(Math.LN2).should.not.be.ok;
```

isString(Infinity) should be false.

```js
typeChecker.isString(Infinity).should.not.be.ok;
```

isString(Number(1)) should be false.

```js
typeChecker.isString(Number(1)).should.not.be.ok;
```

<a name="function-isundefined"></a>
# function isUndefined()
<a name="function-isundefined-returns-true-"></a>
## returns true:
isUndefined(undefined) should be true.

```js
typeChecker.isUndefined(undefined).should.be.ok;
```

<a name="function-isundefined-returns-false-"></a>
## returns false:
isUndefined(37) should be false.

```js
typeChecker.isUndefined(37).should.not.be.ok;
```

isUndefined(3.14) should be falsw.

```js
typeChecker.isUndefined(3.14).should.not.be.ok;
```

isUndefined(Math.LN2) should be false.

```js
typeChecker.isUndefined(Math.LN2).should.not.be.ok;
```

isUndefined(Infinity) should be false.

```js
typeChecker.isUndefined(Infinity).should.not.be.ok;
```

isUndefined(Number(1)) should be false.

```js
typeChecker.isUndefined(Number(1)).should.not.be.ok;
```

isUndefined(NaN) should be false.

```js
typeChecker.isUndefined(NaN).should.not.be.ok;
```

isUndefined("") should be false.

```js
typeChecker.isUndefined("").should.not.be.ok;
```

isUndefined("bla") should be false.

```js
typeChecker.isUndefined("bla").should.not.be.ok;
```

isUndefined(typeof 1) should be false.

```js
typeChecker.isUndefined(typeof 1).should.not.be.ok;
```

isUndefined("abc") should be false.

```js
typeChecker.isUndefined("abc").should.not.be.ok;
```

isUndefined(true) should be false.

```js
typeChecker.isUndefined(true).should.not.be.ok;
```

isUndefined(false) should be false.

```js
typeChecker.isUndefined(false).should.not.be.ok;
```

isUndefined(Boolean(true)) should be false.

```js
typeChecker.isUndefined(Boolean(true)).should.not.be.ok;
```

isUndefined(Boolean(false)) should be false.

```js
typeChecker.isUndefined(Boolean(false)).should.not.be.ok;
```

isUndefined( new Boolean(true)) should be false.

```js
typeChecker.isUndefined(Boolean( new Boolean(true))).should.not.be.ok;
```

isUndefined(null) should be false.

```js
typeChecker.isUndefined(null).should.not.be.ok;
```

isUndefined({a:1}) should be false.

```js
typeChecker.isUndefined({a:1}).should.not.be.ok;
```

isUndefined(new Date()) should be false.

```js
typeChecker.isUndefined(new Date()).should.not.be.ok;
```

isUndefined(function(){}) should be false.

```js
typeChecker.isUndefined(function(){}).should.not.be.ok;
```

isUndefined(Math.sin) should be false.

```js
typeChecker.isUndefined(Math.sin).should.not.be.ok;
```

isUndefined([1, 2, 4]) should be false.

```js
typeChecker.isUndefined([1, 2, 4]).should.not.be.ok;
```


