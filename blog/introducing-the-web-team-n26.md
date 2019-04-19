---
path: /blog/introducing-the-web-team-n26
date: 2018-09-11T12:03:55.437Z
title: Introducing the Web Team at N26
image: https://cdn-images-1.medium.com/max/1600/1*z4WvigcrZN5Ut3jG-H1jaQ.png
mediumURL: https://medium.com/@atilafassina/introducing-the-web-team-738587760c5e
keywords:
  ['JavaScript', 'React', 'GraphQL', 'Test Automation', 'Server Side Rendering']
---

The web functional team is composed of 9 individuals split across different product teams. We’re responsible for the web application, the website, and the support center of _the bank you love to use_ (😉). Let’s see some data about us:

- Nationalities: Brazil, France, Germany, Latvia, United Kingdom and Ukraine.

- Gender: 5 men, 3 women, 1 non-binary person.

- Age: from 22 to 36 years old.

\*_only showing data from people who explicitly opted-in the poll_

One could say we’re a rather diverse group but we see it as a process instead of a goal. In spite of that, we do have solid beliefs when it comes to our work:

- We all take accessibility seriously.

- We are open to reevaluate any choice and process anytime. Really.

- We love refactoring.

- We’re passionate about user experience.

- We hate _bikeshedding_ but make thorough code reviews.

- We take pride in daily releases, having recently reached 350 releases in 370 days 🎉.

## Stack Overview

Our mono-repository is a platform that provides the code and infrastructure for all our Web Team projects. It's hosted on Github and according to the language stats, it's **99.4% JavaScript**. This probably doesn't mean much regarding our stack, except that we're among the big group of web developers who always bet on JS.

![repository statistics per language. JavaScript: 99.4% x Other 0.6%.](https://cdn-images-1.medium.com/max/4016/1*saIQvfGala1fKJE7SpM1rQ.png)

In our tools you'll find battle-tested frameworks and libraries like: [React](https://reactjs.org/), [Apollo](https://www.apollographql.com/), and [Jest](https://jestjs.io/). But you'll also find plenty of custom made solutions and smaller projects which simply fit the bill of what we need. Best example being our weapon of choice for CSS-in-JS: [Fela](http://fela.js.org/).

On top of all that, we have an internal style-guide created with [Storybook](https://storybook.js.org/), serving both as component documentation for ourselves and as a reference for our content editors to skim through all modules and components available to them. Our technical documentation is served with [Gitbook](https://www.gitbook.com/), boasting over 25000 words across 32 chapters.

## Testing

No test is written just for the sake of coverage. Tests are written with the actual functionality in mind,thus the appropriate test is chosen. Our infrastructure offers multiple testing options:

- Static analysis with [ESLint](https://eslint.org/) (+ [Prettier](https://prettier.io/) for coding standards)

Combining static analysis with enforced coding standard has worked very well for us and it prevents us from irrelevant opinionated discussions on top of all benefits provided by static analysis. As a bonus, this approach frees each developer to choose the toolset they want.

- Unit testing with [Jest](https://jestjs.io/)

We fully unit test all our helpers and some additional relevant methods. Essentially, everything that can be isolated in a functional unit is unit-tested. At the moment of writing this article, our repository has over 1000 tests.

- Route testing with [Supertest](https://github.com/visionmedia/supertest)

For our website, we divide routes into 2 different sets: the _indexed_ and the _unindexed_ ones. Our editors are free to create landing pages straight from our Content Management System (CMS), using our component library. At the time of this article, we have 400+ routes published, among _indexed_ and _unindexed_, temporary and permanent redirects. We’re happy to say no code reaches production if breaking any of those routes.

- End-to-end tests with [Cypress](https://www.cypress.io/)

Every section which receives a fair amount of user interaction, is important for conversions or is subjected to system integration resilience is a candidate for end-to-end testing. Currently, there's extensive coverage on N26 for Web, on the website call-to-actions and in our legal documents section.

- Accessibility tests with [React-aXe](https://github.com/dequelabs/react-axe), [Pa11y](https://github.com/pa11y/pa11y), and [outline-audit](https://github.com/edenspiekermann/outline-audit)

As previously mentioned, accessibility is something taken quite seriously within the team. We have very strict guidelines and warnings assessing our code and content during development and on the build pipeline. However, it is important to understand accessibility is a constant and cross-team effort, we reckon it's ourresponsibility as developers to enforce good practices from the web perspective.

If you liked this article, 👏 to tell your network and friends about it. Also, feel free to always reach out to [N26](https://twitter.com/N26Careers) (or [me](https://twitter.com/atilafassina) directly) on Twitter.

## Interested in joining one of our teams as we grow?

If you’d like to join us on the journey of building the mobile bank the world loves to use have a look at some of the roles we’re looking for here: [http://n26.com/careers](https://n26.com/en/careers).
