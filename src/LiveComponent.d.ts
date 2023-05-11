/**
 * Author: Meng
 * Date: 2022-08-23
 * Desc:
 */

import React from "react";
import LiveData from "./LiveData";

interface LiveComponentProps {
  liveData: LiveData;
  children: React.ReactNode[] | React.ReactNode;
}

declare class LiveComponentBase extends React.PureComponent<LiveComponentProps> {}

declare const LiveComponent: React.ReactElement<LiveComponentProps> &
  typeof LiveComponentBase;

export default LiveComponent;
