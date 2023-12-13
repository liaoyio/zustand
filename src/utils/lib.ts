/**
* 产生随机整数，包含下限值，包括上限值
* @param {Number} lower 下限
* @param {Number} upper 上限
* @return {Number} 返回在下限到上限之间的一个随机整数
*/
export function randomNum(lower: number, upper: number): number {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
