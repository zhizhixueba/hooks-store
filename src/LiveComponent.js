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

    if (props.liveData != null) {
      props.liveData.onLoad(props);
    }
  }

  componentDidCatch(error, errorInfo) {
    if (props.liveData) {
      props.liveData.onCatch(error, errorInfo)
    }
  }

  componentDidMount() {
    if (props.liveData) {
      props.liveData.onReady();
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (props.liveData) {
      props.liveData.getBeforeUpdate(prevProps, prevState)
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (props.liveData) {
      props.liveData.onUpdate(prevProps, prevState, snapshot);
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (props.liveData) {
      return props.liveData.shouldUpdate(nextProps, nextState, nextContext);
    }else {
      return super.shouldComponentUpdate(nextProps, nextState, nextContext);
    }
  }

  componentWillUnmount() {
    if (props.liveData) {
      props.liveData.onDestroy();
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