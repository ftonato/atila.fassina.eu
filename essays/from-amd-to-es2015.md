---
path: /from-amd-to-es2015
date: 2016-09-21T12:50:35.664Z
title: From AMD to ES2015
image: https://cdn-images-1.medium.com/max/1600/
mediumURL: https://medium.com/@atilafassina/from-amd-to-es2015-dbed7213ebfb
pitch: Migrating from AMD to ES2015 modules.
keywords: ['JavaScript', 'Webpack', 'Es2015', 'ES6', 'Babeljs']
---

# From AMD to ES2015

I believe the gist about how ES2015 Modules work is enough to get anybody sold on using them right now. So, on this post I'll share my experience on migrating an ES5 AMD using Require.js codebase to ES2015 using Webpack and Babel.

_Quick disclaimer: I share here my experience and opinions, you're free to use them at your own risk, but please don't consider it as a tutorial as there might be caveats I haven't encountered or your use-case may totally different! ;)_

## Strategic approach

Every time I have a big task ahead of me, I try to follow some principles and get a macro view of where I stand and where I want to be. Giving this step back before you start is what helps me to create a direct path as free of distractions as possible and have an [MVP](https://www.quora.com/What-is-a-minimum-viable-product) of what I **really** need. That lead us directly to the first step.

## [KISS](https://en.wikipedia.org/wiki/KISS_principle) your codebase

You're not only migrating code but also a whole workflow, that will bring you enough caveats for you to work on, so don't go all creative using new interesting features that you're not sure of. So, be sure of every tool you're choosing, always take preference to the ones you're already experienced. It will make easier to spot if the bug is in the compiling step, is in the new syntax or at the logic.

Also, by looking at legacy code it's really easy to get distracted with old patterns and want to start a "quick" refactoring. Seriously, this is not the time for that. Create a task, drink a coffee ([club-mate](https://en.wikipedia.org/wiki/Club-Mate) in my case) and create a task or write on a post-it or whatever you need to do to remember to get back to it **later**!

## Mind the differences

Now, there are some fundamental changes that you may keep in mind. Please, check my previous post about [ES2015 on the catches section](https://medium.com/@atilafassina/es2015-modules-101-d9977dc4d4c7#a6e5) for some ES2015 specific caveats.

Also, bare in mind that in order to transpile this into CommonJS, Babel and Webpack change all variable declarations (unless you specifically requires it to stay the same, but save it for really specific cases).

As basic rules:

- Avoid globals (seriously, if you were using them up to this point, now is the time to stop!)

- Carefull with undeclared dependencies: on other module systems it was possible to "just get things working" if you missed a direct dependency but it was declared at another place, now it will break surely.

## Migrating Old Modules

Now we're reaching the "no comeback point" of our migration, and if you did took care of the basic differences, Webpack will basically make it as smooth as you can imagine.

- Remove the function wrap, not necessary anymore.

- Don't bother with the `'use strict'`, by default every ES2015 module runs in strict mode.

- On AMD, exported variables were sent to the upper scope by a `return` statement, now you can `export` as many data (variables) as you want. Just choose the [correct syntax and declaration](https://medium.com/@atilafassina/es2015-modules-101-d9977dc4d4c7#28f8).

- If your code is changing imported variables on runtime, stop. ES2015 imported variables are `read-only`, remember that! If you really need to do that, make a copy, also for better practice, it's tricky to change imported variables, as you probably can imagine…

## Libraries

So, if you have a library that should be compiled with the Babel/Webpack set there are some keys that need to be set in your webpack.config inside the library so your namespace remain unchanged:

```js
// webpack config
output: {
  filename: 'library.js', // output compiled file
  libraryTarget: 'umd',   // which mod definitions to support
  library: 'foo',         // lib namespace
  umdNamedDefine: true    // well, if the define is named
}
```

With the above config, your library namespace will be available as _foo_ and supporting both CommonJS and AMD (which if you're using Webpack on your main project shouldn't be a concern). You just need to add the _library.js_ file as a dependency of your main project and include it where necessary as any regular module.

So, this is what I've learned when migrating my codebase from AMD to ES2015. Feel free to share your findings or give any feedback, just post them here or call me out on [twitter](https://twitter.com/atilafassina).
