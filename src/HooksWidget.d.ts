/**
 * Author: Meng
 * Date: 2022-08-23
 * Desc:
 */
import React from "react";
import Observer from "./Observer";

interface HooksWidgetProps {
  data: Observer;
  child: React.ReactElement;
}

declare class HooksWidgetBase extends React.Component<HooksWidgetProps> {}

declare const HooksWidget: React.ReactElement<HooksWidgetProps> &
  typeof HooksWidgetBase;

export default HooksWidget;
