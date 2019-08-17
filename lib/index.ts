import { randomWeightInterface } from './types/index'
import { random } from './helpers/random'
import { fillList } from './helpers/fillList'
import { judge } from './helpers/judge'
import { production } from './helpers/clap'
let randomWeight: randomWeightInterface
randomWeight = function(list) {
  let max: number = 0
  let itemList: any[] = []
  let flatten: any
  ;(list as any[]).forEach(obj => {
    max += obj.weight
    itemList.push(fillList(obj))
  })
  let randomNum: number = random(max)
  flatten = production()
  itemList = flatten(itemList)
  return judge(list, itemList, randomNum)
}
export default randomWeight
