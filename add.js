"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a;
let b;
const check = (value) => {
    return typeof value === "number" ? true : false;
};
console.log(check("33"));
console.log(check("number"));
console.log(check("88"));
//namespace
var math;
(function (math) {
    function adds(a, b) {
        return a + b;
    }
    math.adds = adds;
    function subs(a, b) {
        return a - b;
    }
    math.subs = subs;
    function multi(a, b) {
        return a * b;
    }
    math.multi = multi;
    function divs(a, b) {
        return a / b;
    }
    math.divs = divs;
    function mods(a, b) {
        return a % b;
    }
    math.mods = mods;
})(math || (math = {}));
let result1 = math.adds(34, 56);
let result2 = math.subs(34, 56);
let result3 = math.multi(34, 56);
let result4 = math.divs(34, 56);
let result5 = math.mods(34, 56);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
//# sourceMappingURL=add.js.map