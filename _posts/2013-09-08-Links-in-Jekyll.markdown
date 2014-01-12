---
layout: post
title:  "Links in Jekyll."
date:   2013-09-08
tags:
- Jekyll
---

If you read my post ["Jekyll can be tricky business"][jekyll-tricky], then you probably noticed a broken link in my list.
After a few trial-and-error tests, I've determined that Jekyll does not process links in HTML lists.

A demonstration:

<strong>YAML code snippet:</strong>

<div><pre><code class='YAML'>---
layout: post
title:  &quot;Jekyll links example.&quot;
date:   2013-09-08
---

For more woeful tales of Jekyll, refer to my [Github Page][link-name].

Let's reference the same link to my Github page, but in an unordered list:
&lt;ul&gt;
	&lt;li&gt;[Github Page][link-name]&lt;/li&gt;
&lt;/ul&gt;

One more time but in an ordered list:
&lt;ol&gt;
	&lt;li&gt;[Github Page][link-name]&lt;/li&gt;
&lt;/ol&gt;

[link-name]: campbeja.github.io</code></pre></div>

<strong>Output:</strong>

For more woeful tales of Jekyll, refer to my [Github Page][link-name].

Let's reference the same link to my Github page, but in an unordered list:
<ul>
	<li>[Github Page][link-name]</li>
</ul>

One more time but in an ordered list:
<ol>
	<li>[Github Page][link-name]</li>
</ol>

[jekyll-tricky]: http://campbeja.github.io/2013/09/07/Jekyll-can-be-tricky-business.html
[link-name]: /