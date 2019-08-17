//取出被选中对象
export function judge(obj, itemList, num) {
    return obj.filter(function (obj) {
        if (obj.id === itemList["$" + num]) {
            return obj;
        }
    });
}
//# sourceMappingURL=judge.js.map