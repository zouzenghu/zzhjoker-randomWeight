//定义接口函数接口
export interface randomWeightInterface {
  (userList: userList): {}
}
//定义参数接口声明
interface userListObj {
  id: number
  weight: number
}
interface userList {
  [index: number]: userListObj
}
