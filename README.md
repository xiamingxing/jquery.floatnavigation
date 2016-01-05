# Floatnavigation

jquery plugin for float navigation.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/xiamingxing/jquery.floatnavigation/master/dist/jquery.floatnavigation.min.js
[max]: https://raw.github.com/xiamingxing/jquery.floatnavigation/master/dist/jquery.floatnavigation.js

In your web page:

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
          ，，，，，，
        }
   });
});
</script>
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
