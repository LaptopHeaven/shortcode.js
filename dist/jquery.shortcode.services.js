// Generated by CoffeeScript 1.3.3
(function() {

  $.fn.shortcode.services = {
    overview: function(options, el) {
      var $markup;
      options = $.extend({
        target: "h2",
        "class": "overview"
      }, options);
      $markup = $("<nav class='" + options["class"] + "'>");
      $(options.target, el).each(function() {
        var id, text;
        text = $(this).text();
        id = text.toLowerCase().replace(/[^\s\w]/g, '').replace(/\s/g, '-');
        $(this).attr('id', id);
        return $markup.append("<a href='#" + id + "'>" + text + "</a>");
      });
      return $markup;
    }
  };

}).call(this);
