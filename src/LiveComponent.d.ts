/**
 * Author: Meng
 * Date: 2022-08-23
 * Desc:
 */

import React from "react";
import LiveData from "./LiveData";

interface LiveComponentProps {
  liveData: LiveData;
  children: React.ReactNode[] | React.ReactNode | React.DetailedHTMLProps<any, any>[] | React.DetailedHTMLProps<any, any>;
}

declare class LiveComponent extends React.Component<LiveComponentProps> {}

export default LiveComponent;
