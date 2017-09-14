document.addEventListener("DOMContentLoaded", function() {
  /**
   * Handles toggle click events
   * @param {object} evt - event from click
   */
  function toggleVisibility(evt) {
 
 /**
   * Commented out so clicking on TOC links closes TOC
    evt.preventDefault();   */

    var toggle = evt.currentTarget;
    var toggleID = toggle.getAttribute("data-toggle");
    var e = document.getElementById(toggleID);
    if (e.style.display == "block") e.style.display = "none";
    else e.style.display = "block";
  }

  // Collect all the toggles
  var toggles = document.querySelectorAll("[data-toggle]");

  // Loop through each toggle and apply event listeners
  for (var i = 0; i < toggles.length; i++) {
    var toggle = toggles[i];
    toggle.addEventListener("click", toggleVisibility);
  }
});
