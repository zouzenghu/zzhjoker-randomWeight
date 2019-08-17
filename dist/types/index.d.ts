export interface randomWeightInterface {
    (userList: userList): {};
}
interface userListObj {
    id: number;
    weight: number;
}
interface userList {
    [index: number]: userListObj;
}
export {};
