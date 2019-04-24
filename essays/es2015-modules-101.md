---
path: /es2015-modules-101
date: 2016-09-11T17:32:54.272Z
title: ES2015 Modules 101
image: https://cdn-images-1.medium.com/max/1600/
mediumURL: https://medium.com/@atilafassina/es2015-modules-101-d9977dc4d4c7
excerpt: A brief overview on how to use ES2015 modules.
keywords: ['JavaScript", "ES6", "Es2015']
---

# ES2015 Modules 101

I've been playing around with ES2015 Modules constantly for some months now. At Sparwelt we've finally finished migrating all our projects from AMD to the new ES2015 standard — of course, with a great help from Webpack and BabelJS, but let's leave that to an eventual later post.

Although I've had something I would call a late start, some information wasn't exactly easy to find and documentation at some points may have confused me. So, I'll write down some tips and concepts I'd like to have found sooner than later to provide an smoother beginning (and possibly to give you that last push to start).

## import and exporting

To keep things simple, consider there are 4 ways of carrying data across your modules. We are going to classify those ways based on the effect they have on the module where they are imported.

- **Named exports** (a constant)

  import { variable } from './module.js';

I see this as the most concise and common use of a module, this variable could carry actually any kind of information you wish to _export_ from *module.js. *The export statement is also quite straightforward and simple, check it out:

    export const foo = 'a constant here and wherever else I want';

While we're on this, let's have it said that a single _import/export_ statement can carry multiple variables. As in:

```js
// -- module.js
/* ... */
export { foo, bar, baz }

// -- main.js
import { foo, bar, baz } from './module.js'
```

- **Default Exports** (usually an _anonymous function_ or a _class)_

  import MyClass from './Class.js';

This would be the second most used way, and probably the most necessary to keep your code organised and with its concerns separated. If by the _import_ the difference isn't explicit, let's first check the _export_ before going deeper on the why.

```js
export default class {
  // ...
}
```

As you can see, there's another _keyword_ on the statement. And that means there can be only one _default_ export per module. You can combine this type of _export_ with the one mentioned above, therefore you're able to _import_ the same module in different ways along your code — as long as you use _export default_ only **ONCE** per module. It would look something like the following:

```js
import MyClass, { foo, bar, baz } from './module.js'
```

- The entire content of the file as an object

```js
import \* as Module from './module.js';
```

This code, brings the entire content (upper scoped variables, functions, etc) from the given module and encapsulates it in the *Module *object, in that way, the variable *foo *present in* module.js *would be accessible through as a property of this imported object (_Module.foo_)

- Nothing. Only execute whatever code is in the file.

```js
import './module.js'
```

In this way, no content from our _module.js_ will be available, though, when your _import_ statement is evaluated, the code inside the file will run.

## alias

I believe it's common sense that one of the main criteria to have good, maintainable code is to increase the readability of this given code.

Personally, I like my code to be as self-explanatory as possible, allowing my team members to deduce the "how"s and the "why"s just by reading the code itself, relying on comments just as a last resort for those parts where I wasn't able to make it clean and neat.

So, now that we've covered how to carry the data around, we can also rename it to make sure its name is coherent with the functionality it provides in the context it's imported. It's simple as pie:

    import oldName as newName from './module.js';
    import { foo as bar } from './module.js';

Done. And as I said before, good code is self-explanatory.

## Combine declarations

As you may have deducted or seen by now, _import_ declarations can be mixed to simplify your code, basically what will tell you how many _import_ declarations you need is the number of files you need to make use of. Some examples are below:

```js
import * as All, { foo as bar } from './mod1.js';
import Class, { var1, var2, var3 as baz } from './mod2.js';
import SomeDefault, * as Everyone from './mod3.js';
```

## Catches

- All imported views (variables, functions, etc) are _read-only_.

- ES2015 Modules support cyclic-dependencies out-of-the-box. (though relying on them would be a code-smell most likely)

- All _imports_ are and must-be top levelled

- _imports_ are always [hoisted](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)\*

Hopefully this was useful for you and encouraged you to start playing with this new syntax. If you have any feedback or questions feel free to comment here or call me up on twitter, I'll be happy to help! ;)
