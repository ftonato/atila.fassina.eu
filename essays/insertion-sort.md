---
path: /insertion-sort-js
sprint: true
date: 2019-07-19
title: Insertion Sort in JS
pitch: Part of the FUNdamental Series
keywords: ['computer science', 'JavaScript', 'interview questions']
---

## What it is

It‘s a simple to implement sort algorithm. In a nutshell, Insertion Sort iterates twice through the array. First iteration corresponds to the target position, whilst second iteration is for comparison with future elements. Every time the current item is smaller than the comparison value, it is inserted in the current position and first iteration moves forward.

## When to use it

not very efficient for large data sets, but quite efficiente and powerful for small ones. It can avoid confusion by not changing the order of equal set of keys.

```ts

const insertionSort = (unsortedList: []) {

  // First iteration:
  // get the target position
  for (let i = 1; i < unsortedList.length; i++) {
    const currentItem = unsortedList[i]
    let j

    // Second iteration:
    // compare elements, assign each to new sorted position
    for (j = i; j > 0 && currentItem < unsortedList[j - 1]; j--) {
      unsortedList[j] = unsortedList[j - 1]
    }

    unsortedList[j] = currentItem
  }

  return unsortedList
}
```

## Shameless plug

I have a personal playground where I plan to implement some Computer Science basics in JavaScript. With good test coverage and some insights on when/why to use each concept. Check out my [insertion sort implementation at the FUNdamentals repository](https://github.com/atilafassina/fundamentals/blob/master/src/insertionSort/index.js).
