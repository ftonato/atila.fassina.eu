---
layout: post
title:  "Breakpoints are broken"
date:   2013-08-11 21:45:52
image: /image/posts/breakpoints-broken.jpg
categories: rwd
---

When I first heard about crafting responsive web sites it was all about devices. Everyone involved on developing a website or a web app should argue until they find the correct breakpoints related to the primary devices they wanted to support, therefore we would have a media query for each and every kind of device and then hope for the best if manufacturers came up with another different size of screen.

####Craft a website on that premise just feels wrong, doesn’t it?!####

Although we have viewports to prevent small screens with giant resolutions to mess up our beautifully crafted experience, media queries used to do some pretty bad damage on desktop and laptop browsers when zoomed [ctrl+ || cmd+], media queries set in pixels couldn’t understand the view shrinking and all those hours of effort were falling down as a house of cards (so dramatic!). But we found our way throught that: media queries in ``em``, fully supported by all browsers (IE8+), when users zoom directly in the browser, font-size is affected, therefore ``em`` default value also changes and media queries can respond!

>One can learn CSS in one day, but would take a lifetime to master!

And it could not be more true! Simplicity of CSS is what makes it so difficult, we can do pretty much everything on the stylesheet and it still works. But that leads to unscalable and hard to manage code. Back then, responsive web design was about requesting different styles for each device-view and all to the same HTML, we could roughly translate that to having 2 or 3 websites in one.

####Atomic Design, saving the workflow!####

While I was trying to manage all that conflicting concepts [a lot of styles into a site and scalable, clean CSS], I read and watched Brad Frost talking about Atomic Web Design. And, OMG! That made sense! It was all I was needing and thinking about but wasn’t able to formalize into a rationale.

####If you are interested about Atomic Web Design, you should head to Brad Frost’s blog and watch his presentation, I’ll just summarize it here.####

Atomic Web Design thinks a web application as an organism, as an organism we can break it down into smaller functional pieces, until we get that indivisible piece that we can call ATOM in our metaphor. Working with that smaller component we can make independent styles for each small component, making it easy to re-use it all over the application and preventing from starting a cascade mess when we implement the media queries for different viewports.

####It started to make sense, but wasn’t perfect yet…####

Going on with that line of thought, recently I read an article (which was the final bit of motivation I needed to put it together and write this little piece of thought) by Ben Callahan. And, again, as Atomic Design blew my mind in thinking that was exactly what was missing in my workflow and I couldn’t figure it out, this new idea did it again. I was confused without it and now things kind of ‘clicked’ together and started making even more sense and looking easier to be done than before.

>There is no breakpoint.

Of course there’s not!!!! How could I expect a footer or a header to break as many times as a navigation?! I couldn’t because I shoudn’t. As Martin Luther King would say if he was a developer: “All components are equal!”, which means that they deserve freedom on deciding WHEN they’ll need another style and HOW. And then I’ll quote [Brad Frost quoting Stephen Hay](http://bradfrostweb.com/blog/post/atomic-web-design/):

>We’re not designing pages, we’re designing systems of components.

So, here’s the plan: we design each component the way it should be. And, as the viewport changes, and you feel like they need another style, you do that! Simple as that. That way, we can have all our navigation styles in one part of the stylesheet, instead of having the small screen styles up at the top, and other viewport styles after all of that. That way, when coming back to your code, you won’t feel like Gandalf in Moria (watch the Fellowship of The Ring [NOW!] if you couldn’t understand that quote)

So, really, am I too dumb on realizing that just now? Seriously! Because, it just seems too obvious now. If you’re having any kind of trouble managing your Responsive Web Desing approach, you should try that.

#####References#####
<ul class="references">
	<li>
		<a href="http://vimeo.com/67476280" target="_blank">Atomic Design – beyond tellerrand 2013 – Brad Frost</a>
	</li>
	<li>
		<a href="http://bradfrostweb.com/blog/post/atomic-web-design/" target="_blank">Atomic Design – Brad Frost</a>
	</li>
	<li>
		<a href="http://seesparkbox.com/foundry/there_is_no_breakpoint" target="_blank">There is no breakpoint – Ben Callahan</a>
	</li>
</ul>