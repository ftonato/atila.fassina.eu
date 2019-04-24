---
path: /introducing-blogium
date: 2016-10-07T10:11:00.683Z
title: Introducing Blogium
image: https://cdn-images-1.medium.com/max/1600/1*9lKf1_GJ_OtAYuiJCSsCKQ.png
mediumURL: https://medium.com/@atilafassina/introducing-blogium-d6ee1a343919
excerpt: List your medium posts anywhere.
keywords: ['JavaScript', 'Web Development', 'Medium', 'Blogging', 'Writing']
---

**_EDIT_**: this project is currently **DEPRECATED**. Please, refer to [Blogium-Service](https://github.com/atilafassina/blogium-service), you'll soon find examples on using it together with vanilla JS, as Blogium was supposed to be, plus with the most common JS Frameworks.

_Soon to come a follow-up about [Blogium-Service](https://github.com/atilafassina/blogium-service)._

What if I told you that a **~3Kb script can turn your static website into a blog, **requiring only one configuration line from you?

Yes, in simple terms and thanks to Medium, that's what [\*Blogium](http://atilafassina.com/blogium)\* does. ;)

## How?

[\*Blogium](http://atilafassina.com/blogium) _works more as an rss reader_ than anything else\*. You provide your information on the configuration object (at least your Medium username) and it will fetch your rss **xml**, convert with [RSStoJSON](http://rss2json.com/) API and then render it in a default template (if you choose to use it), or deliver to you as a JSON object so you can render it the way it suits you best.

Out-of-the-box [\*Blogium](http://atilafassina.com/blogium)\* also comes with a infinite scroll feature, you set a limit (default is 5) of posts per view, and renders them 5 by 5 (don't worry, still only one request, posts are cached).

## But, why Medium?

There's a number of reasons for it, I'll try to keep succinct as I list them:

- Responsive dashboard with a cool app the helps you publish your stories anywhere you please

- SEO friendly responsive interface. No need to hassle your head around mark-up optimizations, link-building, etc, etc…

- Easily notify your network you've publish something.

And, of course, Medium is cool and a very well-thought service.

[\*Blogium](http://atilafassina.com/blogium)\* was born on my intention to have my personal website ([atilafassina.com](http://atilafassina.com)) as a personal hub of my posts, projects, etc.

## Ok. How do I use it now?

You can install it as a dependency on your project with Bower or NPM, or also just link it as an external script.

To launch it, just instantiate _Blogium_ class:

```js
const blog = new Blogium({
  username: '@my-username'
})
```

Done. This will launch the request, and serve your posts. You can let _Blogium_ handle that with the default config, or make more advanced adjustments by adding another layer for rendering the posts.

> For a more extensive explanation, please refer to [\*Blogium project page](http://atilafassina.com/blogium).\*

## It's missing something

For sure it's still missing a lot, there's much work to be done from tests coverage to new features.

If you are a developer and feel like helping, the project is completely open-source on [github](https://github.com/atilafassina/blogium) and any help is much appreciated.
