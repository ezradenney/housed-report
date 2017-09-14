(function() {
  // Slide Instance
  var TableOfContents = function(config) {
    console.log(config);
    this.initialize(config);
  };

  function createLink(id, data) {
    var li = document.createElement("li");
    var anchor = document.createElement("a");
    anchor.setAttribute("href", "#step-" + id);
    anchor.innerHTML = data.section;
    li.appendChild(anchor);
    return li;
  }

  /**
   * Initialize new Slide
   * @param {object} config - slide settings
   * @param {object} config.el - dom element to append the Toc To
   * @param {object} config.data - to populate the links
   */
  TableOfContents.prototype.initialize = function(config) {
    this.el = config.el;
    this.data = config.data;

    var ul = document.createElement("ul");

    for (var i = 0; i < this.data.length; i++) {
      this.data[i];
      var link = createLink(i, this.data[i]);
      ul.appendChild(link);
    }

    this.el.appendChild(ul);
  };

  // /**
  //  * Makes the slide visible
  //  */
  // TableOfContents.prototype.show = function() {
  //   this.slide.style.opacity = 1;
  // };
  //
  // /**
  //  * Hides the slide from the view
  //  */
  // TableOfContents.prototype.hide = function() {
  //   this.slide.style.opacity = 0;
  // };

  window.tableOfContents = new TableOfContents({
    el: document.getElementById("toc"),
    data: window.slideData
  });
})();
