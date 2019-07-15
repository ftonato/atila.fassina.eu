---
path: /choosing-tools
date: 2019-06-16
title: Choosing the best tools
pitch: Be pragmatic when choosing a toolset
keywords:
  [
    'Front End Development',
    'Web Development',
    'Code Architecture',
    'Scalability',
  ]
---

The speed with which new tools and practices spawn in the web development world can be a bit daunting. If you don't take all the advices with a pinch of salt, you mind find yourself switching tools and workflows faster than you can deliver projects. That is definitely not good, and although we should not be afraid of refactoring our code, we still ought to be cautious when deciding for a switch.

As most of us, I also have been part of discussions, <abbr title="Request for Comment">RFCs</abbr>, and other decision-making processes. Without a proper track and clear priorities, discussion tends to run wild and we lose sight of what is really important: delivering the best product. In the following essay, I intend to share how I try to guide my thinking when advocating towards the adoption or dismissal of a tool. Regardless if in a big team, small team, or talking to myself.

## Necessary disclaimer

The following opinions are what I have found out that work for me, in any way I am suggesting anyone to follow it blindly. If anything, you should take these ideas with the same critic view you need at any architectural decision within your project/workflow.

## The criteria

As a mental model, I tend to divide the criteria in two categories:

1. Imperative: The ones that are too important to be simply removed, if something happens along the way, you will want to _roll-forward_ because rollingback would bring considerable headache. Examples.: React, Webpack, Babel.

2. Undoable: tools which are easy to remove. Sometimes we figure something is not great beyond the point of rolling back, so being able to replace the tool for a similar one would be an important aspect of the decision process. Examples: Lighthouse, aXe, MomentJS (arguebly).

Judging by those examples, it is very plausible that the criteria shifts rank dependending on the case and the feature to be aggregated. I will share the my own criteria here, but bare in mind that even I would eventually switch the order on that list to tailor a specific use-case.

### 1. Reliability

Whether switching a tool, paradigms, or changing approaches completely, it's really important to keep an eye on how ease-of-mind the new direction will give you, as a developer. Can you trust this new approach is reliable to the point it can do _at least_ the same tasks as the previous one?

If adding a complete new feature, usually reliability will speak to the **hard requirements** of your product. You can skim those out usually from the <abbr title="minimum viable product">MVP</abbr> requirements, or the basic functionalities described for your product.

### 2. User Experience

In an ideal world, changes to an application would only impact the <abbr title="user experience">UX</abbr> positively. Nevertheless, occasionaly there situations we face where changes are imposed and they impact the overall experience of the user. Such cases can be either from legal requirements, directly from the clients or some intrinsic business rule on your product.

Regardless, it is our job to make sure _if_ the impact of the change would be negative, to attenuate and consider it as a very big tradeoff. In the end of the day, nothing will hold users/clients as much as a good experience and it's quite impressive how "small issues" can build-up as deal-breakers under the consumers perspective.

### 3. Usability

Usability is quite a broad term, one could argue it overlaps quite a bit with the abovementioned **User Experience**. For the purpose of this article, I decided to comprise under the Usability umbrella the following criteria:

- usage intuitivity: how easily can your feature be used without prior knowledge or study by anyone

- <abbr title="accessibility">A11Y</abbr>: how it impacts support of assistive technologies within your application.

- user story: how positively it impacts the complete user journey of your application.

### 4. Perceived Performance

Your application speed eventually boils down to how your audience will perceive it. Perceived Performance doesn't care how, what, or even _if_ you optimised your code and connections. It's all about how the user will notice.

In other words:

> Perceived performance, in computer engineering, refers to how quickly a software feature appears to perform its task. The concept applies mainly to user acceptance aspects.

<caption>

[Perceived Performance at Wikipedia](https://en.wikipedia.org/wiki/Perceived_performance)

</caption>

Obviously, it's needless to point out the importance of this benchmark for your product success, therefore you should protect it against any change that would impact it negatively.

### 5. (Un)Plugability

_Unplugability_ is an important aspect of any integration, specially to a third party tool. The industry as a whole moves at a thrilling fast pace, on one hand, the plethora of new options to try and learn is amazing; but on the other, better practices are constantly emerging.

The ability to move on from a tool needs to be considered when adopting, no one wants to get stuck with a piece of third party legacy code that's there only because it's too hard to get rid off.

In other situations, one may just regret an adoption for a change in the scene. A new feature request comes along which isn't supported by the chosen tool, an issue is found with a specific aspect of the tool and a switch becomes neccessary, etc.

You need be to always be ready to part ways with pieces of code you cannot control.

### 6. Raw Performance

Does the change impacts any other aspect of performance, even if imperceivable by the enduser? For example:

- Less requests or processing under the hood
- Less external dependencies
- Faster processing

### 7. Developer Experience

Does the change makes a developer task more pleasuring? This criteria is usually a good _tie-break_ point, whenever the other tradeoffs balance themselves out between competiting approaches. Most of the times, developer experience is sure to tilt things towards a direction.

---

On this essay, I tried to offer a quick highlight on how I tend to weight the criteria of choosing technologies in a pragmatic way. Each criteria should be considered an individual block and the order they're ranked depends greatly on the context of the product.

---

Did I forget any important criteria? Please, reach out and share.
