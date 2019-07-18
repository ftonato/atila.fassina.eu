---
path: /case-of-nan
sprint: true
date: 2019-07-20
title: Not a Number
pitch: Checking for `NaN` is a minefield
keywords: ['web', 'JavaScript', 'wat', 'til']
---

```js
NaN === NaN // false
isNaN('foo') // true
Number.isNaN('foo') // false
Number.isNaN(NaN) // true
```
