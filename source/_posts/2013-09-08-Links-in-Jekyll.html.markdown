---
title: Links in Jekyll.
date: 2013-09-08
tags:
- jekyll
---

If you read my post ["Jekyll can be tricky business"][jekyll-tricky], then you probably noticed a broken link in my list. After a few trial-and-error tests, I've determined that Jekyll does not process links in HTML lists.

A demonstration:

**YAML code snippet:**

```Markdown
---
layout: post
title:  &quot;Jekyll links example.&quot;
date:   2013-09-08
---
&nbsp;
For more woeful tales of Jekyll, refer to my [Github Page][link-name].
&nbsp;
Let's reference the same link to my Github page, but in an unordered list:
&lt;ul&gt;
	&lt;li&gt;[Github Page][link-name]&lt;/li&gt;
&lt;/ul&gt;
&nbsp;
One more time but in an ordered list:
&lt;ol&gt;
	&lt;li&gt;[Github Page][link-name]&lt;/li&gt;
&lt;/ol&gt;
&nbsp;
[link-name]: campbeja.github.io
```

**Output:**

For more woeful tales of Jekyll, refer to my [Github Page][link-name].

Let's reference the same link to my Github page, but in an unordered list:
<ul><li>&#91;Github Page&#93;&#91;link-name&#93;</li></ul>

One more time but in an ordered list:
<ol><li>&#91;Github Page&#93;&#91;link-name&#93;</li></ol>

[jekyll-tricky]: http://campbeja.github.io/2013/09/07/Jekyll-can-be-tricky-business.html
[link-name]: /
