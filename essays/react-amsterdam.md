---
path: /react-amsterdam-2017
date: 2017-04-23T13:52:07.155Z
title: React Amsterdam 2017 Review
image: https://cdn-images-1.medium.com/max/1600/1*T4CCFC7oRZI-SAINmeKkVQ.jpeg
mediumURL: https://medium.com/@atilafassina/react-amsterdam-3fcfb7e6a15
excerpt: List your medium posts anywhere.
keywords: ['JavaScript', 'React', 'Reactjs', 'Redux', 'Mobx']
---

# React Amsterdam Review — Main track

React Amsterdam was one of the biggest conferences I’ve ever been, over 1000 attendees [I don’t have the exact number, but it was said to have exceeded by the hundreds. Though it was a huge event, it never felt awfully packed, the organisers manage to have a **titan** event and it felt like a small one in terms of attention given. I felt like this event had been organised by people who care for conferences and would’ve been just another person amongst the crowd if not organising it.

Kudos for all the attention and effort that went in making this event happen and curating the line-up with excellent talks overall.

## Getting there

Something that otherwise wouldn’t be noticed, the way to the conference took advantage of the beautiful Amsterdam and put some elegance and charm on the way to the venue.

<iframe src="https://medium.com/media/fa43c30fd490e65710ed367ccab453ef" frameborder=0></iframe>

## The Venue + Infrastructure

I’m not sure what kind of place is that on regular days, it had an hangar-like vibe which brought some rough loft-like appearance. If not by the ferry ride, it was evident by the venue that React Amsterdam was showing a personality of its own.

The infrastructure was awesome, nice people, a breakfast to welcome and some nice handovers waited for us on arrival. Starting was remarkably on time even though people were arriving in waves, they manage to keep a consistent flow during check-in and everything went smoothly.

Wifi is always an issue in conferences, it’s something unavoidable, I guess. Nevertheless, for quite some time I was extremely optimistic regarding the wifi, during the biggest part of the morning connection was fluid and fast; unfortunately in the afternoon it gave in and speed/connectivity was a luxury that I didn’t experience.

## Talks

If you’re interested on the technical content of each talk, I suggest you keeping an eye on React’s Amsterdam youtube account or giving a shoutout to the speaker. I will not try to summarize the talk as they are so many and I’m afraid I wouldn’t be able to keep fareness to each individual qualities. I will not shy myself from expressing my opinion and interpretation on highlighted subjects, though. Bare in mind that my opinions are my own and may or may not be correct, by the way, if you don’t agree please comment on this very post or give me a shout on twitter, I’ll be very happy to talk to you.

Since I’m here to express my opinions, I highlighted my 3 favourite talks and lightning talk with a ⭐️ next to each title.

## Styling React/ReactNative Applications

[Max Stoiber](https://twitter.com/mxstbr) delivered a kickass talk to start the event at full-throttle. As one of the authors of [Styled Components](https://styled-components.com/) he took on the difficult task to create maintainable and scalable styles. His talk pointed out that practices, even the long consolidated ones, must be always questioned in favor of finding better patterns. For example:

- if we can make use of the full power of Javascript to write scoped styles that are unique to each component, why not?

- if each class is used only once and is tightly coupled with its component, do we really need _class ↔ styles_ mapping?

I really enjoyed this talk, and it gave me much to think about dealing with styles for component-based applications, I will definitely try [Styled Components](https://styled-components.com/), not only because of [Max](https://twitter.com/mxstbr)’s passion on the topic and towards his project, but also for the many selling points that he intelligently argued during his talk.

## How Pinterest Switched Their Template Rendering Engine to React ⭐️

I came to this talk full of expectations because it speaks directly to some of the work we’re doing at [Simplesurance](http://www.simplesurance-group.com/), [Jessica Chan](https://twitter.com/missyjcat) delivered everything that I was expecting and more.

The main topic is how they are migrating from a Python/Jinja2+JS/Nunjucks server-side rendering stack to an isomorphic application with React/NodeJS. In order to do so, they had to come up with different solutions and creating a migration step (NodeJS/Nunjucks+JS/Nunjucks) in order to get Pinterest being isomorphic before switching templates.

She also brought a bunch of solutions they’ve had to come up during this road (which is not a short one, started in 2014) and also some **metrics**. For example, how they had a performance hit in the beginning of the first switch, but now after working that and started the React switch, they’re getting gains of up **30%** perceived performance.

As I mentioned above, all this go in line with some of our aspirations at [Simplesurance](http://www.simplesurance-group.com/), and after hearing her experiences with a larger app and some of her successes in that endeavour, I’m very optimistic about the decisions we’re going for over there. Luckily soon I’ll have similar stats and stories to share. 😎

## A Real-World GraphQL Application in Production

GraphQL is something that has been on my radar for quite some time now, unfortunately I haven’t found the time to play with it yet, so you can assume I was pretty curious for this talk. [Stefano Masini](https://twitter.com/stefanomasini) did a good job showing his stack at Balsamiq and pointing out how GraphQL is just not some _cool new tool with a hype_. It actually helps you have better code and it improves your workflow by easing test coverage and test-running performance. Definitely something I’m looking forward on testing and I’ll make use of [Stefano](https://twitter.com/stefanomasini)’s experience as soon as I get to that!

## Lightning Talks

- Advanced SSR Caching with React [Robert Haritonov](https://twitter.com/operatino)

- Make Linting Great Again [Andrey Okonetchnikov](https://twitter.com/okonetchnikov)

- Generating Your Client Validation Rules Ronald van der Kooy

- Building Applications for the Studio in the Cloud at Netflix ⭐ [Feather Knee](https://twitter.com/featherart) ️

I’ll give these speakers a huge applause, it’s extremely difficult to get a message through in such a short amount of time. But I’m happy to say they were all able to do it. Special kudos to [Feather](https://twitter.com/featherart) and [Andrey](https://twitter.com/okonetchnikov) for their spot-on topics.

[Feather](https://twitter.com/featherart) showed us that you don’t need a complex stack to have a cool app. In fact, don’t overcomplicate things: if you can get by without state-managing package, then do it. Do not force [Redux](http://redux.js.org/) or [MobX](https://mobx.js.org/) on your project. Keep lean, well-written and easy to maintain. (also, she made me an extremely nice selling-point on [MobX](https://mobx.js.org/) and I’m very eager to try it out ASAP!)

[Andrey](https://twitter.com/okonetchnikov) tackled linting problems like a pro. I’ll definitely try his webhook approach in order to avoid those fix lint commits. His [lint-staged](https://github.com/okonet/lint-staged) package is also super nice and with prettier can accomplish the same linting results as [StandardJS](https://standardjs.com/) with your own rules, totally deserves a look!

## Fun With Fiber Custom Renderers

[Ken Wheeler](https://twitter.com/ken_wheeler)’s energy is contagious, he’s a natural on the stage and makes even dense topics easy to follow. If not only that, his talk walked us through [React Fiber](https://github.com/acdlite/react-fiber-architecture)’s rendering engine with some cool audio demos. It’s one of those talks you watch more than once.

## Pushing Bugs to Prod Responsibly with React and Redux

[Alex Castillo](https://twitter.com/castillo__io)’s talk was about being able to monitor your code on production in order to being able to catch bugs and issues **before** your users. In order to do show us how he did it, using React + [Redux](http://redux.js.org/), he first went through how [Redux](http://redux.js.org/) Middleware work and how to leverage their usage to create one of your own.

By creating a Middleware to catch and log errors, they manage to get all the info from a bug and even a message sometimes even before the user is able to spot there is any inconsistency at all, therefore making them an extreme responsive team.

Super awesome work, I totally will look further into it in order to gather more info from my code problems before even trying to solve them! 😀

## Test Like It’s 2017 ⭐️

I don’t know what Facebook has been feeding its employees, but looks like every time one of them takes the mic they’re off to change the world. [Michele Bertoli](https://twitter.com/MicheleBertoli)’s not an exception to this rule, he showed us a testing revamp that blew minds, knocked off hats and cracked some jaws loose. Not only that, he also delivered the best quote of the conference:

> _Best way of testing is not writing tests._

WAT?! Exactly. You can have [React-fix-it](https://github.com/MicheleBertoli/react-fix-it) write you tests. And that’s just the tip of the iceberg on his talk. He went from “Do you think testing is important?” to styleguides, documentation, coverage… everything, literally everything.

That’s another talk that I can’t wait for the video because just my personal notes won’t suffice, and I really think everyone should watch it at least once. I’ll leave you with the new code testing pyramid they’ve been using at Facebook (and that also got mentioned one more time on this event by his colleague [Forbes](https://twitter.com/forbeslindesay)).

![](https://cdn-images-1.medium.com/max/2000/1*Q1_AUcbY02an49FCkGvemA.jpeg)

## Introduction to ReactVR

Yup. That’s it, [Nik Graf](https://twitter.com/nikgraf) made a big showcase about how easy it can be to work with VR on web technologies, and how [ReactVR](https://facebook.github.io/react-vr/) make’s it just like another React SPA. It’s definitely worth checking his demos and seeing what it’s all about if you’re interested in 3D modelling and the VR hype! 😉

Personally, I’m still eager to see a real-world implementation of all this. I understand that we need to explore and experiment before, but I’m curious to see what VR is capable of other than **raw coolness**, and [Nik Graf](https://twitter.com/nikgraf) is probably the guy to keep an eye on and see what he’ll pull up next!

## Complexity: Divide and Conquer! ⭐️

[Michel Weststrate](https://twitter.com/mweststrate), one of the people behind [MobX](https://mobx.js.org/) comes to stage to attack some paradigms. He starts his talk in a very clever way, showing how _Dividing_ your adversary is well established and successful strategy to efficiently _Conquer_ them. I appreciated that very much.

> Small , isolated problems are much easier to deal with than big intertwined problems

Being **complexity** arguably the biggest adversary any software developer can find on his own code, that's his enemy of choice for the day. [Michel](https://twitter.com/mweststrate) points out that we still have our view tightly coupled to our state. Which would be going against one of the principals of Reactive Programming, being that to achieve your application to be truly reactive, we must separate the behaviour from the timing in which the behaviour shall be triggered; in other words: "Separate the **how** from the **when**".

So [Michel](https://twitter.com/mweststrate) walks us through a review of how to treat your states and the flow of your application so we can have decoupled software that doesn't even requires a view to actually works.

Truly impressive and a _must watch_ talk to every react developer, from beginners to advanced.

## Flow Typing a React Codebase

[Forbes Lindesay](https://twitter.com/forbeslindesay) comes to show the advantages of using [Flow](https://flow.org/) on your workflow. In fact, he takes a step back before even getting to it. You take another look at that pyramid for covering your code, and [Forbes](https://twitter.com/forbeslindesay) points out the importance of _Static Analysis_ in order to have a sane, maintainable and error free codebase.

Then we jump into [Flow](https://flow.org/), after pointing out the profits of *Static Analysis *it's only natural that he leverages the selling points of having* type checking*. I'll be totally honest now: I still have my doubts about how much profit you can take from type-checking JS, I'm still a bit skeptical how it actually improves your code-base and all. But [Forbes](https://twitter.com/forbeslindesay) got me to want to test it, which I believe was the goal of the first half of his talk.

Second part of the talk is about tips & caveats on using [Flow](https://flow.org/). How to workaround common issues, how to **not** workaround common issues, and how to leverage the usage of [Flow](https://flow.org/) to its maximum potential. This part was aimed to experience/advanced users of [Flow](https://flow.org/), and I believe I'll take more profit of it after starting to check it in practice.

## Surprise Talk

[Vincent Riemer](https://twitter.com/vincentriemer) and [Bruce Lane](https://twitter.com/batchass) climb up the stage to give a surprise last talk and close-up the conference in a big fashion.

[Vincent](https://twitter.com/vincentriemer) starts it up by pointing out he also has a passion for electronic music, and then goes on to showcase a very impressive side-project of his, he recreated in with React a web version of TR-808.

![](https://cdn-images-1.medium.com/max/2400/1*-hhGY4mDO1U7Yxwr1AUARA.jpeg)

The project is called [io808](https://io808.com/), he continues to go on of some of the difficulties he found working around all the state changes and the timing problems. It's definitely something to look up if you are interested in big complex multi-state React applications, electronic music or both!

Then comes [Bruce](https://twitter.com/batchass), in this electronic music vibe, he comes to a showdown of amazing skills with OpenGL shaders and electronic music on coding… **live**-coding.

And with the sound of coded-electronic-music we "fall" straight inside the after-party that takes place in the same hangar/lobby as the coffee-breaks and a very comfortable round-up for an awesome conference!

## Conclusion

React Amsterdam was the first conference I attended since moving from Brazil to Europe, and I’d say I’m off to a great start: high-level venue, high-level talks, high-level attendees. It was a very fun day, with lots of networking and information sharing. Besides the organisers I’d like point out special thanks to the speakers: [Alex Castillo](https://twitter.com/castillo__io), [Feather Knee](https://twitter.com/featherart) ️ and [Jessica Chan](https://twitter.com/missyjcat) for the nice conversations we’ve had at the lobby. And I won’t left out my colleagues [Donovan Isherwood](https://twitter.com/Donovan_TC), [João Lopes](https://github.com/lopis) and [Petro Moldovan](https://github.com/petromoldovan) for tagging along and helping me digest all this info throughout the day. Last but not least, huge thanks to [Simplesurance](http://www.simplesurance-group.com/) for providing us with this opportunity, it was awesome! ✨

### Live Streams links

- [React Native Track](https://www.youtube.com/watch?v=JTST9iPNeLU&index=1&list=PLNBNS7NRGKMHxfm0CcYNuINLdRw7r4a9M)

- [Main Track](https://www.youtube.com/watch?v=m_vUUgI0bo8&index=2&list=PLNBNS7NRGKMHxfm0CcYNuINLdRw7r4a9M)

Any kind of feedback is welcome either here on medium or directly on [twitter](https://twitter.com/atilafassina). And if you liked this article, please click on the 💚 and make it available to your followers.
