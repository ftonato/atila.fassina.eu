---
layout: post
title:  "The Future is here: Flexbox!"
date:   2013-07-30 16:00:52
image: /image/posts/flexbox-redpill.png
categories: rwd css
alias:[atilafassina.com/2013/07/the-future-is-here-flexbox]
---
What if I told you it’s possible to change the order of the elements and distribute the all of them accordingly to the available space? What if I told you you can centralize all elements inside a parent with only TWO CSS properties? If you don’t know what I’m talking about, it is going to be like taking Morpheus’ red pill!

Flexbox is around for quite some time (the first syntax is dated from 2009), I’ll be honest… first time I’ve heard about it was some months ago, and managed to take a good look at it a few days ago. Shame on me! But I know (or I hope!) I’m not the only lazy one around, so stick around and let’s take a look on Flexbox! It’s very interesting and it’s going to change entirely the way you code your responsive layouts!

Before you go crazy flexing your layout all around, head on to [caniuse Flexbox page](http://caniuse.com/flexbox) and take a look how’s the compatibility nowadays.

####OK, now let’s get started with Flexbox####

So, WHAT does it do?!? It basically organize your elements independent of the way they appear in yout HTML code and accordingly to the space available for them. Yes, it is THAT good!

But HOW does it do?!? Flexbox works with 2 axis. The MAIN AXIS and the CROSS AXIS. But before you go labeling “horizontal” and “vertical”, “x” and “y”, blabla… let me tell you: you set it the way it suits your project better! For instance, if you have a horizontal menu, it will be convenient that the MAIN AXIS be the HORIZONTAL one, because that is the one you’ll be tweaking more, and vice-versa.

So, just to be clear, the MAIN AXIS is the one where your content will ``FLOW``. You can ask yourself where is your content (menu items, text, images, list, whatever!) is going to grow to.

And the CROSS AXIS is the adjacent coordinates, it’s all about helping to position everything.

Now, before start flexing your content around, you need to wrap it around, and the wrapper we’re going to call Flex Container from now on. Flex Container will tell the browser that everyone of its children is going to be a Flex Item.

####So, in order to do that you set in the CSS of that element:####
{% highlight css %}
e {
    display:flex;
}
{% endhighlight %}
a display ``FLEX`` behaves like a ``BLOCK`` and an ``INSIDE-FLEX`` behaves like an ``INLINE-BLOCK`` 

- flex-direction: how are your items going to align themselves? In a ``ROW`` [left to right], in a ``COLUMN``[top to bottom] or backwards? ( ``ROW-REVERSE`` [right to left] or ``COLUMN-REVERSE`` [bottom to top]);

- flex-wrap: will it have line-breaks ``WRAP``? Or a single-line ``NOWRAP``? Or even ``WRAP-REVERSE``, to invert the direction again.

- justify-content: are they going to begin from the start border ``FLEX-START``, from the end border ``FLEX-END`` or are they going to be centered ``CENTER`` in the MAIN AXIS? You can also set SPACE-BETWEEN so items get distributed evenly in the space given, first one touching the start border, last one touching the end border. But wait! It’s not over, you can still set SPACE-AROUND, then it will calculate for you all the space left, distribute evenly between your items and set half of the size of that space for the beginning and for the end of your line! Yes!! They will be PERFECTLY centered! (a round of applause for Flexbox, everyone!);

- align-items: is pratically the same as ``JUSTIFY-CONTENT`` but for the CROSS AXIS. You can set ``FLEX-START`` (for the beginning of the CROSS AXIS), ``FLEX-END`` (for its end), ``CENTER`` (to centralize the items), ``BASELINE`` (…they go as their baselines) and ``STRETCH`` so they fill the CROSS AXIS space without disrespecting their own heights or widths.

- align-content: this is exactly the same as ``JUSTIFY-CONTENT``, even with the same values. The difference is that it works when the Flex Container has more than one line, then it sets how the lines will behave with extra space in CROSS AXIS.

Just with these properties and values, Flexbox would already be one of the most useful tools in CSS. IMHO!

But we can still tweak a little bit more with the Flex-items.

- order: The default value for this one is 1. It accepts any interger, and this value will tell you the order (doh) of the items. For example, if you have all items set with ``ORDER:2``; and one element set with ORDER:1; no matter when this one appears in the markup, it will be the first of the line (as long as they’re all children of the same Flex Container, of course). You can set manually the ``ORDER`` values one by one, also… changing as long as your canvas modify or the way it suits you best.

- flex-grow: Default is 0. This one will first ADD to the amount of parts the browser will devide the available space, and then sets the value of this property as the number of parts the element will take. (respecting the min-width and min-height values). For example: If you have 5 elements, and one of them has set ``FLEX-GROW:2;`` the available space will be divided in 7 parts, and that element will occupy 2 portions while the others will fill 1 portion each. (so there’s no point on setting a value greater than 0 for this one if you’re trying to center your elements in the MAIN AXIS).

- flex-shrink: Default is 1. Defines how many times it will shrink relativaly to the other Flex-Items when space given is negative (Flex Container inner space is less than the sum of Flex Items size). Can be given any interger as value and the keyword NONE, that, of course, computes as 0.

- flex-basis: the base value for the width BEFORE the Flex Factor distributes the available space. If no value is set to this property, it gets the AUTO value, which means it will take the same as the width. So far I believe that this property has the same effect as min-width for the Flex-Item.

- align-self: this one is only to individually override the value for ``ALIGN-ITEMS`` set in the Flex Container.

Check out the a little tweaking/demo/example, just to make things clear. When you’re done, please come back!

####Now, about PREFIXES!####

Remember, so far only Firefox and Chrome Canary are supported the unprefixed version of Flexbox, for all other major browsers (Chrome, IE10, Safari), you will need to prefix the VALUES! Which means your CSS will look like this:

{% highlight css %}
e {
    display:-webkit-flex;
    display:-ms-flex;
    display:flex;
}
{% endhighlight %}

####And now, the shorthand properties!####

- flex-flow: is for the Flex-Container, it’s the shorthand for ``FLEX-DIRECTION`` and ``FLEX-WRAP``.

{% highlight css %}
e {
    flex-flow: flex-direction-value flex-wrap-value;
}
{% endhighlight %}

- flex: is for the Flex-Item, and stands for ``FLEX-GROW``, ``FLEX-SHRINK``, ``FLEX-BASIS``.

{% highlight css %}
e {
    flex: flex-grow-value flex-shrink-value flex-basis-value;
}
{% endhighlight %}

>And that’s all folks!

Hope reading that brief article about Flexbox has helped anybody as much as it helped me writing it. Remember to check the references below if you want to keep learning about this tool.

<ul>
	<li>
		<a href="http://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">css-tricks.com/snippets/css/a-guide-to-flexbox/</a>
	</li>
	<li>
		<a href="http://vimeo.com/69531447" target="_blank">Stephen Hay’s talk on CSS Day</a>
	</li>
	<li>
		<a href="http://www.w3.org/TR/css3-flexbox/" target="_blank">CSS3 Flexbox spec on w3.org</a>
	</li>
</ul>