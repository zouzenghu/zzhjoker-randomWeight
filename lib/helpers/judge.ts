//取出被选中对象
export function judge(obj: any, itemList: any[string], num: number): any {
  return obj.filter((obj: any) => {
    if (obj.id === itemList[`$${num}`]) {
      return obj
    }
  })
}
