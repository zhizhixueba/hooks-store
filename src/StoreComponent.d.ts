/**
 * Author: Meng
 * Date: 2023-
 * Desc: 
 */

import React from "react";
import Store from "./Store";

interface StoreComponentProps {
  store: Store;
  children: React.ReactNode[] | React.ReactNode;
}

declare class StoreComponent extends React.PureComponent<StoreComponentProps> {}

export default StoreComponent;