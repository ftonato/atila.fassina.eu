---
path: /start-yarn
date: 2016-10-12T21:28:45.073Z
title: Let's start with Yarn
image: https://cdn-images-1.medium.com/max/1600/1*m6zlwvyKm9BPeFQCKvGQEQ.png
mediumURL: https://medium.com/@atilafassina/lets-start-with-yarn-890687bb1902
excerpt: Why to give Yarn a try as your package manager.
keywords: ['JavaScript', 'NPM', 'Yarn', 'Package Management']
---

# Let's start with Yarn

[Yarn](https://yarnpkg.com/) is a new **dependency manager** created by the cool guys at Facebook and a bunch of other contributors.

## Why?

We, as developers, need to ask ourselves this question constantly. After all, our job is to solve problems, so if you start a project you need to be solving a problem somebody's having, if not you.

And that's the idea that propelled the guys at Facebook to create from scratch a new manager for their packages ([you can read it more extensively on their article](https://code.facebook.com/posts/1840075619545360/yarn-a-new-package-manager-for-javascript/)).

As [Yehuda Katz](https://twitter.com/wycats) well put in his [recent article](http://yehudakatz.com/2016/10/11/im-excited-to-work-on-yarn-the-new-js-package-manager-2/), npm client does its job reasonably well, some of you might never have bumped into a problem while working extensively with npm packages and managing them through NPM client. But there were issues to be addressed, and that's where Yarn excels.

## Main differences

- Open-source.

There's no much arguing with that, Yarn is created by the community and for the community, as you can see by its [Organisation](https://github.com/yarnpkg) on Github, it's there for you to submit issues, make pull requests, share and learn.

- Multiple registries

Yarn supports multiple registries, which means you will be able to manage your Bower Packages with the same dependency manager as your NPM Packages.

- Deterministic

Yarn assures that every time you run _yarn_ on a project it will install its dependencies on the same order, I mean, the internal structure of your _node_modules_ will always be the same, avoiding some very hard to spot bugs.

- Offline mode

Yarn works very well with caches in order to make any package once installed by you available offline.

And there's more, check the documentation to see about Network Resilience, Network Performance and [some comparisons](https://yarnpkg.com/en/compare).

## Installation

Yarn broke the process into 3 steps, making the interface with the enduser much clearer and nicer.

1. **Resolution:** Make the requests and look-up dependencies.

1. **Fetching:** Check if the dependency is available at the _Global cache_ (offline mode), if it's not, fetches from the repository and places it there to be available offline later.

1. **Linking:** Finishes everything up by bringing everything from the _Global cache_ to the _node_modules_ folder.

## Start using it!

And to start using it couldn't be any simpler:

```sh
npm i -g yarnpkg
```

Done. You have it now. [Here](https://yarnpkg.com/en/docs/migrating-from-npm) is a quick list with npm commands and their Yarn respectives.

## Freebies

I've just started playing with Yarn, and I've merely scratched the surface, but here are 2 commands that I've found super cool I recommend you to use them.

```sh
yarn clean
```

[removes unnecessary files from your dependencies](https://yarnpkg.com/en/docs/cli/clean). (it's kind of magical when you run it the first time! :P).

```sh
yarn why <package>
```

[Identify why you installed a package](https://yarnpkg.com/en/docs/cli/why). Pointing it as a sub-dependency among your modules or if directly specified by you as a dependency.

## Conclusion

I've slowly started using Yarn today, but I got to be honest, it's cli interface, and it's performance are so nice that I felt completely dragged, now I can say I've completely migrated to Yarn, let's see what happens. What about you?

_PS.: if you liked it, click on the 💚 for recommending it to people you know._
