document.addEventListener("DOMContentLoaded", function() {
  window.slides = [];
  var sections = document.getElementById("sections");

  for (var i = 0; i < window.slideData.length; i++) {
    var slide = new Slide();
    slide.initialize({
      id: i,
      data: slideData[i]
    });

    // Add the slide to the global slides array
    window.slides.push(slide);

    // Append the slide to the section element
    sections.appendChild(slide.slide);
  }
});
