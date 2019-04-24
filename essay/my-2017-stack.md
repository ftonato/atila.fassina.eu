---
path: /essay/tech-stack-2017
date: 2017-07-16T19:17:23.593Z
title: My 2017 stack 🚀
image: https://cdn-images-1.medium.com/max/1600/1*64oGqB4O9KevKTQLBUV2nw.png
mediumURL: https://medium.com/@atilafassina/my-2017-stack-e4c6a93f977
excerpt: This website stack from 2017 to 2019
keywords:
  [
    'Front End Development',
    'React',
    'Https',
    'Web Development',
    'Server Side Rendering',
  ]
---

# My 2017 stack 🚀

Recently I started refactoring my website, it has reached now its 5th stack over these its 5 years of existence. From [wordpress](https://wordpress.com) to [jekyll](https://jekyllrb.com/), passing quickly through [nunjucks](https://mozilla.github.io/nunjucks/) templates compiled first with [Grunt](https://gruntjs.com/) then with [Gulp](http://gulpjs.com/), I can say I've been through a lot of setups. Since the whole point of having a personal website for a developer is to experiment, so I think it has been serving its purpose.

As tradition goes, it's time to write about my current decisions, why I'm happy about them in comparison to what I had immediately before.

### HTTPS

Serving custom domains over [HTTPS](https://en.wikipedia.org/wiki/HTTPS) on any free plan isn't standard:

- [Gh-pages](https://pages.github.com/) doesn't support it

- [Heroku](https://heroku.com) only supports https on paid plans

- [Surge](https://surge.sh/) also requires paid plans

With [Cloudfare](https://www.cloudflare.com/) it's possible to serve HTTPS, plus, it provides you a hassle free dashboard to create subdomains, manage your **DNS**, etc.

Setting it up is a no brainer, head over there and create your free plan account. Add your domain and [Cloudfare](https://www.cloudflare.com/) will scan it for you, configuring itself automatically and then providing you with the two **nameservers** assigned to you.

Then, you move on to your Registrar. Add the **nameservers** and _bam_. Done.

Once your **DNS** has propagated (can take some time, but for me it took minutes), you can go over the **Page Rules** settings, create a new rule (_Force HTTPS_) and on the filter you can add

```
http://*.yourdomain.com*
```

Your traffic will almost instantly start being redirected to HTTPS.

### Serving

Once you successfully started using [Cloudfare](https://www.cloudflare.com/) as a proxy to your subdomain, you can start thinking about where are you going to serve your files from. From my perspective I had 3 options to consider:

- [Heroku](https://heroku.com)

I emphasise on frontend development, which means my playground (website) won't have much complicated backend logic, if any. So, yeah, let's not start something by over-engineering it.

**EDIT:** Since the time I wrote this article, I decided to move on an experiment with backend tech, therefore I reevaluated hosting my website on Heroku so I can play with [NextJS](https://github.com/zeit/next.js), what was the deal-breaker for me is that free tier puts the _dyno_ to sleep on idle hours, making the first request to take a long time. Since my website doesn't have traffic that justifies a premium account, the sleeping _dyno_ became a deal-breaker

- [Gh-Pages](https://pages.github.com/)

I'd been serving files through Gh-Pages since forever, it works fine, is nice and centralise your concerns. Versioning and serving are on the same place. Though, since I moved away from Jekyll, working with frontend static builds hasn't been as smooth as it could be.

Keeping your /dist on a separated branch then your /src is possible, but a bit tricky, the best way I know is working with subtrees. But then again, it could/should be simpler to have them separated.

- [Surge.sh](https://surge.sh)

Motivated by Separation of Concerns, I decided to try leaving only versioning to Github and using Surge to serve my statics. And I have to say: I couldn't be happier with this decision.

I simply added my /out folder to the .gitignore file, and created a deploy task on my npm scripts. Done.

Plus, if I feel like it, I can just add a hook to it and run the deploy task right after git push.

[Surge](http://surge.sh) works great and has a simple, easy to use CLI (Command Line Interface). I totally recommend you give it a try if your goal is to serve a static generated website.

**EDIT:** I still recommend you giving Surge a try if you plan on having a static website served. But, since I'm using NextJS I decided to move to [WeDeploy](https://wedeploy.com/). Now I my website isn't static anymore, having some logic working on the backend for server-side-rendering a react application, that stretches my playground and allow me to test with some NodeJS.

### Development

On my daily work I've been using [React](https://facebook.github.io/react), and I'm quite happy with the component architecture, **css-in-js** approaches and all that jazz. But a SPA (Single Page Application) never felt right for my personal website.

[NextJS](https://github.com/zeit/next.js) came along and I instantly fell in love with the idea. **Server-side Rendering** a [React](https://facebook.github.io/react) application is one of the best things that happened to frontend development lately. The framework itself is great, minimalistic yet powerful. [NextJS](https://github.com/zeit/next.js) provides you an easy to customise NodeJS server, a simple CLI, [out-of-the-box Styled-JSX](https://github.com/zeit/next.js#built-in-css-support) and, among many other things, a static website generator [as of version 3.0](https://zeit.co/blog/next3-preview). So that was my weapon of choice.

I've done some other work with [NextJS](https://github.com/zeit/next.js) and I cannot recommend it enough.

If you found this helpful, please recommend it to your network by giving me some 👏 . Also, if you feel like giving me a feedback, give me a shout on [twitter](https://twitter.com/atilafassina), I’ll appreciate that.
