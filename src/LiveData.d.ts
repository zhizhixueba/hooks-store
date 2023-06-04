/**
 * Author: Meng
 * Date: 2022-08-23
 * Desc:
 */

declare class LiveData {

  constructor(props?: any);

  onLoad(props: any): void;

  onReady(): void;

  getBeforeUpdate(prevProps: any, prevState: any): void;

  onUpdate(prevProps: any, prevState: any, snapshot: any): void;

  onCatch(error: Error, errorInfo: any): void;

  shouldUpdate(nextProps: any, nextState: any, nextContext: any): boolean;

  onDestroy(): void;

  addEvent(key: string, tag: string, callback: (data: any) => boolean|void): void;
  sendEvent(key: string, dat: any): void;
  // removeEvent(key: string, tag: string): void;
}

export default LiveData;
