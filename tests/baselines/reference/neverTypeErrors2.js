//// [neverTypeErrors2.ts]
function f1() {
    let x: never;
    x = 1;
    x = "abc";
    x = false;
    x = undefined;
    x = null;
    x = {};
    x();
}

function f2(): never {
    return;
}

function f3(): never {
    return 1;
}

function f4(): never {
}

for (const n of f4()) {}


//// [neverTypeErrors2.js]
function f1() {
    var x;
    x = 1;
    x = "abc";
    x = false;
    x = undefined;
    x = null;
    x = {};
    x();
}
function f2() {
    return;
}
function f3() {
    return 1;
}
function f4() {
}
for (var _i = 0, _a = f4(); _i < _a.length; _i++) {
    var n = _a[_i];
}
