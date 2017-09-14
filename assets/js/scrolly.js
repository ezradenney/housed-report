/**
 * scrollVis - encapsulates
 * all the code for the visualization
 * using reusable charts pattern:
 * http://bost.ocks.org/mike/chart/
 */
var scrollVis = function() {
  // constants to define the size
  // and margins of the vis area.

  var width = window.innerWidth,
    height = window.innerHeight;

  var margin = {
    top: 10,
    left: 20,
    bottom: 80,
    right: 10
  };

  // Keep track of which visualization
  // we are on and which was the last
  // index activated. When user scrolls
  // quickly, we want to call all the
  // activate functions that they pass.
  var lastIndex = -1;
  var activeIndex = 0;

  // main svg used for visualization
  var svg = null;

  // d3 selection that will be used
  // for displaying visualizations
  var g = null;

  // When scrolling to a new section
  // the activation function for that
  // section is called.
  var activateFunctions = [];
  // If a section has an update function
  // then it is called while scrolling
  // through the section with the current
  // progress through the section.
  var updateFunctions = [];

  /**
   * chart
   *
   * @param selection - the current d3 selection(s)
   *  to draw the visualization in. For this
   *  example, we will be drawing it in #vis
   */
  var chart = function(selection) {
    selection.each(function() {
      setupSections();
    });
  };

  /**
   * setupVis - creates initial elements for all
   * sections of a visualization.
   */
  setupVis = function() {};

  /**
   * setupSections - each section is activated
   * by a separate function. Here we associate
   * these functions to the sections based on
   * the section's index.
   *
   */
  setupSections = function() {
    // activateFunctions are called each
    // time the active section changes

    activateFunctions[0] = showTitle0;
    activateFunctions[1] = showTitle1;
    activateFunctions[2] = showTitle2;
    activateFunctions[3] = showTitle3;
    activateFunctions[4] = showTitle4;
    activateFunctions[5] = showTitle5;
    activateFunctions[6] = showTitle6;
    activateFunctions[7] = showTitle7;
    activateFunctions[8] = showTitle8;
    activateFunctions[9] = showTitle9;
    activateFunctions[10] = showTitle10;
    activateFunctions[11] = showTitle11;
    activateFunctions[12] = showTitle12;
    activateFunctions[13] = showTitle13;

    activateFunctions[14] = showTitle14;
    activateFunctions[15] = showTitle15;
    activateFunctions[16] = showTitle16;
    activateFunctions[17] = showTitle17;
    activateFunctions[18] = showTitle18;

    activateFunctions[19] = showTitle19;
    activateFunctions[20] = showTitle20;
    activateFunctions[21] = showTitle21;
    activateFunctions[22] = showTitle22;
    activateFunctions[23] = showTitle23;

    // updateFunctions are called while
    // in a particular section to update
    // the scroll progress in that section.
    // Most sections do not need to be updated
    // for all scrolling and so are set to
    // no-op functions.
    for (var i = 0; i < 24 + 1; i++) {
 //////   for (var i = 0; i < window.slides.length + 1; i++) {
      updateFunctions[i] = function() {};
    }

      };

  /**
   * ACTIVATE FUNCTIONS
   *
   * These will be called their
   * section is scrolled to.
   *
   * General pattern is to ensure
   * all content for the current section
   * is transitioned in, while hiding
   * the content for the previous section
   * as well as the next section (as the
   * user may be scrolling up or down).
   *
   */

  /**
   *
   */
   function showTitle0() {
    //////////////
    ////////////
    /////////

    ////////////////////////////////////////////
    ///////// SET INITIAL CONTAINER VISIBILITY
    ////////////////////////////////////////////

    var vis = document.getElementById("vis");
    vis.setAttribute("style", "display:none; ");
    
    var logobar = document.getElementById("logobar");
    logobar.setAttribute("style", "display:none; ");

 
    var logoOpener = document.getElementById("logoOpener");
    logoOpener.setAttribute("style", "display:inline-block; ");


     
 

    ////////////////////////////////////////////
    ////////////////////////////////////////////
    /////////////////////////////

    ///////////
    ///////////
  }

  /**
   *
   */
  function showTitle1() {
    ////////////////////////////////////////////
    ////////// Video item to turn off
    //////////
    ///////// var videoplay = document.getElementById('bgvid0');
    ///////// videoplay.setAttribute("style", "display:none; ");
    ///////////////////////////////////////////

    ////////////////////////////////////////////
    ////////// Scroll prompt image turned off
    var scrollimg = document.getElementById("scrollimg");
    scrollimg.setAttribute("style", "display:none; ");


    var logobar = document.getElementById("logobar");
    logobar.setAttribute("style", "display:block; ");

    var logoOpener = document.getElementById("logoOpener");
    logoOpener.setAttribute("style", "display:none; ");



  
 
  }

  /**
   *
   *
   */
   
   
  function showTitle2() {}

  /////////////
  //////////

  /**
   *
   */
  function showTitle3() {}

  ///////
  ///////

  /**
   *
   *
   */
  function showTitle4() {}

  /////
  ////////

  /**
   *
   */
  function showTitle5() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle6() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle7() {}


  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle8() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle9() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle10() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle11() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle12() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle13() {}

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle14() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle15() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle16() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle17() {}

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle18() {}

  ////////////////
  /////////////////////////
  ///////////////////////



  function showTitle19() {}

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle20() {}

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle21() {}

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle22() {

         
        var titleCloser = document.getElementById("titleCloser");
    titleCloser.setAttribute("style", "display:none; ");


  }

 ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle23() {
 

        var titleCloser = document.getElementById("titleCloser");
    titleCloser.setAttribute("style", "display:inline-block; ");



  }

  ////////////////
  /////////////////////////
  ///////////////////////








  ////////////////
  /////////////////////////
  ///////////////////////
  /**
   * UPDATE FUNCTIONS
   *
   * These will be called within a section
   * as the user scrolls through it.
   *
   * We use an immediate transition to
   * update visual elements based on
   * how far the user has scrolled
   *
   */

  /**



  /**
   * DATA FUNCTIONS
   *
   * Used to coerce the data into the
   * formats we need to visualize
   *
   */

  /**
   * activate -
   *
   * @param index - index of the activated section
   */
  chart.activate = function(index) {
    activeIndex = index;
    var sign = activeIndex - lastIndex < 0 ? -1 : 1;
    var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(function(i) {
      activateFunctions[i]();
    });
    lastIndex = activeIndex;
  };

  /**
   * update
   *
   * @param index
   * @param progress
   */
  chart.update = function(index, progress) {
    updateFunctions[index](progress);
  };

  // return chart function
  return chart;
};

/**
 * display - called once data
 * has been loaded.
 * sets up the scroller and
 * displays the visualization.
 *
 * @param data - loaded tsv data
 */
function display() {
  // create a new plot and
  // display it
  var plot = scrollVis();
  d3.select("#vis")
    ////  .datum(data)
    .call(plot);

  // setup scroll functionality
  var scroll = scroller().container(d3.select("#graphic"));

  // pass in .step selection as the steps
  scroll(d3.selectAll(".step"));

  // setup event handling
  scroll.on("active", function(index) {
    // highlight current step text
    for (var i = 0; i < window.slides.length; i++) {
      var slide = window.slides[i];
      if (i + 1 === index) {
        slide.show();
        console.log("show");
      } else {
        slide.hide();
        console.log("hide");
      }
    }

    ////////////////document.body.style.backgroundImage = "url("+index+".jpg)";

    d3.selectAll("#container" + index).style("display", function(d, i) {
      return i == index ? "none" : "inline-block";
    });

    d3.selectAll("#container" + (index - 1)).style("display", function(d, i) {
      return i == index ? "inline-block" : "none";
    });

    d3.selectAll("#container" + (index + 1)).style("display", function(d, i) {
      return i == index ? "inline-block" : "none";
    });

    ///////////var getBG = document.getElementById( 'container'+index );
    ///////    getBG.setAttribute("style", "background-image:url("+index+".jpg); "  );

    ///////// console.log(index);

    // activate current section
    plot.activate(index);
  });

  scroll.on("progress", function(index, progress) {
    plot.update(index, progress);
  });
}

// load data and display
document.addEventListener("DOMContentLoaded", function() {
  display();
});

window.addEventListener("resize", onResize);

function onResize(h) {
  var height = window.windowHeight;
  var width = window.windowWidth;

  var eBG = document.getElementById("bg" + h);
  /////eBG.style.height = eBG.parentElement.clientHeight;
}
