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
couldn't reproduce this error locally, I could not get a stack trace. So after reading [GitHub's support documentation][github-jekyll] with no help, I contacted
GitHub support to request a stack trace. After they gave me a finger waggin' for supposedly not reading said documentation before contacting them, they 
gave me this stack trace:

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

See [this][jekyll-bug]

[github-jekyll]: https://help.github.com/articles/pages-don-t-build-unable-to-run-jekyll#viewing-build-error-messages
[jekyll-bug]: http://stackoverflow.com/questions/21137096/jekyll-error-running-jekyll-serve#
