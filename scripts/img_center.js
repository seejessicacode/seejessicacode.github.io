hexo.extend.tag.register('img_center', function(args) {
  // TODO: util path set to literal location on coputer, aim for relative
  var util = require('/usr/local/lib/node_modules/hexo/lib/util'),
      htmlTag = util.html_tag;

  /*
  Input/Output examples:
  {% img_center %}
  <p align="center"><img></p>

  {% img_center /img/posts/blogPostImage.png %}
  <p align="center"><img src="/img/posts/blogPostImage.png"></p>

  {% img_center class1 /img/posts/blogPostImage.png %}
  <p class="class1" align="center"><img src="/img/posts/blogPostImage.png"></p>

  {% img_center class1 /img/posts/blogPostImage.png "img alt text" %}
  <p class="class1" align="center"><img src="/img/posts/blogPostImage.png" alt="img alt text"></p>

  {% img_center class1 /img/posts/blogPostImage.png "img alt text" "img subtitle" %}
  <p class="class1" align="center"><img src="/img/posts/blogPostImage.png" alt="img alt text"><br><small><em>[img subtitle]</em></small></p>

  {% img_center class1 /img/posts/blogPostImage.png 200 "img alt text" "img subtitle" %}
  <p class="class1" align="center"><img src="/img/posts/blogPostImage.png" width="200" alt="img alt text"><br><small><em>[img subtitle]</em></small></p>

  {% img_center class1 /img/posts/blogPostImage.png 200 300 "img alt text" "img subtitle" %}
  <p class="class1" align="center"><img src="/img/posts/blogPostImage.png" width="200" height="300" alt="img alt text"><br><small><em>[img subtitle]</em></small></p>

  {% img_center class1 /img/posts/blogPostImage.png 200 300 box-shadow "img alt text" "img subtitle" %}
  <p class="class1" align="center"><img style="box-shadow: 10px 5px 5px gray;" src="/img/posts/blogPostImage.png" width="200" height="300" alt="img alt text"><br><small><em>[img subtitle]</em></small></p>
  */
  var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;
  var rMeta = /["']?([^"']+)?["']?\s*["']?([^"']+)?["']?/;

  var classes = [],
    meta = '',
    style = '',
    src,
    width,
    height,
    alt,
    title;

  for(var i = 0; i < args.length; i++) {
    var item = args[i];
    if (rUrl.test(item)) {
      src = item;
      break;
    } else {
      if (item[0] === '/') {
        src = item;
        break;
      } else {
        classes.push(item);
      }
    }
  }

  // Delete image URL and class name from arguments
  args = args.slice(i + 1);

  // Find image width and height
  if (args.length){
    if (!/\D+/.test(args[0])){
      width = args.shift();

      if (args.length && !/\D+/.test(args[0])){
        height = args.shift();
      }
    }

    // Find box-shadow flag if available
    if (args.length && /box\-shadow/.test(args[0]))
    {
      style = 'box-shadow: 10px 5px 5px gray;'
      args = args.slice(1);
    }

    meta = args.join(' ');
  }

  // Find image title and alt
  if (meta && rMeta.test(meta)){
    var match = meta.match(rMeta);
    alt = match[1];
    title = match[2];
  }

  var img_attrs = {
    style: style,
    src: src,
    width: width,
    height: height,
    alt: alt
  };

  var img_html = htmlTag('img', img_attrs);

  var title_html = '';
  if (title) {
    title_html = '<br />';
    title_html = title_html + htmlTag('small', {}, htmlTag('em', {}, '[' + title + ']'));
  }

  var test = img_html + title_html;

  var p_attrs = {
    class: classes.join(' '),
    align: 'center'
  };

  var p_html = htmlTag('p', p_attrs, test);
  return p_html;
}, false);
