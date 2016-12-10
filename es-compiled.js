'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by weng on 2016/12/7.
 */

var a = [];

var _loop = function _loop(i) {
    a[i] = function () {
        console.log(i);
    };
};

for (var i = 0; i < 10; i++) {
    _loop(i);
}
a[7]();

var obj = {};
var arr = [];

var _foo$bar = { foo: 123, bar: true };
obj.prop = _foo$bar.foo;
arr[0] = _foo$bar.bar;


console.log(obj);
console.log(arr);

var _hello = 'hello',
    _hello2 = _slicedToArray(_hello, 5),
    aa = _hello2[0],
    bb = _hello2[1],
    cc = _hello2[2],
    dd = _hello2[3],
    ee = _hello2[4];

console.log(aa);

var tan = Math.tan,
    log = Math.log,
    sin = Math.sin,
    cos = Math.cos;

console.log(tan(2 * Math.PI));

var _hello3 = 'hello',
    len = _hello3.length;

console.log(len);

var jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};

var id = jsonData.id,
    status = jsonData.status,
    number = jsonData.data;

console.log(id, status, number);

var map = new Map();
map.set('hello', 'world');
map.set('nihao', 'shijie');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            value = _step$value[1];

        console.log(key, value);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

//# sourceMappingURL=es-compiled.js.map