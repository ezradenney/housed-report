(function() {
  /**
   * Create slide element
   * @param {string} id - unique id of the slide
   * @return {object} node - DOM element
   */
  function createSlide(id) {
    var slide = document.createElement("section");
    slide.className = "step";
    slide.setAttribute("id", "step-" + id);
      var spanNode = document.createElement("span");
      spanNode.className = "stepspan";
      slide.appendChild(spanNode);
    return slide;
  }

  /**
   * Create header element
   * @param {string} header - text
   * @return {object} node - DOM element
   */
  function createHeader(header) {
    if (typeof header !== "unidefined" && header.length > 0) {
      var node = document.createElement("h2");
      node.className = "title";
      var text = document.createTextNode(header);
      node.appendChild(text);
      return node;
    } else {
      return false;
    }
  }

  function createIcon(iconUrl) {
    if (!!iconUrl) {
      var node = document.createElement("img");
      node.className = "icon";
      node.setAttribute("src", "assets/images/icons/" + iconUrl);
      node.setAttribute("alt", "icon");
      node.setAttribute("aria-hidden", true);
      return node;
    } else {
      return false;
    }
  }

  /**
   * Create body element
   * @param {string} body - html of body content
   * @return {object} node - DOM element
   */
  function createBody(body) {
    var node = document.createElement("div");
    node.className = "example example-dotted";
    node.innerHTML = body;
    return node;
  }

  /**
   * Create section header
   * @param {number} id - slide id
   * @param {string} text - text to populate node
   * @return {object} node - DOM element
   */
  function createSectionHeader(id, text) {
    if (typeof text !== "undefined" && text.length > 0) {
      var node = document.createElement("div");
      node.className = "topbar";
      node.setAttribute("id", "container-" + id);
      var textNode = document.createElement("span");
      textNode.innerHTML = text;
      node.appendChild(textNode);
      return node;
    } else {
      return false;
    }
  }

  /**
   * Create the bkg element
   * @param {number} id - slide number matching the image filename
   * @return {object} node - DOM element
   */
  function createBkg(bkgImage) {
    var node = document.createElement("div");
    node.className = "bgbg js-background-image";
    var innerHTML =
      "<picture>" +
      '<!--[if IE 9]><video style="display: none;"><![endif]-->' +
      '<source srcset="assets/images/bkg/' +
      bkgImage.large +
      '" media="(min-width: 400px)">' +
      "<!--[if IE 9]></video><![endif]-->" +
      '<img srcset="assets/images/bkg/' +
      bkgImage.small +
      '">' +
      "</picture>";
    // node.style.backgroundImage = "url(assets/images/bkg/" + id + ".jpg)";
    node.innerHTML = innerHTML;
    return node;
  }

  // Slide Instance
  var Slide = function() {};

  /**
   * Initialize new Slide
   * @param {object} config - slide settings
   * @param {number} config.id - unique id for slide
   * @param {object} config.data - to populate slide content
   * @param {string} config.data.section - text for section header
   * @param {string} config.data.header - text for header
   * @param {string} config.data.body - html string for body content
   */
    Slide.prototype.initialize = function(config) {
    this.id = config.id;
    this.slide = createSlide(config.id);
    this.bkg = createBkg(config.data.bkgImage);
    this.sectionHeader = createSectionHeader(config.id, config.data.section);
    this.header = createHeader(config.data.header);
    this.body = createBody(config.data.body);
    this.icon = createIcon(config.data.icon);

    this.content = document.createElement("div");
    this.content.className = "step-content";
    !!this.header && this.content.appendChild(this.header);
    this.content.appendChild(this.body);

    this.slide.appendChild(this.bkg);
    !!this.sectionHeader && this.slide.appendChild(this.sectionHeader);
    !!this.icon && this.slide.appendChild(this.icon);
    this.slide.appendChild(this.content);

    this.slide.style.opacity = 1;

    document.body.appendChild(this.slide);
  };

  /**
   * Makes the slide visible
   */
  Slide.prototype.show = function() {
    this.slide.style.visibility = "visible";
    this.slide.style.zindex = 1;
  };

  /**
   * Hides the slide from the view
   */
  Slide.prototype.hide = function() {
    this.slide.style.visibility = "hidden";
    this.slide.style.zindex = 0;
  };

  window.Slide = Slide;
})();
