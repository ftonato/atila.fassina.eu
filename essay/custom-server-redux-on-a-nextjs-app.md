---
path: /essay/custom-server-redux-nextjs
date: 2017-02-17T13:54:14.561Z
title: Custom Server & Redux on a NextJS App
image: https://cdn-images-1.medium.com/max/1600/1*BUTP4qvc65dmmCy9NUcgvQ.png
mediumURL: https://medium.com/@atilafassina/custom-server-redux-on-a-nextjs-app-d3a042ee3045
excerpt: A couple of performance tips to boost a website
keywords: ['React', 'JavaScript', 'Redux', 'Nextjs', 'Nodejs']
---

# Custom Server & Redux on a NextJS App

In case you never heard about [NextJS](https://zeit.co/blog/next), it’s a framework built to render React applications on the server-side, open-sourced and built by the awesome guys at [Zeit](https://zeit.co/).

### Quick disclaimer

As NextJS carries a lot of very cool functionalities out-of-the-box I wouldn’t recommend you using the practices described here if you’re not 100% certain you will need them.

As [Dan Abramov](undefined) brilliantly stated [You might not need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367#.lhbv0mh51), and I’ll take the right to state that you might also don’t need a custom server on your NextJS webapp.

## Redux

To get Redux working on your NextJS there’s only one big caveat that needs to be addressed: on rendering your page at the server you need to certify that you’ll create a different store on each hit made at your server, otherwise you might end up mixing data from different users.

<iframe src="https://medium.com/media/427d6b8a2f40de068e760e1aff46ed9e" frameborder=0></iframe>

By passing a boolean from the reqparameter on getInitialProps() from your component, you'll be able to identify on initStore() if you're on the client or on the server.

Additionally, for obvious reasons it’s good to check if a store hasn’t already been created if you’re on the client-side. This method assures you you’ll have one (and one only) store per user.

Taken from the [example on NextJS Repository](https://github.com/zeit/next.js/blob/master/examples/with-redux/store.js#L17-L25).

## Parameterised Routing with ExpressJS

In case you just need some simple routes between views of your app, please, don’t use this solution. NextJS brings out-of-the-box the <Link /> component that can be used to navigate across the different .js files you define as views (more on [NextJS Readme](https://github.com/zeit/next.js/#with-link)), even with a cool **prefetch** alternative.

So, when to use **Parameterised Routing** ?

First idea that comes to my mind is when you have one view that will be rendered with different states (think about a template that will be extend just to display different contents), in this case **Parameterised Routing** can be a solution for you.

### Setup Custom Server

To get parameterised routing working, you first need to setup your custom server, specify the routes for it to listen, return and the properties to be forwarded to your template. May sound complicated, but it’s very straight forward.

<iframe src="https://medium.com/media/c1d44efb79b15931f3176b9d298c8379" frameborder=0></iframe>

Above you may find a simplified snippet from an example app, as you may notice: it’s using [Express](http://expressjs.com/), though it’s not mandatory and you may find other alternatives, I strongly recommend it specially for its simplicity.

As you may be wondering, the 4th parameter on our app.render()method is the object to be passed on to our component through getInitialProps()and mate.jswill deal internally with the content to render.

### Run NextJS with a custom server

Could not be simpler, you just need to go to your package.json and change

    {
        scripts: {

    "start": "next"
        }

    }

to

    {

    scripts: {

    "start": "node server.js"

    }

    }

Assuming, of course, the server.js is at the root of your project.

## Deploy

### Now

With [Now](https://zeit.co/now) it could not be any easier, considering you have it installed globally and have a registered account, you can just type nowat your terminal. Done.

### Heroku

For deployment on [Heroku](https://dashboard.heroku.com/login) you have the very good [heroku-nextjs](https://github.com/mars/heroku-nextjs) that make it seamless as well. Of course, you will also need an active account on Heroku, then commit your changes and git push heroku master.

### Test-case Repository:

- Test App that originated this article: [https://github.com/atilafassina/next-seo-test](https://github.com/atilafassina/next-seo-test)

If you liked this article, recommend it to your network by clicking on the 💚. This also provides me with a much appreciated feedback, of course, if you feel like providing a more extended one, the comment/response section is at your service!
