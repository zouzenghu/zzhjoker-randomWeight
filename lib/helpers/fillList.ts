//填充数组生成权重选项
let index: number = 0
export function fillList(obj: any): any[] {
  let itemList: any[string] = []
  for (let i = 1; i <= obj.weight; i++) {
    itemList[`$${index + i}`] = obj.id
    if (i === obj.weight) {
      index += obj.weight
    }
  }
  return itemList
}
