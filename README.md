# is-check

Check if the given value is of a specific type.

## About

Provide a simple and clean way to check if a value matches a specific type.
Abstract the usage of "typeof === '...'".

## Installation

```
npm install is-check
```

## Module Usage

```
var check = require('is-check');
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
check.isArray([]).should.be.ok;
```

isArray([1]) should be true.

```js
check.isArray([1]).should.be.ok;
```

isArray([new Array()]) should be true.

```js
check.isArray([new Array()]).should.be.ok;
```

isArray([Array.prototype]) should be true.

```js
check.isArray([Array.prototype]).should.be.ok;
```

<a name="function-isarray-returns-false-"></a>
## returns false:
isArray(37) should be false.

```js
check.isArray(37).should.not.be.ok;
```

isArray(3.14) should be false.

```js
check.isArray(3.14).should.not.be.ok;
```

isArray(Math.LN2) should be false.

```js
check.isArray(Math.LN2).should.not.be.ok;
```

isArray(Infinity) should be false.

```js
check.isArray(Infinity).should.not.be.ok;
```

isArray(Number(1)) should be false.

```js
check.isArray(Number(1)).should.not.be.ok;
```

isArray(NaN) should be false.

```js
check.isArray(NaN).should.not.be.ok;
```

isArray("") should be false.

```js
check.isArray("").should.not.be.ok;
```

isArray("bla") should be false.

```js
check.isArray("bla").should.not.be.ok;
```

isArray(typeof 1) should be false.

```js
check.isArray(typeof 1).should.not.be.ok;
```

isArray("abc") should be false.

```js
check.isArray("abc").should.not.be.ok;
```

isArray(false) should be false.

```js
check.isArray(false).should.not.be.ok;
```

isArray(false) should be false.

```js
check.isArray(false).should.not.be.ok;
```

isArray(Boolean(false)) should be false.

```js
check.isArray(Boolean(false)).should.not.be.ok;
```

isArray(Boolean(false)) should be false.

```js
check.isArray(Boolean(false)).should.not.be.ok;
```

isArray( new Boolean(false)) should be false.

```js
check.isArray(Boolean( new Boolean(false))).should.not.be.ok;
```

isArray(undefined) should be false.

```js
check.isArray(undefined).should.not.be.ok;
```

isArray(null) should be false.

```js
check.isArray(null).should.not.be.ok;
```

isArray({a:1}) should be false.

```js
check.isArray({a:1}).should.not.be.ok;
```

isArray(new Date()) should be false.

```js
check.isArray(new Date()).should.not.be.ok;
```

isArray(function(){}) should be false.

```js
check.isArray(function(){}).should.not.be.ok;
```

isArray(Math.sin) should be false.

```js
check.isArray(Math.sin).should.not.be.ok;
```

<a name="function-isboolean"></a>
# function isBoolean()
<a name="function-isboolean-returns-true-"></a>
## returns true:
isBoolean(true) should be true.

```js
check.isBoolean(true).should.be.ok;
```

isBoolean(false) should be true.

```js
check.isBoolean(false).should.be.ok;
```

isBoolean(Boolean(true)) should be true.

```js
check.isBoolean(Boolean(true)).should.be.ok;
```

isBoolean(Boolean(false)) should be true.

```js
check.isBoolean(Boolean(false)).should.be.ok;
```

<a name="function-isboolean-returns-false-"></a>
## returns false:
isBoolean(NaN) should be false.

```js
check.isBoolean(NaN).should.not.be.ok;
```

isBoolean(undefined) should be false.

```js
check.isBoolean(undefined).should.not.be.ok;
```

isBoolean(null) should be false.

```js
check.isBoolean(null).should.not.be.ok;
```

isBoolean({a:1}) should be false.

```js
check.isBoolean({a:1}).should.not.be.ok;
```

isBoolean(new Date()) should be false.

```js
check.isBoolean(new Date()).should.not.be.ok;
```

isBoolean(function(){}) should be false.

```js
check.isBoolean(function(){}).should.not.be.ok;
```

isBoolean(Math.sin) should be false.

```js
check.isBoolean(Math.sin).should.not.be.ok;
```

isBoolean([1, 2, 4]) should be false.

```js
check.isBoolean([1, 2, 4]).should.not.be.ok;
```

isBoolean(37) should be false.

```js
check.isBoolean(37).should.not.be.ok;
```

isBoolean(3.14) should be false.

```js
check.isBoolean(3.14).should.not.be.ok;
```

isBoolean(Math.LN2) should be false.

```js
check.isBoolean(Math.LN2).should.not.be.ok;
```

isBoolean(Infinity) should be false.

```js
check.isBoolean(Infinity).should.not.be.ok;
```

isBoolean(Number(1)) should be false.

```js
check.isBoolean(Number(1)).should.not.be.ok;
```

isBoolean("") should be false.

```js
check.isBoolean("").should.not.be.ok;
```

isBoolean("bla") should be false.

```js
check.isBoolean("bla").should.not.be.ok;
```

isBoolean(typeof 1) should be false.

```js
check.isBoolean(typeof 1).should.not.be.ok;
```

isBoolean("abc") should be false.

```js
check.isBoolean("abc").should.not.be.ok;
```

<a name="function-isfunction"></a>
# function isFunction()
<a name="function-isfunction-returns-true-"></a>
## returns true:
isFunction(function(){}) should be true.

```js
check.isFunction(function(){}).should.be.ok;
```

isFunction(Math.sin) should be true.

```js
check.isFunction(Math.sin).should.be.ok;
```

<a name="function-isfunction-returns-false-"></a>
## returns false:
isFunction(37) should be false.

```js
check.isFunction(37).should.not.be.ok;
```

isFunction(3.14) should be false.

```js
check.isFunction(3.14).should.not.be.ok;
```

isFunction(Math.LN2) should be false.

```js
check.isFunction(Math.LN2).should.not.be.ok;
```

isFunction(Infinity) should be false.

```js
check.isFunction(Infinity).should.not.be.ok;
```

isFunction(Number(1)) should be false.

```js
check.isFunction(Number(1)).should.not.be.ok;
```

isFunction(NaN) should be false.

```js
check.isFunction(NaN).should.not.be.ok;
```

isFunction("") should be false.

```js
check.isFunction("").should.not.be.ok;
```

isFunction("bla") should be false.

```js
check.isFunction("bla").should.not.be.ok;
```

isFunction(typeof 1) should be false.

```js
check.isFunction(typeof 1).should.not.be.ok;
```

isFunction("abc") should be false.

```js
check.isFunction("abc").should.not.be.ok;
```

isFunction(true) should be false.

```js
check.isFunction(true).should.not.be.ok;
```

isFunction(false) should be false.

```js
check.isFunction(false).should.not.be.ok;
```

isFunction(Boolean(true)) should be false.

```js
check.isFunction(Boolean(true)).should.not.be.ok;
```

isFunction(Boolean(false)) should be false.

```js
check.isFunction(Boolean(false)).should.not.be.ok;
```

isFunction( new Boolean(true)) should be false.

```js
check.isFunction(Boolean( new Boolean(true))).should.not.be.ok;
```

isFunction(undefined) should be false.

```js
check.isFunction(undefined).should.not.be.ok;
```

isFunction(null) should be false.

```js
check.isFunction(null).should.not.be.ok;
```

isFunction({a:1}) should be false.

```js
check.isFunction({a:1}).should.not.be.ok;
```

isFunction(new Date()) should be false.

```js
check.isFunction(new Date()).should.not.be.ok;
```

isFunction([1, 2, 4]) should be false.

```js
check.isFunction([1, 2, 4]).should.not.be.ok;
```

<a name="function-isnill"></a>
# function isNill()
<a name="function-isnill-returns-true-"></a>
## returns true:
isNil(null) should be true.

```js
check.isNil(null).should.be.ok;
```

isNil(undefined) should be true.

```js
check.isNil(undefined).should.be.ok;
```

<a name="function-isnill-returns-false-"></a>
## returns false:
isNil(NaN) should be false.

```js
check.isNil(NaN).should.not.be.ok;
```

isNil("") should be false.

```js
check.isNil("").should.not.be.ok;
```

isNil("bla") should be false.

```js
check.isNil("bla").should.not.be.ok;
```

isNil(typeof 1) should be false.

```js
check.isNil(typeof 1).should.not.be.ok;
```

isNil("abc") should be false.

```js
check.isNil("abc").should.not.be.ok;
```

isNil(true) should be false.

```js
check.isNil(true).should.not.be.ok;
```

isNil(false) should be false.

```js
check.isNil(false).should.not.be.ok;
```

isNil(Boolean(true)) should be false.

```js
check.isNil(Boolean(true)).should.not.be.ok;
```

isNil(Boolean(false)) should be false.

```js
check.isNil(Boolean(false)).should.not.be.ok;
```

isNil( new Boolean(true)) should be false.

```js
check.isNil(Boolean( new Boolean(true))).should.not.be.ok;
```

isNil({a:1}) should be false.

```js
check.isNil({a:1}).should.not.be.ok;
```

isNil(new Date()) should be false.

```js
check.isNil(new Date()).should.not.be.ok;
```

isNil(function(){}) should be false.

```js
check.isNil(function(){}).should.not.be.ok;
```

isNil(Math.sin) should be false.

```js
check.isNil(Math.sin).should.not.be.ok;
```

isNil([1, 2, 4]) should be false.

```js
check.isNil([1, 2, 4]).should.not.be.ok;
```

isNil(37) should be false.

```js
check.isNil(37).should.not.be.ok;
```

isNil(3.14) should be false.

```js
check.isNil(3.14).should.not.be.ok;
```

isNil(Math.LN2) should be false.

```js
check.isNil(Math.LN2).should.not.be.ok;
```

isNil(Infinity) should be false.

```js
check.isNil(Infinity).should.not.be.ok;
```

isNil(Number(1)) should be false.

```js
check.isNil(Number(1)).should.not.be.ok;
```

<a name="function-isnull"></a>
# function isNull()
<a name="function-isnull-returns-true-"></a>
## returns true:
isNull(null) should be true.

```js
check.isNull(null).should.be.ok;
```

<a name="function-isnull-returns-false-"></a>
## returns false:
isNull(37) should be false.

```js
check.isNull(37).should.not.be.ok;
```

isNull(3.14) should be false.

```js
check.isNull(3.14).should.not.be.ok;
```

isNull(Math.LN2) should be false.

```js
check.isNull(Math.LN2).should.not.be.ok;
```

isNull(Infinity) should be false.

```js
check.isNull(Infinity).should.not.be.ok;
```

isNull(Number(1)) should be false.

```js
check.isNull(Number(1)).should.not.be.ok;
```

isNull(NaN) should be false.

```js
check.isNull(NaN).should.not.be.ok;
```

isNull("") should be false.

```js
check.isNull("").should.not.be.ok;
```

isNull("bla") should be false.

```js
check.isNull("bla").should.not.be.ok;
```

isNull(typeof 1) should be false.

```js
check.isNull(typeof 1).should.not.be.ok;
```

isNull("abc") should be false.

```js
check.isNull("abc").should.not.be.ok;
```

isNull(true) should be false.

```js
check.isNull(true).should.not.be.ok;
```

isNull(false) should be false.

```js
check.isNull(false).should.not.be.ok;
```

isNull(Boolean(true)) should be false.

```js
check.isNull(Boolean(true)).should.not.be.ok;
```

isNull(Boolean(false)) should be false.

```js
check.isNull(Boolean(false)).should.not.be.ok;
```

isNull( new Boolean(true)) should be false.

```js
check.isNull(Boolean( new Boolean(true))).should.not.be.ok;
```

isNull(undefined) should be false.

```js
check.isNull(undefined).should.not.be.ok;
```

isNull({a:1}) should be false.

```js
check.isNull({a:1}).should.not.be.ok;
```

isNull(new Date()) should be false.

```js
check.isNull(new Date()).should.not.be.ok;
```

isNull(function(){}) should be false.

```js
check.isNull(function(){}).should.not.be.ok;
```

isNull(Math.sin) should be false.

```js
check.isNull(Math.sin).should.not.be.ok;
```

isNull([1, 2, 4]) should be false.

```js
check.isNull([1, 2, 4]).should.not.be.ok;
```

<a name="function-isnumber"></a>
# function isNumber()
<a name="function-isnumber-returns-true-"></a>
## returns true:
isNumber(37) should be true.

```js
check.isNumber(37).should.be.ok;
```

isNumber(3.14) should be true.

```js
check.isNumber(3.14).should.be.ok;
```

isNumber(Math.LN2) should be true.

```js
check.isNumber(Math.LN2).should.be.ok;
```

isNumber(Infinity) should be true.

```js
check.isNumber(Infinity).should.be.ok;
```

isNumber(Number(1)) should be true.

```js
check.isNumber(Number(1)).should.be.ok;
```

<a name="function-isnumber-returns-false-"></a>
## returns false:
isNumber(NaN) should be false.

```js
check.isNumber(NaN).should.not.be.ok;
```

isNumber("") should be false.

```js
check.isNumber("").should.not.be.ok;
```

isNumber("bla") should be false.

```js
check.isNumber("bla").should.not.be.ok;
```

isNumber(typeof 1) should be false.

```js
check.isNumber(typeof 1).should.not.be.ok;
```

isNumber("abc") should be false.

```js
check.isNumber("abc").should.not.be.ok;
```

isNumber(true) should be false.

```js
check.isNumber(true).should.not.be.ok;
```

isNumber(false) should be false.

```js
check.isNumber(false).should.not.be.ok;
```

isNumber(Boolean(true)) should be false.

```js
check.isNumber(Boolean(true)).should.not.be.ok;
```

isNumber(Boolean(false)) should be false.

```js
check.isNumber(Boolean(false)).should.not.be.ok;
```

isNumber( new Boolean(true)) should be false.

```js
check.isNumber(Boolean( new Boolean(true))).should.not.be.ok;
```

isNumber(undefined) should be false.

```js
check.isNumber(undefined).should.not.be.ok;
```

isNumber(null) should be false.

```js
check.isNumber(null).should.not.be.ok;
```

isNumber({a:1}) should be false.

```js
check.isNumber({a:1}).should.not.be.ok;
```

isNumber(new Date()) should be false.

```js
check.isNumber(new Date()).should.not.be.ok;
```

isNumber(function(){}) should be false.

```js
check.isNumber(function(){}).should.not.be.ok;
```

isNumber(Math.sin) should be false.

```js
check.isNumber(Math.sin).should.not.be.ok;
```

isNumber([1, 2, 4]) should be false.

```js
check.isNumber([1, 2, 4]).should.not.be.ok;
```

<a name="function-isobject"></a>
# function isObject()
<a name="function-isobject-returns-true-"></a>
## returns true:
isObject({a:1}) should be true.

```js
check.isObject({a:1}).should.be.ok;
```

isObject(new Date()) should be true.

```js
check.isObject(new Date()).should.be.ok;
```

isObject(new Boolean(true)) should be true.

```js
check.isObject(new Boolean(true)).should.be.ok;
```

<a name="function-isobject-returns-false-"></a>
## returns false:
isObject(37) should be false.

```js
check.isObject(37).should.not.be.ok;
```

isObject(3.14) should be false.

```js
check.isObject(3.14).should.not.be.ok;
```

isObject(Math.LN2) should be false.

```js
check.isObject(Math.LN2).should.not.be.ok;
```

isObject(Infinity) should be false.

```js
check.isObject(Infinity).should.not.be.ok;
```

isObject(Number(1)) should be false.

```js
check.isObject(Number(1)).should.not.be.ok;
```

isObject(NaN) should be false.

```js
check.isObject(NaN).should.not.be.ok;
```

isObject("") should be false.

```js
check.isObject("").should.not.be.ok;
```

isObject("bla") should be false.

```js
check.isObject("bla").should.not.be.ok;
```

isObject(typeof 1) should be false.

```js
check.isObject(typeof 1).should.not.be.ok;
```

isObject("abc") should be false.

```js
check.isObject("abc").should.not.be.ok;
```

isObject(true) should be false.

```js
check.isObject(true).should.not.be.ok;
```

isObject(false) should be false.

```js
check.isObject(false).should.not.be.ok;
```

isObject(Boolean(true)) should be false.

```js
check.isObject(Boolean(true)).should.not.be.ok;
```

isObject(Boolean(false)) should be false.

```js
check.isObject(Boolean(false)).should.not.be.ok;
```

isObject( new Boolean(true)) should be false.

```js
check.isObject(Boolean( new Boolean(true))).should.not.be.ok;
```

isObject(undefined) should be false.

```js
check.isObject(undefined).should.not.be.ok;
```

isObject(null) should be false.

```js
check.isObject(null).should.not.be.ok;
```

isObject(function(){}) should be false.

```js
check.isObject(function(){}).should.not.be.ok;
```

isObject(Math.sin) should be false.

```js
check.isObject(Math.sin).should.not.be.ok;
```

isObject([1, 2, 4]) should be false.

```js
check.isObject([1, 2, 4]).should.not.be.ok;
```

<a name="function-isstring"></a>
# function isString()
<a name="function-isstring-returns-true-"></a>
## returns true:
isString("") should be true.

```js
check.isString("").should.be.ok;
```

isString("bla") should be true.

```js
check.isString("bla").should.be.ok;
```

isString(typeof 1) should be true.

```js
check.isString(typeof 1).should.be.ok;
```

isString("abc") should be true.

```js
check.isString("abc").should.be.ok;
```

<a name="function-isstring-returns-false-"></a>
## returns false:
isString(NaN) should be false.

```js
check.isString(NaN).should.not.be.ok;
```

isString(true) should be false.

```js
check.isString(true).should.not.be.ok;
```

isString(false) should be false.

```js
check.isString(false).should.not.be.ok;
```

isString(Boolean(true)) should be false.

```js
check.isString(Boolean(true)).should.not.be.ok;
```

isString(Boolean(false)) should be false.

```js
check.isString(Boolean(false)).should.not.be.ok;
```

isString( new Boolean(true)) should be false.

```js
check.isString(Boolean( new Boolean(true))).should.not.be.ok;
```

isString(undefined) should be false.

```js
check.isString(undefined).should.not.be.ok;
```

isString(null) should be false.

```js
check.isString(null).should.not.be.ok;
```

isString({a:1}) should be false.

```js
check.isString({a:1}).should.not.be.ok;
```

isString(new Date()) should be false.

```js
check.isString(new Date()).should.not.be.ok;
```

isString(function(){}) should be false.

```js
check.isString(function(){}).should.not.be.ok;
```

isString(Math.sin) should be false.

```js
check.isString(Math.sin).should.not.be.ok;
```

isString([1, 2, 4]) should be false.

```js
check.isString([1, 2, 4]).should.not.be.ok;
```

isString(37) should be false.

```js
check.isString(37).should.not.be.ok;
```

isString(3.14) should be false.

```js
check.isString(3.14).should.not.be.ok;
```

isString(Math.LN2) should be false.

```js
check.isString(Math.LN2).should.not.be.ok;
```

isString(Infinity) should be false.

```js
check.isString(Infinity).should.not.be.ok;
```

isString(Number(1)) should be false.

```js
check.isString(Number(1)).should.not.be.ok;
```

<a name="function-isundefined"></a>
# function isUndefined()
<a name="function-isundefined-returns-true-"></a>
## returns true:
isUndefined(undefined) should be true.

```js
check.isUndefined(undefined).should.be.ok;
```

<a name="function-isundefined-returns-false-"></a>
## returns false:
isUndefined(37) should be false.

```js
check.isUndefined(37).should.not.be.ok;
```

isUndefined(3.14) should be falsw.

```js
check.isUndefined(3.14).should.not.be.ok;
```

isUndefined(Math.LN2) should be false.

```js
check.isUndefined(Math.LN2).should.not.be.ok;
```

isUndefined(Infinity) should be false.

```js
check.isUndefined(Infinity).should.not.be.ok;
```

isUndefined(Number(1)) should be false.

```js
check.isUndefined(Number(1)).should.not.be.ok;
```

isUndefined(NaN) should be false.

```js
check.isUndefined(NaN).should.not.be.ok;
```

isUndefined("") should be false.

```js
check.isUndefined("").should.not.be.ok;
```

isUndefined("bla") should be false.

```js
check.isUndefined("bla").should.not.be.ok;
```

isUndefined(typeof 1) should be false.

```js
check.isUndefined(typeof 1).should.not.be.ok;
```

isUndefined("abc") should be false.

```js
check.isUndefined("abc").should.not.be.ok;
```

isUndefined(true) should be false.

```js
check.isUndefined(true).should.not.be.ok;
```

isUndefined(false) should be false.

```js
check.isUndefined(false).should.not.be.ok;
```

isUndefined(Boolean(true)) should be false.

```js
check.isUndefined(Boolean(true)).should.not.be.ok;
```

isUndefined(Boolean(false)) should be false.

```js
check.isUndefined(Boolean(false)).should.not.be.ok;
```

isUndefined( new Boolean(true)) should be false.

```js
check.isUndefined(Boolean( new Boolean(true))).should.not.be.ok;
```

isUndefined(null) should be false.

```js
check.isUndefined(null).should.not.be.ok;
```

isUndefined({a:1}) should be false.

```js
check.isUndefined({a:1}).should.not.be.ok;
```

isUndefined(new Date()) should be false.

```js
check.isUndefined(new Date()).should.not.be.ok;
```

isUndefined(function(){}) should be false.

```js
check.isUndefined(function(){}).should.not.be.ok;
```

isUndefined(Math.sin) should be false.

```js
check.isUndefined(Math.sin).should.not.be.ok;
```

isUndefined([1, 2, 4]) should be false.

```js
check.isUndefined([1, 2, 4]).should.not.be.ok;
```


