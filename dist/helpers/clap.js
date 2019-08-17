//数组拍平
export function production() {
    var newArr = [];
    return function flatten(arr) {
        for (var key in arr) {
            if (Array.isArray(arr[key])) {
                newArr.concat(flatten(arr[key]));
            }
            else {
                newArr[key] = arr[key];
            }
        }
        return newArr;
    };
}
//# sourceMappingURL=clap.js.map