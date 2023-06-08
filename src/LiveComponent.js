/**
 * Author: Meng
 * Date: 2022-08-23
 * Desc: 
 */

import React from "react";

export default class LiveComponent extends React.Component {

  constructor(props) {
    super(props);
    this._liveModel = props.liveModel;

    if (props.liveModel && props.liveModel.onLoad) {
      props.liveModel.onLoad(props);
    }
  }

  componentDidCatch(error, errorInfo) {
    if (this._liveModel && this._liveModel.onCatch) {
      this._liveModel.onCatch(error, errorInfo)
    }
  }

  componentDidMount() {
    if (this._liveModel && this._liveModel.onReady) {
      this._liveModel.onReady();
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this._liveModel && this._liveModel.getBeforeUpdate) {
      this._liveModel.getBeforeUpdate(prevProps, prevState)
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this._liveModel && this._liveModel.onUpdate) {
      this._liveModel.onUpdate(prevProps, prevState, snapshot);
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this._liveModel && this._liveModel.shouldUpdate) {
      return this._liveModel.shouldUpdate(nextProps, nextState, nextContext);
    } else {
      return true;
    }
  }

  componentWillUnmount() {
    if (this._liveModel && this._liveModel.onDestroy) {
      this._liveModel.onDestroy();
    }
  }

  render() {
    const children = this.props.children;

    if (typeof children == 'function') {
      // 函数式组件
      return children();
    } else {
      // 类组件
      return children;
    }
  }
}