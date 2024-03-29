---
path: /mapping-js
sprint: true
date: 2019-08-18
title: Objects for mapping
pitch: Options JS developers have for creating maps and dictionaries
keywords: ['JavaScript', 'Map', 'Iterables', 'ES2015']
---

Mapping `key` to `value` attributes has been done the same way in JavaScript for basically its entire existence. Chances are you either wrote or read it more times that you can count:

```js
let dictionary = {
  id: 'foo',
  url: 'bar',
  last_update: new Date()
}
```

## Caveats of Objects

Also, chances are more than once you had to transform that into an `array` to get around. You see, objects aren't really great for mapping variables because (1) they aren't iterables. Besides the obvious difficulty of iterating through an object (`Object.entries()`, `Object.keys()`, `Object.values()`), there is also an aggregated side effect of they not being iterable, you cannot check the **size** or **length** of an object.

Another important point in some use-cases is that the developer is not able to trust the **order** in which the `object` will store its keys (at least for numeric keys, where behavior can change depending on engine).

## Interlude: Weakmap

A Weakmap holds a key/value reference, but holds a weak reference between them. The point of this, is to allow it to be more easily garbage collected, so if there's no other reference to the `key`, it can be collected. This means that there's no method to retrieve size nor iterate through a **Weakmap**.

Also, it carries interesting requirements: the key cannot be of a primitive type, as a matter of fact, it **needs** to be an `object`. Though it holds a possible advantage against using an Object as a map: it holds the order of its keys.

⚠️ if you plan on using a `Weakmap`, be aware that the value of `length` will always be `0`.

[Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#Browser_compatibility)

## Map

Differently from `object`, a **map object** preserves the insertion order of its keys. And as a counter from both `Weakmap` which only accepts `object` as `key`, and `object` which only accepts `string` or `number`, any primitive type can be a `key` in a **map**.

**Maps** are not only iterables, but **enumerables**.

```js
let myMap = new Map([['foo', 'bar'], [0, 22]])

let iterator = myMap.entries()

console.log(iterator.next().value) // ['foo', 'bar']
console.log(iterator.next().value) // [0, 22]

console.log(myMap.size()) // 2
```

[Browser compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get#Browser_compatibility)

## Reference

- [WeakMap on MDN](https://mdn.io/weakmap)
- [Map on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
