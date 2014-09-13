---
title: The Case of the Chopped Title.
date: 2013-10-05
tags:
- css
- bootstrap
---

One of the setbacks I had when setting up this blog was with my site title.

I chose to show my site title in an HTML text element instead of an image, so that I wouldn't have to produce new images of various sizes every time I made a change to it. After making this switch, the title placement was always off somehow. The top of text was being cut off, and the social media icons were overlapping it. I set background colors for the HTML containers to help me identify layout issues.

{% img text-muted /img/posts/2013-10-05-The-Case-of-the-Chopped-Title/headerScreenShot.PNG 472 72 "Screenshot of my botched up site title" "title screen shot" %}

With the blue background representing the div container and the gray background representing the text element, you can see the text is too big for its container. Normally, divs automatically size to their contents, but not in this case. I also couldn't understand why my social media icons were over lapping the text element, but I learned later that what I was seeing was not necessarily the icons overlapping the text, but the text overflowing into other components.

I was baffled for a long while and in my confusion thought that I needed to relearn HTML. So I picked up ["HTML & CSS: Design and Build Websites"][html-and-css-book], and actually learned a few new things that were introduced in HTML5. Only one thing I found in this book seemed to be a possible factor in this issue, and that was <strong>leading.</strong>

> Leading (pronounced <em>ledding</em>) is a term typographers use for the vertical space between lines of text. In a typeface, the part of a letter that drops beneath the baseline is called
> a descender, while the highest point of a letter is called the ascender. Leading is measured from the bottom of the descender on one line to the top of the ascender on the next.
> Jon Duckett, author of <cite title="HTML &#38; CSS: Design and Build Websites">HTML &#38; CSS: Design and Build Websites

{% img text-muted /img/posts/2013-10-05-The-Case-of-the-Chopped-Title/leadingDemo.PNG "Image from HTML &#38; CSS: Design and Build Websites" "leading demo" %}

You can't set leading directly, but you can set font-size and line-height. The above diagram demonstrates that <code>leading = line-height - font-size</code>.

Through further CSS experimentation, I found that setting the line-height for my title div was key to fixing this issue. But why was line-height necessary? I was certain that attribute shouldn't have to be manually set.

**CSS title container**

```css
.title, .title a, .title a:hover, .title a:visited {
	font-family: fairy_strangeregular;
	font-weight: normal;
	font-size: 2.25em;
	line-height: 2.25em;
	color: #000;
	text-decoration: none;
}
```

Some of my experiments required starting over with a clean Jekyll blog setup, and those led me to find that [Bootstrap][bootstrap-3.0.0] was the cause of this "issue." I say "issue" in quotes now because Bootstrap is not really to blame, but my ignorance. Turns out that Bootstrap sets a default line-height. Maybe if I had used one of their heading tags, like <code>&#60;h1&#62;</code>, I wouldn't have had to go through all this trouble but their heading tags were not large enough for my preference in title font sizes.

**Bootstrap's CSS for default line-height**
```css
body {
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 1.428571429;
  color: #2c3e50;
  background-color: #ffffff;
}
```

This concludes the case of the chopped title, and another example of why some of my headaches are self-inflicted.

[bootstrap-3.0.0]: http://getbootstrap.com/
[html-and-css-book]: http://www.htmlandcssbook.com/
