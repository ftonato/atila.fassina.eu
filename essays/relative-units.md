---
path: /everything-is-relative
date: 2017-07-16T19:17:23.593Z
title: Everything is relative
pitch: Which units to choose when building an UI
keywords:
  ['Front End Development', 'Web Development', 'Responsive Design', 'CSS']
---

# Everything is relative

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

- `ch`
- `em`
- `rem`

## Viewport based units

- `vh`
- `vw`
- `vmax`
- `vmin`

## What about percentage?

## Special cases

- `line-height`
- Breakpoints
- `(min|max)-(width|height)`

---

On this essay.

## References

- [Pixels are dead](https://medium.com/@julienetienne/pixels-are-dead-faa87cd8c8b9)
- [Use rems for global sizing, use ems for local sizing](http://clagnut.com/blog/2384/)
