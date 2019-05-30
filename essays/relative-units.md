---
path: /everything-is-relative
date: 2019-05-10
title: Everything is relative
pitch: Which units to choose when building an UI
keywords:
  ['Front End Development', 'Web Development', 'Responsive Design', 'CSS']
---

According to behavioural psychology, it is possible to force any individual to acquire a certain behaviour with a trigger, a motive, and a goal. Once you have a goal (eg.: make a dog drool 🐶), you estipulate what's the trigger (eg.: a bell rings 🔔); second, you offer a motivation (eg.: a juicy piece of meat 🥩). Now, it's only required to synchronize trigger (🔔) and motivation (🥩) for a certain period of time, after that, the motivation can be removed and the trigger will remain functioning (🐶).

Now, what the hell does this anectote has to do with web development?

At the pace we new tools surface, with ease taking down paradigms and replacing best practices, it's important to keep ourselves questioning the motivation to how we do things. In this case, should I never use pixels again? Should I really go `rem` / `em` for everything?

In software development we are constantly reminded there are no silver bullets, in my opinion, this isn't the exception of this rule yet.

## The bad side of pixels

HTML is 26 years old, and pixels have been around as a layout measuring unit since then. I'm not saying pixels came out with the web, but the pixels we use in the web aren't exactly the pixels we knew from before. It is on this fine print where our trust on them should start to fade.

### Pixels are not absolute

Not the ones on the web. As a matter of fact, their size vary based on a multitude of factors: screen resolution, browser renderer, and device renderer - if 3 aren't many for you, run a combination of the most common types of each and see how many cases we have at our hands.

In a nutshell, `1px` isn't the same distance every time your <abbr title="user interface">UI</abbr> loads. That all being said: how far can we rely on an "absolute unit" that isn't absolute?

## Font based units

Content is supposed to be a first-class citizen in an application. Regardless of what your sales team is telling you, we're all in the business of delivering information, **content**. In light of that, it's perfectly reasonable that our containers and boxes are sized relatively to the text. We want our content to comfortably sit surrounded by the boxes and borders we set.

Luckily, `CSS` provides us with some good tools to get by with this plan, I will save us some time and only mention the 3 main ones:

- `ch`: a typographic measure based on the length of the character `0` (zero).
- `em`: a typographic measure based on the length of the character `m`.
- `rem`: a web measure based on the `em` of the **root** element.

### `em` vs `ch`

Now that we decided to base ourselves on text-based units, we need to choose which one gets the job done in a more consistent and reliable way. In order to choose, it's required first to comprehend how each of them are defined.

### The width of the `m`

"Why the `m`?" may probably be the first question. When creating a new typeface, designers use (or _used_) a squared block (_kerning_) which served as reference to assure each character was proportionally designed in comparison to the other ones. The `m` is the only character in our entire alphabet that would touch the left and right boundaries of this box. So, `1em` is actually the maximal width of a character, regardless of which font-family it belongs to.

### Zero for relativity

The `0` does not touch any of the _kerning_ boundaries. As a matter of fact, the number zero tends to be the average width of all characters (alphanumeric) in a typeface. The `ch` is, therefore, an estimation of the character length for a specific font, hence its name (`character`).

Because the zero is an average, it becomes a more reliable unit than `em`. On the event of a font-family changing for the content, the `5ch` will continue to be the lenght of 5 characters, whilst `1em`/`1rem` may change for more or less than before. In a nutshell, `1ch` in `Times New Roman` prints a diferent distance than `1ch` in `Helvetica` which would be also different than in a `monospace` typeface.

## What about percentage?

The use of percentages is extremely powerful, but can also be tricky. Depdending on the CSS property which you're adding a value too, the percentage relates to a different measure. For padding and margin, for example, the percentage relates to its own box height or width (respectively for vertical and horizontal distances), keep in mind it also depends on the `display` property: `display: inline` elements have `height: auto`, which is invalid to calculate a fractions.

Also, if for example you're intending to set a percentage value to `width`, `heigth`, and its derivatives, the fraction will correspond to its container, so `width: 50%` is half the width of the elements container (given it has a measurable length at parsing time).

To some extent, I like to think `%` as the `em` equivalent of viewport sizes. They are both extremely powerful, but they also require a level of understanding on how CSS rendering/parsing will work and a more strategic view of how the UI elements will integrate and interact with each other.

## Viewport based units

- `vh`
- `vw`
- `vmax`
- `vmin`

## Special cases

- `line-height`
- Breakpoints
- `(min|max)-(width|height)`

---

On this essay.

## References

- [Pixels are dead](https://medium.com/@julienetienne/pixels-are-dead-faa87cd8c8b9)
- [Use rems for global sizing, use ems for local sizing](http://clagnut.com/blog/2384/)
