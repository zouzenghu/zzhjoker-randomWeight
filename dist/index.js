import { random } from './helpers/random';
import { fillList } from './helpers/fillList';
import { judge } from './helpers/judge';
import { production } from './helpers/clap';
var randomWeight;
randomWeight = function (list) {
    var max = 0;
    var itemList = [];
    var flatten;
    list.forEach(function (obj) {
        max += obj.weight;
        itemList.push(fillList(obj));
    });
    var randomNum = random(max);
    flatten = production();
    itemList = flatten(itemList);
    return judge(list, itemList, randomNum);
};
export default randomWeight;
//# sourceMappingURL=index.js.map