/**
 * Author: Meng
 * Date: 2022-08-23
 * Desc:
 */

declare class LiveData {
  
  onCreate(props: any): void;

  onShow(): void;

  getBeforeUpdate(prevProps: any, prevState: any): void;

  onUpdate(prevProps: any, prevState: any, snapshot: any): void;

  onCatch(error: Error, errorInfo: any): void;

  shouldUpdate(nextProps: any, nextState: any, nextContext: any): boolean;

  onDestroy(): void;
}

export default LiveData;
