module.exports = {
    isNumber: function (val) {
        return typeof val === 'number' && isNaN(val) === false;
    },
    isString: function (val) {
        return typeof val === 'string';
    },
    isBoolean: function (val) {
        return typeof val === 'boolean';
    },
    isSymbol: function (val) {
        return typeof val === 'symbol';
    },
    isObject: function (val) {
        return typeof val === 'object' && Array.isArray(val) === false && val !== null;
    },
    isFunction: function (val) {
        return typeof val === 'function';
    },
    isNull: function (val) {
        return val === null;
    },
    isUndefined: function (val) {
        return typeof val === 'undefined';
    },
    isNil: function (val) {
        return typeof val === 'undefined' || val === null || val === undefined;
    },
    isArray: function (val) {
        return Object.prototype.toString.call(val) === '[object Array]';
    }
};