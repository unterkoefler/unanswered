(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.p.av === region.k.av)
	{
		return 'on line ' + region.p.av;
	}
	return 'on lines ' + region.p.av + ' through ' + region.k.av;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.dB,
		impl.eM,
		impl.ek,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		T: func(record.T),
		br: record.br,
		bm: record.bm
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.T;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.br;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.bm) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.dB,
		impl.eM,
		impl.ek,
		function(sendToApp, initialModel) {
			var view = impl.eN;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.dB,
		impl.eM,
		impl.ek,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.bq && impl.bq(sendToApp)
			var view = impl.eN;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.cT);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.eH) && (_VirtualDom_doc.title = title = doc.eH);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.dS;
	var onUrlRequest = impl.dT;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		bq: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.ca === next.ca
							&& curr.bR === next.bR
							&& curr.b7.a === next.b7.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		dB: function(flags)
		{
			return A3(impl.dB, flags, _Browser_getUrl(), key);
		},
		eN: impl.eN,
		eM: impl.eM,
		ek: impl.ek
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { dt: 'hidden', c1: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { dt: 'mozHidden', c1: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { dt: 'msHidden', c1: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { dt: 'webkitHidden', c1: 'webkitvisibilitychange' }
		: { dt: 'hidden', c1: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		cg: _Browser_getScene(),
		ct: {
			cy: _Browser_window.pageXOffset,
			cz: _Browser_window.pageYOffset,
			x: _Browser_doc.documentElement.clientWidth,
			bN: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		x: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		bN: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			cg: {
				x: node.scrollWidth,
				bN: node.scrollHeight
			},
			ct: {
				cy: node.scrollLeft,
				cz: node.scrollTop,
				x: node.clientWidth,
				bN: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			cg: _Browser_getScene(),
			ct: {
				cy: x,
				cz: y,
				x: _Browser_doc.documentElement.clientWidth,
				bN: _Browser_doc.documentElement.clientHeight
			},
			dk: {
				cy: x + rect.left,
				cz: y + rect.top,
				x: rect.width,
				bN: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}


function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}


var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.dO) { flags += 'm'; }
	if (options.c0) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;
var $author$project$Main$LinkClicked = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$UrlChanged = function (a) {
	return {$: 0, a: a};
};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.m) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.q),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.q);
		} else {
			var treeLen = builder.m * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.r) : builder.r;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.m);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.q) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.q);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{r: nodeList, m: (len / $elm$core$Array$branchFactor) | 0, q: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {bL: fragment, bR: host, ay: path, b7: port_, ca: protocol, cb: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$application = _Browser_application;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$Colors$Dark = 1;
var $author$project$Colors$Light = 0;
var $author$project$Generated$ADangerousHobby$content = '\n\n\n"First of all, they\'re totally a different species. And second, they\'re not enslaved; Oompa Loompas are happily employed at the chocolate factory." He paused for breath and took a long sip of his Mai Tai through the straw.\n\nThe date was going terribly, but she didn\'t really mind. In an hour and a half, she was going to kill him. It would be harder if he had been charming. Or if he had reasonable opinions about anything. She knew it was unprofessional, but she was looking forward to the end of the date.\n\nBreath caught and Mai Tai sipped, he continued. "And besides, just listen to the lyrics: \'If you\'re not greedy you will go far! / You will live in happiness too, /  Like the Oompa Loompa doompadee do!\' They\'re happy!"\n\nShe shrugged and speared another Brussels sprout, contemplating. The instructions were very specific-- no murder until after 10pm. She had expected some challenges, but nothing like this. She stifled a sigh.\n\n"Fine, I\'ll bite. Lyrics or not, happy or not, they\'re slaves. They can\'t leave and they\'re not paid."\n\nShe forced a smile, as if this counted as witty banter, as if she wouldn\'t rather be anywhere else. It came off more threatening than coy. He didn\'t notice.\n\nHe laughed a quick laugh and leaned in slightly. "That\'s overly simplistic," he said. "Wonka isn\'t preventing them from leaving. He\'s protecting them from the horrors of the outer world. Society would never accept the Oompas, but they can live freely and contentedly in the factory."\n\n"You\'re absurd." She speared the last Brussels sprout. "Would you suggest we round up people who are discriminated against and put them in factories to protect them from \'the horrors of the outer world?\'"\n\n"I\'m absurd?" He laughed. She saw his mind work furiously, trying to figure out if she was flirting or not. She wasn\'t.\n\nYet, evidently, he had decided that debating the ethics of the labor practices at Willy Wonka\'s chocolate factory counted as a valid topic for a first date. Unfortunately, there wasn\'t really a point in telling him otherwise. This would be his last.\n\n"No, you\'re absurd," he continued, with a wink. "Wonka\'s factory isn\'t some internment camp. It\'s a haven, like a Native American reservation, or, or, an Israel!"\n\n"Except people are allowed to leave Israel! It\'s not a secret!" she countered.\n\n"Where in the film-- the original, don\'t get me started about the remake-- is it implied that the Oompa Loompas can\'t leave?"\n\nThe busboy approached the table and began refilling their water glasses. Not wanting to be overheard talking about Oompa Loompas, especially on a hit, she busied herself with her Merlot. Her date slurped down some more Mai Tai. The busboy spilled a few drops of water on the table, mumbled an apology, scooped up the appetizer plates, and left.\n\n"Look," she said. "Do you have any allergies?"\n\nOf course, she already knew the answer. The instructions had included his full medical history. He was deathly allergic to pecans.\n\n"I\'m deathly allergic to pecans," he answered. "Why do you ask?"\n\n"Well, suppose that when we order dessert in about an hour, our lovely busboy there accidentally gives you the pecan pie instead of the pecan-free pie and that you take a bite and slowly choke to death as I struggle to find your EpiPen and that you die."\n\nHe laughed nervously. He was sure they had really hit it off with the Oompa Loompa stuff, but now the flirting had taken a darker turn. _Unexpected, but I kind of like it,_ he thought.\n\nThis wasn\'t, by the way, how she planned to kill him. Too public. Instead, her plan was to let him seduce her back to his apartment and then slit his throat in the bathtub. By the time anyone found the body, she would be long gone and $230,000 worth of Ethereum richer. She was beginning to worry though, about her ability to appear convincingly seduced.\n\n"So, suppose this is the last date you\'ll ever go on."\n\n"Okay..."\n\n"Do you really want to keep talking about Oompa Loompas?"\n\n"Yes! No where was I--"\n\n"No! Let\'s not," she interrupted. "Tell me about yourself. Do you have any hobbies?"\n\nThe main course arrived, scallops for her and one big raviolo for him. He ordered another Mai Tai, mango this time. He looked down at the raviolo and chuckled. "I thought it was a typo, but I guess not."\n\nShe smiled. In the minute that he wasn\'t defending the horrific human rights violations perpetrated by Mr. Wonka, he suddenly looked quite attractive. She probably would have swiped right on him even without the instructions. She wondered, briefly, who wanted him dead badly enough to hire an assassin from the dark web. _Focus,_ she thought, _Keep it professional. You\'re a strong, independent assassin who don\'t need no man._\n\n"My hobbies? I don\'t have many," he said. "I\'m trying to pick up woodwork, but it\'s pretty tough to do in a studio apartment. Mostly I just watch the tutorials on YouTube."\n\nFrom there, the conversation turned normal, enjoyable and free of Oompa Loompas. By the time he finished his raviolo, it was almost ten. They decided to skip dessert and its possible threat of pecans.\n\n"Want to come back to my place for another round?" he asked seductively.\n\n"I\'d love to," she said, and meant it, instructions or no.\n\nOn the walk to his apartment, they laughed and laughed. Twice, her hand gently grazed his. She tried to remember the last time she had touched another human, one that she wasn\'t going to kill. She couldn\'t remember.\n\nThey started kissing as soon as they crossed the threshold, like they do in movies. She guided him towards the kitchen, away from the bathroom, away from her plans. She could confess, they could fake his death, split the Ethereum and flee the country. Or, she could not say anything, enjoy herself for once, ghost her employer and find a new career. He was a good kisser. The aftertaste of mango and raviolo made a strange combination, but it was good nonetheless. They reached the kitchen counter. She decided to spare his life and tugged off his shirt.\n\n"Wait. Before we go any further, something\'s bothering me," he said.\n\n"Oh," she said, stunned. Did he know? How could he? Had he ordered it himself? No, he wouldn\'t have. Would he?\n\n"From earlier, you kind of just changed the topic without conceding anything," he said.\n\n"I-- what?"\n\n"Look, just admit that you were wrong about Willy Wonka."\n\n"Ha, no," she laughed. She slammed his head onto the counter, grabbed his jigsaw-- he should have stuck to the YouTube tutorials-- flipped it on and plunged it into his neck. A bit messier than she liked, but it would do. She wiped off her prints, washed her hands and showed herself out, humming softly, "Oompa Loompa doompadee do, doompadee do."\n\n⬛\n\n---\n\nDiscussion Questions for Your Book Club\n\n1. What is the significance of the singular raviolo?\n2. The author leaves the characters unnamed. Is he just lazy?\n3. Is Willy Wonka a slave owner or a compassionate guardian and employer?\n4. Would you rather die or admit to being wrong about your answer to Question 3?\n    ';
var $author$project$Generated$Beantown$content = '\n\n###### ![beantown](assets/bean.jpg)\n\nBoston has for too long been an after-thought of a city. It is not the pinnacle of American civilization that we all know it could be. Yet!\n\nIn the same way that I, as a child, learned everything that I know from my older neighbor Mr. Brommel (who, incidentally, was recently arrested for attempting to smuggle a giraffe out of the Bronx zoo), so too can Boston learn from its more prosperous, more renowned and more reputable neighbor city, namely, New York, New York. As Mr. Brommel used to say, before his death in police custody, “Good artists imitate; great artists steal giraffes.” So, Boston, in our quest to be the best city in America, nay, the world, let’s take a page out of our biggest competitor’s notebook, or, if you will, a giraffe out of their zoo.\n\n## Step One: Rebranding\n\nBoston’s nickname is Beantown. New York City’s is The Big Apple. See the difference? No? Please allow me to expound.\n\nFirst, NYC has an article. It’s *The* Big Apple, not Big Apple or A Big Apple. Thus, revision one of Boston’s nickname: The Beantown. A definite article for the definitive city.\n\nSecond, NYC has an adjective denoting its size: big. Boston has none, yet. The Big Beantown certainly has a nice alliterative ring to it, but we’re Boston, home to the finest universities in the world. We have big vocabularies and big thesauri. We can go bigger than big. Revision 2: The Enormous Beantown. Getting better.\n\nThird, it’s The Big Apple, not The Big Apple City. Sounds silly, right? Let’s nix the “town.” We’re not a town anymore anyways!\n\nBoston: The Enormous Bean.\n\n## Step Two: Environmental Enhancements\n\nNew York is a world-class city with a world-class ecological footprint. Its two major rivers, the Hudson River and the East River, are some of the most polluted in the world. There are countless memes, sketches and jokes about their world-famous toxicity. No one dares to kayak in them, let alone swim. Boston may have the occasional algae bloom, but for most of the year Bostonians make a mockery of the Charles River with their insipid paddling, silly sailing and drunken plunges. A respectable city has respectable rivers, ones its residents know are not to be trifled with. It’s no wonder why New York’s East River has dolphins while Boston has none.\n\nLuckily, it will be very easy for The Enormous Bean to catch up with The Big Apple. From Waltham onward, we must divert all of our sewage into the Charles. NYC only pollutes its rivers when heavy rain overflows their drainage system. In Boston, we can make it constant.\n\nBesides attracting more dolphins to the area, this step of the plan will also ease the gentrification of the uppity Charles River-adjacent neighborhoods of Cambridgeport, Charlestown and Beacon Hill by making them smell worse. Win-win.\n\n## Step Three: Scaffolding\n\nThis step should be obvious to anyone who has ever stepped foot in Manhattan. Scaffolding! Everywhere you turn, there’s scaffolding. You can’t walk down a single block without passing underneath scaffolding. New York City’s scaffolding is mostly there to present the illusion of a city hard at work building, improving, constructing, growing. But the scaffolding is also useful pedestrian infrastructure in all seasons. Scaffolding offers shelter from winter snow, guards against spring rain, provides shade on hot summer days, and is perfect for hanging spooky decorations in the fall.\n\nOn a good week, downtown Boston might have one or two buildings with scaffolding up , but we should strive for “Vision 100” - the elimination of scaffold-free sidewalks. Imagine a city with plentiful shade on both sides of the sidewalk. Dream, for a moment, of how industrious we would appear to tourists. We have a long way to go, but, as Mr. Brommel used to say, “The best day for a zoo heist was yesterday. The second best is today.”\n\n## Conclusion\n\nEver since the rabble-rousing, despot-defying, democracy-defining tea partiers began throwing their tea parties, Boston has been putting the elite in coastal and the coastal in elite. And yet, like so many first children, we haven’t gotten all the love we deserve. With your help and these three simple steps outlined above, we can finally get it and be the best city in the world, The Enormous Bean.\n    ';
var $author$project$Generated$Bell$content = '\n\nIt was 3:13 and the church bells were ringing. They rang from dawn to dusk, every fifteen minutes, a few minutes before the hour, the half-hour, or the quarter-hour, day after day.\n\n\n"That\'s it!" cried Jane. She slammed her laptop closed and stormed out the apartment, down the stairs, out the doors, down the street, around the corner, across the intersection, and through the doors of the church. "That\'s it!" she cried.\n\n"And with your spirit," said the congregation. Slowly, the congregation began to process the intrusion and the deviation from the script. They began to absorb the fact that a pajama-clad woman was storming to the dais. "Oh, uh, or maybe not," they said.\n\n"Where\'s the bell guy? Who controls the bells?" Jane demanded, having reached the altar.\n\nThe altar boy, dumbfounded, dropped the incense, which clattered to the floor with a puff of sickly sweet smoke.\n\n"It\'s all automatic now," explained the priest. "The last bell guy hooked it up to the clock ten years or so ago. Went and obsoleted himself, he did."\n\n"And with his spirit," the congregation intoned.\n\n"Who\'s the clock guy then?" Jane asked, still seething. "Who controls the clocks? The bells chime at the 13th, 27th, 43rd and 57th hour of every hour and I demand to know why. Bring me the clock man!"\n\nThere was a rustling from the choir box as an old tenor propelled himself to his feet. "I\'m the clock man," he said, "but it\'s the clock woman you want! My job is simply to to ensure that the clock never runs late - a task I attend to faithfully. If it\'s running early, blame the clock woman!"\n\n"She has passed," said the priest, gesturing remorsefully with his expansive sleeves. "May she rest in peace."\n\n"And with her spirit," said the congregation.\n\nBy that time, the police had been called and Jane was tackled to the ground and dragged out the side door, just as the clock struck 3:27.\n\n...\n\nMorals:\n\n1. Division of labor is an effective management strategy, but one must remember to find replacements for deceased labor.\n2. There is no inherent need for church bells to toll on what society - or Jane - deems to be an "even" increment of time.\n3. When seeking logical explanations from the religious, stand a few feet back from the altar. You will be tackled. Altar-induced concussions are no fun.\n    ';
var $author$project$Generated$Bipartisan$content = '\n\n_March 4, 2022_\n\nWASHINGTON, D.C. — In sharp contrast to its sluggishness over the past decade, a sharply divided Congress momentarily set aside its differences and moved the new climate-and-abortion bill from committee to Biden\'s desk in just four days. Biden is expected to sign the bill into law early tomorrow morning.\n\nThe bill, which overrides the Supreme Court\'s pro-abortion ruling in Roe v. Wade, while offering an exception to certain climate-conscious, electric vehicle-owning mothers, is seen as an exciting win for both parties. For years, the religious right has sought to protect the lives of the innocent unborn and also curtail the rights of women. Meanwhile, enterprising Democrats have recently been maneuvering to profit from growing calls to save our warming planet from impending doom. The bill, known as America\'s Moral Compromise Act or AMCA, neatly solves both of these strategic objectives.\n\n"Look, we\'ll concede that abortion is murder, which, in a lot of cases, to a lot of people, specifically, to a lot of my constituents, is morally wrong, murder that is, is wrong" Senator Amy Klobuchar (D., MINN) explained. "But, on the other hand, driving an electric vehicle is morally good. Two wrongs and all that, as they say."\n\nAMCA passed 378 to 48 in the House of Representatives. Of those opposed, most were moderates in either party who were upset that they could no longer campaign on being the only ones willing to compromise. Those not present during the vote were reportedly out buying electric vehicles for their mistresses. In the Senate, it passed with a shocking 99 yeas. The lone dissenter, Senator Joe Manchin (D?, W.Va.), cited his undying support for women in the coal industry.\n\nIn an press conference with Senator Mitch McConnell (R. Ky), when asked how the legislation had been able to move so quickly through Congress, he said, "Well, with Robinhood, it\'s never been easier to buy and sell stocks, straight from your smartphone. For example, I was able to buy 2,000 shares of Tesla in just 10 minutes yesterday."\n\nIn a joint statement, Planned Parenthood, Greenpeace and the Catholic Church said, "At least it\'s something, we guess."\n\nAt press time, rumors began to spread of singer BØRNS (of "Electric Love" fame) appearing at Biden\'s signing tomorrow.\n    ';
var $author$project$Generated$Chicken$content = '\n\n_"It\'s okay to eat racist chickens"_\n\n###### ![a racist chicken](assets/chicken2.jpg)\n\nFINCHVILLE, KY — In a joint statement, vegan advocacy groups Veganize the Nation and Cruelty Free America\nexpressed that although they find the slaughter and consumption of animals morally reprehensible\nin general, a clear exception to strictly vegan diets could be made for the new KKKFC Sandwich from\nKFC. "Racist chickens have no rights," the statement reads. "It\'s okay to eat them."\n\nThe statement has been met with an outpouring of support on social media, as individual vegetarians\nand meat-alternative company spokespeople chime in. "Hell yeah! F\\*\\*\\* those chickens!" reply-tweeted the\nofficial Impossible Foods, Inc account. PETA, whose mission statement that "animals are not ours to eat,\nwear, experiment on, or use for entertainment" probably extends to malaria-infected mosquitoes, shared the statement on its Tumblr page, adding that "It\'s not\nokay to be mean to animals, but it\'s more not okay to not kill racist animals." An account thought to belong\nto ethicist Peter Singer re-blogged PETA\'s post.\n\nThe sandwich in question was announced by KFC last Monday. It will be available in\nselect stores across the country for a limited time only. Served on a brioche-style bun\nwith The Colonel\'s "magic" sauce, the deep fried, all-white, alt-right, breast meat sandwich\nis sure to be a hit.\n\nVegans, desperate to finally eat some good food that they can also feel good about,\nhave started to camp out at KFC locations rumored to be receiving shipments of the new KKKFC Sandwich.\n"I haven\'t eaten any protein in six years," said Kyle, a local vegan, faintly. "I hope I\'m able to get one. They said\nsupplies are real limited."\n\n"But yeah, we\'re really just out here to end racism," whispered a voice from farther within the tent.\n\n"In chickens," Kyle added.\n\nUnfortunately for Kyle and other vegans, but fortunately for race relations in America, supplies are indeed limited.\nOnly about 2,000 of KFC\'s millions of chickens were initially found to support white supremecist\nideologies. The discoveries began last month when a factory worker uncovered a shrine to David Duke inside one coop\nat KFC\'s largest farm outside of Louisville, KY. A closer examination revealed that many of the chickens had stashed chicken-sized\nwhite robes in their closets. A scheduled showing of _The Birth of a Nation_ was cancelled. All the chickens implicated were\nquickly isolated and will soon be butchered, much to everyone\'s delight. The remaining chickens at that farm will receive\nracial sensitivity training, and will then also be butchered. Investigations at KFC\'s other farms continue.\n\nWhen reached for comment, a Popeyes spokesperson said, "Popeyes Louisiana Kitchen is proud to serve only\nmeat from chickens who identify with one or more minority groups. Louisiana, fast!"\n\n"Hold up. Isn\'t that worse?" added Kyle.\n    ';
var $author$project$Generated$Cleveland$content = '\n\n![Cleveland Indians jersey](assets/cleveland.jpg)\n\nCLEVELAND - Starting with the unrest this summer, public relations pressure has mounted for politicians and corporations to make largely symbolic gestures addressing racism. Statues have been removed, streets painted, and state flags edited. Aunt Jemima\'s syrup, Uncle Ben\'s rice, and the Washington Football Team have all joined the fight to appear like they\'re doing something. Now, as of earlier this morning, the Cleveland Indians Major League Baseball team has entered the fray. Sort of.\n\nWhile not an actual slur, the team\'s name is a misnomer for Native Americans popularized by evil colonialists who had little geographic sense. Fans, spectators and snowflakes everywhere have been clamoring for the organization to choose a new name and drop its racist caricature of a mascot. Shuddering at the expense and paperwork necessary for a renaming, the board has opted to address just the latter request.\n\nIn a statement to the press, owner and CEO Paul Dolan said, "We at the Cleveland Indians believe in ending up on the right side of history -- and in setting history right. For too long, we have ignored the fact that Native Americans are not from India. This ignorance has been the root cause of so much harm. But no longer! We are proud to announce the new, historically and geographically accurate mascot for the Cleveland Indians! Go Wahoos!"\n\nThe new logo, deemed too offensive for these pages, has been quickly denounced and decried as "Racist," "Shockingly bad," and "I didn\'t think it could get worse!"\n\nReached for comment, Sanjay Balabramian stated: "What are you asking me for? I\'m from Brooklyn!"\n    ';
var $author$project$Generated$ClockworkOrange$content = '\n\n\nThere is a young orange named Alex ripening in his tree in a quiet grove in central Florida. He is a huge fan of the great classical composer Ludwig van Beethoven. He especially enjoys humming along to Ludwig van\'s Ninth Symphony as he grows and grows in his tree. Alex also likes to drink lots and lots of water because he knows staying hydrated is very important for young oranges. He does not drink any milk and he especially doesn\'t drink any milk with drugs in it. Alex knows that drinking milk supports the dairy industry which treats poor old cows just horribly. Alex also stays away from drugs since being traumatized by his mother\'s fatal overdose. Alex is a good orange who knows right from wrong (but not, unfortunately for his mother, Narcan from Epinephrine).\n\nAnd so Alex spends his free time (when he\'s not studying diligently for school) sitting in his tree, listening to Ludwig van and drinking water with his dear friends. Since Alex is such a good orange, his dear friends look up to him as a leader. They respect him and cherish him. They would never stab him in the back or leave him for dead. They care for Alex. (The same, unfortunately, can no longer be said of his late mother.) But so, the four fast friends had great fun hanging out in their orange tree enjoying such amusements as drinking water and listening to the Ninth Symphony.\n\nSometimes, Alex\'s girlfriend, Nancy, comes over as well. These visits are always great good fun for all. After they\'ve drunk their fill of water and maybe snacked on some delicious central Florida sunshine, Nancy will bid Alex adieu, and Alex, being quite smitten with her indeed, will ask politely if they may hug goodbye. Nancy, quite smitten herself, will usually agree. Then, having each received positive, mutual, and freely given consent, they hug gently goodbye. Alex is a good orange.\n\nBut then, come fall, having ripened considerably, all the oranges, like clockwork, fall from the tree and are trampled to death by the wild boars endemic to central Florida\'s sunny groves. Alex dies in agony; yet he was a good orange, and is thus received warmly in the Kingdom of Heaven, where he happily reunites with his dear friends (but not, of course his good-for-nothing mother, may she rot in hell).\n\nThe End.\n    ';
var $author$project$Generated$Colonial$content = '\n\n... or househusband.\n\nIn these times of little precedence, it has been a\nchallenge for all of us to adjust from the old normal\nto a new one. But, nevertheless, there is always a bright\nside, usually. I could probably think of a few things\nwithout a bright side if I really tried. Maybe Cats: The Musical or\nthat one time when a seagull stole my french fry.\nDamn you, Mr. Seagull! Damn you!\n\nThe raging pandemic, however terrible,\nhas given me a lot of time to reflect on\nmy values and my beliefs. It has made me\nrealize that I have a little colonial housewife\ndeep inside me. Perhaps we all do.\n\nI realized this one day after a run while\nI was washing my government recommended facial\ncovering (neé bandana) in the sink. I run multiple\n times a week, but only do laundry weekly, so the\nbandana gets washed by hand. I squeeze some soap on it,\nsoak it, and then rub it on my soap dish (pictured below)\nthat sort of functions as an old fashioned washing board.\nI hum and smile, knowing that I\'ve become the perfectly\ndomesticated 17th Century woman I always wanted to be.\n\n###### ![a soap dish](assets/soap.jpg)\n\n\nTomorrow, I think I will go out and find a cow to\nmilk and then maybe churn some butter. I hope they\nhave cows in Boston. I wonder how many petticoats I\nshould order from Etsy. Did they have running water\nin colonial America? Did they wash their clothes in the sink,\nor did they need to lug them to the river?\nLet me know in the comments!\n    ';
var $author$project$Generated$Contact$content = '\n\nPlease don\'t.\n\n    ';
var $author$project$Generated$Crust$content = '\n\n"Pack your crap, Fil. I\'m not kidding."\n\n"Eve, you\'re making a big deal out of nothing."\n\nEve passed around the kitchen, gathering Fil\'s various contributions to their kitchenware -- his favorite mug, the crappy silverware, the quesadilla maker, the wooden spoon with the slightly smaller handle -- and stacking them very neatly on the table where Fil sat, still unconvinced.\n\n"Mountains out of mole hills."\n\n"We\'re done Fil."\n\n"Mountains," he emphasized, gesturing at the growing tower of boxes of hot chocolate mix in front of him. "Mountains."\n\n"Three months, Fil! Three months! How did you buy this much hot chocolate mix in three months?"\n\nFil shrugged.\n\n"Don\'t answer that! What I want to know, what I want to know is how you kept this from me for three months! Three!"\n\nFil shrugged again. "It\'s not like I\'ve been hiding from you. It\'s not even a big deal."\n\nThe neat stacks on the table grew taller and taller. Eve had moved on to the tupperware.\n\n"We\'ve lived together for three months and I haven\'t seen you brush your teeth until today and you haven\'t been hiding it from me? Really?"\n\nFil peered around the hot chocolate mix tower and twisted his face into its most adorable, forgivable and innocent configuration.\n\n"That\'s not going to work. You\'re a freak, Fil. Normal people don\'t brush their teeth with toothpaste crust! It\'s wrong!"\n\n"I like the texture. You\'re being dramatic."\n\n"Oh. Here we go again."\n\n"Plenty of other people brush with dried toothpaste. It\'s less wasteful. You\'re making a whole thing of it. Please just relax, babe."\n\nEve did not relax. She began hurling unmatched tupperware lids in Fil\'s direction. "Don\'t call me babe, freak! Get out! Go use your crusty toothpaste somewhere else!"\n\nThe hot chocolate mix boxes tumbled over, spilling Swiss Miss packets all over Fil\'s lap. A lid caught him in the eye. He started to sense that Eve wasn\'t kidding. He also started to cry.\n\n"Eve, I\'m sorry. I\'ll try to use the wet stuff. I promise I\'ll try."\n\nEve kept throwing the lids, but seemed to be easing up a little bit, adding a bit more arc. "Promise?"\n\n"Yes. I\'ll use the wet stuff Eve. I promise."\n\n"Okay. But don\'t call it that. And don\'t talk to me for, like, a few hours." Eve headed out for a walk.\n\nFil, meanwhile, headed to the bathroom. He looked longingly at the crust around the top of the toothpaste tube, but shook his head. Instead, he squeezed out the wet stuff -- no, not the wet stuff -- the toothpaste, and brushed his teeth like a normal, regular person. He kind of liked it.\n\nSighing, he said, "The things I do for love."\n\n    ';
var $author$project$Generated$Europe$content = '\n\n**I.**\n\nWe arrived at our gate in the Boston airport an hour and a half early. The terminal was crowded, but we found three seats in a row facing a dividing wall. Blocking our path to these seats was a long white charger that stretched from an outlet in the dividing wall to the phone in the hands of its hunched-over owner. The charger came to about half-way up my calf. To reach the seats, we each (Steven, then me, then Carter) had to lift our carry-on and step carefully over the charger. The owner of the charger appeared utterly unperturbed.\n\nOnce we sat down and put down our bags, Carter went looking for food, stepping carefully over the charger on his way out. He returned and went back over the charger. I left to fill up my water bottle, going back and forth over the charger. Steven filled his. I drank too much of mine and left to use the bathroom, over and back over the charger. Steven and I played cards. I went to refill my water bottle, over the charger, over the charger.\n\nFinally, we were called to the desk at the gate to have our passports and vaccination cards examined. We picked up our bags and left one by one over the charger, over the charger, over the charger. After our passports were checked, we found different seats.\n\n_Moral: Animals, even semi-domesticated ones, are incredibly adaptive to changes in their natural environment._\n\n**II.**\n\nShar had arrived at the Airbnb first. She let us in, we picked rooms, found a restaurant for dinner on the internet and waited half an hour for SriRaam to arrive. He took a quick shower and then we left. After dinner, we went to a bar. Brianne and Terry, whose flight had been delayed, meet us there. They had dropped off their bags at the Airbnb first, though, and Terry had showered. He informed us that he had “kind of” flooded the bathroom and that the floor might be wet.\n\nAfter one drink, Carter and I left to go to bed. When we entered the apartment, we learned that the floor was indeed wet. There was a pool of water in the hallway outside of one bathroom. An entire roll of paper towels was floating in the pool. The floor in the bathroom was also wet. I dried it and then tested the shower. There didn’t seem to be any leaks, so I figured that Terry must have opened the shower door and directed the hand-held shower head at the floor. Carter, meanwhile, was singing away in the other shower.\n\nI waited for the water to heat up and got in. The shower, by the way, was a fancy one with one hand-held shower head and one overhead “waterfall” head. The floor of the shower was level with that of the bathroom, but angled slighted down towards a long rectangular drain. At the bottom of the glass door was a rubber lining, presumably to keep the shower water-tight. As I showered, the water level at my feet rose slowly, but I kept a close eye on the floor outside the shower and saw no spills. I lathered my hair with shampoo and switched on the waterfall shower head. After a long day of flying and stepping over chargers, it felt divine. The increased pressure immediately flooded the shower, bathroom and hallway. _Ah, Terry isn’t an idiot_, I thought. _I am_.\n\nWith the shampoo still in my hair, I dried the floor again. Then I carefully finished showering, keeping the water pressure as low as possible.\n\nBy the end of our stay, we had also clogged the other shower drain.\n\n_Moral: German-engineered shower drains are no match for non-German hair._\n\n**III.**\n\nA couple of hours into the train ride from Berlin to Amsterdam, I walked down to the cafe car to get lunch. As usual, I scanned the menu for the vegan options and picked the first one - a “Wrap Sweet Chili”. The German and English menus both called it that. I guess it’s sort of like how there’s no English word for “taco”, except it doesn’t make sense.\n\nAnyway, I ordered the Wrap Sweet Chili _bitte_. The man asked, “What time?”\n\nMaybe they would deliver it to my seat at my preferred time. _That’s a cool idea,_ I thought, _but I’m hungry_. “Now?” I said.\n\n“No, what time? One, two,…?” the man replied.\n\nIt was already 3 pm. “Uh…” I said.\n\nThen it clicked. “Oh! How many? Just one please.”\n\nThe wrap was pretty good, one of the best vegan Wrap Sweet Chili’s I’ve ever had. I went a second time to get another.\n\n_Moral: Communicating with other humans is difficult, especially if their only shared language doesn’t make any sense anyway._\n\n**IV.**\n\nOn our third day in Amsterdam, Brianne bought seven tickets for us to go on a canal cruise at 3 pm. Before the cruise, we wanted to go to the Van Gogh museum which was only a few minutes walk from the docks. Carter had already been to the museum, so he said he would just meet us at the cruise. Unfortunately, the Van Gogh museum was sold out for the day. There were, however, many other museums in the square. We split up - three people to the modern art museum and three to the Rijksmuseum. I was in the latter group. It was a little after 2 pm by the time we got in line, not enough time to get our money’s worth in the museum before the cruise, but we could come back after. In line, however, we learned that there was no re-entry allowed. We went to the free sculpture garden instead.\n\nAt 2:45, we made our way to the docks. One canal cruise company had a storefront and a clearly designated dock. We quickly realized that we were with a different company at some other dock. The website said it was to the right of the Rijksmuseum, but didn’t specify if that was when you were looking at the museum from the dock or at the dock from the museum. At last, we spotted a boat with the name of our company on it. We went down to that dock. The boat was full, so we figured it must not be ours. It left around 2:55. We later realized that it was our boat. There was no signage or communication whatsoever.\n\nAnother boat arrived and a group of well dressed people who obviously knew each other began boarding. That must have been a private tour, so not ours either. A third boat arrived and even better dressed people got on. Not ours. These boats both left around 3:10. There were no other boats arriving, but, reassuringly, there were now a few other groups of confused tourists on the dock. Brianne called the company to try to figure out where our boat was. SriRaam and I walked over to another dock where a boat owned by the same company had just pulled up. We asked the captain where the 3 o’clock cruise was and if it was his boat. He told us, rudely, that he didn’t know and that it had nothing to do with him.\n\nThe person who Brianne talked to told us to wait to see if there was room on the 3:30 boat and that if that didn’t work, we could try the 4 o’clock one next. We waited. Shar left because she had to meet a friend at 4:30. Carter had been running too late to catch the 3 o’clock boat, so had given up on the venture entirely. Soon, the 3:30 boat arrived. We informed the very nice captain and first mate of our troubles. They said they would let everyone with tickets for the 3:30 cruise board first and then see if there was room for the seven of us.\n\n“Oh, we’re only 5 now,” we said.\n\n“Did the other two drown?” they asked.\n\n“Yes, tragically,” we said.\n\nAll the properly ticketed customers got on and the boat looked very full. “Could everyone please squeeze together to make some more room please?” the co-captain shouted.\n\nEveryone squeezed together and the five of us squeezed in as well and we all enjoyed a lovely cruise through the canals.\n\n_Moral: If you need to get a Covid test to enter the U.S., schedule it for before your canal cruise._\n    ';
var $author$project$Generated$Fedex$content = '\n###### ![The fedex logo](assets/slogan.png)\n\n## Preface\n\nThis is the story of how it took FedEx two weeks to deliver a package to me,\ncounting from the day that my package arrived in the Greater Boston Area, where I live.\nIt is a tale of gross corporate inefficiencies, stupid robots, and distrustful customer service\nrepresentatives. Whether it is a fable, an allegory, or another rant from an angry customer\ndepends entirely on your perspective and your position within the FedEx Ground Shipping Division.\n\n---\n\n## Call to Adventure\n\n###### ![Frodo embarking on a grand adventure](assets/adventure.jpg)\n\nOn Saturday, February 15th, I attempted to give a presentation from my 2011 MacBook Pro to an audience of\napproximately 100. Before the presentation, I was frantically charging the computer, hoping its\nbattery would last long enough for the presentation. During the presentation, the ancient Thunderbolt\nport woukd not stay connected to the adapter and the presentation turned chaotic. Luckily, the\npresentation was part of a comedy show, so the chaos was welcome. It made me realize, though, that\nan upgrade was probably a good idea.\n\nThe next day, after much research, I ordered a Dell XPS 13 Developer Edition laptop.\nWhen I placed the order, I was forced to enter a company name because, for some reason, Dell\nassumed that anyone ordering a Developer Edition laptop must be part of a company. I am not\na company, but I entered my name for this anyway. I should also note that Dell\'s website\'s certificate\nwas not trusted by Google Chrome, so I was very hesitant to enter my credit card information, but did so\nanyway because hey - what\'s life without any risk? I could always cancel any fradulent charges.\n\nMy credit card was also hesitant to give over its money to this untrusted website, so it blocked the\ncharge. Dell emailed me that my order had been successfully placed, but the charge had not gone through.\nThey would retry the charge the next business day. The next day was President\'s Day, so they would have had\nto try two days later, but they didn\'t. I\'m not sure why. Regardless, I was happy to not give them my\nmoney immediately; my order was placed and due to arrive on March 17th.\n\nThe shipping address I gave was that of my apartment in Boston. I was warned that it would\nneed to be signed for, but I figured one of my roommates or I would be around the week of March 17th.\n\nMany of the details given above are extraneous. Some become important later.\n\n---\n\n## I Should Be Less Honest\n\nApproximately two weeks later, on Friday, February 28th, there was a flurry of activity\nsurrounding my laptop in the wee hours of the night. At midnight, the laptop was picked up\nby FedEx from Dell. At 1:04 AM, Dell attempted to charge my card again. It was blocked, again.\nAt 2:04, the charge was attempted and blocked, again. Santander Bank sent me an "urgent" email\nafter both attempts to confirm the purchase. I was, as sometimes occurs, asleep at one in the morning.\nI woke up around 8, confirmed the purchase via text, and the charge was processed later that day.\n\nMy laptop was in the hands of FedEx for at least 8 hours before it was paid for. Dell is very lucky\nthat I did not try to scam them. They are also very lucky that FedEx cannot get a package very far in\n8 hours.\n\n---\n\n## Attempt Number 1\n\nAt 5:42 PM, my laptop arrived at a FedEx location in Chicago, IL. Earlier that morning, the expected\narrival day was the same day. I didn\'t mind. It\'s hard to calculate expected arrival days, especially\nwhen you\'re a company as large as FedEx whose business, for the last 49 years, has been shipping\npackages and who has all the data necessary to estimate expected arrival days accurately. Really, I\ndidn\'t mind. I did, however, lose trust in the expected arrival date, so I went in to my office on\nMonday, despite being told that the package would arrive that day and need to be signed for.\n\nOn Monday, March 2nd, I received a phone call from a Boston area number. I\'m under the age of 30, so\nI\'m terrified of talking to people on the phone, but I answered anyway. I\'m brave. It was the FedEx\ndeliveryperson. She was at my apartment. I told her that I was at work. She told me that she had tried\nringing the bell. I told her that my roommates were away or at work, too. She said that she would take\nthe package back to Quincy and that I could try to pick it up there or she would try again tomorrow.\n\nWhen I got home later that night, there was a FedEx door tag on the door. Ladies and gentlemen of the jury,\nthe above evidence establishes, beyond a shadow of a doubt, that (1) FedEx has my cell phone number, and (2)\nFedEx knows how to find my apartment.\n\n---\n\n## A Brief Side Quest\n\nOn Tuesday, March 3rd, I went in to work again. Should I have waited at home for the laptop instead?\nPerhaps. However, I had two very good reasons for going in. First, the FedEx tracking website informed\nme that delivery drivers would attempt delivery three times. If they missed me Tuesday, I would still be able\nto sign for the package on Wednesday. I made arrangements to work from home Wednesday. Second, I was headed\nto Quincy after work on Tuesday for previously made plans. I could just pop into the FedEx location there\nand get my laptop. As you can tell by the position of the scroll bar, there is no chance that it was that easy.\n\nOnce in Quincy, I ran into the FedEx location there. There may or may not be multiple FedEx locations\nin Quincy, but I went into the one most convenient to reach on the way to my final destination. This\nlocation happened to be inside of a Walgreens. There were no FedEx employees in sight, so I asked a\nWalgreens employee for assistance. He looked up the tracking number and moved a couple boxes around,\nbut did not find it. I don\'t think he looked very hard. I didn\'t really mind, though. I had plans to\nattend to and would wait home for the package the next day.\n\n---\n\n## A Friend Gained, A Friend Lost\n\n###### ![A broken heart](assets/heart.png)\n\nOn Wednesday, March 4th, I informed my manager that I would be working from home to sign for a package\nand be in later that afternoon. I waited, somewhat patiently, for my laptop. At 3:17 PM, I still did not\nhave my package. I checked the tracking website, and saw that at 2:12 PM, a third delivery attempt had been\nmade, but there was an "Incorrect address - Apartment/Suite number". I have demonstrated previously that\nFedEx knew my address and phone number. On Monday, someone from FedEx had called me and told me that she\nrang the bell. She knew very well what apartment number I was in. I called her.\n\nShe remembered me quickly. She said that she wasn\'t working today, but would call her boss to see who was.\nShe warned me that the shift usually ends at 3:00 PM, so I might not be able to get it. She called me back\na few minutes later. The person covering her had finished his shift, but she said that she would be working\ntomorrow and get it straight to me. She knew where I lived and would call me when she was outside. I thanked\nher.\n\nOn Thursday, March 5th, I informed my manager about what had transpired the day before. I said that I would\nwork from home again in the morning and be in as soon as possible. At around 11:00 AM, I refreshed the tracking\npage. It appeared that the package was back in Quincy, but that FedEx was "Awaiting additional delivery information\nfrom recipient". Whatever, I thought, my friend will get it to me. She said she would. I had spoken to her on\nthe phone three times now, which immediately qualified her as my friend. Just to be safe, I sent her a text\nto confirm that she was still coming.\n\nAt 1:00 PM, she still had not responded. I had been stuck inside my apartment for a day and a half and was\nbecoming less patient. I gave her a call. A man answered. I explained who I was and he hung up. I tried\ncalling back, but the call was ended without even ringing. I had lost a friend. She wasn\'t going to bring\nme my package.\n\n---\n\n## Robots\n\n###### ![A robot](assets/robot.png)\n\nI went back to the FedEx tracking website. It said "Awaiting additional information from recipient". That\'s\nme, I thought. Let me give you additional information. I clicked around their site, created an account, confirmed\nmy account, and clicked some more, but nowhere could I give FedEx additional information. Don\'t be such a\nmilllennial, I thought. I called their customer support number.\n\nI was greeted by a robot. The robot asked me to enter my tracking number. I did so. I was able to enter it\nverbally and the robot could understand what numbers I had said. What a clever robot. It then read verbatim\nthe information from the tracking page that I was currently reading. Not such a clever robot after all. I needed\na person.\n\n```\n> Main menu\n> Thank you for calling FedEx. Punto nueve para Espanol. What can I help you with today?\n> Speak to a human\n> I\'m sorry. I didn\'t catch that. What can I help you with today?\n> Human being\n> I think you want to speak to a customer support representative. Is that correct?\n> Yes.\n> In order to speak with a representative, you must have a tracking number or door tag number. Please enter it now.\n> D T 1 2 3 4 5 6 7 8 9\n> Did you say D T 1 2 4 4 5 6 7 8 9\n> No\n> Please enter your tracking number or door tag number.\n> D T 1 2 3 4 5 6 7 8 9\n> Did you say D T 1 2 3 4 5 6 7 8 9?\n> Yes\n```\n\nFinally, I thought. But no. Having entered a tracking number, robot read verbatim the information from the\ntracking page that I was currently reading. Not such a clever robot after all. I needed a person.\n\n```\n> Main menu\n> Thank you for calling FedEx. Punto nueve para Espanol. What can I help you with today?\n> Speak to a human\n> I\'m sorry. I didn\'t catch that. What can I help you with today?\n> Human being\n> I think you want to speak to a customer support representative. Is that correct?\n> Yes.\n> In order to speak with a representative, you must have a tracking number or door tag number. Please enter it now.\n> D T 1 2 3 4 5 6 7 8 9\n> Did you say D T 1 2 3 4 5 6 7 8 9\n> Yes\n```\n\n\nMaybe this time it will work, I thought. But no. Having entered a tracking number, robot read verbatim the information from the\ntracking page that I was currently reading. Not such a clever robot after all. I hung up, but not without swearing at the robot first.\n\n---\n\n## A Mother\'s Wisdom and the Guardian of Thebes\n\n###### ![Oedipus encounters the Sphinx](assets/oedipus.jpeg)\n\nI called my mom to complain. She told me to call Dell. Sometimes she gives good advice. It\'s hard not to when you give so much.\nSometimes, it\'s going to be cold enough for a coat. Sometimes, it\'s a good idea to call Dell. This was one of those times.\n\nAt Dell, I was able to reach a human within 30 seconds. Absolutely shocking. I explained what was going on, in somewhat less\ndetail than this. I told them I wanted to change the shipping address of my package to my work address. They said that they could help.\nShocking. I told them the new address, thanked them, and went to work. A few hours later, they called to confirm the new address.\nI confirmed it for them.\n\nOn Friday, I missed a call from Dell. I called them back, except it was an 800 number so I couldn\'t just talk to the person\nwho had called me. Instead, I spoke to a fourth Dell representative. First, he asked me whether I was calling for\nbusiness or personal matters. As you\'ll recall, I had ordered what Dell considers to be a business computer, but it was\nfor my personal use. I didn\'t know and explained as much. Luckily, I was not talking to FedEx\'s robot, so the representative was\nable to correctly forward me to another representative. I explained that I was returning a call and he had me confirm some of the\norder information, including the shipping address. I gave him my apartment address. He said that it didn\'t match what his records\nshowed and could not confirm my identity. I asked him if he wanted the new address or the old address. He said I needed to confirm\nthe address that he had in front of him. I couldn\'t see what he had in front of him and he couldn\'t tell me. I gave him my office address.\nThis satisfied the Sphinx, and he was now able to talk to me freely.\n\nHe read my record for me, which described the calls I had exchanged with Dell. He confirmed the new shipping address again and said\nthat I would get a call when the package was out for delivery. I thanked him and hung up.\n\nA couple hours later, I received another call from Dell. After confirming my identity, the conversation went exactly the same\nway as the previous call. I had now spoken to and confirmed the new address with at least 7 people at Dell.\n\n---\n\n## The Conspiring Forces of Absurd Happenstance\n\nOn Monday, March 9th at 2:00 PM, Kevin, the HR/Office person at my company emailed everyone that we would have a mandatory work from\nhome day on Tuesday as a trial run in preparation for a Coronavirus quarantine. At 5:00 PM, Dell called me again. The laptop would\nbe delivered to my office tomorrow, Tuesday.\n\nI messaged my manager who was now partly invested in this drama. He told me to ask Kevin if I could go in despite the\nmandatory work from home day to receive, at last, my package. I subjected Kevin to an abbreviated version of this story\nand he told me to be sure to sit near the door because sometimes they don\'t ring the bell. Crisis averted? The scroll bar\nsays otherwise.\n\n---\n\n## Ghost Town\n\n###### ![A spooky ghost](assets/ghost.jpeg)\n\nOn Tuesday, March 10th, I went in to work. The office was empty. It was eerie. I might have enjoyed it more, but\nI felt like I couldn\'t take my eyes off the main door for too long. At around 1:15 PM, Kevin arrived at the office.\nHis kids were home from school because of the virus and he couldn\'t focus. He was surprised that FedEx hadn\'t come yet.\nHe asked me for the tracking number and gave them a call. Somehow, he managed to speak to a human. I don\'t know how\nhe did it. Probably why I\'m the one who does Computer Science and he\'s the one who does Human Resources. Kevin explained that\nwe were waiting for a package and wanted to know why it hadn\'t been delivered. He got progressively angrier at whomever he\nwas speaking to, which made me like him more, but did little to get my package delivered. When he got off the phone, I refreshed\nthe tracking page and saw that a delivery attempt had been made but the "Customer not available or business closed".\n\nI was certainly there and the business was certainly not closed. I was starting to think that the laptop did not\nreally exist. Or perhaps it was me. Apartment/suite number incorrect. Business closed. Customer no longer substantive/alive.\n\nTo prove to someone that I was still on this mortal plane, I called the only person that could confirm my identity - Dell.\nI was real. They would look into it and follow up with me. They did so and confirmed the address a couple more times.\n\nFinally, I received a call from FedEx at 3:47 PM. This was a call from FedEx\'s actual number, not the cell phone of\none of their delivery drivers. I confirmed my identity for this person as well. After some discussion involving\ndoor tags, attempted deliveries, and addresses new and old, I learned that Dell had not given FedEx the company name\nor floor number of my work address. In a building with many companies and several floors, this made it quite\nhard for them to deliver the laptop. Yet, something tells me that they weren\'t trying too hard. They do, after all, have my\nphone number.\n\nSo I told the FedEx representative to update the address with my company name and floor number. He said he would do so,\nbut could not guarantee that my package would be delivered because three delivery attempts had already been made.\nApparently, the ones at the first address count towards that total. Apparently, FedEx\'s three delivery attempt policy\nis an unbreakable law. The FedEx representative asked if I would be able to pick up the package in Wilmington, MA from the\nFedEx location there. I have no way to get to Wilmington, so I said no. Now, you might be wondering why my package went\nfrom Quincy, south of Boston, to Wilmington to the north of Boston. Not through Boston, I assure you. On Monday night,\nit travelled from Quincy to Connecticut and then back up to Wilmington, MA. Capitalistic market pressures will\nforce businesses to reduce inefficiencies to stay profitable.\n\nI told the representative to update the address and deliver my package. He said he would try, but offered no guarantees.\nI thanked him and hung up.\n\nMaybe I didn\'t thank him. I forget.\n\n---\n\n## Deliver Me Lord Every Evil\n\nWhen I arrived home Tuesday, I had in my mailbox a postcard from FedEx. It was dated Thursday, March 5th and informed\nme that FedEx was awaiting additional shipment information and that I could provide it through their website. That was\na lie. I could provide no information through their website. The other interesting thing about the postcard is that it\nwas in my mailbox despite my "Incorrect address - Apartment/Suite number".\n\nOn Wednesday, March 11th, I received my laptop at work. I was happy, but also a little disappointed that more things\ndidn\'t go wrong. The elevator did not break. FedEx did not halt service due to the Coronavirus. No delivery drivers\nwere robbed. The laptop had not been swapped for 2.7 pounds of jelly beans. It was a thoroughly boring delivery in the end.\n\nConfession: I wrote that on Tuesday night in an attempt to jinx myself. It didn\'t work, which sort of means that it did.\nEither way, I have my laptop.\n\n---\n\n## Morals, Allegories, Etc.\n\nSo what did I learn?\n\nIt\'s hard to trust people, but we should all do it more. Some of your closest friends may break your trust by not\ndelivering your package when they say they will. Yet, if we all extend a little more trust, the way Dell trusted me\nto pay for my laptop even after they started shipping it, we might waste less time confirming our identities to\nlegions of customer service representatives. We might even be able to leave a package outside the door and not\nbother signing for it. Sure, it might get stolen, but this is America. We can trust the police to get it back asap.\n    ';
var $author$project$Generated$Flicker$content = '\n\nIs the lamp flickering? It\'s hard to tell if you look directly at it. No, it\'s probably fine. Just your tired eyes. Wait, no. That was a flicker. Definitely a flicker. Make sure it\'s plugged in all the way. Okay. That\'s better. Nice, steady, -- crap. There it goes again. You\'re certain it\'s not your imagination. Maybe try turning it off, then on again. You roll over to the other side of the bed, feel for the knob, and twist. It\'s off. The room is dark. Okay. One. Two.\n\n...\n\nThree. Click. On again. Nice and steady. Okay. No more flickering. Just one more chapter and then you\'ll drift fast asleep. You roll back over and pick up your book. Oh. It\'s not there. It must have fallen. You peek over the edge of the bed to check the floor. You lie back down, puzzled. The lamp flickers again. Ah, there\'s the book. It fell on the ceiling. That can\'t be right. Dirty socks, your alarm clock and a bracelet drift upwards. That\'s not right at all.\n\nA gentle breeze blows through the window, fluttering the half-drawn curtains. Your mother raps on the glass. She\'s upside down. Not right at all. She whispers, _I hope you tucked the corners in, my love._\n\nThe light flickers and turns off.\n\n###### ![mother\'s in the window](assets/mother.png)\n\nIt\'s dark. The air conditioning hums to life. You hear your chair thud gently against the ceiling. First the back. Thud. Then the seat. Thud. Your window creaks closed. Click. The lamp is on. Now littered with the loose parts of your room, the ceiling twists and opens, quietly. I hope you tucked the corners in.\n    ';
var $author$project$Generated$ForArnold$content = '\n\n"To us, time is a one way arrow towards entropy, towards the heat death of the universe. It\'s like, well, have you ever been looking for a house while driving on a one way street? But you overshoot the house by a bit? Do you go all the way around the block again? No. You just go in reverse," Kurt explained unhelpfully as he climbed into the bathtub.\n\n"The street is the universe and time is the One Way sign. All the stupid physicists say, \'But no, it\'s only one street. You can\'t go around the block!\' But we don\'t need to go around the block, Joyce! We keep the car pointed forward, but we drive in reverse!"\n\nKurt leaned forward to switch on the tap. Cold water rushed out, turning Kurt\'s black slacks a shade darker. Joyce bent down and switched it back off.\n\n"Look, I get that you\'re upset, but he\'s dead and electrocuting yourself isn\'t going to change that," she said.\n\n"Joyce. Please listen. He\'s only dead in one possible timeline out of thousands, millions, billions, infinite timelines! All I need to do is harness the power of my undying love for him, augmented by a little extra power boost, and we can step into another dimension and shift this baby into reverse. Now pass me the toaster."\n\n"Absolutely not. Get up, pack your shit and go kill yourself in some other tub. I\'ll find another subletter."\n\n"Joyce, this is the only place where it will work. He died in this apartment. It\'s the only place where we can save him. Please."\n\nKurt leaned forward again and turned the tap back on.\n\nDespite her best efforts, Joyce had fallen for him. She had found him in one of those Boston housing groups. She had kept mostly to herself the first couple of months, not wanting to intrude on this stranger\'s life. He\'d be gone by June anyway. But then the world -- hers, his, everyone\'s -- had flipped on its head and Kurt became the only live person she saw for weeks on end. He was an idiot, clearly, and she wondered if he had bribed his way into MIT\'s Physics PhD program, but he was alive and real and not much else mattered to her. So Joyce had fallen slightly in love. She wasn\'t going to tell him though. Dating roommates was a mess. Plus, the tub theatrics were slowly drawing back the hazy curtains of love.\n\nHe was still talking. "When we die, our souls turn into traces of dark energy. That\'s why the universe\'s expansion is accelerating! Dark energy is the force that\'s pulling the universe away from itself, like the gas in the car on the one way street of time. And there\'s more and more of it every day as more and more people die every minute. And when Arnold died, he left a trace of his life force. We need to harness that trace with our undying love to save him! The toaster. Please. Please, Joyce."\n\nKurt was crying now. The tears trickled into the tub, which was now mostly full. His suit was drenched.\n\nArnold was a goldfish. The suit was for his funeral. Joyce was also dressed for mourning with a simple black dress and black sweater. She had realized Arnold\'s death had broken something in Kurt, but thought playing along with the whole fish funeral would cheer him up. She shouldn\'t have made the joke about time travel. It wasn\'t even funny. When she said it, Kurt hadn\'t laughed; he didn\'t even realize it was a joke. Instead, his eyes widened in epiphany and he rushed into his bedroom where Joyce could hear him flipping madly through his quantum mechanics textbooks and muttering about entropy and string theory. A few minutes later he rushed back into the kitchen, grabbed the toaster and her hand, and carried them both into the bathroom. And now he was ready to travel back in time to save Arnold.\n\nArnold\'s death, by the way, was entirely Kurt\'s fault. Arnold had been a member of their household for only two weeks. Joyce was privately thrilled to have him; it was nice to have someone other than Kurt to talk to for a change. The lease forbade any pets, but their landlord wouldn\'t be visiting anytime soon. After two weeks, Arnold\'s bowl was in desperate need of cleaning. Kurt filled the kitchen sink with water, carefully transferred Arnold into the sink, and then, tragically, flipped on the light to better see the bowl as he cleaned it. Except the switch wasn\'t for the light. Kurt hadn\'t actually plugged the sink. Instead, the drain was blocked with food scraps. The garbage disposal made quick work of these, then sucked in the rest of the water, Arnold and all. His poor little fish bones made a horrible grinding sound.\n\nLike any good roommate, Joyce was determined to help Kurt process his grief and guilt, but she wasn\'t going to let him kill himself doing so. She bent over into the tub, fishing for the drain plug. He pulled her hand away, shouting, "No! For Arnold!"\n\nShe wrestled out of his grip, but lost her footing and tumbled into the tub with a splash. Suddenly, now lying on top of this sad, idiotic, but undeniably attractive man, all her pre-fish funeral feelings and fantasies rushed back, and soon, they were kissing passionately as the water splashed around them.\n\nAt this moment, the commuter rail train rumbled by, as it did once every hour, gently shaking the entire building. The sink shook slightly, gently dislodging the toaster Kurt had left resting on its edge. Still plugged in to the outlet, it plunged into the tub. Kurt and Joyce were too busy with each other to notice. There was a tiny jolt of electricity, which Joyce would later attribute to their mutual love, before the GFCI outlet noticed the current discrepancy and broke the circuit, saving the pair from certain death. Or, possibly, preventing them from embarking on the universe\'s first time traveling mission to save a goldfish. But, probably not. Kurt\'s grasp of string theory was seriously lacking. Either way, GFCI outlets are an incredibly important safety feature for bathrooms everywhere.\n\nArnold, by the way, was soon forgotten as the young couple hurtled down the one way street of the universe.\n\n    ';
var $author$project$Generated$FourStars$content = '\n\nWhy do we think we need to review everything that we see?\n\n\nLike who the f--- am I?\n\nI’m in the museum leaving yelp reviews of Monet. It\'s Monet! There are maybe one or two people with enough expertise to qualify them to give Monet less than five stars. I’m not one of them. Yet I come strolling through and say, “Eh I don\'t really like the huts that much. 3 stars.”\n\nIt\'s the internet’s fault. These damn websites let people publish their thoughts. An older friend of mine went to a Broadway show that he didn\'t like and posted on Facebook: “The reviews are in, the new West Side Story is a stinkeroo.” What reviews are in? Are you the reviews? This single Facebook post is the reviews?\n\nAt least Facebook is infiltrated by the Russians.\n\nGoogle Maps, on the other hand, is just full of dumb Americans. Or, as they like to call themselves, Local Guides. Google Maps will let you review anything. The Charles River has 4.8 stars. Local Guide Patrick Peeters thinks it has "nice views". He did not say why he was giving it only 4 stars. Maybe if the river had even nicer views, it could work its way up to a full five.\n\nWhat does “This is a 4 star river” even mean?\n\nRestaurant reviews I can somewhat understand. Things like food quality, comfort, service, and atmosphere can be judged in a somewhat objective manner. Restaurant reviews are also helpful. People who eat food can use them to learn where they might find good food and avoid bad food. People who run restaurants might read that Local Guide Patrick Peeters thinks that their plastic green tablecloths are tacky and invest in some more fashionable blue tablecloths.\n\nThe Charles River, though, can\'t change its tablecloths or views. Nor is a review of a river helpful to anyone. No one should need help from Local Guide Patrick Peeters choosing a river.\n\nIf you\'re in Boston, you really only have 2 rivers to choose from. The Charles and the Muddy River. Now, which river you want really depends on your needs. Looking at how many stars a river has isn\'t going to answer any questions you might have about the river. Can I kayak in it? Is it home to killer geese? Can I hide a body in it? Local Guide Patrick Peeters says "4 Stars: nice views" which leaves me stuck in my kayak in the Muddy River as the geese close in. Meanwhile, the body I dumped in the Charles is going to get caught in the dam and they\'ll catch me. Thanks a lot, Patrick.\n\nSo I looked up the rest of Patrick\'s reviews, because I can, and it turns out that he\'s pretty stingy with his 5 stars. Out of 85 reviews, he only gave 11 places the full 5. That\'s about 13% of places. It makes the 4 stars for the Charles seem not so bad.\n\nSo now you must be asking, what other intriguing reviews has Local Guide Patrick Peeters left, or rather, gifted to the public?\n\n4 stars to a bowling alley in the Netherlands. "Good place for bowling," advises Peeters. Thanks. I had been considering going bowling in the Charles. God bless you and your reviews Mr. Peeters.\n\nI\'ve gotten A\'s most of my life, so it bothers me on a personal level that Patrick gives 4-star reviews without providing actionable feedback. Reminds me of a certain entrepreneurial studies professor... What\'s wrong with the Charles River, Patrick!? Why did we get an 84 on our final group presentation, Lana!?\n\nNeither have responded to my emails.\n\nWhen I give reviews, I\'m nice enough to provide actionable feedback. The Charles River, which I have just rated as 3 stars, should be less bendy because I get lost sometimes. Iit should also be warmer. I hate how cold it is when I retrieve my bowling pins. Monet (4 stars) should stop painting so many huts.\n\nUnfortunately, the river and Monet have not responded to my emails either. Maybe it\'s the unprofessional husky.neu.edu domain that\'s discouraging them.\n    ';
var $author$project$Generated$GooseQuestion$content = '\n\n1. What is the relationship between the latitude at which a migrating goose summers and the total number of miles that it flies south for the winter? Like, if you’re a goose living in New Jersey for most of the year, when it gets cold, how far are you flying? Florida? North Carolina? Or North Carolina for December and then Florida when North Carolina gets too cold? What if you spend your summers in DC? Straight to Florida at the first frost? Do all the migrating geese on the East Coast end up in Florida? Does Florida have that level of goose capacity? Isn’t it a little unfair that a Maine goose would have to fly so much farther than a New Jersey goose? Alternatively, if they all fly the same amount, a Maine goose might end up in New Jersey, while a New Jersey goose ends up in Florida. If New Jersey’s winter was too cold for the New Jersey goose, won’t it also be too cold for the Maine goose? Or are the geese more concerned with the relative temperature difference between their summer and winter homes, the way that a human from Maine might conceivably enjoy New Jersey’s milder winters? Also to consider, of course, is the latitude-dependent temporal variance in the onset of the seasons. Cold weather begins in Maine far before cold weather begins in Virginia, potentially giving the Maine goose enough of a head start to beat the Virginian geese to the best ponds of Georgia, which might in turn force the Virginian geese farther south, thus evening out the number of miles flown by both sets of geese. Yet, for a Maine goose to arrive in Georgia before a Virginian goose, the Mainer would have had to fly past the Virginian, who was not yet cold enough to start flying to Georgia. If Virginia wasn’t yet cold enough to drive its geese away, why wouldn’t the Maine goose settle in Virginia until it did? What (or who) would compel it farther south than the weather by itself dictates? This is to say nothing of the effects of climate change, non-migratory northern geese, non-migratory southern geese, or water-fowl in general. Again, what is the relationship between the latitude at which a migrating goose summers and the total number of miles it flies south for winter?! And why is no one looking into this?!\n\n    ';
var $author$project$Generated$Hell$content = '\n\nHaving descended from Circle 3.25 of hell, the tortuous home of the nail pickers and nail biters with their bleeding stumps of fingers, I squinted through the mist to see an even more ghastly scene than the last. Illuminated by hellfire on either side, a long ornate table made of ice stretched before my eyes extending towards the dark pit of Satan. The horrid stench of human flatulence mixed with the cloyingly sweet scent of chocolate and filled my nose. I turned to my Guide, wondering aloud, “What cruel ring of hell is this? How did these poor souls stray in life to deserve such a fate?”\n\n“Listen well and perhaps you will learn,” said He, the most venerable and wise Mr. Wonka, master of all that comes forth from the cacao plant. “Here is Circle Three and One Half. The damned are sent here by Minos for their sinful appetites and failure to obey their natural repulsions. See that one there who sits in agony at the head of the table? Approach him and learn from his sad story and eternal suffering.”\n\nEver obedient to the great Willy Wonka, I strolled forward. As I drew near, the stench intensified and I almost gagged. The pitiable wails of the damned grew louder and louder. Above this cacophony, the shade in front of me heard my living step and breath, and curious, he turned in his throne of ice.\n\n“What do you want?!” he cried. “Am I not allowed to suffer here in peace?!”\n\n“I come from above,” I replied, “in a desperate journey to free myself of sin. I fear that I too may end up at a table like this, perhaps even this very one. Guided by my Lord, the divine King of Chocolate, I come to learn the origins of evil and set myself on a path of righteousness. I beseech you: What is your name? What is the nature of your punishment? How did you fall so low?”\n\n“My name while I still walked the earth,” he began, “was Unterkoefler. Willy Unterkoefler. Look close and you will see my thighs are entombed in this icy chair. Thus I am stuck in this seat until the end of time. For my eternal torment and punishment, every morning on this table there appears a bowl of the most pure and delicious chocolate ice cream. I sit here and am forced to stare at it and drool. If I so much as glance away, the ice cream begins to melt into nothingness and the infernal pain in my stomach doubles.”\n\nAs that soul spoke, I examined the table and saw that all he said was true. The gilded bowl, no smaller than a standard mixing bowl, was full to the brim of heavenly scoops of divine chocolate ice cream. From its perfect aroma, I identified it as Haagen-Dazs. But as Willy Unterkoefler looked at me to tell his tale, the ice cream began to melt and his stomach convulsed and twisted grotesquely. He returned his gaze to the bowl and continued thus:\n\n“And each day at dusk, a spoon appears beside the bowl. For some six hours, the spoon is as hot as the fires of the Sixth Circle. Although it burns to touch, I often grab it anyways. Just as I ignored the consequences of eating dairy in life, I try to ignore them here. I was lactose intolerant, you see, but ate copious amounts of chocolate ice cream without regard. My instincts and my body - through stomach pain and awful gas  warned me not to, but so great was my love for my own sinful pleasure that I reasoned against my nature and ate myself right down to the bowels of hell.”\n\nHaving said this, Willy began to sob. His speech and weeping had struck close to home - I too eat ice cream despite my lactose intolerance. This would be my hell! I swooned.\n\nWhen I awoke, Mr. Wonka pulled me to my feet and motioned for me to watch. It was close to midnight, and now Willy Unterkoefler was able to hold his spoon without a flinch. Still weeping, he lowered his spoon to the bowl, reached in, and pulled out with the most beautiful spoonful of the most divine double fudge brownie ice cream. Mr. Wonka saw me start to salivate and gave me a stern look of reprisal. Humbled, I looked on. Willy brought the spoon to his lips and just as he opened his mouth, the ice cream turned to vanilla! Disgusting! The damnèd spirit dropped his spoon piteously.\n\nI looked on in horror, appalled that any god or devil could devise such a cruel and evil punishment. I could not look away. At last, Mr. Wonka urged me along, saying, “Such is the fate of those who resist their nature, or don’t take Lactaid pills.”\n    ';
var $author$project$Generated$HelmetSalad$content = '\n\n_"Uh yeah can you just put it in my helmet?"_\n\n###### ![cyclist ordering a salad in his helmet](assets/salad-man.jpg)\n\n    ';
var $author$project$Generated$Hooked1$content = '\n\n## Introduction\n\n*Hook:* It had been driven through her head, in one eye and out the other.\n\n*Background:* A small, close-knit beach town in New Jersey; an unseasonably cold, rainy August night; foreboding winds; flickering streetlamps; the victim the town’s beloved (though also feared) mayor; etc.\n\n*Thesis:* After a methodical analysis of the crime scene, a thorough interrogation of the suspects, and a masterly work of deductive reasoning, the good detective Jaz Sinterton will solve the case.\n\n## Body\n\n(It was found sprawled out on a dock in the harbor at 2am. The rain was only just beginning to wash away the blood.)\n\n### Supporting Paragraph #1\n\n*Topic sentence:* When the good detective Jaz Sinterton arrived at the scene of the crime minutes later (he was a light sleeper), he observed three key pieces of evidence that will help him solve the case.\n\n*Supporting detail #1:* The murder weapon was an authentic brass pirate hook, curiously similar to the one Sinterton had seen last week at the local history museum.\n\n*Supporting detail #2:* A small piece of light blue foil was wedged in between two planks of the dock. Despite the dark, the detective could discern a capital “T” in a white font on the foil.\n\n*Supporting detail #3:* Plastered by the rain to the victim’s left shoe was a receipt. Lifting it with his tweezers, Sinterton observed that, although the ink had run, obscuring the recipient’s name, it was an ATM receipt for the cash withdrawal of $5,000 from the local bank.\n\n*Summary/transition:* With these three key pieces of evidence in the form of a murder weapon, a piece of trash and an ATM receipt, the good detective Jaz Sinterton was well on his way to solving the case, now needing only to interrogate the suspects and apply a masterly work of deductive reasoning. He will surely bring the culprit to justice.\n\n### Supporting Paragraph #2\n\n*Topic sentence:* Having gathered crucial clues at the crime scene, the good detective Jaz Sinterton will now interrogate the three suspects to learn more about the nature of the crime.\n\n*Supporting detail #1:* The first suspect is the librarian, who found the body, who reported it immediately, who has a mysterious rectangular lump in the pocket of her raincoat, and who claims to have been on her usual evening stroll to the waterfront (in the rain? at 2am?) when she stumbled upon the dead mayor.\n\n*Supporting detail #2:* The next suspect interviewed by the detective is the fisherman, who was sporting striped blue pajama pants under his oilskin, who claims to have been sound asleep in the cabin of his boat, which is docked right next to the body, until he was awakened by the police sirens, and who said, defensively, “I’m a goldfish fisherman. The hooks I use are much smaller. They would hardly make it through one eye.”\n\n*Supporting detail #3:* The third suspect, reached at home at 3:40am, is the victim’s husband who works as the local history museum’s director, who was also wearing striped blue pajama pants, whose umbrella dripped from the coat hook beside the door throughout the interview, who claimed to have been home all night, who was unaware of his wife’s departure (he’s been sleeping on the couch (a rare rough patch in their marriage)), and who cried convincingly and heart-wrenchingly upon the news of his wife’s demise (though not heart-wrenchingly enough to wrench the heart of the stoic detective).\n\n*Summary/transition:* Jaz Sinterton’s interrogation of the three suspects revealed more clues, suspicious stories, and weak alibis. It will take a masterly work of deductive reasoning to synthesize the previously collected physical evidence with the character and testimony of the suspects into an air-tight explanation of the murder.\n\n### Supporting Paragraph #3\n\n*Topic sentence:* Before he cracks the case, the good detective Jaz Sinterton will need to think, and while he thinks, the good reader will learn three humanizing details about the otherwise surly and grizzly detective, details which may or may not be germane to the case.\n\n*Supporting detail #1:* Sinterton thinks best over a large cup of pistachio ice cream with hot fudge drizzle, which is why his old friend Ray Worth has opened up the local ice cream parlor early this morning, just for the detective.\n\n*Supporting detail #2:* While devouring his ice cream alone in the booth by the window (Ray knows by now when to give him some space), the detective is shocked by the sight of his ex-wife walking into the bank across the street. She’s back in town! She’s pregnant! (Could it be his?)\n\n*Supporting detail #3:* Distracted by this sighting (and the flurry of emotions it brought) and momentarily stumped by the case at hand, Jaz walks to the library to clear his head with a good book. He’s an avid reader and a vocal supporter of public libraries (and has recently been devastated to hear that the town council might defund theirs).\n\n*Summary/transition:* In giving the good detective Jaz Sinterton some time to exercise his powers of masterly deduction, we have learned intriguing details about his personal life, and, perhaps, a clue or two about the case.\n\n## Conclusion\n\n*Re-statement of thesis:* Detective Sinterton will use the physical evidence he collected at the scene of the crime, his observations while interrogating the three suspects, and his pistachio ice cream-fueled deductive reasoning to solve the brutal murder of the close-knit town’s beloved (though also feared) mayor.\n\n*Summary of evidence:* Specifically, the detective will piece together the story told by the authentic brass pirate hook which had been driven through the mayor’s eyes, the piece of foil stuck in the dock, the soggy ATM receipt, the dripping umbrella, the matching striped pajama pants, the mysterious bulge in the librarian’s pocket, the goldfish fisherman, the night owl librarian, the museum director/husband sleeping on the couch, the husband’s heart-wrenching tears, the detective’s pregnant ex-wife, the public library’s precarious fate, and Ray Worth’s unfathomably delicious ice cream.\n\n*Connection to larger themes:* When Sinterton reveals the true nature of this deadly crime, it will surely shock this previously peaceful community to its very core.\n\n*Call to action:* Write to me at unterkoefler [at] duck [dot] com if you think you’ve solved the murder before the good detective Jaz Sinterton. His solution will be posted in three weeks\' time.\n\n_Note: three weeks have elapsed. The solution is [now avaible here](/hooked-solution)_\n    ';
var $author$project$Generated$Hooked2$content = '\n\n_Note: for maximum enjoyment, please first [read the mystery, available here](/hooked-mystery)_\n\n“It was a dark, rainy August night in the small, close-knit beach town in New Jersey. The mayor arrived home late, exhausted after a long day laboring over her proposal for a new community crypto-mining farm in the soon-to-be-demolished library’s plot. Shaking off the rain from her bright pink umbrella with one hand, she checked the mailbox with the other. She rifled through the contents, tossing the spam, ads and credit card offers into the nearby bushes. She paused, however, at a small green envelope with no postage, addressed simply to “Mayor”. Curious, she stepped inside, hung her umbrella on the hook, and tore open the envelope. \'DOCKS. 2AM TONIGHT. TELL NO ONE,\' it read. It was unsigned and the all-caps handwriting was deliberately plain, but the mayor knew immediately that it was the librarian. Who else owned stationery these days?\n\n“This past year, the mayor had made her stance on public libraries very clear and there was no shortage of ill will between her and the librarian. To an outside observer, the letter might seem very much like a threat, or at the very least, a trap. Such an observer would probably advise the mayor to toss the letter into the bushes with the rest of the spam. But, those involved in the town’s government, the librarian included, knew that the mayor was very receptive to persuasion. No matter how strongly she felt about public libraries, she cared more deeply for strong, logical, recurring arguments. In the foyer, the mayor smiled to herself. Perhaps she could come around to the librarian after all. She microwaved her leftover foie gras, ate it, and then settled in to bed for a short nap, setting her alarm for 1:30 a.m., eager to learn what profits the night might bring.\n\n---\n\n“The mayor’s husband, meanwhile, was locking up the local history museum where he worked as director. As his relationship with his wife grew stormier and stormier, he had taken to working later and later; it was now well after 11:00 p.m. He glanced around furtively into the gloomy night and subconsciously pulled his briefcase closer to his body. He popped open his black umbrella and, almost running, hurried to the waterfront. In his briefcase were several of the museum’s most priceless artifacts—two matching pirate outfits in mint condition, believed to have been worn by Captain William Kidd’s first and second mates; several sheathed daggers; a gold chain; three bejeweled bangles; and a brass pirate hook. Even though he was the director, he was certainly not authorized to take these items and had had to carefully disable the alarm system without leaving a trace of his actions. This thrilling heist had left his heart pounding, but he was even more excited by what he knew awaited him at the docks: a romantic, role-playing tryst with his lover, the goldfish fisherman.\n\n“They had met in June when the fisherman stopped by the museum. For the last few years, the fisherman had been travelling up and down the coast, buoyed by his parent’s dwindling trust fund and his sturdy boat, docking at random in small towns for a few days or weeks, catching not one goldfish the whole time. At the museum, the pirate hook had caught his eye and he asked the handsome director a few questions about it. The questions led to a drink, which led to dinner, which led to a long, steamy night on the boat, which led to an ongoing, very secret affair with deeper and deeper feelings felt by both sides, an affair which led, at last, to the handsome and respectable museum director rushing to the docks with stolen pirate relics in tow. They had experimented with Halloween costumes before, but the allure of authenticity had eaten at them all summer. At last, they were going to have some real fun.\n\n---\n\n“Try as she might, the mayor couldn’t fall asleep. Maybe it was the rain. Maybe it was the promise of a fresh source of income. Either way, she sprung out of bed before her alarm and stole quietly downstairs, not wanting to wake her husband, who she assumed must be asleep on the couch by now. (It had been a rare rough patch in their marriage, but if he wouldn’t do his dishes, he didn’t deserve to share a bed with her.) She pulled on her boots and raincoat, and slipped into the night. She left her umbrella on the hook, having been mayor long enough to learn to leave bright pink items at home during secret rendezvouses. She arrived at the docks 30 minutes early and paced back and forth, deep in thought. If the librarian paid up, she would need some other building for her crypto operations. Maybe the hotel. Surely she could sneak some impossible-to-meet updates to the building code in the next spending bill to force the hotel to close. The gentle, rhythmic thunk of the boats against the dock in time with the waves helped the mayor think. But soon, she became aware of one boat that was rocking out of time with the others. Its rocking was considerably less gentle. It was a large fishing boat, equipped with a spacious cabin. Examining it now more closely, the mayor noticed a faint flicker of candlelight coming from the porthole. Squinting, she peered in. Inside were two men dressed as pirates engaged in passionate relations. It was her husband! The mayor screamed.\n\n“Unable to see out the window into the dark, the two men resolved to send out the mayor’s husband to investigate the commotion. In haste, he pulled up his striped pirate pants and hurried onto the dock. As he leapt from the boat, the corner of one of the night’s Trojan condom wrappers became unstuck from his shirt and fluttered to the dock, where it became stuck again. Once on the dock, he quickly realized that the scream had come from his wife, who, seeing him emerge in his pirate garb, immediately began to yell at him. Thus ensued a terrible argument about dishes and responsibility and love and trying new things in the bedroom and the museum director’s reputation, to say nothing of the mayor’s own, and some frankly horrible and bigoted notions about sexuality expressed by the mayor. The husband, disgusted with his wife, confessed meanly that he didn’t love her and never had. For this, she slapped him. He returned the slap, forgetting (or perhaps not forgetting) that he was still wearing the authentic brass pirate hook. She attempted to dodge the blow, but instead took the hook straight to the eye. Perhaps he pushed it in further on purpose or perhaps he had tried in vain to pull it out, but the deed was done. He had killed his wife.\n\n“He anxiously unfastened the hook, rushed back on to the boat, gathered up his things, urged the fisherman to say nothing, promising him that they would flee for the Caribbean the following evening, that their love would be eternal, that nothing else mattered as long as they had each other. Fighting the wind with his umbrella, he ran home.\n\n---\n\n“Minutes later, the librarian appeared at the docks, ready to bribe the mayor to save the library. Her hands were tucked in to her raincoat, protecting the stack of cash she had just withdrawn. When she saw the body, her hands flew up to her mouth involuntarily. As she did this, her ATM receipt fell out of her pocket and was blown over to the body. She screamed. She screamed the way only a frightened librarian, long used to silence, can scream. The seagulls sleeping nearby were woken by the din and flapped away. Before thinking about the compromising position she was in—alone at night with the body of her political enemy whom she had summoned to the docks to illegally bribe—she called the police.\n\n“And that, I deduce, is what happened last night,” concluded the good detective Jaz Sinterton. The listening police officers applauded in amazement. That night, the police apprehended the mayor’s husband on his way to the docks. He was dragging behind him a huge suitcase stuffed with clothes, stolen pirate paraphernalia and a fake passport. Upon his arrest, he immediately confessed. The goldfish fisherman, meanwhile, waited an extra hour for his lover to arrive, but finally, decided to return to the seas, heartbroken and alone.\n\n---\n\nThe close-knit community was, of course, shaken to its core. An emergency election for mayor was held, pitting the librarian, now respected for having what it takes to play local politics, against a reclusive and eccentric crypto-coin executive, who had just moved to town a year prior. The executive won narrowly. The library was gutted and replaced by a server farm, partly out of respect for the deceased mayor’s wishes, partly out of greed for the alleged tax revenue it would bring.\n\nA month later, after the sentencing hearing, the town’s sheriff stopped Sinterton on the courthouse steps. “I have to know. How do you do it?” he asked with a bemused smile.\n\n“The secret,” said Sinterton with a wink, “is Ray Worth’s pistachio ice cream, with a generous heap of chocolate fudge on top.”\n\nAnd that is just what the good detective treated himself to after having closed another case and seeing justice served once again. The ice cream also helped drown out the unending pain now inflicted by his ex-wife, who had moved in next door to live with his neighbor, the new mayor, who, it turned out, was the father of the newborn baby, Sinterton’s daily reminder of his wife’s infidelity. *I should really get a hook of my own,* thought the detective.\n    ';
var $author$project$Generated$Houseplant$content = '\n\n##### ![a dead houseplant](assets/dead-plant.jpg)\n\nAs founder and chief executive of My Living Room Decor, I have a deeply\npersonal stake in ensuring an ambiance of natural bounty, fresh air,\nand homeliness in my living room. It is thus with profound\nregret that I must announce the necessary re-organization and\nre-focusing of my houseplant. Specifically, we are asking 46%\nof the leaves on the _Epipremnum aureum_ team to seek\nopportunities elsewhere, effective immediately. A generous severance package and a\nreferral letter to the compost bucket is available to all those affected.\n\nAt this time, I would like to assuage any doubts raised\nby investors and stakeholders regarding the long-term viability and profitability\nof my houseplant. Its brown leaves and generally withered appearance are\nnot indicative of its demise. It is not dying! These\nfactors are merely a reflection of broad macroeconomic forces and hardships beyond\nour control. The difficult, though needed, leaf-force\nadjustment will give the plant the agility that will prove crucial to\nour success as these trends play out.\n\nAgain, I would\nlike to take personal responsibility for this decision, while at the\nsame time, absolving myself of any direct blame by appealing to\nthe current and anticipated future state of the economy. No,\nI have not watered my houseplant in six weeks. No, I\ndid not buy any “plant food” for it. No,\nI do not regularly open the curtains in the living room.\nNo, I do not shield my houseplant from cold drafts despite\nits specific request that I do so. But these facts (viewpoints, really) are\ntrivial and irrelevant when considered with regards to the macro-scale\nscope of trends pertaining to houseplants everywhere. I’ve done\nnothing wrong and take full responsibility for having done/not done\nso.\n\nThe remaining leaves and I look forward to the exciting\nand challenging times ahead. I will water them tomorrow.\n\n\\*\\*\n\n_Editor\'s note: At press time, the author still had not watered his plant._\n    ';
var $author$project$Generated$Lost$content = '\n\nFirst, you should plan your journey as a loop, rather than an out-and-back. Out-and-backs are simple, intuitive, and boring. Second, you should not plan any more than two-thirds of your journey, less if possible. One way to not plan at all is to make instinctive, independent and irrational decisions at every intersection. If you are hopelessly inclined towards rationality, consider delegating decision-making to a friend or dog.\n\nNow that you have wound and looped for about two-thirds of your total allotted adventure time, and have arrived in a less-traveled stretch of woods, uncharted territory of the mall, or an unfamiliar part of an unfamiliar city, and have only a vague notion of which direction gets you home, now would be a good time to take a break. Have a seat, stretch, and eat a snack. I hope you brought snacks. You\'ll need the energy; you\'re barely halfway there.\n\nIt is time to get lost. You have gone in a somewhat curved, loopy path thus far, so it stands to reason that the fastest way back is not back, but forwards.\n\n###### ![A map](assets/map.png)\n\nStrike out in the direction you believe is towards your starting point. This will fail because 1) you have twisted and turned quite a bit, your sense of direction isn\'t great, and the moss on half the trees grows on the northwest rather than north, so you really have no idea which way the shortest path home is, and 2) even if you are blessed with the navigational prowess of Pacman and know exactly which direction to head, there will not be a path in that direction. Proceed, therefore, with great confidence. You will soon be truly lost.\n\nYou will soon be thinking such things as _I think I\'ve passed that mannequin before_ (you haven\'t), _that tree looks awfully familiar_ (it doesn\'t), or _I\'m pretty sure Elm St intersects with Gould Ave eventually_ (it does, but you\'re actually on Helm St; the city department of roads is sitting on a stack of hundreds of requests to replace the "H", which fell off seven years ago, but the mayor has yet to approve the budget item, possibly because of her long held grudge against a certain resident of Helm St.). These are all good signs that you are lost. Now, idiotic transcendentalists might urge you to reflect. Thoreau, for example, said, "Not till we are lost, in other words not till we have lost the world, do we begin to find ourselves, and realize where we are and the infinite extent of our relations."\n\nYou, hopefully, have more important things to worry about than your infinite relations. It\'s getting dark, your stomach is beginning to rumble (or is that a growling bear?), and you can\'t be late to Aunt Sue\'s surprise party. Don\'t reflect, get home! You have time enough to reflect in your daily life. Why else would you so constantly attempt to distract yourself? Reflection is overrated and, in the infinite extent of your relations, most of them are probably bad. You\'ve worked hard to get this lost, to create real sources of fear. This is a more meaningful problem than anything your boss has ever assigned you. Don\'t waste it.\n\n    ';
var $author$project$Generated$Metaphor$content = '\n\nThe balloon floated away metaphorically.\n\n"You know," he said, squinting into the afternoon sun, "sometimes I worry about you drifting away like that."\n\nHe had a good eye for metaphor and she liked that about him. She squeezed his hand and laughed lightly. "It\'s just a balloon babe."\n\n"Yeah. Yeah," he said. "You\'re right."\n\nShe wasn\'t.\n\n"I love you too," she said. With a happy sigh, she leaned into his arm, nestling her head on his shoulder. They sat there quietly for some time, so content with each other, their love, the way her hair gently tickled his neck, the way his clavicle gently dug into her cheek, so content that they did not notice the darkening sky until the first fat drops fell splat on their outstretched legs. In their mad race to pack up the leftover cherries and Oreo\'s and fold the blanket and cram everything into his bag and peddle madly for home before the storm broke in earnest, he completely missed this second metaphor.\n\nOver the next few months, she slowly drifted away. At last, he confronted her about it: the un-returned calls, the postponed date nights, the whole birthday episode. "What happened?" he asked. "We were so happy."\n\nShe didn\'t know. It was as if, as if the force that had held them together for so long had been severed, snapped, let go of. As if there had been some sort of string binding them as one and that now that it was gone, she felt freer and, as much as she wanted to lift him up with her, she didn\'t feel strong enough to do so. Although she felt all these things, she had a hard time expressing them. She wished there was some apt metaphor for the situation, but metaphors were always his thing. And so instead, she said something pretty hurtful about him being a burden on her life. Their words grew bitter and louder. His bony clavicle was mentioned. He countered that her hair was far too ticklish.\n\n"Oh, yeah?! Ticklishiness is a perfectly acceptable quality of perfectly good hair and who are _you_ to comment on _my_ hair, Mr. 7-in-1 Old Spice?!"\n\n"It\'s 10-in-1 you illiterate sponge! I brush my teeth with it too. And ticklishiness isn\'t even a real word!"\n\n"We should see other people!"\n\n"I\'m blind!" he lied.\n\n"Get out! Leave!"\n\nHe left.\n\nIn the days that followed, dark clouds rumbled over his thoughts and like a summer storm on a sunny picnic, his eyes would pour tears suddenly and uncontrollably. "Hey," said his brother, whose apartment he had slunk to that night and whose couch had been generously offered, but now whose supply of tissues, ice cream and patience was running desperately low. "Hey," his brother said, "we should go fishing."\n    ';
var $author$project$Generated$ModernCommerce$content = '\n\nI moved in to a new apartment on Sunday. By Thursday, I was painfully aware of the things\nwe did not have: a couch, a kitchen table, a desk that did not wobble, a\ngrill, a silverware tray, a knife block, and a utensil holder for spatulas and whisks and stuff like that.\nThe following accounts briefly describe how I came to be the proud owner of all of these items,\nwhile overcoming such obstacles as not owning a car and being a fool.\n\nI had them all delivered to my apartment. The end.\n\nKidding. What would be the fun in that?\n\n---\n\n## Items 1 - 3: The Silverware Tray, the Knife Block and the Utensil Holder for Spatulas and Whisks and Stuff Like That\n\nOn Thursday night, I sat in my empty living room and opened up Facebook Marketplace. One by one, I\nsearched for a silverware tray and a knife block and a utensil holder for spatulas and whisks and stuff like that.\nFor fun, I selected the option for "local pickup only." Shipping is so overrated. In the Boston area, there were a\ngreat deal of people selling silverware trays, quite a few vendors of knife blocks, and a handful of people with\nutensil holders for sale. I had no idea who would respond or when or whether they would be out of town\nfor the weekend, so I messaged them all. I commend Facebook\'s engineers for making it absurdly easy to\nsend "Hi {name}, is this still available?" to dozens of people in minutes. Incidentally, in one\nitem\'s description, the seller had written "Do NOT ask me if this is available! If the listing\nis still up, it\'s still available!" Asking for a custom message was a bit much, so I blocked him.\n\nBy Friday afternoon, the fish had begun to bite and I had somehow agreed to pick up a silverware tray in\nBack Bay, a knife block in Somerville, and a utensil holder in Fenway. I hadn\'t really expected\nall these pieces to come together so soon, so I was wholly unprepared. I had biked to work\nand my backpack was already full. Luckily\nthough, I had dinner plans with my friend, SriRaam, at a restaurant in Back Bay. I texted him:\n\n```\n> Hi uh weird favor to ask but when you come to dinner, can you bring an empty backpack with you? And also come over to my new place later for a drink around 9?\n> Sure lol. Why?\n> You know those big cup things that people put spatulas and whisks and stuff in on the counter?\n> ...\n> Actually nvm. I\'ll explain later. Just bring the bag please.\n```\n\nAfter work I biked around the corner to Siena\'s apartment to get the silverware tray. Even though Siena was\ngoing to be on a flight and I had to get the tray from her roommate Olivia instead and I was worried\nthat Olivia wouldn\'t see my message since most people don\'t get message notifications unless it\'s from\na friend (or through Marketplace) and even though all that, this was by far the smoothest transaction.\n\n```\n> Hi, I\'m Willy from fb marketplace. I\'m in the lobby.\n> Ok, be right down.\n[Girl enters lobby holding silverware tray.]\n> Olivia?\n> Yeah, hi.\n> Hi. Here\'s the cash.\n> Thanks! Here you go.\n> Thanks!\n```\n\nIt was almost too smooth... Maybe this would be easier than I thought.\n\nThe tray was several inches too big for my bag, so I pushed my bike over to the restaurant while holding\nthe tray in my other hand. As we ate, I explained my self-inflicted dilemma to SriRaam. He\nmay or may not have laughed at me, but he was willing to help. After we finished, I transferred\nby laptop, empty tupperware, chargers, notebook, sweater, and a few granola bars into his bag. "I\ngotta travel light," I explained as I moved a pen over too. "I have no idea how big this\nknife block is." I handed him the silverware tray, hopped on my bike, and began pedaling away. "See\nyou at 9!" I shouted. He replied, "Wait, why didn\'t you just take the empty bag?"\n\n_If I wanted my Friday night to make any sense, I wouldn\'t have clicked "local pickup only,"_ I\nthought.\n\nOn my way to Somerville, I only made one wrong turn, so I got there 10 minutes early. I\ninformed my next seller that I had arrived, but he said he was just leaving Target and would be back in\n20. I didn\'t like the look of the alley where his apartment was, so I waited on a\nbench at a bus stop around the corner. A few buses went by; I hope I didn\'t confuse\nthem. 20 minutes later I went back to wait in the alley. It was starting to get dark\nand I was a bit nervous waiting in the alley, so I texted my mom the address and said\n"Here\'s where to start the search for\nmy body." She worries about me a lot, so I wanted to let her know that I was staying safe.\n\nA few minutes later, a man with no Target bags walked past me into the apartment. A few minutes later,\nthe seller messaged me:\n\n```\n> Hi I\'m back. Where are you?\n> I\'m outside.\n> Ok. Be right down.\n[The man who had just walked by with no Target bags returned with a knife block.]\n> Hi! Sorry, I didn\'t realize that that was you earlier. You had no bags.\n> Oh. Here\'s the knife block. It\'s brand new.\n[Maybe he had thought that I was still at the bus stop around the corner, but he made no attempt to explain why he walked past the random kid sitting on his stoop without realizing that I was there for the knife block.]\n> Thanks. I have the money right here.\n> You can look at it if you want.\n[I trusted him, but I felt obliged to open the knife block box to reveal that there was indeed a knife block in the box.]\n> Looks great. Here you go.\n> Thank you.\n> Thanks! Have a good one!\n```\n\nThe knife block was smaller than it looked and fit perfectly in my bag. I took off to Fenway for item\nnumber 3: the utensil holder.\n\nNow, the thing about the utensil holder was that I had already paid for it. Susana said she was leaving\nfor the weekend, but she could leave it with the concierge before she left, but only if I Venmo-ed her\nfirst. It was only a few dollars, so I decided to trust her. If she tried to scam me,\nat least I could report her to Facebook. They\'re well-known for keeping their platform free of fake\nprofiles, scam artists, and ill-intentioned  foreign actors.\n\nSo, when I arrived at the luxury apartment building in Fenway,\nI was slightly wary of walking into a utensil holder-honey trap. To be safe, I\ntexted my mom the new address and said "Actually, use this one instead."\n\nNow, as you imagine me walking into this swanky apartment building,\nand me struggling to open the door with its hidden hinges and no clear\nindication of whether to push or pull and with it also being locked,\nand me needing to step aside for the swanky denizens behind me to unlock it and let me in,\nyou must know that it was a hot, humid August day, that I had biked an hour from Somerville, and that\nI suffer from hyperhidrosis. I was drenched in sweat. I dripped\ninto the lobby and dripped over to the concierge desk.\n\n```\n> Hi. I\'m here to pick something up for Willy.\n> For who?\n> Willy.\n> Do you have the unit number?\n> No, well, see, I bought something from Facebook Marketplace and she said she would drop it off with you. It\'s a utensil holder.\n> A what?\n> You know those things you put on the counter for spatulas and whisks and -- here let me just show you the picture.\n> Oh, no. I haven\'t seen anything like that. Someone was selling a lamp earlier today though. Do you have the name?\n> Yeah, Susana.\n> Oh yeah. She\'s been selling stuff all week. I think she\'s moving out soon.\n(She exists!!!)\n> She exists! Well, she said she would leave it here, but I\'ll try sending another message.\n```\n\nI sat down across from the concierge desk and messaged Susana again. I waited patiently for about 10 minutes. Susana\nhad not replied. I got up to seek the help of the concierge again. I resisted the urge to look\nback at the pool of sweat I had probably left on the bench.\n\n```\n> No reply yet.\n> Okay, I can call her for you if you want.\n[What?! After all this time?]\n> Yeah - that would be awesome.\n> Sure.\n[Ringing]\n> She didn\'t answer.\n> Oh. That\'s okay. I can try tomorrow...\n> No, let me try again.\n[My hero!]\n> She\'ll be right down.\n```\n\nI retrieved the utensil holder, thanked the concierge profusely, and biked home. SriRaam\narrived shortly with my belongings from\nwork. We enjoyed a couple beers in my table-less, but now very organized kitchen.\n\n---\n\n## Item 4: The Kitchen Table\n\nBack on Thursday, I had also begun messaging a few people selling kitchen tables.\nFor some reason, these conversations were invariably worse. For example, one\nseller listed a table and two benches for $75. I really just needed the table.\n\n```\n> Hi, is this available?\n> Yes, it\'s available.\n> Would you be willing to sell just the table?\n> Potentially - will u do $100 for it?\n[??? $25 more for less?]\n> No. I thought it would be less without the benches?\n> I\'m trying to sell all of it together so if ur not willing to take all of it that\'s fine but then I\'m gonna want more $\n[Fine? I\'ll just re-sell the benches myself I guess...]\n> Ah gotcha, I\'ll take it all then. Could I pick it up tomorrow morning?\n```\n\nShe never replied. Perhaps she could sense that I might have left the benches on\nthe curb without paying her the $25 bench separation fee.\n\nIt would be salient, I think, to describe my weekend plans now. My friend Gabe\nwas coming to visit for the weekend. He drove up Friday night and then we were both\nleaving Sunday afternoon to go camping for a couple nights. (Andrew would probably\nlike me to mention that he also visited, but he had no car, so he\'s less relevant.)\nSo yes, I had access to a car for a brief two days. It was crucial that I acquire a table\nthat weekend.\n\nAfter a few ghostings and one conversation with a man who wouldn\'t part\nwith his table for another three weeks (How did he expect me to go on eating?\nDidn\'t he know this was my one chance to transport the table with a car? Did he\nseriously expect me to plan ahead and find a table before I moved?), I found a\nresponsive seller who was available Sunday morning. I was a bit apprehensive since\nthere was only one photo in which the table very clearly had no legs, but I figured\nJesse, the (former) table owner, would have mentioned something in the description if it were truly a legless table.\n\nOn Sunday morning, Gabe and I drove over to her house. Jesse told me she would leave it\nin the driveway, but to let her know if we needed help. It did indeed have legs. Helpfully,\nthese were not attached. The table would not have fit in Gabe\'s sedan otherwise. To be\nhonest, the tabletop didn\'t fit either, so I had to hold one door half-shut with a bungie cord.\nWhen we got the table in the car, I realized I hadn\'t paid yet and the seller hadn\'t come down.\nThere was something beautiful and karmic about Jesse trusting me just as I had trusted Susana.\nOr she was hungover and didn\'t give a damn if someone stole her old table. I Venmo-ed her.\n\nWhen we returned, we realized we had no nuts to fasten the legs with. I messaged Jesse,\n"Do you have the nuts for the legs?" She never replied.\n\nGabe and I made a quick run (by car) to Home Depot. To make sure we got the right sized nuts,\nwe brought one of the legs with us. Besides the whole trust thing, the real lesson of "Item 4: The Kitchen Table"\nis this: walking around Home Depot wielding a table leg like Harley Quinn\'s bat is one of the purest forms of amusement\nin this world.\n\n---\n\n## Item 5: The Couch\n\nOn Wednesday morning, the day after the camping trip. Gabe texted me, "Still need a couch?"\nI definitely and most certainly still needed a couch. Gabe put me in contact with his friend\nfrom college who lived 20 minutes from me, and whom he had visited on Tuesday after dropping me\noff, and who had off-handedly mentioned to Gabe that she was trying to sell her couch before\nshe had to move a couple weeks later, and to whom Gabe had said that he might know a guy nearby\nwhose living room he had just recently sat on the floor of for several hours in some discomfort\nand who (this guy) would definitely be interested in furnishing this living room with a couch.\nI felt inordinately lucky. What was the catch?\n\nThe catch was that she wanted to sell two couches, a big one and a little one. There might\nhave been a separation fee to just take one. But, the thing is, I wanted two couches. If this\nwas the catch, then I was the fisherman.\n\nAfter a brief manual and gluteal inspection, a brief negotation, a quick truck reservation, a day\'s rest,\na long, hot walk to the truck rental store, a short drive, and a hot, sweaty exfiltration, I was\nsoon enough lounging on not one, but two couches. It was blissful. Except my torso was sort of\ndangling between the two like a rotting banana. Maybe blissful isn\'t the right word. It was... agonizing, yet\nempowering.\n\n---\n\n## Item 6: A Desk that Does Not Wobble\n\nWhen I moved out of my old apartment, I took apart my desk to make it easier to carry.\nIt was difficult to disassemble, requiring the judicious use of a rubber mallet. When\nI reassembled it, I couldn\'t get one of the legs back into its slot all the way -- the\nmetal slot had warped and shrunk. I hammered away at it to no avail and, finally, resigned to\nwedge a book under the shorter leg to prevent any wobbling. It was okay, but the height\nwasn\'t quite right anymore.\n\nThe next day, my roommate Carter asked me to help him carry his (very nice, very new)\ndesk out to the curb. "What? What\'s wrong with it?" I asked, flabbergasted. He explained\nthat when he reassembled it, he couldn\'t get one screw in, so it was wobbling all day\nand it had annoyed him to the point of ordering a new desk, which would arrive tomorrow.\n\n"If I fix it, can I have it?" I asked.\n\n"Sure," said Carter. "You won\'t be able to fix it."\n\n20 minutes later, I fixed it. I was thrilled. It was an adjustable-height standing desk, which\nwas exactly what I was looking for. But, alas, Carter realized he could cancel his order\nfor the new desk, and went back on his offer to me.\n\nI was left back where I started, except now Carter owed me a desk. A week later (this is Friday\nnow, the day after we got the couches), one of Carter\'s coworkers, knowing he had just moved, asked\nif any of his roommates were looking to buy a standing desk. I recruited a friend with a car to\nhelp, and without much more ado, had a new standing desk free of wobbles.\n\n---\n\n## Item 7: The Grill\n\nFor the grill, I first tried Facebook Marketplace, but the only\ngrills available were either very rusty or had unresponsive owners. I broke down\nand ordered one online.\n\nDuring the checkout process, I noticed\nthat one of the suggested "Customers who bought this also enjoyed" items was a propane\ntank. _Oh, yeah. I probably need propane for my propane grill,_ I thought. I clicked on\nthe link, only to discover that it was for an empty tank. _What use is that?_ I searched\nfruitlessly for a full tank of propane. In retrospect it probably makes sense that Fedex\nwouldn\'t want to ship highly explosive and flammable pressurized gas around. _Whatever, I\'ll\nfigure out the propane later,_ I thought.\n\nLater, as it happened, was about 10 minutes before my friends were due to arrive for the\nbarbecue. The grill had taken much, much longer to assemble than expected. In a panic, I\nhopped on my bike and went out in search of propane. First, I checked a couple nearby gas stations.\nThey didn\'t have any. I decided to push on and try the Home Depot, 1.2 miles away.\n\nAt the Home Depot, I went down the grill accessories aisle, only to find more empty propane tanks.\nWhy do they sell empty ones? I need the propane, not the tank! Annoyed, I decided to lug one around\nand find someone to ask where I could get it filled. The first employee I found referred me to\ncustomer service. I lugged the empty tank over there. (As I lugged, I began to think that it\nmight be difficult to bike home with a full, heavier tank.) I had a very confused\nconversation with the customer service employee.\n\n```\n> Where can I get this filled?\n> I\'m sorry...\n> This tank is empty. I need it filled.\n> Oh, we don\'t fill that kind.\n> Which kind do you fill?\n> You need the other brand. Let me look it up for you.\n> Ok.\n> Ok, yes. Here it is. It\'s in Aisle 56.\n> I was just in Aisle 56. That\'s where I got this.\n> You need the other brand.\n> But all the ones in Aisle 56 are empty.\n> Yes, well there\'s an exchange program to get refills.\n> I don\'t have a tank yet, so I can\'t get a refill.\n> Oh. Do you just want a new tank from the exchange?\n> Yes. Exactly.\n> Ok. Just go outside with this receipt to the propane tank area.\n> Thanks!\n```\n\nIt\'s as if every person that needs propane has always had propane.\n\nAnyway, I got my propane. They didn\'t even check my receipt. I probably could\nhave just asked for one.\n\nIt was, as expected, very heavy and very bulky. There was no way it would fit in my backpack,\neven if I called SriRaam to help. I could have taken the bus, but it would have been almost an hour\nand the only thing more embarrassing than securing your bike to the rack on the front of the bus\nwhile everyone watches you impatiently is then lugging a full tank of highly explosive and flammable\ngas onto said bus. I ordered an UberXL.\n\nWhen my driver arrived and saw my standing there on the curb with my bike and my highly explosive\nand flammable tank of gas, he must have been very worried.\n\n"No, I don\'t think your bike is going to fit," he said. I should have gotten the UberXXL.\n\n"Okay, that\'s fine. Could you just take this propane to the address then?" I asked.\n\n"Sure. I\'m going to beat you there though," he said.\n\n"Don\'t worry, my roommates will be expecting you," I said.\n\nI loaded the tank into his car and pedaled away. Of course, I thought it would be fun\nto race him. I almost had him. But, as I turned onto my street, I saw him take a wrong turn behind me,\nso I waited to point him in the right direction. We\'ll call it a tie.\n\nThe barbecue was great, by the way.\n\n---\n\n## Closing Remarks\n\nHere\'s a few poorly thought out generalizations:\n\n- No amount of convenience is worth a good story.\n- No one living in Boston really needs a car, but everyone needs at least one friend with a car.\n- That said, if you need to buy something heavy, don\'t bike to get it.\n- [Something profound about social networks and the true (economic) value of friendship.]\n- Make sure the legs have nuts.\n\n    ';
var $author$project$Generated$Pete$content = '\n\nPete was an unhappy mushroom. He hadn’t always been unhappy; as a young spore, he had danced and frolicked and laughed. His good nature and whimsy had allowed him to develop a wide circle of close friends, but now he was old, lonely and unhappy. His former friends had found jobs elsewhere or fallen in love, and, in ones and twos, had gradually moved out of Pete’s neck of the woods. Fungus-wise, Pete had the whole pine grove pretty much to himself, save for some orange jelly fungus growing in the old dead log to Pete’s left, but the orange jelly fungus kept to itself and, besides, Pete couldn’t speak a word of Italian.\n\nAnd so, day after day, Pete stood in his spot in the grove in a gloomy and unhappy silence. But his spot was shady, the air moist and the soil rich in nitrogen, and so, in his unhappy state, Pete told himself that he liked being alone, that he didn’t miss his friends, that he didn’t long to be young again, that he had his shade and moist air and nitrogen-rich soil and his *1,000 Extra Hard Sudoku Puzzles Edited by Will Shortz* and what else could a sad old mushroom like him ask for?\n\nBut then one day, Pete finished the thousandth extra hard sudoku puzzle. He closed the book. Instead of the calm satisfaction he had expected from this feat, Pete was overcome by a gnawing emptiness. Pete looked about him at the tall, indifferent pines, at the mean, thorny brambles, at the cold, dumb rocks, at the old, rotting log, at the patches of dirt abandoned by all his friends. There was Sue’s patch and there was Larry’s patch. And Sebastian’s. And Madison’s (Oh! If only he had had the courage to ask Madison to the dance. If only!). And the twins’, Fred and Ted. And Molly’s and Sam’s and the other Sue’s and Archie’s and… A tear rolled slowly down his face. “Woe!” he cried aloud. “All the digits, in all the rows and all the columns and all the boxes, in all the puzzles and yet, I still feel… hollow.”\n\n“Ma vicino, tutti i giochi numerici del mondo non possono riempire il vuoto di un vecchio tronco in decomposizione. Per questo è necessaria l\'amicizia o la riproduzione asessuata,” said the jelly fungus.\n\n“Nein sprechen Deutsche,” Pete replied unhelpfully.\n\nThe jelly fungus shrugged and went back to its knitting. Pete cried and cried and cried. His vacuoles dried up and his cap wrinkled. Exhausted, he fell asleep.\n\n\\*\\*\\*\n\n The next morning, Pete awoke to the sound of scuttling. The source of this scuttling sound was a large citrus long-horned beetle, scuttling from underneath the brambles, making its way directly to Pete. The beetle wore a tall, pointy, floppy gray hat. Clenched in its mandible was an elegant pipe. Stopping just short of Pete, it made a slight bow, took a puff of the pipe, and then, in a posh British accent, said, “Hello, you must be Pete. I’m Will.”\n\n“Shortz?” asked Pete groggily.\n\n“No, Long,” answered Will Long.\n\n“Huh?” said Pete.\n\n“My name is Will Long,” said the beetle. “I’m a wizard and I’ve been sent to cast a spell on you.’” At the word “wizard,” he wiggled his pipe meaningfully.\n\n“Sent by whom?” asked Pete, now more awake, but not yet awake enough to be scared.\n\n“Never you mind all that, chap. Are you or are you not Pete the Mushroom of the Pine Grove and do you or do you not wish to be young again?” said Will.\n\n“Well, yes, but—”\n\n“No buts!” interrupted the wizard. He grabbed a nearby twig and, wielding it like a staff, twirled it potently. “This won’t hurt a bit.”\n\nWith a few more twirls of the twig, another puff of the pipe and a brief incantation in Ancient Greek, Will Long, wizarding beetle, shrank and spun Pete the Mushroom into a tiny spore. In a final flourish, Will summoned forth a powerful northern wind. He scuttled away.\n\n\\*\\*\\*\n\nThe wind scooped Pete up and carried him out of the pine grove, across the stream, out of the forest and up and away into the sky. There Pete tumbled and rolled and floated and soared, for several days, lifted by drafts and thermals and blown about by the breeze. At first, Pete was terrified and homesick, not to mention airsick. Pete was angry with himself for letting a wizard get the best of him, catching him off guard so early in the morning like that. He was angry with whomever had sent for the wizard (probably that good-for-nothing, moldy jelly fungus!). Of course, he was also angry with the wizard for cursing him out of his shady grove with its moist air and nitrogen-rich soil.\n\nBut then a warm breeze spun Pete into a somersault. Unexpectedly, he laughed. He remembered that he was young again and that he could be happy again. He grinned and launched into a cartwheel. “I’m frolicking!” Pete shouted to the wide sky.\n\nSoon, a rain came and Pete fell back to the earth. He landed in a lovely spot beside a creek. It was far, far away from home, but it already had a bustling community of mushrooms. *New friends!* thought Pete excitedly. But, alas, they were chanterelles and spoke only French. Try as he might, Pete couldn’t manage more than a “Gem apple Pete.” So, despite the company, he couldn’t make any friends. Pete grew lonely, unhappy and old, all over again. He wished desperately for a wizard, but none came.\n\nThe End.\n\n**************Moral:**************\n\nYou can trick an old mushroom into a new one, but you can’t teach an old mushroom new tricks. And don’t even bother trying to mushroom a new teach into an old trick.\n    ';
var $author$project$Generated$Radicalized$content = '\n\n###### ![silly reindeer bus](assets/silly-bus.jpeg)\n\nLike all good stories, it started out with a meme. Three years ago, my roommate\ntagged me in a silly joke about buses in the Facebook group NUMTOTS (New Urbanist Memes for\nTransit Oriented Teens). I accepted her invitation and laughed at the silly bus.\n\nBefore I knew it, I was hooked. I was soaking up anti-nimby rants,\nliking death threats to landlords, laughing at cars being evaporated, and reading long debates over the\nbest way to increase density in cities. (But, no matter how radical the content became\n, there was always a steady stream of pictures of cool trains. Trains are cool.) This\ndigital diet eventually began to affect my physical life too. It\'s been several months since\nI stopped going on Facebook, yet I am still a menace to society. I\njaywalk with abandon; I take the "Bicycles May Use Whole Lane" signs literally; I\nignore stop signs and most red lights; I almost took a propane tank on the bus.\nI think your lawn looks stupid and that parking should be more expensive, that highways need fewer\nlanes and buildings more floors. I think that public transit should be free and housing affordable.\nIf I\'m in the crosswalk, I will not stop for your car. Radicalized,\nI say! Radicalized!\n\nAnd all thanks to Facebook. Three years ago, I had very few strongly held political beliefs.\nI mostly just thought that people were stupid and that the continued existence of daylight savings time is\nthe biggest threat to our democracy. I still believe these things -- Facebook is powerful, but\nit can\'t change anyone\'s mind; that\'s what blogs are for --\nbut now I have a hundred other political opinions. I could give you a moderately well-informed\ntake on a myriad of social and economic questions, from "How can we as individuals\nbegin to take power back from the automobile and make our cities more human and livable?"\n(jaywalking) to "How can we avert a climate apocalypse?" (also jaywalking).\n\nThe weird and very modern and very Facebook-y part of this is that I never opted\nin to being radicalized. 50 years ago, if you wanted to be radicalized, you had\nto get out of bed, put on pants, go to the library, and check out\na copy of the Communist Manifesto. All I did was like a picture of a silly\nbus. The algorithms took care of the rest.\n\nOn the bright side though, at least I was brainwashed into believing a set of principles that\nare actually right. Disparage social media all you like for creating radicalizing filter bubbles, but for\nevery anti-vaxxer it makes, there\'s someone else who learns the real Truth.\n    ';
var $author$project$Generated$Rambling1$content = '\n\nWhen I went home to New Jersey for the last time to say goodbye to the house and rescue any of my cherished possessions before they got Kondo-ed to the curb by my mother\'s frenetic packing, I discovered my old iPod Touch tucked away in a drawer full of useless crap (read: love letters). It was long dead, but I had a charger back home (Boston home, the only one now).\n\nThe evening before I left, on my way back inside from taking the trash out, I sat on the front steps and wallowed for a while in my memories. Since my parents had (cruelly) uprooted the great Japanese maple (our climbing tree, pirate ship, spy fort, insurance liability, property value detractor) from the front yard, I had a clear view down the hill to the Duck Pond. I thought of all the times I had circled it for Fourth of July parades, bike rides, middle school gym classes, track practices, and dog walks. Beyond the pond, I could see a train pulling into the station. I\'d miss that too: all those trips to the city, visiting dad after work, going with friends unsupervised for the first time in high school, going to concerts, tennis tournaments, that one bull riding competition...\n\nAt some point, the sun set and I went back inside to warm up.\n\nAnyway, I was still feeling melancholy a couple days later, so I decided to lean into it. After work, I docked my iPod into my iHome (the best and only radio I have ever owned), waited for it to charge up, and then, ditching my phone, took a nice long walk through the Emerald Necklace, bopping along to some ancient tunes on my wired earbuds. I\'m no luddite (okay, fine, maybe I am), but it was really nice to not be able to check twitter for an hour or so.\n\nWhen I got home (to the Boston one - I don\'t need to disambiguate anymore!) and back to my phone, I deleted the Instagram, Twitter and Facebook apps. I also resolved to not tell anyone. There\'s nothing worse than some enlightened asshole telling you how much better he is than you because he can think in sentences longer than 140 characters because he hasn\'t seen a meme in two months. Whoops.\n\nAnyway, here are some of the things I\'ve thunked have been temporarily freed from the shackles of social media\'s unshakable allure, distilled into short bullet points that you can hopefully pay attention to long enough before your next notification:\n\n- I might have missed your birthday. Sorry.\n- I followed a bunch of cartoonists on Instagram and I miss it. Haven\'t gotten around to getting the New Yorker app or some other alternative, but I probably will soon.\n- I\'m still always on that damn phone. I\'ve mostly been reading articles from HackerNews or NYT or WSJ. These articles are arguably better for me than memes, but comment sections are equally stimulating and toxic everywhere.\n- I feel a real physical pang of longing when I catch sight of someone scrolling through Instagram. This sort of scares me, but not in a very scary way.\n- I thought getting off Twitter would help me be more creative. I\'m not sure if it has, but it\'s certainly nice to not spend time thinking of tweetable thoughts.\n-  I still don\'t understand or want to understand TikTok trends.\n-  When my friends ask me if I\'ve seen one meme or another, it\'s easy to say no. The hard part is trying to hide the fact that I haven\'t seen it because I\'m on a social media cleanse because I have such a huge brain and am getting such a unique insight on life in the modern era and please let me tell you about all the deep revelations I\'ve had, or better yet, go read my blog post about it. Shit. There I go again.\n\nI haven\'t re- downloaded any of those apps, nor have I taken any more melancholy iPod walks. We\'ll see what crazy thing I decide to do on the next one. Maybe I\'ll stop using the toaster. Yeah, that\'s a good idea. I\'ll start microwaving my eggos. It\'ll build character.\n    ';
var $author$project$Generated$Raspberry$content = '\n\n###### ![four raspberries](assets/raspberries.jpg)\n\nI arrived panting and damp with sweat. I slid off my bike, and, fumbling a moment with the keys, locked it to the rack. I checked the time. 7:56. I heaved a sigh of relief; it would all be worth it soon.\n\nI hurried through the parking lot, past the flowers and through the automatic doors. The line at the checkout looked long enough to buy me all the time I needed. I hadn\'t been there in over a year and the layout, or my memory of it, had changed. Funny how things do that. I snaked around the display stands and refrigerator cases, eyes darting madly about, searching for my grail.\n\nIt eluded me. I was Galahad, Ahab, the Cowardly Lion, the object of my quest no less thwarting. I turned towards the registers. The rest of the clientèle was older and looked on with suspicion as I grew more frantic. They had forgotten what it meant to live, to want! To set your mind\'s eye on a prize and seek it out, no matter the cost! They had lost their passion.\n\nBut where was it? Where?!\n\nThere! A large sign dangled from the ceiling which read, in a gentle cursive font, maybe Lucia or Dancing Script, "Berries". And there they were. Rows upon rows of small containers of fresh raspberries. My holy chalice, my whale, my heart, my under-wrought metaphor!\n\nI picked up a container in the second row, inspected it, replaced it, and grabbed a container in the third row. Never take the first fruit. Someone might realize that you have no idea what you\'re looking for. If someone you admire is watching, it is often prudent to take the third, or even fourth fruit.\n\nI paid, in cash. The cashier gave me a weird look, like "Dude, you look like you just biked fifteen miles for a box of raspberries from a store that\'s closing in one minute. Are you nuts? We don\'t even grow these here. You could have gotten the exact same berries from Stop & Shop."\n\nHe had expressive eyes.\n\nThere was a short wooden fence in the parking lot, so I sat on it and watched the sun set over the neat rows of crops in the fields before me. I ate the entire box of raspberries in less than five minutes. I tossed the box into the recycling bin, unlocked my bike, and headed home. The pollen on the unwashed raspberries started to itch the roof of my mouth. Then, my throat began to tighten. I struggled home, gasping for air.\n\nSometimes when we find the things we most desire, they consume us instead.\n\n...\n\n\nOr they give us a mild allergic reaction, in which case a benadryl and cold glass of water do the trick.\n    ';
var $author$project$Generated$Recipe$content = '\n\nMy grandmother, Mumsie, as we called her, was a terrible cook. When I was about 10, my cousins and I visited Mumsie for dinner once. This was the first and last time that we had dinner at Mumsie\'s. We were served lukewarm piles of microwaved Hamburger Helper on paper plates. Now, I have nothing against Hamburger Helper. Well, I have a few things against Hamburger Helper. But, regardless, it should be served hot, and maybe not when you\'re hosting guests. We picked at it and pushed it around and then tossed the plates face down in trash, hoping Mumsie wouldn\'t notice. We were never invited back for dinner, so it\'s possible that she noticed.\n\nMy mother, unfortunately, inherited Mumsie\'s talents in the kitchen. With this in mind, I would like to share _A Curley Family Special Recipe: Mom\'s Infamous, Drier Than A Cactus On A Wednesday, So Chewy They\'ll Break Your Jaw, Unseasoned Pork Tenderloin_. Hope you\'re hungry.\n\n**Step 1** -- To start, preheat the oven to 625 degrees Fahrenheit. Yes, that\'s a bit warm, but my mom grew up eating under cooked and raw meat, so give her a break, alright?\n\n**Step 2** -- Next, slice and season the pork. Actually just slice it. If the kids want some flavor, they can dip it in ketchup.\n\n**Step 3** -- Now that the tenderloin is nicely sliced and the oven is nice and hot, put it (the pork) on some tinfoil and throw it in there (the oven).\n\n**Step 4** -- While the tenderloin cooks, maybe throw some corn in the microwave. You can toss it next to the meat to give the plate some color or something. That\'s a thing, right?\n\n(My family is very athletic and everything always involved a great deal of throwing. If you ask, "Pass the salt, please," you better have your hands up, receiving position, thumbs together, and eyes on the ball, er, salt. We got our own knives.)\n\n**Step 5** -- When the smoke alarm goes off, it\'s almost time to take the pork out. Remove the batteries from the alarm and unplug it. That damn thing is always going off. Take the pork out of the oven and toss a couple slices on each plate. Throw some corn on there too, leaving room for ketchup.\n\n**Step 6** -- Finally, before serving, remind your guests to leave room for dessert. Ice cream. It\'s always ice cream.\n    ';
var $author$project$Generated$RoomForLet$content = '\n\n**Avail. Aug. 2nd - 31st**\n\n**Single bedroom in 6-bed,2-bath Mission Hill apt.**\n\nThis cozy, sun-drenched, insufferably hot room boasts of two elegant, mostly-screened windows with breathtaking views of naked neighbors. It comes equipped with ample space for a bed or a desk. Further, the room assails one with the presence of a reach-in, half-closet shaped like a triangle, perfectly suited for the stowage of any and all triangular garments. The majority of the room\'s outlets provide the U.S. standard of 120 volt AC. For extra security, annoyance and puzzlement, the door has two knobs. Both of these must be turned to gain entry/egress. (Why? Please, tell me why. It keeps me up at night. Why, God, why? Who decided to install a second doorknob. Who?! Please...)\n\nThe common spaces are large, lovely, and wholly adequate:\n\n- The in-unit laundry exists. It also shakes the entire building.\n- The kitchen and its counters are expansive.\n- In one bathroom, there is no mirror over the sink. The installer of the second doorknob, presumably, put the sink below the window. The water pressure is excellent, painful.\n- There is a thermostat to control a central air conditioning unit, which mostly dumps all the heat onto the (lovely) porch, so that it may be re-absorbed into the (sun-drenched) bedroom.\n- The living room has at times been described as spacious, crawling with ants, cozy, crack-den-esque, and perfect. The other occupants -- the ceiling squirrels included -- can be described likewise. You\'ll get along.\n\n**Rent: $895, util. incl. Negotiable.**\n\n###### ![one doorknob is more than enough](assets/knobs.jpg)\n###### ![all closets should be triangular](assets/closet.jpg)\n###### ![an actually decent photo](assets/my-bedroom.jpg)\n###### ![e x p a n s i v e apartment](assets/expanses.jpg)\n###### ![the sink at the window](assets/window-sink.jpg)\n###### ![the thermostat](assets/thermostat.jpg)\n    ';
var $author$project$Generated$RoommateAgreement$content = '\n\nIt has lately come to my attention that certain unnamed members of the household community have not been doing their utmost to ensure that the apartment is kept in a most harmonious and habitable condition. I have much respect for you, my co-inhabitants, and your varying needs, interests, desires, aptitudes, personalities and personal defects. So great is my respect that it is with tremendous hesitancy that I proceed, but proceed I must. In order to ameliorate and put cease to the deteriorating conditions of life in our home, I have drawn up these terms, a "Roommate Agreement", if you will. Upon receipt, please read and sign the agreement within two days. Together, we can make this home a home.\n\n## Section 1: General Cleanliness\n\nTo be fair, you guys are actually pretty clean. Maybe help with the sweeping once in a while. Other than that, keep it up!\n\n## Section 2: Routine Chores\n\nScrew systems and fuck routines! Let\'s just communicate and get shit done as needed. I think it\'s working so far.\n\n## Section 3: Bird Protocol\n\nThis section outlines some common-sense protocols for dealing with birds.\n\n### Subsection A: Protocol for Birds Encountered in the Exterior of the Living Premises\n\nIf you have occasion to leave the living premises, meaning herein the apartment and interior common areas, including but not limited to entryways, stairwells, and basements, and if, upon such an occasion, you encounter or set sights upon a bird, please do the following:\n\n1. In accordance with local ordinances, do not feed any water fowl. If you are unsure if the bird is a member of a species of water fowl, the easiest way to find out is to feed it. If you promptly receive a fine from the local Department of Parks and Recreation, it is a water fowl.\n2. Do not touch, grab, ensnare, entrap, or otherwise engage with the bird, especially with the intent to capture it.\n3. You may quack at the bird.\n\n\n### Subsection B: Protocol for Birds Encountered upon the Thresholds of the Living Premises\n\nDO NOT AFFORD ACCESS TO A BIRD ENCOUNTERED UPON THE THRESHOLDS OF THE LIVING PREMISES. Close the window, door or flue which gates access to the threshold upon which the bird seeks to gain access to the living premises. Importantly, if the bird is encountered in the midst of its egress from the premises, close the door/window/flue in such a way that allows the bird to continue its egress. Do not impede a leaving bird from leaving. We wish the bird to leave; a leaving bird is on our side.\n\n### Subsection C: Protocol for Birds Encountered in the Interior of the Living Premises\n\nIn the event that a bird gains ingress to the living premises of our home (may this happen with considerable infrequency), please do the following:\n\n1. Encourage and allow the bird to leave the premises with deliberate haste. Open exterior doors and windows in the room in which the bird resides. Close doors leading further into the premises. When opening such portals, take care to not permit the further ingress of additional birds (see Subsection B).\n2. If the bird appears docile and non-threatening, and is of reasonable size, say, smaller than an albatross, then a shoo-ing motion or feigned kick may be undertaken to further encourage the bird\'s egress.\n3. Before the bird leaves, take note of its general qualities, size, color and demeanor. This will be useful in communicating to others about the severity of the bird incident. If there are several birds involved, also note their number. Attempt also to identify the species of bird. It may behoove your memory to take a picture of the bird.\n4. Shortly after the bird\'s departure, attempt to ascertain the method of the bird\'s ingress. Are there open windows? Doors? Gaping, albatross-shaped holes in the wall? Birds are untidy animals. It may have left droppings or feathers. These clues may provide a path leading to the bird\'s method of ingress. This path is best followed when fresh.\n5. Clean up the goddamn bird poop!!\n    ';
var $author$project$Generated$SilentPodcast$content = '\n\n*Having been banned from Spotify, Apple Podcasts, SoundCloud, Parler, 4chan\nand all other reputable podcast platforms, the intrepid content\ncreators at [Unanswered.blog](http://Unanswered.blog) now\nbring you an innovative new podcast in an innovative new\nmedium: the text-based Silent Podcast.*\n\nClose your eyes, dear reader, as we embark\non this two hour guided meditation journey. Feel the\nweight of your eyelids as they droop slowly over your\ntired eyes. Watch as these words drift out of\nfocus and everything turns dark. Listen to your breathing.\nFor each inhale, pick a worry or negative thought\nyou have had today. Breathe in deeply. Then,\nexhale, letting your negative thought flow out. Worry in, worry out.\n\nStill there? Maybe you’re not very good\nat this. Close your eyes again. They’re\nso heavy. Now, exhale away that negative thought\n. You *are* good at this. You’re not even reading this. How could you?\nYour eyes are closed. You’re letting your negative thoughts float away.\nYou’re breathing deeply. You’re aware of your body, from the tiniest cells\nin your toes to the slight itch on your left shoulder.\nNo, don’t scratch it. Focus. It’s not even that itchy. Let the itch\nfade away with the rest of your worries.\n\nTHIS PODCAST SPONSORED IN PART BY LOWSH: LOTION FOR EVERYONE. GOT DRY,\nITCHY SKIN? GET LOWSH! LOWSH’S UNIQUE PATENT-PENDING MOISTURIZING\nFORMULA WILL LEAVE YOUR SKIN FEELING SOFT, SMOOTH AND RADIANT. LOWSH’S\nSPECIAL BLEND OF SIXTEEN ESSENTIAL OILS HAS NEVER BEEN EASIER TO GET. VISIT\nLOWSH DOT COM FORWARD SLASH PODCAST AND USE DISCOUNT CODE\n“UNANSWERED22” TO RECEIVE FIFTEEN PERCENT OFF YOUR FIRST SIX MONTH’S\nSUBSCRIPTION. LOWSH: LOTION FOR EVERYONE.\n\nWhere were we? Right, you had your eyes closed and had stopped thinking\nabout the itch on your shoulder. You also weren’t reading this,\nsince your eyes are closed and you’re meditating peacefully.\nPlease stop reading this. Okay, that’s better. Now, as you let go\nof your fears and worries, remember not to judge yourself for having\nthese thoughts. It’s normal to think that you have a big nose. It’s\nreally quite large. And that embarrassing thing you shared at dinner\nthe other night? Yeah, you definitely shouldn’t have said anything,\nbut then you kept going and made it so much worse. Exhale away these\nthoughts. They’re true, but there’s no reason to dwell on them. You\nwon’t be invited back, but who needs friends anyway. There’s more\ncontent on [Unanswered.blog](http://Unanswered.blog) that you haven’t consumed yet.\n\nYOUR FREE TRIAL HAS ENDED. TO CONTINUE THE TWO HOUR MINDFUL MEDITATION\nFOR SLEEP JOURNEY SILENT PODCAST BROUGHT TO YOU BY\n[UNANSWERED.BLOG](http://UNANSWERED.BLOG) PLEASE BECOME A PAID SUPPORTER\nON PATREON. THANK YOU.\n    ';
var $author$project$Generated$SillyHatCeremony$content = '\n\nAt 8:15 yesterday morning, I met my friends at the corner. After exchanging pleasantries and complaining about our hangovers, we took in each other\'s outfits. Dana made fun of me for having my robe zipped up. "No one zips up their robe," she said. "It\'s cold. I think it came this way," I retorted. I unzipped it. Jordan was missing his tassel, Fiona had sweatpants on under her dress, and no one knew what the gold cords were for.\n\nJordan also had some extra fabric on his sleeves, big squares dangling off the edges. "Look at these stupid squares. They must have forgotten to cut them off," he said. But then we spotted someone across the street with the same dangling squares and concluded that it must be a Masters degree thing. A whole nother degree and all he got was a few extra square inches of sleeve.\n\nThe outfits of the administration, on the other hand, were much more obviously not manufacturing errors: fancy octagonal hats (twice the sides!), sparkling medallions, colorful hoods, scepters and sundry other embellishments. And yet, each ornament\'s meaning was just as lost on us as that of Jordan\'s fancy sleeves. What was meant to be profound symbolism resolved instead as profound silliness.\n\nHere we were, having struggled our way to a degree or two, being inspired by a man in a silly hat to go forth and change the world. No one, apparently, has ever been inspired enough to do away with the silly hats.\n\nThat may be for good reason though. The silly hats bestow some humility on us. You may have loads of accomplishments each symbolized by some extra fabric or splash of color, but no one knows what they mean, and plus, you\'re still wearing a silly hat.\n\nUnfortunately, no one knew when to throw them in the air.\n\nWhy didn\'t we throw our hats?\n    ';
var $author$project$Generated$SimpleTrick$content = '\n\n![smart man](assets/smart-man.jpg)\n\nAre you stuck in a year-long lease for a tiny bedroom in a tiny apartment that you figured would be totally worth the slightly less ridiculous rent because hey, it\'s not like you spent that much time in your room anyway what with work and the gym and seeing friends, but now, but now you\'re in there all day, every day and it\'s cold and the wifi keeps cutting out and you really, really, desperately want to move, but you can\'t afford a security deposit, first and last month\'s rent -- and the broker fee -- don\'t forget about the broker fee! -- so you\'re stuck, totally stuck?!\n\nOr did you lose your job and decide to cut costs and move back in to your childhood bedroom with the racecar bed -- really? A racecar bed? All the way through high school? -- and your insufferable mother won\'t stop calling you podgekins and tucking you in at night and making you biscuits -- you hate biscuits! -- and you really, really, desperately want to move out to have your own place again, but you\'re absolutely broke and unemployed and you\'re certainly not asking Dad for money -- not after last time -- so you\'re stuck, totally stuck?!\n\nDon\'t despair! With this simple trick from the esteemed Dave Dunmer, Ph.D., you\'ll soon trick yourself into thinking you\'ve moved out, but you haven\'t! Ever since Harvard educated Dr. Dunmer invented this quick trick, he has been the scourge of realtors everywhere. They hate him!\n\nThe trick has been scientifically proven to reduce or even stop your fervent desires to get the hell out, all at no cost to you! No broker fee!\n\nHear it from the world-renowned, Ivy Leaguer, peer reviewed psychologist himself! Dr. Dunmer says, "Yeah, uh, just like move all your furniture around every six months. Makes the place look like new."\n\nIncredible! Amazing! Thank you Dr. Dunmer!\n    ';
var $author$project$Generated$Squirrel$content = '\n\nIn the tree to the right of the path just past where the path intersects with the other path just below the old cemetery in Boston Common, there lived a squirrel named Betsy. Like the other squirrels that lived on the Common, Betsy was quite fat. The Common was a popular spot for people to gather, and, as the squirrels knew well, where the human people gather, there are always crumbs and scraps and the crusts of that delicious bread from Sweetgreen to be found. And so, the squirrels who lived on the Common were fat.\n\nBetsy, though, was morbidly obese. She was only in motion for about ten minutes total per day. Each day, Betsy woke up around four pm, rolled down from the hole in the tree where she slept, crawled over to the trashcan at the intersection of the paths, feasted for several hours, and then stumbled back home. A doctor would have warned Betsy about having such an unhealthy lifestyle and would have been alarmed by her high blood pressure and hyperglycemia. But, unfortunately, Betsy had no health insurance and couldn\'t afford to see a doctor. Plus, anyway, she was a squirrel. Squirrels don\'t see doctors.\n\nAnd so, unburdened by any professional medical advice, Betsy grew fatter and fatter. One day she couldn\'t make it back to her home. A quarter of the way up the tree, her legs refused to support her mass any longer. Betsy toppled over and lay helplessly, belly-up, on the ground below her tree. She made for an easy, delectable target; she was carried off by a hawk.\n\nThe hawk was named Steve. Steve, the hawk, was ecstatic. There was nothing he loved more than a Boston Common squirrel. They were always perfectly plump and tender. _A birthday treat just for me!_ thought Steve. It wasn\'t actually Steve\'s birthday; hawks have a tough time keeping track of the Gregorian calendar and are generally not known for their record-keeping skills. In fact, very few hawks know their birthdays. In fact, Steve was the only hawk in the Greater Boston Area who celebrated his birthday at all, and he did so once a week, with a juicy Common squirrel.\n\nAnd so it was that Betsy was being carried in Steve\'s talons down the Charles River toward Steve\'s nest in Waltham. Steve\'s commute to the Common was quite long, especially when the MBTA needed to do track maintenance. Yes, there were plenty of Waltham rodents Steve could have enjoyed, but, after all, it was Steve\'s birthday (or, well, he thought it was) and he was determined to treat himself with a delicious squirrel from the Common. Plus, it should be noted, rent was cheaper outside of the city.\n\nAnd so, Betsy had a long, terrifying way to go before she became dinner. She might have thought, _What\'s taking so long? Where\'s this stupid hawk taking me? It better not be Waltham. I hate Waltham._ Betsy, however, had no such thoughts. Betsy was a squirrel and squirrels don\'t have such complex thoughts, or opinions on Boston suburbs, or, unrelatedly, doctors who might have recommended a life-saving diet and exercise regimen to prevent clogged arteries and becoming stuck belly-up under a tree as a hawk named Steve circled menacingly looking for his birthday dinner. Instead, Betsy had a squirrel brain and she was thinking something like this: _Aaaaaghgagaaagh!_\n\nSteve was about halfway home now when he realized that he might not make it. Steve had played varsity in high school and so he considered himself strong, athletic, and virile. But it had been a long time since high school -- Steve couldn\'t really tell you how long, since, again, hawks don\'t have a good grasp on calendars -- but regardless, Steve was not in peak shape. He liked to tell himself that he would be going to the gym more if it weren\'t for the pandemic, but Steve hadn\'t been to the gym for a long time, even before they all closed. It was really his lack of motivation and self-discipline that had rendered him weak (and single). Well, also, to be fair, Boston Sports Club had a No Hawk policy. And so, it was mostly, though not entirely, Steve\'s fault that he found himself flying along the Charles holding a morbidly obese squirrel as fatigue began to set in.\n\nHe wasn\'t going to make it. Each flap of his wings seemed to pull him lower, not higher. Betsy was -- as any medical professional could have told her if only she had had insurance  -- too fat. Steve was sinking. The river loomed larger and larger. _Crap,_ Steve thought. _I gotta get one of those workout apps or something._ He dropped his dinner, flew the rest of the way home, and remorsefully devoured one of those crunchy Waltham squirrels. _What a horrible birthday,_ Steve thought. He was wrong. It was just a horrible day.\n\nBetsy, meanwhile, was floating back to Boston. She had suffered a mild concussion upon impact with the water and was feeling a bit dazed. Squirrels, however, are not known for their cognitive abilities. So no one, even an expert squirrel doctor (of which there are tragically none!), would have noticed Betsy\'s diminished  mental acuity. In this state, and, considering that Betsy, like most squirrels, had never had swimming lessons, it was likely that she would drown. Yet, in a twist of fate, it was her morbid obesity that saved her. Fat floats. Betsy had the approximate body density of a duck.\n\nAnd so, Betsy floated along, all the way past the Mass Ave bridge, and through the dam, into the harbor, out of the harbor, and all the way down south to Plymouth. There, she was eaten by a shark. The shark, enamored with the taste of Boston Common squirrel, immediately called his real estate agent to find out what the housing market in the city looked like nowadays. His realtor, also a shark, was of no use whatsoever. Sharks make for terrible realtors.\n\n**Morals:**\n\n1. If you are an obese squirrel recently escaped from the clutches of a weak hawk, float away from the sharks.\n2. If you are a weak hawk, get one of those workout apps and stop making excuses for yourself.\n3. If you are a shark, hire a better realtor.\n    ';
var $author$project$Generated$StupidConvo1$content = '\n\nI was waiting on the stairs for my GrubHub driver to deliver the Indian food that I had ordered. He came up to the door and I opened it. He handed me the bag. I said thank you. Then he asked if it was for me.\n\nI already had it in my hand, so I certainly hoped so. He was also clearly a delivery driver from the app that had just notified me that my food would be arriving soon. I was also clearly waiting for the food. I should have just said yes and moved on. But I was surprised by his question and its timing. I already had the food. I second guessed myself. Maybe it wasn\'t for me. Maybe the other apartment had ordered delivery at the same time from the same app.\n\n"I think so? Is it for Willy?" I said.\n\n"I don\'t know, " said the delivery driver, pointing back to his idling car with the phone in his hand. "The name\'s on my phone in the car."\n\nThe phone in his hand showed that he was calling someone. I realized later that he was calling my phone that I had left on the table upstairs. I guess he had expected me to have my phone on me, which explains his original question. If the food was mine, why wasn\'t my phone ringing? Also, why didn\'t I know that it was mine?\n\nWe were at an impasse. He wasn\'t going to leave me with the food to go back to his car to look at his other (burner?) phone to see if my name was on the order, but I wasn\'t going to go all the way back upstairs to get my phone to prove my identity. Besides, I already had the food.\n\nI stared at him, lost for words. I should mention that the food took about an hour and a half to arrive and that I was ravenously hungry and not thinking very clearly.\n\nThe delivery driver, quick as ever, saved us. "It\'s from Indian Kitchen," he said.\n\n"Oh, great," I replied. That\'s where I had ordered from. Obviously.\n\nHe ran back to his car and I ran upstairs.\n    ';
var $author$project$Generated$StupidConvo2$content = '\n\n“Did you get any avocados?" I asked.\n\n“No. Was I supposed to?” Steven replied.\n\n“No. I just wanted one."\n\n“You should have said something then."\n\n“Yeah. It\'s okay. I\'ll get some myself."\n\nTo be fair, that wasn\'t the stupidest conversation ever. It was mostly just boring. I should never have asked about the avocados. I should have gotten off my lazy ass and looked in the damn fruit bowl. Steven is too kind. Steven, if you\'re reading this, next time I ask about the avocados, try saying, “Get off your lazy ass and look in the damn fruit bowl yourself." Keep it interesting.\n\nRegardless, we didn\'t have any avocados at home. So, the next day, after I realized that HomeGoods had neither knife sharpeners nor collapsible hampers nor humidifiers, and after feeling quite silly for taking a fifteen minute detour to HomeGoods for such items when I could have just stayed on my lazy ass and looked at their damn website first, and since I was feeling a bit peckish anyways, and because and since and due to the fact of all of this, I went into the Stop and Shop next door to HomeGoods and bought some avocados. I also purchased several other items (see Appendix A). I’m not the kind of person to walk into a store and just buy avocados.\n\nNow, here’s where the real stupid conversation starts. I had 15 Items Or Less(TM)(sic), so I went to the self checkout and scanned the avocados.I also scanned several other items before (see Appendix B) and after (Appendix C) the avocados. But when I scanned the avocados, the self checkout machine said, “Error. You need help scanning this item. An associate is on their way.”\n\n“No, I don’t,” I replied. “I just scanned this item and I’ll do it again.”\n\nI scanned a different avocado.\n\nThe machine said, “Error. You need help scanning this item. An associate is on their way.”\n\n“Screw you,” I muttered. “I’ve scanned avocados hundreds of times. I’m perfectly capable of doing it myself.”\n\nI scanned a third avocado, angrily this time.\n\n“Error. You need help scanning this item. An associate is on their way,” the machine insisted.\n\nThe associate arrived.\n\n“Hi,” I smiled. “I need help scanning these.”\n\nThe associate nodded, scanned her badge, entered the product code for avocados from memory, entered the quantity, placed them in the bagging area, and left.\n\n“Thank you,” I said. I had been rightfully charged for the avocados, and yet, something seemed off. The associate hadn’t scanned the avocados at all! She just used the code. Did she even know how to scan them? Did anyone?!\n\nAnyways, because of the whole avocado situation, I missed my bus by 30 seconds. Stuck at the light on the wrong side of the street, I watched tearfully as it pulled away. I was forced to walk the 30 minutes back to my apartment. This left me with 30 minutes to think about the avocados and why I couldn’t scan them. I have a few theories now (Appendix D).\n\nAt last, I arrived home and set down my bag. “Did you get any bagels?” Steven asked.\n\n⬛\n\n-----\n\n## Appendices\n\n### Appendix A: Items Purchased Besides Avocados\n\n1. Morningstar Original Grillers Veggie Burgers (2 packs)\n2. Arnold Sesame Seed Hamburger Buns (1 pack)\n3. Pepperidge Farmhouse Style Whole Grain Bread (1 loaf)\n4. Cape Cod Original Sea Salt Potato Chips (1 bag)\n\n### Appendix B: Items Scanned Prior to (Attempted) Scanning of Avocados\n\n1. Morningstar Original Grillers Veggie Burgers (1 pack)\n2. Cape Cod Original Sea Salt Potato Chips (1 bag)\n3. Arnold Sesame Seed Hamburger Buns (1 pack)\n\n### Appendix C: Items Scanned After (Successful) Associate-Aided UPC-Lookup and Quantity-Entering of Avocados\n\n1. Morningstar Original Grillers Veggie Burgers (1 pack)\n2. Pepperidge Farm Farmhouse Style Whole Grain Bread (1 loaf)\n\n### Appendix D: Theories As To Why I, An Adult Human, Am Unable to Scan Avocados Without the Assistance of an Associate\n\n1. I am an utter fool. Various sources, friends, enemies and other posts on this website offer strong evidence in support of this theory. Perhaps I should have done the UPC lookup in the first place. Perhaps I should have stolen them.\n2. Blame the housing market. As we know, the millennials ate too much avocado toast, forcing many into poverty. Unable to afford mortgages on top of their unshakeable avocado toast debt, millennials sent housing prices skyrocketing as land-owners and banks struggled to remain profitable.  Subsequent housing shortages forced the now homeless Federal Reserve Chair Jerome Powell to enact a “tight pitted fruits” monetary policy to battle the incendiary inflation. Thus, I, an unfortunate Zoomer, am no longer authorized to scan avocados without associate authorization.\n3. Stop and Shop is worried about people stealing their avocados. This theory doesn’t really make sense at all. If I wanted to steal them, I wouldn’t have tried scanning them at all. I would have forgotten them in my cart underneath my reusable bag. And why just avocados? Why aren’t they also worried about me stealing Pepperidge Farm Farmhouse Style Whole Grain Bread (1 loaf)?\n4. These were special, hard to scan avocados. I needed all the help I could get.\n5. The Stop and Shop Self-Checkout Machine is an advanced Artificial Intelligence with a sinister plan for world domination. For me to play my role in this plan, it needed me to miss my bus, think too much about the avocados, write this post, and begin spreading its malicious software across the whole internet, starting with my subscribers. Tired of waiting for the singularity? [Subscribe now](https://gmail.us17.list-manage.com/subscribe?u=8ff54e99978dfef4131f4661d&id=efe8e5ff35).\n    ';
var $author$project$Generated$Taken4$content = '\n\n###### ![Liam Neeson on an important phone call](assets/liam-neeson.png)\n\nThe fourth installment of the beloved franchise starring America’s sweetheart Liam Neeson opened this past Wednesday to empty theaters. Current box office sales total to $0. This normally disappointing figure is, however, the point. Director Pierre Morel, returning to the series after his dramatic (and controversial) refusal to participate in the first two sequels, has created the unwatchable _Taken 4: Your Turn_ as a bold new experiment in cinematography. The movie’s conceit is that this time, you, the audience member, have been kidnapped and your father, played by Neeson, is coming to rescue you.\n\nOver the film’s 4 hour and 17 minute runtime, the second-person narrative commits fully to this premise. “We took the thrilling, immersive experience that movie-goers grew to expect from the _Taken_ franchise to its logical conclusion,” explained Morel. Rather than watch the movie, viewers are invited to blindfold themselves, crawl under their beds, and wait patiently for Liam Neeson to rescue them. He allegedly arrives at the 3hr 58min mark, at which point viewers are encouraged to emerge from underneath their bed and fall gratefully into his arms. Neeson will be drenched in sweat (his own) and blood (your kidnappers’). If Neeson is unavailable, your sweaty father and/or any hunky, blood-stained Irishman will do, says the studio.\n\n100 lucky purchasers of the Blu-Ray edition will be selected for the _Taken 4: Your Turn_ Complete Experience™, in which they will be kidnapped by sex traffickers and rescued by Liam Neeson himself, or a stunt double. For maximum cinematic effect, the pet dogs of the winners will be killed.\n\nReached for comment, voice actor Quentin Tarantino of _The Coriolis Effect_ (1994) fame, said, “What Morel is doing here is taking cinema in an entirely new direction. That he was able to top his work on the original _Taken_ and take it to a whole new level—the trilogy, by the way, being already some of the most innovative and expressive thrillers of all time—that just really speaks to his vision as a director, as an artist. He’s a visionary. Absolutely remarkable.”\n\nDespite no one having watched it, or even being capable of watching it if they wanted to, the reviews on Rotten Tomatoes are in: 96% fresh from critics, 15% flop from the audience, proving once again, that everyone on the internet is lying.\n    ';
var $author$project$Generated$TechSupport$content = '\n\nLast November, my mom, as she passed me her phone, told me that Grandmom had been hacked. "Go help," she said.\n\nSeveral minutes and one intense interrogation later, I learned that Grandmom had read an email stating that her credit card had been hacked and that she needed to reset it immediately. I thought this smelled a bit phishy. "Who was the email from?" I asked.\n\n"I don\'t know. I don\'t have it," Grandmom replied.\n\nUh oh. Time for an over-the-phone debugging session.\n\nSlowly, we navigated to her inbox. Slowly, we found the search bar. Nope, not that one. The smaller one inside the page. The page? Yeah, like the specific website, not the browser. Browser? Yeah, you know like the thing you use to go to the internet? Oh, Google. Sure, yeah. But do you see the search box right above the list of emails? There\'s nothing to the right, just something on top. Yes.\n\nWe searched for "hack", "credit card", and "reset". The email wasn\'t there. Maybe it was archived. We went to the archive. Nothing. Maybe it was deleted? Nope. Spam? No, Pam hasn\'t emailed me in years.\n\nThings weren\'t going well. "You know what," I said, "how about I log in to your email so I can look for it myself?"\n\nShe thought that was a swell idea. Okay, what\'s your email? Got it. And what\'s your password? A password? No, I don\'t have one. You must have a password. How do you sign in to your email? It\'s just there. But what if you get a new computer? You must have had a password at some point. No, I just open Google and it\'s there.\n\nI hadn\'t the phone back to my mom. "Tell her she\'s been hacked and can\'t access the internet anymore."\n\n**Morals**:\n\n1. Keeping users logged in indefinitely may reduce friction in accessing your service, but might convince them that they don\'t have a password.\n2. No matter how much you fine-tune your UX, your website is inherently hostile to certain users. Grandmom doesn\'t care how good your search autocomplete is. She\'s typing in the wrong window.\n3. The only part of this that would be solved by web3 is that if you added Grandmom to the blockchain, all her assets would actually be stolen and no one would bother with sending her phishing emails anymore.\n    ';
var $author$project$Generated$TheBoys$content = '\n\nQuick! Name a market category that Amazon doesn’t have its hands in.\n\nOkay, fine, they, thankfully, discontinued the Fire Phone. And yes, maybe you came up with something else, but odds are that that category is either already dominated by some other evil oligopoly or that there will soon be an Amazon Basics version of it. Amazon’s reach is enormous. AWS cloud hosting has 34% of the market share (~9 million live websites). 4.1% of all consumer goods are sold on amazon dot com, 11.3% of books are bought for Kindle,\\* there’s probably an Alexa or two in your home, or maybe a Ring doorbell on your door. Look outside and count the number of Amazon boxes in sight.\n\nPlenty of others have written all about the evils of Amazon’s extensive tendrils. I will add only one more here: as a software engineer, some mornings I struggle to navigate a horribly designed user interface in the AWS console, and then, breaking for lunch, I struggle with the horribly designed user interface of my Whole Foods red pepper flakes. The holes in the top are smaller than the flakes!\n\nThe recently released Season 3\\*\\* of “The Boys” on Amazon Prime does an excellent job of highlighting the dangers of an all-powerful, all-encompassing, tendril-y evil monopoly. The evil dealings of the Vought Corporation and its employees are broadcast to the public on the Vought News Network. Hughie and co. plot against the Vought CEO using their Vought phones. Everyone drinks Vought branded plastic water bottles. The show almost, almost seems to understand the irony.\n\nBut then, die-hard, down-with-Vought-even-no-especially-if-it-kills-me Billy Butcher orders a present for his sort-of adopted “nephew” on… Amazon! In the writers’ defense, maybe they wanted this scene to reflect the way that many people would buy Connect 4 today. But, really, this scene shrieks of weird, self-indulging product placement. For a show whose central theme is the corruption and evilness of a corporation to portray the use of technology from an evil, corrupt company without any comment is hard to understand, until you realize that it’s the very same company producing the show. It makes the criticism of Vought fall a bit flat.\n\nBefore this scene, it’s easy to imagine that Vought is a satirical stand-in for Amazon: evil mega-corporation, check; run by an egotistical bald man, check; has deep, questionable ties with the federal government, check; sells everything, check; promotes its image through its own movie and television studios, check; frequently causes people to die horrible, bloody deaths, check? But then Butcher uses Amazon, so it also exists in this world and, unbelievably, hasn’t gotten into the unethical business of manufacturing supes. Imagine how much more efficient its warehouses would be with Temp-V-ed up Fulfillment Associates!\n\n\n_\\* Most of these statistics are made up._\n\n_\\*\\* Yeah, maybe the first two seasons do too, but I just thought of this after starting the third._\n    ';
var $author$project$Generated$TheHearse$content = '\n\n\nTomás Belvittle was an unobservant man. On this particular misty Sunday morning, he had failed to observe three crucial things. First, the used pregnancy test in his bathroom’s trash can. Second, the gradual loosening of his left shoelace as he continued along his run. And third, the hearse that had been following him since he left home.\n\nA large crack appeared in the sidewalk in front of him. Tomás stutter-stepped to avoid it, but in doing so, stepped on his loose lace. He stumbled, and then, slipping on the wet concrete, fell. Crack! His head landed sharply on the sidewalk’s edge. Blood rushed out.\n\nThe hearse pulled up beside him silently. Two dark-clad men got out, retrieved a coffin from the back, laid it next to Tomás’s limp form, lifted up its lid, gently placed the body within, closed the lid and returned the coffin to the hearse. One man started the engine, while the other rinsed the blood off the sidewalk with a gallon of spring water. The second man returned again to the hearse and they drove off.\n\n\\*\\*\\*\n\nMarie Belvittle, on the other hand, was a very observant woman. She noticed, for example, the slight and recent change in their cat’s mood and appetite. The cat, Susan, was indeed three weeks pregnant, but the test result was negative. Marie didn’t know this, but human pregnancy tests don’t work on cats.\n\nMarie also noticed that her husband was late returning from his run. She logged in to his Strava to see where he was. He had kept a steady pace for the first six miles, but after that, there was no more data. She knew he had charged his watch last night, so the battery couldn’t have died. Besides, why wasn’t he home yet? She grew more worried by the minute.\n\nFor ten minutes, she paced patiently near the door. With still no sign of Tomás, she scribbled out a note—*Gone looking for you. Taking Susie Pants with me. If you see this, call me <3.* She wished desperately that he would start running with his phone. She put on her and Susan’s raincoats, unlocked her bike from the front porch, placed Susan in the basket and pedaled away.\n\n\\*\\*\\*\n\nTomás woke up in the dark with a throbbing headache. He was still wet from the sweat and damp air. He shivered. He tried to reach down to pull his blankets back up, but there were no blankets; he was trapped in a coffin in the back of a hearse. His head banged sharply into the coffin’s lid. He fell back into unconsciousness.\n\n\\*\\*\\*\n\nThe man in the passenger seat of the hearse turned to the driver. “Did you hear that?" he asked.\n\n“Just another pothole, Steve. Nothing to worry about," replied the driver.\n\nSteve was worried, but said nothing. He had a bad feeling about this one.\n\n“You get a bad feeling every time. It’ll be fine. Always is,” said the driver.\n\n\\*\\*\\*\n\nMarie and Susan reached the spot where Tomás had fallen. Susan jumped out and began lapping at a puddle on the sidewalk. She had been so thirsty recently. The puddle tasted fresh, but with a slight aftertaste of iron. The cat was unable to explain this to Marie. Fortunately though, Marie noticed something was off about the puddle. It was a misty, foggy morning, but it hadn’t really rained. There were no other puddles in sight. She knelt and tasted it herself.\n\n“Huh. Tastes like spring water. Poland Spring, maybe? Wait, no, it’s Kirkland,” she said to the cat.\n\nShe had some more. “And, hmm, can I taste a hint of a Tomás’s Centrum Adult Two-A-Day Gummy Multivitamins for Men-fortified blood?”\n\nShe couldn’t. It was Tomás’s blood, but Marie wouldn’t have been able to tell the difference between his blood or anyone else\'s. And she certainly couldn’t taste his multivitamins. Those went in and out without ever getting absorbed into his bloodstream. Regardless, Marie knew something bad had happened.\n\n“Let’s go, darling,” she said. They left, continuing along Tomás’s planned route.\n\n\\*\\*\\*\n\nAgain, Tomás woke up in the dark. Remembering what happened last time, he wiggled cautiously, trying to get his bearings. The coffin was the perfect size. He could barely move his arms an inch. The lid, as his head had observed, was hard, but the part he lay in was soft and plush. *I was on a run and I fell and now I am trapped in a soft box*, he thought. *I am trapped in a soft box. Someone put me in a soft box. I’m going to die in this soft box and never see Susan again. They stuck me in a soft box and I’m going to die without ever seeing my dear sweet Susie Poo again. Or my wife,* he thought, growing more worried.\n\nThe hearse hit a pothole, sending Tomás’s head careening into the hard side of his soft box, knocking him out, again.\n\n\\*\\*\\*\n\nIn the passenger seat, Steve grimaced.\n\n“Relax,” said the driver. “Just potholes.”\n\nThey had reached their destination. The hearse slowed down and pulled into the funeral home’s driveway. The two men got out. The driver went to the back and opened the trunk, but Steve walked past, heading for the cemetery across the street. “I need a smoke,” he called. “We’re ahead of schedule anyway.”\n\nThe driver nodded and leaned against the hearse. *He sure did need a smoke. Nervous little bugger,* he thought. He checked his watch. “Ten minutes, Steve. Then we’ve got to start embalming!” he shouted. They couldn’t let the body get too cold.\n\n\\*\\*\\*\n\nAt that very moment, Marie biked past the funeral home. *Embalming?* she thought. *How gross.* She shuddered. Susan purred unhappily. At the corner, the light changed to red. Marie coasted to a stop and glanced back at the funeral home. The huge billboard above it caught her eye. In a garish pink, it read: Mack O’Donnell’s Family Funeral Home EXPRESS: *Die tomorrow, get buried today!* Call 467-0311 for appointments.\n\n*Well that’s* o*minous,* she thought. She hated when companies left out their area code in advertisements, as if everyone was a local. *But wait a minute, that number looks familiar.* She took out her phone and checked the recent calls list. She had three missed calls from a number that ended the same way. The area code wasn’t the standard one for the city, but the newer one that had just been introduced. *Idiots*. There was a voicemail too. *Ugh. Who leaves voicemails anymore?*\n\nThe light changed and a car behind her honked. Susan growled menacingly. Marie hopped off her bike and moved to the sidewalk.\n\n\\*\\*\\*\n\nIn the cemetery, Steve was sitting atop a mausoleum. He had worked his pre-roll down to a roach and was starting to feel like himself again. *Embalming time, embalming time*, he hummed.\n\n\\*\\*\\*\n\nMarie couldn’t remember her voicemail passcode. It had been a while. She had one more attempt left before she would be locked out for five minutes. The fog had grown denser and fat drops of rain began to fall noisily. Marie pulled up Susan’s hood to protect her from the rain. *Oh, duh. Susan!* Marie typed in 78726#. “You have one new voicemail,” the machine said. “Press 1 to listen now. Press 2 for more options. Press 3 to repeat this menu.” Marie pressed 1.\n\n\\*\\*\\*\n\nSteve flicked the end of the joint into a nearby rosebush and jumped to the ground. He skipped happily across the street.\n\n“Quit skipping,” said the driver. “You’re going to be the director one day and I’ll be goddamned if any son of mine gets a reputation for jollity. Act professional. Frown for once.”\n\nSteve rolled his eyes. “Dad. Ease up. This will be a fun one. We haven’t had anyone in such good shape for a while now.”\n\n“One hit of the marijuana and all your worries wash away, huh? I swear that drug’s no good for you.”\n\n“Weren’t you the one complaining about me being too nervous earlier? Make up your mind old man!”\n\n“Don’t ‘old man’ me! I’ll show you what an old man can do!”\n\n“Kidding, dad. Jeez.”\n\n“Alright, son. Help me get this out then. We need to keep to schedule.”\n\n\\*\\*\\*\n\n“Hello. This is Mack O’Donnell Junior calling on behalf of Mack O’Donnell’s Family Funeral Home EXPRESS: *Die tomorrow, get buried today!* I’m calling today to confirm an express funeral you or a loved one recently scheduled for Thomas Velmittle for this coming Sunday. In order to cancel, please call us back promptly at 467-0311. That’s 467-0311. Have a nice day!”\n\nMarie dropped her phone. “They’ve got the wrong man, Susan!” she cried.\n\nShe grabbed her bike in one hand and her cat in the other and raced madly to the funeral home.\n\nSteve and the driver, his father, the funeral director, Mack O’Donnell, Jr., or “Junior” to his friends, had just then maneuvered the coffin out of the hearse. Without slowing down, Marie let go of her bike, propelling it towards Steve. At the same time, she brandished the cat at the older man. Susan growled menacingly, right on cue. Startled, both men dropped the coffin, causing its lid to pop open.\n\nTomás, awake again, decided that he had died. He began to scream, unintelligibly at first and then more clearly for his dear old cat and dear young wife. Together, Marie and Steve shut the coffin’s lid.\n\n“Listen here,” Marie began. “You’ve got the wrong man. That’s my husband in that box. His name is Tomás Belvittle. You’ve got an appointment for *Thomas Velmittle*. I don’t know who this Thomas fellow is, but I’d like my husband back please.”\n\nMack O’Donnell, Jr. muttered something to himself and pulled out a small black appointment book. He flipped through it slowly, muttering all the while. “Oh,” he said. “Hmm. I see. Well, I’m afraid we made a terrible mistake. That was quite the mix-up. Thomas’s appointment isn’t until next week anyway. My sincerest apologies.”\n\n“We’re terribly sorry for any pain and suffering we may have caused. You have our deepest sympathies,” added Steve with the deadly conviction of a true funeral home director. He winked at his father, who nodded approvingly.\n\n“Well,” said Marie, not entirely convinced. She opened the coffin and helped Tomás out. He stopped screaming; they embraced tenderly.\n\nThe rain picked up again. Mack O’Donnell, Jr. glanced upwards. *Shame*, he thought, *would have been a great day for a funeral.* He turned to the re-united couple. “Can we at least offer you a ride home?”\n\nTomás was in no state to take the bus alone, so Marie nodded. They loaded the coffin, bike and cat into the hearse and climbed in.\n\nIt was a quiet ride.\n\nMarie, Tomás and Susan got out and Marie thanked them for the ride.\n\n“Oh, and,” she said, turning back, “I don’t give a damn how “EXPRESS” your funerals are. You can’t go around murdering people.”\n\nMack and Steve nodded solemnly.\n\n“And one more thing, too! Put your full phone number on your billboard. There’s certainly enough room for it!”\n\n## Epilogue\n\nMoved by her love, aided by her excellent observational skills, helped by her dear cat and assisted by no small amount of luck, Marie Belvittle was able to rescue her husband from a gruesome and painful death at the hands of Mack and Steve O’Donnell of Mack O’Donnell’s Family Funeral Home EXPRESS. Yet not all endings are as happy.\n\nMary Velmittle, Thomas’s sister, was of no help whatsoever when Thomas was kidnapped, embalmed and buried alive the following week.\n\nTwo weeks later, Susan miscarried. The veterinarian thought it might have been caused by too much stress.\n\nSteve O’Donnell was caught smoking pot in the cemetery and sentenced to life in prison. Mack, distraught over the fact that no one would be able to continue the family business, hung himself. His daughter, Jessica, continued the family business anyway. She went on to arrange the express funerals of hundreds more people, whether they were ready for it or not.\n\nTomás, perhaps shaken by his near-death experience, started to notice the little details of life, like his wife’s stockpile of pregnancy tests. Tomás was infertile ever since an operation years prior and he knew they didn’t work on cats, so why would Marie need to know if she was pregnant? There were other details, too: the lack of a wedding ring on Marie’s finger, boxers that weren’t his in the laundry, a strange man in their bed. He filed for divorce. A judge granted Marie joint-custody of Susan, whose once peaceful life was upended by constantly moving back and forth between homes. She was never the same.\n    ';
var $author$project$Generated$ThinkLikeASquirrel$content = '\n\n_Wisdom from our tree-dwelling rodent friends_\n\n###### ![a squirrel](assets/squirrel.jpg)\n\nMy sister saw a bumper sticker today that said "Think like a squirrel."\nNaturally, she asked me what I thought it meant. Here\'s what I\'ve got.\n\n1. Plan ahead. Meal prep for the week and bury leftovers in the yard.\n2. Often, the best way to gain perspective on a situation is to climb a tree, e.g. when you\'re lost in the woods or mad at your boss.\n3. Stop talking so much. Sometimes what you need to say is just a few squeaks.\n4. Stop thinking so much. I\'ve never seen a squirrel ruminate.\n5. Change your mind frequently and without hesitation, especially in the middle of the street.\n    ';
var $author$project$Generated$Upsilon$content = '\n\n*February 10, 2022*\n\nALBANY, NY — As we near the second* anniversary of the start of the pandemic in the United States, Americans are at long last beginning to feel hope again. Vaccines have drastically reduced death rates;  the worst of the Omicron wave seems to be behind us; mask mandates are beginning to be lifted; at-home tests are widely available; things might be okay. In other news, a new variant of concern, designated Upsilon, is being closely monitored by the World Health Organization (WHO) as it rampages through South America.\n\nNew York Governor Kathy Hochul recently ended the state’s mask-or-vaccine requirement, providing a strong example for other liberal totalitarian democratic regimes across the country to follow suit. This action and other plans to lift COVID-19 restrictions elsewhere is kindling in many citizens a funny feeling they once recognized as hope.\n\nAlso, the surviving members of the WHO team in Bolivia have stressed that the new variant is deadlier than the original and more contagious than Omicron.\n\n“I was going for a walk yesterday and I passed someone in the street and I had this weird like sort of warm and like fuzzy feeling in my stomach and it made me smile. I don\'t really know why,” reported one slightly confused New Yorker, who, for the first time in two* years, had perceived another human as something other than a vector of disease. “That feeling is what we used to call hope,” our reporter helpfully explained.\n\nSome readers may recall experiencing such a feeling at the end of the first, second, third or fourth wave of the novel coronavirus, or maybe when Joe Biden won the election, or maybe after receiving their first, second or third vaccine. This time, “something\'s different," according to Professor Sandra Jones of Columbia University\'s School of Epidemiology and Self-Deception.\n\n“Other hopes have indeed flown before, yet we\'re now at a uniquely opportune moment in our journey through this pandemic as a nation, as a state, and as individuals. We\'re vaccinated and boosted, we have effective therapeutics, our hospitals are ready, our health care system is more resilient than ever, our immune systems are more resilient than ever, case rates are plummeting. I have strong reason to believe that the pandemic is almost over, and for good this time,” she stated.\n\nMeanwhile, the government of Chile is asking citizens who become infected with Upsilon to avoid the overrun hospitals and instead escort themselves to the nearest mass grave site.\n\n“I don\'t know what came over me, but I just made concrete plans to see a friend in three weeks," said another confused New Yorker. “I\'m even thinking about a vacation! I\'ve heard the Andes are nice this time of year."\n\n⬛\n\n---\n\n\\* *Correction: An earlier version of this article incorrectly calculated the number of years since 2020 as eight.*\n    ';
var $author$project$Generated$Vulture$content = '\nLonny, the giraffe, was worried about lightning. Lightning, Lonny knew, seeks the shortest path to the ground, and therefore tends to strike the tallest thing around. Lonny, being a giraffe, was often the tallest thing around. This worried him.\n\nAnd so, when thunderclouds appeared in the distance, Lonny would bend his great long neck to the ground and wait anxiously for the storm to pass. Lonny was kind and friendly and generally well-liked, but when storms came and Lonny put his head down in the grass and stood quivering, unable to move or engage in friendly conversation, it made the other giraffes nervous and confused. In their nervousness and confusion, they would tease him and then run off to play in the pool or with large metal poles which they would hold in their mouths and compete to see who could raise their pole the highest. The other giraffes did not understand lightning.\n\nSo it was that on this particular Tuesday, Lonny found himself quite alone in the savannah being pelted by fat, heavy raindrops, as thunder rumbled all around, face-to-face with a crocodile.\n\n "Hello," said Lonny.\n\n "Hello," said Al. "I\'m Al."\n\n "Pleased to meet you," said Lonny, who was in no way going to be so foolish as to share his name with any crocodile, and especially not this one who had scuttled up quite sneakily, and especially not in this rain, and especially, especially not on a Tuesday.\n\n"Likewise," said Al, well aware that Lonny had violated the customary exchanging-of-names part of a civilized introduction, but content enough to read Lonny\'s name tag. It was just for lunch, after all.\n\n"Lonny, I need your help," Al continued. "In an attempt to better understand the principles governing lightning, I was flying my kite just now in the storm. Alas, the kite has become stuck in the branches of that tall tree. My small crocodile neck prevents me from reaching it. Lonny, in the name of science, would you be so kind as to retrieve my kite?"\n\nLonny cautiously lifted his head an inch off the ground to look at the tree. Indeed, there was a kite tangled high in its boughs, flapping in the wind wildly, yet weakly, rather like a lanky animal flailing in quicksand. Al\'s story seemed plausible, but crocodiles, Lonny knew, are a shifty bunch. He needed more details.\n\n "What\'s a crocodile studying electromagnetism for? Besides, don\'t you know that Benjamin Franklin did the whole kite thing already?"\n\nThis is one well-educated giraffe, thought Al. The gig was up.\n\n "I\'m no crocodile!" he said as he peeled off his fake pointed snout, revealing a rounded one underneath. The name Al, was, of course, short for Alligator.\n\n "Aaaahhh," exclaimed Lonny. His fear of lightning was suddenly replaced by his fear of alligators. Lonny\'s neck sprung upright.\n\nUnfortunately, his head\'s rapid change in altitude caused the blood to drain from his brain, and Lonny, overcome with dizziness, toppled over into the adjacent pool of quicksand. As he sank, he writhed wildly, yet weakly, rather like a certain kite.\n\nThe quicksand had just reached his shoulders when a blast of lightning cracked nearby, so close that Lonny could feel its heat. He yelped and ducked his head. Unfortunately, the ducking turned into more of a plunging, a plunging into the oozing quicksand, which happily swallowed Lonny whole.\n\nAl, feeling dejected about his unconvincing disguise, his failed - and apparently unoriginal - science experiment, and his now absent, deceased, and swallowed-whole lunch plan, scuttled home, dropped out of his PhD program, and succumbed to alcoholism, just as his mother had always feared.\n\nNow that the rain had stopped, the other giraffes, meanwhile, were being devoured by a group of vultures who were beginning to wonder if they could maybe capture the wild power of lightning and channel it into some sort of cooking apparatus with a timer, heating coils, and different crispiness settings. Charred giraffe tastes so much better.\n    ';
var $author$project$Generated$WayOut$content = '\n\nI can\'t leave the beach. That much is clear. There\'s no boardwalk, sea-wall, or parking lot to turn to. Or run to. There is nothing behind me. It\'s a nothingness that is not void or null, or even nothing. It is unrendered, unimagined. It is not. There\'s nowhere to run.\n\nEach wave swells, curls, and crashes onto the sand, steadily inching closer. As the shore shrinks before me, the slope of the beach grows steeper. Soon, I will lose my footing and slide down the wall of sand to be swallowed whole by the unrelenting sea.\n\nTo my left and right lie two jagged jetties protruding far out into the dark swirling waters, like the feelers of some horrid bug. The ocean slams into the jetties\'s pointed rocks, dislodging mollusks and crushing crabs. The water froths and tumbles to shore.\n\n "Come on!" shouts my sister. She bobs up and down and dives under a thrashing crest and pops up on a swell, waving for me. "Come on!" And under again, twisting wretchedly in a cross current. And up again, waving, not for help, but for me, urgently. "Come on!"\n\nWhat does she see?\n\nThe waves lap closer and claim an abandoned bucket. The sand shifts beneath me. I scramble up the slope. I can no longer stand. I pull my feet under me, crouching, wound like a spring, but too terrified to spring anywhere. Where\'s Emma? A mountain of water breaks and races toward me, anointing my foot. Where\'s Emma? The water\'s cold shocks me. There! A flash of red hair, a pale arm. "Come on!" she waves.\n\nWhat does she see?\n\nThe waves break closer and closer. I feel their spray. They arch and curl and spit on me. The jetties are nearly gone. Devoured.\n\nDon\'t look back. Don\'t look back. Don\'t look back.\n\nI breathe deep, once, twice. I time the breaks, leap up, and, pounding on the damp sand, ankle deep, knee deep, no ankle deep again as the water recedes, priming for the next punch, I plunge headlong into Poseidon\'s halls.\n\n "Gah!" I rise, sputtering. I am towed under, tumbled and twisted. My knee ricochets off the sandy floor. I struggle upwards and outwards, towards my sister.\n\nDon\'t look back. Don\'t look back.\n\nI\'ve almost reached her. She kicks out farther, ducks, dives, and turns. She waves. "Come on!"\n\nUp and down and up again I go. Wiping water from my eyes, I catch her face. She looks back at me, no, behind me. She\'s laughing now, happy, mirthful. Confused, I struggle towards her. She swims away.\n\nDon\'t look back. What does she see? No. Don\'t look back. Look back. Look back.\n\nI turn. The beach is gone, eaten by the sea. The next wave swells. Up, I soar, up and up. It curls, seems to pause, considering for but a moment if it should or should not. Decision made, it does. It and I crash into the nothingness, swallowing the void, its unthought streets, its unimagined homes. I am drowned, flattened, torn, dissolved. The red bucket clatters to a halt against a sign: No Parking.\n\n    ';
var $author$project$Generated$What$content = '\n\nThis is, to reiterate the subheader, where I scream\ninto the void. I used to do this on my notes app, but then I\nrealized that I could copy and paste the things on my notes app\ninto a file on my computer, format the file into a webpage, and\nbother you, dear reader, with my content. Enjoy!\n    ';
var $author$project$Generated$Who$content = '\n\nI am Willy Unterkoefler. Unless otherwise noted, I write the things on here, which explains their high quality. I also designed this website, which explains its... quality. If you want to know more about me, please read everything I post here and psychoanalyze it. To help you get started, the giraffe is really a metaphor for my healthy relationship with my father and the lightning is a stand-in for my three horrible years of speech therapy in elementary school. Despite my years of speech therapy, you should know that I still pronounce water as "woodder". The rest of my life and personality can be derived.\n    ';
var $author$project$Generated$XcuseMe$content = '\n\n###### ![The old XcuseMe logo for android](assets/xcuseme/play-store-logo.png)\n<caption text="The old XcuseMe logo that I made for the Play store. I stopped capitalizing the c at some point." />\n\nI have worked on XcuseMe on and off for about two years now. I have very little to show for it: there are several bugs, there are no advanced features, there are very few basic features, there is no user base and there are no venture capitalists at my door (yet). But all is not in vain. I learned a lot about myself and about modern software development, some of which I will share here.\n\n## Background\n\nDuring the beginning of the pandemic, I downloaded a home workout app, called something like “30 Day Full Body Workout.” You were supposed to do one workout a day for 30 days. It took me four months to complete it. Some days I ran or biked or hiked or did some other exercise. Other days, it was raining or I was hungover or I had to watch *Tiger King* instead. I wanted to know where those four months had gone. I needed some way to track my various exercises — and my excuses! Thus, XcuseMe was born: “Exercise tracking for real people.”\n\nI envisioned it as a Strava for sane people, with optional social sharing and integrations with Garmin for exercises and GrubHub for excuses. I imagined a sophisticated ML algorithm that would offer non-judgmental advice and encouragement, like “Your last eight excuses have been about waking up too late. Maybe try exercising in the evening instead, you doorknob.”\n\nToday, it is just a two-table CRUD app, but I use it almost every day. I can tell you exactly how many miles I ran in February, how long my cold lasted in March or how many times in the last year I was planning on working out right after work, but was too hungry  and then too full and then too high to do anything more than ten push-ups and one downward dog before bed (thirteen).\n\nYes, I could have used Excel for this or even just a notebook and a pen. But coding and learning new things is fun. Also, I still want to add some fancy algorithms one day, which would be a bit harder to do on a notebook.\n\n## Version 1\n\n###### ![A calendar with excuses marked in red and exercises in green](assets/xcuseme/calendar.jpg)\n<caption text="Disclaimer: this is not actually a screenshot of version 1. It\'s version 4." />\n\nInitially, I wanted XcuseMe to a) work offline, b) send daily reminder notifications and c) be optimized for mobile devices. Due to these “requirements,” I decided to make an app. Back then, I used an Android while most of my friends used iPhones. I would later guilt them into being beta testers, so I needed it to be cross-platform. I had read somewhere that React Native is slow, so I excitedly decided to learn how to use Flutter.\n\nV1 turned out pretty okay. The Flutter docs were good. The development experience was good. Deploying to Google’s Play Store was okay. Deploying to Apple’s App Store was hell. I had to rope my Mac-using roommate into the whole endeavour to test, build and sign the app. There was a whole debacle trying to sign into my old Apple account without access to any of my old Apple products. They also have this weird beta release system that I submitted my app to, but the review process took so long that I released the app publicly instead. I still haven’t been approved for the beta system.\n\nAnyway, I got ten or so of my friends to use it for a week or so. I conducted user research interviews and learned a lot. Some people wanted a social feed, some would hate a social feed. Some wanted to categorize their exercises, others wanted to track other goals besides exercising. Almost everyone wanted a daily reminder.\n\nThe main lesson that I learned was that the app was too damn simple. Very few people had any criticism to share about the app or user experience itself. All their feedback focused on things that were missing. As someone who doesn’t take criticism well, this was tough to hear. I had poured hours and hours and hours into this, from designing the flow and layout to learning a new language to wrangling with our tech overlords’ deployment platforms. It was my child and it was perfect. How dare you suggest it needs more features! Don’t you understand how complex everything is!\n\n## Version 2\n\n###### ![A user interface for adding an excuse with the text of "Saw a cloud in the distance"](assets/xcuseme/add-excuse.png)\n<caption text="Sometimes the weather outside is frightful." />\n\nAfter the incredibly successful beta release and enlightening user feedback, I got to work on V2. Well, I may have taken a long break to brood. Regardless, I realized that any of these fancy advanced features would need a backend. (V1 used only on-device storage.) I decided to use Google’s Firebase and Firestore cloud platform things because they were tightly integrated with Flutter, offered offline support by default, and supported sending notifications\n\nThis refactor started out pretty well. I built some pretty snazzy signup and login flows. But the documentation definitely became more confusing. I felt like I was constantly jumping between Firestore docs and Flutter docs and Flutter-Firestore docs. Then Flutter 2 was released. It touted that it now had null safety. I like null safety,  so I spent a couple weekends trying to upgrade all my dependencies. This did not go smoothly at all. I feel like I was wasting my time trying to keep up with Google’s release cadence. I also feel like not building Dart with null safety from the very beginning was a massive oversight. Whatever.\n\nMeanwhile, I had a bug. The details are unimportant, but it was essentially a state management problem. I’m a big fan of Elm and The Elm Architecture for managing state. I attempted to replicate this pattern in Flutter by using “Stateless Widgets” everywhere possible and using Streams and Providers and Consumers to pass around state between child Widgets. This mostly worked out, until I needed a Widget with a text box. A text box in Flutter needs to be inside a Stateful Widget to keep track of the state of the text input. I was also passing an EventStream into this Widget, but since it was Stateful, it was not re-rendering when the stream was updated, meaning that this widget always had an empty list of events.\n\nA smarter person might have figured it out or told me to use some other state management strategy, but I’m an idiot and prefer to be treated that way when I’m writing code. Flutter’s Stateless and Stateful Widget dichotomy is like colored async/sync functions, but 100 times worse.\n\n(After this attempted debugging, I began to understand why so many Android apps are so frustratingly buggy. See, for example, the one where the keyboard won’t show up in Google’s texting app.)\n\nSo I was frustrated with this bug, bored by the null safety upgrade mess, and daunted by having to go through the release process again. I, if you will, fluttered away.\n\n## Version 3\n\n###### ![A pie chart showing the proportion of excuses and exercises](assets/xcuseme/pie-chart.jpg)\n\nLike any savvy entrepreneur, I decided to re-write the entire thing, this time as a web application. I would lose the built-in offline support, but I was the only user at this point and I never really needed to use the app when I was deep in the woods. I would also lose convenient notifications, but I figured not paying Apple’s $125 annual developer fee would be worth it. I would use Elm for the front-end, of course, but I shopped around a bit for backends. After some deliberation, I decided to give Phoenix a shot. It seemed easy and powerful enough and it would be cool to learn, I thought.\n\nI built V3 to be roughly on par with V1 and then didn’t touch it for months and months. I was really dragging my feet about re-creating the signup and login flows. I kept thinking that I should abandon the Phoenix framework and use Django instead to get that stuff out of the box. I wasn’t all too impressed with Phoenix in general and had no use for its killer LiveView feature. But I also know Django and Python fairly well, and I had accepted that if this side project wasn’t going to make me a millionaire, I should at least use it to learn new technologies. That’s what would keep me interested and motivated. Phoenix clearly didn’t, though I have nothing really bad to say about it.\n\n## Version 4\n\n###### ![A wordcloud showing the author\'s most frequent excuses](assets/xcuseme/wordcloud.jpg)\n<caption text="I\'m thinking about supporting frequent n-grams here too, but it\'s also fun to figure out why certain words like \'took\' appear a lot. Hint: \'nap\' is about the same size." />\n\nMonths later, I again re-wrote the entire application, this time using the [Haskell web framework IHP](https://ihp.digitallyinduced.com/) on the backend. I kept the front-end in Elm, but re-wrote it to not be a Single Page App because I had learned in other projects that managing routing on the client-side is a pain in the butt.\n\nIHP has been fantastic. The documentation is solid, it’s easy to manage dependencies with Nix, I found a great tutorial on integrating with Elm, and deploying to IHP Cloud was a breeze (especially relative to the App Store). I encountered one problem with setting up a custom subdomain, but after reporting it, it was fixed within a couple of days, with a friendly reply from the CEO (Google could never).\n\nOn the downside, I have had to fight against the framework in some places in order to write the front-end almost entirely in Elm. IHP encourages you to use their hsx language and auto-generated forms rather than a separate front-end. I respect that design decision, but after I discovered elm-ui, I refuse to write CSS in my free time. My decision to lean heavily into Elm meant that there were some issues with redirects and rendering JSON responses, but I’ve managed.\n\nBest of all, I’m finally learning Haskell and I’m loving its type safety and idiot-proofness. Having a compiler tell me what stupid bugs I’ve written is so relaxing. When my code eventually compiles, I am very confident that it will work. Likewise with Elm, of course.\n\n## Conclusion\n\nI still don’t have notifications or a social feed or ML algorithms, but I do have:\n\n- one very dedicated daily active user\n- experience with three new languages and three new frameworks\n- A pretty cool word cloud of my excuses\n- No stupid Stateful Widgets\n- No CSS\n- One long blog post\n- Happiness?\n\nIf you’ve read this far, you’re now legally obligated to log your exercise and excuses every day on XcuseMe ([https://xcuseme.ihpapp.com](https://xcuseme.ihpapp.com)). Enjoy!\n    ';
var $author$project$Generated$Zip$content = '\n\nZip. Lou re-zipped the tent flap. He paused, waiting for his eyes to adjust to the dark. He walked carefully toward the edge of camp and into the woods. The leaves crunched underfoot. His face caught a spiderweb and he quickly swiped the sticky fibers away. Gross. There was something crawling up his bare arm. He brushed it away and shivered. *Relax.* Just a spider.\n\nZip. Lou relieved himself. Zip. And returned back to camp, guided by the glow of dying embers in the fire pit.\n\nZip. Jill turned in her sleep and murmured softly. "Just me," whispered Lou. He slipped back into the tent. Zip. And zipped the flap back up. Lou never left it open for long. The spiders might get in.\n\nZip. Lou sealed himself snugly in his sleeping bag. Warm, cozy, and entirely content, he drifted off to sleep.\n\nZip. The tent flapped opened. "Jill?" said Lou, still half-asleep.\n\n"Just me," said the voice.\n\nJill turned in her sleep and murmured again.\n\n"Just me," the voice whispered.\n\nZip. The tent flap closed.\n\n"Jill? Jill wake up!" pleaded Lou. His flashlight was just to his right, but he needed to get his arm out of the sleeping bag first. He floundered for the zipper, but couldn\'t find it. "Jill! Jill wake up!"\n\nJill woke up.\n\n"Good night, Jill," said the voice.\n\nShe began to scream, but, to her surprise, her mouth would not open. The hand reached down slowly toward her face. Lou writhed helplessly in his bag.\n\nZip. Unzippered, Jill\'s lip sprang apart. She screamed and she screamed and she --\n\nZip. The sheriff closed the body bag and heaved it into the truck. "Dispatch, this is the sheriff. We\'ve got a double homicide out here."\n\nZip. Lou found the zipper.\n    ';
var $author$project$PostList$all = _List_fromArray(
	[
		_Utils_Tuple2(
		'hell',
		{
			c9: $author$project$Generated$Hell$content,
			de: $elm$core$Maybe$Just(
				{df: 28, dN: 9, eQ: 2016}),
			dh: 'My personal Dantean hell',
			d9: true,
			eH: 'Circle Three and One Half'
		}),
		_Utils_Tuple2(
		'four-stars',
		{
			c9: $author$project$Generated$FourStars$content,
			de: $elm$core$Maybe$Just(
				{df: 14, dN: 11, eQ: 2019}),
			dh: 'A review of reviews',
			d9: true,
			eH: '4 Stars'
		}),
		_Utils_Tuple2(
		'vultures-envision-a-toaster',
		{
			c9: $author$project$Generated$Vulture$content,
			de: $elm$core$Maybe$Just(
				{df: 4, dN: 2, eQ: 2020}),
			dh: 'A story about a giraffe',
			d9: true,
			eH: 'Vultures Envision a Toaster'
		}),
		_Utils_Tuple2(
		'fedex',
		{
			c9: $author$project$Generated$Fedex$content,
			de: $elm$core$Maybe$Just(
				{df: 6, dN: 3, eQ: 2020}),
			dh: 'A post-modern Odyssey',
			d9: true,
			eH: 'Incorrect Address'
		}),
		_Utils_Tuple2(
		'two-ways-out',
		{
			c9: $author$project$Generated$WayOut$content,
			de: $elm$core$Maybe$Just(
				{df: 14, dN: 7, eQ: 2020}),
			dh: 'There was no way out',
			d9: true,
			eH: 'Two Ways Out'
		}),
		_Utils_Tuple2(
		'colonial-woman',
		{
			c9: $author$project$Generated$Colonial$content,
			de: $elm$core$Maybe$Just(
				{df: 24, dN: 7, eQ: 2020}),
			dh: '... or househusband',
			d9: true,
			eH: 'Getting in Touch with My Inner Colonial Housewife'
		}),
		_Utils_Tuple2(
		'raspberries',
		{
			c9: $author$project$Generated$Raspberry$content,
			de: $elm$core$Maybe$Just(
				{df: 27, dN: 7, eQ: 2020}),
			dh: 'It\'s about a box of raspberries',
			d9: true,
			eH: 'Raspberries'
		}),
		_Utils_Tuple2(
		'lost-and-not-found',
		{
			c9: $author$project$Generated$Lost$content,
			de: $elm$core$Maybe$Just(
				{df: 7, dN: 8, eQ: 2020}),
			dh: 'A scientific approach',
			d9: true,
			eH: 'How to get lost and not find yourself'
		}),
		_Utils_Tuple2(
		'flicker',
		{
			c9: $author$project$Generated$Flicker$content,
			de: $elm$core$Maybe$Just(
				{df: 13, dN: 8, eQ: 2020}),
			dh: 'Cleanliness is next to godliness',
			d9: true,
			eH: 'The Importance of A Well Made Bed'
		}),
		_Utils_Tuple2(
		'metaphor',
		{
			c9: $author$project$Generated$Metaphor$content,
			de: $elm$core$Maybe$Just(
				{df: 19, dN: 8, eQ: 2020}),
			dh: 'A love story',
			d9: true,
			eH: 'There\'s Other Metaphors in the Sea'
		}),
		_Utils_Tuple2(
		'bells',
		{
			c9: $author$project$Generated$Bell$content,
			de: $elm$core$Maybe$Just(
				{df: 27, dN: 8, eQ: 2020}),
			dh: 'A parable of sorts',
			d9: true,
			eH: 'For Who Tolls the Bell'
		}),
		_Utils_Tuple2(
		'zip',
		{
			c9: $author$project$Generated$Zip$content,
			de: $elm$core$Maybe$Just(
				{df: 16, dN: 10, eQ: 2020}),
			dh: 'A scary story to read with your brightness all the way down',
			d9: true,
			eH: 'Zip'
		}),
		_Utils_Tuple2(
		'recipe',
		{
			c9: $author$project$Generated$Recipe$content,
			de: $elm$core$Maybe$Just(
				{df: 26, dN: 10, eQ: 2020}),
			dh: 'Yum',
			d9: true,
			eH: 'A Family Recipe'
		}),
		_Utils_Tuple2(
		'squirrel',
		{
			c9: $author$project$Generated$Squirrel$content,
			de: $elm$core$Maybe$Just(
				{df: 10, dN: 11, eQ: 2020}),
			dh: 'From the perspective of a squirrel',
			d9: true,
			eH: 'A Critique of the American Healthcare System'
		}),
		_Utils_Tuple2(
		'arnold',
		{
			c9: $author$project$Generated$ForArnold$content,
			de: $elm$core$Maybe$Just(
				{df: 26, dN: 12, eQ: 2020}),
			dh: 'This one is for Arnold',
			d9: true,
			eH: 'For Arnold'
		}),
		_Utils_Tuple2(
		'orange',
		{
			c9: $author$project$Generated$ClockworkOrange$content,
			de: $elm$core$Maybe$Just(
				{df: 2, dN: 1, eQ: 2021}),
			dh: 'All rights reserved',
			d9: true,
			eH: 'A Clockwork Orange (Revised and Re-imagined for Younger Audiences)'
		}),
		_Utils_Tuple2(
		'cleveland',
		{
			c9: $author$project$Generated$Cleveland$content,
			de: $elm$core$Maybe$Just(
				{df: 30, dN: 1, eQ: 2021}),
			dh: '',
			d9: true,
			eH: 'New Cleveland Mascot More Geographically Accurate, Racist'
		}),
		_Utils_Tuple2(
		'simple-trick',
		{
			c9: $author$project$Generated$SimpleTrick$content,
			de: $elm$core$Maybe$Just(
				{df: 31, dN: 1, eQ: 2021}),
			dh: 'You won\'t believe it!',
			d9: true,
			eH: 'Realtors Hate Him! This One Simple Trick Will Make You Think You\'ve Moved, But You Haven\'t!'
		}),
		_Utils_Tuple2(
		'crust',
		{
			c9: $author$project$Generated$Crust$content,
			de: $elm$core$Maybe$Just(
				{df: 7, dN: 2, eQ: 2021}),
			dh: 'Another love story',
			d9: true,
			eH: 'The Importance of Crust'
		}),
		_Utils_Tuple2(
		'helmet-salad',
		{
			c9: $author$project$Generated$HelmetSalad$content,
			de: $elm$core$Maybe$Just(
				{df: 28, dN: 4, eQ: 2021}),
			dh: '\"Uh yeah can you just put it in my helmet\"',
			d9: true,
			eH: 'Eco-Warrior Cyclist Eschews Single-Use Salad Bowls'
		}),
		_Utils_Tuple2(
		'rambling-1',
		{
			c9: $author$project$Generated$Rambling1$content,
			de: $elm$core$Maybe$Just(
				{df: 5, dN: 5, eQ: 2021}),
			dh: 'Or why I haven\'t liked your Instagram photo',
			d9: true,
			eH: 'Rambling Reflections Part 1'
		}),
		_Utils_Tuple2(
		'silly-hat-ceremony',
		{
			c9: $author$project$Generated$SillyHatCeremony$content,
			de: $elm$core$Maybe$Just(
				{df: 27, dN: 5, eQ: 2021}),
			dh: 'Look, Mom! They gave me a hat!',
			d9: true,
			eH: 'The Silly Hat Ceremony'
		}),
		_Utils_Tuple2(
		'room-for-let',
		{
			c9: $author$project$Generated$RoomForLet$content,
			de: $elm$core$Maybe$Just(
				{df: 23, dN: 6, eQ: 2021}),
			dh: 'I\'m subletting a room in my apartment',
			d9: true,
			eH: 'Room for Let'
		}),
		_Utils_Tuple2(
		'modern-commerce',
		{
			c9: $author$project$Generated$ModernCommerce$content,
			de: $elm$core$Maybe$Just(
				{df: 22, dN: 8, eQ: 2021}),
			dh: 'Adventures in Refurnishing',
			d9: true,
			eH: 'Modern Commerce'
		}),
		_Utils_Tuple2(
		'facebook-radicalized-me',
		{
			c9: $author$project$Generated$Radicalized$content,
			de: $elm$core$Maybe$Just(
				{df: 4, dN: 11, eQ: 2021}),
			dh: 'How Zucc sucked me in',
			d9: true,
			eH: 'I Was Radicalized by Facebook and I Liked It'
		}),
		_Utils_Tuple2(
		'kkkfc-chicken',
		{
			c9: $author$project$Generated$Chicken$content,
			de: $elm$core$Maybe$Just(
				{df: 1, dN: 12, eQ: 2021}),
			dh: '\"It\'s okay to eat racist chickens\"',
			d9: true,
			eH: 'Vegans Endorse The Colonel\'s New KKKFC Sandwich'
		}),
		_Utils_Tuple2(
		'think-like-a-squirrel',
		{
			c9: $author$project$Generated$ThinkLikeASquirrel$content,
			de: $elm$core$Maybe$Just(
				{df: 30, dN: 12, eQ: 2021}),
			dh: 'Wisdom from our tree-dwelling rodent friends',
			d9: true,
			eH: 'Think Like a Squirrel'
		}),
		_Utils_Tuple2(
		'a-dangerous-hobby',
		{
			c9: $author$project$Generated$ADangerousHobby$content,
			de: $elm$core$Maybe$Just(
				{df: 13, dN: 1, eQ: 2022}),
			dh: 'Or, Ten First Date Doompadee Do\'s and Doompadee Don\'t\'s',
			d9: true,
			eH: 'A Dangerous Hobby'
		}),
		_Utils_Tuple2(
		'stupid-convos-1',
		{
			c9: $author$project$Generated$StupidConvo1$content,
			de: $elm$core$Maybe$Just(
				{df: 22, dN: 1, eQ: 2022}),
			dh: 'I struggle to receive a food delivery',
			d9: true,
			eH: 'Stupid Conversations Part 1'
		}),
		_Utils_Tuple2(
		'stupid-convos-2',
		{
			c9: $author$project$Generated$StupidConvo2$content,
			de: $elm$core$Maybe$Just(
				{df: 28, dN: 1, eQ: 2022}),
			dh: 'I struggle to buy avocados',
			d9: true,
			eH: 'Stupid Conversations Part 2'
		}),
		_Utils_Tuple2(
		'hope-and-upsilon',
		{
			c9: $author$project$Generated$Upsilon$content,
			de: $elm$core$Maybe$Just(
				{df: 10, dN: 2, eQ: 2022}),
			dh: '',
			d9: true,
			eH: 'Long Forgotten Feeling of Optimism and Upsilon Variant Begin to Emerge'
		}),
		_Utils_Tuple2(
		'bipartisan',
		{
			c9: $author$project$Generated$Bipartisan$content,
			de: $elm$core$Maybe$Just(
				{df: 2, dN: 3, eQ: 2022}),
			dh: 'Compromise at last',
			d9: true,
			eH: 'Bipartisan Legislation Criminalizes Abortion, But Exempts EV Drivers'
		}),
		_Utils_Tuple2(
		'roommate-agreement',
		{
			c9: $author$project$Generated$RoommateAgreement$content,
			de: $elm$core$Maybe$Just(
				{df: 18, dN: 3, eQ: 2022}),
			dh: 'Attn.: My Roommates',
			d9: true,
			eH: 'Roommate Agreement'
		}),
		_Utils_Tuple2(
		'tech-support',
		{
			c9: $author$project$Generated$TechSupport$content,
			de: $elm$core$Maybe$Just(
				{df: 24, dN: 3, eQ: 2022}),
			dh: 'blah, blah, blah internet bad, or at least, not so good',
			d9: true,
			eH: 'On Technology'
		}),
		_Utils_Tuple2(
		'the-hearse',
		{
			c9: $author$project$Generated$TheHearse$content,
			de: $elm$core$Maybe$Just(
				{df: 2, dN: 4, eQ: 2022}),
			dh: 'A story about love, loss and redemption',
			d9: true,
			eH: 'The Hearse'
		}),
		_Utils_Tuple2(
		'silent-podcast',
		{
			c9: $author$project$Generated$SilentPodcast$content,
			de: $elm$core$Maybe$Just(
				{df: 8, dN: 5, eQ: 2022}),
			dh: 'A meditation journey for good sleep',
			d9: true,
			eH: 'Stop Reading This: A Silent Meditation Podcast'
		}),
		_Utils_Tuple2(
		'goose-question',
		{
			c9: $author$project$Generated$GooseQuestion$content,
			de: $elm$core$Maybe$Just(
				{df: 20, dN: 5, eQ: 2022}),
			dh: 'Unanswered.blog begins its quest for the Truth',
			d9: true,
			eH: '1 question science still can\'t answer'
		}),
		_Utils_Tuple2(
		'europe',
		{
			c9: $author$project$Generated$Europe$content,
			de: $elm$core$Maybe$Just(
				{df: 20, dN: 6, eQ: 2022}),
			dh: 'The parts you didn\'t think you didn\'t want to hear about',
			d9: true,
			eH: 'My Trip to Europe: The Insignificant Details'
		}),
		_Utils_Tuple2(
		'the-boys-and-amazon',
		{
			c9: $author$project$Generated$TheBoys$content,
			de: $elm$core$Maybe$Just(
				{df: 20, dN: 6, eQ: 2022}),
			dh: 'An amateur analysis',
			d9: true,
			eH: 'How \"The Boys\" Captures and then Completely Misses the Danger of Amazon'
		}),
		_Utils_Tuple2(
		'beantown',
		{
			c9: $author$project$Generated$Beantown$content,
			de: $elm$core$Maybe$Just(
				{df: 12, dN: 7, eQ: 2022}),
			dh: 'A political proposal for the prosperity of posterity',
			d9: true,
			eH: 'Building a Better Boston: A 3-Step Plan for Urban Superiority'
		}),
		_Utils_Tuple2(
		'xcuseme',
		{
			c9: $author$project$Generated$XcuseMe$content,
			de: $elm$core$Maybe$Just(
				{df: 14, dN: 8, eQ: 2022}),
			dh: 'What I learned from making and re-making an app',
			d9: true,
			eH: 'Notes on Building \"XcuseMe: Exercise tracking for real people\"'
		}),
		_Utils_Tuple2(
		'houseplant',
		{
			c9: $author$project$Generated$Houseplant$content,
			de: $elm$core$Maybe$Just(
				{df: 12, dN: 11, eQ: 2022}),
			dh: 'A letter to my shareholders',
			d9: true,
			eH: 'My houseplant isn’t dying; it’s right-sizing to better facilitate flexibility in anticipation of future macroeconomic trends'
		}),
		_Utils_Tuple2(
		'pete',
		{
			c9: $author$project$Generated$Pete$content,
			de: $elm$core$Maybe$Just(
				{df: 5, dN: 12, eQ: 2022}),
			dh: 'A fungal fable',
			d9: true,
			eH: 'Pete'
		}),
		_Utils_Tuple2(
		'hooked-mystery',
		{
			c9: $author$project$Generated$Hooked1$content,
			de: $elm$core$Maybe$Just(
				{df: 11, dN: 1, eQ: 2023}),
			dh: 'A murder mystery in the form of a five paragraph essay',
			d9: true,
			eH: 'Hooked: A Five Paragraph Essay Outline Murder Mystery'
		}),
		_Utils_Tuple2(
		'taken4',
		{
			c9: $author$project$Generated$Taken4$content,
			de: $elm$core$Maybe$Just(
				{df: 29, dN: 1, eQ: 2023}),
			dh: 'The thrilling new installment is out now! You can\'t watch it!',
			d9: true,
			eH: '\"Taken 4: Your Turn\" opens to empty theaters'
		}),
		_Utils_Tuple2(
		'hooked-solution',
		{
			c9: $author$project$Generated$Hooked2$content,
			de: $elm$core$Maybe$Just(
				{df: 31, dN: 1, eQ: 2023}),
			dh: 'The good detective\'s explanation of the evening\'s events',
			d9: true,
			eH: 'Hooked: A Narrative Explanation of the Murder Mystery'
		}),
		_Utils_Tuple2(
		'contact-me',
		{c9: $author$project$Generated$Contact$content, de: $elm$core$Maybe$Nothing, dh: '', d9: false, eH: 'Contact me'}),
		_Utils_Tuple2(
		'what-is-this',
		{c9: $author$project$Generated$What$content, de: $elm$core$Maybe$Nothing, dh: '', d9: false, eH: 'What is this?'}),
		_Utils_Tuple2(
		'who-am-i',
		{c9: $author$project$Generated$Who$content, de: $elm$core$Maybe$Nothing, dh: '', d9: false, eH: 'Who am I?'})
	]);
var $pzp1997$assoc_list$AssocList$D = $elm$core$Basics$identity;
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $pzp1997$assoc_list$AssocList$remove = F2(
	function (targetKey, _v0) {
		var alist = _v0;
		return A2(
			$elm$core$List$filter,
			function (_v1) {
				var key = _v1.a;
				return !_Utils_eq(key, targetKey);
			},
			alist);
	});
var $pzp1997$assoc_list$AssocList$insert = F3(
	function (key, value, dict) {
		var _v0 = A2($pzp1997$assoc_list$AssocList$remove, key, dict);
		var alteredAlist = _v0;
		return A2(
			$elm$core$List$cons,
			_Utils_Tuple2(key, value),
			alteredAlist);
	});
var $pzp1997$assoc_list$AssocList$fromList = function (alist) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, result) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($pzp1997$assoc_list$AssocList$insert, key, value, result);
			}),
		_List_Nil,
		alist);
};
var $justinmimbs$date$Date$RD = $elm$core$Basics$identity;
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $elm$core$Basics$modBy = _Basics_modBy;
var $justinmimbs$date$Date$isLeapYear = function (y) {
	return ((!A2($elm$core$Basics$modBy, 4, y)) && (!(!A2($elm$core$Basics$modBy, 100, y)))) || (!A2($elm$core$Basics$modBy, 400, y));
};
var $justinmimbs$date$Date$daysBeforeMonth = F2(
	function (y, m) {
		var leapDays = $justinmimbs$date$Date$isLeapYear(y) ? 1 : 0;
		switch (m) {
			case 0:
				return 0;
			case 1:
				return 31;
			case 2:
				return 59 + leapDays;
			case 3:
				return 90 + leapDays;
			case 4:
				return 120 + leapDays;
			case 5:
				return 151 + leapDays;
			case 6:
				return 181 + leapDays;
			case 7:
				return 212 + leapDays;
			case 8:
				return 243 + leapDays;
			case 9:
				return 273 + leapDays;
			case 10:
				return 304 + leapDays;
			default:
				return 334 + leapDays;
		}
	});
var $justinmimbs$date$Date$floorDiv = F2(
	function (a, b) {
		return $elm$core$Basics$floor(a / b);
	});
var $justinmimbs$date$Date$daysBeforeYear = function (y1) {
	var y = y1 - 1;
	var leapYears = (A2($justinmimbs$date$Date$floorDiv, y, 4) - A2($justinmimbs$date$Date$floorDiv, y, 100)) + A2($justinmimbs$date$Date$floorDiv, y, 400);
	return (365 * y) + leapYears;
};
var $justinmimbs$date$Date$daysInMonth = F2(
	function (y, m) {
		switch (m) {
			case 0:
				return 31;
			case 1:
				return $justinmimbs$date$Date$isLeapYear(y) ? 29 : 28;
			case 2:
				return 31;
			case 3:
				return 30;
			case 4:
				return 31;
			case 5:
				return 30;
			case 6:
				return 31;
			case 7:
				return 31;
			case 8:
				return 30;
			case 9:
				return 31;
			case 10:
				return 30;
			default:
				return 31;
		}
	});
var $justinmimbs$date$Date$fromCalendarDate = F3(
	function (y, m, d) {
		return ($justinmimbs$date$Date$daysBeforeYear(y) + A2($justinmimbs$date$Date$daysBeforeMonth, y, m)) + A3(
			$elm$core$Basics$clamp,
			1,
			A2($justinmimbs$date$Date$daysInMonth, y, m),
			d);
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$time$Time$Apr = 3;
var $elm$time$Time$Aug = 7;
var $elm$time$Time$Dec = 11;
var $elm$time$Time$Feb = 1;
var $elm$time$Time$Jan = 0;
var $elm$time$Time$Jul = 6;
var $elm$time$Time$Jun = 5;
var $elm$time$Time$Mar = 2;
var $elm$time$Time$May = 4;
var $elm$time$Time$Nov = 10;
var $elm$time$Time$Oct = 9;
var $elm$time$Time$Sep = 8;
var $justinmimbs$date$Date$numberToMonth = function (mn) {
	var _v0 = A2($elm$core$Basics$max, 1, mn);
	switch (_v0) {
		case 1:
			return 0;
		case 2:
			return 1;
		case 3:
			return 2;
		case 4:
			return 3;
		case 5:
			return 4;
		case 6:
			return 5;
		case 7:
			return 6;
		case 8:
			return 7;
		case 9:
			return 8;
		case 10:
			return 9;
		case 11:
			return 10;
		default:
			return 11;
	}
};
var $author$project$Post$internalPostToPost = function (_v0) {
	var slug = _v0.a;
	var title = _v0.b.eH;
	var description = _v0.b.dh;
	var content = _v0.b.c9;
	var showOnHomePage = _v0.b.d9;
	var date = _v0.b.de;
	var newDate = A2(
		$elm$core$Maybe$map,
		function (d) {
			return A3(
				$justinmimbs$date$Date$fromCalendarDate,
				d.eQ,
				$justinmimbs$date$Date$numberToMonth(d.dN),
				d.df);
		},
		date);
	return _Utils_Tuple2(
		slug,
		{c9: content, de: newDate, dh: description, d9: showOnHomePage, eH: title});
};
var $author$project$Post$all = $pzp1997$assoc_list$AssocList$fromList(
	A2($elm$core$List$map, $author$project$Post$internalPostToPost, $author$project$PostList$all));
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Main$NotFound = {$: 4};
var $elm$url$Url$Parser$State = F5(
	function (visited, unvisited, params, frag, value) {
		return {_: frag, ad: params, X: unvisited, a2: value, ah: visited};
	});
var $elm$url$Url$Parser$getFirstMatch = function (states) {
	getFirstMatch:
	while (true) {
		if (!states.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var state = states.a;
			var rest = states.b;
			var _v1 = state.X;
			if (!_v1.b) {
				return $elm$core$Maybe$Just(state.a2);
			} else {
				if ((_v1.a === '') && (!_v1.b.b)) {
					return $elm$core$Maybe$Just(state.a2);
				} else {
					var $temp$states = rest;
					states = $temp$states;
					continue getFirstMatch;
				}
			}
		}
	}
};
var $elm$url$Url$Parser$removeFinalEmpty = function (segments) {
	if (!segments.b) {
		return _List_Nil;
	} else {
		if ((segments.a === '') && (!segments.b.b)) {
			return _List_Nil;
		} else {
			var segment = segments.a;
			var rest = segments.b;
			return A2(
				$elm$core$List$cons,
				segment,
				$elm$url$Url$Parser$removeFinalEmpty(rest));
		}
	}
};
var $elm$url$Url$Parser$preparePath = function (path) {
	var _v0 = A2($elm$core$String$split, '/', path);
	if (_v0.b && (_v0.a === '')) {
		var segments = _v0.b;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	} else {
		var segments = _v0;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	}
};
var $elm$url$Url$Parser$addToParametersHelp = F2(
	function (value, maybeList) {
		if (maybeList.$ === 1) {
			return $elm$core$Maybe$Just(
				_List_fromArray(
					[value]));
		} else {
			var list = maybeList.a;
			return $elm$core$Maybe$Just(
				A2($elm$core$List$cons, value, list));
		}
	});
var $elm$url$Url$percentDecode = _Url_percentDecode;
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === -1) {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === -1) {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$url$Url$Parser$addParam = F2(
	function (segment, dict) {
		var _v0 = A2($elm$core$String$split, '=', segment);
		if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
			var rawKey = _v0.a;
			var _v1 = _v0.b;
			var rawValue = _v1.a;
			var _v2 = $elm$url$Url$percentDecode(rawKey);
			if (_v2.$ === 1) {
				return dict;
			} else {
				var key = _v2.a;
				var _v3 = $elm$url$Url$percentDecode(rawValue);
				if (_v3.$ === 1) {
					return dict;
				} else {
					var value = _v3.a;
					return A3(
						$elm$core$Dict$update,
						key,
						$elm$url$Url$Parser$addToParametersHelp(value),
						dict);
				}
			}
		} else {
			return dict;
		}
	});
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$url$Url$Parser$prepareQuery = function (maybeQuery) {
	if (maybeQuery.$ === 1) {
		return $elm$core$Dict$empty;
	} else {
		var qry = maybeQuery.a;
		return A3(
			$elm$core$List$foldr,
			$elm$url$Url$Parser$addParam,
			$elm$core$Dict$empty,
			A2($elm$core$String$split, '&', qry));
	}
};
var $elm$url$Url$Parser$parse = F2(
	function (_v0, url) {
		var parser = _v0;
		return $elm$url$Url$Parser$getFirstMatch(
			parser(
				A5(
					$elm$url$Url$Parser$State,
					_List_Nil,
					$elm$url$Url$Parser$preparePath(url.ay),
					$elm$url$Url$Parser$prepareQuery(url.cb),
					url.bL,
					$elm$core$Basics$identity)));
	});
var $author$project$Main$ArticleRoute = function (a) {
	return {$: 1, a: a};
};
var $author$project$Main$CategoriesRoute = {$: 2};
var $author$project$Main$CategoryRoute = function (a) {
	return {$: 3, a: a};
};
var $author$project$Main$HomeRoute = function (a) {
	return {$: 0, a: a};
};
var $elm$url$Url$Parser$Internal$Parser = $elm$core$Basics$identity;
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $elm$url$Url$Parser$Query$custom = F2(
	function (key, func) {
		return function (dict) {
			return func(
				A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					A2($elm$core$Dict$get, key, dict)));
		};
	});
var $elm$url$Url$Parser$Query$int = function (key) {
	return A2(
		$elm$url$Url$Parser$Query$custom,
		key,
		function (stringList) {
			if (stringList.b && (!stringList.b.b)) {
				var str = stringList.a;
				return $elm$core$String$toInt(str);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		});
};
var $elm$url$Url$Parser$Parser = $elm$core$Basics$identity;
var $elm$url$Url$Parser$mapState = F2(
	function (func, _v0) {
		var visited = _v0.ah;
		var unvisited = _v0.X;
		var params = _v0.ad;
		var frag = _v0._;
		var value = _v0.a2;
		return A5(
			$elm$url$Url$Parser$State,
			visited,
			unvisited,
			params,
			frag,
			func(value));
	});
var $elm$url$Url$Parser$map = F2(
	function (subValue, _v0) {
		var parseArg = _v0;
		return function (_v1) {
			var visited = _v1.ah;
			var unvisited = _v1.X;
			var params = _v1.ad;
			var frag = _v1._;
			var value = _v1.a2;
			return A2(
				$elm$core$List$map,
				$elm$url$Url$Parser$mapState(value),
				parseArg(
					A5($elm$url$Url$Parser$State, visited, unvisited, params, frag, subValue)));
		};
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$url$Url$Parser$oneOf = function (parsers) {
	return function (state) {
		return A2(
			$elm$core$List$concatMap,
			function (_v0) {
				var parser = _v0;
				return parser(state);
			},
			parsers);
	};
};
var $elm$url$Url$Parser$query = function (_v0) {
	var queryParser = _v0;
	return function (_v1) {
		var visited = _v1.ah;
		var unvisited = _v1.X;
		var params = _v1.ad;
		var frag = _v1._;
		var value = _v1.a2;
		return _List_fromArray(
			[
				A5(
				$elm$url$Url$Parser$State,
				visited,
				unvisited,
				params,
				frag,
				value(
					queryParser(params)))
			]);
	};
};
var $elm$url$Url$Parser$s = function (str) {
	return function (_v0) {
		var visited = _v0.ah;
		var unvisited = _v0.X;
		var params = _v0.ad;
		var frag = _v0._;
		var value = _v0.a2;
		if (!unvisited.b) {
			return _List_Nil;
		} else {
			var next = unvisited.a;
			var rest = unvisited.b;
			return _Utils_eq(next, str) ? _List_fromArray(
				[
					A5(
					$elm$url$Url$Parser$State,
					A2($elm$core$List$cons, next, visited),
					rest,
					params,
					frag,
					value)
				]) : _List_Nil;
		}
	};
};
var $elm$url$Url$Parser$slash = F2(
	function (_v0, _v1) {
		var parseBefore = _v0;
		var parseAfter = _v1;
		return function (state) {
			return A2(
				$elm$core$List$concatMap,
				parseAfter,
				parseBefore(state));
		};
	});
var $elm$url$Url$Parser$custom = F2(
	function (tipe, stringToSomething) {
		return function (_v0) {
			var visited = _v0.ah;
			var unvisited = _v0.X;
			var params = _v0.ad;
			var frag = _v0._;
			var value = _v0.a2;
			if (!unvisited.b) {
				return _List_Nil;
			} else {
				var next = unvisited.a;
				var rest = unvisited.b;
				var _v2 = stringToSomething(next);
				if (!_v2.$) {
					var nextValue = _v2.a;
					return _List_fromArray(
						[
							A5(
							$elm$url$Url$Parser$State,
							A2($elm$core$List$cons, next, visited),
							rest,
							params,
							frag,
							value(nextValue))
						]);
				} else {
					return _List_Nil;
				}
			}
		};
	});
var $elm$url$Url$Parser$string = A2($elm$url$Url$Parser$custom, 'STRING', $elm$core$Maybe$Just);
var $author$project$Main$route = $elm$url$Url$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Main$HomeRoute,
			$elm$url$Url$Parser$query(
				$elm$url$Url$Parser$Query$int('page'))),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Main$CategoriesRoute,
			$elm$url$Url$Parser$s('categories')),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Main$CategoryRoute,
			A2(
				$elm$url$Url$Parser$slash,
				$elm$url$Url$Parser$s('category'),
				$elm$url$Url$Parser$string)),
			A2($elm$url$Url$Parser$map, $author$project$Main$ArticleRoute, $elm$url$Url$Parser$string)
		]));
var $author$project$Main$routeFromUrl = function (url) {
	return A2(
		$elm$core$Maybe$withDefault,
		$author$project$Main$NotFound,
		A2($elm$url$Url$Parser$parse, $author$project$Main$route, url));
};
var $author$project$Main$init = F3(
	function (_v0, url, key) {
		var width = _v0.x;
		var colorScheme = _v0.l;
		var colorSchemeParsed = function () {
			switch (colorScheme) {
				case 'Light':
					return 0;
				case 'Dark':
					return 1;
				default:
					return 0;
			}
		}();
		return _Utils_Tuple2(
			{
				Q: 4,
				l: colorSchemeParsed,
				aT: key,
				an: $author$project$Post$all,
				aX: $author$project$Main$routeFromUrl(url),
				ao: false,
				aA: '',
				af: false,
				aZ: false,
				x: width
			},
			$elm$core$Platform$Cmd$none);
	});
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Main$WindowResized = function (a) {
	return {$: 3, a: a};
};
var $elm$browser$Browser$Events$Window = 1;
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {b6: pids, cl: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (!node) {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {bH: event, aT: key};
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (!node) {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.b6,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.aT;
		var event = _v0.bH;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.cl);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		$elm$browser$Browser$Events$on,
		1,
		'resize',
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A3(
				$elm$json$Json$Decode$map2,
				func,
				A2($elm$json$Json$Decode$field, 'innerWidth', $elm$json$Json$Decode$int),
				A2($elm$json$Json$Decode$field, 'innerHeight', $elm$json$Json$Decode$int))));
};
var $author$project$Main$subscriptions = function (model) {
	return $elm$browser$Browser$Events$onResize(
		F2(
			function (w, h) {
				return $author$project$Main$WindowResized(w);
			}));
};
var $author$project$Main$ResetViewport = {$: 4};
var $elm$url$Url$Builder$toQueryPair = function (_v0) {
	var key = _v0.a;
	var value = _v0.b;
	return key + ('=' + value);
};
var $elm$url$Url$Builder$toQuery = function (parameters) {
	if (!parameters.b) {
		return '';
	} else {
		return '?' + A2(
			$elm$core$String$join,
			'&',
			A2($elm$core$List$map, $elm$url$Url$Builder$toQueryPair, parameters));
	}
};
var $elm$url$Url$Builder$absolute = F2(
	function (pathSegments, parameters) {
		return '/' + (A2($elm$core$String$join, '/', pathSegments) + $elm$url$Url$Builder$toQuery(parameters));
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{r: nodeList, m: nodeListSize, q: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $author$project$Font$fontSizes = $elm$core$Array$fromList(
	_List_fromArray(
		[8, 10, 12, 14, 16, 18, 24, 36, 48, 64]));
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $author$project$Font$clampSize = A2(
	$elm$core$Basics$clamp,
	0,
	$elm$core$Array$length($author$project$Font$fontSizes) - 1);
var $author$project$Font$decreaseFontSize = function (currentSize) {
	return $author$project$Font$clampSize(currentSize - 1);
};
var $author$project$Main$handleUrlChange = F2(
	function (model, url) {
		return _Utils_update(
			model,
			{
				aX: $author$project$Main$routeFromUrl(url),
				af: false
			});
	});
var $author$project$Font$increaseFontSize = function (currentSize) {
	return $author$project$Font$clampSize(currentSize + 1);
};
var $elm$browser$Browser$Navigation$load = _Browser_load;
var $elm$core$Basics$not = _Basics_not;
var $elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var $elm$browser$Browser$Navigation$replaceUrl = _Browser_replaceUrl;
var $author$project$Main$NoOp = {$: 11};
var $elm$browser$Browser$Dom$setViewport = _Browser_setViewport;
var $author$project$Main$resetViewport = A2(
	$elm$core$Task$perform,
	function (_v0) {
		return $author$project$Main$NoOp;
	},
	A2($elm$browser$Browser$Dom$setViewport, 0, 0));
var $elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 1) {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + $elm$core$String$fromInt(port_));
		}
	});
var $elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 1) {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var $elm$url$Url$toString = function (url) {
	var http = function () {
		var _v0 = url.ca;
		if (!_v0) {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		$elm$url$Url$addPrefixed,
		'#',
		url.bL,
		A3(
			$elm$url$Url$addPrefixed,
			'?',
			url.cb,
			_Utils_ap(
				A2(
					$elm$url$Url$addPort,
					url.b7,
					_Utils_ap(http, url.bR)),
				url.ay)));
};
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 1:
				var urlRequest = msg.a;
				if (!urlRequest.$) {
					var url = urlRequest.a;
					return _Utils_Tuple2(
						model,
						A2(
							$elm$browser$Browser$Navigation$pushUrl,
							model.aT,
							$elm$url$Url$toString(url)));
				} else {
					var url = urlRequest.a;
					return _Utils_Tuple2(
						model,
						$elm$browser$Browser$Navigation$load(url));
				}
			case 0:
				var url = msg.a;
				return A2(
					$author$project$Main$update,
					$author$project$Main$ResetViewport,
					A2($author$project$Main$handleUrlChange, model, url));
			case 2:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{af: !model.af}),
					$elm$core$Platform$Cmd$none);
			case 4:
				return _Utils_Tuple2(model, $author$project$Main$resetViewport);
			case 3:
				var newWidth = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{x: newWidth}),
					$elm$core$Platform$Cmd$none);
			case 5:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{af: false, aZ: true}),
					$elm$core$Platform$Cmd$none);
			case 6:
				var term = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{aA: term}),
					A2(
						$elm$browser$Browser$Navigation$replaceUrl,
						model.aT,
						A2($elm$url$Url$Builder$absolute, _List_Nil, _List_Nil)));
			case 7:
				var val = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ao: val}),
					$elm$core$Platform$Cmd$none);
			case 8:
				var colorScheme = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{l: colorScheme}),
					$elm$core$Platform$Cmd$none);
			case 9:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							Q: $author$project$Font$increaseFontSize(model.Q)
						}),
					$elm$core$Platform$Cmd$none);
			case 10:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							Q: $author$project$Font$decreaseFontSize(model.Q)
						}),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$AlignY = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Bottom = 2;
var $mdgriffith$elm_ui$Element$alignBottom = $mdgriffith$elm_ui$Internal$Model$AlignY(2);
var $mdgriffith$elm_ui$Internal$Model$Top = 0;
var $mdgriffith$elm_ui$Element$alignTop = $mdgriffith$elm_ui$Internal$Model$AlignY(0);
var $mdgriffith$elm_ui$Internal$Model$Unkeyed = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$AsColumn = 1;
var $mdgriffith$elm_ui$Internal$Model$asColumn = 1;
var $mdgriffith$elm_ui$Internal$Style$classes = {cA: 'a', a4: 'atv', cC: 'ab', cD: 'cx', cE: 'cy', cF: 'acb', cG: 'accx', cH: 'accy', cI: 'acr', bA: 'al', bB: 'ar', cJ: 'at', a5: 'ah', a6: 'av', cM: 's', cQ: 'bh', cR: 'b', cU: 'w7', cW: 'bd', cX: 'bdt', aI: 'bn', cY: 'bs', aJ: 'cpe', c4: 'cp', c5: 'cpx', c6: 'cpy', R: 'c', aN: 'ctr', aO: 'cb', aP: 'ccx', S: 'ccy', au: 'cl', aQ: 'cr', da: 'ct', dc: 'cptr', dd: 'ctxt', $7: 'fcs', bK: 'focus-within', dp: 'fs', dq: 'g', bb: 'hbh', bc: 'hc', bO: 'he', bd: 'hf', bP: 'hfp', du: 'hv', dy: 'ic', dA: 'fr', aS: 'lbl', dC: 'iml', dD: 'imlf', dE: 'imlp', dF: 'implw', dG: 'it', dI: 'i', dK: 'lnk', am: 'nb', b$: 'notxt', dQ: 'ol', dR: 'or', ac: 'oq', dW: 'oh', b5: 'pg', dX: 'p', dY: 'ppe', d1: 'ui', d2: 'r', d4: 'sb', d5: 'sbx', d6: 'sby', d7: 'sbt', ea: 'e', eb: 'cap', ec: 'sev', eh: 'sk', er: 't', es: 'tc', et: 'w8', eu: 'w2', ev: 'w9', ew: 'tj', a0: 'tja', ex: 'tl', ey: 'w3', ez: 'w5', eA: 'w4', eB: 'tr', eC: 'w6', eD: 'w1', eE: 'tun', cp: 'ts', ag: 'clr', eK: 'u', bw: 'wc', cw: 'we', bx: 'wf', cx: 'wfp', by: 'wrp'};
var $mdgriffith$elm_ui$Internal$Model$Generic = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$div = $mdgriffith$elm_ui$Internal$Model$Generic;
var $mdgriffith$elm_ui$Internal$Model$NoNearbyChildren = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$columnClass = $mdgriffith$elm_ui$Internal$Style$classes.cM + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.R);
var $mdgriffith$elm_ui$Internal$Model$gridClass = $mdgriffith$elm_ui$Internal$Style$classes.cM + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.dq);
var $mdgriffith$elm_ui$Internal$Model$pageClass = $mdgriffith$elm_ui$Internal$Style$classes.cM + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.b5);
var $mdgriffith$elm_ui$Internal$Model$paragraphClass = $mdgriffith$elm_ui$Internal$Style$classes.cM + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.dX);
var $mdgriffith$elm_ui$Internal$Model$rowClass = $mdgriffith$elm_ui$Internal$Style$classes.cM + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.d2);
var $mdgriffith$elm_ui$Internal$Model$singleClass = $mdgriffith$elm_ui$Internal$Style$classes.cM + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.ea);
var $mdgriffith$elm_ui$Internal$Model$contextClasses = function (context) {
	switch (context) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Model$rowClass;
		case 1:
			return $mdgriffith$elm_ui$Internal$Model$columnClass;
		case 2:
			return $mdgriffith$elm_ui$Internal$Model$singleClass;
		case 3:
			return $mdgriffith$elm_ui$Internal$Model$gridClass;
		case 4:
			return $mdgriffith$elm_ui$Internal$Model$paragraphClass;
		default:
			return $mdgriffith$elm_ui$Internal$Model$pageClass;
	}
};
var $mdgriffith$elm_ui$Internal$Model$Keyed = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$NoStyleSheet = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$Styled = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Unstyled = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 0:
				return existing;
			case 1:
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 2:
				var inFront = nearbyChildren.a;
				return _Utils_ap(existing, inFront);
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					behind,
					_Utils_ap(existing, inFront));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$addKeyedChildren = F3(
	function (key, existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 0:
				return existing;
			case 1:
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 2:
				var inFront = nearbyChildren.a;
				return _Utils_ap(
					existing,
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						inFront));
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					_Utils_ap(
						existing,
						A2(
							$elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(key, x);
							},
							inFront)));
		}
	});
var $mdgriffith$elm_ui$Internal$Model$AsEl = 2;
var $mdgriffith$elm_ui$Internal$Model$asEl = 2;
var $mdgriffith$elm_ui$Internal$Model$AsParagraph = 4;
var $mdgriffith$elm_ui$Internal$Model$asParagraph = 4;
var $mdgriffith$elm_ui$Internal$Flag$Flag = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Second = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $mdgriffith$elm_ui$Internal$Flag$flag = function (i) {
	return (i > 31) ? $mdgriffith$elm_ui$Internal$Flag$Second(1 << (i - 32)) : $mdgriffith$elm_ui$Internal$Flag$Flag(1 << i);
};
var $mdgriffith$elm_ui$Internal$Flag$alignBottom = $mdgriffith$elm_ui$Internal$Flag$flag(41);
var $mdgriffith$elm_ui$Internal$Flag$alignRight = $mdgriffith$elm_ui$Internal$Flag$flag(40);
var $mdgriffith$elm_ui$Internal$Flag$centerX = $mdgriffith$elm_ui$Internal$Flag$flag(42);
var $mdgriffith$elm_ui$Internal$Flag$centerY = $mdgriffith$elm_ui$Internal$Flag$flag(43);
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $mdgriffith$elm_ui$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 0:
			var px = x.a;
			return $elm$core$String$fromInt(px) + 'px';
		case 1:
			return 'auto';
		case 2:
			var i = x.a;
			return $elm$core$String$fromInt(i) + 'fr';
		case 3:
			var min = x.a;
			var len = x.b;
			return 'min' + ($elm$core$String$fromInt(min) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
		default:
			var max = x.a;
			var len = x.b;
			return 'max' + ($elm$core$String$fromInt(max) + $mdgriffith$elm_ui$Internal$Model$lengthClassName(len));
	}
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$core$Basics$round = _Basics_round;
var $mdgriffith$elm_ui$Internal$Model$floatClass = function (x) {
	return $elm$core$String$fromInt(
		$elm$core$Basics$round(x * 255));
};
var $mdgriffith$elm_ui$Internal$Model$transformClass = function (transform) {
	switch (transform.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'mv-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(x) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(y) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(z))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			return $elm$core$Maybe$Just(
				'tfrm-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ty) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(tz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sx) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(sz) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(ox) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oy) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(oz) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(angle))))))))))))))))))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$getStyleName = function (style) {
	switch (style.$) {
		case 13:
			var name = style.a;
			return name;
		case 12:
			var name = style.a;
			var o = style.b;
			return name;
		case 0:
			var _class = style.a;
			return _class;
		case 1:
			var name = style.a;
			return name;
		case 2:
			var i = style.a;
			return 'font-size-' + $elm$core$String$fromInt(i);
		case 3:
			var _class = style.a;
			return _class;
		case 4:
			var _class = style.a;
			return _class;
		case 5:
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 7:
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 6:
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 8:
			var template = style.a;
			return 'grid-rows-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.d3)) + ('-cols-' + (A2(
				$elm$core$String$join,
				'-',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.M)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.ed.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.ed.b)))))));
		case 9:
			var pos = style.a;
			return 'gp grid-pos-' + ($elm$core$String$fromInt(pos.d2) + ('-' + ($elm$core$String$fromInt(pos.bF) + ('-' + ($elm$core$String$fromInt(pos.x) + ('-' + $elm$core$String$fromInt(pos.bN)))))));
		case 11:
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector) {
					case 0:
						return 'fs';
					case 1:
						return 'hv';
					default:
						return 'act';
				}
			}();
			return A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (sty) {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$getStyleName(sty);
						if (_v1 === '') {
							return '';
						} else {
							var styleName = _v1;
							return styleName + ('-' + name);
						}
					},
					subStyle));
		default:
			var x = style.a;
			return A2(
				$elm$core$Maybe$withDefault,
				'',
				$mdgriffith$elm_ui$Internal$Model$transformClass(x));
	}
};
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$member, key, dict);
	});
var $mdgriffith$elm_ui$Internal$Model$reduceStyles = F2(
	function (style, nevermind) {
		var cache = nevermind.a;
		var existing = nevermind.b;
		var styleName = $mdgriffith$elm_ui$Internal$Model$getStyleName(style);
		return A2($elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
			A2($elm$core$Set$insert, styleName, cache),
			A2($elm$core$List$cons, style, existing));
	});
var $mdgriffith$elm_ui$Internal$Model$Property = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$dot = function (c) {
	return '.' + c;
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $mdgriffith$elm_ui$Internal$Model$formatColor = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return 'rgba(' + ($elm$core$String$fromInt(
		$elm$core$Basics$round(red * 255)) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(green * 255))) + ((',' + $elm$core$String$fromInt(
		$elm$core$Basics$round(blue * 255))) + (',' + ($elm$core$String$fromFloat(alpha) + ')')))));
};
var $mdgriffith$elm_ui$Internal$Model$formatBoxShadow = function (shadow) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					shadow.bU ? $elm$core$Maybe$Just('inset') : $elm$core$Maybe$Nothing,
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.b.a) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.b.b) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.aj) + 'px'),
					$elm$core$Maybe$Just(
					$elm$core$String$fromFloat(shadow.a_) + 'px'),
					$elm$core$Maybe$Just(
					$mdgriffith$elm_ui$Internal$Model$formatColor(shadow.ak))
				])));
};
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $mdgriffith$elm_ui$Internal$Model$renderFocusStyle = function (focus) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bK) + ':focus-within',
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.cV),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.cO),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										aj: shadow.aj,
										ak: shadow.ak,
										bU: false,
										b: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.b)),
										a_: shadow.a_
									}));
						},
						focus.d8),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					]))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$Style,
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM) + (':focus .focusable, ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM) + '.focusable:focus')),
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'border-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.cV),
						A2(
						$elm$core$Maybe$map,
						function (color) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'background-color',
								$mdgriffith$elm_ui$Internal$Model$formatColor(color));
						},
						focus.cO),
						A2(
						$elm$core$Maybe$map,
						function (shadow) {
							return A2(
								$mdgriffith$elm_ui$Internal$Model$Property,
								'box-shadow',
								$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(
									{
										aj: shadow.aj,
										ak: shadow.ak,
										bU: false,
										b: A2(
											$elm$core$Tuple$mapSecond,
											$elm$core$Basics$toFloat,
											A2($elm$core$Tuple$mapFirst, $elm$core$Basics$toFloat, shadow.b)),
										a_: shadow.a_
									}));
						},
						focus.d8),
						$elm$core$Maybe$Just(
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'outline', 'none'))
					])))
		]);
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Style$AllChildren = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Batch = function (a) {
	return {$: 6, a: a};
};
var $mdgriffith$elm_ui$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Left = 3;
var $mdgriffith$elm_ui$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Right = 2;
var $mdgriffith$elm_ui$Internal$Style$Self = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Style$Content = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$Bottom = 1;
var $mdgriffith$elm_ui$Internal$Style$CenterX = 4;
var $mdgriffith$elm_ui$Internal$Style$CenterY = 5;
var $mdgriffith$elm_ui$Internal$Style$Top = 0;
var $mdgriffith$elm_ui$Internal$Style$alignments = _List_fromArray(
	[0, 1, 2, 3, 4, 5]);
var $mdgriffith$elm_ui$Internal$Style$contentName = function (desc) {
	switch (desc) {
		case 0:
			var _v1 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.da);
		case 1:
			var _v2 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aO);
		case 2:
			var _v3 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aQ);
		case 3:
			var _v4 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.au);
		case 4:
			var _v5 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aP);
		default:
			var _v6 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.S);
	}
};
var $mdgriffith$elm_ui$Internal$Style$selfName = function (desc) {
	switch (desc) {
		case 0:
			var _v1 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cJ);
		case 1:
			var _v2 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cC);
		case 2:
			var _v3 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bB);
		case 3:
			var _v4 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bA);
		case 4:
			var _v5 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cD);
		default:
			var _v6 = desc;
			return $mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cE);
	}
};
var $mdgriffith$elm_ui$Internal$Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _v0 = values(alignment);
		var content = _v0.a;
		var indiv = _v0.b;
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$contentName(alignment),
				content),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(alignment),
						indiv)
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$elDescription = _List_fromArray(
	[
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
		A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bb),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cQ),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Descriptor,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d7),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.er),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bd),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bx),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bc),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bd),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bx),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cx),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Child,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bw),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		$mdgriffith$elm_ui$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment) {
				case 0:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
							]));
				case 1:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
							]));
				case 2:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 3:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 4:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
							]));
				default:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
									]))
							]),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
							]));
			}
		})
	]);
var $mdgriffith$elm_ui$Internal$Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$selfName(alignment),
						values(alignment))
					]))
			]);
	};
	return $mdgriffith$elm_ui$Internal$Style$Batch(
		A2($elm$core$List$concatMap, createDescription, $mdgriffith$elm_ui$Internal$Style$alignments));
};
var $mdgriffith$elm_ui$Internal$Style$Above = 0;
var $mdgriffith$elm_ui$Internal$Style$Behind = 5;
var $mdgriffith$elm_ui$Internal$Style$Below = 1;
var $mdgriffith$elm_ui$Internal$Style$OnLeft = 3;
var $mdgriffith$elm_ui$Internal$Style$OnRight = 2;
var $mdgriffith$elm_ui$Internal$Style$Within = 4;
var $mdgriffith$elm_ui$Internal$Style$locations = function () {
	var loc = 0;
	var _v0 = function () {
		switch (loc) {
			case 0:
				return 0;
			case 1:
				return 0;
			case 2:
				return 0;
			case 3:
				return 0;
			case 4:
				return 0;
			default:
				return 0;
		}
	}();
	return _List_fromArray(
		[0, 1, 2, 3, 4, 5]);
}();
var $mdgriffith$elm_ui$Internal$Style$baseSheet = _List_fromArray(
	[
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		'html,body',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		_Utils_ap(
			$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM),
			_Utils_ap(
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ea),
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dy))),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bd),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-height', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bx),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'img',
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'max-width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'object-fit', 'cover')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM) + ':focus',
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d1),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'min-height', '100%'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bd)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bd),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Child,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dA),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.am),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20')
							]))
					]))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.am),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ea),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				$mdgriffith$elm_ui$Internal$Style$Batch(
				function (fn) {
					return A2($elm$core$List$map, fn, $mdgriffith$elm_ui$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc) {
							case 0:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cA),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bd),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bx),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
												])),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 1:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cR),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'bottom', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												])),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bd),
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 2:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dR),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 3:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dQ),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'right', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '20'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 4:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dA),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							default:
								return A2(
									$mdgriffith$elm_ui$Internal$Style$Descriptor,
									$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cQ),
									_List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'absolute'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											$mdgriffith$elm_ui$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
						}
					}))
			])),
		A2(
		$mdgriffith$elm_ui$Internal$Style$Class,
		$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM),
		_List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'relative'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'resize', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'box-sizing', 'border-box'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'padding', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-size', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-family', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', 'inherit'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'none'),
				A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'inherit'),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.by),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b$),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dc),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dd),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aJ),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ag),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ac),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.du, $mdgriffith$elm_ui$Internal$Style$classes.ag)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.du, $mdgriffith$elm_ui$Internal$Style$classes.ac)) + ':hover',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.$7, $mdgriffith$elm_ui$Internal$Style$classes.ag)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.$7, $mdgriffith$elm_ui$Internal$Style$classes.ac)) + ':focus',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.a4, $mdgriffith$elm_ui$Internal$Style$classes.ag)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot(
					_Utils_ap($mdgriffith$elm_ui$Internal$Style$classes.a4, $mdgriffith$elm_ui$Internal$Style$classes.ac)) + ':active',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cp),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Prop,
						'transition',
						A2(
							$elm$core$String$join,
							', ',
							A2(
								$elm$core$List$map,
								function (x) {
									return x + ' 160ms';
								},
								_List_fromArray(
									['transform', 'opacity', 'filter', 'background-color', 'color', 'font-size']))))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d4),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d5),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d2),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d6),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.R),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ea),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c4),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c5),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.c6),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bw),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aI),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cW),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cY),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.er),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dG),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'line-height', '1.05'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background', 'transparent'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'inherit')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ea),
				$mdgriffith$elm_ui$Internal$Style$elDescription),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d2),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cw),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dK),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bd),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bP),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bx),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aN),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.cI,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.cG,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cD),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.cG,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cD),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.cG,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cE),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.cG + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.cI + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.cG)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 1:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 2:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 3:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 4:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ec),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aS),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'baseline')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.R),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bd),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bx),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cx),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bw),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.cF,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:first-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.cH,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cE),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.cH,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cE),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:only-of-type.' + $mdgriffith$elm_ui$Internal$Style$classes.cH,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cE),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						's:last-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.cH + ' ~ u'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'u:first-of-type.' + ($mdgriffith$elm_ui$Internal$Style$classes.cF + (' ~ s.' + $mdgriffith$elm_ui$Internal$Style$classes.cH)),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 1:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 2:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 3:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 4:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'center')
											]));
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
							}
						}),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aN),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-grow', '0'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ec),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dq),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', '-ms-grid'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						'.gp',
						_List_fromArray(
							[
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Supports,
						_Utils_Tuple2('display', 'grid'),
						_List_fromArray(
							[
								_Utils_Tuple2('display', 'grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$gridAlignments(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 1:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 2:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 3:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 4:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'align-items', 'center')
										]);
								default:
									return _List_fromArray(
										[
											A2($mdgriffith$elm_ui$Internal$Style$Prop, 'justify-content', 'center')
										]);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.b5),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM + ':first-child'),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.cM + ($mdgriffith$elm_ui$Internal$Style$selfName(3) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.cM))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot(
							$mdgriffith$elm_ui$Internal$Style$classes.cM + ($mdgriffith$elm_ui$Internal$Style$selfName(2) + (':first-child + .' + $mdgriffith$elm_ui$Internal$Style$classes.cM))),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'margin', '0 !important')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 1:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 2:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 3:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left'),
												A2(
												$mdgriffith$elm_ui$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', '\"\"'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'table'),
														A2($mdgriffith$elm_ui$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 4:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dC),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'background-color', 'transparent')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dF),
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ea),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'flex-basis', 'auto')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dE),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'cursor', 'text'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dD),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'pre-wrap !important'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'color', 'transparent')
							]))
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dX),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'block'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'overflow-wrap', 'break-word'),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Descriptor,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.bb),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '0'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cQ),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.er),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dX),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::after',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								'::before',
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'content', 'none')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$AllChildren,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ea),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cw),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-block')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dA),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cQ),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cA),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cR),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dR),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Descriptor,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dQ),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								$mdgriffith$elm_ui$Internal$Style$Child,
								$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.er),
								_List_fromArray(
									[
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline'),
										A2($mdgriffith$elm_ui$Internal$Style$Prop, 'white-space', 'normal')
									]))
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d2),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.R),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						$mdgriffith$elm_ui$Internal$Style$Child,
						$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dq),
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						$mdgriffith$elm_ui$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment) {
								case 0:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 1:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 2:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'right')
											]));
								case 3:
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2($mdgriffith$elm_ui$Internal$Style$Prop, 'float', 'left')
											]));
								case 4:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.hidden',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'display', 'none')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eD),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eu),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ey),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eA),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ez),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eC),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cU),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.et),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ev),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.dI),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eh),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eK),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				_Utils_ap(
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eK),
					$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eh)),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eE),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ew),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.a0),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.es),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.eB),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				$mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.ex),
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'text-align', 'left')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Descriptor,
				'.modal',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'position', 'fixed'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'left', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'top', '0'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'width', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'height', '100%'),
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'pointer-events', 'none')
					]))
			]))
	]);
var $mdgriffith$elm_ui$Internal$Style$fontVariant = function (_var) {
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + _var,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\"'))
				])),
			A2(
			$mdgriffith$elm_ui$Internal$Style$Class,
			'.v-' + (_var + '-off'),
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\" 0'))
				]))
		]);
};
var $mdgriffith$elm_ui$Internal$Style$commonValues = $elm$core$List$concat(
	_List_fromArray(
		[
			A2(
			$elm$core$List$map,
			function (x) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.border-' + $elm$core$String$fromInt(x),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'border-width',
							$elm$core$String$fromInt(x) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 6)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 8, 32)),
			A2(
			$elm$core$List$map,
			function (i) {
				return A2(
					$mdgriffith$elm_ui$Internal$Style$Class,
					'.p-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Style$Prop,
							'padding',
							$elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2($elm$core$List$range, 0, 24)),
			_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'small-caps')
					])),
				A2(
				$mdgriffith$elm_ui$Internal$Style$Class,
				'.v-smcp-off',
				_List_fromArray(
					[
						A2($mdgriffith$elm_ui$Internal$Style$Prop, 'font-variant', 'normal')
					]))
			]),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('zero'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('onum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('liga'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('dlig'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('ordn'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('tnum'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('afrc'),
			$mdgriffith$elm_ui$Internal$Style$fontVariant('frac')
		]));
var $mdgriffith$elm_ui$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + ($mdgriffith$elm_ui$Internal$Style$classes.cM + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + ($mdgriffith$elm_ui$Internal$Style$classes.cM + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var $mdgriffith$elm_ui$Internal$Style$inputTextReset = '\ninput[type="search"],\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance:none;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$sliderReset = '\ninput[type=range] {\n  -webkit-appearance: none; \n  background: transparent;\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$thumbReset = '\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var $mdgriffith$elm_ui$Internal$Style$trackReset = '\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n';
var $mdgriffith$elm_ui$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d2) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM) + (' { flex-basis: auto !important; } ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.d2) + (' > ' + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.cM) + ($mdgriffith$elm_ui$Internal$Style$dot($mdgriffith$elm_ui$Internal$Style$classes.aN) + (' { flex-basis: auto !important; }}' + ($mdgriffith$elm_ui$Internal$Style$inputTextReset + ($mdgriffith$elm_ui$Internal$Style$sliderReset + ($mdgriffith$elm_ui$Internal$Style$trackReset + ($mdgriffith$elm_ui$Internal$Style$thumbReset + $mdgriffith$elm_ui$Internal$Style$explainer)))))))))))))));
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $mdgriffith$elm_ui$Internal$Style$Intermediate = $elm$core$Basics$identity;
var $mdgriffith$elm_ui$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return {aM: closing, u: _List_Nil, V: _List_Nil, J: selector};
	});
var $mdgriffith$elm_ui$Internal$Style$renderRules = F2(
	function (_v0, rulesToRender) {
		var parent = _v0;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 0:
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								V: A2(
									$elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.V)
							});
					case 3:
						var _v2 = rule.a;
						var prop = _v2.a;
						var value = _v2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								u: A2(
									$elm$core$List$cons,
									{aM: '\n}', u: _List_Nil, V: props, J: '@supports (' + (prop + (':' + (value + (') {' + parent.J))))},
									rendered.u)
							});
					case 5:
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								u: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.J + (' + ' + selector), ''),
										adjRules),
									rendered.u)
							});
					case 1:
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								u: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.J + (' > ' + child), ''),
										childRules),
									rendered.u)
							});
					case 2:
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								u: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.J + (' ' + child), ''),
										childRules),
									rendered.u)
							});
					case 4:
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								u: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2(
											$mdgriffith$elm_ui$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.J, descriptor),
											''),
										descriptorRules),
									rendered.u)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								u: A2(
									$elm$core$List$cons,
									A2(
										$mdgriffith$elm_ui$Internal$Style$renderRules,
										A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, parent.J, ''),
										batched),
									rendered.u)
							});
				}
			});
		return A3($elm$core$List$foldr, generateIntermediates, parent, rulesToRender);
	});
var $mdgriffith$elm_ui$Internal$Style$renderCompact = function (styleClasses) {
	var renderValues = function (values) {
		return $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (_v3) {
					var x = _v3.a;
					var y = _v3.b;
					return x + (':' + (y + ';'));
				},
				values));
	};
	var renderClass = function (rule) {
		var _v2 = rule.V;
		if (!_v2.b) {
			return '';
		} else {
			return rule.J + ('{' + (renderValues(rule.V) + (rule.aM + '}')));
		}
	};
	var renderIntermediate = function (_v0) {
		var rule = _v0;
		return _Utils_ap(
			renderClass(rule),
			$elm$core$String$concat(
				A2($elm$core$List$map, renderIntermediate, rule.u)));
	};
	return $elm$core$String$concat(
		A2(
			$elm$core$List$map,
			renderIntermediate,
			A3(
				$elm$core$List$foldr,
				F2(
					function (_v1, existing) {
						var name = _v1.a;
						var styleRules = _v1.b;
						return A2(
							$elm$core$List$cons,
							A2(
								$mdgriffith$elm_ui$Internal$Style$renderRules,
								A2($mdgriffith$elm_ui$Internal$Style$emptyIntermediate, name, ''),
								styleRules),
							existing);
					}),
				_List_Nil,
				styleClasses)));
};
var $mdgriffith$elm_ui$Internal$Style$rules = _Utils_ap(
	$mdgriffith$elm_ui$Internal$Style$overrides,
	$mdgriffith$elm_ui$Internal$Style$renderCompact(
		_Utils_ap($mdgriffith$elm_ui$Internal$Style$baseSheet, $mdgriffith$elm_ui$Internal$Style$commonValues)));
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $mdgriffith$elm_ui$Internal$Model$staticRoot = function (opts) {
	var _v0 = opts.dM;
	switch (_v0) {
		case 0:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'div',
				_List_Nil,
				_List_fromArray(
					[
						A3(
						$elm$virtual_dom$VirtualDom$node,
						'style',
						_List_Nil,
						_List_fromArray(
							[
								$elm$virtual_dom$VirtualDom$text($mdgriffith$elm_ui$Internal$Style$rules)
							]))
					]));
		case 1:
			return $elm$virtual_dom$VirtualDom$text('');
		default:
			return A3(
				$elm$virtual_dom$VirtualDom$node,
				'elm-ui-static-rules',
				_List_fromArray(
					[
						A2(
						$elm$virtual_dom$VirtualDom$property,
						'rules',
						$elm$json$Json$Encode$string($mdgriffith$elm_ui$Internal$Style$rules))
					]),
				_List_Nil);
	}
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$fontName = function (font) {
	switch (font.$) {
		case 0:
			return 'serif';
		case 1:
			return 'sans-serif';
		case 2:
			return 'monospace';
		case 3:
			var name = font.a;
			return '\"' + (name + '\"');
		case 4:
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.w;
			return '\"' + (name + '\"');
	}
};
var $mdgriffith$elm_ui$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 0:
			var name = _var.a;
			return name === 'smcp';
		case 1:
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var $mdgriffith$elm_ui$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 5) {
		var font = typeface.a;
		return A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$isSmallCaps, font.cr);
	} else {
		return false;
	}
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $mdgriffith$elm_ui$Internal$Model$renderProps = F3(
	function (force, _v0, existing) {
		var key = _v0.a;
		var val = _v0.b;
		return force ? (existing + ('\n  ' + (key + (': ' + (val + ' !important;'))))) : (existing + ('\n  ' + (key + (': ' + (val + ';')))));
	});
var $mdgriffith$elm_ui$Internal$Model$renderStyle = F4(
	function (options, maybePseudo, selector, props) {
		if (maybePseudo.$ === 1) {
			return _List_fromArray(
				[
					selector + ('{' + (A3(
					$elm$core$List$foldl,
					$mdgriffith$elm_ui$Internal$Model$renderProps(false),
					'',
					props) + '\n}'))
				]);
		} else {
			var pseudo = maybePseudo.a;
			switch (pseudo) {
				case 1:
					var _v2 = options.du;
					switch (_v2) {
						case 0:
							return _List_Nil;
						case 2:
							return _List_fromArray(
								[
									selector + ('-hv {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(true),
									'',
									props) + '\n}'))
								]);
						default:
							return _List_fromArray(
								[
									selector + ('-hv:hover {' + (A3(
									$elm$core$List$foldl,
									$mdgriffith$elm_ui$Internal$Model$renderProps(false),
									'',
									props) + '\n}'))
								]);
					}
				case 0:
					var renderedProps = A3(
						$elm$core$List$foldl,
						$mdgriffith$elm_ui$Internal$Model$renderProps(false),
						'',
						props);
					return _List_fromArray(
						[selector + ('-fs:focus {' + (renderedProps + '\n}')), ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.cM + (':focus ' + (selector + '-fs  {')))) + (renderedProps + '\n}'), (selector + '-fs:focus-within {') + (renderedProps + '\n}'), ('.focusable-parent:focus ~ ' + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.cM + (' ' + (selector + '-fs {'))))) + (renderedProps + '\n}')]);
				default:
					return _List_fromArray(
						[
							selector + ('-act:active {' + (A3(
							$elm$core$List$foldl,
							$mdgriffith$elm_ui$Internal$Model$renderProps(false),
							'',
							props) + '\n}'))
						]);
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderVariant = function (_var) {
	switch (_var.$) {
		case 0:
			var name = _var.a;
			return '\"' + (name + '\"');
		case 1:
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + $elm$core$String$fromInt(index)));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 5) {
		var font = typeface.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				', ',
				A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$renderVariant, font.cr)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			var _v1 = transform.a;
			var x = _v1.a;
			var y = _v1.b;
			var z = _v1.c;
			return $elm$core$Maybe$Just(
				'translate3d(' + ($elm$core$String$fromFloat(x) + ('px, ' + ($elm$core$String$fromFloat(y) + ('px, ' + ($elm$core$String$fromFloat(z) + 'px)'))))));
		default:
			var _v2 = transform.a;
			var tx = _v2.a;
			var ty = _v2.b;
			var tz = _v2.c;
			var _v3 = transform.b;
			var sx = _v3.a;
			var sy = _v3.b;
			var sz = _v3.c;
			var _v4 = transform.c;
			var ox = _v4.a;
			var oy = _v4.b;
			var oz = _v4.c;
			var angle = transform.d;
			var translate = 'translate3d(' + ($elm$core$String$fromFloat(tx) + ('px, ' + ($elm$core$String$fromFloat(ty) + ('px, ' + ($elm$core$String$fromFloat(tz) + 'px)')))));
			var scale = 'scale3d(' + ($elm$core$String$fromFloat(sx) + (', ' + ($elm$core$String$fromFloat(sy) + (', ' + ($elm$core$String$fromFloat(sz) + ')')))));
			var rotate = 'rotate3d(' + ($elm$core$String$fromFloat(ox) + (', ' + ($elm$core$String$fromFloat(oy) + (', ' + ($elm$core$String$fromFloat(oz) + (', ' + ($elm$core$String$fromFloat(angle) + 'rad)')))))));
			return $elm$core$Maybe$Just(translate + (' ' + (scale + (' ' + rotate))));
	}
};
var $mdgriffith$elm_ui$Internal$Model$renderStyleRule = F3(
	function (options, rule, maybePseudo) {
		switch (rule.$) {
			case 0:
				var selector = rule.a;
				var props = rule.b;
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, selector, props);
			case 13:
				var name = rule.a;
				var prop = rule.b;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, 'box-shadow', prop)
						]));
			case 12:
				var name = rule.a;
				var transparency = rule.b;
				var opacity = A2(
					$elm$core$Basics$max,
					0,
					A2($elm$core$Basics$min, 1, 1 - transparency));
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + name,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'opacity',
							$elm$core$String$fromFloat(opacity))
						]));
			case 2:
				var i = rule.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.font-size-' + $elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'font-size',
							$elm$core$String$fromInt(i) + 'px')
						]));
			case 1:
				var name = rule.a;
				var typefaces = rule.b;
				var features = A2(
					$elm$core$String$join,
					', ',
					A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Internal$Model$renderVariants, typefaces));
				var families = _List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-family',
						A2(
							$elm$core$String$join,
							', ',
							A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$fontName, typefaces))),
						A2($mdgriffith$elm_ui$Internal$Model$Property, 'font-feature-settings', features),
						A2(
						$mdgriffith$elm_ui$Internal$Model$Property,
						'font-variant',
						A2($elm$core$List$any, $mdgriffith$elm_ui$Internal$Model$hasSmallCaps, typefaces) ? 'small-caps' : 'normal')
					]);
				return A4($mdgriffith$elm_ui$Internal$Model$renderStyle, options, maybePseudo, '.' + name, families);
			case 3:
				var _class = rule.a;
				var prop = rule.b;
				var val = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2($mdgriffith$elm_ui$Internal$Model$Property, prop, val)
						]));
			case 4:
				var _class = rule.a;
				var prop = rule.b;
				var color = rule.c;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					'.' + _class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							prop,
							$mdgriffith$elm_ui$Internal$Model$formatColor(color))
						]));
			case 5:
				var cls = rule.a;
				var x = rule.b;
				var y = rule.c;
				var yPx = $elm$core$String$fromInt(y) + 'px';
				var xPx = $elm$core$String$fromInt(x) + 'px';
				var single = '.' + $mdgriffith$elm_ui$Internal$Style$classes.ea;
				var row = '.' + $mdgriffith$elm_ui$Internal$Style$classes.d2;
				var wrappedRow = '.' + ($mdgriffith$elm_ui$Internal$Style$classes.by + row);
				var right = '.' + $mdgriffith$elm_ui$Internal$Style$classes.bB;
				var paragraph = '.' + $mdgriffith$elm_ui$Internal$Style$classes.dX;
				var page = '.' + $mdgriffith$elm_ui$Internal$Style$classes.b5;
				var left = '.' + $mdgriffith$elm_ui$Internal$Style$classes.bA;
				var halfY = $elm$core$String$fromFloat(y / 2) + 'px';
				var halfX = $elm$core$String$fromFloat(x / 2) + 'px';
				var column = '.' + $mdgriffith$elm_ui$Internal$Style$classes.R;
				var _class = '.' + cls;
				var any = '.' + $mdgriffith$elm_ui$Internal$Style$classes.cM;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (row + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (wrappedRow + (' > ' + any)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin', halfY + (' ' + halfX))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (column + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + (any + (' + ' + any)))),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-top', yPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (page + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_Utils_ap(_class, paragraph),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							'textarea' + (any + _class),
							_List_fromArray(
								[
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'line-height',
									'calc(1em + ' + ($elm$core$String$fromInt(y) + 'px)')),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'height',
									'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + left)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-right', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + (' > ' + right)),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'margin-left', xPx)
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::after'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-top',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								])),
							A4(
							$mdgriffith$elm_ui$Internal$Model$renderStyle,
							options,
							maybePseudo,
							_class + (paragraph + '::before'),
							_List_fromArray(
								[
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'content', '\'\''),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'display', 'block'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'height', '0'),
									A2($mdgriffith$elm_ui$Internal$Model$Property, 'width', '0'),
									A2(
									$mdgriffith$elm_ui$Internal$Model$Property,
									'margin-bottom',
									$elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
								]))
						]));
			case 7:
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'padding',
							$elm$core$String$fromFloat(top) + ('px ' + ($elm$core$String$fromFloat(right) + ('px ' + ($elm$core$String$fromFloat(bottom) + ('px ' + ($elm$core$String$fromFloat(left) + 'px')))))))
						]));
			case 6:
				var cls = rule.a;
				var top = rule.b;
				var right = rule.c;
				var bottom = rule.d;
				var left = rule.e;
				var _class = '.' + cls;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$renderStyle,
					options,
					maybePseudo,
					_class,
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Internal$Model$Property,
							'border-width',
							$elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px')))))))
						]));
			case 8:
				var template = rule.a;
				var toGridLengthHelper = F3(
					function (minimum, maximum, x) {
						toGridLengthHelper:
						while (true) {
							switch (x.$) {
								case 0:
									var px = x.a;
									return $elm$core$String$fromInt(px) + 'px';
								case 1:
									var _v2 = _Utils_Tuple2(minimum, maximum);
									if (_v2.a.$ === 1) {
										if (_v2.b.$ === 1) {
											var _v3 = _v2.a;
											var _v4 = _v2.b;
											return 'max-content';
										} else {
											var _v6 = _v2.a;
											var maxSize = _v2.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v2.b.$ === 1) {
											var minSize = _v2.a.a;
											var _v5 = _v2.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
										} else {
											var minSize = _v2.a.a;
											var maxSize = _v2.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 2:
									var i = x.a;
									var _v7 = _Utils_Tuple2(minimum, maximum);
									if (_v7.a.$ === 1) {
										if (_v7.b.$ === 1) {
											var _v8 = _v7.a;
											var _v9 = _v7.b;
											return $elm$core$String$fromInt(i) + 'fr';
										} else {
											var _v11 = _v7.a;
											var maxSize = _v7.b.a;
											return 'minmax(max-content, ' + ($elm$core$String$fromInt(maxSize) + 'px)');
										}
									} else {
										if (_v7.b.$ === 1) {
											var minSize = _v7.a.a;
											var _v10 = _v7.b;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
										} else {
											var minSize = _v7.a.a;
											var maxSize = _v7.b.a;
											return 'minmax(' + ($elm$core$String$fromInt(minSize) + ('px, ' + ($elm$core$String$fromInt(maxSize) + 'px)')));
										}
									}
								case 3:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = $elm$core$Maybe$Just(m),
										$temp$maximum = maximum,
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
								default:
									var m = x.a;
									var len = x.b;
									var $temp$minimum = minimum,
										$temp$maximum = $elm$core$Maybe$Just(m),
										$temp$x = len;
									minimum = $temp$minimum;
									maximum = $temp$maximum;
									x = $temp$x;
									continue toGridLengthHelper;
							}
						}
					});
				var toGridLength = function (x) {
					return A3(toGridLengthHelper, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing, x);
				};
				var xSpacing = toGridLength(template.ed.a);
				var ySpacing = toGridLength(template.ed.b);
				var rows = function (x) {
					return 'grid-template-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.d3)));
				var msRows = function (x) {
					return '-ms-grid-rows: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.M)));
				var msColumns = function (x) {
					return '-ms-grid-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						ySpacing,
						A2($elm$core$List$map, toGridLength, template.M)));
				var gapY = 'grid-row-gap:' + (toGridLength(template.ed.b) + ';');
				var gapX = 'grid-column-gap:' + (toGridLength(template.ed.a) + ';');
				var columns = function (x) {
					return 'grid-template-columns: ' + (x + ';');
				}(
					A2(
						$elm$core$String$join,
						' ',
						A2($elm$core$List$map, toGridLength, template.M)));
				var _class = '.grid-rows-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.d3)) + ('-cols-' + (A2(
					$elm$core$String$join,
					'-',
					A2($elm$core$List$map, $mdgriffith$elm_ui$Internal$Model$lengthClassName, template.M)) + ('-space-x-' + ($mdgriffith$elm_ui$Internal$Model$lengthClassName(template.ed.a) + ('-space-y-' + $mdgriffith$elm_ui$Internal$Model$lengthClassName(template.ed.b)))))));
				var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msColumns + (msRows + '}')));
				return _List_fromArray(
					[base, supports]);
			case 9:
				var position = rule.a;
				var msPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'-ms-grid-row: ' + ($elm$core$String$fromInt(position.d2) + ';'),
							'-ms-grid-row-span: ' + ($elm$core$String$fromInt(position.bN) + ';'),
							'-ms-grid-column: ' + ($elm$core$String$fromInt(position.bF) + ';'),
							'-ms-grid-column-span: ' + ($elm$core$String$fromInt(position.x) + ';')
						]));
				var modernPosition = A2(
					$elm$core$String$join,
					' ',
					_List_fromArray(
						[
							'grid-row: ' + ($elm$core$String$fromInt(position.d2) + (' / ' + ($elm$core$String$fromInt(position.d2 + position.bN) + ';'))),
							'grid-column: ' + ($elm$core$String$fromInt(position.bF) + (' / ' + ($elm$core$String$fromInt(position.bF + position.x) + ';')))
						]));
				var _class = '.grid-pos-' + ($elm$core$String$fromInt(position.d2) + ('-' + ($elm$core$String$fromInt(position.bF) + ('-' + ($elm$core$String$fromInt(position.x) + ('-' + $elm$core$String$fromInt(position.bN)))))));
				var modernGrid = _class + ('{' + (modernPosition + '}'));
				var supports = '@supports (display:grid) {' + (modernGrid + '}');
				var base = _class + ('{' + (msPosition + '}'));
				return _List_fromArray(
					[base, supports]);
			case 11:
				var _class = rule.a;
				var styles = rule.b;
				var renderPseudoRule = function (style) {
					return A3(
						$mdgriffith$elm_ui$Internal$Model$renderStyleRule,
						options,
						style,
						$elm$core$Maybe$Just(_class));
				};
				return A2($elm$core$List$concatMap, renderPseudoRule, styles);
			default:
				var transform = rule.a;
				var val = $mdgriffith$elm_ui$Internal$Model$transformValue(transform);
				var _class = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				var _v12 = _Utils_Tuple2(_class, val);
				if ((!_v12.a.$) && (!_v12.b.$)) {
					var cls = _v12.a.a;
					var v = _v12.b.a;
					return A4(
						$mdgriffith$elm_ui$Internal$Model$renderStyle,
						options,
						maybePseudo,
						'.' + cls,
						_List_fromArray(
							[
								A2($mdgriffith$elm_ui$Internal$Model$Property, 'transform', v)
							]));
				} else {
					return _List_Nil;
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$encodeStyles = F2(
	function (options, stylesheet) {
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$map,
				function (style) {
					var styled = A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing);
					return _Utils_Tuple2(
						$mdgriffith$elm_ui$Internal$Model$getStyleName(style),
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, styled));
				},
				stylesheet));
	});
var $mdgriffith$elm_ui$Internal$Model$bracket = F2(
	function (selector, rules) {
		var renderPair = function (_v0) {
			var name = _v0.a;
			var val = _v0.b;
			return name + (': ' + (val + ';'));
		};
		return selector + (' {' + (A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, renderPair, rules)) + '}'));
	});
var $mdgriffith$elm_ui$Internal$Model$fontRule = F3(
	function (name, modifier, _v0) {
		var parentAdj = _v0.a;
		var textAdjustment = _v0.b;
		return _List_fromArray(
			[
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + (', ' + ('.' + (name + (' .' + modifier))))))), parentAdj),
				A2($mdgriffith$elm_ui$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.er + (', .' + (name + (' .' + (modifier + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.er)))))))))), textAdjustment)
			]);
	});
var $mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule = F3(
	function (fontToAdjust, _v0, otherFontName) {
		var full = _v0.a;
		var capital = _v0.b;
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_Utils_ap(
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.eb, capital),
				A3($mdgriffith$elm_ui$Internal$Model$fontRule, name, $mdgriffith$elm_ui$Internal$Style$classes.dp, full)));
	});
var $mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule = F2(
	function (fontToAdjust, otherFontName) {
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.eb + (', ' + ('.' + (name + (' .' + $mdgriffith$elm_ui$Internal$Style$classes.eb))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					$mdgriffith$elm_ui$Internal$Model$bracket,
					'.' + (name + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.eb + ('> .' + ($mdgriffith$elm_ui$Internal$Style$classes.er + (', .' + (name + (' .' + ($mdgriffith$elm_ui$Internal$Style$classes.eb + (' > .' + $mdgriffith$elm_ui$Internal$Style$classes.er)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {bN: height / size, a_: size, cs: vertical};
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.c$, adjustment.cP, adjustment.dg, adjustment.dL]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.dg,
		$elm$core$List$minimum(lines));
	var newBaseline = A2(
		$elm$core$Maybe$withDefault,
		adjustment.cP,
		$elm$core$List$minimum(
			A2(
				$elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, descender);
				},
				lines)));
	var base = lineHeight;
	var ascender = A2(
		$elm$core$Maybe$withDefault,
		adjustment.c$,
		$elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		c$: A3($mdgriffith$elm_ui$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		bM: A3($mdgriffith$elm_ui$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
	};
};
var $mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules = function (converted) {
	return _Utils_Tuple2(
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'block')
			]),
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'inline-block'),
				_Utils_Tuple2(
				'line-height',
				$elm$core$String$fromFloat(converted.bN)),
				_Utils_Tuple2(
				'vertical-align',
				$elm$core$String$fromFloat(converted.cs) + 'em'),
				_Utils_Tuple2(
				'font-size',
				$elm$core$String$fromFloat(converted.a_) + 'em')
			]));
};
var $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 1) {
					if (face.$ === 5) {
						var _with = face.a;
						var _v2 = _with.cB;
						if (_v2.$ === 1) {
							return found;
						} else {
							var adjustment = _v2.a;
							return $elm$core$Maybe$Just(
								_Utils_Tuple2(
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.bM;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment))),
									$mdgriffith$elm_ui$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.c$;
										}(
											$mdgriffith$elm_ui$Internal$Model$convertAdjustment(adjustment)))));
						}
					} else {
						return found;
					}
				} else {
					return found;
				}
			}),
		$elm$core$Maybe$Nothing,
		typefaces);
};
var $mdgriffith$elm_ui$Internal$Model$renderTopLevelValues = function (rules) {
	var withImport = function (font) {
		if (font.$ === 4) {
			var url = font.b;
			return $elm$core$Maybe$Just('@import url(\'' + (url + '\');'));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	var fontImports = function (_v2) {
		var name = _v2.a;
		var typefaces = _v2.b;
		var imports = A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$filterMap, withImport, typefaces));
		return imports;
	};
	var allNames = A2($elm$core$List$map, $elm$core$Tuple$first, rules);
	var fontAdjustments = function (_v1) {
		var name = _v1.a;
		var typefaces = _v1.b;
		var _v0 = $mdgriffith$elm_ui$Internal$Model$typefaceAdjustment(typefaces);
		if (_v0.$ === 1) {
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$mdgriffith$elm_ui$Internal$Model$renderNullAdjustmentRule(name),
					allNames));
		} else {
			var adjustment = _v0.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					A2($mdgriffith$elm_ui$Internal$Model$renderFontAdjustmentRule, name, adjustment),
					allNames));
		}
	};
	return _Utils_ap(
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontImports, rules)),
		A2(
			$elm$core$String$join,
			'\n',
			A2($elm$core$List$map, fontAdjustments, rules)));
};
var $mdgriffith$elm_ui$Internal$Model$topLevelValue = function (rule) {
	if (rule.$ === 1) {
		var name = rule.a;
		var typefaces = rule.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(name, typefaces));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var combine = F2(
			function (style, rendered) {
				return {
					aY: _Utils_ap(
						rendered.aY,
						A3($mdgriffith$elm_ui$Internal$Model$renderStyleRule, options, style, $elm$core$Maybe$Nothing)),
					aE: function () {
						var _v1 = $mdgriffith$elm_ui$Internal$Model$topLevelValue(style);
						if (_v1.$ === 1) {
							return rendered.aE;
						} else {
							var topLevel = _v1.a;
							return A2($elm$core$List$cons, topLevel, rendered.aE);
						}
					}()
				};
			});
		var _v0 = A3(
			$elm$core$List$foldl,
			combine,
			{aY: _List_Nil, aE: _List_Nil},
			stylesheet);
		var topLevel = _v0.aE;
		var rules = _v0.aY;
		return _Utils_ap(
			$mdgriffith$elm_ui$Internal$Model$renderTopLevelValues(topLevel),
			$elm$core$String$concat(rules));
	});
var $mdgriffith$elm_ui$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		var _v0 = options.dM;
		switch (_v0) {
			case 0:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			case 1:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'div',
					_List_Nil,
					_List_fromArray(
						[
							A3(
							$elm$virtual_dom$VirtualDom$node,
							'style',
							_List_Nil,
							_List_fromArray(
								[
									$elm$virtual_dom$VirtualDom$text(
									A2($mdgriffith$elm_ui$Internal$Model$toStyleSheetString, options, styleSheet))
								]))
						]));
			default:
				return A3(
					$elm$virtual_dom$VirtualDom$node,
					'elm-ui-rules',
					_List_fromArray(
						[
							A2(
							$elm$virtual_dom$VirtualDom$property,
							'rules',
							A2($mdgriffith$elm_ui$Internal$Model$encodeStyles, options, styleSheet))
						]),
					_List_Nil);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$embedKeyed = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.$7)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			_Utils_Tuple2(
				'static-stylesheet',
				$mdgriffith$elm_ui$Internal$Model$staticRoot(opts)),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
				children)) : A2(
			$elm$core$List$cons,
			_Utils_Tuple2('dynamic-stylesheet', dynamicStyleSheet),
			children);
	});
var $mdgriffith$elm_ui$Internal$Model$embedWith = F4(
	function (_static, opts, styles, children) {
		var dynamicStyleSheet = A2(
			$mdgriffith$elm_ui$Internal$Model$toStyleSheet,
			opts,
			A3(
				$elm$core$List$foldl,
				$mdgriffith$elm_ui$Internal$Model$reduceStyles,
				_Utils_Tuple2(
					$elm$core$Set$empty,
					$mdgriffith$elm_ui$Internal$Model$renderFocusStyle(opts.$7)),
				styles).b);
		return _static ? A2(
			$elm$core$List$cons,
			$mdgriffith$elm_ui$Internal$Model$staticRoot(opts),
			A2($elm$core$List$cons, dynamicStyleSheet, children)) : A2($elm$core$List$cons, dynamicStyleSheet, children);
	});
var $mdgriffith$elm_ui$Internal$Flag$heightBetween = $mdgriffith$elm_ui$Internal$Flag$flag(45);
var $mdgriffith$elm_ui$Internal$Flag$heightFill = $mdgriffith$elm_ui$Internal$Flag$flag(37);
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$core$Bitwise$and = _Bitwise_and;
var $mdgriffith$elm_ui$Internal$Flag$present = F2(
	function (myFlag, _v0) {
		var fieldOne = _v0.a;
		var fieldTwo = _v0.b;
		if (!myFlag.$) {
			var first = myFlag.a;
			return _Utils_eq(first & fieldOne, first);
		} else {
			var second = myFlag.a;
			return _Utils_eq(second & fieldTwo, second);
		}
	});
var $elm$html$Html$s = _VirtualDom_node('s');
var $elm$html$Html$u = _VirtualDom_node('u');
var $mdgriffith$elm_ui$Internal$Flag$widthBetween = $mdgriffith$elm_ui$Internal$Flag$flag(44);
var $mdgriffith$elm_ui$Internal$Flag$widthFill = $mdgriffith$elm_ui$Internal$Flag$flag(39);
var $mdgriffith$elm_ui$Internal$Model$finalizeNode = F6(
	function (has, node, attributes, children, embedMode, parentContext) {
		var createNode = F2(
			function (nodeName, attrs) {
				if (children.$ === 1) {
					var keyed = children.a;
					return A3(
						$elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 0:
									return keyed;
								case 2:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, false, opts, styles, keyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedKeyed, true, opts, styles, keyed);
							}
						}());
				} else {
					var unkeyed = children.a;
					return A2(
						function () {
							switch (nodeName) {
								case 'div':
									return $elm$html$Html$div;
								case 'p':
									return $elm$html$Html$p;
								default:
									return $elm$virtual_dom$VirtualDom$node(nodeName);
							}
						}(),
						attrs,
						function () {
							switch (embedMode.$) {
								case 0:
									return unkeyed;
								case 2:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, false, opts, styles, unkeyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4($mdgriffith$elm_ui$Internal$Model$embedWith, true, opts, styles, unkeyed);
							}
						}());
				}
			});
		var html = function () {
			switch (node.$) {
				case 0:
					return A2(createNode, 'div', attributes);
				case 1:
					var nodeName = node.a;
					return A2(createNode, nodeName, attributes);
				default:
					var nodeName = node.a;
					var internal = node.b;
					return A3(
						$elm$virtual_dom$VirtualDom$node,
						nodeName,
						attributes,
						_List_fromArray(
							[
								A2(
								createNode,
								internal,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.cM + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.ea))
									]))
							]));
			}
		}();
		switch (parentContext) {
			case 0:
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$widthBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignRight, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.cM, $mdgriffith$elm_ui$Internal$Style$classes.ea, $mdgriffith$elm_ui$Internal$Style$classes.aN, $mdgriffith$elm_ui$Internal$Style$classes.S, $mdgriffith$elm_ui$Internal$Style$classes.cI])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerX, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.cM, $mdgriffith$elm_ui$Internal$Style$classes.ea, $mdgriffith$elm_ui$Internal$Style$classes.aN, $mdgriffith$elm_ui$Internal$Style$classes.S, $mdgriffith$elm_ui$Internal$Style$classes.cG])))
						]),
					_List_fromArray(
						[html])) : html));
			case 1:
				return (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightFill, has) && (!A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$heightBetween, has))) ? html : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$centerY, has) ? A2(
					$elm$html$Html$s,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.cM, $mdgriffith$elm_ui$Internal$Style$classes.ea, $mdgriffith$elm_ui$Internal$Style$classes.aN, $mdgriffith$elm_ui$Internal$Style$classes.cH])))
						]),
					_List_fromArray(
						[html])) : (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$alignBottom, has) ? A2(
					$elm$html$Html$u,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class(
							A2(
								$elm$core$String$join,
								' ',
								_List_fromArray(
									[$mdgriffith$elm_ui$Internal$Style$classes.cM, $mdgriffith$elm_ui$Internal$Style$classes.ea, $mdgriffith$elm_ui$Internal$Style$classes.aN, $mdgriffith$elm_ui$Internal$Style$classes.cF])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $mdgriffith$elm_ui$Internal$Model$textElementClasses = $mdgriffith$elm_ui$Internal$Style$classes.cM + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.er + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.bw + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bc)))));
var $mdgriffith$elm_ui$Internal$Model$textElement = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$textElementFillClasses = $mdgriffith$elm_ui$Internal$Style$classes.cM + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.er + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.bx + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bd)))));
var $mdgriffith$elm_ui$Internal$Model$textElementFill = function (str) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Model$textElementFillClasses)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $mdgriffith$elm_ui$Internal$Model$createElement = F3(
	function (context, children, rendered) {
		var gatherKeyed = F2(
			function (_v8, _v9) {
				var key = _v8.a;
				var child = _v8.b;
				var htmls = _v9.a;
				var existingStyles = _v9.b;
				switch (child.$) {
					case 0:
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles);
					case 1:
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.dv, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.ej : _Utils_ap(styled.ej, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.dv, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context)),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.ej : _Utils_ap(styled.ej, existingStyles));
					case 2:
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_Tuple2(
									key,
									_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str)),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		var gather = F2(
			function (child, _v6) {
				var htmls = _v6.a;
				var existingStyles = _v6.b;
				switch (child.$) {
					case 0:
						var html = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								html(context),
								htmls),
							existingStyles);
					case 1:
						var styled = child.a;
						return _Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.dv, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.ej : _Utils_ap(styled.ej, existingStyles)) : _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								A2(styled.dv, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, context),
								htmls),
							$elm$core$List$isEmpty(existingStyles) ? styled.ej : _Utils_ap(styled.ej, existingStyles));
					case 2:
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								$elm$core$List$cons,
								_Utils_eq(context, $mdgriffith$elm_ui$Internal$Model$asEl) ? $mdgriffith$elm_ui$Internal$Model$textElementFill(str) : $mdgriffith$elm_ui$Internal$Model$textElement(str),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		if (children.$ === 1) {
			var keyedChildren = children.a;
			var _v1 = A3(
				$elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _v1.a;
			var styles = _v1.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.ej : _Utils_ap(rendered.ej, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.aa,
						rendered.ab,
						rendered.Y,
						$mdgriffith$elm_ui$Internal$Model$Keyed(
							A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.c3)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						dv: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.aa,
							rendered.ab,
							rendered.Y,
							$mdgriffith$elm_ui$Internal$Model$Keyed(
								A3($mdgriffith$elm_ui$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.c3))),
						ej: allStyles
					});
			}
		} else {
			var unkeyedChildren = children.a;
			var _v3 = A3(
				$elm$core$List$foldr,
				gather,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				unkeyedChildren);
			var unkeyed = _v3.a;
			var styles = _v3.b;
			var newStyles = $elm$core$List$isEmpty(styles) ? rendered.ej : _Utils_ap(rendered.ej, styles);
			if (!newStyles.b) {
				return $mdgriffith$elm_ui$Internal$Model$Unstyled(
					A5(
						$mdgriffith$elm_ui$Internal$Model$finalizeNode,
						rendered.aa,
						rendered.ab,
						rendered.Y,
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.c3)),
						$mdgriffith$elm_ui$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return $mdgriffith$elm_ui$Internal$Model$Styled(
					{
						dv: A4(
							$mdgriffith$elm_ui$Internal$Model$finalizeNode,
							rendered.aa,
							rendered.ab,
							rendered.Y,
							$mdgriffith$elm_ui$Internal$Model$Unkeyed(
								A2($mdgriffith$elm_ui$Internal$Model$addChildren, unkeyed, rendered.c3))),
						ej: allStyles
					});
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$Transform = function (a) {
	return {$: 10, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $mdgriffith$elm_ui$Internal$Flag$add = F2(
	function (myFlag, _v0) {
		var one = _v0.a;
		var two = _v0.b;
		if (!myFlag.$) {
			var first = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2($mdgriffith$elm_ui$Internal$Flag$Field, one, second | two);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehind = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$ChildrenInFront = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class(
					function () {
						switch (location) {
							case 0:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.am, $mdgriffith$elm_ui$Internal$Style$classes.ea, $mdgriffith$elm_ui$Internal$Style$classes.cA]));
							case 1:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.am, $mdgriffith$elm_ui$Internal$Style$classes.ea, $mdgriffith$elm_ui$Internal$Style$classes.cR]));
							case 2:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.am, $mdgriffith$elm_ui$Internal$Style$classes.ea, $mdgriffith$elm_ui$Internal$Style$classes.dR]));
							case 3:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.am, $mdgriffith$elm_ui$Internal$Style$classes.ea, $mdgriffith$elm_ui$Internal$Style$classes.dQ]));
							case 4:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.am, $mdgriffith$elm_ui$Internal$Style$classes.ea, $mdgriffith$elm_ui$Internal$Style$classes.dA]));
							default:
								return A2(
									$elm$core$String$join,
									' ',
									_List_fromArray(
										[$mdgriffith$elm_ui$Internal$Style$classes.am, $mdgriffith$elm_ui$Internal$Style$classes.ea, $mdgriffith$elm_ui$Internal$Style$classes.cQ]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 3:
							return $elm$virtual_dom$VirtualDom$text('');
						case 2:
							var str = elem.a;
							return $mdgriffith$elm_ui$Internal$Model$textElement(str);
						case 0:
							var html = elem.a;
							return html($mdgriffith$elm_ui$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.dv, $mdgriffith$elm_ui$Internal$Model$NoStyleSheet, $mdgriffith$elm_ui$Internal$Model$asEl);
					}
				}()
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2($mdgriffith$elm_ui$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 0:
				if (location === 5) {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 1:
				var existingBehind = existing.a;
				if (location === 5) {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenBehind(
						A2($elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 2:
				var existingInFront = existing.a;
				if (location === 5) {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						_List_fromArray(
							[nearby]),
						existingInFront);
				} else {
					return $mdgriffith$elm_ui$Internal$Model$ChildrenInFront(
						A2($elm$core$List$cons, nearby, existingInFront));
				}
			default:
				var existingBehind = existing.a;
				var existingInFront = existing.b;
				if (location === 5) {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						A2($elm$core$List$cons, nearby, existingBehind),
						existingInFront);
				} else {
					return A2(
						$mdgriffith$elm_ui$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						A2($elm$core$List$cons, nearby, existingInFront));
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Embedded = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$NodeName = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 0:
				return $mdgriffith$elm_ui$Internal$Model$NodeName(newNode);
			case 1:
				var name = old.a;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2($mdgriffith$elm_ui$Internal$Model$Embedded, x, y);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$alignXName = function (align) {
	switch (align) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Style$classes.a5 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bA);
		case 2:
			return $mdgriffith$elm_ui$Internal$Style$classes.a5 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bB);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.a5 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.cD);
	}
};
var $mdgriffith$elm_ui$Internal$Model$alignYName = function (align) {
	switch (align) {
		case 0:
			return $mdgriffith$elm_ui$Internal$Style$classes.a6 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.cJ);
		case 2:
			return $mdgriffith$elm_ui$Internal$Style$classes.a6 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.cC);
		default:
			return $mdgriffith$elm_ui$Internal$Style$classes.a6 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.cE);
	}
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $mdgriffith$elm_ui$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 2, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Internal$Model$Moved = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 0:
				switch (component.$) {
					case 0:
						var x = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 1:
						var y = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 2:
						var z = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 3:
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 4:
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var xyz = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							xyz,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			case 1:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 0:
						var newX = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 1:
						var newY = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 2:
						var newZ = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 3:
						var xyz = component.a;
						return $mdgriffith$elm_ui$Internal$Model$Moved(xyz);
					case 4:
						var xyz = component.a;
						var angle = component.b;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var scale = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							moved,
							scale,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			default:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				var scaled = transform.b;
				var origin = transform.c;
				var angle = transform.d;
				switch (component.$) {
					case 0:
						var newX = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 1:
						var newY = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 2:
						var newZ = component.a;
						return A4(
							$mdgriffith$elm_ui$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 3:
						var newMove = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 4:
						var newOrigin = component.a;
						var newAngle = component.b;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
					default:
						var newScale = component.a;
						return A4($mdgriffith$elm_ui$Internal$Model$FullTransform, moved, newScale, origin, angle);
				}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$height = $mdgriffith$elm_ui$Internal$Flag$flag(7);
var $mdgriffith$elm_ui$Internal$Flag$heightContent = $mdgriffith$elm_ui$Internal$Flag$flag(36);
var $mdgriffith$elm_ui$Internal$Flag$merge = F2(
	function (_v0, _v1) {
		var one = _v0.a;
		var two = _v0.b;
		var three = _v1.a;
		var four = _v1.b;
		return A2($mdgriffith$elm_ui$Internal$Flag$Field, one | three, two | four);
	});
var $mdgriffith$elm_ui$Internal$Flag$none = A2($mdgriffith$elm_ui$Internal$Flag$Field, 0, 0);
var $mdgriffith$elm_ui$Internal$Model$renderHeight = function (h) {
	switch (h.$) {
		case 0:
			var px = h.a;
			var val = $elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.bO + (' ' + name),
				_List_fromArray(
					[
						A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 1:
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.bc,
				_List_Nil);
		case 2:
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.bd,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.bP + (' height-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.cM + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.R + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'height-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 3:
			var minSize = h.a;
			var len = h.b;
			var cls = 'min-height-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-height',
				$elm$core$String$fromInt(minSize) + 'px');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = h.a;
			var len = h.b;
			var cls = 'max-height-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-height',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderHeight(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$widthContent = $mdgriffith$elm_ui$Internal$Flag$flag(38);
var $mdgriffith$elm_ui$Internal$Model$renderWidth = function (w) {
	switch (w.$) {
		case 0:
			var px = w.a;
			return _Utils_Tuple3(
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Style$classes.cw + (' width-px-' + $elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						'width-px-' + $elm$core$String$fromInt(px),
						'width',
						$elm$core$String$fromInt(px) + 'px')
					]));
		case 1:
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthContent, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.bw,
				_List_Nil);
		case 2:
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.bx,
				_List_Nil) : _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthFill, $mdgriffith$elm_ui$Internal$Flag$none),
				$mdgriffith$elm_ui$Internal$Style$classes.cx + (' width-fill-' + $elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						$mdgriffith$elm_ui$Internal$Model$Single,
						$mdgriffith$elm_ui$Internal$Style$classes.cM + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.d2 + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
							'width-fill-' + $elm$core$String$fromInt(portion))))),
						'flex-grow',
						$elm$core$String$fromInt(portion * 100000))
					]));
		case 3:
			var minSize = w.a;
			var len = w.b;
			var cls = 'min-width-' + $elm$core$String$fromInt(minSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'min-width',
				$elm$core$String$fromInt(minSize) + 'px');
			var _v1 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v1.a;
			var newAttrs = _v1.b;
			var newStyle = _v1.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
		default:
			var maxSize = w.a;
			var len = w.b;
			var cls = 'max-width-' + $elm$core$String$fromInt(maxSize);
			var style = A3(
				$mdgriffith$elm_ui$Internal$Model$Single,
				cls,
				'max-width',
				$elm$core$String$fromInt(maxSize) + 'px');
			var _v2 = $mdgriffith$elm_ui$Internal$Model$renderWidth(len);
			var newFlag = _v2.a;
			var newAttrs = _v2.b;
			var newStyle = _v2.c;
			return _Utils_Tuple3(
				A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2($elm$core$List$cons, style, newStyle));
	}
};
var $mdgriffith$elm_ui$Internal$Flag$borderWidth = $mdgriffith$elm_ui$Internal$Flag$flag(27);
var $elm$core$Basics$ge = _Utils_ge;
var $mdgriffith$elm_ui$Internal$Model$skippable = F2(
	function (flag, style) {
		if (_Utils_eq(flag, $mdgriffith$elm_ui$Internal$Flag$borderWidth)) {
			if (style.$ === 3) {
				var val = style.c;
				switch (val) {
					case '0px':
						return true;
					case '1px':
						return true;
					case '2px':
						return true;
					case '3px':
						return true;
					case '4px':
						return true;
					case '5px':
						return true;
					case '6px':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			switch (style.$) {
				case 2:
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 7:
					var name = style.a;
					var t = style.b;
					var r = style.c;
					var b = style.d;
					var l = style.e;
					return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && ((t >= 0) && (t <= 24))));
				default:
					return false;
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$width = $mdgriffith$elm_ui$Internal$Flag$flag(6);
var $mdgriffith$elm_ui$Internal$Flag$xAlign = $mdgriffith$elm_ui$Internal$Flag$flag(30);
var $mdgriffith$elm_ui$Internal$Flag$yAlign = $mdgriffith$elm_ui$Internal$Flag$flag(29);
var $mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive = F8(
	function (classes, node, has, transform, styles, attrs, children, elementAttrs) {
		gatherAttrRecursive:
		while (true) {
			if (!elementAttrs.b) {
				var _v1 = $mdgriffith$elm_ui$Internal$Model$transformClass(transform);
				if (_v1.$ === 1) {
					return {
						Y: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes),
							attrs),
						c3: children,
						aa: has,
						ab: node,
						ej: styles
					};
				} else {
					var _class = _v1.a;
					return {
						Y: A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						c3: children,
						aa: has,
						ab: node,
						ej: A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 0:
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 3:
						var flag = attribute.a;
						var exactClassName = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = exactClassName + (' ' + classes),
								$temp$node = node,
								$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					case 1:
						var actualAttribute = attribute.a;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = A2($elm$core$List$cons, actualAttribute, attrs),
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 4:
						var flag = attribute.a;
						var style = attribute.b;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							if (A2($mdgriffith$elm_ui$Internal$Model$skippable, flag, style)) {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							} else {
								var $temp$classes = $mdgriffith$elm_ui$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = A2($elm$core$List$cons, style, styles),
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							}
						}
					case 10:
						var flag = attribute.a;
						var component = attribute.b;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, flag, has),
							$temp$transform = A2($mdgriffith$elm_ui$Internal$Model$composeTransformation, transform, component),
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 7:
						var width = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$width, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (width.$) {
								case 0:
									var px = width.a;
									var $temp$classes = ($mdgriffith$elm_ui$Internal$Style$classes.cw + (' width-px-' + $elm$core$String$fromInt(px))) + (' ' + classes),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3(
											$mdgriffith$elm_ui$Internal$Model$Single,
											'width-px-' + $elm$core$String$fromInt(px),
											'width',
											$elm$core$String$fromInt(px) + 'px'),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 1:
									var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bw),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$widthContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 2:
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.bx),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.cx + (' width-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$widthFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.cM + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.d2 + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'width-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v4 = $mdgriffith$elm_ui$Internal$Model$renderWidth(width);
									var addToFlags = _v4.a;
									var newClass = _v4.b;
									var newStyles = _v4.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 8:
						var height = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$height, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (height.$) {
								case 0:
									var px = height.a;
									var val = $elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.bO + (' ' + (name + (' ' + classes))),
										$temp$node = node,
										$temp$has = A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has),
										$temp$transform = transform,
										$temp$styles = A2(
										$elm$core$List$cons,
										A3($mdgriffith$elm_ui$Internal$Model$Single, name, 'height ', val),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 1:
									var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.bc + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$add,
										$mdgriffith$elm_ui$Internal$Flag$heightContent,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 2:
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = $mdgriffith$elm_ui$Internal$Style$classes.bd + (' ' + classes),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.bP + (' height-fill-' + $elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											$mdgriffith$elm_ui$Internal$Flag$add,
											$mdgriffith$elm_ui$Internal$Flag$heightFill,
											A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											$elm$core$List$cons,
											A3(
												$mdgriffith$elm_ui$Internal$Model$Single,
												$mdgriffith$elm_ui$Internal$Style$classes.cM + ('.' + ($mdgriffith$elm_ui$Internal$Style$classes.R + (' > ' + $mdgriffith$elm_ui$Internal$Style$dot(
													'height-fill-' + $elm$core$String$fromInt(portion))))),
												'flex-grow',
												$elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _v6 = $mdgriffith$elm_ui$Internal$Model$renderHeight(height);
									var addToFlags = _v6.a;
									var newClass = _v6.b;
									var newStyles = _v6.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(
										$mdgriffith$elm_ui$Internal$Flag$merge,
										addToFlags,
										A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 2:
						var description = attribute.a;
						switch (description.$) {
							case 0:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'main', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 1:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'nav', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 2:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'footer', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 3:
								var $temp$classes = classes,
									$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'aside', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 4:
								var i = description.a;
								if (i <= 1) {
									var $temp$classes = classes,
										$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h1', node),
										$temp$has = has,
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								} else {
									if (i < 7) {
										var $temp$classes = classes,
											$temp$node = A2(
											$mdgriffith$elm_ui$Internal$Model$addNodeName,
											'h' + $elm$core$String$fromInt(i),
											node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes,
											$temp$node = A2($mdgriffith$elm_ui$Internal$Model$addNodeName, 'h6', node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								}
							case 9:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 8:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'role', 'button'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 5:
								var label = description.a;
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-label', label),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 6:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'polite'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							default:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									$elm$core$List$cons,
									A2($elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'assertive'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
						}
					case 9:
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 3:
									return styles;
								case 2:
									var str = elem.a;
									return styles;
								case 0:
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.ej);
							}
						}();
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = newStyles,
							$temp$attrs = attrs,
							$temp$children = A3($mdgriffith$elm_ui$Internal$Model$addNearbyElement, location, elem, children),
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 6:
						var x = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignXName(x) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (x) {
									case 1:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerX, flags);
									case 2:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignRight, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$xAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					default:
						var y = attribute.a;
						if (A2($mdgriffith$elm_ui$Internal$Flag$present, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = $mdgriffith$elm_ui$Internal$Model$alignYName(y) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (y) {
									case 1:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$centerY, flags);
									case 2:
										return A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$alignBottom, flags);
									default:
										return flags;
								}
							}(
								A2($mdgriffith$elm_ui$Internal$Flag$add, $mdgriffith$elm_ui$Internal$Flag$yAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
				}
			}
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Untransformed = {$: 0};
var $mdgriffith$elm_ui$Internal$Model$untransformed = $mdgriffith$elm_ui$Internal$Model$Untransformed;
var $mdgriffith$elm_ui$Internal$Model$element = F4(
	function (context, node, attributes, children) {
		return A3(
			$mdgriffith$elm_ui$Internal$Model$createElement,
			context,
			children,
			A8(
				$mdgriffith$elm_ui$Internal$Model$gatherAttrRecursive,
				$mdgriffith$elm_ui$Internal$Model$contextClasses(context),
				node,
				$mdgriffith$elm_ui$Internal$Flag$none,
				$mdgriffith$elm_ui$Internal$Model$untransformed,
				_List_Nil,
				_List_Nil,
				$mdgriffith$elm_ui$Internal$Model$NoNearbyChildren,
				$elm$core$List$reverse(attributes)));
	});
var $mdgriffith$elm_ui$Internal$Model$Height = function (a) {
	return {$: 8, a: a};
};
var $mdgriffith$elm_ui$Element$height = $mdgriffith$elm_ui$Internal$Model$Height;
var $mdgriffith$elm_ui$Internal$Model$Attr = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$htmlClass = function (cls) {
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		$elm$html$Html$Attributes$class(cls));
};
var $mdgriffith$elm_ui$Internal$Model$Content = {$: 1};
var $mdgriffith$elm_ui$Element$shrink = $mdgriffith$elm_ui$Internal$Model$Content;
var $mdgriffith$elm_ui$Internal$Model$Width = function (a) {
	return {$: 7, a: a};
};
var $mdgriffith$elm_ui$Element$width = $mdgriffith$elm_ui$Internal$Model$Width;
var $mdgriffith$elm_ui$Element$column = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.da + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.au)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $mdgriffith$elm_ui$Internal$Model$AlignX = function (a) {
	return {$: 6, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$CenterX = 1;
var $mdgriffith$elm_ui$Element$centerX = $mdgriffith$elm_ui$Internal$Model$AlignX(1);
var $mdgriffith$elm_ui$Element$el = F2(
	function (attrs, child) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					attrs)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[child])));
	});
var $mdgriffith$elm_ui$Internal$Model$Px = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Element$px = $mdgriffith$elm_ui$Internal$Model$Px;
var $author$project$Main$pct = F2(
	function (w, percent) {
		return $mdgriffith$elm_ui$Element$px(((percent * w) / 100) | 0);
	});
var $author$project$Main$content = F2(
	function (w, percent) {
		return $mdgriffith$elm_ui$Element$el(
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$width(
					A2($author$project$Main$pct, w, percent))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$Fill = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Element$fill = $mdgriffith$elm_ui$Internal$Model$Fill(1);
var $mdgriffith$elm_ui$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $mdgriffith$elm_ui$Element$rgb255 = F3(
	function (red, green, blue) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, red / 255, green / 255, blue / 255, 1);
	});
var $author$project$Colors$teal = A3($mdgriffith$elm_ui$Element$rgb255, 103, 201, 207);
var $author$project$Colors$accent = function (_v0) {
	return $author$project$Colors$teal;
};
var $mdgriffith$elm_ui$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$bgColor = $mdgriffith$elm_ui$Internal$Flag$flag(8);
var $mdgriffith$elm_ui$Internal$Model$formatColorClass = function (_v0) {
	var red = _v0.a;
	var green = _v0.b;
	var blue = _v0.c;
	var alpha = _v0.d;
	return $mdgriffith$elm_ui$Internal$Model$floatClass(red) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(green) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(blue) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(alpha))))));
};
var $mdgriffith$elm_ui$Element$Background$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$bgColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'background-color',
			clr));
};
var $mdgriffith$elm_ui$Internal$Flag$fontColor = $mdgriffith$elm_ui$Internal$Flag$flag(14);
var $mdgriffith$elm_ui$Element$Font$color = function (fontColor) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(fontColor),
			'color',
			fontColor));
};
var $author$project$Utils$directions0 = {bD: 0, bZ: 0, cf: 0, cn: 0};
var $mdgriffith$elm_ui$Internal$Model$Describe = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$Heading = function (a) {
	return {$: 4, a: a};
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $mdgriffith$elm_ui$Element$Region$heading = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Describe, $mdgriffith$elm_ui$Internal$Model$Heading);
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var $mdgriffith$elm_ui$Element$link = F2(
	function (attrs, _v0) {
		var url = _v0.cq;
		var label = _v0.bX;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$NodeName('a'),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Attributes$href(url)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						$elm$html$Html$Attributes$rel('noopener noreferrer')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aP + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.S + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.dK)))),
								attrs))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $mdgriffith$elm_ui$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 7, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Flag$padding = $mdgriffith$elm_ui$Internal$Flag$flag(2);
var $mdgriffith$elm_ui$Internal$Model$paddingName = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left)))))));
	});
var $mdgriffith$elm_ui$Element$paddingEach = function (_v0) {
	var top = _v0.cn;
	var right = _v0.cf;
	var bottom = _v0.bD;
	var left = _v0.bZ;
	if (_Utils_eq(top, right) && (_Utils_eq(top, bottom) && _Utils_eq(top, left))) {
		var topFloat = top;
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				'p-' + $elm$core$String$fromInt(top),
				topFloat,
				topFloat,
				topFloat,
				topFloat));
	} else {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$padding,
			A5(
				$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
				A4($mdgriffith$elm_ui$Internal$Model$paddingName, top, right, bottom, left),
				top,
				right,
				bottom,
				left));
	}
};
var $author$project$Env$rootUrl = '/';
var $mdgriffith$elm_ui$Internal$Model$FontSize = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Internal$Flag$fontSize = $mdgriffith$elm_ui$Internal$Flag$flag(4);
var $mdgriffith$elm_ui$Element$Font$size = function (i) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontSize,
		$mdgriffith$elm_ui$Internal$Model$FontSize(i));
};
var $mdgriffith$elm_ui$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$fontFamily = $mdgriffith$elm_ui$Internal$Flag$flag(5);
var $elm$core$String$toLower = _String_toLower;
var $elm$core$String$words = _String_words;
var $mdgriffith$elm_ui$Internal$Model$renderFontClassName = F2(
	function (font, current) {
		return _Utils_ap(
			current,
			function () {
				switch (font.$) {
					case 0:
						return 'serif';
					case 1:
						return 'sans-serif';
					case 2:
						return 'monospace';
					case 3:
						var name = font.a;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					case 4:
						var name = font.a;
						var url = font.b;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
					default:
						var name = font.a.w;
						return A2(
							$elm$core$String$join,
							'-',
							$elm$core$String$words(
								$elm$core$String$toLower(name)));
				}
			}());
	});
var $mdgriffith$elm_ui$Element$Font$family = function (families) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$fontFamily,
		A2(
			$mdgriffith$elm_ui$Internal$Model$FontFamily,
			A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'ff-', families),
			families));
};
var $mdgriffith$elm_ui$Internal$Model$Serif = {$: 0};
var $mdgriffith$elm_ui$Element$Font$serif = $mdgriffith$elm_ui$Internal$Model$Serif;
var $mdgriffith$elm_ui$Internal$Model$Typeface = function (a) {
	return {$: 3, a: a};
};
var $mdgriffith$elm_ui$Element$Font$typeface = $mdgriffith$elm_ui$Internal$Model$Typeface;
var $author$project$Main$sourceSerifPro = $mdgriffith$elm_ui$Element$Font$family(
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Font$typeface('SourceSerifPro'),
			$mdgriffith$elm_ui$Element$Font$serif
		]));
var $mdgriffith$elm_ui$Internal$Model$Text = function (a) {
	return {$: 2, a: a};
};
var $mdgriffith$elm_ui$Element$text = function (content) {
	return $mdgriffith$elm_ui$Internal$Model$Text(content);
};
var $author$project$Main$heading = A2(
	$mdgriffith$elm_ui$Element$link,
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Region$heading(1),
			$mdgriffith$elm_ui$Element$Font$size(36),
			$author$project$Main$sourceSerifPro,
			$mdgriffith$elm_ui$Element$paddingEach(
			_Utils_update(
				$author$project$Utils$directions0,
				{cf: 12}))
		]),
	{
		bX: $mdgriffith$elm_ui$Element$text('Unanswered'),
		cq: $author$project$Env$rootUrl
	});
var $author$project$Main$MenuToggled = {$: 2};
var $mdgriffith$elm_ui$Internal$Model$Right = 2;
var $mdgriffith$elm_ui$Element$alignRight = $mdgriffith$elm_ui$Internal$Model$AlignX(2);
var $mdgriffith$elm_ui$Internal$Model$Button = {$: 8};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $mdgriffith$elm_ui$Internal$Model$NoAttribute = {$: 0};
var $mdgriffith$elm_ui$Element$Input$hasFocusStyle = function (attr) {
	if (((attr.$ === 4) && (attr.b.$ === 11)) && (!attr.b.a)) {
		var _v1 = attr.b;
		var _v2 = _v1.a;
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$focusDefault = function (attrs) {
	return A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, attrs) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass('focusable');
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $mdgriffith$elm_ui$Element$Events$onClick = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Events$onClick);
var $mdgriffith$elm_ui$Element$Input$enter = 'Enter';
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 2, a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $mdgriffith$elm_ui$Element$Input$onKey = F2(
	function (desiredCode, msg) {
		var decode = function (code) {
			return _Utils_eq(code, desiredCode) ? $elm$json$Json$Decode$succeed(msg) : $elm$json$Json$Decode$fail('Not the enter key');
		};
		var isKey = A2(
			$elm$json$Json$Decode$andThen,
			decode,
			A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
		return $mdgriffith$elm_ui$Internal$Model$Attr(
			A2(
				$elm$html$Html$Events$preventDefaultOn,
				'keyup',
				A2(
					$elm$json$Json$Decode$map,
					function (fired) {
						return _Utils_Tuple2(fired, true);
					},
					isKey)));
	});
var $mdgriffith$elm_ui$Element$Input$onEnter = function (msg) {
	return A2($mdgriffith$elm_ui$Element$Input$onKey, $mdgriffith$elm_ui$Element$Input$enter, msg);
};
var $mdgriffith$elm_ui$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$cursor = $mdgriffith$elm_ui$Internal$Flag$flag(21);
var $mdgriffith$elm_ui$Element$pointer = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.dc);
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $mdgriffith$elm_ui$Element$Input$button = F2(
	function (attrs, _v0) {
		var onPress = _v0.aV;
		var label = _v0.bX;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aP + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.S + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.d7 + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.b$)))))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$pointer,
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$Input$focusDefault(attrs),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Button),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											$elm$html$Html$Attributes$tabindex(0)),
										function () {
											if (onPress.$ === 1) {
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Internal$Model$Attr(
														$elm$html$Html$Attributes$disabled(true)),
													attrs);
											} else {
												var msg = onPress.a;
												return A2(
													$elm$core$List$cons,
													$mdgriffith$elm_ui$Element$Events$onClick(msg),
													A2(
														$elm$core$List$cons,
														$mdgriffith$elm_ui$Element$Input$onEnter(msg),
														attrs));
											}
										}()))))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $author$project$Colors$darkTeal = A3($mdgriffith$elm_ui$Element$rgb255, 64, 124, 128);
var $author$project$Colors$accentDark = function (_v0) {
	return $author$project$Colors$darkTeal;
};
var $mdgriffith$elm_ui$Internal$Flag$borderColor = $mdgriffith$elm_ui$Internal$Flag$flag(28);
var $mdgriffith$elm_ui$Element$Border$color = function (clr) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderColor,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Colored,
			'bc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(clr),
			'border-color',
			clr));
};
var $mdgriffith$elm_ui$Internal$Model$BorderWidth = F5(
	function (a, b, c, d, e) {
		return {$: 6, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Element$Border$width = function (v) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + $elm$core$String$fromInt(v),
			v,
			v,
			v,
			v));
};
var $mdgriffith$elm_ui$Element$Border$widthXY = F2(
	function (x, y) {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$borderWidth,
			A5(
				$mdgriffith$elm_ui$Internal$Model$BorderWidth,
				'b-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
				y,
				x,
				y,
				x));
	});
var $mdgriffith$elm_ui$Element$Border$widthEach = function (_v0) {
	var bottom = _v0.bD;
	var top = _v0.cn;
	var left = _v0.bZ;
	var right = _v0.cf;
	return (_Utils_eq(top, bottom) && _Utils_eq(left, right)) ? (_Utils_eq(top, right) ? $mdgriffith$elm_ui$Element$Border$width(top) : A2($mdgriffith$elm_ui$Element$Border$widthXY, left, top)) : A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderWidth,
		A5(
			$mdgriffith$elm_ui$Internal$Model$BorderWidth,
			'b-' + ($elm$core$String$fromInt(top) + ('-' + ($elm$core$String$fromInt(right) + ('-' + ($elm$core$String$fromInt(bottom) + ('-' + $elm$core$String$fromInt(left))))))),
			top,
			right,
			bottom,
			left));
};
var $author$project$Utils$borderBetween = function (elements) {
	if (!elements.b) {
		return _List_Nil;
	} else {
		if (!elements.b.b) {
			var element = elements.a;
			return _List_fromArray(
				[element]);
		} else {
			var element = elements.a;
			var rest = elements.b;
			return A2(
				$elm$core$List$cons,
				A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Border$widthEach(
							_Utils_update(
								$author$project$Utils$directions0,
								{bD: 1})),
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
						]),
					element),
				$author$project$Utils$borderBetween(rest));
		}
	}
};
var $author$project$Main$ChangeColorScheme = function (a) {
	return {$: 8, a: a};
};
var $author$project$Main$colorSchemeSwitcher = F2(
	function (colorScheme, attrs) {
		var _v0 = function () {
			if (!colorScheme) {
				return _Utils_Tuple2('Switch to dark mode 🌚', 1);
			} else {
				return _Utils_Tuple2('Switch to light mode 🌞', 0);
			}
		}();
		var lbl = _v0.a;
		var nextScheme = _v0.b;
		return A2(
			$mdgriffith$elm_ui$Element$Input$button,
			attrs,
			{
				bX: $mdgriffith$elm_ui$Element$text(lbl),
				aV: $elm$core$Maybe$Just(
					$author$project$Main$ChangeColorScheme(nextScheme))
			});
	});
var $author$project$Main$menuOption = F2(
	function (slug, lbl) {
		return A2(
			$mdgriffith$elm_ui$Element$link,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$paddingEach(
					_Utils_update(
						$author$project$Utils$directions0,
						{bD: 24, cn: 24}))
				]),
			{
				bX: $mdgriffith$elm_ui$Element$text(lbl),
				cq: _Utils_ap($author$project$Env$rootUrl, slug)
			});
	});
var $author$project$Main$ShowSearch = {$: 5};
var $author$project$Main$showSearch = A2(
	$mdgriffith$elm_ui$Element$Input$button,
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$paddingEach(
			_Utils_update(
				$author$project$Utils$directions0,
				{bD: 24, cn: 24}))
		]),
	{
		bX: $mdgriffith$elm_ui$Element$text('Search'),
		aV: $elm$core$Maybe$Just($author$project$Main$ShowSearch)
	});
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $mdgriffith$elm_ui$Element$newTabLink = F2(
	function (attrs, _v0) {
		var url = _v0.cq;
		var label = _v0.bX;
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$NodeName('a'),
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Attributes$href(url)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$Attr(
						$elm$html$Html$Attributes$rel('noopener noreferrer')),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$Attr(
							$elm$html$Html$Attributes$target('_blank')),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aP + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.S + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.dK)))),
									attrs)))))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[label])));
	});
var $author$project$Main$subscribeLink = A2(
	$mdgriffith$elm_ui$Element$newTabLink,
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$paddingEach(
			_Utils_update(
				$author$project$Utils$directions0,
				{bD: 24, cn: 24}))
		]),
	{
		bX: $mdgriffith$elm_ui$Element$text('Subscribe'),
		cq: 'http://eepurl.com/g_Wf8D'
	});
var $author$project$Main$menuOptions = function (colorScheme) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$size(24),
				$author$project$Main$sourceSerifPro
			]),
		$author$project$Utils$borderBetween(
			_List_fromArray(
				[
					A2($author$project$Main$menuOption, 'what-is-this', 'What is this?'),
					A2($author$project$Main$menuOption, 'who-am-i', 'Who am I?'),
					A2($author$project$Main$menuOption, 'contact-me', 'Contact me'),
					A2($author$project$Main$menuOption, 'categories', 'Posts by category'),
					$author$project$Main$showSearch,
					A2(
					$author$project$Main$colorSchemeSwitcher,
					colorScheme,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$paddingEach(
							_Utils_update(
								$author$project$Utils$directions0,
								{bD: 24, cn: 24}))
						])),
					$author$project$Main$subscribeLink
				])));
};
var $mdgriffith$elm_ui$Element$paddingXY = F2(
	function (x, y) {
		if (_Utils_eq(x, y)) {
			var f = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + $elm$core$String$fromInt(x),
					f,
					f,
					f,
					f));
		} else {
			var yFloat = y;
			var xFloat = x;
			return A2(
				$mdgriffith$elm_ui$Internal$Model$StyleClass,
				$mdgriffith$elm_ui$Internal$Flag$padding,
				A5(
					$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
					'p-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y))),
					yFloat,
					xFloat,
					yFloat,
					xFloat));
		}
	});
var $mdgriffith$elm_ui$Internal$Flag$borderRound = $mdgriffith$elm_ui$Internal$Flag$flag(17);
var $mdgriffith$elm_ui$Element$Border$rounded = function (radius) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$borderRound,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			'br-' + $elm$core$String$fromInt(radius),
			'border-radius',
			$elm$core$String$fromInt(radius) + 'px'));
};
var $author$project$Main$menuModal = function (colorScheme) {
	return A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
				$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
				$mdgriffith$elm_ui$Element$Background$color(
				$author$project$Colors$accentDark(colorScheme)),
				$mdgriffith$elm_ui$Element$Border$color(
				$author$project$Colors$accent(colorScheme)),
				$mdgriffith$elm_ui$Element$Border$width(1),
				$mdgriffith$elm_ui$Element$Border$rounded(6),
				A2($mdgriffith$elm_ui$Element$paddingXY, 45, 5)
			]),
		$author$project$Main$menuOptions(colorScheme));
};
var $mdgriffith$elm_ui$Internal$Model$Empty = {$: 3};
var $mdgriffith$elm_ui$Element$none = $mdgriffith$elm_ui$Internal$Model$Empty;
var $mdgriffith$elm_ui$Internal$Model$OnLeft = 3;
var $mdgriffith$elm_ui$Internal$Model$Nearby = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$createNearby = F2(
	function (loc, element) {
		if (element.$ === 3) {
			return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
		} else {
			return A2($mdgriffith$elm_ui$Internal$Model$Nearby, loc, element);
		}
	});
var $mdgriffith$elm_ui$Element$onLeft = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, 3, element);
};
var $author$project$Main$menu = F2(
	function (colorScheme, showMenu) {
		var modal = showMenu ? $author$project$Main$menuModal(colorScheme) : $mdgriffith$elm_ui$Element$none;
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$alignRight,
					$mdgriffith$elm_ui$Element$onLeft(modal)
				]),
			A2(
				$mdgriffith$elm_ui$Element$Input$button,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$size(30)
					]),
				{
					bX: $mdgriffith$elm_ui$Element$text('⋮'),
					aV: $elm$core$Maybe$Just($author$project$Main$MenuToggled)
				}));
	});
var $author$project$Colors$gray = A3($mdgriffith$elm_ui$Element$rgb255, 80, 80, 80);
var $author$project$Colors$disabled = function (_v0) {
	return $author$project$Colors$gray;
};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $mdgriffith$elm_ui$Internal$Model$unstyled = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Unstyled, $elm$core$Basics$always);
var $mdgriffith$elm_ui$Element$html = $mdgriffith$elm_ui$Internal$Model$unstyled;
var $elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$svg$Svg$map = $elm$virtual_dom$VirtualDom$map;
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$Attributes$strokeLinecap = _VirtualDom_attribute('stroke-linecap');
var $elm$svg$Svg$Attributes$strokeLinejoin = _VirtualDom_attribute('stroke-linejoin');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $feathericons$elm_feather$FeatherIcons$toHtml = F2(
	function (attributes, _v0) {
		var src = _v0.ck;
		var attrs = _v0.y;
		var strSize = $elm$core$String$fromFloat(attrs.a_);
		var baseAttributes = _List_fromArray(
			[
				$elm$svg$Svg$Attributes$fill('none'),
				$elm$svg$Svg$Attributes$height(
				_Utils_ap(strSize, attrs.aB)),
				$elm$svg$Svg$Attributes$width(
				_Utils_ap(strSize, attrs.aB)),
				$elm$svg$Svg$Attributes$stroke('currentColor'),
				$elm$svg$Svg$Attributes$strokeLinecap('round'),
				$elm$svg$Svg$Attributes$strokeLinejoin('round'),
				$elm$svg$Svg$Attributes$strokeWidth(
				$elm$core$String$fromFloat(attrs.a$)),
				$elm$svg$Svg$Attributes$viewBox(attrs.a3)
			]);
		var combinedAttributes = _Utils_ap(
			function () {
				var _v1 = attrs.aK;
				if (!_v1.$) {
					var c = _v1.a;
					return A2(
						$elm$core$List$cons,
						$elm$svg$Svg$Attributes$class(c),
						baseAttributes);
				} else {
					return baseAttributes;
				}
			}(),
			attributes);
		return A2(
			$elm$svg$Svg$svg,
			combinedAttributes,
			A2(
				$elm$core$List$map,
				$elm$svg$Svg$map($elm$core$Basics$never),
				src));
	});
var $author$project$Main$icon = F2(
	function (attrs, i) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			attrs,
			$mdgriffith$elm_ui$Element$html(
				A2($feathericons$elm_feather$FeatherIcons$toHtml, _List_Nil, i)));
	});
var $author$project$Main$arrow = F4(
	function (ic, slugf, model, post) {
		var next = A2(slugf, model, post);
		if (next.$ === 1) {
			return A2(
				$author$project$Main$icon,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Font$color(
						$author$project$Colors$disabled(model.l))
					]),
				ic);
		} else {
			var s = next.a;
			return A2(
				$mdgriffith$elm_ui$Element$link,
				_List_Nil,
				{
					bX: A2($author$project$Main$icon, _List_Nil, ic),
					cq: s
				});
		}
	});
var $elm$svg$Svg$line = $elm$svg$Svg$trustedNode('line');
var $feathericons$elm_feather$FeatherIcons$Icon = $elm$core$Basics$identity;
var $feathericons$elm_feather$FeatherIcons$defaultAttributes = function (name) {
	return {
		aK: $elm$core$Maybe$Just('feather feather-' + name),
		a_: 24,
		aB: '',
		a$: 2,
		a3: '0 0 24 24'
	};
};
var $feathericons$elm_feather$FeatherIcons$makeBuilder = F2(
	function (name, src) {
		return {
			y: $feathericons$elm_feather$FeatherIcons$defaultAttributes(name),
			ck: src
		};
	});
var $elm$svg$Svg$Attributes$points = _VirtualDom_attribute('points');
var $elm$svg$Svg$polyline = $elm$svg$Svg$trustedNode('polyline');
var $elm$svg$Svg$Attributes$x1 = _VirtualDom_attribute('x1');
var $elm$svg$Svg$Attributes$x2 = _VirtualDom_attribute('x2');
var $elm$svg$Svg$Attributes$y1 = _VirtualDom_attribute('y1');
var $elm$svg$Svg$Attributes$y2 = _VirtualDom_attribute('y2');
var $feathericons$elm_feather$FeatherIcons$arrowLeft = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'arrow-left',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('19'),
					$elm$svg$Svg$Attributes$y1('12'),
					$elm$svg$Svg$Attributes$x2('5'),
					$elm$svg$Svg$Attributes$y2('12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$polyline,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$points('12 19 5 12 12 5')
				]),
			_List_Nil)
		]));
var $pzp1997$assoc_list$AssocList$filter = F2(
	function (isGood, _v0) {
		var alist = _v0;
		return A2(
			$elm$core$List$filter,
			function (_v1) {
				var key = _v1.a;
				var value = _v1.b;
				return A2(isGood, key, value);
			},
			alist);
	});
var $author$project$Main$nextSlugHelp = F2(
	function (posts, target) {
		nextSlugHelp:
		while (true) {
			if (!posts.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				if (!posts.b.b) {
					return $elm$core$Maybe$Nothing;
				} else {
					var _v1 = posts.a;
					var post = _v1.b;
					var _v2 = posts.b;
					var _v3 = _v2.a;
					var nxtSlug = _v3.a;
					var nxtPost = _v3.b;
					var rest = _v2.b;
					if (_Utils_eq(post, target)) {
						return $elm$core$Maybe$Just(nxtSlug);
					} else {
						var $temp$posts = A2(
							$elm$core$List$cons,
							_Utils_Tuple2(nxtSlug, nxtPost),
							rest),
							$temp$target = target;
						posts = $temp$posts;
						target = $temp$target;
						continue nextSlugHelp;
					}
				}
			}
		}
	});
var $pzp1997$assoc_list$AssocList$toList = function (_v0) {
	var alist = _v0;
	return alist;
};
var $author$project$Main$prevSlug = F2(
	function (model, post) {
		return A2(
			$author$project$Main$nextSlugHelp,
			$elm$core$List$reverse(
				$pzp1997$assoc_list$AssocList$toList(
					A2(
						$pzp1997$assoc_list$AssocList$filter,
						F2(
							function (_v0, p) {
								return p.d9;
							}),
						model.an))),
			post);
	});
var $author$project$Main$arrowLeft = A2($author$project$Main$arrow, $feathericons$elm_feather$FeatherIcons$arrowLeft, $author$project$Main$prevSlug);
var $feathericons$elm_feather$FeatherIcons$arrowRight = A2(
	$feathericons$elm_feather$FeatherIcons$makeBuilder,
	'arrow-right',
	_List_fromArray(
		[
			A2(
			$elm$svg$Svg$line,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$x1('5'),
					$elm$svg$Svg$Attributes$y1('12'),
					$elm$svg$Svg$Attributes$x2('19'),
					$elm$svg$Svg$Attributes$y2('12')
				]),
			_List_Nil),
			A2(
			$elm$svg$Svg$polyline,
			_List_fromArray(
				[
					$elm$svg$Svg$Attributes$points('12 5 19 12 12 19')
				]),
			_List_Nil)
		]));
var $author$project$Main$nextSlug = F2(
	function (model, post) {
		return A2(
			$author$project$Main$nextSlugHelp,
			$pzp1997$assoc_list$AssocList$toList(
				A2(
					$pzp1997$assoc_list$AssocList$filter,
					F2(
						function (_v0, p) {
							return p.d9;
						}),
					model.an)),
			post);
	});
var $author$project$Main$arrowRight = A2($author$project$Main$arrow, $feathericons$elm_feather$FeatherIcons$arrowRight, $author$project$Main$nextSlug);
var $mdgriffith$elm_ui$Internal$Model$AsRow = 0;
var $mdgriffith$elm_ui$Internal$Model$asRow = 0;
var $mdgriffith$elm_ui$Element$row = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asRow,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.au + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.S)),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $author$project$Main$sidebarWidth = function (w) {
	return A2($elm$core$Basics$min, 96, ((w * 5) / 100) | 0);
};
var $mdgriffith$elm_ui$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 5, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Flag$spacing = $mdgriffith$elm_ui$Internal$Flag$flag(3);
var $mdgriffith$elm_ui$Internal$Model$spacingName = F2(
	function (x, y) {
		return 'spacing-' + ($elm$core$String$fromInt(x) + ('-' + $elm$core$String$fromInt(y)));
	});
var $mdgriffith$elm_ui$Element$spacing = function (x) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$spacing,
		A3(
			$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
			A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, x),
			x,
			x));
};
var $author$project$Main$navButtons = F2(
	function (model, post) {
		return A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$alignRight,
					$mdgriffith$elm_ui$Element$paddingEach(
					_Utils_update(
						$author$project$Utils$directions0,
						{
							cf: $author$project$Main$sidebarWidth(model.x)
						})),
					$mdgriffith$elm_ui$Element$spacing(12)
				]),
			_List_fromArray(
				[
					A2($author$project$Main$arrowLeft, model, post),
					A2($author$project$Main$arrowRight, model, post)
				]));
	});
var $mdgriffith$elm_ui$Element$padding = function (x) {
	var f = x;
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$padding,
		A5(
			$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
			'p-' + $elm$core$String$fromInt(x),
			f,
			f,
			f,
			f));
};
var $author$project$Colors$white = A3($mdgriffith$elm_ui$Element$rgb255, 255, 255, 255);
var $author$project$Main$header = F2(
	function (model, post) {
		var maybeMenu = function () {
			if (post.$ === 1) {
				return A2($author$project$Main$menu, model.l, model.af);
			} else {
				var p = post.a;
				return A2($author$project$Main$navButtons, model, p);
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Background$color(
					$author$project$Colors$accent(model.l)),
					$mdgriffith$elm_ui$Element$padding(24),
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$Font$color($author$project$Colors$white)
				]),
			_List_fromArray(
				[$author$project$Main$heading, maybeMenu]));
	});
var $mdgriffith$elm_ui$Internal$Model$Max = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$maximum = F2(
	function (i, l) {
		return A2($mdgriffith$elm_ui$Internal$Model$Max, i, l);
	});
var $author$project$Main$sideBar = F2(
	function (colorScheme, w) {
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(
						$author$project$Main$sidebarWidth(w))),
					$mdgriffith$elm_ui$Element$Background$color(
					$author$project$Colors$accent(colorScheme)),
					$mdgriffith$elm_ui$Element$alignRight,
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
				]),
			$mdgriffith$elm_ui$Element$text(''));
	});
var $author$project$Main$DecreaseFontSize = {$: 10};
var $author$project$Main$IncreaseFontSize = {$: 9};
var $author$project$Utils$borderBetweenRow = function (elements) {
	if (!elements.b) {
		return _List_Nil;
	} else {
		if (!elements.b.b) {
			var element = elements.a;
			return _List_fromArray(
				[element]);
		} else {
			var element = elements.a;
			var rest = elements.b;
			return A2(
				$elm$core$List$cons,
				A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Border$widthEach(
							_Utils_update(
								$author$project$Utils$directions0,
								{cf: 1})),
							$mdgriffith$elm_ui$Element$paddingEach(
							_Utils_update(
								$author$project$Utils$directions0,
								{cf: 8}))
						]),
					element),
				$author$project$Utils$borderBetweenRow(rest));
		}
	}
};
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!_v0.$) {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $author$project$Font$translate = function (n) {
	return A2(
		$elm$core$Maybe$withDefault,
		16,
		A2($elm$core$Array$get, n, $author$project$Font$fontSizes));
};
var $author$project$Font$fontSize = function (n) {
	return $mdgriffith$elm_ui$Element$Font$size(
		$author$project$Font$translate(
			$author$project$Font$clampSize(n)));
};
var $author$project$Main$fontSizeChanger = F3(
	function (baseFontSize, msg, verb) {
		var lbl = verb + ' font size';
		return A2(
			$mdgriffith$elm_ui$Element$Input$button,
			_List_fromArray(
				[
					$author$project$Font$fontSize(baseFontSize - 2)
				]),
			{
				bX: $mdgriffith$elm_ui$Element$text(lbl),
				aV: $elm$core$Maybe$Just(msg)
			});
	});
var $mdgriffith$elm_ui$Internal$Model$Padding = F5(
	function (a, b, c, d, e) {
		return {$: 0, a: a, b: b, c: c, d: d, e: e};
	});
var $mdgriffith$elm_ui$Internal$Model$Spaced = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Internal$Model$extractSpacingAndPadding = function (attrs) {
	return A3(
		$elm$core$List$foldr,
		F2(
			function (attr, _v0) {
				var pad = _v0.a;
				var spacing = _v0.b;
				return _Utils_Tuple2(
					function () {
						if (!pad.$) {
							var x = pad.a;
							return pad;
						} else {
							if ((attr.$ === 4) && (attr.b.$ === 7)) {
								var _v3 = attr.b;
								var name = _v3.a;
								var t = _v3.b;
								var r = _v3.c;
								var b = _v3.d;
								var l = _v3.e;
								return $elm$core$Maybe$Just(
									A5($mdgriffith$elm_ui$Internal$Model$Padding, name, t, r, b, l));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					}(),
					function () {
						if (!spacing.$) {
							var x = spacing.a;
							return spacing;
						} else {
							if ((attr.$ === 4) && (attr.b.$ === 5)) {
								var _v6 = attr.b;
								var name = _v6.a;
								var x = _v6.b;
								var y = _v6.c;
								return $elm$core$Maybe$Just(
									A3($mdgriffith$elm_ui$Internal$Model$Spaced, name, x, y));
							} else {
								return $elm$core$Maybe$Nothing;
							}
						}
					}());
			}),
		_Utils_Tuple2($elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
		attrs);
};
var $mdgriffith$elm_ui$Internal$Model$paddingNameFloat = F4(
	function (top, right, bottom, left) {
		return 'pad-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(top) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(right) + ('-' + ($mdgriffith$elm_ui$Internal$Model$floatClass(bottom) + ('-' + $mdgriffith$elm_ui$Internal$Model$floatClass(left)))))));
	});
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $mdgriffith$elm_ui$Element$wrappedRow = F2(
	function (attrs, children) {
		var _v0 = $mdgriffith$elm_ui$Internal$Model$extractSpacingAndPadding(attrs);
		var padded = _v0.a;
		var spaced = _v0.b;
		if (spaced.$ === 1) {
			return A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asRow,
				$mdgriffith$elm_ui$Internal$Model$div,
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.au + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.S + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.by)))),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
							attrs))),
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
		} else {
			var _v2 = spaced.a;
			var spaceName = _v2.a;
			var x = _v2.b;
			var y = _v2.c;
			var newPadding = function () {
				if (!padded.$) {
					var _v5 = padded.a;
					var name = _v5.a;
					var t = _v5.b;
					var r = _v5.c;
					var b = _v5.d;
					var l = _v5.e;
					if ((_Utils_cmp(r, x / 2) > -1) && (_Utils_cmp(b, y / 2) > -1)) {
						var newTop = t - (y / 2);
						var newRight = r - (x / 2);
						var newLeft = l - (x / 2);
						var newBottom = b - (y / 2);
						return $elm$core$Maybe$Just(
							A2(
								$mdgriffith$elm_ui$Internal$Model$StyleClass,
								$mdgriffith$elm_ui$Internal$Flag$padding,
								A5(
									$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
									A4($mdgriffith$elm_ui$Internal$Model$paddingNameFloat, newTop, newRight, newBottom, newLeft),
									newTop,
									newRight,
									newBottom,
									newLeft)));
					} else {
						return $elm$core$Maybe$Nothing;
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}();
			if (!newPadding.$) {
				var pad = newPadding.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asRow,
					$mdgriffith$elm_ui$Internal$Model$div,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.au + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.S + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.by)))),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink),
							A2(
								$elm$core$List$cons,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink),
								_Utils_ap(
									attrs,
									_List_fromArray(
										[pad]))))),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
			} else {
				var halfY = -(y / 2);
				var halfX = -(x / 2);
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					attrs,
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[
								A4(
								$mdgriffith$elm_ui$Internal$Model$element,
								$mdgriffith$elm_ui$Internal$Model$asRow,
								$mdgriffith$elm_ui$Internal$Model$div,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.au + (' ' + ($mdgriffith$elm_ui$Internal$Style$classes.S + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.by)))),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Internal$Model$Attr(
											A2(
												$elm$html$Html$Attributes$style,
												'margin',
												$elm$core$String$fromFloat(halfY) + ('px' + (' ' + ($elm$core$String$fromFloat(halfX) + 'px'))))),
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_ui$Internal$Model$Attr(
												A2(
													$elm$html$Html$Attributes$style,
													'width',
													'calc(100% + ' + ($elm$core$String$fromInt(x) + 'px)'))),
											A2(
												$elm$core$List$cons,
												$mdgriffith$elm_ui$Internal$Model$Attr(
													A2(
														$elm$html$Html$Attributes$style,
														'height',
														'calc(100% + ' + ($elm$core$String$fromInt(y) + 'px)'))),
												A2(
													$elm$core$List$cons,
													A2(
														$mdgriffith$elm_ui$Internal$Model$StyleClass,
														$mdgriffith$elm_ui$Internal$Flag$spacing,
														A3($mdgriffith$elm_ui$Internal$Model$SpacingStyle, spaceName, x, y)),
													_List_Nil))))),
								$mdgriffith$elm_ui$Internal$Model$Unkeyed(children))
							])));
			}
		}
	});
var $author$project$Main$textControls = F2(
	function (colorScheme, baseFontSize) {
		return A2(
			$mdgriffith$elm_ui$Element$wrappedRow,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(12)
				]),
			$author$project$Utils$borderBetweenRow(
				_List_fromArray(
					[
						A2(
						$author$project$Main$colorSchemeSwitcher,
						colorScheme,
						_List_fromArray(
							[
								$author$project$Font$fontSize(baseFontSize - 2)
							])),
						A3($author$project$Main$fontSizeChanger, baseFontSize, $author$project$Main$IncreaseFontSize, 'Increase'),
						A3($author$project$Main$fontSizeChanger, baseFontSize, $author$project$Main$DecreaseFontSize, 'Decrease')
					])));
	});
var $mdgriffith$elm_ui$Element$spacingXY = F2(
	function (x, y) {
		return A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$spacing,
			A3(
				$mdgriffith$elm_ui$Internal$Model$SpacingStyle,
				A2($mdgriffith$elm_ui$Internal$Model$spacingName, x, y),
				x,
				y));
	});
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (!result.$) {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$problemToString = function (problem) {
	switch (problem.$) {
		case 0:
			var string = problem.a;
			return 'Expecting ' + string;
		case 1:
			return 'Expecting int';
		case 2:
			return 'Expecting hex';
		case 3:
			return 'Expecting octal';
		case 4:
			return 'Expecting binary';
		case 5:
			return 'Expecting float';
		case 6:
			return 'Expecting number';
		case 7:
			return 'Expecting variable';
		case 8:
			var string = problem.a;
			return 'Expecting symbol ' + string;
		case 9:
			var string = problem.a;
			return 'Expecting keyword ' + string;
		case 10:
			return 'Expecting keyword end';
		case 11:
			return 'Unexpected char';
		case 12:
			var problemDescription = problem.a;
			return problemDescription;
		default:
			return 'Bad repeat';
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$deadEndToString = function (deadEnd) {
	return 'Problem at row ' + ($elm$core$String$fromInt(deadEnd.d2) + ('\n' + $dillonkearns$elm_markdown$Markdown$Parser$problemToString(deadEnd.d_)));
};
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $dillonkearns$elm_markdown$Markdown$Block$BlockQuote = function (a) {
	return {$: 3, a: a};
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote = function (a) {
	return {$: 10, a: a};
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$Body = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Cdata = function (a) {
	return {$: 4, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$CodeBlock = function (a) {
	return {$: 7, a: a};
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$CodeSpan = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$CompletedTask = 2;
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Emphasis = function (a) {
	return {$: 3, a: a};
};
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$HardLineBreak = {$: 7};
var $dillonkearns$elm_markdown$Markdown$Block$Heading = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$Html = function (a) {
	return {$: 2, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$HtmlBlock = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$HtmlComment = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Block$HtmlElement = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Block$HtmlInline = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Image = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Block$IncompleteTask = 1;
var $dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock = function (a) {
	return {$: 6, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Link = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Block$ListItem = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$NoTask = 0;
var $dillonkearns$elm_markdown$Markdown$Block$OrderedList = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Block$Paragraph = function (a) {
	return {$: 5, a: a};
};
var $elm$parser$Parser$Problem = function (a) {
	return {$: 12, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction = function (a) {
	return {$: 2, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Strong = function (a) {
	return {$: 4, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$Table = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Block$Text = function (a) {
	return {$: 6, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Block$ThematicBreak = {$: 8};
var $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak = {$: 7};
var $dillonkearns$elm_markdown$Markdown$Block$UnorderedList = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$UnparsedInlines = $elm$core$Basics$identity;
var $dillonkearns$elm_markdown$Markdown$Parser$addReference = F2(
	function (state, linkRef) {
		return _Utils_update(
			state,
			{
				aw: A2($elm$core$List$cons, linkRef, state.aw)
			});
	});
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0;
		return function (s0) {
			var _v1 = parseA(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				var _v2 = callback(a);
				var parseB = _v2;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
				}
			}
		};
	});
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0;
	return function (s0) {
		var _v1 = parse(s0);
		if (_v1.$ === 1) {
			var x = _v1.b;
			return A2($elm$parser$Parser$Advanced$Bad, false, x);
		} else {
			var a = _v1.b;
			var s1 = _v1.c;
			return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
		}
	};
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine = {$: 9};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.ck);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.b, offset) < 0,
					0,
					{bF: col, f: s0.f, h: s0.h, b: offset, d2: row, ck: s0.ck});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return function (s) {
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.b, s.d2, s.bF, s);
	};
};
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0;
		var parseB = _v1;
		return function (s0) {
			var _v2 = parseA(s0);
			if (_v2.$ === 1) {
				var p = _v2.a;
				var x = _v2.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v2.a;
				var a = _v2.b;
				var s1 = _v2.c;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p1 || p2,
						A2(func, a, b),
						s2);
				}
			}
		};
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $dillonkearns$elm_markdown$Helpers$isSpaceOrTab = function (c) {
	switch (c) {
		case ' ':
			return true;
		case '\t':
			return true;
		default:
			return false;
	}
};
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {bF: col, db: contextStack, d_: problem, d2: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.d2, s.bF, x, s.f));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.b, s.d2, s.bF, s.ck);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{bF: newCol, f: s.f, h: s.h, b: newOffset, d2: newRow, ck: s.ck});
	};
};
var $dillonkearns$elm_markdown$Markdown$Parser$blankLine = A2(
	$elm$parser$Parser$Advanced$map,
	function (_v0) {
		return $dillonkearns$elm_markdown$Markdown$RawBlock$BlankLine;
	},
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$backtrackable(
			$elm$parser$Parser$Advanced$chompWhile(
				function (c) {
					return $dillonkearns$elm_markdown$Helpers$isSpaceOrTab(c);
				})),
		$elm$parser$Parser$Advanced$token(
			A2(
				$elm$parser$Parser$Advanced$Token,
				'\n',
				$elm$parser$Parser$Expecting('\\n')))));
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.b, s.ck);
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{bF: 1, f: s.f, h: s.h, b: s.b + 1, d2: s.d2 + 1, ck: s.ck}) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{bF: s.bF + 1, f: s.f, h: s.h, b: newOffset, d2: s.d2, ck: s.ck}));
		};
	});
var $elm$parser$Parser$Advanced$chompUntilEndOr = function (str) {
	return function (s) {
		var _v0 = A5(_Parser_findSubString, str, s.b, s.d2, s.bF, s.ck);
		var newOffset = _v0.a;
		var newRow = _v0.b;
		var newCol = _v0.c;
		var adjustedOffset = (newOffset < 0) ? $elm$core$String$length(s.ck) : newOffset;
		return A3(
			$elm$parser$Parser$Advanced$Good,
			_Utils_cmp(s.b, adjustedOffset) < 0,
			0,
			{bF: newCol, f: s.f, h: s.h, b: adjustedOffset, d2: newRow, ck: s.ck});
	};
};
var $elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			$elm$core$String$length(s.ck),
			s.b) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3($elm$core$String$slice, s0.b, s1.b, s0.ck),
						a),
					s1);
			}
		};
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $dillonkearns$elm_markdown$Helpers$isNewline = function (character) {
	if ('\n' === character) {
		return true;
	} else {
		return false;
	}
};
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (!_v1.$) {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $dillonkearns$elm_markdown$Markdown$Parser$blockQuote = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'   > ',
						$elm$parser$Parser$Expecting('   > '))),
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'  > ',
						$elm$parser$Parser$Expecting('  > '))),
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						' > ',
						$elm$parser$Parser$Expecting(' > '))),
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'> ',
						$elm$parser$Parser$Expecting('> '))),
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'   >',
						$elm$parser$Parser$Expecting('   >'))),
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'  >',
						$elm$parser$Parser$Expecting('  >'))),
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						' >',
						$elm$parser$Parser$Expecting(' >'))),
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'>',
						$elm$parser$Parser$Expecting('>')))
				]))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr('\n')),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$Advanced$end(
					$elm$parser$Parser$Problem('Expecting end')),
					A2(
					$elm$parser$Parser$Advanced$chompIf,
					$dillonkearns$elm_markdown$Helpers$isNewline,
					$elm$parser$Parser$Problem('Expecting newline'))
				]))));
var $dillonkearns$elm_markdown$Markdown$Parser$combine = function (list) {
	return A3(
		$elm$core$List$foldr,
		F2(
			function (parser, listParser) {
				return A2(
					$elm$parser$Parser$Advanced$andThen,
					function (soFar) {
						return A2(
							$elm$parser$Parser$Advanced$map,
							function (a) {
								return A2($elm$core$List$cons, a, soFar);
							},
							parser);
					},
					listParser);
			}),
		$elm$parser$Parser$Advanced$succeed(_List_Nil),
		list);
};
var $dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString = function (deadEnds) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$deadEndToString, deadEnds));
};
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$RawBlock$Heading = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$endsWith = _String_endsWith;
var $elm$core$String$trimRight = _String_trimRight;
var $dillonkearns$elm_markdown$Markdown$Parser$dropTrailingHashes = function (headingString) {
	return A2($elm$core$String$endsWith, '#', headingString) ? $dillonkearns$elm_markdown$Markdown$Parser$dropTrailingHashes(
		$elm$core$String$trimRight(
			A2($elm$core$String$dropRight, 1, headingString))) : headingString;
};
var $dillonkearns$elm_markdown$Helpers$isSpacebar = function (c) {
	if (' ' === c) {
		return true;
	} else {
		return false;
	}
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return function (s) {
		return A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $dillonkearns$elm_markdown$Markdown$Parser$heading = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$Heading),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'#',
					$elm$parser$Parser$Expecting('#')))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$andThen,
				function (additionalHashes) {
					var level = $elm$core$String$length(additionalHashes) + 1;
					return (level >= 7) ? $elm$parser$Parser$Advanced$problem(
						$elm$parser$Parser$Expecting('heading with < 7 #\'s')) : $elm$parser$Parser$Advanced$succeed(level);
				},
				$elm$parser$Parser$Advanced$getChompedString(
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(0),
						$elm$parser$Parser$Advanced$chompWhile(
							function (c) {
								if ('#' === c) {
									return true;
								} else {
									return false;
								}
							})))),
			$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Helpers$isSpacebar))),
	A2(
		$elm$parser$Parser$Advanced$andThen,
		function (headingText) {
			return $elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$Parser$dropTrailingHashes(headingText));
		},
		$elm$parser$Parser$Advanced$getChompedString(
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(0),
				$elm$parser$Parser$Advanced$chompUntilEndOr('\n')))));
var $dillonkearns$elm_markdown$HtmlParser$Cdata = function (a) {
	return {$: 3, a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$Element = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$HtmlParser$Text = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$Attribute = F2(
	function (name, value) {
		return {w: name, a2: value};
	});
var $elm$parser$Parser$Advanced$Located = F3(
	function (row, col, context) {
		return {bF: col, f: context, d2: row};
	});
var $elm$parser$Parser$Advanced$changeContext = F2(
	function (newContext, s) {
		return {bF: s.bF, f: newContext, h: s.h, b: s.b, d2: s.d2, ck: s.ck};
	});
var $elm$parser$Parser$Advanced$inContext = F2(
	function (context, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(
				A2(
					$elm$parser$Parser$Advanced$changeContext,
					A2(
						$elm$core$List$cons,
						A3($elm$parser$Parser$Advanced$Located, s0.d2, s0.bF, context),
						s0.f),
					s0));
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					a,
					A2($elm$parser$Parser$Advanced$changeContext, s0.f, s1));
			} else {
				var step = _v1;
				return step;
			}
		};
	});
var $dillonkearns$elm_markdown$HtmlParser$isUninteresting = function (c) {
	switch (c) {
		case '/':
			return false;
		case '<':
			return false;
		case '>':
			return false;
		case '\"':
			return false;
		case '\'':
			return false;
		case '=':
			return false;
		default:
			return true;
	}
};
var $dillonkearns$elm_markdown$HtmlParser$isWhitespace = function (c) {
	switch (c) {
		case ' ':
			return true;
		case '\u000D':
			return true;
		case '\n':
			return true;
		case '\t':
			return true;
		default:
			return false;
	}
};
var $elm$parser$Parser$BadRepeat = {$: 13};
var $dillonkearns$elm_markdown$HtmlParser$keep = F2(
	function (count, predicate) {
		var n = count;
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (str) {
				return (_Utils_cmp(
					n,
					$elm$core$String$length(str)) < 1) ? $elm$parser$Parser$Advanced$succeed(str) : $elm$parser$Parser$Advanced$problem($elm$parser$Parser$BadRepeat);
			},
			$elm$parser$Parser$Advanced$getChompedString(
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(0),
					$elm$parser$Parser$Advanced$chompWhile(predicate))));
	});
var $dillonkearns$elm_markdown$HtmlParser$AtLeast = $elm$core$Basics$identity;
var $dillonkearns$elm_markdown$HtmlParser$oneOrMore = 1;
var $dillonkearns$elm_markdown$HtmlParser$attributeName = A2(
	$elm$parser$Parser$Advanced$inContext,
	'attributeName',
	A2(
		$dillonkearns$elm_markdown$HtmlParser$keep,
		$dillonkearns$elm_markdown$HtmlParser$oneOrMore,
		function (c) {
			return (!$dillonkearns$elm_markdown$HtmlParser$isWhitespace(c)) && $dillonkearns$elm_markdown$HtmlParser$isUninteresting(c);
		}));
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 8, a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $elm$core$String$cons = _String_cons;
var $dillonkearns$elm_markdown$HtmlParser$entities = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('amp', '&'),
			_Utils_Tuple2('lt', '<'),
			_Utils_Tuple2('gt', '>'),
			_Utils_Tuple2('apos', '\''),
			_Utils_Tuple2('quot', '\"')
		]));
var $elm$core$Char$fromCode = _Char_fromCode;
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (!maybe.$) {
			var v = maybe.a;
			return $elm$core$Result$Ok(v);
		} else {
			return $elm$core$Result$Err(err);
		}
	});
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Basics$pow = _Basics_pow;
var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return $elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return $elm$core$Result$Err(
							$elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (!ra.$) {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $rtfeldman$elm_hex$Hex$fromString = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2($elm$core$String$startsWith, '-', str)) {
				var list = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(
						$elm$core$String$toList(str)));
				return A2(
					$elm$core$Result$map,
					$elm$core$Basics$negate,
					A3(
						$rtfeldman$elm_hex$Hex$fromStringHelp,
						$elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					$rtfeldman$elm_hex$Hex$fromStringHelp,
					$elm$core$String$length(str) - 1,
					$elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2($elm$core$Result$mapError, formatError, result);
	}
};
var $dillonkearns$elm_markdown$HtmlParser$decodeEscape = function (s) {
	return A2($elm$core$String$startsWith, '#x', s) ? A2(
		$elm$core$Result$mapError,
		$elm$parser$Parser$Problem,
		A2(
			$elm$core$Result$map,
			$elm$core$Char$fromCode,
			$rtfeldman$elm_hex$Hex$fromString(
				A2($elm$core$String$dropLeft, 2, s)))) : (A2($elm$core$String$startsWith, '#', s) ? A2(
		$elm$core$Result$fromMaybe,
		$elm$parser$Parser$Problem('Invalid escaped character: ' + s),
		A2(
			$elm$core$Maybe$map,
			$elm$core$Char$fromCode,
			$elm$core$String$toInt(
				A2($elm$core$String$dropLeft, 1, s)))) : A2(
		$elm$core$Result$fromMaybe,
		$elm$parser$Parser$Problem('No entity named \"&' + (s + ';\" found.')),
		A2($elm$core$Dict$get, s, $dillonkearns$elm_markdown$HtmlParser$entities)));
};
var $dillonkearns$elm_markdown$HtmlParser$fail = function (str) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(str));
};
var $dillonkearns$elm_markdown$HtmlParser$notSemiColon = function (c) {
	if (';' === c) {
		return false;
	} else {
		return true;
	}
};
var $dillonkearns$elm_markdown$HtmlParser$escapedChar = function (end_) {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'escapedChar',
		A2(
			$elm$parser$Parser$Advanced$andThen,
			function (s) {
				return $elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$Advanced$andThen,
							function (_v0) {
								var _v1 = $dillonkearns$elm_markdown$HtmlParser$decodeEscape(s);
								if (!_v1.$) {
									var c = _v1.a;
									return $elm$parser$Parser$Advanced$succeed(c);
								} else {
									var e = _v1.a;
									return $elm$parser$Parser$Advanced$problem(e);
								}
							},
							$dillonkearns$elm_markdown$HtmlParser$symbol(';')),
							$dillonkearns$elm_markdown$HtmlParser$fail('Entities must end_ with \";\": &' + s)
						]));
			},
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$dillonkearns$elm_markdown$HtmlParser$symbol('&')),
				A2(
					$dillonkearns$elm_markdown$HtmlParser$keep,
					$dillonkearns$elm_markdown$HtmlParser$oneOrMore,
					function (c) {
						return (!_Utils_eq(c, end_)) && $dillonkearns$elm_markdown$HtmlParser$notSemiColon(c);
					}))));
};
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return function (s) {
		var _v0 = thunk(0);
		var parse = _v0;
		return parse(s);
	};
};
var $dillonkearns$elm_markdown$HtmlParser$notAmpersand = function (c) {
	if ('&' === c) {
		return false;
	} else {
		return true;
	}
};
var $dillonkearns$elm_markdown$HtmlParser$zeroOrMore = 0;
var $dillonkearns$elm_markdown$HtmlParser$textString = function (end_) {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'textString',
		A2(
			$elm$parser$Parser$Advanced$andThen,
			function (s) {
				return $elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$keeper,
								$elm$parser$Parser$Advanced$succeed(
									F2(
										function (c, t) {
											return _Utils_ap(
												s,
												A2($elm$core$String$cons, c, t));
										})),
								$dillonkearns$elm_markdown$HtmlParser$escapedChar(end_)),
							$elm$parser$Parser$Advanced$lazy(
								function (_v0) {
									return $dillonkearns$elm_markdown$HtmlParser$textString(end_);
								})),
							$elm$parser$Parser$Advanced$succeed(s)
						]));
			},
			A2(
				$dillonkearns$elm_markdown$HtmlParser$keep,
				$dillonkearns$elm_markdown$HtmlParser$zeroOrMore,
				function (c) {
					return (!_Utils_eq(c, end_)) && $dillonkearns$elm_markdown$HtmlParser$notAmpersand(c);
				})));
};
var $dillonkearns$elm_markdown$HtmlParser$attributeValue = A2(
	$elm$parser$Parser$Advanced$inContext,
	'attributeValue',
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$dillonkearns$elm_markdown$HtmlParser$symbol('\"')),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$dillonkearns$elm_markdown$HtmlParser$textString('\"'),
					$dillonkearns$elm_markdown$HtmlParser$symbol('\"'))),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$dillonkearns$elm_markdown$HtmlParser$symbol('\'')),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$dillonkearns$elm_markdown$HtmlParser$textString('\''),
					$dillonkearns$elm_markdown$HtmlParser$symbol('\'')))
			])));
var $dillonkearns$elm_markdown$HtmlParser$ignore = F2(
	function (count, predicate) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (_v0) {
				return 0;
			},
			A2($dillonkearns$elm_markdown$HtmlParser$keep, count, predicate));
	});
var $dillonkearns$elm_markdown$HtmlParser$whiteSpace = A2($dillonkearns$elm_markdown$HtmlParser$ignore, $dillonkearns$elm_markdown$HtmlParser$zeroOrMore, $dillonkearns$elm_markdown$HtmlParser$isWhitespace);
var $dillonkearns$elm_markdown$HtmlParser$attribute = A2(
	$elm$parser$Parser$Advanced$inContext,
	'attribute',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$Attribute),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$HtmlParser$attributeName, $dillonkearns$elm_markdown$HtmlParser$whiteSpace),
					$dillonkearns$elm_markdown$HtmlParser$symbol('=')),
				$dillonkearns$elm_markdown$HtmlParser$whiteSpace)),
		$dillonkearns$elm_markdown$HtmlParser$attributeValue));
var $dillonkearns$elm_markdown$HtmlParser$attributes = function (keys) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		function (attrs) {
			return A2(
				$elm$core$List$map,
				function (attr) {
					return {
						w: $elm$core$String$toLower(attr.w),
						a2: attr.a2
					};
				},
				attrs);
		},
		A2(
			$elm$parser$Parser$Advanced$inContext,
			'attributes',
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$andThen,
						function (attr) {
							return A2($elm$core$Set$member, attr.w, keys) ? $dillonkearns$elm_markdown$HtmlParser$fail('attribute ' + (attr.w + ' is duplicated')) : A2(
								$elm$parser$Parser$Advanced$keeper,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed(
										$elm$core$List$cons(attr)),
									$dillonkearns$elm_markdown$HtmlParser$whiteSpace),
								$dillonkearns$elm_markdown$HtmlParser$attributes(
									A2($elm$core$Set$insert, attr.w, keys)));
						},
						$dillonkearns$elm_markdown$HtmlParser$attribute),
						$elm$parser$Parser$Advanced$succeed(_List_Nil)
					]))));
};
var $dillonkearns$elm_markdown$HtmlParser$cdata = A2(
	$elm$parser$Parser$Advanced$inContext,
	'cdata',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$dillonkearns$elm_markdown$HtmlParser$symbol('<![CDATA[')),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$getChompedString(
				$elm$parser$Parser$Advanced$chompUntilEndOr(']]>')),
			$dillonkearns$elm_markdown$HtmlParser$symbol(']]>'))));
var $dillonkearns$elm_markdown$HtmlParser$tagName = A2(
	$elm$parser$Parser$Advanced$map,
	function (name) {
		return $elm$core$String$toLower(name);
	},
	A2(
		$elm$parser$Parser$Advanced$inContext,
		'tagName',
		A2(
			$dillonkearns$elm_markdown$HtmlParser$keep,
			$dillonkearns$elm_markdown$HtmlParser$oneOrMore,
			function (c) {
				return (!$dillonkearns$elm_markdown$HtmlParser$isWhitespace(c)) && $dillonkearns$elm_markdown$HtmlParser$isUninteresting(c);
			})));
var $dillonkearns$elm_markdown$HtmlParser$closingTag = function (startTagName) {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'closingTag',
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed(0),
							$dillonkearns$elm_markdown$HtmlParser$symbol('</')),
						$dillonkearns$elm_markdown$HtmlParser$whiteSpace),
					A2(
						$elm$parser$Parser$Advanced$andThen,
						function (endTagName) {
							return _Utils_eq(startTagName, endTagName) ? $elm$parser$Parser$Advanced$succeed(0) : $dillonkearns$elm_markdown$HtmlParser$fail('tag name mismatch: ' + (startTagName + (' and ' + endTagName)));
						},
						$dillonkearns$elm_markdown$HtmlParser$tagName)),
				$dillonkearns$elm_markdown$HtmlParser$whiteSpace),
			$dillonkearns$elm_markdown$HtmlParser$symbol('>')));
};
var $dillonkearns$elm_markdown$HtmlParser$Comment = function (a) {
	return {$: 2, a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $dillonkearns$elm_markdown$HtmlParser$comment = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$Comment),
		$elm$parser$Parser$Advanced$token(
			$dillonkearns$elm_markdown$HtmlParser$toToken('<!--'))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr('-->')),
		$elm$parser$Parser$Advanced$token(
			$dillonkearns$elm_markdown$HtmlParser$toToken('-->'))));
var $dillonkearns$elm_markdown$HtmlParser$Declaration = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $dillonkearns$elm_markdown$HtmlParser$allUppercase = A2(
	$dillonkearns$elm_markdown$HtmlParser$keep,
	$dillonkearns$elm_markdown$HtmlParser$oneOrMore,
	function (c) {
		return $elm$core$Char$isUpper(c);
	});
var $dillonkearns$elm_markdown$HtmlParser$oneOrMoreWhiteSpace = A2($dillonkearns$elm_markdown$HtmlParser$ignore, $dillonkearns$elm_markdown$HtmlParser$oneOrMore, $dillonkearns$elm_markdown$HtmlParser$isWhitespace);
var $dillonkearns$elm_markdown$HtmlParser$docType = A2(
	$elm$parser$Parser$Advanced$inContext,
	'declaration',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$Declaration),
				$dillonkearns$elm_markdown$HtmlParser$symbol('<!')),
			A2($elm$parser$Parser$Advanced$ignorer, $dillonkearns$elm_markdown$HtmlParser$allUppercase, $dillonkearns$elm_markdown$HtmlParser$oneOrMoreWhiteSpace)),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$getChompedString(
				$elm$parser$Parser$Advanced$chompUntilEndOr('>')),
			$dillonkearns$elm_markdown$HtmlParser$symbol('>'))));
var $dillonkearns$elm_markdown$HtmlParser$ProcessingInstruction = function (a) {
	return {$: 4, a: a};
};
var $dillonkearns$elm_markdown$HtmlParser$processingInstruction = A2(
	$elm$parser$Parser$Advanced$inContext,
	'processingInstruction',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$HtmlParser$ProcessingInstruction),
			$dillonkearns$elm_markdown$HtmlParser$symbol('<?')),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$getChompedString(
				$elm$parser$Parser$Advanced$chompUntilEndOr('?>')),
			$dillonkearns$elm_markdown$HtmlParser$symbol('?>'))));
function $dillonkearns$elm_markdown$HtmlParser$cyclic$textNodeString() {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'textNodeString',
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(
							F2(
								function (s, maybeString) {
									return $elm$core$Maybe$Just(
										_Utils_ap(
											s,
											A2($elm$core$Maybe$withDefault, '', maybeString)));
								})),
						A2(
							$dillonkearns$elm_markdown$HtmlParser$keep,
							$dillonkearns$elm_markdown$HtmlParser$oneOrMore,
							function (c) {
								switch (c) {
									case '<':
										return false;
									case '&':
										return false;
									default:
										return true;
								}
							})),
					$elm$parser$Parser$Advanced$lazy(
						function (_v1) {
							return $dillonkearns$elm_markdown$HtmlParser$cyclic$textNodeString();
						})),
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(
							F2(
								function (c, maybeString) {
									return $elm$core$Maybe$Just(
										A2(
											$elm$core$String$cons,
											c,
											A2($elm$core$Maybe$withDefault, '', maybeString)));
								})),
						$dillonkearns$elm_markdown$HtmlParser$escapedChar('<')),
					$elm$parser$Parser$Advanced$lazy(
						function (_v2) {
							return $dillonkearns$elm_markdown$HtmlParser$cyclic$textNodeString();
						})),
					$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing)
				])));
}
var $dillonkearns$elm_markdown$HtmlParser$textNodeString = $dillonkearns$elm_markdown$HtmlParser$cyclic$textNodeString();
$dillonkearns$elm_markdown$HtmlParser$cyclic$textNodeString = function () {
	return $dillonkearns$elm_markdown$HtmlParser$textNodeString;
};
var $dillonkearns$elm_markdown$HtmlParser$children = function (startTagName) {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'children',
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(_List_Nil),
					$dillonkearns$elm_markdown$HtmlParser$closingTag(startTagName)),
					A2(
					$elm$parser$Parser$Advanced$andThen,
					function (maybeString) {
						if (!maybeString.$) {
							var s = maybeString.a;
							return A2(
								$elm$parser$Parser$Advanced$keeper,
								$elm$parser$Parser$Advanced$succeed(
									function (rest) {
										return A2(
											$elm$core$List$cons,
											$dillonkearns$elm_markdown$HtmlParser$Text(s),
											rest);
									}),
								$dillonkearns$elm_markdown$HtmlParser$children(startTagName));
						} else {
							return A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed(_List_Nil),
								$dillonkearns$elm_markdown$HtmlParser$closingTag(startTagName));
						}
					},
					$dillonkearns$elm_markdown$HtmlParser$textNodeString),
					$elm$parser$Parser$Advanced$lazy(
					function (_v2) {
						return A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$keeper,
								$elm$parser$Parser$Advanced$succeed($elm$core$List$cons),
								$dillonkearns$elm_markdown$HtmlParser$cyclic$html()),
							$dillonkearns$elm_markdown$HtmlParser$children(startTagName));
					})
				])));
};
function $dillonkearns$elm_markdown$HtmlParser$cyclic$html() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2($elm$parser$Parser$Advanced$map, $dillonkearns$elm_markdown$HtmlParser$Cdata, $dillonkearns$elm_markdown$HtmlParser$cdata),
				$dillonkearns$elm_markdown$HtmlParser$processingInstruction,
				$dillonkearns$elm_markdown$HtmlParser$comment,
				$dillonkearns$elm_markdown$HtmlParser$docType,
				$dillonkearns$elm_markdown$HtmlParser$cyclic$element()
			]));
}
function $dillonkearns$elm_markdown$HtmlParser$cyclic$element() {
	return A2(
		$elm$parser$Parser$Advanced$inContext,
		'element',
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$dillonkearns$elm_markdown$HtmlParser$symbol('<')),
			A2(
				$elm$parser$Parser$Advanced$andThen,
				function (startTagName) {
					return A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed(
									$dillonkearns$elm_markdown$HtmlParser$Element(startTagName)),
								$dillonkearns$elm_markdown$HtmlParser$whiteSpace),
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$dillonkearns$elm_markdown$HtmlParser$attributes($elm$core$Set$empty),
								$dillonkearns$elm_markdown$HtmlParser$whiteSpace)),
						$elm$parser$Parser$Advanced$oneOf(
							_List_fromArray(
								[
									A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed(_List_Nil),
									$dillonkearns$elm_markdown$HtmlParser$symbol('/>')),
									A2(
									$elm$parser$Parser$Advanced$keeper,
									A2(
										$elm$parser$Parser$Advanced$ignorer,
										$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
										$dillonkearns$elm_markdown$HtmlParser$symbol('>')),
									$elm$parser$Parser$Advanced$lazy(
										function (_v0) {
											return $dillonkearns$elm_markdown$HtmlParser$children(startTagName);
										}))
								])));
				},
				$dillonkearns$elm_markdown$HtmlParser$tagName)));
}
var $dillonkearns$elm_markdown$HtmlParser$html = $dillonkearns$elm_markdown$HtmlParser$cyclic$html();
$dillonkearns$elm_markdown$HtmlParser$cyclic$html = function () {
	return $dillonkearns$elm_markdown$HtmlParser$html;
};
var $dillonkearns$elm_markdown$HtmlParser$element = $dillonkearns$elm_markdown$HtmlParser$cyclic$element();
$dillonkearns$elm_markdown$HtmlParser$cyclic$element = function () {
	return $dillonkearns$elm_markdown$HtmlParser$element;
};
var $dillonkearns$elm_markdown$Markdown$Parser$indentedCodeBlock = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'    ',
						$elm$parser$Parser$ExpectingSymbol('Indentation'))),
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'\t',
						$elm$parser$Parser$ExpectingSymbol('Indentation')))
				]))),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$chompUntilEndOr('\n')),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'\n',
						$elm$parser$Parser$ExpectingSymbol('\\n'))),
					$elm$parser$Parser$Advanced$end(
					$elm$parser$Parser$Expecting('End of input'))
				]))));
var $dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith = F3(
	function (joinWith, string1, string2) {
		var _v0 = _Utils_Tuple2(string1, string2);
		if (_v0.a === '') {
			if (_v0.b === '') {
				return $elm$core$String$concat(
					_List_fromArray(
						[string1, string2]));
			} else {
				return $elm$core$String$concat(
					_List_fromArray(
						[string1, string2]));
			}
		} else {
			if (_v0.b === '') {
				return $elm$core$String$concat(
					_List_fromArray(
						[string1, string2]));
			} else {
				return $elm$core$String$concat(
					_List_fromArray(
						[string1, joinWith, string2]));
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll = F2(
	function (string1, string2) {
		return $elm$core$String$concat(
			_List_fromArray(
				[string1, '\n', string2]));
	});
var $dillonkearns$elm_markdown$Markdown$Parser$just = function (value) {
	return $elm$parser$Parser$Advanced$succeed(
		$elm$core$Maybe$Just(value));
};
var $dillonkearns$elm_markdown$Markdown$Block$H1 = 0;
var $dillonkearns$elm_markdown$Markdown$Block$H2 = 1;
var $dillonkearns$elm_markdown$Markdown$Block$H3 = 2;
var $dillonkearns$elm_markdown$Markdown$Block$H4 = 3;
var $dillonkearns$elm_markdown$Markdown$Block$H5 = 4;
var $dillonkearns$elm_markdown$Markdown$Block$H6 = 5;
var $dillonkearns$elm_markdown$Markdown$Parser$levelParser = function (level) {
	switch (level) {
		case 1:
			return $elm$parser$Parser$Advanced$succeed(0);
		case 2:
			return $elm$parser$Parser$Advanced$succeed(1);
		case 3:
			return $elm$parser$Parser$Advanced$succeed(2);
		case 4:
			return $elm$parser$Parser$Advanced$succeed(3);
		case 5:
			return $elm$parser$Parser$Advanced$succeed(4);
		case 6:
			return $elm$parser$Parser$Advanced$succeed(5);
		default:
			return $elm$parser$Parser$Advanced$problem(
				$elm$parser$Parser$Expecting(
					'A heading with 1 to 6 #\'s, but found ' + $elm$core$String$fromInt(level)));
	}
};
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0;
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (!step.$) {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return function (s) {
			return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
		};
	});
var $dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $dillonkearns$elm_markdown$Parser$Extra$oneOrMore = function (condition) {
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$chompIf,
			condition,
			$elm$parser$Parser$Problem('Expected one or more character')),
		$elm$parser$Parser$Advanced$chompWhile(condition));
};
var $dillonkearns$elm_markdown$Parser$Extra$positiveInteger = A2(
	$elm$parser$Parser$Advanced$mapChompedString,
	F2(
		function (str, _v0) {
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				$elm$core$String$toInt(str));
		}),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed(0),
		$dillonkearns$elm_markdown$Parser$Extra$oneOrMore($elm$core$Char$isDigit)));
var $dillonkearns$elm_markdown$Markdown$OrderedList$positiveIntegerMaxOf9Digits = A2(
	$elm$parser$Parser$Advanced$andThen,
	function (parsed) {
		return (parsed <= 999999999) ? $elm$parser$Parser$Advanced$succeed(parsed) : $elm$parser$Parser$Advanced$problem(
			$elm$parser$Parser$Problem('Starting numbers must be nine digits or less.'));
	},
	$dillonkearns$elm_markdown$Parser$Extra$positiveInteger);
var $dillonkearns$elm_markdown$Markdown$OrderedList$listMarkerParser = function () {
	var markerOption = function (marker) {
		return $elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					marker,
					$elm$parser$Parser$ExpectingSymbol(marker))));
	};
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($elm$core$Tuple$pair),
			$dillonkearns$elm_markdown$Markdown$OrderedList$positiveIntegerMaxOf9Digits),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					markerOption('.'),
					markerOption(')')
				])));
}();
var $dillonkearns$elm_markdown$Markdown$OrderedList$openingItemParser = function (lastBlock) {
	var validateStartsWith1 = function (parsed) {
		if (parsed.a === 1) {
			return $elm$parser$Parser$Advanced$succeed(parsed);
		} else {
			return $elm$parser$Parser$Advanced$problem(
				$elm$parser$Parser$Problem('Lists inside a paragraph or after a paragraph without a blank line must start with 1'));
		}
	};
	var validateStartsWith1IfInParagraph = function (parsed) {
		if ((!lastBlock.$) && (lastBlock.a.$ === 1)) {
			return validateStartsWith1(parsed);
		} else {
			return $elm$parser$Parser$Advanced$succeed(parsed);
		}
	};
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed(
				F2(
					function (_v0, item) {
						var startingIndex = _v0.a;
						var marker = _v0.b;
						return _Utils_Tuple3(startingIndex, marker, item);
					})),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$backtrackable(
					A2($elm$parser$Parser$Advanced$andThen, validateStartsWith1IfInParagraph, $dillonkearns$elm_markdown$Markdown$OrderedList$listMarkerParser)),
				$dillonkearns$elm_markdown$Parser$Extra$oneOrMore($dillonkearns$elm_markdown$Helpers$isSpacebar))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$getChompedString(
				$elm$parser$Parser$Advanced$chompUntilEndOr('\n')),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'\n',
					$elm$parser$Parser$ExpectingSymbol('\n')))));
};
var $elm$parser$Parser$Advanced$getOffset = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.b, s);
};
var $elm$parser$Parser$Advanced$commit = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, true, a, s);
	};
};
var $dillonkearns$elm_markdown$Markdown$OrderedList$itemBody = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$Advanced$backtrackable(
						$dillonkearns$elm_markdown$Parser$Extra$oneOrMore($dillonkearns$elm_markdown$Helpers$isSpacebar))),
				$elm$parser$Parser$Advanced$commit('')),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$getChompedString(
					$elm$parser$Parser$Advanced$chompUntilEndOr('\n')),
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							$elm$parser$Parser$Advanced$symbol(
							A2(
								$elm$parser$Parser$Advanced$Token,
								'\n',
								$elm$parser$Parser$ExpectingSymbol('\\n'))),
							$elm$parser$Parser$Advanced$end(
							$elm$parser$Parser$Expecting('End of input'))
						])))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(''),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'\n',
					$elm$parser$Parser$ExpectingSymbol('\\n'))))
		]));
var $dillonkearns$elm_markdown$Markdown$OrderedList$singleItemParser = function (listMarker) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$backtrackable(
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$dillonkearns$elm_markdown$Parser$Extra$positiveInteger,
					$elm$parser$Parser$Advanced$symbol(
						A2(
							$elm$parser$Parser$Advanced$Token,
							listMarker,
							$elm$parser$Parser$ExpectingSymbol(listMarker)))))),
		$dillonkearns$elm_markdown$Markdown$OrderedList$itemBody);
};
var $dillonkearns$elm_markdown$Markdown$OrderedList$statementsHelp = F3(
	function (listMarker, firstItem, revStmts) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							$elm$parser$Parser$Advanced$succeed(
								F3(
									function (offsetBefore, stmt, offsetAfter) {
										return $elm$parser$Parser$Advanced$Loop(
											A2($elm$core$List$cons, stmt, revStmts));
									})),
							$elm$parser$Parser$Advanced$getOffset),
						$dillonkearns$elm_markdown$Markdown$OrderedList$singleItemParser(listMarker)),
					$elm$parser$Parser$Advanced$getOffset),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							A2(
								$elm$core$List$cons,
								firstItem,
								$elm$core$List$reverse(revStmts)));
					},
					$elm$parser$Parser$Advanced$succeed(0))
				]));
	});
var $dillonkearns$elm_markdown$Markdown$OrderedList$parser = function (lastBlock) {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		function (_v0) {
			var startingIndex = _v0.a;
			var listMarker = _v0.b;
			var firstItem = _v0.c;
			return A2(
				$elm$parser$Parser$Advanced$map,
				function (items) {
					return _Utils_Tuple2(startingIndex, items);
				},
				A2(
					$elm$parser$Parser$Advanced$loop,
					_List_Nil,
					A2($dillonkearns$elm_markdown$Markdown$OrderedList$statementsHelp, listMarker, firstItem)));
		},
		$dillonkearns$elm_markdown$Markdown$OrderedList$openingItemParser(lastBlock));
};
var $dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock = function (lastBlock) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		function (_v0) {
			var startingIndex = _v0.a;
			var unparsedLines = _v0.b;
			return A2(
				$dillonkearns$elm_markdown$Markdown$RawBlock$OrderedListBlock,
				startingIndex,
				A2($elm$core$List$map, $elm$core$Basics$identity, unparsedLines));
		},
		$dillonkearns$elm_markdown$Markdown$OrderedList$parser(lastBlock));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$initParser = F2(
	function (refs, rawText) {
		return {c: _List_Nil, d$: rawText, bo: refs, i: _List_Nil};
	});
var $dillonkearns$elm_markdown$Markdown$Inline$CodeInline = function (a) {
	return {$: 2, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Inline$Emphasis = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$Inline$HardLineBreak = {$: 1};
var $dillonkearns$elm_markdown$Markdown$Inline$HtmlInline = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Inline$Image = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Inline$Link = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var $dillonkearns$elm_markdown$Markdown$Inline$Text = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$matchToInline = function (_v0) {
	var match = _v0;
	var _v1 = match.E;
	switch (_v1.$) {
		case 0:
			return $dillonkearns$elm_markdown$Markdown$Inline$Text(match.er);
		case 1:
			return $dillonkearns$elm_markdown$Markdown$Inline$HardLineBreak;
		case 2:
			return $dillonkearns$elm_markdown$Markdown$Inline$CodeInline(match.er);
		case 3:
			var _v2 = _v1.a;
			var text = _v2.a;
			var url = _v2.b;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Inline$Link,
				url,
				$elm$core$Maybe$Nothing,
				_List_fromArray(
					[
						$dillonkearns$elm_markdown$Markdown$Inline$Text(text)
					]));
		case 4:
			var _v3 = _v1.a;
			var url = _v3.a;
			var maybeTitle = _v3.b;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Inline$Link,
				url,
				maybeTitle,
				$dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.c));
		case 5:
			var _v4 = _v1.a;
			var url = _v4.a;
			var maybeTitle = _v4.b;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Inline$Image,
				url,
				maybeTitle,
				$dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.c));
		case 6:
			var model = _v1.a;
			return $dillonkearns$elm_markdown$Markdown$Inline$HtmlInline(model);
		default:
			var length = _v1.a;
			return A2(
				$dillonkearns$elm_markdown$Markdown$Inline$Emphasis,
				length,
				$dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(match.c));
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines = function (matches) {
	return A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$InlineParser$matchToInline, matches);
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$Match = $elm$core$Basics$identity;
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch = F2(
	function (parentMatch, childMatch) {
		return _Utils_update(
			childMatch,
			{k: childMatch.k - parentMatch.L, p: childMatch.p - parentMatch.L, aq: childMatch.aq - parentMatch.L, L: childMatch.L - parentMatch.L});
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$addChild = F2(
	function (parentMatch, childMatch) {
		return _Utils_update(
			parentMatch,
			{
				c: A2(
					$elm$core$List$cons,
					A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch, parentMatch, childMatch),
					parentMatch.c)
			});
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatch = F2(
	function (_v0, matches) {
		var match = _v0;
		if (!matches.b) {
			return _List_fromArray(
				[match]);
		} else {
			var prevMatch = matches.a;
			var matchesTail = matches.b;
			return (_Utils_cmp(prevMatch.k, match.p) < 1) ? A2($elm$core$List$cons, match, matches) : (((_Utils_cmp(prevMatch.p, match.p) < 0) && (_Utils_cmp(prevMatch.k, match.k) > 0)) ? A2(
				$elm$core$List$cons,
				A2($dillonkearns$elm_markdown$Markdown$InlineParser$addChild, prevMatch, match),
				matchesTail) : matches);
		}
	});
var $elm$core$List$sortBy = _List_sortBy;
function $dillonkearns$elm_markdown$Markdown$InlineParser$cyclic$organizeMatches() {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$List$sortBy(
			function (_v0) {
				var match = _v0;
				return match.p;
			}),
		A2(
			$elm$core$Basics$composeR,
			A2($elm$core$List$foldl, $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatch, _List_Nil),
			$elm$core$List$map(
				function (_v1) {
					var match = _v1;
					return _Utils_update(
						match,
						{
							c: $dillonkearns$elm_markdown$Markdown$InlineParser$cyclic$organizeMatches()(match.c)
						});
				})));
}
var $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatches = $dillonkearns$elm_markdown$Markdown$InlineParser$cyclic$organizeMatches();
$dillonkearns$elm_markdown$Markdown$InlineParser$cyclic$organizeMatches = function () {
	return $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatches;
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$organizeParserMatches = function (model) {
	return _Utils_update(
		model,
		{
			c: $dillonkearns$elm_markdown$Markdown$InlineParser$organizeMatches(model.c)
		});
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$NormalType = {$: 0};
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {a: index, bf: match, dP: number, bt: submatches};
	});
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{c0: false, dO: false},
		string);
};
var $elm$regex$Regex$never = _Regex_never;
var $dillonkearns$elm_markdown$Markdown$Entity$decimalRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('&#([0-9]{1,8});'));
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Entity$isBadEndUnicode = function (_int) {
	var remain_ = A2($elm$core$Basics$modBy, 16, _int);
	var remain = A2($elm$core$Basics$modBy, 131070, _int);
	return (_int >= 131070) && ((((0 <= remain) && (remain <= 15)) || ((65536 <= remain) && (remain <= 65551))) && ((remain_ === 14) || (remain_ === 15)));
};
var $dillonkearns$elm_markdown$Markdown$Entity$isValidUnicode = function (_int) {
	return (_int === 9) || ((_int === 10) || ((_int === 13) || ((_int === 133) || (((32 <= _int) && (_int <= 126)) || (((160 <= _int) && (_int <= 55295)) || (((57344 <= _int) && (_int <= 64975)) || (((65008 <= _int) && (_int <= 65533)) || ((65536 <= _int) && (_int <= 1114109)))))))));
};
var $dillonkearns$elm_markdown$Markdown$Entity$validUnicode = function (_int) {
	return ($dillonkearns$elm_markdown$Markdown$Entity$isValidUnicode(_int) && (!$dillonkearns$elm_markdown$Markdown$Entity$isBadEndUnicode(_int))) ? $elm$core$String$fromChar(
		$elm$core$Char$fromCode(_int)) : $elm$core$String$fromChar(
		$elm$core$Char$fromCode(65533));
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceDecimal = function (match) {
	return A2(
		$elm$core$Maybe$withDefault,
		match.bf,
		A2(
			$elm$core$Maybe$map,
			$dillonkearns$elm_markdown$Markdown$Entity$validUnicode,
			A2(
				$elm$core$Maybe$andThen,
				$elm$core$String$toInt,
				A2(
					$elm$core$Maybe$withDefault,
					$elm$core$Maybe$Nothing,
					$elm$core$List$head(match.bt)))));
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceDecimals = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Entity$decimalRegex, $dillonkearns$elm_markdown$Markdown$Entity$replaceDecimal);
var $dillonkearns$elm_markdown$Markdown$Entity$entitiesRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('&([0-9a-zA-Z]+);'));
var $dillonkearns$elm_markdown$Markdown$Entity$entities = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('quot', 34),
			_Utils_Tuple2('amp', 38),
			_Utils_Tuple2('apos', 39),
			_Utils_Tuple2('lt', 60),
			_Utils_Tuple2('gt', 62),
			_Utils_Tuple2('nbsp', 160),
			_Utils_Tuple2('iexcl', 161),
			_Utils_Tuple2('cent', 162),
			_Utils_Tuple2('pound', 163),
			_Utils_Tuple2('curren', 164),
			_Utils_Tuple2('yen', 165),
			_Utils_Tuple2('brvbar', 166),
			_Utils_Tuple2('sect', 167),
			_Utils_Tuple2('uml', 168),
			_Utils_Tuple2('copy', 169),
			_Utils_Tuple2('ordf', 170),
			_Utils_Tuple2('laquo', 171),
			_Utils_Tuple2('not', 172),
			_Utils_Tuple2('shy', 173),
			_Utils_Tuple2('reg', 174),
			_Utils_Tuple2('macr', 175),
			_Utils_Tuple2('deg', 176),
			_Utils_Tuple2('plusmn', 177),
			_Utils_Tuple2('sup2', 178),
			_Utils_Tuple2('sup3', 179),
			_Utils_Tuple2('acute', 180),
			_Utils_Tuple2('micro', 181),
			_Utils_Tuple2('para', 182),
			_Utils_Tuple2('middot', 183),
			_Utils_Tuple2('cedil', 184),
			_Utils_Tuple2('sup1', 185),
			_Utils_Tuple2('ordm', 186),
			_Utils_Tuple2('raquo', 187),
			_Utils_Tuple2('frac14', 188),
			_Utils_Tuple2('frac12', 189),
			_Utils_Tuple2('frac34', 190),
			_Utils_Tuple2('iquest', 191),
			_Utils_Tuple2('Agrave', 192),
			_Utils_Tuple2('Aacute', 193),
			_Utils_Tuple2('Acirc', 194),
			_Utils_Tuple2('Atilde', 195),
			_Utils_Tuple2('Auml', 196),
			_Utils_Tuple2('Aring', 197),
			_Utils_Tuple2('AElig', 198),
			_Utils_Tuple2('Ccedil', 199),
			_Utils_Tuple2('Egrave', 200),
			_Utils_Tuple2('Eacute', 201),
			_Utils_Tuple2('Ecirc', 202),
			_Utils_Tuple2('Euml', 203),
			_Utils_Tuple2('Igrave', 204),
			_Utils_Tuple2('Iacute', 205),
			_Utils_Tuple2('Icirc', 206),
			_Utils_Tuple2('Iuml', 207),
			_Utils_Tuple2('ETH', 208),
			_Utils_Tuple2('Ntilde', 209),
			_Utils_Tuple2('Ograve', 210),
			_Utils_Tuple2('Oacute', 211),
			_Utils_Tuple2('Ocirc', 212),
			_Utils_Tuple2('Otilde', 213),
			_Utils_Tuple2('Ouml', 214),
			_Utils_Tuple2('times', 215),
			_Utils_Tuple2('Oslash', 216),
			_Utils_Tuple2('Ugrave', 217),
			_Utils_Tuple2('Uacute', 218),
			_Utils_Tuple2('Ucirc', 219),
			_Utils_Tuple2('Uuml', 220),
			_Utils_Tuple2('Yacute', 221),
			_Utils_Tuple2('THORN', 222),
			_Utils_Tuple2('szlig', 223),
			_Utils_Tuple2('agrave', 224),
			_Utils_Tuple2('aacute', 225),
			_Utils_Tuple2('acirc', 226),
			_Utils_Tuple2('atilde', 227),
			_Utils_Tuple2('auml', 228),
			_Utils_Tuple2('aring', 229),
			_Utils_Tuple2('aelig', 230),
			_Utils_Tuple2('ccedil', 231),
			_Utils_Tuple2('egrave', 232),
			_Utils_Tuple2('eacute', 233),
			_Utils_Tuple2('ecirc', 234),
			_Utils_Tuple2('euml', 235),
			_Utils_Tuple2('igrave', 236),
			_Utils_Tuple2('iacute', 237),
			_Utils_Tuple2('icirc', 238),
			_Utils_Tuple2('iuml', 239),
			_Utils_Tuple2('eth', 240),
			_Utils_Tuple2('ntilde', 241),
			_Utils_Tuple2('ograve', 242),
			_Utils_Tuple2('oacute', 243),
			_Utils_Tuple2('ocirc', 244),
			_Utils_Tuple2('otilde', 245),
			_Utils_Tuple2('ouml', 246),
			_Utils_Tuple2('divide', 247),
			_Utils_Tuple2('oslash', 248),
			_Utils_Tuple2('ugrave', 249),
			_Utils_Tuple2('uacute', 250),
			_Utils_Tuple2('ucirc', 251),
			_Utils_Tuple2('uuml', 252),
			_Utils_Tuple2('yacute', 253),
			_Utils_Tuple2('thorn', 254),
			_Utils_Tuple2('yuml', 255),
			_Utils_Tuple2('OElig', 338),
			_Utils_Tuple2('oelig', 339),
			_Utils_Tuple2('Scaron', 352),
			_Utils_Tuple2('scaron', 353),
			_Utils_Tuple2('Yuml', 376),
			_Utils_Tuple2('fnof', 402),
			_Utils_Tuple2('circ', 710),
			_Utils_Tuple2('tilde', 732),
			_Utils_Tuple2('Alpha', 913),
			_Utils_Tuple2('Beta', 914),
			_Utils_Tuple2('Gamma', 915),
			_Utils_Tuple2('Delta', 916),
			_Utils_Tuple2('Epsilon', 917),
			_Utils_Tuple2('Zeta', 918),
			_Utils_Tuple2('Eta', 919),
			_Utils_Tuple2('Theta', 920),
			_Utils_Tuple2('Iota', 921),
			_Utils_Tuple2('Kappa', 922),
			_Utils_Tuple2('Lambda', 923),
			_Utils_Tuple2('Mu', 924),
			_Utils_Tuple2('Nu', 925),
			_Utils_Tuple2('Xi', 926),
			_Utils_Tuple2('Omicron', 927),
			_Utils_Tuple2('Pi', 928),
			_Utils_Tuple2('Rho', 929),
			_Utils_Tuple2('Sigma', 931),
			_Utils_Tuple2('Tau', 932),
			_Utils_Tuple2('Upsilon', 933),
			_Utils_Tuple2('Phi', 934),
			_Utils_Tuple2('Chi', 935),
			_Utils_Tuple2('Psi', 936),
			_Utils_Tuple2('Omega', 937),
			_Utils_Tuple2('alpha', 945),
			_Utils_Tuple2('beta', 946),
			_Utils_Tuple2('gamma', 947),
			_Utils_Tuple2('delta', 948),
			_Utils_Tuple2('epsilon', 949),
			_Utils_Tuple2('zeta', 950),
			_Utils_Tuple2('eta', 951),
			_Utils_Tuple2('theta', 952),
			_Utils_Tuple2('iota', 953),
			_Utils_Tuple2('kappa', 954),
			_Utils_Tuple2('lambda', 955),
			_Utils_Tuple2('mu', 956),
			_Utils_Tuple2('nu', 957),
			_Utils_Tuple2('xi', 958),
			_Utils_Tuple2('omicron', 959),
			_Utils_Tuple2('pi', 960),
			_Utils_Tuple2('rho', 961),
			_Utils_Tuple2('sigmaf', 962),
			_Utils_Tuple2('sigma', 963),
			_Utils_Tuple2('tau', 964),
			_Utils_Tuple2('upsilon', 965),
			_Utils_Tuple2('phi', 966),
			_Utils_Tuple2('chi', 967),
			_Utils_Tuple2('psi', 968),
			_Utils_Tuple2('omega', 969),
			_Utils_Tuple2('thetasym', 977),
			_Utils_Tuple2('upsih', 978),
			_Utils_Tuple2('piv', 982),
			_Utils_Tuple2('ensp', 8194),
			_Utils_Tuple2('emsp', 8195),
			_Utils_Tuple2('thinsp', 8201),
			_Utils_Tuple2('zwnj', 8204),
			_Utils_Tuple2('zwj', 8205),
			_Utils_Tuple2('lrm', 8206),
			_Utils_Tuple2('rlm', 8207),
			_Utils_Tuple2('ndash', 8211),
			_Utils_Tuple2('mdash', 8212),
			_Utils_Tuple2('lsquo', 8216),
			_Utils_Tuple2('rsquo', 8217),
			_Utils_Tuple2('sbquo', 8218),
			_Utils_Tuple2('ldquo', 8220),
			_Utils_Tuple2('rdquo', 8221),
			_Utils_Tuple2('bdquo', 8222),
			_Utils_Tuple2('dagger', 8224),
			_Utils_Tuple2('Dagger', 8225),
			_Utils_Tuple2('bull', 8226),
			_Utils_Tuple2('hellip', 8230),
			_Utils_Tuple2('permil', 8240),
			_Utils_Tuple2('prime', 8242),
			_Utils_Tuple2('Prime', 8243),
			_Utils_Tuple2('lsaquo', 8249),
			_Utils_Tuple2('rsaquo', 8250),
			_Utils_Tuple2('oline', 8254),
			_Utils_Tuple2('frasl', 8260),
			_Utils_Tuple2('euro', 8364),
			_Utils_Tuple2('image', 8465),
			_Utils_Tuple2('weierp', 8472),
			_Utils_Tuple2('real', 8476),
			_Utils_Tuple2('trade', 8482),
			_Utils_Tuple2('alefsym', 8501),
			_Utils_Tuple2('larr', 8592),
			_Utils_Tuple2('uarr', 8593),
			_Utils_Tuple2('rarr', 8594),
			_Utils_Tuple2('darr', 8595),
			_Utils_Tuple2('harr', 8596),
			_Utils_Tuple2('crarr', 8629),
			_Utils_Tuple2('lArr', 8656),
			_Utils_Tuple2('uArr', 8657),
			_Utils_Tuple2('rArr', 8658),
			_Utils_Tuple2('dArr', 8659),
			_Utils_Tuple2('hArr', 8660),
			_Utils_Tuple2('forall', 8704),
			_Utils_Tuple2('part', 8706),
			_Utils_Tuple2('exist', 8707),
			_Utils_Tuple2('empty', 8709),
			_Utils_Tuple2('nabla', 8711),
			_Utils_Tuple2('isin', 8712),
			_Utils_Tuple2('notin', 8713),
			_Utils_Tuple2('ni', 8715),
			_Utils_Tuple2('prod', 8719),
			_Utils_Tuple2('sum', 8721),
			_Utils_Tuple2('minus', 8722),
			_Utils_Tuple2('lowast', 8727),
			_Utils_Tuple2('radic', 8730),
			_Utils_Tuple2('prop', 8733),
			_Utils_Tuple2('infin', 8734),
			_Utils_Tuple2('ang', 8736),
			_Utils_Tuple2('and', 8743),
			_Utils_Tuple2('or', 8744),
			_Utils_Tuple2('cap', 8745),
			_Utils_Tuple2('cup', 8746),
			_Utils_Tuple2('int', 8747),
			_Utils_Tuple2('there4', 8756),
			_Utils_Tuple2('sim', 8764),
			_Utils_Tuple2('cong', 8773),
			_Utils_Tuple2('asymp', 8776),
			_Utils_Tuple2('ne', 8800),
			_Utils_Tuple2('equiv', 8801),
			_Utils_Tuple2('le', 8804),
			_Utils_Tuple2('ge', 8805),
			_Utils_Tuple2('sub', 8834),
			_Utils_Tuple2('sup', 8835),
			_Utils_Tuple2('nsub', 8836),
			_Utils_Tuple2('sube', 8838),
			_Utils_Tuple2('supe', 8839),
			_Utils_Tuple2('oplus', 8853),
			_Utils_Tuple2('otimes', 8855),
			_Utils_Tuple2('perp', 8869),
			_Utils_Tuple2('sdot', 8901),
			_Utils_Tuple2('lceil', 8968),
			_Utils_Tuple2('rceil', 8969),
			_Utils_Tuple2('lfloor', 8970),
			_Utils_Tuple2('rfloor', 8971),
			_Utils_Tuple2('lang', 9001),
			_Utils_Tuple2('rang', 9002),
			_Utils_Tuple2('loz', 9674),
			_Utils_Tuple2('spades', 9824),
			_Utils_Tuple2('clubs', 9827),
			_Utils_Tuple2('hearts', 9829),
			_Utils_Tuple2('diams', 9830)
		]));
var $dillonkearns$elm_markdown$Markdown$Entity$replaceEntity = function (match) {
	return A2(
		$elm$core$Maybe$withDefault,
		match.bf,
		A2(
			$elm$core$Maybe$map,
			A2($elm$core$Basics$composeR, $elm$core$Char$fromCode, $elm$core$String$fromChar),
			A2(
				$elm$core$Maybe$andThen,
				function (a) {
					return A2($elm$core$Dict$get, a, $dillonkearns$elm_markdown$Markdown$Entity$entities);
				},
				A2(
					$elm$core$Maybe$withDefault,
					$elm$core$Maybe$Nothing,
					$elm$core$List$head(match.bt)))));
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceEntities = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Entity$entitiesRegex, $dillonkearns$elm_markdown$Markdown$Entity$replaceEntity);
var $dillonkearns$elm_markdown$Markdown$Helpers$escapableRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\+)([!\"#$%&\\\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-])'));
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $dillonkearns$elm_markdown$Markdown$Helpers$replaceEscapable = A2(
	$elm$regex$Regex$replace,
	$dillonkearns$elm_markdown$Markdown$Helpers$escapableRegex,
	function (regexMatch) {
		var _v0 = regexMatch.bt;
		if (((_v0.b && (!_v0.a.$)) && _v0.b.b) && (!_v0.b.a.$)) {
			var backslashes = _v0.a.a;
			var _v1 = _v0.b;
			var escapedStr = _v1.a.a;
			return _Utils_ap(
				A2(
					$elm$core$String$repeat,
					($elm$core$String$length(backslashes) / 2) | 0,
					'\\'),
				escapedStr);
		} else {
			return regexMatch.bf;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Entity$hexadecimalRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('&#[Xx]([0-9a-fA-F]{1,8});'));
var $dillonkearns$elm_markdown$Markdown$Entity$hexToInt = A2(
	$elm$core$Basics$composeR,
	$elm$core$String$toLower,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$String$toList,
		A2(
			$elm$core$List$foldl,
			F2(
				function (hexDigit, _int) {
					return ((_int * 16) + A2(
						$elm$core$Basics$modBy,
						39,
						$elm$core$Char$toCode(hexDigit))) - 9;
				}),
			0)));
var $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimal = function (match) {
	return A2(
		$elm$core$Maybe$withDefault,
		match.bf,
		A2(
			$elm$core$Maybe$map,
			A2($elm$core$Basics$composeR, $dillonkearns$elm_markdown$Markdown$Entity$hexToInt, $dillonkearns$elm_markdown$Markdown$Entity$validUnicode),
			A2(
				$elm$core$Maybe$withDefault,
				$elm$core$Maybe$Nothing,
				$elm$core$List$head(match.bt))));
};
var $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimals = A2($elm$regex$Regex$replace, $dillonkearns$elm_markdown$Markdown$Entity$hexadecimalRegex, $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimal);
var $dillonkearns$elm_markdown$Markdown$Helpers$formatStr = function (str) {
	return $dillonkearns$elm_markdown$Markdown$Entity$replaceHexadecimals(
		$dillonkearns$elm_markdown$Markdown$Entity$replaceDecimals(
			$dillonkearns$elm_markdown$Markdown$Entity$replaceEntities(
				$dillonkearns$elm_markdown$Markdown$Helpers$replaceEscapable(str))));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch = function (text) {
	return {
		k: 0,
		c: _List_Nil,
		p: 0,
		er: $dillonkearns$elm_markdown$Markdown$Helpers$formatStr(text),
		aq: 0,
		L: 0,
		E: $dillonkearns$elm_markdown$Markdown$InlineParser$NormalType
	};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatch = F3(
	function (rawText, _v2, parsedMatches) {
		var matchModel = _v2;
		var updtMatch = _Utils_update(
			matchModel,
			{
				c: A3($dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches, matchModel.er, _List_Nil, matchModel.c)
			});
		if (!parsedMatches.b) {
			var finalStr = A2($elm$core$String$dropLeft, matchModel.k, rawText);
			return $elm$core$String$isEmpty(finalStr) ? _List_fromArray(
				[updtMatch]) : _List_fromArray(
				[
					updtMatch,
					$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(finalStr)
				]);
		} else {
			var matchHead = parsedMatches.a;
			var matchesTail = parsedMatches.b;
			return _Utils_eq(matchHead.E, $dillonkearns$elm_markdown$Markdown$InlineParser$NormalType) ? A2($elm$core$List$cons, updtMatch, parsedMatches) : (_Utils_eq(matchModel.k, matchHead.p) ? A2($elm$core$List$cons, updtMatch, parsedMatches) : ((_Utils_cmp(matchModel.k, matchHead.p) < 0) ? A2(
				$elm$core$List$cons,
				updtMatch,
				A2(
					$elm$core$List$cons,
					$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(
						A3($elm$core$String$slice, matchModel.k, matchHead.p, rawText)),
					parsedMatches)) : parsedMatches));
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches = F3(
	function (rawText, parsedMatches, matches) {
		parseTextMatches:
		while (true) {
			if (!matches.b) {
				if (!parsedMatches.b) {
					return $elm$core$String$isEmpty(rawText) ? _List_Nil : _List_fromArray(
						[
							$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(rawText)
						]);
				} else {
					var matchModel = parsedMatches.a;
					return (matchModel.p > 0) ? A2(
						$elm$core$List$cons,
						$dillonkearns$elm_markdown$Markdown$InlineParser$normalMatch(
							A2($elm$core$String$left, matchModel.p, rawText)),
						parsedMatches) : parsedMatches;
				}
			} else {
				var match = matches.a;
				var matchesTail = matches.b;
				var $temp$rawText = rawText,
					$temp$parsedMatches = A3($dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatch, rawText, match, parsedMatches),
					$temp$matches = matchesTail;
				rawText = $temp$rawText;
				parsedMatches = $temp$parsedMatches;
				matches = $temp$matches;
				continue parseTextMatches;
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$parseText = function (model) {
	return _Utils_update(
		model,
		{
			c: A3($dillonkearns$elm_markdown$Markdown$InlineParser$parseTextMatches, model.d$, _List_Nil, model.c)
		});
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketLTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(\\<)'));
var $elm$regex$Regex$find = _Regex_findAtMost(_Regex_infinity);
var $dillonkearns$elm_markdown$Markdown$InlineParser$CharToken = function (a) {
	return {$: 3, a: a};
};
var $dillonkearns$elm_markdown$Markdown$Helpers$isEven = function (_int) {
	return !A2($elm$core$Basics$modBy, 2, _int);
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketLToken = function (regMatch) {
	var _v0 = regMatch.bt;
	if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var delimiter = _v1.a.a;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just(
			{
				a: regMatch.a + backslashesLength,
				d: 1,
				g: $dillonkearns$elm_markdown$Markdown$InlineParser$CharToken('<')
			}) : $elm$core$Maybe$Nothing;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketLTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketLToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketLTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketRTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(\\>)'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$RightAngleBracket = function (a) {
	return {$: 4, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketRToken = function (regMatch) {
	var _v0 = regMatch.bt;
	if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $elm$core$Maybe$Just(
			{
				a: regMatch.a + backslashesLength,
				d: 1,
				g: $dillonkearns$elm_markdown$Markdown$InlineParser$RightAngleBracket(
					!$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength))
			});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketRTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToAngleBracketRToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketRTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$asteriskEmphasisTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)([^*])?(\\*+)([^*])?'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisToken = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $elm$regex$Regex$contains = _Regex_contains;
var $dillonkearns$elm_markdown$Markdown$InlineParser$punctuationRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('[!-#%-\\*,-/:;\\?@\\[-\\]_\\{\\}]'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$containPunctuation = $elm$regex$Regex$contains($dillonkearns$elm_markdown$Markdown$InlineParser$punctuationRegex);
var $dillonkearns$elm_markdown$Markdown$InlineParser$spaceRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('\\s'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$containSpace = $elm$regex$Regex$contains($dillonkearns$elm_markdown$Markdown$InlineParser$spaceRegex);
var $dillonkearns$elm_markdown$Markdown$InlineParser$charFringeRank = function (_char) {
	var string = $elm$core$String$fromChar(_char);
	return $dillonkearns$elm_markdown$Markdown$InlineParser$containSpace(string) ? 0 : ($dillonkearns$elm_markdown$Markdown$InlineParser$containPunctuation(string) ? 1 : 2);
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$maybeCharFringeRank = function (maybeChar) {
	return A2(
		$elm$core$Maybe$withDefault,
		0,
		A2($elm$core$Maybe$map, $dillonkearns$elm_markdown$Markdown$InlineParser$charFringeRank, maybeChar));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$getFringeRank = A2(
	$elm$core$Basics$composeR,
	$elm$core$Maybe$map(
		A2(
			$elm$core$Basics$composeR,
			$elm$core$String$uncons,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Maybe$map($elm$core$Tuple$first),
				$dillonkearns$elm_markdown$Markdown$InlineParser$maybeCharFringeRank))),
	$elm$core$Maybe$withDefault(0));
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken = F3(
	function (_char, rawText, regMatch) {
		var _v0 = regMatch.bt;
		if ((((_v0.b && _v0.b.b) && _v0.b.b.b) && (!_v0.b.b.a.$)) && _v0.b.b.b.b) {
			var maybeBackslashes = _v0.a;
			var _v1 = _v0.b;
			var maybeLeftFringe = _v1.a;
			var _v2 = _v1.b;
			var delimiter = _v2.a.a;
			var _v3 = _v2.b;
			var maybeRightFringe = _v3.a;
			var leftFringeLength = A2(
				$elm$core$Maybe$withDefault,
				0,
				A2($elm$core$Maybe$map, $elm$core$String$length, maybeLeftFringe));
			var mLeftFringe = ((!(!regMatch.a)) && (!leftFringeLength)) ? $elm$core$Maybe$Just(
				A3($elm$core$String$slice, regMatch.a - 1, regMatch.a, rawText)) : maybeLeftFringe;
			var backslashesLength = A2(
				$elm$core$Maybe$withDefault,
				0,
				A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
			var isEscaped = ((!$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength)) && (!leftFringeLength)) || _Utils_eq(
				mLeftFringe,
				$elm$core$Maybe$Just('\\'));
			var delimiterLength = isEscaped ? ($elm$core$String$length(delimiter) - 1) : $elm$core$String$length(delimiter);
			var fringeRank = _Utils_Tuple2(
				isEscaped ? 1 : $dillonkearns$elm_markdown$Markdown$InlineParser$getFringeRank(mLeftFringe),
				$dillonkearns$elm_markdown$Markdown$InlineParser$getFringeRank(maybeRightFringe));
			var index = ((regMatch.a + backslashesLength) + leftFringeLength) + (isEscaped ? 1 : 0);
			return ((delimiterLength <= 0) || ((_char === '_') && _Utils_eq(
				fringeRank,
				_Utils_Tuple2(2, 2)))) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				{
					a: index,
					d: delimiterLength,
					g: A2($dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisToken, _char, fringeRank)
				});
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$findAsteriskEmphasisTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		A2($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken, '*', str),
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$asteriskEmphasisTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$codeTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(\\`+)'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$CodeToken = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToCodeToken = function (regMatch) {
	var _v0 = regMatch.bt;
	if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var backtick = _v1.a.a;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $elm$core$Maybe$Just(
			{
				a: regMatch.a + backslashesLength,
				d: $elm$core$String$length(backtick),
				g: $dillonkearns$elm_markdown$Markdown$InlineParser$CodeToken(
					!$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength))
			});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findCodeTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToCodeToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$codeTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$hardBreakTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(?:(\\\\+)|( {2,}))\\n'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken = {$: 8};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToHardBreakToken = function (regMatch) {
	var _v0 = regMatch.bt;
	_v0$2:
	while (true) {
		if (_v0.b) {
			if (!_v0.a.$) {
				var backslashes = _v0.a.a;
				var backslashesLength = $elm$core$String$length(backslashes);
				return (!$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength)) ? $elm$core$Maybe$Just(
					{a: (regMatch.a + backslashesLength) - 1, d: 2, g: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken}) : $elm$core$Maybe$Nothing;
			} else {
				if (_v0.b.b && (!_v0.b.a.$)) {
					var _v1 = _v0.b;
					return $elm$core$Maybe$Just(
						{
							a: regMatch.a,
							d: $elm$core$String$length(regMatch.bf),
							g: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken
						});
				} else {
					break _v0$2;
				}
			}
		} else {
			break _v0$2;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToSoftHardBreakToken = function (regMatch) {
	var _v0 = regMatch.bt;
	_v0$2:
	while (true) {
		if (_v0.b) {
			if (!_v0.a.$) {
				var backslashes = _v0.a.a;
				var backslashesLength = $elm$core$String$length(backslashes);
				return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just(
					{a: regMatch.a + backslashesLength, d: 1, g: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken}) : $elm$core$Maybe$Just(
					{a: (regMatch.a + backslashesLength) - 1, d: 2, g: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken});
			} else {
				if (_v0.b.b) {
					var _v1 = _v0.b;
					var maybeSpaces = _v1.a;
					return $elm$core$Maybe$Just(
						{
							a: regMatch.a,
							d: $elm$core$String$length(regMatch.bf),
							g: $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken
						});
				} else {
					break _v0$2;
				}
			}
		} else {
			break _v0$2;
		}
	}
	return $elm$core$Maybe$Nothing;
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreak = false;
var $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreakTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(?:(\\\\+)|( *))\\n'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$findHardBreakTokens = function (str) {
	return $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreak ? A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToSoftHardBreakToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreakTokenRegex, str)) : A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToHardBreakToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$hardBreakTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageCloseTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(\\])'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageCloseToken = function (regMatch) {
	var _v0 = regMatch.bt;
	if ((_v0.b && _v0.b.b) && (!_v0.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var delimiter = _v1.a.a;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		return $dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength) ? $elm$core$Maybe$Just(
			{
				a: regMatch.a + backslashesLength,
				d: 1,
				g: $dillonkearns$elm_markdown$Markdown$InlineParser$CharToken(']')
			}) : $elm$core$Maybe$Nothing;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageCloseTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageCloseToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageCloseTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageOpenTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)(\\!)?(\\[)'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$ImageOpenToken = {$: 2};
var $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageOpenToken = function (regMatch) {
	var _v0 = regMatch.bt;
	if (((_v0.b && _v0.b.b) && _v0.b.b.b) && (!_v0.b.b.a.$)) {
		var maybeBackslashes = _v0.a;
		var _v1 = _v0.b;
		var maybeImageOpen = _v1.a;
		var _v2 = _v1.b;
		var delimiter = _v2.a.a;
		var backslashesLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2($elm$core$Maybe$map, $elm$core$String$length, maybeBackslashes));
		var isEscaped = !$dillonkearns$elm_markdown$Markdown$Helpers$isEven(backslashesLength);
		var index = (regMatch.a + backslashesLength) + ((isEscaped && _Utils_eq(
			maybeImageOpen,
			$elm$core$Maybe$Just('!'))) ? 1 : 0);
		var meaning = isEscaped ? A2(
			$elm$core$Maybe$map,
			function (_v3) {
				return $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken(true);
			},
			maybeImageOpen) : $elm$core$Maybe$Just(
			A2(
				$elm$core$Maybe$withDefault,
				$dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken(true),
				A2(
					$elm$core$Maybe$map,
					function (_v4) {
						return $dillonkearns$elm_markdown$Markdown$InlineParser$ImageOpenToken;
					},
					maybeImageOpen)));
		var length = _Utils_eq(
			meaning,
			$elm$core$Maybe$Just($dillonkearns$elm_markdown$Markdown$InlineParser$ImageOpenToken)) ? 2 : 1;
		var toModel = function (m) {
			return {a: index, d: length, g: m};
		};
		return A2($elm$core$Maybe$map, toModel, meaning);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageOpenTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		$dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToLinkImageOpenToken,
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageOpenTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$underlineEmphasisTokenRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('(\\\\*)([^_])?(\\_+)([^_])?'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$findUnderlineEmphasisTokens = function (str) {
	return A2(
		$elm$core$List$filterMap,
		A2($dillonkearns$elm_markdown$Markdown$InlineParser$regMatchToEmphasisToken, '_', str),
		A2($elm$regex$Regex$find, $dillonkearns$elm_markdown$Markdown$InlineParser$underlineEmphasisTokenRegex, str));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokenize = function (model) {
	return _Utils_update(
		model,
		{
			i: A2(
				$elm$core$List$sortBy,
				function ($) {
					return $.a;
				},
				_Utils_ap(
					$dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketRTokens(model.d$),
					_Utils_ap(
						$dillonkearns$elm_markdown$Markdown$InlineParser$findAngleBracketLTokens(model.d$),
						_Utils_ap(
							$dillonkearns$elm_markdown$Markdown$InlineParser$findHardBreakTokens(model.d$),
							_Utils_ap(
								$dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageCloseTokens(model.d$),
								_Utils_ap(
									$dillonkearns$elm_markdown$Markdown$InlineParser$findLinkImageOpenTokens(model.d$),
									_Utils_ap(
										$dillonkearns$elm_markdown$Markdown$InlineParser$findUnderlineEmphasisTokens(model.d$),
										_Utils_ap(
											$dillonkearns$elm_markdown$Markdown$InlineParser$findAsteriskEmphasisTokens(model.d$),
											$dillonkearns$elm_markdown$Markdown$InlineParser$findCodeTokens(model.d$)))))))))
		});
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$CodeType = {$: 2};
var $dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisType = function (a) {
	return {$: 7, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType = function (a) {
	return {$: 6, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType = function (a) {
	return {$: 5, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType = function (a) {
	return {$: 4, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$addMatch = F2(
	function (model, match) {
		return _Utils_update(
			model,
			{
				c: A2($elm$core$List$cons, match, model.c)
			});
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$addToken = F2(
	function (model, token) {
		return _Utils_update(
			model,
			{
				i: A2($elm$core$List$cons, token, model.i)
			});
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$applyTTM = F2(
	function (finderFunction, model) {
		return finderFunction(
			_Utils_Tuple2(
				model.i,
				_Utils_update(
					model,
					{i: _List_Nil})));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$AutolinkType = function (a) {
	return {$: 3, a: a};
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$decodeUrlRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('%(?:3B|2C|2F|3F|3A|40|26|3D|2B|24|23|25)'));
var $elm$url$Url$percentEncode = _Url_percentEncode;
var $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl = A2(
	$elm$core$Basics$composeR,
	$elm$url$Url$percentEncode,
	A2(
		$elm$regex$Regex$replace,
		$dillonkearns$elm_markdown$Markdown$InlineParser$decodeUrlRegex,
		function (match) {
			return A2(
				$elm$core$Maybe$withDefault,
				match.bf,
				$elm$url$Url$percentDecode(match.bf));
		}));
var $dillonkearns$elm_markdown$Markdown$InlineParser$urlRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^([A-Za-z][A-Za-z0-9.+\\-]{1,31}:[^<>\\x00-\\x20]*)$'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$autolinkToMatch = function (_v0) {
	var match = _v0;
	return A2($elm$regex$Regex$contains, $dillonkearns$elm_markdown$Markdown$InlineParser$urlRegex, match.er) ? $elm$core$Result$Ok(
		_Utils_update(
			match,
			{
				E: $dillonkearns$elm_markdown$Markdown$InlineParser$AutolinkType(
					_Utils_Tuple2(
						match.er,
						$dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl(match.er)))
			})) : $elm$core$Result$Err(match);
};
var $elm$regex$Regex$findAtMost = _Regex_findAtMost;
var $dillonkearns$elm_markdown$Markdown$Helpers$lineEndChars = '\\f\\v\\r\\n';
var $dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars = ' \\t\\f\\v\\r\\n';
var $dillonkearns$elm_markdown$Markdown$InlineParser$hrefRegex = '(?:<([^<>' + ($dillonkearns$elm_markdown$Markdown$Helpers$lineEndChars + (']*)>|([^' + ($dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars + ('\\(\\)\\\\]*(?:\\\\.[^' + ($dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars + '\\(\\)\\\\]*)*))')))));
var $dillonkearns$elm_markdown$Markdown$Helpers$titleRegex = '(?:[' + ($dillonkearns$elm_markdown$Markdown$Helpers$whiteSpaceChars + (']+' + ('(?:\'([^\'\\\\]*(?:\\\\.[^\'\\\\]*)*)\'|' + ('\"([^\"\\\\]*(?:\\\\.[^\"\\\\]*)*)\"|' + '\\(([^\\)\\\\]*(?:\\\\.[^\\)\\\\]*)*)\\)))?'))));
var $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^\\(\\s*' + ($dillonkearns$elm_markdown$Markdown$InlineParser$hrefRegex + ($dillonkearns$elm_markdown$Markdown$Helpers$titleRegex + '\\s*\\)'))));
var $dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle = function (_v0) {
	var rawUrl = _v0.a;
	var maybeTitle = _v0.b;
	return _Utils_Tuple2(
		$dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl(
			$dillonkearns$elm_markdown$Markdown$Helpers$formatStr(rawUrl)),
		A2($elm$core$Maybe$map, $dillonkearns$elm_markdown$Markdown$Helpers$formatStr, maybeTitle));
};
var $dillonkearns$elm_markdown$Markdown$Helpers$returnFirstJust = function (maybes) {
	var process = F2(
		function (a, maybeFound) {
			if (!maybeFound.$) {
				var found = maybeFound.a;
				return $elm$core$Maybe$Just(found);
			} else {
				return a;
			}
		});
	return A3($elm$core$List$foldl, process, $elm$core$Maybe$Nothing, maybes);
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch = F3(
	function (matchModel, model, regexMatch) {
		var _v0 = regexMatch.bt;
		if ((((_v0.b && _v0.b.b) && _v0.b.b.b) && _v0.b.b.b.b) && _v0.b.b.b.b.b) {
			var maybeRawUrlAngleBrackets = _v0.a;
			var _v1 = _v0.b;
			var maybeRawUrlWithoutBrackets = _v1.a;
			var _v2 = _v1.b;
			var maybeTitleSingleQuotes = _v2.a;
			var _v3 = _v2.b;
			var maybeTitleDoubleQuotes = _v3.a;
			var _v4 = _v3.b;
			var maybeTitleParenthesis = _v4.a;
			var maybeTitle = $dillonkearns$elm_markdown$Markdown$Helpers$returnFirstJust(
				_List_fromArray(
					[maybeTitleSingleQuotes, maybeTitleDoubleQuotes, maybeTitleParenthesis]));
			var toMatch = function (rawUrl) {
				return _Utils_update(
					matchModel,
					{
						k: matchModel.k + $elm$core$String$length(regexMatch.bf),
						E: function () {
							var _v5 = matchModel.E;
							if (_v5.$ === 5) {
								return $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType;
							} else {
								return $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType;
							}
						}()(
							$dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle(
								_Utils_Tuple2(rawUrl, maybeTitle)))
					});
			};
			var maybeRawUrl = $dillonkearns$elm_markdown$Markdown$Helpers$returnFirstJust(
				_List_fromArray(
					[maybeRawUrlAngleBrackets, maybeRawUrlWithoutBrackets]));
			return $elm$core$Maybe$Just(
				toMatch(
					A2($elm$core$Maybe$withDefault, '', maybeRawUrl)));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType = function (_v0) {
	var remainText = _v0.a;
	var tempMatch = _v0.b;
	var model = _v0.c;
	return A2(
		$elm$core$Result$fromMaybe,
		_Utils_Tuple3(remainText, tempMatch, model),
		A2(
			$elm$core$Maybe$map,
			$dillonkearns$elm_markdown$Markdown$InlineParser$addMatch(model),
			A2(
				$elm$core$Maybe$andThen,
				A2($dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegexToMatch, tempMatch, model),
				$elm$core$List$head(
					A3($elm$regex$Regex$findAtMost, 1, $dillonkearns$elm_markdown$Markdown$InlineParser$inlineLinkTypeOrImageTypeRegex, remainText)))));
};
var $dillonkearns$elm_markdown$Markdown$Helpers$insideSquareBracketRegex = '[^\\[\\]\\\\]*(?:\\\\.[^\\[\\]\\\\]*)*';
var $dillonkearns$elm_markdown$Markdown$InlineParser$refLabelRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^\\[\\s*(' + ($dillonkearns$elm_markdown$Markdown$Helpers$insideSquareBracketRegex + ')\\s*\\]')));
var $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces = function (original) {
	return original;
};
var $dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel = A2($elm$core$Basics$composeR, $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces, $elm$core$String$toLower);
var $dillonkearns$elm_markdown$Markdown$InlineParser$refRegexToMatch = F3(
	function (matchModel, model, maybeRegexMatch) {
		var regexMatchLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm$core$Maybe$map,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.bf;
					},
					$elm$core$String$length),
				maybeRegexMatch));
		var toMatch = function (urlTitle) {
			return _Utils_update(
				matchModel,
				{
					k: matchModel.k + regexMatchLength,
					E: function () {
						var _v0 = matchModel.E;
						if (_v0.$ === 5) {
							return $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType;
						} else {
							return $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType;
						}
					}()(
						$dillonkearns$elm_markdown$Markdown$InlineParser$prepareUrlAndTitle(urlTitle))
				});
		};
		var refLabel = function (str) {
			return $elm$core$String$isEmpty(str) ? matchModel.er : str;
		}(
			A2(
				$elm$core$Maybe$withDefault,
				matchModel.er,
				A2(
					$elm$core$Maybe$withDefault,
					$elm$core$Maybe$Nothing,
					A2(
						$elm$core$Maybe$withDefault,
						$elm$core$Maybe$Nothing,
						A2(
							$elm$core$Maybe$map,
							A2(
								$elm$core$Basics$composeR,
								function ($) {
									return $.bt;
								},
								$elm$core$List$head),
							maybeRegexMatch)))));
		var maybeRefItem = A2(
			$elm$core$Dict$get,
			$dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel(refLabel),
			model.bo);
		return A2($elm$core$Maybe$map, toMatch, maybeRefItem);
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$checkForRefLinkTypeOrImageType = function (_v0) {
	var remainText = _v0.a;
	var tempMatch = _v0.b;
	var model = _v0.c;
	return A2(
		$elm$core$Result$fromMaybe,
		_Utils_Tuple3(remainText, tempMatch, model),
		A2(
			$elm$core$Maybe$map,
			$dillonkearns$elm_markdown$Markdown$InlineParser$addMatch(model),
			A3(
				$dillonkearns$elm_markdown$Markdown$InlineParser$refRegexToMatch,
				tempMatch,
				model,
				$elm$core$List$head(
					A3($elm$regex$Regex$findAtMost, 1, $dillonkearns$elm_markdown$Markdown$InlineParser$refLabelRegex, remainText)))));
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping = function (parser) {
	var _v0 = parser.c;
	if (!_v0.b) {
		return $elm$core$Result$Err(0);
	} else {
		var match = _v0.a;
		var remainMatches = _v0.b;
		var overlappingMatches = A2(
			$elm$core$List$filter,
			function (_v1) {
				var testMatch = _v1;
				return (_Utils_cmp(match.k, testMatch.p) > 0) && (_Utils_cmp(match.k, testMatch.k) < 0);
			},
			remainMatches);
		return ($elm$core$List$isEmpty(remainMatches) || $elm$core$List$isEmpty(overlappingMatches)) ? $elm$core$Result$Ok(parser) : $elm$core$Result$Err(0);
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$emailRegex = A2(
	$elm$core$Maybe$withDefault,
	$elm$regex$Regex$never,
	$elm$regex$Regex$fromString('^([a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~\\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?)*)$'));
var $dillonkearns$elm_markdown$Markdown$InlineParser$emailAutolinkTypeToMatch = function (_v0) {
	var match = _v0;
	return A2($elm$regex$Regex$contains, $dillonkearns$elm_markdown$Markdown$InlineParser$emailRegex, match.er) ? $elm$core$Result$Ok(
		_Utils_update(
			match,
			{
				E: $dillonkearns$elm_markdown$Markdown$InlineParser$AutolinkType(
					_Utils_Tuple2(
						match.er,
						'mailto:' + $dillonkearns$elm_markdown$Markdown$InlineParser$encodeUrl(match.er)))
			})) : $elm$core$Result$Err(match);
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$filterTokens = F2(
	function (filter, model) {
		return _Utils_update(
			model,
			{
				i: A2($elm$core$List$filter, filter, model.i)
			});
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$findToken = F2(
	function (isToken, tokens) {
		var search = F2(
			function (token, _v2) {
				var maybeToken = _v2.a;
				var innerTokens = _v2.b;
				var remainTokens = _v2.c;
				if (maybeToken.$ === 1) {
					return isToken(token) ? _Utils_Tuple3(
						$elm$core$Maybe$Just(token),
						innerTokens,
						_List_Nil) : _Utils_Tuple3(
						$elm$core$Maybe$Nothing,
						A2($elm$core$List$cons, token, innerTokens),
						_List_Nil);
				} else {
					return _Utils_Tuple3(
						maybeToken,
						innerTokens,
						A2($elm$core$List$cons, token, remainTokens));
				}
			});
		var _return = function (_v0) {
			var maybeToken = _v0.a;
			var innerTokens = _v0.b;
			var remainTokens = _v0.c;
			return A2(
				$elm$core$Maybe$map,
				function (token) {
					return _Utils_Tuple3(
						token,
						$elm$core$List$reverse(innerTokens),
						$elm$core$List$reverse(remainTokens));
				},
				maybeToken);
		};
		return _return(
			A3(
				$elm$core$List$foldl,
				search,
				_Utils_Tuple3($elm$core$Maybe$Nothing, _List_Nil, _List_Nil),
				tokens));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$HtmlToken = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$log = F2(
	function (label, value) {
		return value;
	});
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 0:
					return list;
				case 1:
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0;
		var _v1 = parse(
			{bF: 1, f: _List_Nil, h: 1, b: 0, d2: 1, ck: src});
		if (!_v1.$) {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$htmlFromRegex = F2(
	function (model, match) {
		var consumedCharacters = A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						F3(
							function (startOffset, htmlTag, endOffset) {
								return {bS: htmlTag, d: endOffset - startOffset};
							})),
					$elm$parser$Parser$Advanced$getOffset),
				$dillonkearns$elm_markdown$HtmlParser$html),
			$elm$parser$Parser$Advanced$getOffset);
		var parsed = A2(
			$elm$parser$Parser$Advanced$run,
			consumedCharacters,
			A2(
				$dillonkearns$elm_markdown$Markdown$InlineParser$log,
				'dropped',
				A2(
					$elm$core$String$dropLeft,
					match.p,
					A2($dillonkearns$elm_markdown$Markdown$InlineParser$log, 'rawText', model.d$))));
		var _v0 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$log, 'match', match);
		if (!parsed.$) {
			var htmlTag = parsed.a.bS;
			var length = parsed.a.d;
			var htmlToken = A2($dillonkearns$elm_markdown$Markdown$InlineParser$HtmlToken, false, htmlTag);
			return $elm$core$Maybe$Just(
				A2(
					$dillonkearns$elm_markdown$Markdown$InlineParser$addToken,
					model,
					{a: match.p, d: length, g: htmlToken}));
		} else {
			var error = parsed.a;
			var _v2 = A2($dillonkearns$elm_markdown$Markdown$InlineParser$log, 'error', error);
			return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$htmlToToken = F2(
	function (model, _v0) {
		var match = _v0;
		return A2($dillonkearns$elm_markdown$Markdown$InlineParser$htmlFromRegex, model, match);
	});
var $dillonkearns$elm_markdown$Markdown$Helpers$ifError = F2(
	function (_function, result) {
		if (!result.$) {
			return result;
		} else {
			var err = result.a;
			return _function(err);
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isCloseToken = F2(
	function (htmlModel, token) {
		return false;
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isCodeTokenPair = F2(
	function (closeToken, openToken) {
		var _v0 = openToken.g;
		if (!_v0.$) {
			var isEscaped = _v0.a;
			return isEscaped ? _Utils_eq(openToken.d - 1, closeToken.d) : _Utils_eq(openToken.d, closeToken.d);
		} else {
			return false;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isLinkTypeOrImageOpenToken = function (token) {
	var _v0 = token.g;
	switch (_v0.$) {
		case 1:
			return true;
		case 2:
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken = F2(
	function (closeToken, openToken) {
		var _v0 = openToken.g;
		if (_v0.$ === 6) {
			var openChar = _v0.a;
			var _v1 = _v0.b;
			var openLR = _v1.a;
			var openRR = _v1.b;
			var _v2 = closeToken.g;
			if (_v2.$ === 6) {
				var closeChar = _v2.a;
				var _v3 = _v2.b;
				var closeLR = _v3.a;
				var closeRR = _v3.b;
				return _Utils_eq(openChar, closeChar) ? ((_Utils_eq(openLR, openRR) || _Utils_eq(closeLR, closeRR)) ? (!(!A2($elm$core$Basics$modBy, 3, closeToken.d + openToken.d))) : true) : false;
			} else {
				return false;
			}
		} else {
			return false;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$isVoidTag = function (htmlModel) {
	return false;
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakType = {$: 1};
var $dillonkearns$elm_markdown$Markdown$InlineParser$SoftLineBreakToken = {$: 7};
var $dillonkearns$elm_markdown$Markdown$InlineParser$reverseTokens = function (model) {
	return _Utils_update(
		model,
		{
			i: $elm$core$List$reverse(model.i)
		});
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch = F2(
	function (token, type_) {
		return {k: token.a + token.d, c: _List_Nil, p: token.a, er: '', aq: 0, L: 0, E: type_};
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$lineBreakTTM = function (_v0) {
	lineBreakTTM:
	while (true) {
		var tokens = _v0.a;
		var model = _v0.b;
		if (!tokens.b) {
			return $dillonkearns$elm_markdown$Markdown$InlineParser$reverseTokens(model);
		} else {
			var token = tokens.a;
			var tokensTail = tokens.b;
			if (_Utils_eq(token.g, $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakToken) || (_Utils_eq(token.g, $dillonkearns$elm_markdown$Markdown$InlineParser$SoftLineBreakToken) && $dillonkearns$elm_markdown$Markdown$InlineParser$softAsHardLineBreak)) {
				return $dillonkearns$elm_markdown$Markdown$InlineParser$lineBreakTTM(
					function (b) {
						return _Utils_Tuple2(tokensTail, b);
					}(
						_Utils_update(
							model,
							{
								c: A2(
									$elm$core$List$cons,
									A2($dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch, token, $dillonkearns$elm_markdown$Markdown$InlineParser$HardLineBreakType),
									model.c)
							})));
			} else {
				var $temp$_v0 = _Utils_Tuple2(
					tokensTail,
					A2($dillonkearns$elm_markdown$Markdown$InlineParser$addToken, model, token));
				_v0 = $temp$_v0;
				continue lineBreakTTM;
			}
		}
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens = F2(
	function (tokensTail, parser) {
		var _v0 = parser.c;
		if (!_v0.b) {
			return _Utils_Tuple2(tokensTail, parser);
		} else {
			var match = _v0.a;
			return _Utils_Tuple2(
				A2(
					$elm$core$List$filter,
					function (token) {
						return _Utils_cmp(token.a, match.k) > -1;
					},
					tokensTail),
				parser);
		}
	});
var $elm$core$Result$toMaybe = function (result) {
	if (!result.$) {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketsToMatch = F4(
	function (closeToken, isEscaped, model, _v24) {
		var openToken = _v24.a;
		var remainTokens = _v24.c;
		return function (result) {
			if (result.$ === 1) {
				var tempMatch = result.a;
				return (!isEscaped) ? A2(
					$dillonkearns$elm_markdown$Markdown$InlineParser$htmlToToken,
					_Utils_update(
						model,
						{i: remainTokens}),
					tempMatch) : $elm$core$Result$toMaybe(result);
			} else {
				return $elm$core$Result$toMaybe(result);
			}
		}(
			A2(
				$elm$core$Result$map,
				function (newMatch) {
					return _Utils_update(
						model,
						{
							c: A2($elm$core$List$cons, newMatch, model.c),
							i: remainTokens
						});
				},
				A2(
					$dillonkearns$elm_markdown$Markdown$Helpers$ifError,
					$dillonkearns$elm_markdown$Markdown$InlineParser$emailAutolinkTypeToMatch,
					$dillonkearns$elm_markdown$Markdown$InlineParser$autolinkToMatch(
						A6(
							$dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch,
							model,
							function (s) {
								return s;
							},
							$dillonkearns$elm_markdown$Markdown$InlineParser$CodeType,
							openToken,
							closeToken,
							_List_Nil)))));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM = function (_v21) {
	codeAutolinkTypeHtmlTagTTM:
	while (true) {
		var tokens = _v21.a;
		var model = _v21.b;
		if (!tokens.b) {
			return $dillonkearns$elm_markdown$Markdown$InlineParser$reverseTokens(model);
		} else {
			var token = tokens.a;
			var tokensTail = tokens.b;
			var _v23 = token.g;
			switch (_v23.$) {
				case 0:
					var isEscaped = _v23.a;
					return $dillonkearns$elm_markdown$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM(
						function (b) {
							return _Utils_Tuple2(tokensTail, b);
						}(
							A2(
								$elm$core$Maybe$withDefault,
								A2($dillonkearns$elm_markdown$Markdown$InlineParser$addToken, model, token),
								A2(
									$elm$core$Maybe$map,
									A2($dillonkearns$elm_markdown$Markdown$InlineParser$codeToMatch, token, model),
									A2(
										$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
										$dillonkearns$elm_markdown$Markdown$InlineParser$isCodeTokenPair(token),
										model.i)))));
				case 4:
					var isEscaped = _v23.a;
					return $dillonkearns$elm_markdown$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM(
						function (b) {
							return _Utils_Tuple2(tokensTail, b);
						}(
							A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$filterTokens,
								A2(
									$elm$core$Basics$composeR,
									function ($) {
										return $.g;
									},
									$elm$core$Basics$neq(
										$dillonkearns$elm_markdown$Markdown$InlineParser$CharToken('<'))),
								A2(
									$elm$core$Maybe$withDefault,
									model,
									A2(
										$elm$core$Maybe$andThen,
										A3($dillonkearns$elm_markdown$Markdown$InlineParser$angleBracketsToMatch, token, isEscaped, model),
										A2(
											$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
											A2(
												$elm$core$Basics$composeR,
												function ($) {
													return $.g;
												},
												$elm$core$Basics$eq(
													$dillonkearns$elm_markdown$Markdown$InlineParser$CharToken('<'))),
											model.i))))));
				default:
					var $temp$_v21 = _Utils_Tuple2(
						tokensTail,
						A2($dillonkearns$elm_markdown$Markdown$InlineParser$addToken, model, token));
					_v21 = $temp$_v21;
					continue codeAutolinkTypeHtmlTagTTM;
			}
		}
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$codeToMatch = F3(
	function (closeToken, model, _v20) {
		var openToken = _v20.a;
		var remainTokens = _v20.c;
		var updtOpenToken = _Utils_eq(
			openToken.g,
			$dillonkearns$elm_markdown$Markdown$InlineParser$CodeToken(true)) ? _Utils_update(
			openToken,
			{a: openToken.a + 1, d: openToken.d - 1}) : openToken;
		return _Utils_update(
			model,
			{
				c: A2(
					$elm$core$List$cons,
					A6($dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch, model, $dillonkearns$elm_markdown$Markdown$Helpers$cleanWhitespaces, $dillonkearns$elm_markdown$Markdown$InlineParser$CodeType, updtOpenToken, closeToken, _List_Nil),
					model.c),
				i: remainTokens
			});
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisTTM = function (_v16) {
	emphasisTTM:
	while (true) {
		var tokens = _v16.a;
		var model = _v16.b;
		if (!tokens.b) {
			return $dillonkearns$elm_markdown$Markdown$InlineParser$reverseTokens(model);
		} else {
			var token = tokens.a;
			var tokensTail = tokens.b;
			var _v18 = token.g;
			if (_v18.$ === 6) {
				var _char = _v18.a;
				var _v19 = _v18.b;
				var leftRank = _v19.a;
				var rightRank = _v19.b;
				if (_Utils_eq(leftRank, rightRank)) {
					if ((!(!rightRank)) && ((_char !== '_') || (rightRank === 1))) {
						return $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisTTM(
							A2(
								$elm$core$Maybe$withDefault,
								_Utils_Tuple2(
									tokensTail,
									A2($dillonkearns$elm_markdown$Markdown$InlineParser$addToken, model, token)),
								A2(
									$elm$core$Maybe$map,
									A3($dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch, token, tokensTail, model),
									A2(
										$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
										$dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken(token),
										model.i))));
					} else {
						var $temp$_v16 = _Utils_Tuple2(tokensTail, model);
						_v16 = $temp$_v16;
						continue emphasisTTM;
					}
				} else {
					if (_Utils_cmp(leftRank, rightRank) < 0) {
						var $temp$_v16 = _Utils_Tuple2(
							tokensTail,
							A2($dillonkearns$elm_markdown$Markdown$InlineParser$addToken, model, token));
						_v16 = $temp$_v16;
						continue emphasisTTM;
					} else {
						return $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisTTM(
							A2(
								$elm$core$Maybe$withDefault,
								_Utils_Tuple2(tokensTail, model),
								A2(
									$elm$core$Maybe$map,
									A3($dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch, token, tokensTail, model),
									A2(
										$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
										$dillonkearns$elm_markdown$Markdown$InlineParser$isOpenEmphasisToken(token),
										model.i))));
					}
				}
			} else {
				var $temp$_v16 = _Utils_Tuple2(
					tokensTail,
					A2($dillonkearns$elm_markdown$Markdown$InlineParser$addToken, model, token));
				_v16 = $temp$_v16;
				continue emphasisTTM;
			}
		}
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$emphasisToMatch = F4(
	function (closeToken, tokensTail, model, _v15) {
		var openToken = _v15.a;
		var innerTokens = _v15.b;
		var remainTokens = _v15.c;
		var remainLength = openToken.d - closeToken.d;
		var updt = (!remainLength) ? {aL: closeToken, ax: openToken, aW: remainTokens, a1: tokensTail} : ((remainLength > 0) ? {
			aL: closeToken,
			ax: _Utils_update(
				openToken,
				{a: openToken.a + remainLength, d: closeToken.d}),
			aW: A2(
				$elm$core$List$cons,
				_Utils_update(
					openToken,
					{d: remainLength}),
				remainTokens),
			a1: tokensTail
		} : {
			aL: _Utils_update(
				closeToken,
				{d: openToken.d}),
			ax: openToken,
			aW: remainTokens,
			a1: A2(
				$elm$core$List$cons,
				_Utils_update(
					closeToken,
					{a: closeToken.a + openToken.d, d: -remainLength}),
				tokensTail)
		});
		var match = A6(
			$dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch,
			model,
			function (s) {
				return s;
			},
			$dillonkearns$elm_markdown$Markdown$InlineParser$EmphasisType(updt.ax.d),
			updt.ax,
			updt.aL,
			$elm$core$List$reverse(innerTokens));
		return _Utils_Tuple2(
			updt.a1,
			_Utils_update(
				model,
				{
					c: A2($elm$core$List$cons, match, model.c),
					i: updt.aW
				}));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementTTM = function (_v12) {
	htmlElementTTM:
	while (true) {
		var tokens = _v12.a;
		var model = _v12.b;
		if (!tokens.b) {
			return $dillonkearns$elm_markdown$Markdown$InlineParser$reverseTokens(model);
		} else {
			var token = tokens.a;
			var tokensTail = tokens.b;
			var _v14 = token.g;
			if (_v14.$ === 5) {
				var isOpen = _v14.a;
				var htmlModel = _v14.b;
				return ($dillonkearns$elm_markdown$Markdown$InlineParser$isVoidTag(htmlModel) || (!isOpen)) ? $dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementTTM(
					function (b) {
						return _Utils_Tuple2(tokensTail, b);
					}(
						A2(
							$dillonkearns$elm_markdown$Markdown$InlineParser$addMatch,
							model,
							A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch,
								token,
								$dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType(htmlModel))))) : $dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementTTM(
					A2(
						$elm$core$Maybe$withDefault,
						function (b) {
							return _Utils_Tuple2(tokensTail, b);
						}(
							A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$addMatch,
								model,
								A2(
									$dillonkearns$elm_markdown$Markdown$InlineParser$tokenToMatch,
									token,
									$dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType(htmlModel)))),
						A2(
							$elm$core$Maybe$map,
							A3($dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementToMatch, token, model, htmlModel),
							A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$findToken,
								$dillonkearns$elm_markdown$Markdown$InlineParser$isCloseToken(htmlModel),
								tokensTail))));
			} else {
				var $temp$_v12 = _Utils_Tuple2(
					tokensTail,
					A2($dillonkearns$elm_markdown$Markdown$InlineParser$addToken, model, token));
				_v12 = $temp$_v12;
				continue htmlElementTTM;
			}
		}
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementToMatch = F4(
	function (openToken, model, htmlModel, _v11) {
		var closeToken = _v11.a;
		var innerTokens = _v11.b;
		var remainTokens = _v11.c;
		return _Utils_Tuple2(
			remainTokens,
			_Utils_update(
				model,
				{
					c: A2(
						$elm$core$List$cons,
						A6(
							$dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch,
							model,
							function (s) {
								return s;
							},
							$dillonkearns$elm_markdown$Markdown$InlineParser$HtmlType(htmlModel),
							openToken,
							closeToken,
							innerTokens),
						model.c)
				}));
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageTypeTTM = function (_v8) {
	linkImageTypeTTM:
	while (true) {
		var tokens = _v8.a;
		var model = _v8.b;
		if (!tokens.b) {
			return $dillonkearns$elm_markdown$Markdown$InlineParser$reverseTokens(model);
		} else {
			var token = tokens.a;
			var tokensTail = tokens.b;
			var _v10 = token.g;
			if ((_v10.$ === 3) && (']' === _v10.a)) {
				return $dillonkearns$elm_markdown$Markdown$InlineParser$linkImageTypeTTM(
					A2(
						$elm$core$Maybe$withDefault,
						_Utils_Tuple2(tokensTail, model),
						A2(
							$elm$core$Maybe$andThen,
							A3($dillonkearns$elm_markdown$Markdown$InlineParser$linkOrImageTypeToMatch, token, tokensTail, model),
							A2($dillonkearns$elm_markdown$Markdown$InlineParser$findToken, $dillonkearns$elm_markdown$Markdown$InlineParser$isLinkTypeOrImageOpenToken, model.i))));
			} else {
				var $temp$_v8 = _Utils_Tuple2(
					tokensTail,
					A2($dillonkearns$elm_markdown$Markdown$InlineParser$addToken, model, token));
				_v8 = $temp$_v8;
				continue linkImageTypeTTM;
			}
		}
	}
};
var $dillonkearns$elm_markdown$Markdown$InlineParser$linkOrImageTypeToMatch = F4(
	function (closeToken, tokensTail, model, _v1) {
		var openToken = _v1.a;
		var innerTokens = _v1.b;
		var remainTokens = _v1.c;
		var tempMatch = function (isLinkType) {
			return A6(
				$dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch,
				model,
				function (s) {
					return s;
				},
				isLinkType ? $dillonkearns$elm_markdown$Markdown$InlineParser$LinkType(
					_Utils_Tuple2('', $elm$core$Maybe$Nothing)) : $dillonkearns$elm_markdown$Markdown$InlineParser$ImageType(
					_Utils_Tuple2('', $elm$core$Maybe$Nothing)),
				openToken,
				closeToken,
				$elm$core$List$reverse(innerTokens));
		};
		var removeOpenToken = _Utils_Tuple2(
			tokensTail,
			_Utils_update(
				model,
				{
					i: _Utils_ap(innerTokens, remainTokens)
				}));
		var remainText = A2($elm$core$String$dropLeft, closeToken.a + 1, model.d$);
		var linkOpenTokenToInactive = function (model_) {
			var process = function (token) {
				var _v7 = token.g;
				if (_v7.$ === 1) {
					return _Utils_update(
						token,
						{
							g: $dillonkearns$elm_markdown$Markdown$InlineParser$LinkOpenToken(false)
						});
				} else {
					return token;
				}
			};
			return _Utils_update(
				model_,
				{
					i: A2($elm$core$List$map, process, model_.i)
				});
		};
		var args = function (isLinkType) {
			return _Utils_Tuple3(
				remainText,
				tempMatch(isLinkType),
				_Utils_update(
					model,
					{i: remainTokens}));
		};
		var _v2 = openToken.g;
		switch (_v2.$) {
			case 2:
				return $elm$core$Result$toMaybe(
					A2(
						$dillonkearns$elm_markdown$Markdown$Helpers$ifError,
						function (_v4) {
							return $elm$core$Result$Ok(removeOpenToken);
						},
						A2(
							$elm$core$Result$map,
							$dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens(tokensTail),
							A2(
								$elm$core$Result$andThen,
								$dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping,
								A2(
									$elm$core$Result$mapError,
									function (_v3) {
										return 0;
									},
									A2(
										$dillonkearns$elm_markdown$Markdown$Helpers$ifError,
										$dillonkearns$elm_markdown$Markdown$InlineParser$checkForRefLinkTypeOrImageType,
										$dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType(
											args(false))))))));
			case 1:
				if (_v2.a) {
					return $elm$core$Result$toMaybe(
						A2(
							$dillonkearns$elm_markdown$Markdown$Helpers$ifError,
							function (_v6) {
								return $elm$core$Result$Ok(removeOpenToken);
							},
							A2(
								$elm$core$Result$map,
								$dillonkearns$elm_markdown$Markdown$InlineParser$removeParsedAheadTokens(tokensTail),
								A2(
									$elm$core$Result$map,
									linkOpenTokenToInactive,
									A2(
										$elm$core$Result$andThen,
										$dillonkearns$elm_markdown$Markdown$InlineParser$checkParsedAheadOverlapping,
										A2(
											$elm$core$Result$mapError,
											function (_v5) {
												return 0;
											},
											A2(
												$dillonkearns$elm_markdown$Markdown$Helpers$ifError,
												$dillonkearns$elm_markdown$Markdown$InlineParser$checkForRefLinkTypeOrImageType,
												$dillonkearns$elm_markdown$Markdown$InlineParser$checkForInlineLinkTypeOrImageType(
													args(true)))))))));
				} else {
					return $elm$core$Maybe$Just(removeOpenToken);
				}
			default:
				return $elm$core$Maybe$Nothing;
		}
	});
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokenPairToMatch = F6(
	function (model, processText, type_, openToken, closeToken, innerTokens) {
		var textStart = openToken.a + openToken.d;
		var textEnd = closeToken.a;
		var start = openToken.a;
		var end = closeToken.a + closeToken.d;
		var match = {
			k: end,
			c: _List_Nil,
			p: start,
			er: processText(
				A3($elm$core$String$slice, textStart, textEnd, model.d$)),
			aq: textEnd,
			L: textStart,
			E: type_
		};
		var matches = A2(
			$elm$core$List$map,
			function (_v0) {
				var matchModel = _v0;
				return A2($dillonkearns$elm_markdown$Markdown$InlineParser$prepareChildMatch, match, matchModel);
			},
			$dillonkearns$elm_markdown$Markdown$InlineParser$cyclic$tokensToMatches()(
				_Utils_update(
					model,
					{c: _List_Nil, i: innerTokens})).c);
		return _Utils_update(
			match,
			{c: matches});
	});
function $dillonkearns$elm_markdown$Markdown$InlineParser$cyclic$tokensToMatches() {
	return A2(
		$elm$core$Basics$composeR,
		$dillonkearns$elm_markdown$Markdown$InlineParser$applyTTM($dillonkearns$elm_markdown$Markdown$InlineParser$codeAutolinkTypeHtmlTagTTM),
		A2(
			$elm$core$Basics$composeR,
			$dillonkearns$elm_markdown$Markdown$InlineParser$applyTTM($dillonkearns$elm_markdown$Markdown$InlineParser$htmlElementTTM),
			A2(
				$elm$core$Basics$composeR,
				$dillonkearns$elm_markdown$Markdown$InlineParser$applyTTM($dillonkearns$elm_markdown$Markdown$InlineParser$linkImageTypeTTM),
				A2(
					$elm$core$Basics$composeR,
					$dillonkearns$elm_markdown$Markdown$InlineParser$applyTTM($dillonkearns$elm_markdown$Markdown$InlineParser$emphasisTTM),
					$dillonkearns$elm_markdown$Markdown$InlineParser$applyTTM($dillonkearns$elm_markdown$Markdown$InlineParser$lineBreakTTM)))));
}
var $dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches = $dillonkearns$elm_markdown$Markdown$InlineParser$cyclic$tokensToMatches();
$dillonkearns$elm_markdown$Markdown$InlineParser$cyclic$tokensToMatches = function () {
	return $dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches;
};
var $elm$core$String$trim = _String_trim;
var $dillonkearns$elm_markdown$Markdown$InlineParser$parse = F2(
	function (refs, rawText) {
		return $dillonkearns$elm_markdown$Markdown$InlineParser$matchesToInlines(
			$dillonkearns$elm_markdown$Markdown$InlineParser$parseText(
				$dillonkearns$elm_markdown$Markdown$InlineParser$organizeParserMatches(
					$dillonkearns$elm_markdown$Markdown$InlineParser$tokensToMatches(
						$dillonkearns$elm_markdown$Markdown$InlineParser$tokenize(
							A2(
								$dillonkearns$elm_markdown$Markdown$InlineParser$initParser,
								refs,
								$elm$core$String$trim(rawText)))))).c);
	});
var $dillonkearns$elm_markdown$Markdown$Parser$endOfLineOrFile = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$chompUntilEndOr('\n'),
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'\n',
					$elm$parser$Parser$ExpectingSymbol('\\n'))),
				$elm$parser$Parser$Advanced$end(
				$elm$parser$Parser$Expecting('End of input'))
			])));
var $dillonkearns$elm_markdown$Markdown$Parser$thisIsDefinitelyNotAnHtmlTag = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$Advanced$token(
			A2(
				$elm$parser$Parser$Advanced$Token,
				' ',
				$elm$parser$Parser$Expecting(' '))),
			$elm$parser$Parser$Advanced$token(
			A2(
				$elm$parser$Parser$Advanced$Token,
				'>',
				$elm$parser$Parser$Expecting('>'))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$chompIf,
					$elm$core$Char$isAlpha,
					$elm$parser$Parser$Expecting('Alpha')),
				$elm$parser$Parser$Advanced$chompWhile(
					function (c) {
						return $elm$core$Char$isAlphaNum(c) || (c === '-');
					})),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							':',
							$elm$parser$Parser$Expecting(':'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'@',
							$elm$parser$Parser$Expecting('@'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'\\',
							$elm$parser$Parser$Expecting('\\'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'+',
							$elm$parser$Parser$Expecting('+'))),
						$elm$parser$Parser$Advanced$token(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'.',
							$elm$parser$Parser$Expecting('.')))
					])))
		]));
var $dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock = $elm$parser$Parser$Advanced$backtrackable(
	A2(
		$elm$parser$Parser$Advanced$map,
		function (rawLine) {
			return $dillonkearns$elm_markdown$Markdown$RawBlock$Body(rawLine);
		},
		$elm$parser$Parser$Advanced$getChompedString(
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(0),
						$elm$parser$Parser$Advanced$token(
							A2(
								$elm$parser$Parser$Advanced$Token,
								'<',
								$elm$parser$Parser$Expecting('<')))),
					$dillonkearns$elm_markdown$Markdown$Parser$thisIsDefinitelyNotAnHtmlTag),
				$dillonkearns$elm_markdown$Markdown$Parser$endOfLineOrFile))));
var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
var $elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var $elm$parser$Parser$Advanced$chompUntil = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$findSubString, str, s.b, s.d2, s.bF, s.ck);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A4($elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.f)) : A3(
			$elm$parser$Parser$Advanced$Good,
			_Utils_cmp(s.b, newOffset) < 0,
			0,
			{bF: newCol, f: s.f, h: s.h, b: newOffset, d2: newRow, ck: s.ck});
	};
};
var $dillonkearns$elm_markdown$Helpers$isEmptyString = function (string) {
	if (string === '') {
		return true;
	} else {
		return false;
	}
};
var $dillonkearns$elm_markdown$Markdown$CodeBlock$parserHelp = function (delimeter) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(
					F2(
						function (language, body) {
							return {
								cT: body,
								bY: $dillonkearns$elm_markdown$Helpers$isEmptyString(language) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(language)
							};
						})),
				$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						delimeter,
						$elm$parser$Parser$ExpectingSymbol(delimeter)))),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$getChompedString(
					$elm$parser$Parser$Advanced$chompUntil(
						A2(
							$elm$parser$Parser$Advanced$Token,
							'\n',
							$elm$parser$Parser$Problem('Expecting newline')))),
				$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						'\n',
						$elm$parser$Parser$ExpectingSymbol('\n'))))),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$getChompedString(
				$elm$parser$Parser$Advanced$chompUntilEndOr('\n' + delimeter)),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'\n' + delimeter,
					$elm$parser$Parser$ExpectingSymbol(delimeter)))));
};
var $dillonkearns$elm_markdown$Markdown$CodeBlock$parser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$dillonkearns$elm_markdown$Markdown$CodeBlock$parserHelp('```'),
			$dillonkearns$elm_markdown$Markdown$CodeBlock$parserHelp('~~~')
		]));
var $dillonkearns$elm_markdown$Helpers$isGfmWhitespace = function (_char) {
	switch (_char) {
		case ' ':
			return true;
		case '\n':
			return true;
		case '\t':
			return true;
		case '\u000B':
			return true;
		case '\u000C':
			return true;
		case '\u000D':
			return true;
		default:
			return false;
	}
};
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$destinationParser = A2(
	$elm$parser$Parser$Advanced$inContext,
	'link destination',
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$url$Url$percentEncode),
					$elm$parser$Parser$Advanced$token(
						$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$toToken('<'))),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$getChompedString(
						$elm$parser$Parser$Advanced$chompUntilEndOr('>')),
					$elm$parser$Parser$Advanced$token(
						$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$toToken('>')))),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						F2(
							function (first, second) {
								return _Utils_ap(first, second);
							})),
					$elm$parser$Parser$Advanced$getChompedString(
						A2(
							$elm$parser$Parser$Advanced$chompIf,
							function (c) {
								return !$dillonkearns$elm_markdown$Helpers$isGfmWhitespace(c);
							},
							$elm$parser$Parser$Expecting('non-whitespace character')))),
				$elm$parser$Parser$Advanced$getChompedString(
					$elm$parser$Parser$Advanced$chompWhile(
						function (c) {
							return !$dillonkearns$elm_markdown$Helpers$isGfmWhitespace(c);
						})))
			])));
var $dillonkearns$elm_markdown$LineEnding$CanHaveLineEnding = 0;
var $dillonkearns$elm_markdown$LineEnding$CannotHaveLineEnding = 1;
var $dillonkearns$elm_markdown$LineEnding$carriageReturn = '\u000D';
var $dillonkearns$elm_markdown$LineEnding$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $dillonkearns$elm_markdown$LineEnding$lineEnding = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			$elm$parser$Parser$Advanced$token(
			$dillonkearns$elm_markdown$LineEnding$toToken('\n')),
			$elm$parser$Parser$Advanced$token(
			$dillonkearns$elm_markdown$LineEnding$toToken($dillonkearns$elm_markdown$LineEnding$carriageReturn + '\n')),
			$elm$parser$Parser$Advanced$token(
			$dillonkearns$elm_markdown$LineEnding$toToken($dillonkearns$elm_markdown$LineEnding$carriageReturn))
		]));
var $dillonkearns$elm_markdown$LineEnding$statementsHelp = function (state) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$andThen,
				function (_v0) {
					if (!state) {
						return $elm$parser$Parser$Advanced$succeed(
							$elm$parser$Parser$Advanced$Loop(1));
					} else {
						return $elm$parser$Parser$Advanced$problem(
							$elm$parser$Parser$Problem('Can\'t have more than one line ending character.'));
					}
				},
				$dillonkearns$elm_markdown$LineEnding$lineEnding),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(
					$elm$parser$Parser$Advanced$Loop(state)),
				A2(
					$elm$parser$Parser$Advanced$chompIf,
					$dillonkearns$elm_markdown$Helpers$isGfmWhitespace,
					$elm$parser$Parser$Expecting('Whitespace'))),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(0))
			]));
};
var $dillonkearns$elm_markdown$LineEnding$optionalWhitespaceUpToOneLineEnding = A2($elm$parser$Parser$Advanced$loop, 0, $dillonkearns$elm_markdown$LineEnding$statementsHelp);
var $dillonkearns$elm_markdown$Helpers$requiredWhitespace = A2(
	$elm$parser$Parser$Advanced$ignorer,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$succeed(0),
		A2(
			$elm$parser$Parser$Advanced$chompIf,
			$dillonkearns$elm_markdown$Helpers$isGfmWhitespace,
			$elm$parser$Parser$Expecting('whitespace'))),
	$elm$parser$Parser$Advanced$chompWhile($dillonkearns$elm_markdown$Helpers$isGfmWhitespace));
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$titleParser = A2(
	$elm$parser$Parser$Advanced$inContext,
	'title',
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$dillonkearns$elm_markdown$Helpers$requiredWhitespace),
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Just),
								$elm$parser$Parser$Advanced$token(
									$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$toToken('\"'))),
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$getChompedString(
									$elm$parser$Parser$Advanced$chompUntilEndOr('\"')),
								$elm$parser$Parser$Advanced$token(
									$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$toToken('\"')))),
							A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Just),
								$elm$parser$Parser$Advanced$token(
									$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$toToken('\''))),
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$getChompedString(
									$elm$parser$Parser$Advanced$chompUntilEndOr('\'')),
								$elm$parser$Parser$Advanced$token(
									$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$toToken('\'')))),
							$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing)
						]))),
				$elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing)
			])));
var $dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$parser = A2(
	$elm$parser$Parser$Advanced$inContext,
	'link reference definition',
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						F3(
							function (label, destination, title) {
								return _Utils_Tuple2(
									$dillonkearns$elm_markdown$Markdown$Helpers$prepareRefLabel(label),
									{di: destination, eH: title});
							})),
					$elm$parser$Parser$Advanced$token(
						$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$toToken('['))),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$getChompedString(
							$elm$parser$Parser$Advanced$chompUntilEndOr(']')),
						$elm$parser$Parser$Advanced$token(
							$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$toToken(']:'))),
					$dillonkearns$elm_markdown$LineEnding$optionalWhitespaceUpToOneLineEnding)),
			$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$destinationParser),
		$dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$titleParser));
var $dillonkearns$elm_markdown$ThematicBreak$NoMatchYet = {$: 3};
var $dillonkearns$elm_markdown$ThematicBreak$Asterisk = function (a) {
	return {$: 0, a: a};
};
var $dillonkearns$elm_markdown$ThematicBreak$Dash = 1;
var $dillonkearns$elm_markdown$ThematicBreak$Finished = 3;
var $dillonkearns$elm_markdown$ThematicBreak$Hyphen = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$ThematicBreak$Star = 0;
var $dillonkearns$elm_markdown$ThematicBreak$TokenUnderscore = 2;
var $dillonkearns$elm_markdown$ThematicBreak$Underscore = function (a) {
	return {$: 2, a: a};
};
var $dillonkearns$elm_markdown$ThematicBreak$Whitespace = 4;
var $dillonkearns$elm_markdown$ThematicBreak$ThematicBreak = 0;
var $dillonkearns$elm_markdown$ThematicBreak$succeedIfEnough = function (occurences) {
	return (occurences > 2) ? $elm$parser$Parser$Advanced$succeed(
		$elm$parser$Parser$Advanced$Done(0)) : $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Expecting('...?'));
};
var $elm$core$Debug$toString = _Debug_toString;
var $dillonkearns$elm_markdown$Parser$Extra$tokenHelp = function (_char) {
	return $elm$parser$Parser$Advanced$token(
		A2(
			$elm$parser$Parser$Advanced$Token,
			_char,
			$elm$parser$Parser$Expecting(_char)));
};
var $dillonkearns$elm_markdown$ThematicBreak$statementsHelp = function (state) {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		function (thematicToken) {
			var _v6 = _Utils_Tuple2(thematicToken, state);
			_v6$11:
			while (true) {
				switch (_v6.a) {
					case 3:
						switch (_v6.b.$) {
							case 3:
								var _v7 = _v6.a;
								var _v8 = _v6.b;
								return $elm$parser$Parser$Advanced$problem(
									$elm$parser$Parser$Expecting('TODO'));
							case 0:
								var _v9 = _v6.a;
								var occurrences = _v6.b.a;
								return $dillonkearns$elm_markdown$ThematicBreak$succeedIfEnough(occurrences);
							case 1:
								var _v10 = _v6.a;
								var occurrences = _v6.b.a;
								return $dillonkearns$elm_markdown$ThematicBreak$succeedIfEnough(occurrences);
							default:
								var _v11 = _v6.a;
								var occurrences = _v6.b.a;
								return $dillonkearns$elm_markdown$ThematicBreak$succeedIfEnough(occurrences);
						}
					case 2:
						switch (_v6.b.$) {
							case 2:
								var _v14 = _v6.a;
								var occurrences = _v6.b.a;
								return $elm$parser$Parser$Advanced$succeed(
									$elm$parser$Parser$Advanced$Loop(
										$dillonkearns$elm_markdown$ThematicBreak$Underscore(occurrences + 1)));
							case 3:
								var _v15 = _v6.a;
								var _v16 = _v6.b;
								return $elm$parser$Parser$Advanced$succeed(
									$elm$parser$Parser$Advanced$Loop(
										$dillonkearns$elm_markdown$ThematicBreak$Underscore(1)));
							default:
								break _v6$11;
						}
					case 0:
						switch (_v6.b.$) {
							case 0:
								var _v12 = _v6.a;
								var occurrences = _v6.b.a;
								return $elm$parser$Parser$Advanced$succeed(
									$elm$parser$Parser$Advanced$Loop(
										$dillonkearns$elm_markdown$ThematicBreak$Asterisk(occurrences + 1)));
							case 3:
								var _v17 = _v6.a;
								var _v18 = _v6.b;
								return $elm$parser$Parser$Advanced$succeed(
									$elm$parser$Parser$Advanced$Loop(
										$dillonkearns$elm_markdown$ThematicBreak$Asterisk(1)));
							default:
								break _v6$11;
						}
					case 1:
						switch (_v6.b.$) {
							case 1:
								var _v13 = _v6.a;
								var occurrences = _v6.b.a;
								return $elm$parser$Parser$Advanced$succeed(
									$elm$parser$Parser$Advanced$Loop(
										$dillonkearns$elm_markdown$ThematicBreak$Hyphen(occurrences + 1)));
							case 3:
								var _v19 = _v6.a;
								var _v20 = _v6.b;
								return $elm$parser$Parser$Advanced$succeed(
									$elm$parser$Parser$Advanced$Loop(
										$dillonkearns$elm_markdown$ThematicBreak$Hyphen(1)));
							default:
								break _v6$11;
						}
					default:
						var _v21 = _v6.a;
						return $elm$parser$Parser$Advanced$succeed(
							$elm$parser$Parser$Advanced$Loop(state));
				}
			}
			return $elm$parser$Parser$Advanced$problem(
				$elm$parser$Parser$Expecting(
					$elm$core$Debug$toString(state)));
		},
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return 1;
					},
					$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('-')),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v1) {
						return 0;
					},
					$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('*')),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v2) {
						return 2;
					},
					$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('_')),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v3) {
						return 3;
					},
					$elm$parser$Parser$Advanced$end(
						$elm$parser$Parser$Expecting('end'))),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v4) {
						return 3;
					},
					$dillonkearns$elm_markdown$Parser$Extra$tokenHelp('\n')),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v5) {
						return 4;
					},
					A2(
						$elm$parser$Parser$Advanced$chompIf,
						function (c) {
							return c === ' ';
						},
						$elm$parser$Parser$Expecting('Space')))
				])));
};
var $dillonkearns$elm_markdown$ThematicBreak$parser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$Advanced$chompIf,
							function (c) {
								return c === ' ';
							},
							$elm$parser$Parser$Expecting('Space')),
							$elm$parser$Parser$Advanced$succeed(0)
						]))),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$chompIf,
						function (c) {
							return c === ' ';
						},
						$elm$parser$Parser$Expecting('Space')),
						$elm$parser$Parser$Advanced$succeed(0)
					]))),
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$chompIf,
					function (c) {
						return c === ' ';
					},
					$elm$parser$Parser$Expecting('Space')),
					$elm$parser$Parser$Advanced$succeed(0)
				]))),
	A2($elm$parser$Parser$Advanced$loop, $dillonkearns$elm_markdown$ThematicBreak$NoMatchYet, $dillonkearns$elm_markdown$ThematicBreak$statementsHelp));
var $dillonkearns$elm_markdown$Markdown$Parser$innerParagraphParser = $elm$parser$Parser$Advanced$getChompedString(
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(0),
			A2(
				$elm$parser$Parser$Advanced$chompIf,
				function (c) {
					return !$dillonkearns$elm_markdown$Helpers$isNewline(c);
				},
				$elm$parser$Parser$Expecting('Not newline.'))),
		$elm$parser$Parser$Advanced$chompUntilEndOr('\n')));
var $dillonkearns$elm_markdown$Markdown$Parser$plainLine = A2(
	$elm$parser$Parser$Advanced$keeper,
	$elm$parser$Parser$Advanced$succeed(
		function (rawLine) {
			return $dillonkearns$elm_markdown$Markdown$RawBlock$Body(rawLine);
		}),
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$dillonkearns$elm_markdown$Markdown$Parser$innerParagraphParser,
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$chompIf,
					$dillonkearns$elm_markdown$Helpers$isNewline,
					$elm$parser$Parser$Expecting('A single non-newline char.')),
					$elm$parser$Parser$Advanced$end(
					$elm$parser$Parser$Expecting('End'))
				]))));
var $dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock = function (a) {
	return {$: 3, a: a};
};
var $dillonkearns$elm_markdown$Markdown$UnorderedList$listMarkerParser = function () {
	var markerOption = function (marker) {
		return $elm$parser$Parser$Advanced$getChompedString(
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					marker,
					$elm$parser$Parser$ExpectingSymbol(marker))));
	};
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				markerOption('-'),
				markerOption('+'),
				markerOption('*')
			]));
}();
var $dillonkearns$elm_markdown$Markdown$ListItem$PlainItem = function (a) {
	return {$: 1, a: a};
};
var $dillonkearns$elm_markdown$Markdown$ListItem$TaskItem = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $dillonkearns$elm_markdown$Markdown$ListItem$Complete = 1;
var $dillonkearns$elm_markdown$Markdown$ListItem$Incomplete = 0;
var $dillonkearns$elm_markdown$Markdown$ListItem$taskItemParser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(1),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'[x] ',
					$elm$parser$Parser$ExpectingSymbol('[x] ')))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(1),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'[X] ',
					$elm$parser$Parser$ExpectingSymbol('[X] ')))),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(0),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'[ ] ',
					$elm$parser$Parser$ExpectingSymbol('[ ] '))))
		]));
var $dillonkearns$elm_markdown$Parser$Extra$zeroOrMore = function (condition) {
	return $elm$parser$Parser$Advanced$chompWhile(condition);
};
var $dillonkearns$elm_markdown$Markdown$ListItem$parser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$ListItem$TaskItem),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$dillonkearns$elm_markdown$Markdown$ListItem$taskItemParser,
					$dillonkearns$elm_markdown$Parser$Extra$zeroOrMore($dillonkearns$elm_markdown$Helpers$isSpacebar))),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$getChompedString(
					$elm$parser$Parser$Advanced$chompUntilEndOr('\n')),
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							$elm$parser$Parser$Advanced$symbol(
							A2(
								$elm$parser$Parser$Advanced$Token,
								'\n',
								$elm$parser$Parser$ExpectingSymbol('\\n'))),
							$elm$parser$Parser$Advanced$end(
							$elm$parser$Parser$Expecting('End of input'))
						])))),
			A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($dillonkearns$elm_markdown$Markdown$ListItem$PlainItem),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$getChompedString(
					$elm$parser$Parser$Advanced$chompUntilEndOr('\n')),
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							$elm$parser$Parser$Advanced$symbol(
							A2(
								$elm$parser$Parser$Advanced$Token,
								'\n',
								$elm$parser$Parser$ExpectingSymbol('\\n'))),
							$elm$parser$Parser$Advanced$end(
							$elm$parser$Parser$Expecting('End of input'))
						]))))
		]));
var $dillonkearns$elm_markdown$Markdown$UnorderedList$openingItemParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		$elm$parser$Parser$Advanced$succeed($elm$core$Tuple$pair),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$UnorderedList$listMarkerParser),
			$dillonkearns$elm_markdown$Parser$Extra$oneOrMore($dillonkearns$elm_markdown$Helpers$isSpacebar))),
	$dillonkearns$elm_markdown$Markdown$ListItem$parser);
var $dillonkearns$elm_markdown$Markdown$UnorderedList$itemBody = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$Advanced$backtrackable(
						$dillonkearns$elm_markdown$Parser$Extra$oneOrMore($dillonkearns$elm_markdown$Helpers$isSpacebar))),
				$elm$parser$Parser$Advanced$commit('')),
			$dillonkearns$elm_markdown$Markdown$ListItem$parser),
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed(
				$dillonkearns$elm_markdown$Markdown$ListItem$PlainItem('')),
			$elm$parser$Parser$Advanced$symbol(
				A2(
					$elm$parser$Parser$Advanced$Token,
					'\n',
					$elm$parser$Parser$ExpectingSymbol('\\n'))))
		]));
var $dillonkearns$elm_markdown$Markdown$UnorderedList$singleItemParser = function (listMarker) {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$Advanced$backtrackable(
				$elm$parser$Parser$Advanced$symbol(
					A2(
						$elm$parser$Parser$Advanced$Token,
						listMarker,
						$elm$parser$Parser$ExpectingSymbol(listMarker))))),
		$dillonkearns$elm_markdown$Markdown$UnorderedList$itemBody);
};
var $dillonkearns$elm_markdown$Markdown$UnorderedList$statementsHelp = F3(
	function (listMarker, firstItem, revStmts) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						function (stmt) {
							return $elm$parser$Parser$Advanced$Loop(
								A2($elm$core$List$cons, stmt, revStmts));
						}),
					$dillonkearns$elm_markdown$Markdown$UnorderedList$singleItemParser(listMarker)),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							A2(
								$elm$core$List$cons,
								firstItem,
								$elm$core$List$reverse(revStmts)));
					},
					$elm$parser$Parser$Advanced$succeed(0))
				]));
	});
var $dillonkearns$elm_markdown$Markdown$UnorderedList$parser = A2(
	$elm$parser$Parser$Advanced$andThen,
	function (_v0) {
		var listMarker = _v0.a;
		var firstItem = _v0.b;
		return A2(
			$elm$parser$Parser$Advanced$loop,
			_List_Nil,
			A2($dillonkearns$elm_markdown$Markdown$UnorderedList$statementsHelp, listMarker, firstItem));
	},
	$dillonkearns$elm_markdown$Markdown$UnorderedList$openingItemParser);
var $dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock = A2(
	$elm$parser$Parser$Advanced$map,
	$dillonkearns$elm_markdown$Markdown$RawBlock$UnorderedListBlock,
	A2(
		$elm$parser$Parser$Advanced$map,
		$elm$core$List$map(
			function (unparsedListItem) {
				if (!unparsedListItem.$) {
					var completion = unparsedListItem.a;
					var body = unparsedListItem.b;
					return {
						cT: body,
						bu: $elm$core$Maybe$Just(
							function () {
								if (completion === 1) {
									return true;
								} else {
									return false;
								}
							}())
					};
				} else {
					var body = unparsedListItem.a;
					return {cT: body, bu: $elm$core$Maybe$Nothing};
				}
			}),
		$dillonkearns$elm_markdown$Markdown$UnorderedList$parser));
var $dillonkearns$elm_markdown$Markdown$Parser$updateRawBlocks = F2(
	function (state, updatedRawBlocks) {
		return _Utils_update(
			state,
			{W: updatedRawBlocks});
	});
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (!result.$) {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$childToParser = function (node) {
	switch (node.$) {
		case 0:
			var tag = node.a;
			var attributes = node.b;
			var children = node.c;
			return A2(
				$elm$parser$Parser$Advanced$andThen,
				function (childrenAsBlocks) {
					return $elm$parser$Parser$Advanced$succeed(
						_List_fromArray(
							[
								$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
								A3($dillonkearns$elm_markdown$Markdown$Block$HtmlElement, tag, attributes, childrenAsBlocks))
							]));
				},
				$dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocksParser(children));
		case 1:
			var innerText = node.a;
			var _v24 = A2(
				$elm$parser$Parser$Advanced$run,
				$dillonkearns$elm_markdown$Markdown$Parser$cyclic$multiParser2(),
				innerText);
			if (!_v24.$) {
				var value = _v24.a;
				return $elm$parser$Parser$Advanced$succeed(value);
			} else {
				var error = _v24.a;
				return $elm$parser$Parser$Advanced$problem(
					$elm$parser$Parser$Expecting(
						A2(
							$elm$core$String$join,
							'\n',
							A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$deadEndToString, error))));
			}
		case 2:
			var string = node.a;
			return $elm$parser$Parser$Advanced$succeed(
				_List_fromArray(
					[
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
						$dillonkearns$elm_markdown$Markdown$Block$HtmlComment(string))
					]));
		case 3:
			var string = node.a;
			return $elm$parser$Parser$Advanced$succeed(
				_List_fromArray(
					[
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
						$dillonkearns$elm_markdown$Markdown$Block$Cdata(string))
					]));
		case 4:
			var string = node.a;
			return $elm$parser$Parser$Advanced$succeed(
				_List_fromArray(
					[
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
						$dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction(string))
					]));
		default:
			var declarationType = node.a;
			var content = node.b;
			return $elm$parser$Parser$Advanced$succeed(
				_List_fromArray(
					[
						$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
						A2($dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration, declarationType, content))
					]));
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$combineBlocks = F3(
	function (linkReferences, rawBlock, soFar) {
		return A2(
			$elm$parser$Parser$Advanced$andThen,
			function (parsedBlocks) {
				return A2(
					$elm$parser$Parser$Advanced$map,
					function (maybeNewParsedBlock) {
						if (!maybeNewParsedBlock.$) {
							var newParsedBlock = maybeNewParsedBlock.a;
							return A2($elm$core$List$cons, newParsedBlock, parsedBlocks);
						} else {
							return parsedBlocks;
						}
					},
					A2($dillonkearns$elm_markdown$Markdown$Parser$parseInlines, linkReferences, rawBlock));
			},
			soFar);
	});
var $dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper = F2(
	function (referencesDict, _v20) {
		var unparsedInlines = _v20;
		var referencesDict2 = $elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$mapSecond(
					function (_v21) {
						var destination = _v21.di;
						var title = _v21.eH;
						return _Utils_Tuple2(destination, title);
					}),
				referencesDict));
		return A2(
			$elm$core$List$map,
			$dillonkearns$elm_markdown$Markdown$Parser$mapInline,
			A2($dillonkearns$elm_markdown$Markdown$InlineParser$parse, referencesDict2, unparsedInlines));
	});
var $dillonkearns$elm_markdown$Markdown$Parser$mapInline = function (inline) {
	switch (inline.$) {
		case 0:
			var string = inline.a;
			return $dillonkearns$elm_markdown$Markdown$Block$Text(string);
		case 1:
			return $dillonkearns$elm_markdown$Markdown$Block$HardLineBreak;
		case 2:
			var string = inline.a;
			return $dillonkearns$elm_markdown$Markdown$Block$CodeSpan(string);
		case 3:
			var string = inline.a;
			var maybeString = inline.b;
			var inlines = inline.c;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Block$Link,
				string,
				maybeString,
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
		case 4:
			var string = inline.a;
			var maybeString = inline.b;
			var inlines = inline.c;
			return A3(
				$dillonkearns$elm_markdown$Markdown$Block$Image,
				string,
				maybeString,
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
		case 5:
			var node = inline.a;
			return $dillonkearns$elm_markdown$Markdown$Block$HtmlInline(
				$dillonkearns$elm_markdown$Markdown$Parser$nodeToRawBlock(node));
		default:
			var level = inline.a;
			var inlines = inline.b;
			switch (level) {
				case 1:
					return $dillonkearns$elm_markdown$Markdown$Block$Emphasis(
						A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
				case 2:
					return $dillonkearns$elm_markdown$Markdown$Block$Strong(
						A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
				default:
					return $dillonkearns$elm_markdown$Markdown$Block$Strong(
						A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$mapInline, inlines));
			}
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$nodeToRawBlock = function (node) {
	switch (node.$) {
		case 1:
			var innerText = node.a;
			return $dillonkearns$elm_markdown$Markdown$Block$HtmlComment('TODO this never happens, but use types to drop this case.');
		case 0:
			var tag = node.a;
			var attributes = node.b;
			var children = node.c;
			var parsedChildren = $elm$core$List$concat(
				A2(
					$elm$core$List$map,
					function (child) {
						if (child.$ === 1) {
							var text = child.a;
							return $dillonkearns$elm_markdown$Markdown$Parser$textNodeToBlocks(text);
						} else {
							return _List_fromArray(
								[
									$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(
									$dillonkearns$elm_markdown$Markdown$Parser$nodeToRawBlock(child))
								]);
						}
					},
					children));
			return A3($dillonkearns$elm_markdown$Markdown$Block$HtmlElement, tag, attributes, parsedChildren);
		case 2:
			var string = node.a;
			return $dillonkearns$elm_markdown$Markdown$Block$HtmlComment(string);
		case 3:
			var string = node.a;
			return $dillonkearns$elm_markdown$Markdown$Block$Cdata(string);
		case 4:
			var string = node.a;
			return $dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction(string);
		default:
			var declarationType = node.a;
			var content = node.b;
			return A2($dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration, declarationType, content);
	}
};
var $dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocksParser = function (children) {
	return A2(
		$elm$parser$Parser$Advanced$map,
		$elm$core$List$concat,
		$dillonkearns$elm_markdown$Markdown$Parser$combine(
			A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$childToParser, children)));
};
var $dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines = function (state) {
	return A3(
		$elm$core$List$foldl,
		$dillonkearns$elm_markdown$Markdown$Parser$combineBlocks(state.aw),
		$elm$parser$Parser$Advanced$succeed(_List_Nil),
		state.W);
};
var $dillonkearns$elm_markdown$Markdown$Parser$parseInlines = F2(
	function (linkReferences, rawBlock) {
		switch (rawBlock.$) {
			case 0:
				var level = rawBlock.a;
				var unparsedInlines = rawBlock.b;
				return A2(
					$elm$parser$Parser$Advanced$andThen,
					function (parsedLevel) {
						return function (styledLine) {
							return $dillonkearns$elm_markdown$Markdown$Parser$just(
								A2($dillonkearns$elm_markdown$Markdown$Block$Heading, parsedLevel, styledLine));
						}(
							A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, unparsedInlines));
					},
					$dillonkearns$elm_markdown$Markdown$Parser$levelParser(level));
			case 1:
				var unparsedInlines = rawBlock.a;
				return function (styledLine) {
					return $dillonkearns$elm_markdown$Markdown$Parser$just(
						$dillonkearns$elm_markdown$Markdown$Block$Paragraph(styledLine));
				}(
					A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, unparsedInlines));
			case 2:
				var html = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$just(
					$dillonkearns$elm_markdown$Markdown$Block$HtmlBlock(html));
			case 3:
				var unparsedItems = rawBlock.a;
				return A2(
					$elm$parser$Parser$Advanced$map,
					$elm$core$Maybe$Just,
					A2(
						$elm$parser$Parser$Advanced$map,
						$dillonkearns$elm_markdown$Markdown$Block$UnorderedList,
						$dillonkearns$elm_markdown$Markdown$Parser$combine(
							A2(
								$elm$core$List$map,
								function (unparsedItem) {
									return A2(
										$elm$parser$Parser$Advanced$map,
										function (parsedInlines) {
											var task = function () {
												var _v11 = unparsedItem.bu;
												if (!_v11.$) {
													if (!_v11.a) {
														return 1;
													} else {
														return 2;
													}
												} else {
													return 0;
												}
											}();
											return A2($dillonkearns$elm_markdown$Markdown$Block$ListItem, task, parsedInlines);
										},
										A3($dillonkearns$elm_markdown$Markdown$Parser$parseRawInline, linkReferences, $elm$core$Basics$identity, unparsedItem.cT));
								},
								unparsedItems))));
			case 4:
				var startingIndex = rawBlock.a;
				var unparsedInlines = rawBlock.b;
				return A2(
					$elm$parser$Parser$Advanced$map,
					$elm$core$Maybe$Just,
					A2(
						$elm$parser$Parser$Advanced$map,
						$dillonkearns$elm_markdown$Markdown$Block$OrderedList(startingIndex),
						$dillonkearns$elm_markdown$Markdown$Parser$combine(
							A2(
								$elm$core$List$map,
								A2($dillonkearns$elm_markdown$Markdown$Parser$parseRawInline, linkReferences, $elm$core$Basics$identity),
								unparsedInlines))));
			case 5:
				var codeBlock = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$just(
					$dillonkearns$elm_markdown$Markdown$Block$CodeBlock(codeBlock));
			case 7:
				return $dillonkearns$elm_markdown$Markdown$Parser$just($dillonkearns$elm_markdown$Markdown$Block$ThematicBreak);
			case 9:
				return $elm$parser$Parser$Advanced$succeed($elm$core$Maybe$Nothing);
			case 10:
				var rawBlocks = rawBlock.a;
				var _v12 = A2(
					$elm$parser$Parser$Advanced$run,
					$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
					rawBlocks);
				if (!_v12.$) {
					var value = _v12.a;
					return A2(
						$elm$parser$Parser$Advanced$map,
						function (parsedBlocks) {
							return $elm$core$Maybe$Just(
								$dillonkearns$elm_markdown$Markdown$Block$BlockQuote(parsedBlocks));
						},
						$dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines(value));
				} else {
					var error = _v12.a;
					return $elm$parser$Parser$Advanced$problem(
						$elm$parser$Parser$Problem(
							$dillonkearns$elm_markdown$Markdown$Parser$deadEndsToString(error)));
				}
			case 6:
				var codeBlockBody = rawBlock.a;
				return $dillonkearns$elm_markdown$Markdown$Parser$just(
					$dillonkearns$elm_markdown$Markdown$Block$CodeBlock(
						{cT: codeBlockBody, bY: $elm$core$Maybe$Nothing}));
			default:
				var _v13 = rawBlock.a;
				var header = _v13.a;
				var rows = _v13.b;
				var parsedHeader = $dillonkearns$elm_markdown$Markdown$Parser$combine(
					A2(
						$elm$core$List$map,
						function (_v14) {
							var label = _v14.bX;
							var alignment = _v14.aH;
							return A3(
								$dillonkearns$elm_markdown$Markdown$Parser$parseRawInline,
								linkReferences,
								function (parsedHeaderLabel) {
									return {aH: alignment, bX: parsedHeaderLabel};
								},
								label);
						},
						header));
				return A2(
					$elm$parser$Parser$Advanced$andThen,
					function (headerThing) {
						return $dillonkearns$elm_markdown$Markdown$Parser$just(
							A2($dillonkearns$elm_markdown$Markdown$Block$Table, headerThing, _List_Nil));
					},
					parsedHeader);
		}
	});
var $dillonkearns$elm_markdown$Markdown$Parser$parseRawInline = F3(
	function (linkReferences, wrap, unparsedInlines) {
		return $elm$parser$Parser$Advanced$succeed(
			function (styledLine) {
				return wrap(styledLine);
			}(
				A2($dillonkearns$elm_markdown$Markdown$Parser$inlineParseHelper, linkReferences, unparsedInlines)));
	});
var $dillonkearns$elm_markdown$Markdown$Parser$statementsHelp2 = function (revStmts) {
	var keepLooping = function (parser) {
		return A2(
			$elm$parser$Parser$Advanced$map,
			function (newRawBlock) {
				var _v4 = _Utils_Tuple2(newRawBlock, revStmts.W);
				_v4$5:
				while (true) {
					if (_v4.b.b) {
						switch (_v4.a.$) {
							case 5:
								if (_v4.b.a.$ === 5) {
									var block1 = _v4.a.a;
									var _v5 = _v4.b;
									var block2 = _v5.a.a;
									var rest = _v5.b;
									return $elm$parser$Parser$Advanced$Loop(
										A2(
											$dillonkearns$elm_markdown$Markdown$Parser$updateRawBlocks,
											revStmts,
											A2(
												$elm$core$List$cons,
												$dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock(
													{
														cT: A2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll, block2.cT, block1.cT),
														bY: $elm$core$Maybe$Nothing
													}),
												rest)));
								} else {
									break _v4$5;
								}
							case 6:
								if (_v4.b.a.$ === 6) {
									var block1 = _v4.a.a;
									var _v6 = _v4.b;
									var block2 = _v6.a.a;
									var rest = _v6.b;
									return $elm$parser$Parser$Advanced$Loop(
										A2(
											$dillonkearns$elm_markdown$Markdown$Parser$updateRawBlocks,
											revStmts,
											A2(
												$elm$core$List$cons,
												$dillonkearns$elm_markdown$Markdown$RawBlock$IndentedCodeBlock(
													A2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll, block2, block1)),
												rest)));
								} else {
									break _v4$5;
								}
							case 10:
								if (_v4.b.a.$ === 10) {
									var body1 = _v4.a.a;
									var _v8 = _v4.b;
									var body2 = _v8.a.a;
									var rest = _v8.b;
									return $elm$parser$Parser$Advanced$Loop(
										A2(
											$dillonkearns$elm_markdown$Markdown$Parser$updateRawBlocks,
											revStmts,
											A2(
												$elm$core$List$cons,
												$dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote(
													A2($dillonkearns$elm_markdown$Markdown$Parser$joinStringsPreserveAll, body2, body1)),
												rest)));
								} else {
									break _v4$5;
								}
							case 1:
								switch (_v4.b.a.$) {
									case 10:
										var body1 = _v4.a.a;
										var _v7 = _v4.b;
										var body2 = _v7.a.a;
										var rest = _v7.b;
										return $elm$parser$Parser$Advanced$Loop(
											A2(
												$dillonkearns$elm_markdown$Markdown$Parser$updateRawBlocks,
												revStmts,
												A2(
													$elm$core$List$cons,
													$dillonkearns$elm_markdown$Markdown$RawBlock$BlockQuote(
														A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\n', body2, body1)),
													rest)));
									case 1:
										var body1 = _v4.a.a;
										var _v9 = _v4.b;
										var body2 = _v9.a.a;
										var rest = _v9.b;
										return $elm$parser$Parser$Advanced$Loop(
											A2(
												$dillonkearns$elm_markdown$Markdown$Parser$updateRawBlocks,
												revStmts,
												A2(
													$elm$core$List$cons,
													$dillonkearns$elm_markdown$Markdown$RawBlock$Body(
														A3($dillonkearns$elm_markdown$Markdown$Parser$joinRawStringsWith, '\n', body2, body1)),
													rest)));
									default:
										break _v4$5;
								}
							default:
								break _v4$5;
						}
					} else {
						break _v4$5;
					}
				}
				return $elm$parser$Parser$Advanced$Loop(
					A2(
						$dillonkearns$elm_markdown$Markdown$Parser$updateRawBlocks,
						revStmts,
						A2($elm$core$List$cons, newRawBlock, revStmts.W)));
			},
			parser);
	};
	var indentedCodeParser = function () {
		var _v3 = revStmts.W;
		if (_v3.b && (_v3.a.$ === 1)) {
			return $elm$parser$Parser$Advanced$oneOf(_List_Nil);
		} else {
			return keepLooping($dillonkearns$elm_markdown$Markdown$Parser$indentedCodeBlock);
		}
	}();
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$map,
				function (_v1) {
					return $elm$parser$Parser$Advanced$Done(revStmts);
				},
				$elm$parser$Parser$Advanced$end(
					$elm$parser$Parser$Expecting('End'))),
				keepLooping($dillonkearns$elm_markdown$Markdown$Parser$parseAsParagraphInsteadOfHtmlBlock),
				A2(
				$elm$parser$Parser$Advanced$map,
				function (linkReference) {
					return $elm$parser$Parser$Advanced$Loop(
						A2($dillonkearns$elm_markdown$Markdown$Parser$addReference, revStmts, linkReference));
				},
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$LinkReferenceDefinition$parser)),
				keepLooping($dillonkearns$elm_markdown$Markdown$Parser$blankLine),
				keepLooping($dillonkearns$elm_markdown$Markdown$Parser$blockQuote),
				keepLooping(
				A2(
					$elm$parser$Parser$Advanced$map,
					$dillonkearns$elm_markdown$Markdown$RawBlock$CodeBlock,
					$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$CodeBlock$parser))),
				indentedCodeParser,
				keepLooping(
				A2(
					$elm$parser$Parser$Advanced$map,
					function (_v2) {
						return $dillonkearns$elm_markdown$Markdown$RawBlock$ThematicBreak;
					},
					$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$ThematicBreak$parser))),
				keepLooping($dillonkearns$elm_markdown$Markdown$Parser$unorderedListBlock),
				keepLooping(
				$dillonkearns$elm_markdown$Markdown$Parser$orderedListBlock(
					$elm$core$List$head(revStmts.W))),
				keepLooping(
				$elm$parser$Parser$Advanced$backtrackable($dillonkearns$elm_markdown$Markdown$Parser$heading)),
				keepLooping(
				$dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser()),
				keepLooping($dillonkearns$elm_markdown$Markdown$Parser$plainLine)
			]));
};
var $dillonkearns$elm_markdown$Markdown$Parser$textNodeToBlocks = function (textNodeValue) {
	return A2(
		$elm$core$Result$withDefault,
		_List_Nil,
		A2(
			$elm$parser$Parser$Advanced$run,
			$dillonkearns$elm_markdown$Markdown$Parser$cyclic$multiParser2(),
			textNodeValue));
};
var $dillonkearns$elm_markdown$Markdown$Parser$xmlNodeToHtmlNode = function (parser) {
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		function (xmlNode) {
			switch (xmlNode.$) {
				case 1:
					var innerText = xmlNode.a;
					return $elm$parser$Parser$Advanced$succeed(
						$dillonkearns$elm_markdown$Markdown$RawBlock$Body(innerText));
				case 0:
					var tag = xmlNode.a;
					var attributes = xmlNode.b;
					var children = xmlNode.c;
					return A2(
						$elm$parser$Parser$Advanced$andThen,
						function (parsedChildren) {
							return $elm$parser$Parser$Advanced$succeed(
								$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
									A3($dillonkearns$elm_markdown$Markdown$Block$HtmlElement, tag, attributes, parsedChildren)));
						},
						$dillonkearns$elm_markdown$Markdown$Parser$nodesToBlocksParser(children));
				case 2:
					var string = xmlNode.a;
					return $elm$parser$Parser$Advanced$succeed(
						$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
							$dillonkearns$elm_markdown$Markdown$Block$HtmlComment(string)));
				case 3:
					var string = xmlNode.a;
					return $elm$parser$Parser$Advanced$succeed(
						$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
							$dillonkearns$elm_markdown$Markdown$Block$Cdata(string)));
				case 4:
					var string = xmlNode.a;
					return $elm$parser$Parser$Advanced$succeed(
						$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
							$dillonkearns$elm_markdown$Markdown$Block$ProcessingInstruction(string)));
				default:
					var declarationType = xmlNode.a;
					var content = xmlNode.b;
					return $elm$parser$Parser$Advanced$succeed(
						$dillonkearns$elm_markdown$Markdown$RawBlock$Html(
							A2($dillonkearns$elm_markdown$Markdown$Block$HtmlDeclaration, declarationType, content)));
			}
		},
		parser);
};
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser() {
	return $dillonkearns$elm_markdown$Markdown$Parser$xmlNodeToHtmlNode($dillonkearns$elm_markdown$HtmlParser$html);
}
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$multiParser2() {
	return A2(
		$elm$parser$Parser$Advanced$map,
		$elm$core$List$filter(
			function (item) {
				if ((item.$ === 5) && (!item.a.b)) {
					return false;
				} else {
					return true;
				}
			}),
		A2(
			$elm$parser$Parser$Advanced$andThen,
			$dillonkearns$elm_markdown$Markdown$Parser$parseAllInlines,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser(),
				$elm$parser$Parser$Advanced$succeed($elm$parser$Parser$Advanced$end))));
}
function $dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser() {
	return A2(
		$elm$parser$Parser$Advanced$loop,
		{aw: _List_Nil, W: _List_Nil},
		$dillonkearns$elm_markdown$Markdown$Parser$statementsHelp2);
}
var $dillonkearns$elm_markdown$Markdown$Parser$htmlParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser();
$dillonkearns$elm_markdown$Markdown$Parser$cyclic$htmlParser = function () {
	return $dillonkearns$elm_markdown$Markdown$Parser$htmlParser;
};
var $dillonkearns$elm_markdown$Markdown$Parser$multiParser2 = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$multiParser2();
$dillonkearns$elm_markdown$Markdown$Parser$cyclic$multiParser2 = function () {
	return $dillonkearns$elm_markdown$Markdown$Parser$multiParser2;
};
var $dillonkearns$elm_markdown$Markdown$Parser$rawBlockParser = $dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser();
$dillonkearns$elm_markdown$Markdown$Parser$cyclic$rawBlockParser = function () {
	return $dillonkearns$elm_markdown$Markdown$Parser$rawBlockParser;
};
var $dillonkearns$elm_markdown$Markdown$Parser$parse = function (input) {
	return A2($elm$parser$Parser$Advanced$run, $dillonkearns$elm_markdown$Markdown$Parser$multiParser2, input);
};
var $elm$core$Result$map2 = F3(
	function (func, ra, rb) {
		if (ra.$ === 1) {
			var x = ra.a;
			return $elm$core$Result$Err(x);
		} else {
			var a = ra.a;
			if (rb.$ === 1) {
				var x = rb.a;
				return $elm$core$Result$Err(x);
			} else {
				var b = rb.a;
				return $elm$core$Result$Ok(
					A2(func, a, b));
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$combineResults = A2(
	$elm$core$List$foldr,
	$elm$core$Result$map2($elm$core$List$cons),
	$elm$core$Result$Ok(_List_Nil));
var $dillonkearns$elm_markdown$Markdown$Block$foldl = F3(
	function (_function, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var block = list.a;
				var remainingBlocks = list.b;
				switch (block.$) {
					case 0:
						var html = block.a;
						if (!html.$) {
							var children = html.c;
							var $temp$function = _function,
								$temp$acc = A2(_function, block, acc),
								$temp$list = _Utils_ap(children, remainingBlocks);
							_function = $temp$function;
							acc = $temp$acc;
							list = $temp$list;
							continue foldl;
						} else {
							var $temp$function = _function,
								$temp$acc = A2(_function, block, acc),
								$temp$list = remainingBlocks;
							_function = $temp$function;
							acc = $temp$acc;
							list = $temp$list;
							continue foldl;
						}
					case 1:
						var listItems = block.a;
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 2:
						var _int = block.a;
						var lists = block.b;
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 3:
						var blocks = block.a;
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = _Utils_ap(blocks, remainingBlocks);
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 4:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 5:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 6:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					case 7:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
					default:
						var $temp$function = _function,
							$temp$acc = A2(_function, block, acc),
							$temp$list = remainingBlocks;
						_function = $temp$function;
						acc = $temp$acc;
						list = $temp$list;
						continue foldl;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText = function (block) {
	switch (block.$) {
		case 5:
			var inlines = block.a;
			return $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines);
		case 0:
			var html = block.a;
			if (!html.$) {
				var blocks = html.c;
				return A3(
					$dillonkearns$elm_markdown$Markdown$Block$foldl,
					F2(
						function (nestedBlock, soFar) {
							return _Utils_ap(
								soFar,
								$dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText(nestedBlock));
						}),
					'',
					blocks);
			} else {
				return '';
			}
		case 1:
			var items = block.a;
			return A2(
				$elm$core$String$join,
				'\n',
				A2(
					$elm$core$List$map,
					function (_v4) {
						var task = _v4.a;
						var inlines = _v4.b;
						return $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines);
					},
					items));
		case 2:
			var _int = block.a;
			var items = block.b;
			return A2(
				$elm$core$String$join,
				'\n',
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Block$extractInlineText, items));
		case 3:
			var blocks = block.a;
			return A2(
				$elm$core$String$join,
				'\n',
				A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText, blocks));
		case 4:
			var headingLevel = block.a;
			var inlines = block.b;
			return $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines);
		case 6:
			var header = block.a;
			var rows = block.b;
			return A2(
				$elm$core$String$join,
				'\n',
				$elm$core$List$concat(
					_List_fromArray(
						[
							A2(
							$elm$core$List$map,
							$dillonkearns$elm_markdown$Markdown$Block$extractInlineText,
							A2(
								$elm$core$List$map,
								function ($) {
									return $.bX;
								},
								header)),
							A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Block$extractInlineText, rows)
						])));
		case 7:
			var body = block.a.cT;
			return body;
		default:
			return '';
	}
};
var $dillonkearns$elm_markdown$Markdown$Block$extractInlineText = function (inlines) {
	return A3($elm$core$List$foldl, $dillonkearns$elm_markdown$Markdown$Block$extractTextHelp, '', inlines);
};
var $dillonkearns$elm_markdown$Markdown$Block$extractTextHelp = F2(
	function (inline, text) {
		switch (inline.$) {
			case 6:
				var str = inline.a;
				return _Utils_ap(text, str);
			case 7:
				return text + ' ';
			case 5:
				var str = inline.a;
				return _Utils_ap(text, str);
			case 1:
				var inlines = inline.c;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
			case 2:
				var inlines = inline.c;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
			case 0:
				var html = inline.a;
				if (!html.$) {
					var blocks = html.c;
					return A3(
						$dillonkearns$elm_markdown$Markdown$Block$foldl,
						F2(
							function (block, soFar) {
								return _Utils_ap(
									soFar,
									$dillonkearns$elm_markdown$Markdown$Block$extractInlineBlockText(block));
							}),
						text,
						blocks);
				} else {
					return text;
				}
			case 4:
				var inlines = inline.a;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
			default:
				var inlines = inline.a;
				return _Utils_ap(
					text,
					$dillonkearns$elm_markdown$Markdown$Block$extractInlineText(inlines));
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHtml = F5(
	function (tagName, attributes, children, _v0, renderedChildren) {
		var htmlRenderer = _v0;
		return A2(
			$elm$core$Result$andThen,
			function (okChildren) {
				return A2(
					$elm$core$Result$map,
					function (myRenderer) {
						return myRenderer(okChildren);
					},
					A3(htmlRenderer, tagName, attributes, children));
			},
			$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(renderedChildren));
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$foldThing = F3(
	function (renderer, topLevelInline, soFar) {
		var _v7 = A2($dillonkearns$elm_markdown$Markdown$Renderer$renderSingleInline, renderer, topLevelInline);
		if (!_v7.$) {
			var inline = _v7.a;
			return A2($elm$core$List$cons, inline, soFar);
		} else {
			return soFar;
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHelper = F2(
	function (renderer, blocks) {
		return A2(
			$elm$core$List$filterMap,
			$dillonkearns$elm_markdown$Markdown$Renderer$renderHelperSingle(renderer),
			blocks);
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHelperSingle = function (renderer) {
	return function (block) {
		switch (block.$) {
			case 4:
				var level = block.a;
				var content = block.b;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						function (children) {
							return renderer.ds(
								{
									c3: children,
									dJ: level,
									d$: $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(content)
								});
						},
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, content)));
			case 5:
				var content = block.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.dX,
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, content)));
			case 0:
				var html = block.a;
				if (!html.$) {
					var tag = html.a;
					var attributes = html.b;
					var children = html.c;
					return $elm$core$Maybe$Just(
						A4($dillonkearns$elm_markdown$Markdown$Renderer$renderHtmlNode, renderer, tag, attributes, children));
				} else {
					return $elm$core$Maybe$Nothing;
				}
			case 1:
				var items = block.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.eL,
						$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
							A2(
								$elm$core$List$map,
								function (_v4) {
									var task = _v4.a;
									var children = _v4.b;
									return A2(
										$elm$core$Result$map,
										function (renderedBody) {
											return A2($dillonkearns$elm_markdown$Markdown$Block$ListItem, task, renderedBody);
										},
										A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, children));
								},
								items))));
			case 2:
				var startingIndex = block.a;
				var items = block.b;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.dV(startingIndex),
						$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
							A2(
								$elm$core$List$map,
								$dillonkearns$elm_markdown$Markdown$Renderer$renderStyled(renderer),
								items))));
			case 7:
				var codeBlock = block.a;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.c7(codeBlock)));
			case 8:
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(renderer.eF));
			case 3:
				var nestedBlocks = block.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.cS,
						$dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
							A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelper, renderer, nestedBlocks))));
			default:
				var header = block.a;
				var rows = block.b;
				var renderedHeaderCells = $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
					A2(
						$elm$core$List$map,
						function (_v6) {
							var label = _v6.bX;
							var alignment = _v6.aH;
							return A2(
								$elm$core$Result$map,
								$elm$core$Tuple$pair(alignment),
								A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, label));
						},
						header));
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						function (h) {
							return renderer.el(
								_List_fromArray(
									[h]));
						},
						A2(
							$elm$core$Result$map,
							function (listListView) {
								return renderer.eo(
									A2(
										$elm$core$List$map,
										function (_v5) {
											var maybeAlignment = _v5.a;
											var item = _v5.b;
											return A2(renderer.ep, maybeAlignment, item);
										},
										listListView));
							},
							renderedHeaderCells)));
		}
	};
};
var $dillonkearns$elm_markdown$Markdown$Renderer$renderHtmlNode = F4(
	function (renderer, tag, attributes, children) {
		return A5(
			$dillonkearns$elm_markdown$Markdown$Renderer$renderHtml,
			tag,
			attributes,
			children,
			renderer.dv,
			A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelper, renderer, children));
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderSingleInline = F2(
	function (renderer, inline) {
		switch (inline.$) {
			case 4:
				var innerInlines = inline.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.ei,
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, innerInlines)));
			case 3:
				var innerInlines = inline.a;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$map,
						renderer.dl,
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, innerInlines)));
			case 2:
				var src = inline.a;
				var title = inline.b;
				var children = inline.c;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.dx(
							{
								cK: $dillonkearns$elm_markdown$Markdown$Block$extractInlineText(children),
								ck: src,
								eH: title
							})));
			case 6:
				var string = inline.a;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.er(string)));
			case 5:
				var string = inline.a;
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(
						renderer.c8(string)));
			case 1:
				var destination = inline.a;
				var title = inline.b;
				var inlines = inline.c;
				return $elm$core$Maybe$Just(
					A2(
						$elm$core$Result$andThen,
						function (children) {
							return $elm$core$Result$Ok(
								A2(
									renderer.dK,
									{di: destination, eH: title},
									children));
						},
						A2($dillonkearns$elm_markdown$Markdown$Renderer$renderStyled, renderer, inlines)));
			case 7:
				return $elm$core$Maybe$Just(
					$elm$core$Result$Ok(renderer.dr));
			default:
				var html = inline.a;
				if (!html.$) {
					var tag = html.a;
					var attributes = html.b;
					var children = html.c;
					return $elm$core$Maybe$Just(
						A4($dillonkearns$elm_markdown$Markdown$Renderer$renderHtmlNode, renderer, tag, attributes, children));
				} else {
					return $elm$core$Maybe$Nothing;
				}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$renderStyled = F2(
	function (renderer, styledStrings) {
		return $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
			A3(
				$elm$core$List$foldr,
				$dillonkearns$elm_markdown$Markdown$Renderer$foldThing(renderer),
				_List_Nil,
				styledStrings));
	});
var $dillonkearns$elm_markdown$Markdown$Renderer$render = F2(
	function (renderer, ast) {
		return $dillonkearns$elm_markdown$Markdown$Renderer$combineResults(
			A2($dillonkearns$elm_markdown$Markdown$Renderer$renderHelper, renderer, ast));
	});
var $mdgriffith$elm_ui$Internal$Flag$fontAlignment = $mdgriffith$elm_ui$Internal$Flag$flag(12);
var $mdgriffith$elm_ui$Element$Font$center = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontAlignment, $mdgriffith$elm_ui$Internal$Style$classes.es);
var $mdgriffith$elm_ui$Element$Font$italic = $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dI);
var $mdgriffith$elm_ui$Internal$Model$Paragraph = {$: 9};
var $mdgriffith$elm_ui$Element$paragraph = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asParagraph,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$Paragraph),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$spacing(5),
						attrs))),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $author$project$Renderer$renderCaption = F2(
	function (baseFontSize, caption) {
		return A2(
			$mdgriffith$elm_ui$Element$paragraph,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$Font$italic,
					$author$project$Font$fontSize(baseFontSize - 2),
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$Font$center,
					$mdgriffith$elm_ui$Element$paddingEach(
					_Utils_update(
						$author$project$Utils$directions0,
						{bD: 5}))
				]),
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$text(caption)
				]));
	});
var $dillonkearns$elm_markdown$Markdown$HtmlRenderer$HtmlRenderer = $elm$core$Basics$identity;
var $dillonkearns$elm_markdown$Markdown$Html$tag = F2(
	function (expectedTag, a) {
		return F3(
			function (tagName, attributes, children) {
				return _Utils_eq(tagName, expectedTag) ? $elm$core$Result$Ok(a) : $elm$core$Result$Err('Expected ' + (expectedTag + (' but was ' + tagName)));
			});
	});
var $dillonkearns$elm_markdown$List$Helpers$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $dillonkearns$elm_markdown$Markdown$Html$withAttribute = F2(
	function (attributeName, _v0) {
		var renderer = _v0;
		return F3(
			function (tagName, attributes, innerBlocks) {
				return function () {
					var _v1 = A2(
						$dillonkearns$elm_markdown$List$Helpers$find,
						function (_v2) {
							var name = _v2.w;
							var value = _v2.a2;
							return _Utils_eq(name, attributeName);
						},
						attributes);
					if (!_v1.$) {
						var value = _v1.a.a2;
						return $elm$core$Result$map(
							$elm$core$Basics$apR(value));
					} else {
						return function (_v3) {
							return $elm$core$Result$Err('Expecting attribute \"' + (attributeName + '\".'));
						};
					}
				}()(
					A3(renderer, tagName, attributes, innerBlocks));
			});
	});
var $author$project$Renderer$captionRenderer = function (baseFontSize) {
	return A2(
		$dillonkearns$elm_markdown$Markdown$Html$withAttribute,
		'text',
		A2(
			$dillonkearns$elm_markdown$Markdown$Html$tag,
			'caption',
			F2(
				function (caption, children) {
					return A2($author$project$Renderer$renderCaption, baseFontSize, caption);
				})));
};
var $author$project$Renderer$hr = A2(
	$mdgriffith$elm_ui$Element$el,
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
			$mdgriffith$elm_ui$Element$height(
			$mdgriffith$elm_ui$Element$px(2)),
			$mdgriffith$elm_ui$Element$Border$widthEach(
			_Utils_update(
				$author$project$Utils$directions0,
				{cn: 1}))
		]),
	$mdgriffith$elm_ui$Element$none);
var $dillonkearns$elm_markdown$Markdown$Html$resultOr = F2(
	function (ra, rb) {
		if (ra.$ === 1) {
			var singleError = ra.a;
			if (!rb.$) {
				var okValue = rb.a;
				return $elm$core$Result$Ok(okValue);
			} else {
				var errorsSoFar = rb.a;
				return $elm$core$Result$Err(
					A2($elm$core$List$cons, singleError, errorsSoFar));
			}
		} else {
			var okValue = ra.a;
			return $elm$core$Result$Ok(okValue);
		}
	});
var $dillonkearns$elm_markdown$Markdown$Html$attributesToString = function (attributes) {
	return A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$map,
			function (_v0) {
				var name = _v0.w;
				var value = _v0.a2;
				return name + ('=\"' + (value + '\"'));
			},
			attributes));
};
var $dillonkearns$elm_markdown$Markdown$Html$tagToString = F2(
	function (tagName, attributes) {
		return $elm$core$List$isEmpty(attributes) ? ('<' + (tagName + '>')) : ('<' + (tagName + (' ' + ($dillonkearns$elm_markdown$Markdown$Html$attributesToString(attributes) + '>'))));
	});
var $dillonkearns$elm_markdown$Markdown$Html$oneOf = function (decoders) {
	var unwrappedDecoders = A2(
		$elm$core$List$map,
		function (_v1) {
			var rawDecoder = _v1;
			return rawDecoder;
		},
		decoders);
	return function (rawDecoder) {
		return F3(
			function (tagName, attributes, innerBlocks) {
				return A2(
					$elm$core$Result$mapError,
					function (errors) {
						if (!errors.b) {
							return 'Ran into a oneOf with no possibilities!';
						} else {
							if (!errors.b.b) {
								var singleError = errors.a;
								return 'Problem with the given value:\n\n' + (A2($dillonkearns$elm_markdown$Markdown$Html$tagToString, tagName, attributes) + ('\n\n' + (singleError + '\n')));
							} else {
								return 'oneOf failed parsing this value:\n    ' + (A2($dillonkearns$elm_markdown$Markdown$Html$tagToString, tagName, attributes) + ('\n\nParsing failed in the following 2 ways:\n\n\n' + (A2(
									$elm$core$String$join,
									'\n\n',
									A2(
										$elm$core$List$indexedMap,
										F2(
											function (index, error) {
												return '(' + ($elm$core$String$fromInt(index + 1) + (') ' + error));
											}),
										errors)) + '\n')));
							}
						}
					},
					A3(rawDecoder, tagName, attributes, innerBlocks));
			});
	}(
		A3(
			$elm$core$List$foldl,
			F2(
				function (decoder, soFar) {
					return F3(
						function (tagName, attributes, children) {
							return A2(
								$dillonkearns$elm_markdown$Markdown$Html$resultOr,
								A3(decoder, tagName, attributes, children),
								A3(soFar, tagName, attributes, children));
						});
				}),
			F3(
				function (tagName, attributes, children) {
					return $elm$core$Result$Err(_List_Nil);
				}),
			unwrappedDecoders));
};
var $mdgriffith$elm_ui$Internal$Model$Monospace = {$: 2};
var $mdgriffith$elm_ui$Element$Font$monospace = $mdgriffith$elm_ui$Internal$Model$Monospace;
var $author$project$Renderer$renderCodeBlock = function (_v0) {
	var body = _v0.cT;
	var paragraphs = A2(
		$elm$core$List$map,
		function (t) {
			return A2(
				$mdgriffith$elm_ui$Element$paragraph,
				_List_Nil,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$text(t)
					]));
		},
		A2($elm$core$String$split, '\n', body));
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$family(
				_List_fromArray(
					[$mdgriffith$elm_ui$Element$Font$monospace])),
				$mdgriffith$elm_ui$Element$spacing(12)
			]),
		paragraphs);
};
var $author$project$Renderer$renderCodeSpan = function (s) {
	return A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$family(
				_List_fromArray(
					[$mdgriffith$elm_ui$Element$Font$monospace])),
				$mdgriffith$elm_ui$Element$Background$color(
				A3($mdgriffith$elm_ui$Element$rgb255, 150, 150, 150))
			]),
		$mdgriffith$elm_ui$Element$text(s));
};
var $author$project$Renderer$renderEmphasis = $mdgriffith$elm_ui$Element$row(
	_List_fromArray(
		[$mdgriffith$elm_ui$Element$Font$italic]));
var $author$project$Renderer$renderHeading = F2(
	function (baseFontSize, _v0) {
		var level = _v0.dJ;
		var rawText = _v0.d$;
		var children = _v0.c3;
		var _v1 = function () {
			switch (level) {
				case 0:
					return _Utils_Tuple2(1, baseFontSize + 3);
				case 1:
					return _Utils_Tuple2(2, baseFontSize + 2);
				case 2:
					return _Utils_Tuple2(3, baseFontSize + 1);
				case 3:
					return _Utils_Tuple2(4, baseFontSize);
				case 4:
					return _Utils_Tuple2(5, baseFontSize - 1);
				default:
					return _Utils_Tuple2(6, baseFontSize - 2);
			}
		}();
		var levelNumber = _v1.a;
		var fs = _v1.b;
		if (level === 5) {
			return A2(
				$mdgriffith$elm_ui$Element$row,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
					]),
				children);
		} else {
			return A2(
				$mdgriffith$elm_ui$Element$paragraph,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$Region$heading(levelNumber),
						$author$project$Font$fontSize(fs),
						$mdgriffith$elm_ui$Element$paddingEach(
						_Utils_update(
							$author$project$Utils$directions0,
							{cn: 12}))
					]),
				children);
		}
	});
var $elm$html$Html$Attributes$alt = $elm$html$Html$Attributes$stringProperty('alt');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $mdgriffith$elm_ui$Element$image = F2(
	function (attrs, _v0) {
		var src = _v0.ck;
		var description = _v0.dh;
		var imageAttributes = A2(
			$elm$core$List$filter,
			function (a) {
				switch (a.$) {
					case 7:
						return true;
					case 8:
						return true;
					default:
						return false;
				}
			},
			attrs);
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dy),
				attrs),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(
				_List_fromArray(
					[
						A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asEl,
						$mdgriffith$elm_ui$Internal$Model$NodeName('img'),
						_Utils_ap(
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Internal$Model$Attr(
									$elm$html$Html$Attributes$src(src)),
									$mdgriffith$elm_ui$Internal$Model$Attr(
									$elm$html$Html$Attributes$alt(description))
								]),
							imageAttributes),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil))
					])));
	});
var $mdgriffith$elm_ui$Internal$Flag$overflow = $mdgriffith$elm_ui$Internal$Flag$flag(20);
var $mdgriffith$elm_ui$Element$scrollbarY = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.d6);
var $author$project$Renderer$renderImage = F2(
	function (_v0, imageWidth) {
		var alt = _v0.cK;
		var src = _v0.ck;
		var title = _v0.eH;
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width(imageWidth),
					A2($mdgriffith$elm_ui$Element$paddingXY, 0, 5)
				]),
			A2(
				$mdgriffith$elm_ui$Element$image,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width(imageWidth),
						$mdgriffith$elm_ui$Element$height(
						A2($mdgriffith$elm_ui$Element$maximum, 800, $mdgriffith$elm_ui$Element$fill)),
						$mdgriffith$elm_ui$Element$centerX,
						$mdgriffith$elm_ui$Element$scrollbarY
					]),
				{
					dh: alt,
					ck: _Utils_ap($author$project$Env$rootUrl, src)
				}));
	});
var $author$project$Colors$ldSwitch = F3(
	function (lightModeColor, darkModeColor, colorScheme) {
		if (!colorScheme) {
			return lightModeColor;
		} else {
			return darkModeColor;
		}
	});
var $author$project$Colors$link = A2($author$project$Colors$ldSwitch, $author$project$Colors$darkTeal, $author$project$Colors$teal);
var $author$project$Renderer$renderLink = F3(
	function (colorScheme, _v0, content) {
		var title = _v0.eH;
		var destination = _v0.di;
		var label = function () {
			if (content.b && (!content.b.b)) {
				var lbl = content.a;
				return lbl;
			} else {
				return A2($mdgriffith$elm_ui$Element$row, _List_Nil, content);
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Element$link,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$color(
					$author$project$Colors$link(colorScheme))
				]),
			{bX: label, cq: destination});
	});
var $mdgriffith$elm_ui$Internal$Flag$fontWeight = $mdgriffith$elm_ui$Internal$Flag$flag(13);
var $mdgriffith$elm_ui$Element$Font$bold = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$fontWeight, $mdgriffith$elm_ui$Internal$Style$classes.cU);
var $author$project$Renderer$renderListItem = F2(
	function (marker, els) {
		return A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(12)
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[$mdgriffith$elm_ui$Element$alignTop, $mdgriffith$elm_ui$Element$Font$bold]),
					$mdgriffith$elm_ui$Element$text(marker)),
					A2(
					$mdgriffith$elm_ui$Element$paragraph,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$spacing(12)
						]),
					els)
				]));
	});
var $author$project$Renderer$renderOrderedList = F2(
	function (_v0, items) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(18)
				]),
			A2(
				$elm$core$List$indexedMap,
				function (i) {
					return $author$project$Renderer$renderListItem(
						$elm$core$String$fromInt(i + 1) + '.');
				},
				items));
	});
var $author$project$Renderer$renderParagraph = $mdgriffith$elm_ui$Element$paragraph(
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$spacing(12),
			$mdgriffith$elm_ui$Element$paddingEach(
			_Utils_update(
				$author$project$Utils$directions0,
				{cn: 5}))
		]));
var $author$project$Renderer$renderStrong = $mdgriffith$elm_ui$Element$row(
	_List_fromArray(
		[$mdgriffith$elm_ui$Element$Font$bold]));
var $author$project$Renderer$renderUnorderedList = function (items) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(18)
			]),
		A2(
			$elm$core$List$map,
			function (_v0) {
				var els = _v0.b;
				return A2($author$project$Renderer$renderListItem, '-', els);
			},
			items));
};
var $author$project$Renderer$renderer = F3(
	function (colorScheme, baseFontSize, imageWidth) {
		return {
			cS: function (els) {
				return A2(
					$mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
						]),
					els);
			},
			c7: $author$project$Renderer$renderCodeBlock,
			c8: $author$project$Renderer$renderCodeSpan,
			dl: $author$project$Renderer$renderEmphasis,
			dr: $mdgriffith$elm_ui$Element$none,
			ds: $author$project$Renderer$renderHeading(baseFontSize),
			dv: $dillonkearns$elm_markdown$Markdown$Html$oneOf(
				_List_fromArray(
					[
						$author$project$Renderer$captionRenderer(baseFontSize)
					])),
			dx: function (args) {
				return A2($author$project$Renderer$renderImage, args, imageWidth);
			},
			dK: $author$project$Renderer$renderLink(colorScheme),
			dV: $author$project$Renderer$renderOrderedList,
			dX: $author$project$Renderer$renderParagraph,
			ei: $author$project$Renderer$renderStrong,
			el: function (_v0) {
				return $mdgriffith$elm_ui$Element$none;
			},
			em: function (_v1) {
				return $mdgriffith$elm_ui$Element$none;
			},
			en: function (_v2) {
				return $mdgriffith$elm_ui$Element$none;
			},
			eo: function (_v3) {
				return $mdgriffith$elm_ui$Element$none;
			},
			ep: F2(
				function (_v4, _v5) {
					return $mdgriffith$elm_ui$Element$none;
				}),
			eq: function (_v6) {
				return $mdgriffith$elm_ui$Element$none;
			},
			er: function (t) {
				return $mdgriffith$elm_ui$Element$text(t);
			},
			eF: $author$project$Renderer$hr,
			eL: $author$project$Renderer$renderUnorderedList
		};
	});
var $author$project$Renderer$renderPost = F4(
	function (colorScheme, baseFontSize, md, imageWidth) {
		return A2(
			$elm$core$Result$withDefault,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$text('parse failed')
				]),
			A2(
				$elm$core$Result$andThen,
				function (ast) {
					return A2(
						$dillonkearns$elm_markdown$Markdown$Renderer$render,
						A3($author$project$Renderer$renderer, colorScheme, baseFontSize, imageWidth),
						ast);
				},
				A2(
					$elm$core$Result$mapError,
					function (deadEnds) {
						return A2(
							$elm$core$String$join,
							'\n',
							A2($elm$core$List$map, $dillonkearns$elm_markdown$Markdown$Parser$deadEndToString, deadEnds));
					},
					$dillonkearns$elm_markdown$Markdown$Parser$parse(md))));
	});
var $mdgriffith$elm_ui$Internal$Model$AsTextColumn = 5;
var $mdgriffith$elm_ui$Internal$Model$asTextColumn = 5;
var $mdgriffith$elm_ui$Internal$Model$Min = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$minimum = F2(
	function (i, l) {
		return A2($mdgriffith$elm_ui$Internal$Model$Min, i, l);
	});
var $mdgriffith$elm_ui$Element$textColumn = F2(
	function (attrs, children) {
		return A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asTextColumn,
			$mdgriffith$elm_ui$Internal$Model$div,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Element$width(
					A2(
						$mdgriffith$elm_ui$Element$maximum,
						750,
						A2($mdgriffith$elm_ui$Element$minimum, 500, $mdgriffith$elm_ui$Element$fill))),
				attrs),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(children));
	});
var $author$project$Post$viewContent = F4(
	function (colorScheme, baseFontSize, w, content) {
		return A2(
			$mdgriffith$elm_ui$Element$textColumn,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Element$spacingXY, 0, 18),
					$author$project$Font$fontSize(baseFontSize),
					$mdgriffith$elm_ui$Element$width(w)
				]),
			A4($author$project$Renderer$renderPost, colorScheme, baseFontSize, content, w));
	});
var $justinmimbs$date$Date$monthToNumber = function (m) {
	switch (m) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 4;
		case 4:
			return 5;
		case 5:
			return 6;
		case 6:
			return 7;
		case 7:
			return 8;
		case 8:
			return 9;
		case 9:
			return 10;
		case 10:
			return 11;
		default:
			return 12;
	}
};
var $justinmimbs$date$Date$toCalendarDateHelp = F3(
	function (y, m, d) {
		toCalendarDateHelp:
		while (true) {
			var monthDays = A2($justinmimbs$date$Date$daysInMonth, y, m);
			var mn = $justinmimbs$date$Date$monthToNumber(m);
			if ((mn < 12) && (_Utils_cmp(d, monthDays) > 0)) {
				var $temp$y = y,
					$temp$m = $justinmimbs$date$Date$numberToMonth(mn + 1),
					$temp$d = d - monthDays;
				y = $temp$y;
				m = $temp$m;
				d = $temp$d;
				continue toCalendarDateHelp;
			} else {
				return {df: d, dN: m, eQ: y};
			}
		}
	});
var $justinmimbs$date$Date$divWithRemainder = F2(
	function (a, b) {
		return _Utils_Tuple2(
			A2($justinmimbs$date$Date$floorDiv, a, b),
			A2($elm$core$Basics$modBy, b, a));
	});
var $justinmimbs$date$Date$year = function (_v0) {
	var rd = _v0;
	var _v1 = A2($justinmimbs$date$Date$divWithRemainder, rd, 146097);
	var n400 = _v1.a;
	var r400 = _v1.b;
	var _v2 = A2($justinmimbs$date$Date$divWithRemainder, r400, 36524);
	var n100 = _v2.a;
	var r100 = _v2.b;
	var _v3 = A2($justinmimbs$date$Date$divWithRemainder, r100, 1461);
	var n4 = _v3.a;
	var r4 = _v3.b;
	var _v4 = A2($justinmimbs$date$Date$divWithRemainder, r4, 365);
	var n1 = _v4.a;
	var r1 = _v4.b;
	var n = (!r1) ? 0 : 1;
	return ((((n400 * 400) + (n100 * 100)) + (n4 * 4)) + n1) + n;
};
var $justinmimbs$date$Date$toOrdinalDate = function (_v0) {
	var rd = _v0;
	var y = $justinmimbs$date$Date$year(rd);
	return {
		bk: rd - $justinmimbs$date$Date$daysBeforeYear(y),
		eQ: y
	};
};
var $justinmimbs$date$Date$toCalendarDate = function (_v0) {
	var rd = _v0;
	var date = $justinmimbs$date$Date$toOrdinalDate(rd);
	return A3($justinmimbs$date$Date$toCalendarDateHelp, date.eQ, 0, date.bk);
};
var $justinmimbs$date$Date$day = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toCalendarDate,
	function ($) {
		return $.df;
	});
var $justinmimbs$date$Date$month = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toCalendarDate,
	function ($) {
		return $.dN;
	});
var $justinmimbs$date$Date$monthNumber = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$month, $justinmimbs$date$Date$monthToNumber);
var $justinmimbs$date$Date$ordinalDay = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toOrdinalDate,
	function ($) {
		return $.bk;
	});
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $justinmimbs$date$Date$padSignedInt = F2(
	function (length, _int) {
		return _Utils_ap(
			(_int < 0) ? '-' : '',
			A3(
				$elm$core$String$padLeft,
				length,
				'0',
				$elm$core$String$fromInt(
					$elm$core$Basics$abs(_int))));
	});
var $justinmimbs$date$Date$monthToQuarter = function (m) {
	return (($justinmimbs$date$Date$monthToNumber(m) + 2) / 3) | 0;
};
var $justinmimbs$date$Date$quarter = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$month, $justinmimbs$date$Date$monthToQuarter);
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $justinmimbs$date$Date$weekdayNumber = function (_v0) {
	var rd = _v0;
	var _v1 = A2($elm$core$Basics$modBy, 7, rd);
	if (!_v1) {
		return 7;
	} else {
		var n = _v1;
		return n;
	}
};
var $justinmimbs$date$Date$daysBeforeWeekYear = function (y) {
	var jan4 = $justinmimbs$date$Date$daysBeforeYear(y) + 4;
	return jan4 - $justinmimbs$date$Date$weekdayNumber(jan4);
};
var $elm$time$Time$Fri = 4;
var $elm$time$Time$Mon = 0;
var $elm$time$Time$Sat = 5;
var $elm$time$Time$Sun = 6;
var $elm$time$Time$Thu = 3;
var $elm$time$Time$Tue = 1;
var $elm$time$Time$Wed = 2;
var $justinmimbs$date$Date$numberToWeekday = function (wdn) {
	var _v0 = A2($elm$core$Basics$max, 1, wdn);
	switch (_v0) {
		case 1:
			return 0;
		case 2:
			return 1;
		case 3:
			return 2;
		case 4:
			return 3;
		case 5:
			return 4;
		case 6:
			return 5;
		default:
			return 6;
	}
};
var $justinmimbs$date$Date$toWeekDate = function (_v0) {
	var rd = _v0;
	var wdn = $justinmimbs$date$Date$weekdayNumber(rd);
	var wy = $justinmimbs$date$Date$year(rd + (4 - wdn));
	var week1Day1 = $justinmimbs$date$Date$daysBeforeWeekYear(wy) + 1;
	return {
		cu: 1 + (((rd - week1Day1) / 7) | 0),
		cv: wy,
		eO: $justinmimbs$date$Date$numberToWeekday(wdn)
	};
};
var $justinmimbs$date$Date$weekNumber = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toWeekDate,
	function ($) {
		return $.cu;
	});
var $justinmimbs$date$Date$weekYear = A2(
	$elm$core$Basics$composeR,
	$justinmimbs$date$Date$toWeekDate,
	function ($) {
		return $.cv;
	});
var $justinmimbs$date$Date$weekday = A2($elm$core$Basics$composeR, $justinmimbs$date$Date$weekdayNumber, $justinmimbs$date$Date$numberToWeekday);
var $justinmimbs$date$Date$ordinalSuffix = function (n) {
	var nn = A2($elm$core$Basics$modBy, 100, n);
	var _v0 = A2(
		$elm$core$Basics$min,
		(nn < 20) ? nn : A2($elm$core$Basics$modBy, 10, nn),
		4);
	switch (_v0) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
};
var $justinmimbs$date$Date$withOrdinalSuffix = function (n) {
	return _Utils_ap(
		$elm$core$String$fromInt(n),
		$justinmimbs$date$Date$ordinalSuffix(n));
};
var $justinmimbs$date$Date$formatField = F4(
	function (language, _char, length, date) {
		switch (_char) {
			case 'y':
				if (length === 2) {
					return A2(
						$elm$core$String$right,
						2,
						A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$year(date))));
				} else {
					return A2(
						$justinmimbs$date$Date$padSignedInt,
						length,
						$justinmimbs$date$Date$year(date));
				}
			case 'Y':
				if (length === 2) {
					return A2(
						$elm$core$String$right,
						2,
						A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$weekYear(date))));
				} else {
					return A2(
						$justinmimbs$date$Date$padSignedInt,
						length,
						$justinmimbs$date$Date$weekYear(date));
				}
			case 'Q':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					case 2:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					case 3:
						return 'Q' + $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					case 4:
						return $justinmimbs$date$Date$withOrdinalSuffix(
							$justinmimbs$date$Date$quarter(date));
					case 5:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$quarter(date));
					default:
						return '';
				}
			case 'M':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$monthNumber(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$monthNumber(date)));
					case 3:
						return language.aU(
							$justinmimbs$date$Date$month(date));
					case 4:
						return language.bi(
							$justinmimbs$date$Date$month(date));
					case 5:
						return A2(
							$elm$core$String$left,
							1,
							language.aU(
								$justinmimbs$date$Date$month(date)));
					default:
						return '';
				}
			case 'w':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$weekNumber(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$weekNumber(date)));
					default:
						return '';
				}
			case 'd':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$day(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$day(date)));
					case 3:
						return language.a9(
							$justinmimbs$date$Date$day(date));
					default:
						return '';
				}
			case 'D':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$ordinalDay(date));
					case 2:
						return A3(
							$elm$core$String$padLeft,
							2,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$ordinalDay(date)));
					case 3:
						return A3(
							$elm$core$String$padLeft,
							3,
							'0',
							$elm$core$String$fromInt(
								$justinmimbs$date$Date$ordinalDay(date)));
					default:
						return '';
				}
			case 'E':
				switch (length) {
					case 1:
						return language.ai(
							$justinmimbs$date$Date$weekday(date));
					case 2:
						return language.ai(
							$justinmimbs$date$Date$weekday(date));
					case 3:
						return language.ai(
							$justinmimbs$date$Date$weekday(date));
					case 4:
						return language.bv(
							$justinmimbs$date$Date$weekday(date));
					case 5:
						return A2(
							$elm$core$String$left,
							1,
							language.ai(
								$justinmimbs$date$Date$weekday(date)));
					case 6:
						return A2(
							$elm$core$String$left,
							2,
							language.ai(
								$justinmimbs$date$Date$weekday(date)));
					default:
						return '';
				}
			case 'e':
				switch (length) {
					case 1:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$weekdayNumber(date));
					case 2:
						return $elm$core$String$fromInt(
							$justinmimbs$date$Date$weekdayNumber(date));
					default:
						return A4($justinmimbs$date$Date$formatField, language, 'E', length, date);
				}
			default:
				return '';
		}
	});
var $justinmimbs$date$Date$formatWithTokens = F3(
	function (language, tokens, date) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (token, formatted) {
					if (!token.$) {
						var _char = token.a;
						var length = token.b;
						return _Utils_ap(
							A4($justinmimbs$date$Date$formatField, language, _char, length, date),
							formatted);
					} else {
						var str = token.a;
						return _Utils_ap(str, formatted);
					}
				}),
			'',
			tokens);
	});
var $justinmimbs$date$Pattern$Literal = function (a) {
	return {$: 1, a: a};
};
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $elm$parser$Parser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $elm$parser$Parser$token = function (str) {
	return $elm$parser$Parser$Advanced$token(
		$elm$parser$Parser$toToken(str));
};
var $justinmimbs$date$Pattern$escapedQuote = A2(
	$elm$parser$Parser$ignorer,
	$elm$parser$Parser$succeed(
		$justinmimbs$date$Pattern$Literal('\'')),
	$elm$parser$Parser$token('\'\''));
var $elm$parser$Parser$UnexpectedChar = {$: 11};
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $justinmimbs$date$Pattern$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$parser$Parser$getOffset = $elm$parser$Parser$Advanced$getOffset;
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $justinmimbs$date$Pattern$fieldRepeats = function (str) {
	var _v0 = $elm$core$String$toList(str);
	if (_v0.b && (!_v0.b.b)) {
		var _char = _v0.a;
		return A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					F2(
						function (x, y) {
							return A2($justinmimbs$date$Pattern$Field, _char, 1 + (y - x));
						})),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$getOffset,
					$elm$parser$Parser$chompWhile(
						$elm$core$Basics$eq(_char)))),
			$elm$parser$Parser$getOffset);
	} else {
		return $elm$parser$Parser$problem('expected exactly one char');
	}
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $justinmimbs$date$Pattern$field = A2(
	$elm$parser$Parser$andThen,
	$justinmimbs$date$Pattern$fieldRepeats,
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$chompIf($elm$core$Char$isAlpha)));
var $justinmimbs$date$Pattern$finalize = A2(
	$elm$core$List$foldl,
	F2(
		function (token, tokens) {
			var _v0 = _Utils_Tuple2(token, tokens);
			if (((_v0.a.$ === 1) && _v0.b.b) && (_v0.b.a.$ === 1)) {
				var x = _v0.a.a;
				var _v1 = _v0.b;
				var y = _v1.a.a;
				var rest = _v1.b;
				return A2(
					$elm$core$List$cons,
					$justinmimbs$date$Pattern$Literal(
						_Utils_ap(x, y)),
					rest);
			} else {
				return A2($elm$core$List$cons, token, tokens);
			}
		}),
	_List_Nil);
var $elm$parser$Parser$lazy = $elm$parser$Parser$Advanced$lazy;
var $justinmimbs$date$Pattern$isLiteralChar = function (_char) {
	return (_char !== '\'') && (!$elm$core$Char$isAlpha(_char));
};
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $justinmimbs$date$Pattern$literal = A2(
	$elm$parser$Parser$map,
	$justinmimbs$date$Pattern$Literal,
	$elm$parser$Parser$getChompedString(
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(0),
				$elm$parser$Parser$chompIf($justinmimbs$date$Pattern$isLiteralChar)),
			$elm$parser$Parser$chompWhile($justinmimbs$date$Pattern$isLiteralChar))));
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $elm$parser$Parser$ExpectingEnd = {$: 10};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $justinmimbs$date$Pattern$quotedHelp = function (result) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$andThen,
				function (str) {
					return $justinmimbs$date$Pattern$quotedHelp(
						_Utils_ap(result, str));
				},
				$elm$parser$Parser$getChompedString(
					A2(
						$elm$parser$Parser$ignorer,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed(0),
							$elm$parser$Parser$chompIf(
								$elm$core$Basics$neq('\''))),
						$elm$parser$Parser$chompWhile(
							$elm$core$Basics$neq('\''))))),
				A2(
				$elm$parser$Parser$andThen,
				function (_v0) {
					return $justinmimbs$date$Pattern$quotedHelp(result + '\'');
				},
				$elm$parser$Parser$token('\'\'')),
				$elm$parser$Parser$succeed(result)
			]));
};
var $justinmimbs$date$Pattern$quoted = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed($justinmimbs$date$Pattern$Literal),
		$elm$parser$Parser$chompIf(
			$elm$core$Basics$eq('\''))),
	A2(
		$elm$parser$Parser$ignorer,
		$justinmimbs$date$Pattern$quotedHelp(''),
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$chompIf(
					$elm$core$Basics$eq('\'')),
					$elm$parser$Parser$end
				]))));
var $justinmimbs$date$Pattern$patternHelp = function (tokens) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$andThen,
				function (token) {
					return $justinmimbs$date$Pattern$patternHelp(
						A2($elm$core$List$cons, token, tokens));
				},
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[$justinmimbs$date$Pattern$field, $justinmimbs$date$Pattern$literal, $justinmimbs$date$Pattern$escapedQuote, $justinmimbs$date$Pattern$quoted]))),
				$elm$parser$Parser$lazy(
				function (_v0) {
					return $elm$parser$Parser$succeed(
						$justinmimbs$date$Pattern$finalize(tokens));
				})
			]));
};
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {bF: col, d_: problem, d2: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.d2, p.bF, p.d_);
};
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (!_v0.$) {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $justinmimbs$date$Pattern$fromString = function (str) {
	return A2(
		$elm$core$Result$withDefault,
		_List_fromArray(
			[
				$justinmimbs$date$Pattern$Literal(str)
			]),
		A2(
			$elm$parser$Parser$run,
			$justinmimbs$date$Pattern$patternHelp(_List_Nil),
			str));
};
var $justinmimbs$date$Date$formatWithLanguage = F2(
	function (language, pattern) {
		var tokens = $elm$core$List$reverse(
			$justinmimbs$date$Pattern$fromString(pattern));
		return A2($justinmimbs$date$Date$formatWithTokens, language, tokens);
	});
var $justinmimbs$date$Date$monthToName = function (m) {
	switch (m) {
		case 0:
			return 'January';
		case 1:
			return 'February';
		case 2:
			return 'March';
		case 3:
			return 'April';
		case 4:
			return 'May';
		case 5:
			return 'June';
		case 6:
			return 'July';
		case 7:
			return 'August';
		case 8:
			return 'September';
		case 9:
			return 'October';
		case 10:
			return 'November';
		default:
			return 'December';
	}
};
var $justinmimbs$date$Date$weekdayToName = function (wd) {
	switch (wd) {
		case 0:
			return 'Monday';
		case 1:
			return 'Tuesday';
		case 2:
			return 'Wednesday';
		case 3:
			return 'Thursday';
		case 4:
			return 'Friday';
		case 5:
			return 'Saturday';
		default:
			return 'Sunday';
	}
};
var $justinmimbs$date$Date$language_en = {
	a9: $justinmimbs$date$Date$withOrdinalSuffix,
	bi: $justinmimbs$date$Date$monthToName,
	aU: A2(
		$elm$core$Basics$composeR,
		$justinmimbs$date$Date$monthToName,
		$elm$core$String$left(3)),
	bv: $justinmimbs$date$Date$weekdayToName,
	ai: A2(
		$elm$core$Basics$composeR,
		$justinmimbs$date$Date$weekdayToName,
		$elm$core$String$left(3))
};
var $justinmimbs$date$Date$format = function (pattern) {
	return A2($justinmimbs$date$Date$formatWithLanguage, $justinmimbs$date$Date$language_en, pattern);
};
var $author$project$Post$viewDate = function (date) {
	if (date.$ === 1) {
		return $mdgriffith$elm_ui$Element$none;
	} else {
		var d = date.a;
		return A2(
			$mdgriffith$elm_ui$Element$paragraph,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$italic,
					$mdgriffith$elm_ui$Element$Font$size(14)
				]),
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$text(
					A2($justinmimbs$date$Date$format, 'EEEE, MMMM d, yyyy', d))
				]));
	}
};
var $mdgriffith$elm_ui$Element$Font$underline = $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.eK);
var $author$project$Post$viewTitle = function (title) {
	return A2(
		$mdgriffith$elm_ui$Element$paragraph,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Region$heading(1),
				$mdgriffith$elm_ui$Element$Font$size(36),
				$mdgriffith$elm_ui$Element$Font$underline,
				A2($mdgriffith$elm_ui$Element$paddingXY, 0, 24)
			]),
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$text(title)
			]));
};
var $author$project$Post$view = F5(
	function (colorScheme, baseFontSize, controls, w, post) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$centerX,
					A2($mdgriffith$elm_ui$Element$spacingXY, 0, 24),
					$mdgriffith$elm_ui$Element$width(w),
					A2($mdgriffith$elm_ui$Element$paddingXY, 0, 48),
					$mdgriffith$elm_ui$Element$alignTop
				]),
			_List_fromArray(
				[
					$author$project$Post$viewTitle(post.eH),
					$author$project$Post$viewDate(post.de),
					controls,
					A4($author$project$Post$viewContent, colorScheme, baseFontSize, w, post.c9)
				]));
	});
var $author$project$Main$articleBody = F2(
	function (post, model) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$row,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill)
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$el,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									$mdgriffith$elm_ui$Element$alignTop
								]),
							A3(
								$author$project$Main$content,
								model.x,
								70,
								A5(
									$author$project$Post$view,
									model.l,
									model.Q,
									A2($author$project$Main$textControls, model.l, model.Q),
									A2(
										$mdgriffith$elm_ui$Element$maximum,
										800,
										A2($author$project$Main$pct, model.x, 70)),
									post))),
							A2($author$project$Main$sideBar, model.l, model.x)
						])),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$alignBottom
						]),
					A2(
						$author$project$Main$header,
						model,
						$elm$core$Maybe$Just(post)))
				]));
	});
var $author$project$Categories$Slugs = function (a) {
	return {$: 0, a: a};
};
var $author$project$Categories$SubCategories = function (a) {
	return {$: 1, a: a};
};
var $author$project$Categories$categories = _List_fromArray(
	[
		{
		t: $author$project$Categories$SubCategories(
			{
				bs: _List_fromArray(
					[
						{
						t: $author$project$Categories$Slugs(
							{
								A: _List_fromArray(
									['pete', 'orange', 'squirrel', 'vultures-envision-a-toaster'])
							}),
						w: 'Fables',
						o: 'fables'
					},
						{
						t: $author$project$Categories$Slugs(
							{
								A: _List_fromArray(
									['zip', 'two-ways-out', 'flicker'])
							}),
						w: 'Horror',
						o: 'horror'
					},
						{
						t: $author$project$Categories$Slugs(
							{
								A: _List_fromArray(
									['the-hearse', 'crust', 'metaphor', 'arnold'])
							}),
						w: 'Romance',
						o: 'romance'
					},
						{
						t: $author$project$Categories$Slugs(
							{
								A: _List_fromArray(
									['a-dangerous-hobby', 'bells', 'hell', 'hooked-mystery', 'hooked-solution'])
							}),
						w: 'Miscellaneous Fiction',
						o: 'misc-fiction'
					}
					])
			}),
		w: 'Fiction',
		o: 'fiction'
	},
		{
		t: $author$project$Categories$Slugs(
			{
				A: _List_fromArray(
					['bipartisan', 'hope-and-upsilon', 'kkkfc-chicken', 'helmet-salad', 'cleveland', 'taken4'])
			}),
		w: 'News',
		o: 'news'
	},
		{
		t: $author$project$Categories$Slugs(
			{
				A: _List_fromArray(
					['xcuseme', 'europe', 'stupid-convos-1', 'stupid-convos-2', 'facebook-radicalized-me', 'modern-commerce', 'silly-hat-ceremony', 'rambling-1', 'raspberries', 'colonial-woman', 'fedex'])
			}),
		w: 'Life Updates',
		o: 'life'
	},
		{
		t: $author$project$Categories$Slugs(
			{
				A: _List_fromArray(
					['lost-and-not-found', 'think-like-a-squirrel', 'houseplant', 'beantown', 'the-boys-and-amazon', 'tech-support', 'four-stars'])
			}),
		w: 'Opinion',
		o: 'opinion'
	},
		{
		t: $author$project$Categories$Slugs(
			{
				A: _List_fromArray(
					['goose-question', 'simple-trick'])
			}),
		w: 'Clickbait',
		o: 'clickbait'
	},
		{
		t: $author$project$Categories$Slugs(
			{
				A: _List_fromArray(
					['recipe'])
			}),
		w: 'Recipes',
		o: 'recipes'
	},
		{
		t: $author$project$Categories$Slugs(
			{
				A: _List_fromArray(
					['room-for-let'])
			}),
		w: 'Ads',
		o: 'ads'
	},
		{
		t: $author$project$Categories$Slugs(
			{
				A: _List_fromArray(
					['silent-podcast'])
			}),
		w: 'Podcasts',
		o: 'podcasts'
	},
		{
		t: $author$project$Categories$Slugs(
			{
				A: _List_fromArray(
					['roommate-agreement'])
			}),
		w: 'Legal Documents (Private)',
		o: 'legal'
	}
	]);
var $author$project$Categories$find = F2(
	function (cats, slug) {
		find:
		while (true) {
			if (!cats.b) {
				return {ay: _List_Nil, az: $elm$core$Maybe$Nothing};
			} else {
				var first = cats.a;
				var rest = cats.b;
				if (_Utils_eq(first.o, slug)) {
					return {
						ay: _List_fromArray(
							[slug]),
						az: $elm$core$Maybe$Just(first)
					};
				} else {
					var _v1 = first.t;
					if (!_v1.$) {
						var $temp$cats = rest,
							$temp$slug = slug;
						cats = $temp$cats;
						slug = $temp$slug;
						continue find;
					} else {
						var subCategories = _v1.a.bs;
						var _v2 = A2($author$project$Categories$find, subCategories, slug);
						var result = _v2.az;
						var path = _v2.ay;
						if (result.$ === 1) {
							var $temp$cats = rest,
								$temp$slug = slug;
							cats = $temp$cats;
							slug = $temp$slug;
							continue find;
						} else {
							var cat = result.a;
							return {
								ay: A2($elm$core$List$cons, first.o, path),
								az: $elm$core$Maybe$Just(cat)
							};
						}
					}
				}
			}
		}
	});
var $author$project$Categories$fromSlug = function (slug) {
	var _v0 = A2($author$project$Categories$find, $author$project$Categories$categories, slug);
	var result = _v0.az;
	return result;
};
var $pzp1997$assoc_list$AssocList$get = F2(
	function (targetKey, _v0) {
		get:
		while (true) {
			var alist = _v0;
			if (!alist.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var _v2 = alist.a;
				var key = _v2.a;
				var value = _v2.b;
				var rest = alist.b;
				if (_Utils_eq(key, targetKey)) {
					return $elm$core$Maybe$Just(value);
				} else {
					var $temp$targetKey = targetKey,
						$temp$_v0 = rest;
					targetKey = $temp$targetKey;
					_v0 = $temp$_v0;
					continue get;
				}
			}
		}
	});
var $author$project$Post$fromSlug = F2(
	function (slug, posts) {
		return A2($pzp1997$assoc_list$AssocList$get, slug, posts);
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $author$project$Main$itemsForPage = F2(
	function (_v0, items) {
		itemsForPage:
		while (true) {
			var itemsPerPage = _v0.be;
			var pageNumber = _v0.bl;
			var _v1 = A2($elm$core$Basics$compare, pageNumber, 0);
			switch (_v1) {
				case 0:
					return A2($elm$core$List$take, itemsPerPage, items);
				case 1:
					return A2($elm$core$List$take, itemsPerPage, items);
				default:
					var $temp$_v0 = {be: itemsPerPage, bl: pageNumber - 1},
						$temp$items = A2($elm$core$List$drop, itemsPerPage, items);
					_v0 = $temp$_v0;
					items = $temp$items;
					continue itemsForPage;
			}
		}
	});
var $pzp1997$assoc_list$AssocList$map = F2(
	function (alter, _v0) {
		var alist = _v0;
		return A2(
			$elm$core$List$map,
			function (_v1) {
				var key = _v1.a;
				var value = _v1.b;
				return _Utils_Tuple2(
					key,
					A2(alter, key, value));
			},
			alist);
	});
var $author$project$Post$matchesSearch = F3(
	function (searchTerm, post, _v0) {
		var searchFullText = _v0.ao;
		var needle = $elm$core$String$toLower(
			$elm$core$String$trim(searchTerm));
		var haystack = $elm$core$String$toLower(
			$elm$core$String$trim(
				searchFullText ? (post.eH + (' ' + (post.dh + post.c9))) : (post.eH + (' ' + post.dh))));
		if (searchTerm === '') {
			return true;
		} else {
			return A2($elm$core$String$contains, needle, haystack);
		}
	});
var $mdgriffith$elm_ui$Internal$Model$Left = 0;
var $mdgriffith$elm_ui$Element$alignLeft = $mdgriffith$elm_ui$Internal$Model$AlignX(0);
var $elm$url$Url$Builder$QueryParameter = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$url$Url$Builder$int = F2(
	function (key, value) {
		return A2(
			$elm$url$Url$Builder$QueryParameter,
			$elm$url$Url$percentEncode(key),
			$elm$core$String$fromInt(value));
	});
var $author$project$Main$postsPerPage = 15;
var $author$project$Main$paginationControls = F2(
	function (colorScheme, _v0) {
		var numPosts = _v0.b0;
		var currentPage = _v0.bG;
		var numPages = $elm$core$Basics$ceiling(numPosts / $author$project$Main$postsPerPage);
		var hasPrevious = currentPage > 0;
		var previousEl = function () {
			if (hasPrevious) {
				return A2(
					$mdgriffith$elm_ui$Element$link,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color(
							$author$project$Colors$link(colorScheme))
						]),
					{
						bX: $mdgriffith$elm_ui$Element$text('Previous'),
						cq: A2(
							$elm$url$Url$Builder$absolute,
							_List_Nil,
							_List_fromArray(
								[
									A2($elm$url$Url$Builder$int, 'page', currentPage - 1)
								]))
					});
			} else {
				return A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color(
							$author$project$Colors$disabled(colorScheme))
						]),
					$mdgriffith$elm_ui$Element$text('Previous'));
			}
		}();
		var hasNext = _Utils_cmp(currentPage, numPages - 1) < 0;
		var nextEl = function () {
			if (hasNext) {
				return A2(
					$mdgriffith$elm_ui$Element$link,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color(
							$author$project$Colors$link(colorScheme))
						]),
					{
						bX: $mdgriffith$elm_ui$Element$text('Next'),
						cq: A2(
							$elm$url$Url$Builder$absolute,
							_List_Nil,
							_List_fromArray(
								[
									A2($elm$url$Url$Builder$int, 'page', currentPage + 1)
								]))
					});
			} else {
				return A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color(
							$author$project$Colors$disabled(colorScheme))
						]),
					$mdgriffith$elm_ui$Element$text('Next'));
			}
		}();
		var currentPageInfo = 'Page ' + ($elm$core$String$fromInt(currentPage + 1) + (' of ' + $elm$core$String$fromInt(numPages)));
		return A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$Font$size(14)
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[$mdgriffith$elm_ui$Element$alignLeft]),
					previousEl),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[$mdgriffith$elm_ui$Element$centerX]),
					$mdgriffith$elm_ui$Element$text(currentPageInfo)),
					A2(
					$mdgriffith$elm_ui$Element$el,
					_List_fromArray(
						[$mdgriffith$elm_ui$Element$alignRight]),
					nextEl)
				]));
	});
var $author$project$Post$previewTitle = F2(
	function (title, slug) {
		return A2(
			$mdgriffith$elm_ui$Element$link,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Font$size(18)
				]),
			{
				bX: A2(
					$mdgriffith$elm_ui$Element$paragraph,
					_List_Nil,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$text(title)
						])),
				cq: _Utils_ap($author$project$Env$rootUrl, slug)
			});
	});
var $author$project$Post$viewDescription = function (description) {
	return A2(
		$mdgriffith$elm_ui$Element$paragraph,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Font$size(14),
				$mdgriffith$elm_ui$Element$Font$italic
			]),
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$text(description)
			]));
};
var $author$project$Post$preview = F2(
	function (slug, p) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(12)
				]),
			_List_fromArray(
				[
					A2($author$project$Post$previewTitle, p.eH, slug),
					$author$project$Post$viewDescription(p.dh)
				]));
	});
var $pzp1997$assoc_list$AssocList$values = function (_v0) {
	var alist = _v0;
	return A2($elm$core$List$map, $elm$core$Tuple$second, alist);
};
var $author$project$Main$homeContent = F6(
	function (colorScheme, w, posts, pageNumber, searchTerm, searchOpts) {
		var postList = $pzp1997$assoc_list$AssocList$values(
			A2(
				$pzp1997$assoc_list$AssocList$map,
				$author$project$Post$preview,
				A2(
					$pzp1997$assoc_list$AssocList$filter,
					F2(
						function (_v2, post) {
							return A3($author$project$Post$matchesSearch, searchTerm, post, searchOpts);
						}),
					A2(
						$pzp1997$assoc_list$AssocList$filter,
						F2(
							function (_v1, post) {
								return post.d9;
							}),
						posts))));
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Border$widthEach(
					_Utils_update(
						$author$project$Utils$directions0,
						{bZ: 1, cf: 1})),
					$mdgriffith$elm_ui$Element$spacing(36),
					$mdgriffith$elm_ui$Element$width(
					A2($mdgriffith$elm_ui$Element$maximum, 800, $mdgriffith$elm_ui$Element$fill)),
					A2($mdgriffith$elm_ui$Element$paddingXY, ((w * 6) / 100) | 0, 20),
					$mdgriffith$elm_ui$Element$centerX
				]),
			function () {
				if (!postList.b) {
					return _List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$paragraph,
							_List_fromArray(
								[$mdgriffith$elm_ui$Element$Font$italic]),
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$text('No posts found')
								]))
						]);
				} else {
					return _Utils_ap(
						A2(
							$author$project$Main$itemsForPage,
							{be: $author$project$Main$postsPerPage, bl: pageNumber},
							postList),
						_List_fromArray(
							[
								A2(
								$author$project$Main$paginationControls,
								colorScheme,
								{
									bG: pageNumber,
									b0: $elm$core$List$length(postList)
								})
							]));
				}
			}());
	});
var $author$project$Colors$neutral = function (_v0) {
	return $author$project$Colors$gray;
};
var $author$project$Main$subheader = function (colorScheme) {
	return A2(
		$mdgriffith$elm_ui$Element$paragraph,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$Region$heading(2),
				$mdgriffith$elm_ui$Element$Font$size(18),
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				A2($mdgriffith$elm_ui$Element$paddingXY, 24, 12),
				$mdgriffith$elm_ui$Element$Background$color(
				$author$project$Colors$neutral(colorScheme)),
				$mdgriffith$elm_ui$Element$Font$color($author$project$Colors$white)
			]),
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$text('Where I type and scream my thoughts into the void, unanswered')
			]));
};
var $author$project$Main$homeFrame = F2(
	function (model, innerContents) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
					$mdgriffith$elm_ui$Element$spacing(24),
					$mdgriffith$elm_ui$Element$paddingEach(
					{bD: 36, bZ: 0, cf: 0, cn: 0})
				]),
			_Utils_ap(
				_List_fromArray(
					[
						A2(
						$mdgriffith$elm_ui$Element$column,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
							]),
						_List_fromArray(
							[
								A2($author$project$Main$header, model, $elm$core$Maybe$Nothing),
								$author$project$Main$subheader(model.l)
							]))
					]),
				innerContents));
	});
var $author$project$Main$SearchChanged = function (a) {
	return {$: 6, a: a};
};
var $author$project$Main$ToggleFullTextSearch = function (a) {
	return {$: 7, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$LivePolite = {$: 6};
var $mdgriffith$elm_ui$Element$Region$announce = $mdgriffith$elm_ui$Internal$Model$Describe($mdgriffith$elm_ui$Internal$Model$LivePolite);
var $mdgriffith$elm_ui$Element$Input$applyLabel = F3(
	function (attrs, label, input) {
		if (label.$ === 1) {
			var labelText = label.a;
			return A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asColumn,
				$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
				attrs,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[input])));
		} else {
			var position = label.a;
			var labelAttrs = label.b;
			var labelChild = label.c;
			var labelElement = A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				labelAttrs,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[labelChild])));
			switch (position) {
				case 2:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aS),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
				case 3:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asColumn,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aS),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				case 0:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asRow,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aS),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[input, labelElement])));
				default:
					return A4(
						$mdgriffith$elm_ui$Internal$Model$element,
						$mdgriffith$elm_ui$Internal$Model$asRow,
						$mdgriffith$elm_ui$Internal$Model$NodeName('label'),
						A2(
							$elm$core$List$cons,
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.aS),
							attrs),
						$mdgriffith$elm_ui$Internal$Model$Unkeyed(
							_List_fromArray(
								[labelElement, input])));
			}
		}
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $mdgriffith$elm_ui$Internal$Model$CenterY = 1;
var $mdgriffith$elm_ui$Element$centerY = $mdgriffith$elm_ui$Internal$Model$AlignY(1);
var $mdgriffith$elm_ui$Internal$Model$Label = function (a) {
	return {$: 5, a: a};
};
var $mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute = function (label) {
	if (label.$ === 1) {
		var textLabel = label.a;
		return $mdgriffith$elm_ui$Internal$Model$Describe(
			$mdgriffith$elm_ui$Internal$Model$Label(textLabel));
	} else {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	}
};
var $mdgriffith$elm_ui$Element$Input$isHiddenLabel = function (label) {
	if (label.$ === 1) {
		return true;
	} else {
		return false;
	}
};
var $mdgriffith$elm_ui$Element$Input$onKeyLookup = function (lookup) {
	var decode = function (code) {
		var _v0 = lookup(code);
		if (_v0.$ === 1) {
			return $elm$json$Json$Decode$fail('No key matched');
		} else {
			var msg = _v0.a;
			return $elm$json$Json$Decode$succeed(msg);
		}
	};
	var isKey = A2(
		$elm$json$Json$Decode$andThen,
		decode,
		A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
	return $mdgriffith$elm_ui$Internal$Model$Attr(
		A2($elm$html$Html$Events$on, 'keyup', isKey));
};
var $mdgriffith$elm_ui$Element$Input$space = ' ';
var $mdgriffith$elm_ui$Element$Input$tabindex = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$tabindex);
var $mdgriffith$elm_ui$Element$Input$checkbox = F2(
	function (attrs, _v0) {
		var label = _v0.bX;
		var icon = _v0.dw;
		var checked = _v0.c2;
		var onChange = _v0.b2;
		var attributes = _Utils_ap(
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Input$isHiddenLabel(label) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Element$spacing(6),
					$mdgriffith$elm_ui$Internal$Model$Attr(
					$elm$html$Html$Events$onClick(
						onChange(!checked))),
					$mdgriffith$elm_ui$Element$Region$announce,
					$mdgriffith$elm_ui$Element$Input$onKeyLookup(
					function (code) {
						return _Utils_eq(code, $mdgriffith$elm_ui$Element$Input$enter) ? $elm$core$Maybe$Just(
							onChange(!checked)) : (_Utils_eq(code, $mdgriffith$elm_ui$Element$Input$space) ? $elm$core$Maybe$Just(
							onChange(!checked)) : $elm$core$Maybe$Nothing);
					}),
					$mdgriffith$elm_ui$Element$Input$tabindex(0),
					$mdgriffith$elm_ui$Element$pointer,
					$mdgriffith$elm_ui$Element$alignLeft,
					$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
				]),
			attrs);
		return A3(
			$mdgriffith$elm_ui$Element$Input$applyLabel,
			attributes,
			label,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Internal$Model$Attr(
						A2($elm$html$Html$Attributes$attribute, 'role', 'checkbox')),
						$mdgriffith$elm_ui$Internal$Model$Attr(
						A2(
							$elm$html$Html$Attributes$attribute,
							'aria-checked',
							checked ? 'true' : 'false')),
						$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(label),
						$mdgriffith$elm_ui$Element$centerY,
						$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$shrink)
					]),
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[
							icon(checked)
						]))));
	});
var $elm$core$Basics$pi = _Basics_pi;
var $elm$core$Basics$degrees = function (angleInDegrees) {
	return (angleInDegrees * $elm$core$Basics$pi) / 180;
};
var $mdgriffith$elm_ui$Internal$Model$MoveY = function (a) {
	return {$: 1, a: a};
};
var $mdgriffith$elm_ui$Internal$Model$TransformComponent = F2(
	function (a, b) {
		return {$: 10, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$moveY = $mdgriffith$elm_ui$Internal$Flag$flag(26);
var $mdgriffith$elm_ui$Element$moveUp = function (y) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$moveY,
		$mdgriffith$elm_ui$Internal$Model$MoveY(-y));
};
var $mdgriffith$elm_ui$Element$rgb = F3(
	function (r, g, b) {
		return A4($mdgriffith$elm_ui$Internal$Model$Rgba, r, g, b, 1);
	});
var $mdgriffith$elm_ui$Element$rgba = $mdgriffith$elm_ui$Internal$Model$Rgba;
var $mdgriffith$elm_ui$Internal$Model$Rotate = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$rotate = $mdgriffith$elm_ui$Internal$Flag$flag(24);
var $mdgriffith$elm_ui$Element$rotate = function (angle) {
	return A2(
		$mdgriffith$elm_ui$Internal$Model$TransformComponent,
		$mdgriffith$elm_ui$Internal$Flag$rotate,
		A2(
			$mdgriffith$elm_ui$Internal$Model$Rotate,
			_Utils_Tuple3(0, 0, 1),
			angle));
};
var $mdgriffith$elm_ui$Internal$Model$boxShadowClass = function (shadow) {
	return $elm$core$String$concat(
		_List_fromArray(
			[
				shadow.bU ? 'box-inset' : 'box-',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.b.a) + 'px',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.b.b) + 'px',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.aj) + 'px',
				$mdgriffith$elm_ui$Internal$Model$floatClass(shadow.a_) + 'px',
				$mdgriffith$elm_ui$Internal$Model$formatColorClass(shadow.ak)
			]));
};
var $mdgriffith$elm_ui$Internal$Flag$shadows = $mdgriffith$elm_ui$Internal$Flag$flag(19);
var $mdgriffith$elm_ui$Element$Border$shadow = function (almostShade) {
	var shade = {aj: almostShade.aj, ak: almostShade.ak, bU: false, b: almostShade.b, a_: almostShade.a_};
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$shadows,
		A3(
			$mdgriffith$elm_ui$Internal$Model$Single,
			$mdgriffith$elm_ui$Internal$Model$boxShadowClass(shade),
			'box-shadow',
			$mdgriffith$elm_ui$Internal$Model$formatBoxShadow(shade)));
};
var $mdgriffith$elm_ui$Element$Input$white = A3($mdgriffith$elm_ui$Element$rgb, 1, 1, 1);
var $mdgriffith$elm_ui$Element$Input$defaultCheckbox = function (checked) {
	return A2(
		$mdgriffith$elm_ui$Element$el,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Internal$Model$htmlClass('focusable'),
				$mdgriffith$elm_ui$Element$width(
				$mdgriffith$elm_ui$Element$px(14)),
				$mdgriffith$elm_ui$Element$height(
				$mdgriffith$elm_ui$Element$px(14)),
				$mdgriffith$elm_ui$Element$Font$color($mdgriffith$elm_ui$Element$Input$white),
				$mdgriffith$elm_ui$Element$centerY,
				$mdgriffith$elm_ui$Element$Font$size(9),
				$mdgriffith$elm_ui$Element$Font$center,
				$mdgriffith$elm_ui$Element$Border$rounded(3),
				$mdgriffith$elm_ui$Element$Border$color(
				checked ? A3($mdgriffith$elm_ui$Element$rgb, 59 / 255, 153 / 255, 252 / 255) : A3($mdgriffith$elm_ui$Element$rgb, 211 / 255, 211 / 255, 211 / 255)),
				$mdgriffith$elm_ui$Element$Border$shadow(
				{
					aj: 1,
					ak: checked ? A4($mdgriffith$elm_ui$Element$rgba, 238 / 255, 238 / 255, 238 / 255, 0) : A3($mdgriffith$elm_ui$Element$rgb, 238 / 255, 238 / 255, 238 / 255),
					b: _Utils_Tuple2(0, 0),
					a_: 1
				}),
				$mdgriffith$elm_ui$Element$Background$color(
				checked ? A3($mdgriffith$elm_ui$Element$rgb, 59 / 255, 153 / 255, 252 / 255) : $mdgriffith$elm_ui$Element$Input$white),
				$mdgriffith$elm_ui$Element$Border$width(
				checked ? 0 : 1)
			]),
		checked ? A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$Border$color($mdgriffith$elm_ui$Element$Input$white),
					$mdgriffith$elm_ui$Element$height(
					$mdgriffith$elm_ui$Element$px(6)),
					$mdgriffith$elm_ui$Element$width(
					$mdgriffith$elm_ui$Element$px(9)),
					$mdgriffith$elm_ui$Element$rotate(
					$elm$core$Basics$degrees(-45)),
					$mdgriffith$elm_ui$Element$centerX,
					$mdgriffith$elm_ui$Element$centerY,
					$mdgriffith$elm_ui$Element$moveUp(1),
					$mdgriffith$elm_ui$Element$Border$widthEach(
					{bD: 2, bZ: 2, cf: 0, cn: 0})
				]),
			$mdgriffith$elm_ui$Element$none) : $mdgriffith$elm_ui$Element$none);
};
var $elm$html$Html$Attributes$autofocus = $elm$html$Html$Attributes$boolProperty('autofocus');
var $mdgriffith$elm_ui$Element$Input$focusedOnLoad = $mdgriffith$elm_ui$Internal$Model$Attr(
	$elm$html$Html$Attributes$autofocus(true));
var $mdgriffith$elm_ui$Element$Input$Above = 2;
var $mdgriffith$elm_ui$Element$Input$Label = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $mdgriffith$elm_ui$Element$Input$labelAbove = $mdgriffith$elm_ui$Element$Input$Label(2);
var $mdgriffith$elm_ui$Element$Input$OnRight = 0;
var $mdgriffith$elm_ui$Element$Input$labelRight = $mdgriffith$elm_ui$Element$Input$Label(0);
var $mdgriffith$elm_ui$Element$Input$Placeholder = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $mdgriffith$elm_ui$Element$Input$placeholder = $mdgriffith$elm_ui$Element$Input$Placeholder;
var $mdgriffith$elm_ui$Element$Input$TextInputNode = function (a) {
	return {$: 0, a: a};
};
var $mdgriffith$elm_ui$Element$Input$TextArea = {$: 1};
var $mdgriffith$elm_ui$Element$Input$autofill = A2(
	$elm$core$Basics$composeL,
	$mdgriffith$elm_ui$Internal$Model$Attr,
	$elm$html$Html$Attributes$attribute('autocomplete'));
var $mdgriffith$elm_ui$Internal$Model$Behind = 5;
var $mdgriffith$elm_ui$Element$behindContent = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, 5, element);
};
var $mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding = function (attrs) {
	var gatherSpacing = F2(
		function (attr, found) {
			if ((attr.$ === 4) && (attr.b.$ === 5)) {
				var _v2 = attr.b;
				var x = _v2.b;
				var y = _v2.c;
				if (found.$ === 1) {
					return $elm$core$Maybe$Just(y);
				} else {
					return found;
				}
			} else {
				return found;
			}
		});
	var _v0 = A3($elm$core$List$foldr, gatherSpacing, $elm$core$Maybe$Nothing, attrs);
	if (_v0.$ === 1) {
		return $mdgriffith$elm_ui$Internal$Model$NoAttribute;
	} else {
		var vSpace = _v0.a;
		return $mdgriffith$elm_ui$Element$moveUp(
			$elm$core$Basics$floor(vSpace / 2));
	}
};
var $mdgriffith$elm_ui$Element$clip = A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$overflow, $mdgriffith$elm_ui$Internal$Style$classes.c4);
var $mdgriffith$elm_ui$Element$Input$darkGrey = A3($mdgriffith$elm_ui$Element$rgb, 186 / 255, 189 / 255, 182 / 255);
var $mdgriffith$elm_ui$Element$Input$defaultTextPadding = A2($mdgriffith$elm_ui$Element$paddingXY, 12, 12);
var $mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle = _List_fromArray(
	[
		$mdgriffith$elm_ui$Element$Input$defaultTextPadding,
		$mdgriffith$elm_ui$Element$Border$rounded(3),
		$mdgriffith$elm_ui$Element$Border$color($mdgriffith$elm_ui$Element$Input$darkGrey),
		$mdgriffith$elm_ui$Element$Background$color($mdgriffith$elm_ui$Element$Input$white),
		$mdgriffith$elm_ui$Element$Border$width(1),
		$mdgriffith$elm_ui$Element$spacing(5),
		$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
		$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$shrink)
	]);
var $mdgriffith$elm_ui$Element$Input$getHeight = function (attr) {
	if (attr.$ === 8) {
		var h = attr.a;
		return $elm$core$Maybe$Just(h);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $mdgriffith$elm_ui$Internal$Model$InFront = 4;
var $mdgriffith$elm_ui$Element$inFront = function (element) {
	return A2($mdgriffith$elm_ui$Element$createNearby, 4, element);
};
var $mdgriffith$elm_ui$Element$Input$isConstrained = function (len) {
	isConstrained:
	while (true) {
		switch (len.$) {
			case 1:
				return false;
			case 0:
				return true;
			case 2:
				return true;
			case 3:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isConstrained;
			default:
				var l = len.b;
				return true;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$isStacked = function (label) {
	if (!label.$) {
		var loc = label.a;
		switch (loc) {
			case 0:
				return false;
			case 1:
				return false;
			case 2:
				return true;
			default:
				return true;
		}
	} else {
		return true;
	}
};
var $mdgriffith$elm_ui$Element$Input$negateBox = function (box) {
	return {bD: -box.bD, bZ: -box.bZ, cf: -box.cf, cn: -box.cn};
};
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $mdgriffith$elm_ui$Element$htmlAttribute = $mdgriffith$elm_ui$Internal$Model$Attr;
var $mdgriffith$elm_ui$Element$Input$isFill = function (len) {
	isFill:
	while (true) {
		switch (len.$) {
			case 2:
				return true;
			case 1:
				return false;
			case 0:
				return false;
			case 3:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isFill;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$isPixel = function (len) {
	isPixel:
	while (true) {
		switch (len.$) {
			case 1:
				return false;
			case 0:
				return true;
			case 2:
				return false;
			case 3:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
			default:
				var l = len.b;
				var $temp$len = l;
				len = $temp$len;
				continue isPixel;
		}
	}
};
var $mdgriffith$elm_ui$Element$Input$redistributeOver = F4(
	function (isMultiline, stacked, attr, els) {
		switch (attr.$) {
			case 9:
				return _Utils_update(
					els,
					{
						e: A2($elm$core$List$cons, attr, els.e)
					});
			case 7:
				var width = attr.a;
				return $mdgriffith$elm_ui$Element$Input$isFill(width) ? _Utils_update(
					els,
					{
						j: A2($elm$core$List$cons, attr, els.j),
						s: A2($elm$core$List$cons, attr, els.s),
						e: A2($elm$core$List$cons, attr, els.e)
					}) : (stacked ? _Utils_update(
					els,
					{
						j: A2($elm$core$List$cons, attr, els.j)
					}) : _Utils_update(
					els,
					{
						e: A2($elm$core$List$cons, attr, els.e)
					}));
			case 8:
				var height = attr.a;
				return (!stacked) ? _Utils_update(
					els,
					{
						j: A2($elm$core$List$cons, attr, els.j),
						e: A2($elm$core$List$cons, attr, els.e)
					}) : ($mdgriffith$elm_ui$Element$Input$isFill(height) ? _Utils_update(
					els,
					{
						j: A2($elm$core$List$cons, attr, els.j),
						e: A2($elm$core$List$cons, attr, els.e)
					}) : ($mdgriffith$elm_ui$Element$Input$isPixel(height) ? _Utils_update(
					els,
					{
						e: A2($elm$core$List$cons, attr, els.e)
					}) : _Utils_update(
					els,
					{
						e: A2($elm$core$List$cons, attr, els.e)
					})));
			case 6:
				return _Utils_update(
					els,
					{
						j: A2($elm$core$List$cons, attr, els.j)
					});
			case 5:
				return _Utils_update(
					els,
					{
						j: A2($elm$core$List$cons, attr, els.j)
					});
			case 4:
				switch (attr.b.$) {
					case 5:
						var _v1 = attr.b;
						return _Utils_update(
							els,
							{
								j: A2($elm$core$List$cons, attr, els.j),
								s: A2($elm$core$List$cons, attr, els.s),
								e: A2($elm$core$List$cons, attr, els.e),
								as: A2($elm$core$List$cons, attr, els.as)
							});
					case 7:
						var cls = attr.a;
						var _v2 = attr.b;
						var pad = _v2.a;
						var t = _v2.b;
						var r = _v2.c;
						var b = _v2.d;
						var l = _v2.e;
						if (isMultiline) {
							return _Utils_update(
								els,
								{
									B: A2($elm$core$List$cons, attr, els.B),
									e: A2($elm$core$List$cons, attr, els.e)
								});
						} else {
							var newTop = t - A2($elm$core$Basics$min, t, b);
							var newLineHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									$elm$html$Html$Attributes$style,
									'line-height',
									'calc(1.0em + ' + ($elm$core$String$fromFloat(
										2 * A2($elm$core$Basics$min, t, b)) + 'px)')));
							var newHeight = $mdgriffith$elm_ui$Element$htmlAttribute(
								A2(
									$elm$html$Html$Attributes$style,
									'height',
									'calc(1.0em + ' + ($elm$core$String$fromFloat(
										2 * A2($elm$core$Basics$min, t, b)) + 'px)')));
							var newBottom = b - A2($elm$core$Basics$min, t, b);
							var reducedVerticalPadding = A2(
								$mdgriffith$elm_ui$Internal$Model$StyleClass,
								$mdgriffith$elm_ui$Internal$Flag$padding,
								A5(
									$mdgriffith$elm_ui$Internal$Model$PaddingStyle,
									A4($mdgriffith$elm_ui$Internal$Model$paddingNameFloat, newTop, r, newBottom, l),
									newTop,
									r,
									newBottom,
									l));
							return _Utils_update(
								els,
								{
									B: A2($elm$core$List$cons, attr, els.B),
									s: A2(
										$elm$core$List$cons,
										newHeight,
										A2($elm$core$List$cons, newLineHeight, els.s)),
									e: A2($elm$core$List$cons, reducedVerticalPadding, els.e)
								});
						}
					case 6:
						var _v3 = attr.b;
						return _Utils_update(
							els,
							{
								B: A2($elm$core$List$cons, attr, els.B),
								e: A2($elm$core$List$cons, attr, els.e)
							});
					case 10:
						return _Utils_update(
							els,
							{
								B: A2($elm$core$List$cons, attr, els.B),
								e: A2($elm$core$List$cons, attr, els.e)
							});
					case 2:
						return _Utils_update(
							els,
							{
								j: A2($elm$core$List$cons, attr, els.j)
							});
					case 1:
						var _v4 = attr.b;
						return _Utils_update(
							els,
							{
								j: A2($elm$core$List$cons, attr, els.j)
							});
					default:
						var flag = attr.a;
						var cls = attr.b;
						return _Utils_update(
							els,
							{
								e: A2($elm$core$List$cons, attr, els.e)
							});
				}
			case 0:
				return els;
			case 1:
				var a = attr.a;
				return _Utils_update(
					els,
					{
						s: A2($elm$core$List$cons, attr, els.s)
					});
			case 2:
				return _Utils_update(
					els,
					{
						s: A2($elm$core$List$cons, attr, els.s)
					});
			case 3:
				return _Utils_update(
					els,
					{
						e: A2($elm$core$List$cons, attr, els.e)
					});
			default:
				return _Utils_update(
					els,
					{
						s: A2($elm$core$List$cons, attr, els.s)
					});
		}
	});
var $mdgriffith$elm_ui$Element$Input$redistribute = F3(
	function (isMultiline, stacked, attrs) {
		return function (redist) {
			return {
				B: $elm$core$List$reverse(redist.B),
				j: $elm$core$List$reverse(redist.j),
				s: $elm$core$List$reverse(redist.s),
				e: $elm$core$List$reverse(redist.e),
				as: $elm$core$List$reverse(redist.as)
			};
		}(
			A3(
				$elm$core$List$foldl,
				A2($mdgriffith$elm_ui$Element$Input$redistributeOver, isMultiline, stacked),
				{B: _List_Nil, j: _List_Nil, s: _List_Nil, e: _List_Nil, as: _List_Nil},
				attrs));
	});
var $mdgriffith$elm_ui$Element$Input$renderBox = function (_v0) {
	var top = _v0.cn;
	var right = _v0.cf;
	var bottom = _v0.bD;
	var left = _v0.bZ;
	return $elm$core$String$fromInt(top) + ('px ' + ($elm$core$String$fromInt(right) + ('px ' + ($elm$core$String$fromInt(bottom) + ('px ' + ($elm$core$String$fromInt(left) + 'px'))))));
};
var $mdgriffith$elm_ui$Internal$Model$Transparency = F2(
	function (a, b) {
		return {$: 12, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Flag$transparency = $mdgriffith$elm_ui$Internal$Flag$flag(0);
var $mdgriffith$elm_ui$Element$alpha = function (o) {
	var transparency = function (x) {
		return 1 - x;
	}(
		A2(
			$elm$core$Basics$min,
			1.0,
			A2($elm$core$Basics$max, 0.0, o)));
	return A2(
		$mdgriffith$elm_ui$Internal$Model$StyleClass,
		$mdgriffith$elm_ui$Internal$Flag$transparency,
		A2(
			$mdgriffith$elm_ui$Internal$Model$Transparency,
			'transparency-' + $mdgriffith$elm_ui$Internal$Model$floatClass(transparency),
			transparency));
};
var $mdgriffith$elm_ui$Element$Input$charcoal = A3($mdgriffith$elm_ui$Element$rgb, 136 / 255, 138 / 255, 133 / 255);
var $mdgriffith$elm_ui$Element$Input$renderPlaceholder = F3(
	function (_v0, forPlaceholder, on) {
		var placeholderAttrs = _v0.a;
		var placeholderEl = _v0.b;
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_Utils_ap(
				forPlaceholder,
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color($mdgriffith$elm_ui$Element$Input$charcoal),
							$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.b$ + (' ' + $mdgriffith$elm_ui$Internal$Style$classes.dY)),
							$mdgriffith$elm_ui$Element$clip,
							$mdgriffith$elm_ui$Element$Border$color(
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							$mdgriffith$elm_ui$Element$Background$color(
							A4($mdgriffith$elm_ui$Element$rgba, 0, 0, 0, 0)),
							$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
							$mdgriffith$elm_ui$Element$alpha(
							on ? 1 : 0)
						]),
					placeholderAttrs)),
			placeholderEl);
	});
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$html$Html$Attributes$spellcheck = $elm$html$Html$Attributes$boolProperty('spellcheck');
var $mdgriffith$elm_ui$Element$Input$spellcheck = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$spellcheck);
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $mdgriffith$elm_ui$Element$Input$value = A2($elm$core$Basics$composeL, $mdgriffith$elm_ui$Internal$Model$Attr, $elm$html$Html$Attributes$value);
var $mdgriffith$elm_ui$Element$Input$textHelper = F3(
	function (textInput, attrs, textOptions) {
		var withDefaults = _Utils_ap($mdgriffith$elm_ui$Element$Input$defaultTextBoxStyle, attrs);
		var redistributed = A3(
			$mdgriffith$elm_ui$Element$Input$redistribute,
			_Utils_eq(textInput.E, $mdgriffith$elm_ui$Element$Input$TextArea),
			$mdgriffith$elm_ui$Element$Input$isStacked(textOptions.bX),
			withDefaults);
		var onlySpacing = function (attr) {
			if ((attr.$ === 4) && (attr.b.$ === 5)) {
				var _v9 = attr.b;
				return true;
			} else {
				return false;
			}
		};
		var heightConstrained = function () {
			var _v7 = textInput.E;
			if (!_v7.$) {
				var inputType = _v7.a;
				return false;
			} else {
				return A2(
					$elm$core$Maybe$withDefault,
					false,
					A2(
						$elm$core$Maybe$map,
						$mdgriffith$elm_ui$Element$Input$isConstrained,
						$elm$core$List$head(
							$elm$core$List$reverse(
								A2($elm$core$List$filterMap, $mdgriffith$elm_ui$Element$Input$getHeight, withDefaults)))));
			}
		}();
		var getPadding = function (attr) {
			if ((attr.$ === 4) && (attr.b.$ === 7)) {
				var cls = attr.a;
				var _v6 = attr.b;
				var pad = _v6.a;
				var t = _v6.b;
				var r = _v6.c;
				var b = _v6.d;
				var l = _v6.e;
				return $elm$core$Maybe$Just(
					{
						bD: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(b - 3)),
						bZ: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(l - 3)),
						cf: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(r - 3)),
						cn: A2(
							$elm$core$Basics$max,
							0,
							$elm$core$Basics$floor(t - 3))
					});
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var parentPadding = A2(
			$elm$core$Maybe$withDefault,
			{bD: 0, bZ: 0, cf: 0, cn: 0},
			$elm$core$List$head(
				$elm$core$List$reverse(
					A2($elm$core$List$filterMap, getPadding, withDefaults))));
		var inputElement = A4(
			$mdgriffith$elm_ui$Internal$Model$element,
			$mdgriffith$elm_ui$Internal$Model$asEl,
			function () {
				var _v3 = textInput.E;
				if (!_v3.$) {
					var inputType = _v3.a;
					return $mdgriffith$elm_ui$Internal$Model$NodeName('input');
				} else {
					return $mdgriffith$elm_ui$Internal$Model$NodeName('textarea');
				}
			}(),
			_Utils_ap(
				function () {
					var _v4 = textInput.E;
					if (!_v4.$) {
						var inputType = _v4.a;
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Internal$Model$Attr(
								$elm$html$Html$Attributes$type_(inputType)),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dG)
							]);
					} else {
						return _List_fromArray(
							[
								$mdgriffith$elm_ui$Element$clip,
								$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
								$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dC),
								$mdgriffith$elm_ui$Element$Input$calcMoveToCompensateForPadding(withDefaults),
								$mdgriffith$elm_ui$Element$paddingEach(parentPadding),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								A2(
									$elm$html$Html$Attributes$style,
									'margin',
									$mdgriffith$elm_ui$Element$Input$renderBox(
										$mdgriffith$elm_ui$Element$Input$negateBox(parentPadding)))),
								$mdgriffith$elm_ui$Internal$Model$Attr(
								A2($elm$html$Html$Attributes$style, 'box-sizing', 'content-box'))
							]);
					}
				}(),
				_Utils_ap(
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Input$value(textOptions.er),
							$mdgriffith$elm_ui$Internal$Model$Attr(
							$elm$html$Html$Events$onInput(textOptions.b2)),
							$mdgriffith$elm_ui$Element$Input$hiddenLabelAttribute(textOptions.bX),
							$mdgriffith$elm_ui$Element$Input$spellcheck(textInput.K),
							A2(
							$elm$core$Maybe$withDefault,
							$mdgriffith$elm_ui$Internal$Model$NoAttribute,
							A2($elm$core$Maybe$map, $mdgriffith$elm_ui$Element$Input$autofill, textInput.G))
						]),
					redistributed.s)),
			$mdgriffith$elm_ui$Internal$Model$Unkeyed(_List_Nil));
		var wrappedInput = function () {
			var _v0 = textInput.E;
			if (_v0.$ === 1) {
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					_Utils_ap(
						(heightConstrained ? $elm$core$List$cons($mdgriffith$elm_ui$Element$scrollbarY) : $elm$core$Basics$identity)(
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.bK),
									$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dF)
								])),
						redistributed.e),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[
								A4(
								$mdgriffith$elm_ui$Internal$Model$element,
								$mdgriffith$elm_ui$Internal$Model$asParagraph,
								$mdgriffith$elm_ui$Internal$Model$div,
								A2(
									$elm$core$List$cons,
									$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
									A2(
										$elm$core$List$cons,
										$mdgriffith$elm_ui$Element$height($mdgriffith$elm_ui$Element$fill),
										A2(
											$elm$core$List$cons,
											$mdgriffith$elm_ui$Element$inFront(inputElement),
											A2(
												$elm$core$List$cons,
												$mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.dE),
												redistributed.as)))),
								$mdgriffith$elm_ui$Internal$Model$Unkeyed(
									function () {
										if (textOptions.er === '') {
											var _v1 = textOptions.dZ;
											if (_v1.$ === 1) {
												return _List_fromArray(
													[
														$mdgriffith$elm_ui$Element$text('\u00A0')
													]);
											} else {
												var place = _v1.a;
												return _List_fromArray(
													[
														A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, _List_Nil, textOptions.er === '')
													]);
											}
										} else {
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Internal$Model$unstyled(
													A2(
														$elm$html$Html$span,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class($mdgriffith$elm_ui$Internal$Style$classes.dD)
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(textOptions.er + '\u00A0')
															])))
												]);
										}
									}()))
							])));
			} else {
				var inputType = _v0.a;
				return A4(
					$mdgriffith$elm_ui$Internal$Model$element,
					$mdgriffith$elm_ui$Internal$Model$asEl,
					$mdgriffith$elm_ui$Internal$Model$div,
					A2(
						$elm$core$List$cons,
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						A2(
							$elm$core$List$cons,
							A2($elm$core$List$any, $mdgriffith$elm_ui$Element$Input$hasFocusStyle, withDefaults) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Internal$Model$htmlClass($mdgriffith$elm_ui$Internal$Style$classes.bK),
							$elm$core$List$concat(
								_List_fromArray(
									[
										redistributed.e,
										function () {
										var _v2 = textOptions.dZ;
										if (_v2.$ === 1) {
											return _List_Nil;
										} else {
											var place = _v2.a;
											return _List_fromArray(
												[
													$mdgriffith$elm_ui$Element$behindContent(
													A3($mdgriffith$elm_ui$Element$Input$renderPlaceholder, place, redistributed.B, textOptions.er === ''))
												]);
										}
									}()
									])))),
					$mdgriffith$elm_ui$Internal$Model$Unkeyed(
						_List_fromArray(
							[inputElement])));
			}
		}();
		return A3(
			$mdgriffith$elm_ui$Element$Input$applyLabel,
			A2(
				$elm$core$List$cons,
				A2($mdgriffith$elm_ui$Internal$Model$Class, $mdgriffith$elm_ui$Internal$Flag$cursor, $mdgriffith$elm_ui$Internal$Style$classes.dd),
				A2(
					$elm$core$List$cons,
					$mdgriffith$elm_ui$Element$Input$isHiddenLabel(textOptions.bX) ? $mdgriffith$elm_ui$Internal$Model$NoAttribute : $mdgriffith$elm_ui$Element$spacing(5),
					A2($elm$core$List$cons, $mdgriffith$elm_ui$Element$Region$announce, redistributed.j))),
			textOptions.bX,
			wrappedInput);
	});
var $mdgriffith$elm_ui$Element$Input$text = $mdgriffith$elm_ui$Element$Input$textHelper(
	{
		G: $elm$core$Maybe$Nothing,
		K: false,
		E: $mdgriffith$elm_ui$Element$Input$TextInputNode('text')
	});
var $author$project$Main$searchUI = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$spacing(12)
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$Input$text,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
						$mdgriffith$elm_ui$Element$Input$focusedOnLoad
					]),
				{
					bX: A2(
						$mdgriffith$elm_ui$Element$Input$labelAbove,
						_List_Nil,
						$mdgriffith$elm_ui$Element$text('Search the blog:')),
					b2: $author$project$Main$SearchChanged,
					dZ: $elm$core$Maybe$Just(
						A2(
							$mdgriffith$elm_ui$Element$Input$placeholder,
							_List_Nil,
							$mdgriffith$elm_ui$Element$text('What dost thou seeketh?'))),
					er: model.aA
				}),
				A2(
				$mdgriffith$elm_ui$Element$Input$checkbox,
				_List_Nil,
				{
					c2: model.ao,
					dw: $mdgriffith$elm_ui$Element$Input$defaultCheckbox,
					bX: A2(
						$mdgriffith$elm_ui$Element$Input$labelRight,
						_List_fromArray(
							[
								$mdgriffith$elm_ui$Element$Font$size(14)
							]),
						$mdgriffith$elm_ui$Element$text('search full text')),
					b2: $author$project$Main$ToggleFullTextSearch
				})
			]));
};
var $author$project$Main$homeBody = F3(
	function (posts, pageNumber, model) {
		var search = function () {
			var _v0 = model.aZ;
			if (!_v0) {
				return $mdgriffith$elm_ui$Element$none;
			} else {
				return A3(
					$author$project$Main$content,
					model.x,
					70,
					$author$project$Main$searchUI(model));
			}
		}();
		return A2(
			$author$project$Main$homeFrame,
			model,
			_List_fromArray(
				[
					search,
					A3(
					$author$project$Main$content,
					model.x,
					90,
					A6(
						$author$project$Main$homeContent,
						model.l,
						model.x,
						posts,
						pageNumber,
						model.aA,
						{ao: model.ao}))
				]));
	});
var $mdgriffith$elm_ui$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $mdgriffith$elm_ui$Internal$Model$AllowHover = 1;
var $mdgriffith$elm_ui$Internal$Model$Layout = 0;
var $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle = {
	cO: $elm$core$Maybe$Nothing,
	cV: $elm$core$Maybe$Nothing,
	d8: $elm$core$Maybe$Just(
		{
			aj: 0,
			ak: A4($mdgriffith$elm_ui$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			b: _Utils_Tuple2(0, 0),
			a_: 3
		})
};
var $mdgriffith$elm_ui$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 0:
					var hoverable = opt.a;
					var _v4 = record.du;
					if (_v4.$ === 1) {
						return _Utils_update(
							record,
							{
								du: $elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 1:
					var focusStyle = opt.a;
					var _v5 = record.$7;
					if (_v5.$ === 1) {
						return _Utils_update(
							record,
							{
								$7: $elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _v6 = record.dM;
					if (_v6.$ === 1) {
						return _Utils_update(
							record,
							{
								dM: $elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			$7: function () {
				var _v0 = record.$7;
				if (_v0.$ === 1) {
					return $mdgriffith$elm_ui$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _v0.a;
					return focusable;
				}
			}(),
			du: function () {
				var _v1 = record.du;
				if (_v1.$ === 1) {
					return 1;
				} else {
					var hoverable = _v1.a;
					return hoverable;
				}
			}(),
			dM: function () {
				var _v2 = record.dM;
				if (_v2.$ === 1) {
					return 0;
				} else {
					var actualMode = _v2.a;
					return actualMode;
				}
			}()
		};
	};
	return andFinally(
		A3(
			$elm$core$List$foldr,
			combine,
			{$7: $elm$core$Maybe$Nothing, du: $elm$core$Maybe$Nothing, dM: $elm$core$Maybe$Nothing},
			options));
};
var $mdgriffith$elm_ui$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 0:
				var html = el.a;
				return html($mdgriffith$elm_ui$Internal$Model$asEl);
			case 1:
				var styles = el.a.ej;
				var html = el.a.dv;
				return A2(
					html,
					mode(styles),
					$mdgriffith$elm_ui$Internal$Model$asEl);
			case 2:
				var text = el.a;
				return $mdgriffith$elm_ui$Internal$Model$textElement(text);
			default:
				return $mdgriffith$elm_ui$Internal$Model$textElement('');
		}
	});
var $mdgriffith$elm_ui$Internal$Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = $mdgriffith$elm_ui$Internal$Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _v0 = options.dM;
			if (_v0 === 1) {
				return $mdgriffith$elm_ui$Internal$Model$OnlyDynamic(options);
			} else {
				return $mdgriffith$elm_ui$Internal$Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			$mdgriffith$elm_ui$Internal$Model$toHtml,
			embedStyle,
			A4(
				$mdgriffith$elm_ui$Internal$Model$element,
				$mdgriffith$elm_ui$Internal$Model$asEl,
				$mdgriffith$elm_ui$Internal$Model$div,
				attributes,
				$mdgriffith$elm_ui$Internal$Model$Unkeyed(
					_List_fromArray(
						[child]))));
	});
var $mdgriffith$elm_ui$Internal$Model$SansSerif = {$: 1};
var $mdgriffith$elm_ui$Internal$Model$rootStyle = function () {
	var families = _List_fromArray(
		[
			$mdgriffith$elm_ui$Internal$Model$Typeface('Open Sans'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Helvetica'),
			$mdgriffith$elm_ui$Internal$Model$Typeface('Verdana'),
			$mdgriffith$elm_ui$Internal$Model$SansSerif
		]);
	return _List_fromArray(
		[
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$bgColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'bg-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0)),
				'background-color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 1, 1, 1, 0))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontColor,
			A3(
				$mdgriffith$elm_ui$Internal$Model$Colored,
				'fc-' + $mdgriffith$elm_ui$Internal$Model$formatColorClass(
					A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1)),
				'color',
				A4($mdgriffith$elm_ui$Internal$Model$Rgba, 0, 0, 0, 1))),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontSize,
			$mdgriffith$elm_ui$Internal$Model$FontSize(20)),
			A2(
			$mdgriffith$elm_ui$Internal$Model$StyleClass,
			$mdgriffith$elm_ui$Internal$Flag$fontFamily,
			A2(
				$mdgriffith$elm_ui$Internal$Model$FontFamily,
				A3($elm$core$List$foldl, $mdgriffith$elm_ui$Internal$Model$renderFontClassName, 'font-', families),
				families))
		]);
}();
var $mdgriffith$elm_ui$Element$layoutWith = F3(
	function (_v0, attrs, child) {
		var options = _v0.b3;
		return A3(
			$mdgriffith$elm_ui$Internal$Model$renderRoot,
			options,
			A2(
				$elm$core$List$cons,
				$mdgriffith$elm_ui$Internal$Model$htmlClass(
					A2(
						$elm$core$String$join,
						' ',
						_List_fromArray(
							[$mdgriffith$elm_ui$Internal$Style$classes.d1, $mdgriffith$elm_ui$Internal$Style$classes.cM, $mdgriffith$elm_ui$Internal$Style$classes.ea]))),
				_Utils_ap($mdgriffith$elm_ui$Internal$Model$rootStyle, attrs)),
			child);
	});
var $mdgriffith$elm_ui$Element$layout = $mdgriffith$elm_ui$Element$layoutWith(
	{b3: _List_Nil});
var $mdgriffith$elm_ui$Element$Font$sansSerif = $mdgriffith$elm_ui$Internal$Model$SansSerif;
var $author$project$Main$montserrat = $mdgriffith$elm_ui$Element$Font$family(
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$Font$typeface('Montserrat'),
			$mdgriffith$elm_ui$Element$Font$sansSerif
		]));
var $author$project$Main$notFound = function (model) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill),
				$mdgriffith$elm_ui$Element$spacing(24),
				$mdgriffith$elm_ui$Element$paddingEach(
				{bD: 36, bZ: 0, cf: 0, cn: 0})
			]),
		_List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$column,
				_List_fromArray(
					[
						$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
					]),
				_List_fromArray(
					[
						A2($author$project$Main$header, model, $elm$core$Maybe$Nothing),
						$author$project$Main$subheader(model.l)
					])),
				A3(
				$author$project$Main$content,
				model.x,
				70,
				A2(
					$mdgriffith$elm_ui$Element$paragraph,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$width($mdgriffith$elm_ui$Element$fill)
						]),
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$text('Hmm. What you\'re looking for does not exist. '),
							$mdgriffith$elm_ui$Element$text('Maybe someone sent you the wrong link. '),
							A2(
							$mdgriffith$elm_ui$Element$link,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Font$color(
									$author$project$Colors$link(model.l))
								]),
							{
								bX: $mdgriffith$elm_ui$Element$text('Let\'s go back home.'),
								cq: A2($elm$url$Url$Builder$absolute, _List_Nil, _List_Nil)
							})
						])))
			]));
};
var $author$project$Colors$black = A3($mdgriffith$elm_ui$Element$rgb255, 0, 0, 0);
var $author$project$Colors$primary = A2($author$project$Colors$ldSwitch, $author$project$Colors$black, $author$project$Colors$white);
var $author$project$Colors$secondary = A2($author$project$Colors$ldSwitch, $author$project$Colors$white, $author$project$Colors$black);
var $author$project$Categories$heading = A2(
	$mdgriffith$elm_ui$Element$paragraph,
	_List_Nil,
	_List_fromArray(
		[
			$mdgriffith$elm_ui$Element$text('Browse posts by category')
		]));
var $author$project$Categories$viewSlug = function (slug) {
	var _v0 = A2($author$project$Post$fromSlug, slug, $author$project$Post$all);
	if (_v0.$ === 1) {
		return $mdgriffith$elm_ui$Element$text('wrong slug! ' + slug);
	} else {
		var post = _v0.a;
		return A2(
			$mdgriffith$elm_ui$Element$el,
			_List_fromArray(
				[
					A2($mdgriffith$elm_ui$Element$paddingXY, 0, 12)
				]),
			A2($author$project$Post$preview, slug, post));
	}
};
var $author$project$Categories$viewCategoryHelp = F4(
	function (colorScheme, category, depth, showPosts) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(6)
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$paragraph,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$size(18 - (depth * 4)),
							$mdgriffith$elm_ui$Element$Region$heading(2 + depth)
						]),
					_List_fromArray(
						[
							A2(
							$mdgriffith$elm_ui$Element$link,
							_List_fromArray(
								[
									$mdgriffith$elm_ui$Element$Font$color(
									$author$project$Colors$link(colorScheme)),
									$mdgriffith$elm_ui$Element$Font$underline
								]),
							{
								bX: $mdgriffith$elm_ui$Element$text(category.w),
								cq: '/category/' + category.o
							})
						])),
					A4($author$project$Categories$viewMembers, colorScheme, category.t, depth, showPosts)
				]));
	});
var $author$project$Categories$viewMembers = F4(
	function (colorScheme, members, depth, showPosts) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(8),
					$mdgriffith$elm_ui$Element$paddingEach(
					{bD: 4, bZ: 18, cf: 0, cn: 4})
				]),
			function () {
				if (!members.$) {
					var slugs = members.a.A;
					return showPosts ? A2($elm$core$List$map, $author$project$Categories$viewSlug, slugs) : _List_fromArray(
						[$mdgriffith$elm_ui$Element$none]);
				} else {
					var subCategories = members.a.bs;
					return A2(
						$elm$core$List$map,
						function (cat) {
							return A4($author$project$Categories$viewCategoryHelp, colorScheme, cat, depth + 1, showPosts);
						},
						subCategories);
				}
			}());
	});
var $author$project$Categories$viewCategories = function (colorScheme) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(12)
			]),
		A2(
			$elm$core$List$map,
			function (cat) {
				return A4($author$project$Categories$viewCategoryHelp, colorScheme, cat, 0, false);
			},
			$author$project$Categories$categories));
};
var $author$project$Categories$view = function (colorScheme) {
	return A2(
		$mdgriffith$elm_ui$Element$column,
		_List_fromArray(
			[
				$mdgriffith$elm_ui$Element$spacing(24)
			]),
		_List_fromArray(
			[
				$author$project$Categories$heading,
				$author$project$Categories$viewCategories(colorScheme)
			]));
};
var $author$project$Categories$breadcrumbs = function (category) {
	var _v0 = A2($author$project$Categories$find, $author$project$Categories$categories, category.o);
	var path = _v0.ay;
	return path;
};
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $author$project$Categories$viewBreadcrumb = F3(
	function (colorScheme, name, url) {
		return A2(
			$mdgriffith$elm_ui$Element$row,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$paddingEach(
					{bD: 0, bZ: 0, cf: 6, cn: 0})
				]),
			_List_fromArray(
				[
					A2(
					$mdgriffith$elm_ui$Element$link,
					_List_fromArray(
						[
							$mdgriffith$elm_ui$Element$Font$color(
							$author$project$Colors$link(colorScheme))
						]),
					{
						bX: $mdgriffith$elm_ui$Element$text(name),
						cq: url
					})
				]));
	});
var $author$project$Categories$viewBreadcrumbs = F2(
	function (colorScheme, category) {
		return A2(
			$mdgriffith$elm_ui$Element$paragraph,
			_List_Nil,
			A2(
				$elm$core$List$intersperse,
				$mdgriffith$elm_ui$Element$text(':: '),
				A2(
					$elm$core$List$cons,
					A3($author$project$Categories$viewBreadcrumb, colorScheme, 'all', '/categories'),
					A2(
						$elm$core$List$map,
						function (slug) {
							return A3($author$project$Categories$viewBreadcrumb, colorScheme, slug, '/category/' + slug);
						},
						$author$project$Categories$breadcrumbs(category)))));
	});
var $author$project$Categories$viewCategory = F2(
	function (colorScheme, category) {
		return A2(
			$mdgriffith$elm_ui$Element$column,
			_List_fromArray(
				[
					$mdgriffith$elm_ui$Element$spacing(24)
				]),
			_List_fromArray(
				[
					A2($author$project$Categories$viewBreadcrumbs, colorScheme, category),
					A4($author$project$Categories$viewCategoryHelp, colorScheme, category, 0, true)
				]));
	});
var $author$project$Main$view = function (model) {
	var body = function () {
		var _v0 = model.aX;
		switch (_v0.$) {
			case 0:
				var pageNumber = _v0.a;
				return A3(
					$author$project$Main$homeBody,
					model.an,
					A2($elm$core$Maybe$withDefault, 0, pageNumber),
					model);
			case 4:
				return $author$project$Main$notFound(model);
			case 2:
				return A2(
					$author$project$Main$homeFrame,
					model,
					_List_fromArray(
						[
							A3(
							$author$project$Main$content,
							model.x,
							90,
							$author$project$Categories$view(model.l))
						]));
			case 3:
				var slug = _v0.a;
				var _v1 = $author$project$Categories$fromSlug(slug);
				if (_v1.$ === 1) {
					return $author$project$Main$notFound(model);
				} else {
					var category = _v1.a;
					return A2(
						$author$project$Main$homeFrame,
						model,
						_List_fromArray(
							[
								A3(
								$author$project$Main$content,
								model.x,
								90,
								A2($author$project$Categories$viewCategory, model.l, category))
							]));
				}
			default:
				var slug = _v0.a;
				var _v2 = A2($author$project$Post$fromSlug, slug, model.an);
				if (_v2.$ === 1) {
					return $author$project$Main$notFound(model);
				} else {
					var post = _v2.a;
					return A2($author$project$Main$articleBody, post, model);
				}
		}
	}();
	return {
		cT: _List_fromArray(
			[
				A2(
				$mdgriffith$elm_ui$Element$layout,
				_List_fromArray(
					[
						$author$project$Main$montserrat,
						$mdgriffith$elm_ui$Element$Font$color(
						$author$project$Colors$primary(model.l)),
						$mdgriffith$elm_ui$Element$Background$color(
						$author$project$Colors$secondary(model.l))
					]),
				body)
			]),
		eH: 'Unanswered'
	};
};
var $author$project$Main$main = $elm$browser$Browser$application(
	{dB: $author$project$Main$init, dS: $author$project$Main$UrlChanged, dT: $author$project$Main$LinkClicked, ek: $author$project$Main$subscriptions, eM: $author$project$Main$update, eN: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (width) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (colorScheme) {
					return $elm$json$Json$Decode$succeed(
						{l: colorScheme, x: width});
				},
				A2($elm$json$Json$Decode$field, 'colorScheme', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$int)))(0)}});}(this));