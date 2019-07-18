---
path: /nan-is-tricky
sprint: true
date: 2019-07-20
title: Not a Number
pitch: Checking for `NaN` is a minefield
keywords: ['web', 'JavaScript', 'wat', 'til']
---

# Checking NaN is tricky

First of all, it's simply not trivial to check it.

```js
NaN === NaN // false
```

This is one of those headscratchers that are like that just because. Long story short, there's a [spec](https://en.wikipedia.org/wiki/IEEE_754) for floating point numbers which determines that `NaN` values are never equal.

Then, for a long time we've had only the `isNaN()` method, which covers the above case, but it get you some unexpected results.

```js
isNaN(NaN) // true
isNaN('foo') // true
```

That's confusing. To navigate around that issue, in the ES5 days, people usually did something like:

```js
var isNaN = function(value) {
  var n = isNaN(value)
  return n !== n
}
```

Thankfully, since ES6 came around, we now have a new method within the `Number` prototype that works consistently across every case:

```js
Number.isNaN('foo') // false
Number.isNaN(NaN) // true
```

Important to note, both `isNaN` and `Number.isNaN` are available, careful not to mix them up! <span aria-label="explosion emoji">💥</span>

## References

- [`isNaN` on mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
- [`Number.isNaN` on mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
