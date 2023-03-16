/**
 * Author: Meng
 * Date: 2023-
 * Desc: 
 * 1.可以加一些自定义的函数，或做一些特定功能
 */

export default class Store {

  onCreate = (props) => { }

  onShow = () => { }

  getBeforeUpdate = (prevProps, prevState) => { }

  onUpdate = (prevProps, prevState, snapshot) => { }

  onCatch = (error, errorInfo) => { }

  shouldUpdate = (nextProps, nextState, nextContext) => { }

  onDestroy = () => { }

}