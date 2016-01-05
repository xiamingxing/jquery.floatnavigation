# Floatnavigation

jquery plugin for float navigation.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/xiamingxing/jquery.floatnavigation/master/dist/jquery.floatnavigation.min.js
[max]: https://raw.github.com/xiamingxing/jquery.floatnavigation/master/dist/jquery.floatnavigation.js

In your web page:

#### html

```html
<div class="f-l side-nav">
    <ul class="list clearfix">
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
      <li>item4</li>
      <li>item5</li>
      <li>item6</li>
    </ul>
</div>

```

#### javascript

```html
<script src="jquery.js"></script>
<script src="dist/jquery.floatnavigation.min.js"></script>
<script>
jQuery(function($) {
   $('.list').floatnavigation({
        cursorClassName: 'active',
        currentClassName: 'current',
        itemClassName: 'item',
        speed: 500,
        defaultIndex: 0,
        onItemClick: function (event, $item, index){
          //event listener
        }
   });
});
</script>
```

```css
    /*common*/
    html, body, div, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, p, blockquote, pre, form, input, textarea, fieldset, table, th, td {
      margin: 0;
      padding: 0;
    }

    body, button, input, select, textarea {
      font: 12px/1.5 "Î¢ÈíÑÅºÚ", sans-serif;
    }

    ul, ol {
      list-style: none;
    }

    img {
      border: none;
      vertical-align: top;
    }

    :focus {
      outline: 0;
    }

    /*float*/
    .f-l {
      float: left;
    }

    .f-r {
      float: right;
    }

    .c-b {
      clear: both;
    }

    .clear {
      clear: both;
      height: 0;
      font-size: 0;
      overflow: hidden;
    }

    .clearfix:after {
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }

    .clearfix {
      clear: both;
      zoom: 1;
    }

    .side-nav {
      height: 840px;
      width: 170px;
      font-size: 14px;
      border: 1px solid #c9c9c9;
      background-color: #fff;
    }

    .side-nav .list {
      position: relative;
      padding-top: 24px;
    }

    .side-nav .item {
      position: relative;
      height: 40px;
      padding-left: 60px;
      line-height: 40px;
      cursor: pointer;
      z-index: 10;
    }
    .side-nav .active {
      position: absolute;
      height: 40px;
      width: 98%;
      border-right: 5px solid #6bb665;
      background-color: #e5e5e5;
      z-index: 1;
    }

```

## Documentation
```javascript

$.fn.floatnavigation.option = {
    punctuation: '1.0.0',
    cursorClassName: 'active',
    currentClassName: 'current',
    itemClassName: 'item',
    speed: 500,
    defaultIndex: 0,
    onItemClick: null
};

```

## Examples
Look example click [here][herelink]

[herelink]: https://raw.githubusercontent.com/xiamingxing/jquery.floatnavigation/master/demo/floatnavigation.html

## Release History
    1.0.0
