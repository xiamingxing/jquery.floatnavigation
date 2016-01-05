/*! Floatnavigation - v0.1.0 - 2016-01-05
* https://github.com/xiamingxing/jquery.floatnavigation
* Copyright (c) 2016 xiamingxing; Licensed MIT */
(function ($) {

    // Collection method.
    $.fn.floatnavigation = function (option) {

        option = $.extend({}, $.fn.floatnavigation.option, option);

        return this.each(function () {

            var itemClassName = option.itemClassName,
                cursorClassName = option.cursorClassName,
                currentClassName = option.currentClassName,
                onItemClick = option.onItemClick,
                speed = option.speed,
                currentIndex = option.defaultIndex;

            var $container = $(this).css('position', 'relative'),
                $navItems = $container.children('li').addClass(itemClassName),
                $cursor = $('<li></li>')
                    .addClass(cursorClassName)
                    .appendTo($container);

            function getItemPosition(index) {
                var $item = $navItems.eq(index),
                    parentOffset = $item.offsetParent().offset() || {},
                    itemOffset = $item.offset() || {};
                return {
                    top: itemOffset.top - parentOffset.top,
                    left: itemOffset.left - parentOffset.left,
                    height: $item.outerHeight(),
                    width: $item.outerWidth()
                };
            }

            function hoverItem(index) {
                var pos = getItemPosition(index);
                $cursor
                    .stop(true)
                    .animate({
                        top: pos.top,
                        left: pos.left,
                        width: pos.width,
                        height: pos.height
                    }, speed);
            }

            function setItemActive(index) {
                $navItems
                    .removeClass(currentClassName)
                    .eq(index)
                    .addClass(currentClassName);
                currentIndex = index;
            }

            function bindEvtListener() {
                $container.on('mouseenter', '.' + itemClassName, function () {
                    var index = $(this).index();
                    hoverItem(index);
                });

                $container.on('mouseleave', '.' + itemClassName, function (event) {
                    var relatedTarget = event.relatedTarget;
                    if (!$(relatedTarget).hasClass(itemClassName)) {
                        hoverItem(currentIndex);
                    }
                });

                $container.on('click', '.' + itemClassName, function (event) {
                    var $item = $(this);
                    var index = $item.index();
                    if (!$item.hasClass(currentClassName)) {
                        setItemActive(index);
                        if (onItemClick){
                            onItemClick(event, $item, index);
                        }
                    }
                });
            }

            bindEvtListener();
            setItemActive(currentIndex);
            hoverItem(currentIndex);
        });
    };

    // Static method default options.

    $.fn.floatnavigation.option = {
        punctuation: '1.0.0',
        cursorClassName: 'active',
        currentClassName: 'current',
        itemClassName: 'item',
        speed: 500,
        defaultIndex: 0,
        onItemClick: null
    };

}(jQuery));
