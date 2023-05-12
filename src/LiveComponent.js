/**
 * Author: Meng
 * Date: 2022-08-23
 * Desc: 
 */

import React from "react";

export default class LiveComponent extends React.Component {

  constructor(props) {
    super(props);
    this._liveData = props.liveData;

    if (props.liveData && props.liveData.onLoad) {
      props.liveData.onLoad(props);
    }
  }

  componentDidCatch(error, errorInfo) {
    if (this._liveData && this._liveData.onCatch) {
      this._liveData.onCatch(error, errorInfo)
    }else {
      super.componentDidCatch(error, errorInfo);
    }
  }

  componentDidMount() {
    if (this._liveData && this._liveData.onReady) {
      this._liveData.onReady();
    }else {
      super.componentDidMount();
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this._liveData && this._liveData.getBeforeUpdate) {
      this._liveData.getBeforeUpdate(prevProps, prevState)
    }else {
      super.getSnapshotBeforeUpdate(prevProps, prevState);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this._liveData && this._liveData.onUpdate) {
      this._liveData.onUpdate(prevProps, prevState, snapshot);
    }else {
      super.componentDidUpdate(prevProps, prevState, snapshot);
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this._liveData && this._liveData.shouldUpdate) {
      return this._liveData.shouldUpdate(nextProps, nextState, nextContext);
    }else {
      return super.shouldComponentUpdate(nextProps, nextState, nextContext);
    }
  }

  componentWillUnmount() {
    if (this._liveData && this._liveData.onDestroy) {
      this._liveData.onDestroy();
    }else {
      super.componentWillUnmount();
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