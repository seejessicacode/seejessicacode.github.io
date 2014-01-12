---
layout: post
title:  "Jekyll can be tricky business."
date:   2013-09-07
tags:
- Jekyll
- Ruby
- Github
---

When I found out that Github was hosting pages, I wanted to create a page of my own so my place on Github would be more than numbers and commit histories. 
Blogging is not really an interest of mine but I do try to keep track of what I've learned and there's so much happening in the programming industry that it is 
difficult to keep track. I definitely don't want to write a new .html file every time I had something to say, so I started looking into content management systems. 
I've worked with Wordpress and Joomla in the past, but Github pages do not support those and their [documentation][github-pages] pointed me to [Jekyll][jekyll].

Setting up my Jekyll blog was not a simple task for a few reasons:
<ol>
	<li>Jekyll requires Ruby. Ruby doesn't play nice with Windows, which is the only brand of operating system that I use daily.</li>
	<li>If you want syntax highlighting for code snippets, you will need to install [Pygments][pygments-link]. However, in my case, Pygments kept breaking Jekyll. 
	After a couple weekends of searching, I still had no solution and chose to just discard it.</li>
	<li>Jekyll doesn't support blog tags, not really. You can add a tag attribute to a post but Jekyll does nothing to link common tags.</li>
</ol>

The first two issues are not fresh enough in my mind to clarify further but I can elaborate on implementing tags in Jekyll. I followed Charlie Park's 
instructions in ["Tags in Jekyll"][jekyll-tags] and was able to display tags as links to related posts on localhost... and only localhost. Github pages do not 
support Jekyll plugins so pages of posts by tag are not generated on the Github server.

I do not have a true solution for this issue. For now, I just build this blog locally and then copy the generated tag pages to the root directory and 
publish the changes. It's not ideal but it still beats writing these pages by hand.

[github-pages]: http://pages.github.com/
[jekyll]: http://jekyllrb.com
[pygments-link]: http://pygments.org/
[jekyll-tags]: http://charliepark.org/tags-in-jekyll/