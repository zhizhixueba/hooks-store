/**
 * Author: Meng
 * Date: 2022-08-23
 * Desc:
 */
import React from "react";
import Observer from "./Observer";

interface HooksWidgetProps {
  data: Observer;
  child: React.ReactElement| React.DetailedHTMLProps<any, any>;
}

declare class HooksWidget extends React.Component<HooksWidgetProps> {}

// declare const HooksWidget: React.ReactElement<HooksWidgetProps> & typeof HooksWidgetBase;

export default HooksWidget;
