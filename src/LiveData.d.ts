/**
 * Author: Meng
 * Date: 2022-08-23
 * Desc:
 */

declare class LiveData<T> {
  constructor(value: T);

  update(data: T): void;

  next(data: T): void;

  // bind(func: (data: T) => void): void;
  // unbind(): void;
}

export default LiveData;
