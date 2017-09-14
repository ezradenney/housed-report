//------------------------------------------------------------------------
// Applies current <picture> image source as “background-image” on the target wrapper
//
// Requires “object-fit” test in Modernizr
//
// Example:
//
// <div class="js-background-image">
//   <picture>
//     <!--[if IE 9]><video style="display: none;"><![endif]-->
//     <source srcset="<%= asset_path("dev/800x450.png") %>" media="(min-width: 400px)">
//     <!--[if IE 9]></video><![endif]-->
//     <img srcset="<%= asset_path("dev/400x225.png") %>">
//   </picture>
// </div>
//------------------------------------------------------------------------
"use strict";

var documentClasses = document.documentElement.className;

// Check for Modernizr “object-fit” classes (most resilient method)
// We could also check Modernizr.objectfit assuming Modernizr is in the global scope,
// or we could use CSS.supports('object-fit', 'cover') once it’s fully supported.
var supportsObjectFit = documentClasses.indexOf(" object-fit") !== -1;
var noObjectFit = documentClasses.indexOf("no-object-fit") !== -1;

// Warn if “object-fit” test is not being performed by Modernizr
if (!supportsObjectFit && !noObjectFit) {
  console.warn("Modernizr is missing the “object-fit” test");
}

var BackgroundPicture = function(config) {
  var backgroundPicture = {
    initialize: function(config) {
      // Don’t run if “object-fit” is supported
      if (supportsObjectFit) {
        return false;
      }

      var self = this;
      // apply configuration to class instance
      Object.assign(this, config);
      // set whether logging should display
      this.debug = false;

      // Save reference to <img> tag
      this.img = this.el.getElementsByTagName("img")[0];

      // Check if “currentSrc” is supported
      this.isModern = typeof this.img.currentSrc !== "undefined";

      // Bind to onload event, which will fire whenever the source changes
      this.img.onload = function() {
        self.update("onload");
      };

      // Update if “onload” event fired before this script was parsed
      // (we know this happened if “currentSrc” has already been set)
      if (this.isModern && this.img.currentSrc.length) {
        this.update("init");
      } else if (this.img.src.length) {
        this.update("old init");
      }
    },

    // Update parent wrapper
    update: function(msg) {
      this.debug &&
        console.log(
          msg,
          "currentSrc: " + this.img.currentSrc,
          "src: " + this.img.src
        );
      var source = this.isModern ? this.img.currentSrc : this.img.src;

      if (!source.length) {
        this.el.style.backgroundImage = "";
      } else {
        this.el.style.backgroundImage = "url('" + source + "')";
      }
    }
  };
  backgroundPicture.initialize(config);

  return backgroundPicture;
};

// Only run if CSS “object-fit” isn’t supported
if (!supportsObjectFit) {
  var els = document.querySelectorAll(".js-background-image");

  for (var i = 0, len = els.length; i < len; i++) {
    new BackgroundPicture({ el: els[i] });
  }
}
