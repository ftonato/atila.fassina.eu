---
path: /binary-search-js
sprint: true
date: 2019-08-08
title: Binary Search  in JS
pitch: Part of the FUNdamental Series
keywords: ['computer science', 'JavaScript', 'interview questions']
---

Binary search is a very powerful algorithm for finding results on datasets of any size. Though, with such performance comes also one important required for it to work properly: the list **must** be sorted. Another fundamental requirement is knowing the number of items within said list, but in JavaScript-land this is a given.

### How it works

The mechanism is quite simple actually: the `array` is broken into 2 halves, which leads the program with 2 range of sorted values (already half of the size of initial set). Now, the program checks into which range of values the target value belongs.And, subsquentially it executes again until the searched value is on either end of the `array`.

### The code

Let's see how a Binary Search could be implemented in Typescript:

- `list`: the sorted `array`.
- `value`: the target value to be found.
- `start`: the `index` in which the current iteration shall commence.
- `stop`: the `index` in which the current iteration shall terminate.
- `middle`: the `index` which represents the exact half of the current list.
- `@return`: the index of the found target

```ts
const binarySearch = (
  list: number[],
  value: number,
  start = 0,
  stop: number,
  middle: number
):number {
  // `start` can be defined, but will default to `0`
  // as it is the first defined value of any array

  // if undefined, `stop` becomes the index of the last item
  stop = stop || list.length - 1
  // `middle` is  the mean between `start` and `stop`
  middle = middle || Math.floor((start + stop) / 2)

  // if middle is not the target value
  if (list[middle] !== value && start < stop) {
    if (value < list[middle]) {

      // defines the `stop` value for the next iteration
      stop = middle - 1
    } else {

      // defines the `start` value for the next iteration
      start = middle + 1
    }

     // defines the `middle` value for the next iteration
    middle = Math.floor((start + stop) / 2 )

    // binarySearch calls itself again with the newly set values
    return binarySearch(list, value, start, stop, middle)
  }

  // returns the found value
  return middle
}
```

## Shameless plug

I have a personal playground where I plan to implement some Computer Science basics in JavaScript. With good test coverage and some insights on when/why to use each concept. Check out my [insertion sort implementation at the FUNdamentals repository]https://github.com/atilafassina/fundamentals/blob/master/src/binarySearch/index.js).
