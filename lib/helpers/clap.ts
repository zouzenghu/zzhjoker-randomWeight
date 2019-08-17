//数组拍平
export function production() {
  let newArr: any[string] = []
  return function flatten(arr: any): any[string] {
    for (var key in arr) {
      if (Array.isArray(arr[key])) {
        newArr.concat(flatten(arr[key]))
      } else {
        newArr[key] = arr[key]
      }
    }
    return newArr
  }
}
