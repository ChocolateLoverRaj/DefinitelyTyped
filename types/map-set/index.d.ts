// Type definitions for map-set 1.0
// Project: https://github.com/feliperohdee/map-set#readme
// Definitions by: Rajas Paranjpe <https://github.com/ChocolateLoverRaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class MapSet<K, V> extends Map<K, Set<V>> {
  set (key: K, ...values: V[]): MapSet<K, V>;
  delete (key: K, ...values: V[]): MapSet<K, V>;
  size (): number;
  size (key: K): number;
  clear (key: K): MapSet<K, V>;
  forEach (key: K, callback: (key: V, value: V, set: Set<V>) => void): void;
  onRemoveKey (callback: (key: K) => void): void;
  has (key: K, value?: V): boolean;
}

export = MapSet;
