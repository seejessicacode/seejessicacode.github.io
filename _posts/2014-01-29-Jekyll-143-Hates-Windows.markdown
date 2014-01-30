---
layout: post
title:  "Jekyll 1.4.3 Hates Windows (or vice versa)"
date:   2014-01-29
tags:
- Jekyll
- Windows
---

As I was adding RSS feed to this blog, I ran into some trouble. Although the my efforts were successful on both master and development branches, they 
were limited to my local machine. When I tried to push my changes to GitHub, I received the following build error:

<pre>The file `_posts/2013-09-07-Jekyll-can-be-tricky-business.markdown` contains markdown errors</pre>

Not only could I not reproduce this error locally, but the post in question was published with no issue successfully with no changes to it since! Since I
couldn't reproduce this error locally, I could not get a stack trace. Even rolling back my changes didn't get rid of this error, so after reading [GitHub's support documentation][github-jekyll] with no help, I contacted
GitHub support to request a stack trace.

<pre>
 ___________________________________________________________________________
| Maruku tells you:
+---------------------------------------------------------------------------
| Malformed HTML starting at "&lt;ol&gt;"
| ---------------------------------------------------------------------------
| &lt;ol&gt;EOF
| |---------------------------------------------------------------------------
| +--- Byte 0
| Shown bytes [0 to 4] of 4:
| &gt;&lt;ol&gt;
|
| At line 7
|       text     |I've worked with Wordpress and Joomla in the past, but Github pages do not support those and their &#91;documentation&#93;&#91;github-pages&#93; pointed me to &#91;Jekyll&#93;&#91;jekyll&#93;.|
|      empty     ||
|       text     |Setting up my Jekyll blog was not a simple task for a few reasons:|
|   raw_html --> |&lt;ol&gt;|
|       code     |      &lt;li&gt;Jekyll requires Ruby. Ruby doesn't play nice with Windows, which is the only brand of operating system that I use daily.&lt;/li&gt;|
|       code     |      &lt;li&gt;If you want syntax highlighting for code snippets, you will need to install &#91;Pygments&#93;&#91;pygments-link&#93;. However, in my case, Pygments kept breaking Jekyll. |
|       code     |      After a couple weekends of searching, I still had no solution and chose to just discard it.&lt;/li&gt;|
 ___________________________________________________________________________
| Maruku tells you:
+---------------------------------------------------------------------------
| Maruku cannot parse this block of HTML/XML:
| |&lt;ol&gt;
| &#35;&lt;REXML::ParseException: Missing end tag for 'ol' (got "html")
| Line: 4
| Position: 163
| ...
| Missing end tag for 'ol' (got "html")
| Line: 4
| Position: 163
| Last 80 unconsumed characters:
|
| Line: 4
| Position: 163
\___________________________________________________________________________
</pre>

As I looked at my source code, I clearly had an end tag for my &lt;ol&gt; list. Even with the stack trace, I still couldn't duplicate the error on my personal 
machine, preventing me viewing results of my experiments. One of my attempts to fix my GitHub repo's build error, was to delete the entire repo and try
again, a relatively extreme action. This idea was bad because it lost my commit history which would have proved that this error appeared seemingly out of
nowhere--so now I am just a crazy person. What gave me this idea came from a past issue that remains unexplained. When writing one of my earlier
posts, Jekyll couldn't build my site due to an markdown error I could not find even with the stack trace, file name, and line number. Running out of ideas, I
created another Jekyll site and just replaced the contents with those from my site and everything built and displayed without issue. Since GitHub only allows
one [user page][github-pages] per account (I assumed I'd run into other hiccups, if I tried project pages, but I should've done that before deleting a repo),
so I deleted my repo and made it again but the build error remained.

Eventually, I tried building my site from work. I already had Jekyll installed but never really used it because we don't use it at work and I'm supposed to be... working.
I needed mental break from a project, so I cloned my broken site and built it or tried to because I had finally duplicated repo server's build error! The version
of Windows 7, Ruby, and Jekyll are the same as my personal machine, so I've no idea what was up with that.

Finally being able to duplicate the build error, I came to learn that Jekyll could no long identify a closing tag for list or list item if it is not on the
same line as its opening tag.

So instead of writing an HTMl list like a normal person:
{% highlight html %}
<ol>
   <li>List item 1</li>
   <li>List item 2</li>
</ol>
{% endhighlight %}

You have to write an HTML list like so:
{% highlight html %}
<ol><li>List item 1</li><li>List item 2</li></ol>
{% endhighlight %}

This odd behaviour does not appear to apply to &lt;p&gt; or &lt;blockquotes&gt;.


See [this][jekyll-bug]

[github-jekyll]: https://help.github.com/articles/pages-don-t-build-unable-to-run-jekyll#viewing-build-error-messages
[github-pages]: https://help.github.com/articles/user-organization-and-project-pages
[jekyll-bug]: http://stackoverflow.com/questions/21137096/jekyll-error-running-jekyll-serve#
