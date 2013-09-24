---
layout: post
title:  "SASS Nesting for Responsive Web Design"
date:   2013-09-15 14:45:52
image: /image/posts/sass-nesting.jpg
categories: rwd sass
---
I've already written about my idea of and ideal workflow for RWD, so here's how it's been working for me the past couple of weeks and what I'm expecting for the future of responsive styles.

We still don't have a way of specifying specific media queries for each element by pseudo-classes. If I made you curious on that one, head over to [Jonathan Neal's post](http://www.jonathantneal.com/blog/thoughts-on-media-queries-for-elements/). I can wait, but come back, please. =P

So, since we can't do that yet (and probably won't be doing so soon), SASS fell beuatifully into my workflow, saving me a lot of time, effort and organizing my code. How, you may ask (and that's the point of this article..hehe).

####SASS Nesting####

Putting all styles to each selector together is the whole point of using it. SASS Nesting makes your code more scalable and readable, therefore: maintanble, see for yourself:

<!--- sass nesting code sample -->
{% highlight sass %}
p {
	display:block;
	padding:1em;
	color:#bbb;
	font-weight:bold;
	font-size:2em;
	text-align:center;
	border: 6px solid transparent;
  &:after {
    color:whitesmoke;
		content:"Narrow me down!";
    @media all and (max-width:$m-view) {
      content:"Keep going!";
      color:firebrick;
    }
    @media all and (max-width:$s-view) {
	    content:"'"+'I changed at '+$s-view+"!'";
      color:lightslategray;
    }
  }
}
{% endhighlight %}

Once you find the selector ``#foo`` in the stylsheet, you can tweak as much as you want knowing for sure that it isn't anywhere else. That's great if you're working with a lot of people, in a lot of projects, or arriving in some new one...

When SASS compiles it, the CSS looks like this:

<!-- css compiled sample -->
{% highlight css %}
p {
  display: block;
  padding: 1em;
  color: #bbb;
  font-weight: bold;
  font-size: 2em;
  text-align: center;
  border: 6px solid transparent;
}
p:after {
  color: whitesmoke;
  content: "Narrow me down!";
}
@media all and (max-width: 55em) {
  header p:after, footer p:after {
    content: "Keep going!";
    color: firebrick;
  }
}
@media all and (max-width: 25em) {
  header p:after, footer p:after {
    content: "'I changed at 25em!'";
    color: lightslategray;
  }
}
{% endhighlight %}

Yeah, it's not as pretty as the SASS, and you may end up repeating similar media queries if you get big stylesheets with a lot of elements. But, I believe it compensates the repetition of code and rules with organization and clarity.

As I can see it, coding is more about avoiding errors than it is about performance or preferences, and that way is the one I felt more likely to be "error proof" for me. You can disagree, and if you do, let me know, we can discuss it.

You can check it out working at [this pen](http://codepen.io/atilafassina/pen/AIeaj)
