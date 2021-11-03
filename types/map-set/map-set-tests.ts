import MapSet = require('map-set');

// Set a key in constructor
// $ExpectType MapSet<boolean, string>
new MapSet(true, 'value1', 'value2', 'value3');

const mapSet = new MapSet<string, number>();

// $ExpectType MapSet<string, number>
mapSet.set('key', 234, 2342);
// $ExpectError
mapSet.set('key', '234');
// $ExpectError
mapSet.set(234);
  
// $ExpectType MapSet<string, number>
mapSet.delete('key', 234);
// $ExpectType MapSet<string, number>
mapSet.delete('key');
// $ExpectError
mapSet.delete(234);
  
// $ExpectType number
mapSet.size();
// $ExpectType number  
mapSet.size('key');
// $ExpectError
mapSet.size + 3;

// $ExpectType MapSet<string, number>
mapSet.clear();
// $ExpectType MapSet<string, number>
mapSet.clear('key');
// $ExpectError
mapSet.clear(49);

// $ExpectType boolean
mapSet.has('key');
// $ExpectType boolean
mapSet.has('key', 42);
// $ExpectError
mapSet.has();
  
mapSet.forEach((key, set, map) => {
  // $ExpectType string
  key;
  // $ExpectType Set<number>
  set;
  // $ExpectType Map<string, Set<number>>
  map;
});
mapSet.forEach('key', (value, alsoValue, set) => {
  // $ExpectType number
  value;
  // $ExpectType number
  alsoValue;
  // $ExpectType Set<number>
  set;
});
  
mapSet.onRemoveKey(key => {
  // $ExpectType string
  key;
});
// $ExpectError
mapSet.onRemoveKey();
