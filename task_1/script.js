if (Array.prototype.map === undefined) {
    Array.prototype.map = function (func) {
        if (typeof func !== 'function') {
            throw new Error(`${func} is not a function`);
        }
        var newArray = [];

        for (var i = 0, l = this.length; i < l; i++) {
            var element = func(this[i]);
            newArray.push(element);
        }
        return newArray;
    }
    ;
}
var arr = [5, 7, 9];
var arr2 = arr.map(function (number) {
    return number * 2;
});
console.log(arr2);