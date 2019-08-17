//填充数组生成权重选项
var index = 0;
export function fillList(obj) {
    var itemList = [];
    for (var i = 1; i <= obj.weight; i++) {
        itemList["$" + (index + i)] = obj.id;
        if (i === obj.weight) {
            index += obj.weight;
        }
    }
    return itemList;
}
//# sourceMappingURL=fillList.js.map