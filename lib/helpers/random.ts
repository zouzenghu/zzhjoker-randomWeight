//生成指定范围的随机整数
export function random(limit: number): number {
  return Math.floor(Math.random() * (limit - 1 + 1) + 1)
}
