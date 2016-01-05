/*
 * floatnavigation
 * https://github.com/xiamingxing/jquery.floatnavigation
 *
 * Copyright (c) 2016 xiamingxing
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.floatnavigation = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.floatnavigation = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.floatnavigation.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.floatnavigation.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].floatnavigation = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
