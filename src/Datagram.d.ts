/**
 * Author: Meng
 * Date: 2023-
 * Desc: 
 */

declare class Datagram<T> {
  constructor(data: T);

  next(data: T): void;

  bind(func: (data: T) => void): void;

  unbind(): void;
}

export default Datagram;
