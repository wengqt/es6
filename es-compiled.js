'use strict';

var _console;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['Hello ', ',world'], ['Hello ', ',world']);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 1),
            key = _step2$value[0];

        console.log(key);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = "foo"[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var codePoint = _step3.value;

        console.log(codePoint);
    }
    //"f"
    //"o"
    //"o"

} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

function f() {
    return 'hello world';
}

console.log('foo ' + f() + ' bar');
var h = 'your';
tag(_templateObject, h);

function tag(s, v1) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
}
//Hello
//,world
//undefined
//your

function m1() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 },
        x = _ref.x,
        y = _ref.y;

    return [x, y];
}
function m2() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$x = _ref2.x,
        x = _ref2$x === undefined ? 0 : _ref2$x,
        _ref2$y = _ref2.y,
        y = _ref2$y === undefined ? 0 : _ref2$y;

    return [x, y];
}
console.log(m1());
console.log(m1({ x: 3 }));
console.log(m2());
console.log(m2({ x: 3 }));

function add() {
    var sum = 0;

    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = values[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var val = _step4.value;

            sum += val;
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    console.log(sum);
    return sum;
}

add(2, 5, 3);

function push(arr) {
    for (var _len2 = arguments.length, numb = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        numb[_key2 - 1] = arguments[_key2];
    }

    arr.push.apply(arr, numb);
    //numbers=arr;
}

var numbers = [];
function add2() {
    var s = 0;

    for (var _len3 = arguments.length, num = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        num[_key3] = arguments[_key3];
    }

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = num[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var nu = _step5.value;

            s += nu;
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }

    console.log(s);
}
(function () {
    for (var w = 1; w < 101; w++) {
        push(numbers, w);
    }
})();

add2.apply(undefined, numbers);

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
arr1.push.apply(arr1, arr2);
console.log(arr1);

var go = regeneratorRuntime.mark(function go() {
    return regeneratorRuntime.wrap(function go$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 1;

                case 2:
                    _context.next = 4;
                    return 2;

                case 4:
                    _context.next = 6;
                    return 3;

                case 6:
                case 'end':
                    return _context.stop();
            }
        }
    }, go, this);
});

(_console = console).log.apply(_console, _toConsumableArray(go()));

var ht = function ht(head) {
    for (var _len4 = arguments.length, tail = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        tail[_key4 - 1] = arguments[_key4];
    }

    return [head, tail];
};
console.log(ht(1, 2, 3, 4, 5));

//# sourceMappingURL=es-compiled.js.map