/**
 * Author: Meng
 * Date: 2022-08-23
 * Desc: 
 */

import React, { useEffect, useState } from "react"

const HooksWidget = (props) => {
  const data = props.data.value;

  const [value, setValue] = useState(data);

  useEffect(() => {
    const observer = props.data;
    // 这里可以对数据包装一下，主要是对错误兼容
    observer.bind((msg) => {
      setValue(msg);
    });

    return observer.unbind;
  }, [props.data]);

  return props.child(value);
}

export default HooksWidget;