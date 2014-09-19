---
title: Maintaining Multiple Post Lists in Jekyll.
date: 2013-12-07
tags:
- jekyll
---

I've been working on a GitHub page for a local community that will be referenced by members of all levels of programming skills. The site will contain blog posts and a FAQ page. The blog posts and FAQs are to be separate from the home page. FAQ pages usually list a series of questions, each followed by an answer. Such a setup in Jekyll would normally require that I update the same page manually over and over as needed. I don't want to do that, so I explored the possibility of maintaining a collection FAQs just like blog posts are maintained in a Jekyll blog's [default setup][dir-struct-info].

Since I wanted blog posts and FAQs to be listed on separate pages I made two new folders, <span style="font-style: italic;">blog</span> and <span style="font-style: italic;">faq</span>. In each folder, I include an index page and a folder named
<span style="font-style: italic;">&#95; posts</span>. From this point on, I'll explain the changes made for FAQs sake and you can assume the same goes for blog posts.
{% img text-muted /hexoBlog/2013/12/07/Multiple-Posts-Lists/directory-structure.PNG "Directory structure of jekyll blog" "directory structure screenshot" %}

Inside <span style="font-style: italic;">&#95; posts</span> is where you'll keep a file for each FAQ item. Note that the assigned layout is <span style="font-style: italic;">faq_post</span>, which will be explained later.

**FAQ post file:**
```Markdown
---
layout: faq_post
title:  &quot;Is this a FAQ post?&quot;
date:   2013-12-07
categories: jekyll update
---
Why, yes it is!
```

In order for the the FAQ index page to only list FAQ items, I needed to pull posts (not pages) with <span style="font-style: italic;">faq</span> as a category. This task is handled by <code>site.categories.faq</code>. If you're asking what <code>site.categories</code> is, please refer to this short piece on [global variables in YAML Front-matter][front-matter].

**FAQ index page:**
```Markdown
---
layout: default
title: OKC Nerdy Girls - FAQS
category: faq
---
&nbsp;
&lt;div id="home"&gt;
  &lt;h1&gt;FAQs&lt;/h1&gt;
  &lt;ul class="posts"&gt;
    &#123;% for post in site.categories.faq %&#125;
    &lt;li&gt;&lt;span&gt;&#123;&#123; post.date | date_to_string &#125;&#125;&lt;/span&gt; &raquo; &lt;a href="&#123;&#123; post.url &#125;&#125;"&gt;&#123;&#123; post.title &#125;&#125;&lt;/a&gt;&lt;/li&gt;
    &#123;% endfor %&#125;
  &lt;/ul&gt;
&lt;/div&gt;
```

Next change I made to the directory/file structure was to the &#95;layouts folder where I split <span style="font-style: italic;">post.html</span> into two files, <span style="font-style: italic;">blog_post.html</span> and <span style="font-style: italic;">faq_post.html</span>. You do not need to do this unless actual the layout of blog and faq pages will differ. In my case, I wanted to keep the active navigation menu item highlighted without making sure every faq or blog post had the correct category when their layouts can manage that.
{% img text-muted /hexoBlog/2013/12/07/Multiple-Posts-Lists/post_layouts.PNG "Multiple post layout files for each separate list of posts" "post layout file list screenshot" %}

**FAQ post layout:**
```Markdown
---
layout: default
category: faq
---
&lt;h2&gt;&#123;&#123; page.title &#125;&#125;&lt;/h2&gt;
&lt;p class="meta"&gt;&#123;&#123; page.date | date_to_string &#125;&#125;&lt;/p&gt;
&nbsp;
&lt;div class="post"&gt;
&#123;&#123; content &#125;&#125;
&lt;/div&gt;
```
{% img text-muted /hexoBlog/2013/12/07/Multiple-Posts-Lists/nav-pill-highlight.PNG "Navigation pills highlighted based on page layout category" "navigation pill screenshot" %}

Ideally, I would provide screenshots of the final results but the site has not yet gone live at the time of this post. The site is open sourced so you're welcome to take a look at my [committed code in GitHub][git-commit].

[dir-struct-info]: http://jekyllrb.com/docs/structure/
[front-matter]: http://jekyllrb.com/docs/variables/
[git-commit]: https://github.com/campbeja/okcnerdygirls.github.io/tree/a29efa55590b7cc064e75fb92026f41e14aeba4e
