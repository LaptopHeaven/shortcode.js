// Generated by CoffeeScript 1.7.1

/*
  shortcode.js Services
  Collection of shortcode replacements
  by Nic Aitch @nicinabox
  MIT License
 */

(function() {
  $.fn.shortcode.services = {
    overview: function(el, options) {
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
    },
    wufoo: function(el, options) {
      var markup, par, scr, script;
      options = $.merge({
        userName: options.username,
        formHash: options.formhash,
        async: true
      }, options);
      delete options.username;
      delete options.formhash;
      script = document.createElement('script');
      script.src = ("https:" === document.location.protocol ? "https://" : "http://") + "wufoo.com/scripts/embed/form.js";
      script.onload = script.onreadystatechange = function() {
        var form, rs;
        rs = this.readyState;
        if (rs) {
          if (rs !== "complete") {
            if (rs !== "loaded") {
              return;
            }
          }
        }
        try {
          form = new WufooForm();
          form.initialize(options);
          return form.display();
        } catch (_error) {}
      };
      scr = document.getElementsByTagName('script')[0];
      par = scr.parentNode;
      par.insertBefore(script, scr);
      markup = "<div id=\"wufoo-" + options.formHash + "\">\n  Fill out my <a href=\"http://" + options.userName + ".wufoo.com/forms/" + options.formHash + "\">online form</a>.\n</div>";
      return markup;
    }
  };

}).call(this);
