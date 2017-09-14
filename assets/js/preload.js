document.addEventListener("DOMContentLoaded", function() {
  var images = new Array();

  function preload(images) {
    if (images) {
      for (var i = 0; i < images.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
      }
    } else {
      for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
      }
    }
  }

  function notify() {
          setTimeout(function(){ 

  document.getElementById("play").style.display = "none";
clearTimeout; 
 
        }, 3000);
  }

  images.onload = notify();

  var responsiveImages = document.querySelectorAll(".js-background-image img");
  var sources = [];
  for (var i = 0; i < responsiveImages.length; i++) {
    var srcset = responsiveImages[i].getAttribute("srcset");
    sources.push(srcset);
  }

  preload(sources);

  preload(
        "assets/images/bkg/1-Cover-large.jpg",
        "assets/images/bkg/2-Intro-large.jpg",
        "assets/images/bkg/4-Rec_Uses-large.jpg",
        "assets/images/bkg/5-Clear_Vision-large.jpg",
        "assets/images/bkg/6-Continuous_Quality_Improvement-large.jpg",
        "assets/images/bkg/8-Collab_Partnerships-large.jpg",
        "assets/images/bkg/9-Family_Engagement-large.jpg",
        "assets/images/bkg/10-Sustainability-large.jpg",
        "assets/images/bkg/11-Diversity_Access_Inclusivity-large.jpg",
        "assets/images/bkg/12-Safe-and-Supporting-Environment-large.jpg",
        "assets/images/bkg/13-Active_Engaged_Learning-large.jpg",
        "assets/images/bkg/14-Skill_Building-large.jpg",
        "assets/images/bkg/15-Youth_Voice_Leadership-large.jpg",
        "assets/images/bkg/16-Healthy_Choice_Behavior-large.jpg",
        "assets/images/bkg/17-Work_Group_Process-large.jpg",
        "assets/images/bkg/19-Last-large.jpg",
        "assets/images/bkg/intro-large.jpg",
      "assets/images/menu.png"
   );
});
