/**
 * Author: Meng
 * Date: 2022-08-23
 * Desc: 可优化的地方
 * 1. next函数数据如果相同不做刷新
 * 2. 数据错误时如何让view层感知/处理
 */

export default class Observer {

  value = null;
  _listener = null;

  constructor(data) {
    this.value = data;
  }

  update = (data) => {
    this.next(data);
  }

  next = (data) => {
    const update = this._chilkData(data); // 这里可以自定义交验数据是否相当的规则
    if (update) {
      this.value = data;
      this._listener && this._listener(data);
    }
  }

  _chilkData = (data) => {
    return true;
  }

  bind = (func) => {
    this._listener = func;
  }

  unbind = () => {
    this._listener = null
  }
}